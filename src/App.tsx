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
import { Modal } from './components/Modal/Modal';
import ContactFormModal from './features/ContactFormModal/ContactFormModal';
import SuccessModalUI from './features/SuccessModal/SuccessModal';
import { useTranslation } from 'react-i18next';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const widgetDemoImages = {
    emptyStateImg,
    items: [firstStep, secondStep, thirdStep, fourthStep, fifthStep, sixthStep],
  };

  const { t } = useTranslation();
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);

  const openContactModal = () => {
    setIsContactModalOpen(true);
  };

  const closeContactModal = () => {
    setIsContactModalOpen(false);
  };

  const openSuccessModal = () => {
    setIsSuccessModalOpen(true);
    closeContactModal();
  };

  const closeSuccessModal = () => {
    setIsSuccessModalOpen(false);
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
          <Cover openModal={openContactModal} />
          <Philosophy />
          <WidgetDemo images={widgetDemoImages} />
          <BlockClients />
          <ProjectSlider projects={mockProjectsCards} />
          <BrowserRouter>
            <HowItWorksBlock openModal={openContactModal} closeModal={closeContactModal} />
          </BrowserRouter>
          <Team />
          <FAQ />
          <Footer />

          {isContactModalOpen && (
            <Modal isOpen={isContactModalOpen} onClick={closeContactModal}>
              <ContactFormModal
                buttonText={t('modal.modalContact.contactButton')}
                title={t('modal.modalContact.contactTitle')}
                onClose={closeContactModal}
                onSubmit={openSuccessModal}
              />
            </Modal>
          )}
          {isSuccessModalOpen && (
            <Modal isOpen={isSuccessModalOpen} onClick={closeSuccessModal}>
              <SuccessModalUI
                buttonText={t('modal.modalSuccess.successButton')}
                title={t('modal.modalSuccess.successTitle')}
                onClose={closeSuccessModal}
              />
            </Modal>
          )}
        </>
      )}
    </>
  );
}

export default App;
