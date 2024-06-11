let root = document.documentElement;
let navToggle = document.querySelector('.header__toggler');
let navList = document.querySelector('.header__nav');


// Resume download button
let downloadButton = document.querySelector("#resume__download__button");
if (downloadButton) {
  let downloadLink =document.getElementById("download__link");
  downloadButton.addEventListener("click", function ()
   {
    downloadLink.click();
});
}

// Header drop down
navToggle.addEventListener('click', function() {
  navList.classList.toggle('header__nav--visible');
})


// for contact form
const contact_form = document.getElementById("contact-form__form");
if (contact_form) {
    contact_form.addEventListener("submit", function(e){
        e.preventDefault();
        let first_name = document.getElementById("name").value;
        let email = document.getElementById("email").value;
        let comment = document.getElementById("message").value;
        let mailtoLink =  `mailto:yomatolera@gmail.com?subject= &body=Name: ${first_name}%0D%0AEmail: ${email}%0D%0AMessage: ${comment}`;
        window.location.href = mailtoLink;
    })

}

  const sections = document.querySelectorAll('.fade-in');
if (sections){
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {

          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, options);

    sections.forEach(section => {
      observer.observe(section);
    });
  }


  const lefties = document.querySelectorAll('.left-entry');
  if (lefties){
      const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.5,
      };
  
  const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
  
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      }, options);
  
      lefties.forEach(leftie => {
        observer.observe(leftie);
      });
    }


  const righties = document.querySelectorAll('.right-entry');
    if (righties){
        const options = {
          root: null,
          rootMargin: '0px',
          threshold: 0.5,
        };
    
  const observer = new IntersectionObserver((entries, observer) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.classList.add('is-visible');
              observer.unobserve(entry.target);
            }
          });
        }, options);
    
        righties.forEach(rightie => {
          observer.observe(rightie);
        });
      }



  const textElement = document.querySelector(".home__intro__desc__SW");
      if(textElement){
    function sleep(ms) {
      return new Promise((resolve) => setTimeout(resolve, ms));
    }
    
    const phrases = ["Computer Science and Engineering", "Graphics Designer", "Video Editor","Oromo Linguistics"];
    textElement.innerText = phrases[0];
    
    const typingSpeed = 100;
    const pauseBetweenWords = typingSpeed * 10;
    const backspaceSpeed = typingSpeed;
    const pauseBetweenPhrases = typingSpeed * 5;
     
    let currentPhraseIndex = 0;
    
    const typeAndDeleteLoop = async () => {
      while (true) {
        let currentWord = phrases[currentPhraseIndex];
    
        for (let i = 0; i < currentWord.length; i++) {
          textElement.innerText = currentWord.substring(0, i + 1);
          await sleep(typingSpeed);
        }
    
        await sleep(pauseBetweenWords);
    
        for (let i = currentWord.length; i > 0; i--) {
          textElement.innerText = currentWord.substring(0, i - 1);
          await sleep(backspaceSpeed);
        }
    
        await sleep(pauseBetweenPhrases);
    
        currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length;
      }
    };
    
     typeAndDeleteLoop();
  }