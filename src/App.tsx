import './App.css';
import { mockProjectsCards } from './assets/mockProjectCards/index';
import { ProjectSlider } from './features/Projects/Projects';
import { HowItWorksBlock } from './features/HowItWorks/HowItWorks';
import { useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Loader from './components/Loader/Loader';
import Header from './components/Header/Header';
import BlockClients from './features/BlockClients/BlockClients';
import Cover from './components/Cover/Cover';
import Philosophy from '@/features/Philosophy/Philosophy';
import { WidgetDemo } from './features/WidgetDemo/WidgetDemo';
import Team from './features/Team/Team';
import Footer from './features/Footer/Footer';

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
          <Header />
          <Cover />
          <Philosophy />
          <WidgetDemo />
          <BlockClients />
          <ProjectSlider projects={mockProjectsCards} />
          <BrowserRouter>
            <HowItWorksBlock
              openModal={() => {
                console.log('Button Clicked');
              }}
              closeModal={() => {}}
            />
          </BrowserRouter>
          <Team />
          <Footer />
        </>
      )}
    </>
  );
}

export default App;
