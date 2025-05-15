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
import { FAQ } from './features/FAQ/FAQ';
import Cursor from '@/components/Cursor/Cursor';

import emptyStateImg from '@/assets/images/whatDoesTheWidgetDoImg/preview-mock-img.png';
import firstStep from '@/assets/images/whatDoesTheWidgetDoImg/1.png';
import secondStep from '@/assets/images/whatDoesTheWidgetDoImg/2.png';
import thirdStep from '@/assets/images/whatDoesTheWidgetDoImg/3.png';
import fourthStep from '@/assets/images/whatDoesTheWidgetDoImg/4.png';
import fifthStep from '@/assets/images/whatDoesTheWidgetDoImg/5.png';
import sixthStep from '@/assets/images/whatDoesTheWidgetDoImg/6.png';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const widgetDemoImages = {
    emptyStateImg,
    items: [firstStep, secondStep, thirdStep, fourthStep, fifthStep, sixthStep],
  };

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
          <Cursor />
          <Header />
          <Cover />
          <Philosophy />
          <WidgetDemo images={widgetDemoImages} />
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
          <FAQ />
          <Footer />
        </>
      )}
    </>
  );
}

export default App;
