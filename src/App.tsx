import './App.css';
import { ProjectCard } from './features/Projects/ProjectCard';
import { mockProjectsCards } from './assets/mockProjectCards/index';
import { ProjectSlider } from './features/Projects/Projects';

function App() {
  return (
    <>
      <ProjectSlider projects={mockProjectsCards} />
    </>
  );
}

export default App;
