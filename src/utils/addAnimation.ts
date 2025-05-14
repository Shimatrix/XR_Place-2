/* Функция для добавления анимаций */

interface TAnimationData {
  element: Element | null; // HTML элемент, который необходимо анимировать
  child?: Element | null;
  styleToAdd: string; // Стиль для анимации
}

export const addAnimation = (animationData: TAnimationData[]) => {
  const startAnimation = (entries: any, observer: any) => {
    entries.forEach((entry: any) => {
      if (entry.isIntersecting) {
        const component = animationData.filter((data) => data.element == entry.target)[0];
        if (component.child) {
          component.child.classList.add(component.styleToAdd);
        } else {
          component.element?.classList.add(component.styleToAdd);
        }
        observer.unobserve(entry.target);
      }
    });
  };
  const options = { rootMargin: '0px', threshold: 0.7 };
  const observer = new IntersectionObserver(startAnimation, options);
  animationData.forEach((data) => {
    if (data.element) {
      observer.observe(data.element as Element);
    }
  });
};
