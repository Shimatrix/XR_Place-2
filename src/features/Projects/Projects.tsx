/* Логика выбора slider/grid по кол-ву проектов */
import React, { useEffect, useState } from 'react';
import { ProjectCard } from './ProjectCard';
import styles from './Projects.module.scss';
import { Button } from '@/components/Button/Button';
import { BlockLabel } from '@/components/BlockLabel/BlockLabel';

interface Project {
  title: string;
  description: string;
  img: string;
}

interface Props {
  projects: Project[];
}

export const ProjectSlider: React.FC<Props> = ({ projects }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const isGridMode = projects.length >= 4;
  const labelText = 'Сотрудничество';

  projects = isMobile ? projects.slice(0, 3) : projects;

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 769);
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div
      className={`${styles.wrapper} ${isGridMode ? styles.gridMode : ''} ${isMobile ? styles.mobileMode : ''}`}
    >
      <div className={styles.header}>
        <BlockLabel className={styles.decoration}>{labelText}</BlockLabel>
        <h2 className={styles.heading}>
          Реализованные <span className={styles.accent}>проекты</span>
        </h2>
      </div>

      {isGridMode || isMobile ? (
        <a href="" className={styles.viewAllButton}>
          Смотреть&nbsp;все&nbsp;проекты{' '}
          <svg width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 14 14 1m0 0H1m13 0v13" stroke="#4D4D4D" />
          </svg>
        </a>
      ) : (
        <div className={styles.navButtons}>
          <button onClick={handlePrev} className={styles.arrowLeft} />
          <button onClick={handleNext} className={styles.arrowRight} />
        </div>
      )}

      {isGridMode || isMobile ? (
        <div>
          <div className={styles.projectsWrapper}>
            {projects.map((project, i) => (
              <ProjectCard
                key={i}
                title={project.title}
                description={project.description}
                img={project.img}
                className={styles.card}
              />
            ))}
          </div>
          {isMobile && <Button size="desktop" title="все проекты" />}
        </div>
      ) : (
        <div className={styles.slider}>
          <div
            className={styles.track}
            style={{
              transform: `translateX(-${currentIndex * 60}%)`,
            }}
          >
            {projects.map((project, i) => (
              <ProjectCard
                key={i}
                title={project.title}
                description={project.description}
                img={project.img}
                className={styles.card}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
