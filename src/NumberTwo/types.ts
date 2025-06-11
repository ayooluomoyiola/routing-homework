export type Course = {
  code: string;
  title: string;
  description: string;
};

export type Student = {
  id: number;
  name: string;
  grade: "A" | "B" | "C" | "D" | "E" | "F";
  courses: Course[];
};
