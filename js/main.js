// VUE 
const app = new Vue ({
    el: '#app',
    data: {
        links: [
            'Home',
            'Who We Are',
            'What We Do',
            'Where We Work',
            'Careers',
            'News',
            'Get In Touch Now'
        ],
        clients: {
            img: [
                './img/testimonials-2.jpg',
                './img/testimonials-1.jpg',
            ],
            say: [
                'Ability proceeds from a fusion of skills, knowledge, understanding and imagination, consolidated by experience.',
                'Beauty is when you can appreciate yourself. When you love yourself, that\'s when you\'re most beautiful.',
            ],
            name: [
                'Luis Desalvo',
                'Shelia McCourtney',
            ],
            profession: [
                'CREO TECH',
                'ARCHITECT',
            ],
            logos: [
                '1',
                '2',
                '3',
                '4',
            ],
        },
        clientActive: 0,
        circleBackground1: 'selected',
        circleBackground2: '',
    },
    created() {
        // INTERVAL FOR SWITCH TESTIMONIALS AND LOGOS
        setInterval ( () => {
            this.changeTestimonial();
            this.logoCarousel();
        }, 3000);
    },
    methods: {
        // FUNCTION FOR SWAP TESTIMONIALS
        changeTestimonial() {
            if (this.clientActive === 0) {
                this.clientActive = 1;
                this.circleBackground1 = '';
                this.circleBackground2 = 'selected';
            } else {
                this.clientActive = 0;
                this.circleBackground1 = 'selected';
                this.circleBackground2 = '';
            };
        },
        // FUNCTIONS FOR SELECT TESTIMONIALS
        selectTestimonial1() {
            this.clientActive = 0;
            this.circleBackground1 = 'selected';
            this.circleBackground2 = '';
        },
        selectTestimonial2() {
            this.clientActive = 1;
            this.circleBackground1 = '';
            this.circleBackground2 = 'selected';
        },
        // FUNCTION FOR SWITCH LOGOS
        logoCarousel() {
            if ( this.clients.logos.includes('1') ) {
                this.clients.logos.push('6');
                this.clients.logos.shift();
            } else if ( this.clients.logos.includes('2') ) {
                this.clients.logos.push('5');
                this.clients.logos.shift();
            } else if ( this.clients.logos.includes('3') ) {
                this.clients.logos.push('4');
                this.clients.logos.shift();
            } else if ( this.clients.logos.includes('4') ) {
                this.clients.logos.push('3');
                this.clients.logos.shift();
            } else if ( this.clients.logos.includes('5') ) {
                this.clients.logos.push('2');
                this.clients.logos.shift();
            } else if ( this.clients.logos.includes('6') ) {
                this.clients.logos.push('1');
                this.clients.logos.shift();
            };
        },
    },
});