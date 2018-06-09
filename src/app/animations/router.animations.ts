import {sequence, trigger, animate, style, group, query, transition, animateChild} from '@angular/animations';

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


// export const moving = trigger('moving', [
//   transition('* => *', [
//     query('img',style({ transform: 'translateX(-100%)'})),
//     query('img',
//       stagger('600ms', [
//         animate('900ms', style({ transform: 'translateX(0)'}))
//     ]))
//   ])
// ])

// export const fade = trigger('fade', [
//   state('inactive', style({ transform: 'translateX(-10%)' })),
//   state('active', style({transform: 'translateX(100%)' })),
//   transition('* <=> *', [
//    animate(2000)
//   ])
// ]);
