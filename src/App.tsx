import './App.css';
import { mockProjectsCards } from './assets/mockProjectCards/index';
import { ProjectSlider } from './features/Projects/Projects';
import { HowItWorksBlock } from './features/HowItWorks/HowItWorks';
import { useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Loader from './components/Loader/Loader';
import Header from './components/Header/Header';
import { BlockLabel } from './components/BlockLabel/BlockLabel';
import BlockClients from './features/BlockClients/BlockClients';
import Cover from './components/Cover/Cover';
import Philosophy from '@/features/Philosophy/Philosophy';
import { WidgetDemo } from './features/WidgetDemo/WidgetDemo';
import Team from './features/Team/Team';
import ModalUI from './components/ModalUI/ModalUI';
import SuccessModalUI from './features/SuccessModal/SuccessModal';
import ContactFormModal from './features/ContactFormModal/ContactFormModal';

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
          <ModalUI>
            <ContactFormModal
              buttonText="отправить данные"
              title="Готовы поднять ваш бизнес на новый уровень?"
              onClose={() => {}}
            />
          </ModalUI>
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
        </>
      )}
    </>
  );
}

export default App;
