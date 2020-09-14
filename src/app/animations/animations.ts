import { trigger, transition, style, animate, state, animateChild, query, group } from "@angular/animations";
/* 
const weatherInput =
    trigger('weatherInput',
        [transition(':enter',
            [style({ opacity: 1, transform: 'rotateY(180deg)', height: '0px' }), animate('300ms')
            ])
        ]);

const weatherDate =
    trigger('weatherDate',
        [transition(':enter',
            [style({ opacity: 0, transform: 'translateX(-100%) rotate(-180deg)' }), animate('200ms')]),
        ]);

const fileAnimation = {
    left: trigger('left',
        [transition(':enter',
            [style({ opacity: 0, transform: 'translateX(-100%)' }), animate('300ms')
            ])
        ]),
    right: trigger('right',
        [transition(':enter',
            [style({ opacity: 0, transform: 'translateX(100%)' }), animate('300ms ease-in')
            ])
        ]),
    title: trigger('title',
        [transition(':enter',
            [style({ opacity: 0, transform: 'translateY(-200%)' }), animate('300ms')
            ])
        ])
}

const listFileAnimation = {
    InsertRemove: trigger('InsertRemove', [
        transition(':enter', [style({ opacity: 0, transform: 'translateX(800px)'}), animate('100ms 400ms'),]),
        transition(':leave', [animate('100ms ease-out', style({ opacity: 0, transform: 'translateX(500px)' }))])
    ]),
    table: trigger('table', [
        transition(':enter',
            [style({ opacity: 0, transform: 'translateX(-200%)' }), animate('300ms')
            ]),

    ])
}

const upload = trigger('upload', [
    transition(':enter', [style({ opacity: 1, transform: 'translateY(-100%)', backgroundColor: 'black' }), animate('250ms')]),
])
 */
const openClose = [
    trigger('iconOpenClose',[
        state('open', style({
            transform: 'rotateZ(180deg)',
        })),
        state('closed', style({
            transform: 'rotateZ(0deg)',
        })),
        transition("* => *", animate(400))
    ])
]

const sidenav = [
    trigger('sidenav', [
      state('open', style({
        width: '260px',
      })),
      state('closed', style({
        width: '50px',
      })),
      transition('* => closed', [animate('0.25s')]),
      transition('* => open', [animate('0.25s')]),
    ])
]

const main = [
    trigger('main', [
      state('open', style({
        marginLeft: '260px',
      })),
      state('closed', style({
        marginLeft: '50px',
      })),
      transition('* => closed', [animate('0.4s')]),
      transition('* => open', [animate('0.2s')]),
    ])
]


const search = trigger('search', [
    transition(':enter', [style({ opacity: 1, transform: 'translateX(-100%)'}), animate('0.15s ease-in'),]),
    transition(':leave', [animate('0.15s ease-out', style({ opacity: 0.5, transform: 'translateX(-100%)' }))])
])


const signin = trigger('signin', 
        [transition(':enter',
        [style({ opacity: 0, transform: 'translateY(-100%)'}), animate('0.3s ease-in-out')])
    ])
/*
const profile = trigger('profile',
    [transition(':enter',
        [style({ opacity: 1, transform: 'translateY(-60%) scale3d(0.1,0.1,0.1)' }), animate('300ms')])
    ])


const signupAnimation = {
    signup: trigger('signup', 
        [transition(':enter',
            [style({ opacity: 0, transform: 'translateX(100%) rotate(120deg)'}), animate('300ms')])
        ]),
    logo: trigger('logo', 
        [transition(':enter',
            [style({ opacity: 0,height:'0px'}), animate('350ms')])
    ])    
}

const body = {
    body: trigger('body', [
        transition(':enter', [style({ opacity: 1, transform: 'translateX(-250%)'}), animate('200ms'),]),
        transition(':leave', [animate('180ms', style({ opacity: 1, transform: 'translateX(-150%)' }))])
    ])
}*/

export {
    sidenav,
    main,
    openClose,
    signin,
    search
}