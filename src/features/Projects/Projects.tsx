/* Логика выбора slider/grid по кол-ву проектов */
import React, { useState } from 'react';
import { ProjectCard } from './ProjectCard';
import styles from './Projects.module.scss';

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

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <div className={styles.decoration}>Сотрудничество</div>
        <h2 className={styles.heading}>
          Реализованные <span className={styles.accent}>проекты</span>
        </h2>
        <div className={styles.navButtons}>
          <button onClick={handlePrev} />
          <button onClick={handleNext} />
        </div>
      </div>

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
    </div>
  );
};
