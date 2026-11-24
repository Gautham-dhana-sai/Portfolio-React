export interface EducationItem {
  id: string;
  institution: string;
  shortName: string;
  qualification: string;
  fieldOfStudy?: string;
  year: string;
  achievement: string;
  achievementLabel: string;
  location: string;
  mapQuery: string;
  description: string;
  keyHighlights: string[];
}

export const educationList: EducationItem[] = [
  {
    id: "raghu-eng",
    institution: "Raghu Engineering College",
    shortName: "Raghu Eng. College",
    qualification: "B.Tech in Computer Science Engineering",
    fieldOfStudy: "Computer Science & Engineering",
    year: "2023",
    achievement: "8.6 CGPA",
    achievementLabel: "Cumulative Grade Point Average",
    location: "Visakhapatnam, Andhra Pradesh, India",
    mapQuery: "Raghu Engineering College Visakhapatnam Andhra Pradesh India",
    description:
      "Completed Bachelor of Technology in Computer Science and Engineering with distinguished academic performance. Built deep foundations in distributed systems, web architectures, algorithms, and full-stack software development while simultaneously starting professional full-time engineering internships.",
    keyHighlights: [
      "Graduated with 8.6 CGPA in Computer Science Engineering",
      "Specialized in Distributed Web Systems, Object-Oriented Design, and Database Architectures",
      "Transitioned directly into enterprise full-stack development at Akrivia Automation during the final year"
    ]
  },
  {
    id: "polytechnic",
    institution: "Government Polytechnic College, Kancherpalem",
    shortName: "Govt. Polytechnic College",
    qualification: "Diploma in Mechanical Engineering",
    fieldOfStudy: "Mechanical Engineering",
    year: "2020",
    achievement: "81%",
    achievementLabel: "Final Aggregate Score",
    location: "Visakhapatnam, Andhra Pradesh, India",
    mapQuery: "Government Polytechnic College Kancherpalem Visakhapatnam Andhra Pradesh India",
    description:
      "Acquired rigorous foundational engineering principles, applied mechanics, analytical problem solving, and technical mathematics with an 81% aggregate score, fostering a disciplined systems-thinking approach.",
    keyHighlights: [
      "Completed Diploma with 81% aggregate score",
      "Built rigorous discipline in systematic engineering, structural analysis, and process design",
      "Transitioned with top academic standing into Computer Science Engineering lateral entry"
    ]
  },
  {
    id: "school",
    institution: "Priyanka's Vidyodaya High School",
    shortName: "Priyanka's Vidyodaya",
    qualification: "SSC (Secondary School Certificate)",
    year: "2017",
    achievement: "10 GPA",
    achievementLabel: "Perfect Cumulative Grade Point Average",
    location: "Visakhapatnam, Andhra Pradesh, India",
    mapQuery: "Priyankas Vidyodaya High School Visakhapatnam Andhra Pradesh India",
    description:
      "Completed secondary education with a perfect 10/10 GPA, recognized for scholastic excellence in mathematics, physical sciences, and analytical foundations.",
    keyHighlights: [
      "Achieved perfect 10.0 / 10.0 GPA in SSC board examinations",
      "Distinction in Mathematics, Physical Sciences, and Logical Reasoning"
    ]
  }
];
