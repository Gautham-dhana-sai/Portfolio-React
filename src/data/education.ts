export interface EducationItem {
  institution: string;
  qualification: string;
  major: string;
  period: string;
  score: string;
  scoreLabel: string;
  location: string;
  logo: string;
  description: string;
}

export const educationList: EducationItem[] = [
  {
    institution: "Raghu Engineering College",
    qualification: "Bachelor of Technology (B.Tech)",
    major: "Computer Science and Engineering",
    period: "2020 – 2023",
    score: "8.6 CGPA",
    scoreLabel: "Graduation Score",
    location: "Visakhapatnam, Andhra Pradesh",
    logo: "/logos/raghu.png",
    description:
      "Graduated with a strong academic foundation in algorithms, data structures, database management systems, computer networks, and full-stack software development."
  },
  {
    institution: "Government Polytechnic College, Kancherpalem",
    qualification: "Diploma",
    major: "Mechanical Engineering",
    period: "2017 – 2020",
    score: "81%",
    scoreLabel: "Final Aggregate",
    location: "Visakhapatnam, Andhra Pradesh",
    logo: "/logos/govtpoly.png",
    description:
      "Developed foundational engineering principles, technical precision, analytical problem-solving, and practical workshop engineering before pivoting into computer science."
  },
  {
    institution: "Priyanka's Vidyodaya High School",
    qualification: "Secondary School Certificate (SSC)",
    major: "General Secondary Education",
    period: "Completed 2017",
    score: "10 GPA",
    scoreLabel: "Board Exam Result",
    location: "Visakhapatnam, Andhra Pradesh",
    logo: "/logos/pvhs.png",
    description:
      "Achieved a perfect 10 GPA in the Andhra Pradesh Secondary School Certificate examinations, exhibiting early academic consistency."
  }
];
