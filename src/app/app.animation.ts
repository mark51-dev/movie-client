import { trigger, transition, style, animate } from '@angular/animations';

export const fadeInOutAnimation = trigger('fadeInOutAnimation', [
  transition('void => active', [
    style({ opacity: 0 }),
    animate(1500, style({ opacity: 1 })),
  ]),
  transition('* => void', [animate(1500, style({ opacity: 0 }))]),
]);
