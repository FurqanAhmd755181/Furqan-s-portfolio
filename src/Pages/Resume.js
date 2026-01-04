import { FaGraduationCap, FaBriefcase, FaProjectDiagram } from "react-icons/fa";

const Resume = () => {
  const education = [
    {
      title: "Bachelor of Science in Software Engineering",
      institution: "COMSATS University Islamabad, Abbottabad Campus",
      date: "Mar 2021 — Jul 2025",
      description:
        "Focused on software engineering principles, full-stack development, system design, and final year project using Machine Learning and image processing.",
    },
  ];

  const experience = [
    {
      title: "MERN Stack Developer",
      company: "Createch IT Solutions (Pvt.) Ltd. — Hybrid",
      date: "Nov 2023 — Nov 2025",
      description:
        "Developed and maintained production-grade MERN applications. Built REST APIs with Node.js & Express, integrated React/Next.js frontends, implemented JWT authentication, optimized MongoDB queries, and worked with CI/CD pipelines.",
    },
  ];

  const projects = [
    {
      title: "Authentication System (React + Node)",
      link: "https://github.com/FurqanAhmd755181/Authentication-React-Node",
      date: "Sep 2025",
      description:
        "Secure authentication system with JWT, protected routes, password hashing, and session management using React and Node.js.",
    },
    {
      title: "Plant Diagnose System (FYP)",
      link: "https://github.com/FurqanAhmd755181/FYP-Plant-diagnose-system-",
      date: "Apr 2025 — Jul 2025",
      description:
        "ML-based plant disease diagnosis system using image processing. Achieved 90%+ accuracy with REST APIs and cloud image storage.",
    },
    {
      title: "Travel Booking System",
      link: "https://github.com/FurqanAhmd755181/travel-booking-system",
      date: "Nov 2025 — Jan 2026",
      description:
        "Vehicle listing and booking system with seat availability, admin dashboard, and booking management features.",
    },
    {
      title: "Intrusion Detection System (IDS)",
      link: "https://github.com/FurqanAhmd755181/IDS",
      date: "Aug 2025 — Sep 2025",
      description:
        "React and Tailwind-based dashboard for real-time intrusion monitoring and network activity alerts.",
    },
    {
      title: "Stripe Payment Integration",
      link: "https://github.com/FurqanAhmd755181/StripePayement",
      date: "Oct 2024",
      description:
        "Integrated Stripe payment gateway with secure checkout flow, payment intents, and error handling.",
    },
  ];

  const skillGroups = [
    {
      category: "Frontend",
      skills: [
        "React",
        "Next.js",
        "JavaScript (ES6+)",
        "HTML",
        "CSS",
        "Tailwind CSS",
        "MUI",
        "Bootstrap",
      ],
    },
    {
      category: "Backend",
      skills: ["Node.js", "Express.js", "REST APIs", "JWT Authentication"],
    },
    {
      category: "Databases",
      skills: ["MongoDB", "PostgreSQL", "MySQL", "Firebase"],
    },
    {
      category: "DevOps & Tools",
      skills: ["Git", "GitHub", "GitHub Actions", "CI/CD", "Vercel", "Netlify"],
    },
    {
      category: "Security & Performance",
      skills: [
        "Secure Coding",
        "Password Hashing",
        "API Security",
        "Performance Optimization",
      ],
    },
  ];

  return (
    <div className="text-yellow-100 font-sans text-left">
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
              <h3 className="text-lg font-semibold text-white">
                {edu.title}
              </h3>
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
              <h3 className="text-lg font-semibold text-white">
                {exp.title}
              </h3>
              <p className="text-sm text-yellow-400">{exp.company}</p>
              <p className="text-sm text-yellow-400 mb-1">{exp.date}</p>
              <p className="text-sm text-gray-300">{exp.description}</p>
            </div>
          ))}
        </div>

        {/* PROJECTS SECTION */}
        <div>
          <h2 className="text-2xl font-bold mb-8 text-yellow-100 flex items-center gap-2">
            <FaProjectDiagram className="text-yellow-400" />
            Projects
          </h2>
          <div className="bg-zinc-900 rounded-xl p-6 space-y-5">
            {projects.map((project, index) => (
              <div key={index}>
                <h3 className="text-lg font-semibold text-white hover:text-yellow-300 transition">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {project.title}
                  </a>
                </h3>
                <p className="text-sm text-yellow-400">{project.date}</p>
                <p className="text-sm text-gray-300">
                  {project.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* SKILLS SECTION */}
        <div>
          <h2 className="text-2xl font-bold mb-8 text-yellow-100">
            Technical Skills
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {skillGroups.map((group, index) => (
              <div key={index} className="bg-zinc-900 rounded-xl p-6">
                <h3 className="text-yellow-400 font-semibold mb-3">
                  {group.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="bg-yellow-500 text-black px-3 py-1 rounded-full text-xs font-semibold"
                    >
                      {skill}
                    </span>
                  ))}
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
