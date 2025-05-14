/* Функция для добавления анимаций */

type TAnimationData = {
  element: Element | null; // HTML элемент, который необходимо анимировать
  styleToAdd: string; // Стиль для анимации
};

export const addAnimation = (animationData: TAnimationData[]) => {
  const startAnimation = (entries: any, observer: any) => {
    entries.forEach((entry: any) => {
      if (entry.isIntersecting) {
        const style = animationData.filter((data) => (data.element = entry.target))[0].styleToAdd;
        entry.target.classList.add(style);
        observer.unobserve(entry.target);
      }
    });
  };
  const options = { rootMargin: '0px', threshold: 1 };
  const observer = new IntersectionObserver(startAnimation, options);
  animationData.forEach((data) => {
    if (data.element) {
      observer.observe(data.element as Element);
    }
  });
};
