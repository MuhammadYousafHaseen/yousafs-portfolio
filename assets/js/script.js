// Email JS
const contactForm = document.getElementById('contact-form');
const contactMessage = document.getElementById('contact-message');

const sendEmail = (e) => {
    e.preventDefault();
    // serviceId = templateId - #form - publicKey
    emailjs.sendForm('service_luk6b1e', 'template_0gsns3r', '#contact-form', 'kn0izJ5np-l6Pf_5H')

    .then(() =>{
        //show message
        contactMessage.textContent = 'Message Sent Successfully';
        //remove message after 5 seconds
        setTimeout(() => {
            contactMessage.textContent = '';
        }, 5000);
        //clear input fields
       contactForm.reset();
    }, () => { 
        //show error message
        contactMessage.textContent = 'Message not sent , please try again';
    })
}


contactForm.addEventListener('submit', sendEmail);



/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp = () =>{
	const scrollUp = document.getElementById('scroll-up')
    // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup class
	this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
						: scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)


// Scroll Section Active Link

const sections = document.querySelectorAll('section[id]')
    
const scrollActive = () =>{
  	const scrollDown = window.scrollY

	sections.forEach(current =>{
		const sectionHeight = current.offsetHeight,
			  sectionTop = current.offsetTop - 58,
			  sectionId = current.getAttribute('id'),
			  sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

		if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
			sectionsClass.classList.add('active-link')
		}else{
			sectionsClass.classList.remove('active-link')
		}                                                    
	})
}
window.addEventListener('scroll', scrollActive)


// Scroll Reveal Animation

const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
    reset: true
});

sr.reveal(`.profile, .contact__form`)
sr.reveal(`.info`,{origin: 'left', delay:800})
sr.reveal(`.skills`,{origin: 'left', delay:1000})
sr.reveal(`.about`,{origin: 'left', delay:1200})
sr.reveal(`.projects__card, .services__card, .experience__card`,{interval: 100})

