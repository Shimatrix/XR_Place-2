export type Side = 'top' | 'right' | 'bottom' | 'left';

/**
 * @param e MouseEvent
 * @param el HTMLElement
 * @returns Side – откуда курсор вошёл или вышел
 */
export function getEntrySide(e: MouseEvent, el: HTMLElement): Side {
  const { width, height, top, left } = el.getBoundingClientRect();
  const x = e.clientX - left;
  const y = e.clientY - top;
  const dx = x - width / 2;
  const dy = y - height / 2;
  // угол в радианах от центра
  const theta = Math.atan2(dy, dx) * (180 / Math.PI);
  if (theta >= -45 && theta < 45) return 'right';
  if (theta >= 45 && theta < 135) return 'bottom';
  if (theta >= 135 || theta < -135) return 'left';
  return 'top';
}
