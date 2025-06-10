import { useState } from "react";
import "./githubreposearch.css";
import axios from "axios";
import { parse } from "date-fns";

type Repo = {
  id: number;
  full_name: string;
  html_url: string;
  stargazers_count: number;
  description: string;
  updated_at: string;
};

const GitHubRepoSearch = () => {
  const [query, setQuery] = useState("");
  const [repos, setRepos] = useState<Repo[]>([]);
  const [loading, setLoading] = useState(false);
  const [resultsPerPage, setResultsPerPage] = useState("10");
  const [sort, setSort] = useState("bestMatch");
  const [order, setOrder] = useState("desc");

  const formattedDate = (dateInput: string) => {
    const date = dateInput.split("T")[0];
    const parseDate = parse(date, "yyyy-MM-dd", new Date());
    const formatted = new Intl.DateTimeFormat("en-UK", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
    return formatted.format(parseDate);
  };

  const searchRepos = async () => {
    setLoading(true);

    try {
      const sortParam = sort === "bestMatch" ? "" : `&sort=${sort}`;
      const orderParam = `&order=${order}`;
      const perPageParam = `&per_page=${resultsPerPage}`;

      const response = await axios.get(
        `https://api.github.com/search/repositories?q=${query}${sortParam}${orderParam}${perPageParam}`
      );

      setRepos(response.data.items);
    } catch (error) {
      console.error("Error fetching data", error);
    }

    setLoading(false);
  };

  return (
    <div className="main">
      <h1>GitHub Repository Search</h1>

      <div className="query">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search repos"
        />
        <button onClick={searchRepos} disabled={loading}>
          Search
        </button>
      </div>

      <div className="selects">
        <select
          name="resultsPerPage"
          id="resultsPerPage"
          value={resultsPerPage}
          onChange={(e) => setResultsPerPage(e.target.value)}
        >
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="50">50</option>
        </select>

        <select
          name="sort"
          id="sort"
          value={sort}
          onChange={(e) => setSort(e.target.value)}
        >
          <option value="bestMatch">Best Match</option>
          <option value="stars">Stars</option>
          <option value="updated">Most recently updated</option>
        </select>

        <select
          name="order"
          id="order"
          value={order}
          onChange={(e) => setOrder(e.target.value)}
        >
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </select>
      </div>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {repos.map((repo) => (
            <div key={repo.id}>
              <li className="repo-card">
                <a
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {repo.full_name}
                </a>
                <p className="repo-desc">{repo.description}</p>
                <div className="last">
                  <p>{repo.stargazers_count} stars</p>
                  <p>•</p>
                  <p>Updated at {formattedDate(repo.updated_at)}</p>
                </div>
              </li>
            </div>
          ))}
        </ul>
      )}
    </div>
  );
};

export default GitHubRepoSearch;
