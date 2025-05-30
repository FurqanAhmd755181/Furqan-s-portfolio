import { FaGraduationCap, FaBriefcase } from "react-icons/fa";

const Resume = () => {
  const education = [
    {
      title: "Bachelor of Software Engineering",
      institution: "COMSATS University, Abbottabad Campus",
      date: "2021 — 2025",
      description:
        "Pursuing a Bachelor’s degree in Software Engineering with a focus on software development, systems design, and programming principles.",
    },
    {
      title: "Intermediate in Pre-Engineering",
      institution: "Tipu Shaheed School and College, Swat",
      date: "2018 — 2020",
      description:
        "Completed FSc in Pre-Engineering with emphasis on mathematics, physics, and computer science.",
    },
    {
      title: "Matriculation",
      institution: "Tipu Shaheed School, Swat",
      date: "2017 — 2018",
      description:
        "Completed high school education with a science specialization.",
    },
  ];

  const experience = [
    {
      title: "Full-Stack Web Developer",
      company: "Fiverr (Freelance Platform)",
      date: "2022 — Present",
      description:
        "Providing freelance full-stack web development services to clients across various industries, focusing on responsive design, APIs, and performance optimization.",
    },
    {
      title: "Full-Stack Web Developer",
      company: "Upwork (Freelance Platform)",
      date: "2022 — Present",
      description:
        "Delivering full-stack web solutions to international clients, including frontend and backend development, REST API integration, and deployment.",
    },
    {
      title: "Full-Stack Developer",
      company: "Firnas.tech (Tech Company)",
      date: "2024 — 2025",
      description:
        "Developed multiple modern web applications with scalable architectures and integrated third-party services, contributing to the firm’s client solutions.",
    },
  ];

  const skills = [
    { name: "Web Design", value: 80 },
    { name: "Frontend", value: 85 },
    { name: "Backend", value: 80 },
    { name: "Documentation", value: 70 },
  ];

  const technologies = [
    "HTML5",
    "CSS3",
    "Tailwind CSS",
    "Bootstrap",
    "JavaScript",
    "TypeScript",
    "React",
    "React Native",
    "Node.js",
    "Express",
    "MongoDB",
    "PostgreSQL",
    "Firebase",
    "Git",
    "GitHub",
    "GitHub Pages",
    "Vercel",
    "VS Code",
    "REST API",
    "JSON",
    "Figma",
    "C++",
    "C",
    "GraphQL",
    "Java",
    "PowerShell",
    "Python",
    "AWS",
    "jQuery",
    "JWT",
    "Next.js",
    "NPM",
    "MUI",
    "Amazon DynamoDB",
    "MySQL",
    "Adobe",
  ];

  return (
    <div className="text-yellow-100  font-sans text-left">
      <div className="max-w-5xl mx-auto space-y-20">
        {/* EDUCATION SECTION */}
        <div className="relative pl-12">
          <div className="absolute top-2 left-3 text-yellow-400 text-xl">
            <FaGraduationCap />
          </div>
          <div className="absolute top-8 left-5 w-[2px] h-[calc(100%-2rem)] bg-yellow-500" />
          <h2 className="text-2xl font-bold mb-10 text-yellow-100 pl-2">
            Education
          </h2>
          {education.map((edu, index) => (
            <div key={index} className="mb-10 relative pl-6">
              <div className="absolute -left-3 top-1.5 w-3 h-3 bg-yellow-400 rounded-full border-2 border-black" />
              <h3 className="text-lg font-semibold text-white">{edu.title}</h3>
              <p className="text-sm text-yellow-400">{edu.institution}</p>
              <p className="text-sm text-yellow-400 mb-1">{edu.date}</p>
              <p className="text-sm text-gray-300">{edu.description}</p>
            </div>
          ))}
        </div>

        {/* EXPERIENCE SECTION */}
        <div className="relative pl-12">
          <div className="absolute top-2 left-3 text-yellow-400 text-xl">
            <FaBriefcase />
          </div>
          <div className="absolute top-8 left-5 w-[2px] h-[calc(100%-2rem)] bg-yellow-500" />
          <h2 className="text-2xl font-bold mb-10 text-yellow-100 pl-2">
            Experience
          </h2>
          {experience.map((exp, index) => (
            <div key={index} className="mb-10 relative pl-6">
              <div className="absolute -left-3 top-1.5 w-3 h-3 bg-yellow-400 rounded-full border-2 border-black" />
              <h3 className="text-lg font-semibold text-white">{exp.title}</h3>
              <p className="text-sm text-yellow-400">{exp.company}</p>
              <p className="text-sm text-yellow-400 mb-1">{exp.date}</p>
              <p className="text-sm text-gray-300">{exp.description}</p>
            </div>
          ))}
        </div>

        {/* TECHNOLOGIES SECTION */}
        <div>
          <h2 className="text-2xl font-bold mb-8 text-yellow-100">
            Technologies I Use
          </h2>
          <div className="flex flex-wrap gap-4 bg-zinc-900 rounded-xl p-6">
            {technologies.map((tech, index) => (
              <span
                key={index}
                className="bg-yellow-500 text-black px-4 py-1 rounded-full text-sm font-semibold shadow hover:scale-105 transition"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* SKILLS SECTION */}
        {/* SKILLS SECTION */}
        <div>
          <h2 className="text-2xl font-bold mb-8 text-yellow-100">My Skills</h2>
          <div className="bg-zinc-900 rounded-xl p-6 space-y-5">
            {skills.map((skill, index) => (
              <div key={index}>
                <div className="flex justify-between mb-1 text-sm font-semibold">
                  <span>{skill.name}</span>
                  <span>{skill.value}%</span>
                </div>
                <div className="w-full h-2 bg-gray-700 rounded">
                  <div
                    className="h-full bg-yellow-400 rounded"
                    style={{ width: `${skill.value}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
