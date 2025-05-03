import './App.css';
import { ProjectCard } from './features/Projects/ProjectCard';
import { mockProjectsCards } from './assets/mockProjectCards/index';
import { ProjectSlider } from './features/Projects/Projects';
import { BlockLabel } from './components/BlockLabel/BlockLabel';
import BlockClients from './features/BlockClients/BlockClients';

function App() {
  return (
    <>
      <BlockClients />
      <ProjectSlider projects={mockProjectsCards} />
    </>
  );
}

export default App;
