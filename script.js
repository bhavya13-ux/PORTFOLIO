// Select all navigation links
const navLinks = document.querySelectorAll('header nav ul li');

// Add event listener to each link
navLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    // Prevent default link behavior
    e.preventDefault();

    // Get the target section ID
    const targetId = link.textContent.trim().toLowerCase() + '-container';

    // Get the target section element
    const targetSection = document.querySelector(`.${targetId}`);

    // Scroll to the target section smoothly
    targetSection.scrollIntoView({ behavior: 'smooth' });
  });
});
// Download My CV
const pdfUrl ="Bhavya's CV.pdf";
document.getElementsByClassName("resume-btn")[0].addEventListener('click', () => {
  window.open(pdfUrl, '_blank');
});
//Contact me through my instagram
const igUrl="https://www.instagram.com/_justt.bhavya?igsh=MWo1eXA3bWpkc2l2eg==";
document.getElementsByClassName("ig")[0].addEventListener('click',()=>{
    window.open(igUrl,'_blank');
});
//Mail Me
const mailUrl="mailto:bhavyaprasad130@gmail.com";
document.getElementsByClassName("mail")[0].addEventListener('click',()=>{
    window.open(mailUrl,'_blank');
});
//Contact Me through linkin
const linkinUrl="https://www.linkedin.com/in/bhavya-prasad-a8481b322/";
document.getElementsByClassName("linkin")[0].addEventListener('click',()=>{
    window.open(linkinUrl,'_blank');
});
