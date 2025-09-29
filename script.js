
// Enhanced Portfolio Animations and Interactions
document.addEventListener("DOMContentLoaded", () => {
  
  // ========== NAVIGATION ENHANCEMENTS ==========
  const navLinks = document.querySelectorAll("nav a");
  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      navLinks.forEach(l => l.classList.remove("active"));
      link.classList.add("active");
    });
  });

  // ========== SCROLL ANIMATIONS ==========
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, observerOptions);

  // Observe all sections for scroll animations
  const sections = document.querySelectorAll('section');
  sections.forEach(section => {
    section.classList.add('animate-on-scroll');
    observer.observe(section);
  });

  // ========== TYPING ANIMATION ==========
  function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    element.style.borderRight = '3px solid #00aaff';
    
    function type() {
      if (i < text.length) {
        element.innerHTML += text.charAt(i);
        i++;
        setTimeout(type, speed);
      } else {
        // Remove cursor after typing is complete
        setTimeout(() => {
          element.style.borderRight = 'none';
        }, 1000);
      }
    }
    type();
  }

  // Typing animation removed

  // ========== ENHANCED SKILLS SECTION ANIMATIONS ==========
  const skillCategories = document.querySelectorAll('.skill-category');
  const skillItems = document.querySelectorAll('.skill-item-enhanced');
  
  // Animate skill categories
  skillCategories.forEach((category, index) => {
    category.style.opacity = '0';
    category.style.transform = 'translateY(30px)';
    category.style.animation = `fadeInUp 0.6s ease-out ${index * 0.1}s forwards`;
  });
  
  // Animate individual skill items
  skillItems.forEach((item, index) => {
    item.style.opacity = '0';
    item.style.transform = 'translateX(-20px)';
    item.style.animation = `slideInLeft 0.5s ease-out ${index * 0.05}s forwards`;
  });

  // Progress bar animation on scroll
  const progressBars = document.querySelectorAll('.progress-bar');
  const progressObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.animationPlayState = 'running';
      }
    });
  }, { threshold: 0.5 });

  progressBars.forEach(bar => {
    bar.style.animationPlayState = 'paused';
    progressObserver.observe(bar);
  });

  // Add hover sound effect (optional)
  skillItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
      item.style.transform = 'translateX(8px) scale(1.02)';
    });
    
    item.addEventListener('mouseleave', () => {
      item.style.transform = 'translateX(0) scale(1)';
    });
  });

  // ========== PROJECT CARDS HOVER EFFECTS ==========
  const projectCards = document.querySelectorAll('.project-card');
  projectCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
      card.style.transform = 'translateY(-10px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', () => {
      card.style.transform = 'translateY(0) scale(1)';
    });
  });

  // ========== SMOOTH SCROLLING ENHANCEMENT ==========
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('href');
      const targetSection = document.querySelector(targetId);
      
      if (targetSection) {
        targetSection.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  // ========== FORM ANIMATIONS ==========
  const formInputs = document.querySelectorAll('.form-input');
  formInputs.forEach(input => {
    input.addEventListener('focus', () => {
      input.parentElement.style.transform = 'scale(1.02)';
    });
    
    input.addEventListener('blur', () => {
      input.parentElement.style.transform = 'scale(1)';
    });
  });

  // Parallax effect removed for sidebar

  // ========== RANDOM FLOATING ANIMATION FOR PROJECT CARDS ==========
  const floatingElements = document.querySelectorAll('.animate-float');
  floatingElements.forEach((element, index) => {
    element.style.animationDelay = `${index * 0.5}s`;
    element.style.animationDuration = `${3 + Math.random() * 2}s`;
  });

  // ========== CONTACT FORM SUBMISSION ANIMATION ==========
  const contactForm = document.querySelector('.contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const submitBtn = contactForm.querySelector('.submit-btn');
      
      // Add loading animation
      submitBtn.innerHTML = '🔄 Sending...';
      submitBtn.style.background = '#4ade80';
      
      // Simulate sending (replace with actual form submission)
      setTimeout(() => {
        submitBtn.innerHTML = '✅ Sent!';
        submitBtn.style.background = '#10b981';
        
        setTimeout(() => {
          submitBtn.innerHTML = '✉️ Send Message';
          submitBtn.style.background = '#ffcc00';
        }, 2000);
      }, 1500);
    });
  }

  // ========== DYNAMIC BACKGROUND PARTICLES ==========
  function createParticle() {
    const particle = document.createElement('div');
    particle.style.position = 'fixed';
    particle.style.width = '4px';
    particle.style.height = '4px';
    particle.style.background = `hsl(${Math.random() * 360}, 70%, 60%)`;
    particle.style.borderRadius = '50%';
    particle.style.pointerEvents = 'none';
    particle.style.zIndex = '-1';
    particle.style.left = Math.random() * window.innerWidth + 'px';
    particle.style.top = window.innerHeight + 'px';
    particle.style.opacity = '0.7';
    
    document.body.appendChild(particle);
    
    const animation = particle.animate([
      { transform: 'translateY(0px)', opacity: 0.7 },
      { transform: `translateY(-${window.innerHeight + 100}px)`, opacity: 0 }
    ], {
      duration: Math.random() * 3000 + 2000,
      easing: 'linear'
    });
    
    animation.onfinish = () => particle.remove();
  }

  // Create particles periodically
  setInterval(createParticle, 300);
  
  // ========== CONSOLE WELCOME MESSAGE ==========
  console.log(`
    🎉 Welcome to Akanksha's Portfolio!
    ✨ Enhanced with beautiful animations
    🚀 Built with love using HTML, CSS & JavaScript
  `);
});

// ========== ADDITIONAL UTILITY FUNCTIONS ==========

// Function to add glowing effect on hover
function addGlowEffect(element) {
  element.addEventListener('mouseenter', () => {
    element.style.boxShadow = '0 0 20px rgba(0, 170, 255, 0.6)';
  });
  
  element.addEventListener('mouseleave', () => {
    element.style.boxShadow = '';
  });
}

// Apply glow effect to important elements
document.addEventListener('DOMContentLoaded', () => {
  const importantElements = document.querySelectorAll('.highlight, .project-card h3');
  importantElements.forEach(addGlowEffect);
});
