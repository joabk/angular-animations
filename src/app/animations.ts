import { trigger, state, transition, animate, style } from '@angular/animations';

export let fade = trigger('fade', [

      state('void', style({opacity:0})),

      transition('void <=> *',[ //:enter , :leave
        animate(2000)
      ])

      /* 
      transition('void => *',[
        animate(2000)
      ]),
      transition('* => void',[
        animate(1000)
      ])

      To 

      transition('void => *, * => void',[
        animate(2000)
      ])
       */

    ])