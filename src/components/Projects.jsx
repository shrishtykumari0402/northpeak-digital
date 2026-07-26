import workforceImg from "../assets/workforce.png";
import kanbanImg from "../assets/kanban.png";
import spotifyImg from "../assets/spotify.png";

import { motion } from "framer-motion";

const projects = [
  {
    title: "Workforce Management System",
    description:
      "An employee management system with role-based login, task assignment, and dashboard tracking.",
    tech: ["React", "Tailwind CSS", "Context API"],
    image: workforceImg,
    link: "https://github.com/shrishtykumari0402/employee-management-system",
  },

  {
    title: "FlowBoard – Task Management System",
    description:
      "A drag-and-drop task management system with status updates and local storage support.",
    tech: ["HTML", "CSS", "JavaScript"],
    image: kanbanImg,
    link: "https://github.com/shrishtykumari0402/kanban-project",
  },

  {
    title: "Spotify Web Player",
    description:
      "A Spotify-inspired music player with playback controls and interactive song cards.",
    tech: ["HTML", "CSS", "JavaScript"],
    image: spotifyImg,
    link: "https://github.com/shrishtykumari0402/Spotify-Web-Player",
  },
];

function Projects() {
  return (
    <section id="projects" className="pt-32 pb-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-blue-600 font-semibold uppercase tracking-[0.25em] text-sm">
            MY PROJECTS
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4">
            Featured Work
          </h2>

          <p className="text-gray-600 mt-4">
            Projects built with modern technologies and focused on user
            experience.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="
              bg-white
              border
              border-gray-200
              rounded-2xl
              p-7
              hover:-translate-y-2
              hover:shadow-xl
              transition
              "
            >
              <div
                className="
               h-36
              rounded-xl
              overflow-hidden
            bg-gray-100
              "
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3
                className="
              text-xl
              font-bold
              mt-6
              text-gray-900
              "
              >
                {project.title}
              </h3>

              <p
                className="
              text-gray-600
              mt-3
              leading-relaxed
              "
              >
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-5">
                {project.tech.map((item, i) => (
                  <span
                    key={i}
                    className="
                  bg-blue-100
                  text-blue-600
                  px-3
                  py-1
                  rounded-full
                  text-sm
                  "
                  >
                    {item}
                  </span>
                ))}
              </div>

              <a
      href={project.link}
        target="_blank"
                  rel="noopener noreferrer"
              className="
                mt-6
                block
                w-full
                text-center
              bg-blue-600
              text-white
                py-3
                rounded-xl
              hover:bg-blue-700
                transition
                "
                >
                  View GitHub
                   </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
