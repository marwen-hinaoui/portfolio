import React, { useEffect, useState } from "react";
import { Mail, Github } from "lucide-react";
import "./index.css";
import orthominder from "./orthominder.png";
import lookup from "./lookup.png";
import educo from "./educo_mockup.png";

export default function App() {
  const [color, setColor] = useState(false);

  function changeColor() {
    if (window.scrollY >= 90) {
      setColor(true);
    } else {
      setColor(false);
    }
  }

  useEffect(function () {
    window.addEventListener("scroll", changeColor);
  }, []);

  return (
    <div className="gradient">
      <div className="container">
        <Navbar color={color} />
        <Header />
        <Skills />
        <Projects />
        <Footer />
      </div>
    </div>
  );
}

function Navbar({ color }) {
  return (
    <nav className={color ? "navbar navbar-bg" : "navbar"}>
      <p>
        <a href="#skills">Skills</a>
      </p>
      <p>
        <a href="#projects">Projects</a>
      </p>
    </nav>
  );
}

function Header() {
  return (
    <header className="header">
      <div className="headerContent">
        <h1 className="title">
          Hi, I'm <span className="title-name">MΛRWΞN HINAOUI</span>
        </h1>
        <p className="subtitle">(🌍Web Developer + 🚀Mobile Developer)</p>
        <p className="about-me">
          I'm a Web and Mobile developer with experience in front-end, back-end, and mobile development. I graduated from the Institute of Technological Studies of Bizerte. I focus on building user-friendly websites and mobile apps, and I'm always looking to learn new technologies and improve my skills.
        </p>
        <div className="contactLinks">
          <a
            data-tooltip="marwenhinaouii@gmail.com"
            data-flow="bottom"
            href="mailto:marwenhinaouii@gmail.com"
            className="iconLink"
          >
            <Mail size={24} />
          </a>
          {/* <a
            data-tooltip="LinkedIn"
            data-flow="bottom"
            href="https://www.linkedin.com/in/vasudevsoni"
            target="_blank"
            rel="noopener noreferrer"
            className="iconLink"
          >
            <Linkedin size={24} />
          </a> */}
          <a
            data-tooltip="GitHub"
            data-flow="bottom"
            href="https://github.com/marwen-hinaoui"
            target="_blank"
            rel="noopener noreferrer"
            className="iconLink"
          >
            <Github size={24} />
          </a>
        </div>
      </div>
    </header>
  );
}

function Skills() {
  return (
    <section className="section">
      <h2 className="sectionTitle" id="skills" tabIndex={-1}>
        Skills
      </h2>
      <div className="skills">
        {skills.map((skill, index) => (
          <SkillCard key={index} skill={skill} />
        ))}
      </div>
    </section>
  );
}

function SkillCard({ skill }) {
  return (
    <div data-tooltip={skill.title} data-flow="bottom">
      <img
        className="skillCard"
        src={skill.image}
        alt={skill.title}
        loading="lazy"
      />
    </div>
  );
}

function Projects() {
  return (
    <section className="section">
      <h2 className="sectionTitle" id="projects" tabIndex={-1}>
        Projects
      </h2>
      <div className="projectGrid">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </section>
  );
}

function ProjectCard({ project }) {
  return (
    <div className={`card project${project.id}`}>
      <img
        src={project.image}
        alt={project.title}
        className="cardImage"
        loading="lazy"
      />
      <div className="cardContent">
        <h3 className="cardTitle">{project.title}</h3>
        <p className="cardDescription">{project.description}</p>

        <ul className="featureList">
          {project.features.map((feature, index) => (
            <li key={index} className="featureItem">
              {feature.emoji} {feature.text}
            </li>
          ))}
        </ul>
        <div className="buttons">
          {project.link && <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="button"
          >
            Live Project ↗️
          </a>}
          {project.github &&<a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="button"
          >
            GitHub Repo ↗️
          </a>}
        </div>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <section className="section">
      <p className="about-me">
        Thanks a ton for visiting my portfolio!{" "}
        <span data-tooltip="Have a good day!" data-flow="bottom">
          🙌
        </span>
      </p>
    </section>
  );
}

const skills = [
    {
    title: "React / React Native",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png",
  },
    {
    title: "JavaScript",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/600px-JavaScript-logo.png",
  },
{
    title: "TypeScript",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg",
  },
   {
    title: "Python",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/1/1f/Python_logo_01.svg",
  },
  

  {
    title: "Ionic",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Ionic_Logo.svg/640px-Ionic_Logo.svg.png",
  },
  {
    title: "Django",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Django_logo.svg/640px-Django_logo.svg.png",
  },
  {
    title: "Firebase",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/46/Touchicon-180.png",
  },
  {
    title: "MySQL",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Antu_mysql-workbench.svg/640px-Antu_mysql-workbench.svg.png",
  },
  {
    title: "MongoDB",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Mongodb-svgrepo-com.svg/640px-Mongodb-svgrepo-com.svg.png",
  },
    {
    title: " HTML",
    image:
      "https://cdn.iconscout.com/icon/free/png-256/free-html-logo-icon-download-in-svg-png-gif-file-formats--technology-social-media-vol-3-pack-logos-icons-2944937.png",
  },
  {
    title: "CSS",
    image:
      "https://cdn.iconscout.com/icon/free/png-256/free-css-logo-icon-download-in-svg-png-gif-file-formats--logos-pack-icons-722685.png",
  },
  {
    title: "Tailwind CSS",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/640px-Tailwind_CSS_Logo.svg.png",
  },
];

const projects = [
  {
    id: 1,
    title: "Educo",
    image: educo,
    description: "Educational solution",
    link: "http://educo-solution.com/",

    features: [
      { text: "Educo Mobile Application", emoji: "🚀" },
      { text: "Ionic and Firebase", emoji: "📦" },
    ],
  },
  {
    id: 2,
    title: "Lookup",
    image: lookup,
    technologies: ["HTML", "CSS", "JavaScript", "React.js", "GitHub"],
    description:
      "Commercial management application",
    link: "http://www.lookup.tn/",
    features: [
      { text: "Lookup Mobile Application", emoji: "🚀" },
      { text: "React Native, Expo and Firebase", emoji: "📦" },

    ],
  },
  {
    id: 3,
    title: "Orthominder",
    image: orthominder,
    description: "Teeth aligner treatment tracker",
    github: "https://github.com/marwen-hinaoui/orthominder_front",
    features: [
      { text: "Orthominder Web Application", emoji: "🌍" },
      { text: "React, Redux, Django and MongoDB", emoji: "📦" },
    ],
  },
];