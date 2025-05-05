import './App.css';
import { ProjectCard } from './features/Projects/ProjectCard';
import { mockProjectsCards } from './assets/mockProjectCards/index';
import { ProjectSlider } from './features/Projects/Projects';

import { useEffect, useState } from 'react';
import Loader from './components/Loader/Loader';
import Header from './components/Header/Header';

import { BlockLabel } from './components/BlockLabel/BlockLabel';
import BlockClients from './features/BlockClients/BlockClients';


function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);



  return (
    <>

     {isLoading ? (
        <Loader />
      ) : (
        <>
          <Header/>
          <BlockClients />
          <ProjectSlider projects={mockProjectsCards} />
        </>
      )}
    </>
  );
}

export default App;
