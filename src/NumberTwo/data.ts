import type { Student } from "./types";

export const students: Student[] = [
  {
    id: 1,
    name: "Chinedu Okafor",
    grade: "A",
    courses: [
      {
        code: "CSC101",
        title: "Intro to Computer Science",
        description: "Basics of computer systems, programming, and algorithms.",
      },
      {
        code: "MTH102",
        title: "Calculus I",
        description: "Introduction to differential and integral calculus.",
      },
    ],
  },
  {
    id: 2,
    name: "Amina Bello",
    grade: "B",
    courses: [
      {
        code: "CSC101",
        title: "Intro to Computer Science",
        description: "Basics of computer systems, programming, and algorithms.",
      },
      {
        code: "GST103",
        title: "Nigerian Peoples and Culture",
        description: "Study of Nigeria's cultural diversity and heritage.",
      },
    ],
  },
  {
    id: 3,
    name: "Tolu Adebayo",
    grade: "C",
    courses: [
      {
        code: "PHY101",
        title: "General Physics",
        description: "Mechanics, thermodynamics, and waves.",
      },
      {
        code: "CSC101",
        title: "Intro to Computer Science",
        description: "Basics of computer systems, programming, and algorithms.",
      },
    ],
  },
  {
    id: 4,
    name: "Ngozi Nwachukwu",
    grade: "A",
    courses: [
      {
        code: "BIO101",
        title: "General Biology",
        description: "Introduction to living organisms and biological systems.",
      },
      {
        code: "CHE101",
        title: "General Chemistry",
        description: "Fundamentals of inorganic and organic chemistry.",
      },
    ],
  },
  {
    id: 5,
    name: "Gbenga Alabi",
    grade: "D",
    courses: [
      {
        code: "LAW101",
        title: "Introduction to Law",
        description: "Overview of the Nigerian legal system and jurisprudence.",
      },
      {
        code: "GST101",
        title: "Use of English",
        description: "Development of writing and communication skills.",
      },
    ],
  },
];
