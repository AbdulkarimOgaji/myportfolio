import Project from "../components/Project";
import projects from "../assets/projects.json"
const Projects = () => {
  return (
    <div className="projects">
      <h1 className="big-header">Projects</h1>
      <p className="content">
        I enjoy competing in hackathons and working on software projects.
        I&apos;m largely framework agnostic but technologies I love right now
        are Next.js, React Native and Node. Here are some of my personal
        projects and the projects I made during hackathons.
      </p>
      <hr />
      {
        projects.map(proj => <Project data={proj} key={proj.title} />)
      }
    </div>
  );
};

export default Projects;