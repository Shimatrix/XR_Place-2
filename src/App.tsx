import './App.css';
import { ProjectCard } from './features/Projects/ProjectCard';
import { mockProjectsCards } from './assets/mockProjectCards/index';
import { ProjectSlider } from './features/Projects/Projects';
import { useEffect, useState } from 'react';
import Loader from './components/Loader/Loader';

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
            <ProjectSlider projects={mockProjectsCards} />
        </>
      )}


    </>
  );
}

export default App;
