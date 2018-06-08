import {sequence, trigger, stagger, animate, style, group, query, transition, animateChild} from '@angular/animations';

export const fadeAnimation = trigger('fadeAnimation', [
  transition('* => *', [
    query(':enter, :leave', style({ position: 'fixed', width: '100%' }), {optional: true}),
    query(':enter', style({ opacity: 0 }), {optional: true}),
    sequence([
      query(':leave', animateChild(), {optional: true}),
      group([
        query(':leave', [
          style({ opacity: 0 }),
          animate('800ms ease', style({ opacity: 0 }))
        ], {optional: true}),
        query(':enter', [
          style({ opacity: 0 }),
          animate('800ms ease',
            style({ opacity: 1 })),
        ], {optional: true}),
      ]),
      query(':enter', animateChild(), {optional: true}),
    ])
  ])
]);