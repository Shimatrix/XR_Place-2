import './App.css';
import { mockProjectsCards } from './assets/mockProjectCards/index';
import { ProjectSlider } from './features/Projects/Projects';
import BlockClients from './features/BlockClients/BlockClients';
import Philosophy from '@/features/Philosophy/Philosophy';

function App() {
  return (
    <>
      <Philosophy />
      <BlockClients />
      <ProjectSlider projects={mockProjectsCards} />
    </>
  );
}

export default App;
