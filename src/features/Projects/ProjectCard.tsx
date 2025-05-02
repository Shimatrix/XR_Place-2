/* Компонент одиночной карточки проекта */
// ProjectCard.tsx
import React from 'react';
import styles from './ProjectCard.module.scss';

interface ProjectCardProps {
  title: string;
  description: string;
  img: string;
  className?: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  img,
  className = '',
}) => {
  return (
    <div className={`${styles.card} ${className}`}>
      <div className={styles.imageContainer}>
        <img src={img} alt={title} className={styles.image} />
      </div>
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  );
};
