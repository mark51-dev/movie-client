import { animate, style, transition, trigger } from '@angular/animations';

export const divTrigger = trigger('flyInOut', [
  transition('void => *', [
    style({ transform: 'translateX(100%)' }),
    animate(100),
  ]),
  transition('* => void', [
    animate(100, style({ transform: 'translateX(100%)' })),
  ]),
]);
