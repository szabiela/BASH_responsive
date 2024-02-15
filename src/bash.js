
const t1 = gsap.timeline({default: {ease: 'power4.out', duration: .5}});

            gsap.set('g', {
                autoAlpha: 1 
            })

            gsap.to('svg', {
                scale: 1.2,
                duration: 4,
            })

            t1
                .from('#BASH .cls-1', {
                    yPercent: -800,
                    stagger: .1,
                    opacity: 0,
                }) 

                .from('#Left_bracket .cls-1', {
                    xPercent: -1000,
                    opacity: 0,
                    ease: 'power4.inOut',
                    duration: 1.8,
                }, '-=0.5')
                
                .from('#Right_bracket .cls-1', {
                    xPercent: 1000,
                    opacity: 0,
                    ease: 'power4.inOut',
                    duration: 1.8,
                }, '<0.1')

                .to('#Right_bracket .cls-1', { // animate out bracket right
                    scaleX: 2,
                    opacity: 0,
                    stagger: .03,
                    ease: 'power4.inOut',
                    duration: .5,
                }, '+=1')

                .to('#Left_bracket .cls-1', { // animate out bracket left
                    scaleX: -2,
                    opacity: 0,
                    stagger: .03,
                    ease: 'power4.inOut',
                    duration: .5,
                }, '<0.1')

                .to('#BASH .cls-1', {
                    yPercent: 800,
                    stagger: .1,
                    opacity: 0,
                    ease: 'power4.inOut',
                    duration: 1.2,
                }) 

                .to('.reveal', {
                    scaleY: 0,
                    transformOrigin: 'top',
                    duration: 2.5,
                    ease: 'power4.inOut',
                }, "<-=.8")
