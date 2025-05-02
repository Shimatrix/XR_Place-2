import './App.css';
import { ProjectCard } from './features/Projects/ProjectCard';
import { mockProjectsCards } from './assets/mockProjectCards/index';

function App() {
  return (
    <>
      {mockProjectsCards.map((project) => (
        <ProjectCard
          key={project.id}
          title={project.title}
          description={project.description}
          img={project.img}
        />
      ))}
    </>
  );
}

export default App;
