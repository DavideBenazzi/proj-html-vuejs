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
        heroes: [
            '0',
            '1',
            '2',
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
                '5',
                '6',
            ],
        },
        clientActive: 0,
        circleBackground1: 'selected',
        circleBackground2: '',
        intervalId: 0,
    },
    created() {
        // INTERVAL FOR SWITCH TESTIMONIALS AND LOGOS
        setInterval ( () => {
            this.changeTestimonial();
            this.logoCarousel();
        }, 3000);
        this.startLoop();
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
            return this.clients.logos.push( this.clients.logos.shift() );
        },
        // FUNCTION FOR SWITCH HERO
        heroCarousel() {
            return this.heroes.push( this.heroes.shift() );
        },
        nextHero() {
            return this.heroes.push( this.heroes.shift() );
        },
        prevHero() {
            return this.heroes.unshift( this.heroes.pop() );
        },
        // START STOP LOOP
        startLoop() {
            this.intervalId = setInterval(() => {
            this.heroCarousel();
            }, 3000);
          },
          stopLoop() {
            clearInterval(this.intervalId);
          },
    },
});