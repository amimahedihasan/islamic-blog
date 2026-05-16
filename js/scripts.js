// Stripes Animation

const segments = document.querySelectorAll('.segment');

segments.forEach((segment, index) => {
  let position = -50;
  const speed = 1 + Math.random() * 2;
  const max = window.innerHeight;

  segment.style.position = 'absolute';
  segment.style.top = position + 'px';

  const isOddNumbered = index % 2 === 0;
  const delay = isOddNumbered ? 0 : 1000 * index;

  setTimeout(() => {
    function animate() {
      position += speed;
      if (position >= max) position = -50;
      segment.style.top = position + 'px';
      requestAnimationFrame(animate);
    }

    animate();
  }, delay);
});


// Custom Hover

const cards = document.querySelectorAll(".card");

cards.forEach((card) => {
  card.addEventListener("mousemove", handleMouseMove);
});

function handleMouseMove(e) {
  const rect = this.getBoundingClientRect();
  const mouseX = e.clientX - rect.left - rect.width / 2;
  const mouseY = e.clientY - rect.top - rect.height / 2;

  let angle = Math.atan2(mouseY, mouseX) * (180 / Math.PI);

  angle = (angle + 360) % 360;

  this.style.setProperty("--start", angle + 60);
}


// hamburger-icon
const toggle = document.querySelector('.toggle');

toggle.addEventListener('click', function(e) {
  e.stopPropagation();
  this.classList.toggle('close');
});

document.addEventListener('click', function(e) {
  if (!toggle.contains(e.target)) {
    toggle.classList.remove('close');
  }
});


// menu area stikcy
window.addEventListener('scroll', function() {
  var scrollTopValue = window.scrollY;
  var menuBar = document.querySelector('.menu-bar');

  if (scrollTopValue > 110) {
    menuBar.classList.add('menu-bar-sticky');
  } else {
    menuBar.classList.remove('menu-bar-sticky');
  }
});


// Side bar
const toggleBtn = document.querySelector(".toggle");
const sidebar = document.querySelector(".page-sidebar");
const overlay = document.querySelector(".main-nav-overly");
const navbar = document.querySelector(".main-navbar");
const navActivities = document.querySelector(".nav-activites");
const menuEffectText = document.querySelector("#menu_effect h3");

function toggleSidebar() {
  sidebar.classList.toggle("activated");
  toggleBtn.classList.toggle("activate");
  overlay.classList.toggle("overly-activated");
  navActivities?.classList.toggle("menu-btn-active");
  navbar?.classList.toggle("activated");
}

function closeSidebar() {
  if (sidebar.classList.contains("activated")) {
    sidebar.classList.remove("activated");
    toggleBtn.classList.remove("activate");
    overlay.classList.remove("overly-activated");
    navActivities?.classList.remove("menu-btn-active");
    navbar?.classList.remove("activated");
  }
}

function updateCursorEffect(e) {
  const { clientX: x, clientY: y } = e;
  if (menuEffectText) {
    menuEffectText.style.transform = `translate(${x + 10}px, ${y + 10}px)`;
    menuEffectText.style.transition = "transform 0.1s ease";
  }
}

if (toggleBtn && sidebar && overlay && menuEffectText) {
  toggleBtn.addEventListener("click", toggleSidebar);
  overlay.addEventListener("click", closeSidebar);
  sidebar.addEventListener("click", (e) => e.stopPropagation());
  document.addEventListener("mousemove", updateCursorEffect);

  overlay.addEventListener("mouseenter", () => {
    menuEffectText.style.opacity = "1";
  });
  overlay.addEventListener("mouseleave", () => {
    menuEffectText.style.opacity = "0";
  });

  document.querySelectorAll(".page-sidebar-items ul li a").forEach((link) => {
    link.addEventListener("click", () => {
      closeSidebar();
      toggleBtn.classList.remove("close");
    });
  });
}

document.addEventListener("click", function (e) {
  const headerLeftInner = document.querySelector(".header-left-inner");
  if (
    !toggleBtn.contains(e.target) &&
    !headerLeftInner.contains(e.target)
  ) {
    toggleBtn.classList.remove("close");
  }
});

document.querySelector(".header-left-inner")?.addEventListener("click", function(e) {
  e.stopPropagation();
});


// auto type text
window.addEventListener("DOMContentLoaded", () => {
  const typeJsText = document.querySelector(".typeJsText");
  if (!typeJsText) return;

  const textArray = [
    "Creative Frontend Developer",
    "Creating elegant UI solutions",
    "Exploring modern web tech",
    "User-focused design",
    "Creative WordPress Designer"
  ];

  let textIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  function typeJs() {
    const currentText = textArray[textIndex];
    const displayedText = currentText.substring(0, charIndex);
    typeJsText.textContent = displayedText;

    if (!isDeleting && charIndex < currentText.length) {
      charIndex++;
      setTimeout(typeJs, 80);
    } else if (isDeleting && charIndex > 0) {
      charIndex--;
      setTimeout(typeJs, 30);
    } else {
      isDeleting = !isDeleting;
      if (!isDeleting) {
        textIndex = (textIndex + 1) % textArray.length;
      }
      setTimeout(typeJs, isDeleting ? 2000 : 500);
    }
  }

  typeJs();
});


// Mobile menu area stikcy
window.addEventListener('scroll', function() {
  var scrollTopValue = window.scrollY;
  var menuBar = document.querySelector('.mobile-menu-bar');

  if (scrollTopValue > 110) {
    menuBar.classList.add('mobile-menu-bar-sticky');
  } else {
    menuBar.classList.remove('mobile-menu-bar-sticky');
  }
});


// hamburger-icon
const switchElement = document.querySelector('.switch');
switchElement.addEventListener('click', function(e) {
  e.stopPropagation();
  this.classList.toggle('close');
});

document.addEventListener('click', function(e) {
  if (!switchElement.contains(e.target)) {
    switchElement.classList.remove('close');
  }
});


// Mobile Page Side Bar
const menuToggleBtn = document.querySelector(".switch");
const sidebarPanel = document.querySelector(".page-sidebar");
const navOverlay = document.querySelector(".main-nav-overly");
const mainNavbar = document.querySelector(".main-navbar");
const navMenuActivity = document.querySelector(".nav-activities");
const menuCursorText = document.querySelector("#menu_effect h3");

function toggleSidebar() {
  sidebarPanel.classList.toggle("activated");
  menuToggleBtn.classList.toggle("activate");
  navOverlay.classList.toggle("overly-activated");
  navMenuActivity?.classList.toggle("menu-btn-active");
  mainNavbar?.classList.toggle("activated");
}

function closeSidebar() {
  if (sidebarPanel.classList.contains("activated")) {
    sidebarPanel.classList.remove("activated");
    menuToggleBtn.classList.remove("activate");
    navOverlay.classList.remove("overly-activated");
    navMenuActivity?.classList.remove("menu-btn-active");
    mainNavbar?.classList.remove("activated");
  }
}

function updateCursorEffect(e) {
  const { clientX: x, clientY: y } = e;
  if (menuCursorText) {
    menuCursorText.style.transform = `translate(${x + 10}px, ${y + 10}px)`;
    menuCursorText.style.transition = "transform 0.1s ease";
  }
}

if (menuToggleBtn && sidebarPanel && navOverlay && menuCursorText) {
  menuToggleBtn.addEventListener("click", toggleSidebar);
  navOverlay.addEventListener("click", closeSidebar);
  sidebarPanel.addEventListener("click", (e) => e.stopPropagation());
  document.addEventListener("mousemove", updateCursorEffect);

  navOverlay.addEventListener("mouseenter", () => {
    menuCursorText.style.opacity = "1";
  });
  navOverlay.addEventListener("mouseleave", () => {
    menuCursorText.style.opacity = "0";
  });

  document.querySelectorAll(".page-sidebar-items ul li a").forEach((link) => {
    link.addEventListener("click", () => {
      closeSidebar();
      menuToggleBtn.classList.remove("close");
    });
  });
}

document.addEventListener("click", function (e) {
  const headerLeftInner = document.querySelector(".header-left-inner");
  if (
    !menuToggleBtn.contains(e.target) &&
    !headerLeftInner.contains(e.target)
  ) {
    menuToggleBtn.classList.remove("close");
  }
});

document.querySelector(".mobile-side-bar")?.addEventListener("click", function (e) {
  e.stopPropagation();
});


// Mobile Menu Side Bar

const hamburgerIcon = document.querySelector('.hamburger-icon');
const mobileSidebar = document.querySelector('.mobile-side-bar');
const closeOverlay = document.querySelector('.close-overlay');
const closeEffect = document.getElementById('close-effect');

hamburgerIcon.addEventListener('click', () => {
    mobileSidebar.classList.toggle('activated');
    closeOverlay.classList.toggle('main-nav-overlay');
    closeOverlay.classList.toggle('activated');
});

closeEffect.addEventListener('click', () => {
    mobileSidebar.classList.remove('activated');
    closeOverlay.classList.remove('activated');
    closeOverlay.classList.remove('main-nav-overlay');
});

closeOverlay.addEventListener('click', (e) => {
    if (e.target === closeOverlay || e.target === closeEffect) {
        mobileSidebar.classList.remove('activated');
        closeOverlay.classList.remove('activated');
        closeOverlay.classList.remove('main-nav-overlay');
    }
});

document.addEventListener('mousemove', (e) => {
    const closeEffect = document.querySelector('.close-overlay-effect');
    if (closeEffect) {
        closeEffect.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
    }
});


// Menu Active

document.addEventListener("DOMContentLoaded", function () {
  let lastId;
  const topMenu = document.getElementById("mainNav");
  const topMenuHeight = topMenu.offsetHeight + 1;
  const menuItems = Array.from(topMenu.querySelectorAll("a"));
  const scrollItems = menuItems.map(link => {
    const section = document.querySelector(link.getAttribute("href"));
    return section ? section : null;
  }).filter(Boolean);

  menuItems.forEach(link => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href");
      const targetSection = document.querySelector(targetId);
      const offsetTop = targetSection.offsetTop - topMenuHeight + 1;

      window.scrollTo({
        top: offsetTop,
        behavior: "smooth"
      });
    });
  });

  window.addEventListener("scroll", function () {
    const fromTop = window.scrollY + topMenuHeight;
    let currentSection = null;

    scrollItems.forEach(section => {
      if (section.offsetTop < fromTop) {
        currentSection = section;
      }
    });

    const currentId = currentSection ? currentSection.id : "";

    if (lastId !== currentId) {
      lastId = currentId;

      menuItems.forEach(link => {
        link.parentElement.classList.remove("active");
        if (link.getAttribute("href") === `#${currentId}`) {
          link.parentElement.classList.add("active");
        }
      });
    }
  });
});


// circle progress bar

const blocks = document.querySelectorAll('.block');
const animateProgress = (item) => {
    let numElement = item.querySelector('.num');
    let targetNum = parseInt(numElement.innerText);
    let circle = item.querySelector('.circle');
    let startTime = null;
    const duration = 3000; // 2 seconds
    const animate = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / duration, 1);
        const currentNum = Math.floor(progress * targetNum);
        numElement.innerText = currentNum;
        const offset = 502 * (1 - (progress * targetNum / 100));
        circle.style.strokeDashoffset = offset;
        if (progress < 1) {
            requestAnimationFrame(animate);
        } else {
            numElement.innerText = targetNum;
        }
    };
    requestAnimationFrame(animate);
};
const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateProgress(entry.target);
            obs.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.5
});
blocks.forEach(block => {
    observer.observe(block);
});


// ProgressBar

document.addEventListener("DOMContentLoaded", function() {
    const skillsSection = document.getElementById("skills");
    const skillbars = document.querySelectorAll(".skillbar");
    let animated = false;

    window.addEventListener("scroll", function() {
        const windowHeight = window.innerHeight;
        const scrollTop = window.scrollY;
        const offsetTop = skillsSection.offsetTop;

        if (!animated && scrollTop + windowHeight > offsetTop) {
            animated = true;

            skillbars.forEach((skillbar) => {
                const percent = skillbar.dataset.percent;
                const bar = skillbar.querySelector(".skillbar-bar");

                bar.style.transition = "width 3.5s ease";
                bar.style.width = percent;
            });
        }
    });
});


// Counter

let counted = false;

window.addEventListener("scroll", function() {
    const counterSection = document.querySelector(".counter");
    if (!counterSection) return;

    const oTop = counterSection.offsetTop - window.innerHeight;

    if (!counted && window.scrollY > oTop) {
        const counters = document.querySelectorAll(".count");

        counters.forEach((counter) => {
            const countTo = +counter.getAttribute("data-count");
            const duration = 3000;
            const start = 0;
            const startTime = performance.now();

            function updateCounter(currentTime) {
                const elapsed = currentTime - startTime;
                const progress = Math.min(elapsed / duration, 1);
                const value = Math.floor(progress * countTo);

                counter.textContent = value;

                if (progress < 1) {
                    requestAnimationFrame(updateCounter);
                } else {
                    counter.textContent = countTo;
                }
            }

            requestAnimationFrame(updateCounter);
        });

        counted = true;
    }
});


// mySwiper1

document.addEventListener("DOMContentLoaded", function () {
  var swiper = new Swiper(".mySwiper1", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
    pagination: {
      el: ".swiper-pagination",
      dynamicBullets: true,
      clickable: true,
    },
  });
});


// mySwiper2

document.addEventListener("DOMContentLoaded", function () {
  const swiper = new Swiper(".mySwiper2", {
    slidesPerView: 2.5,
    spaceBetween: 15,
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      dynamicBullets: true,
      clickable: true,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 0,
      },
      576: {
        slidesPerView: 1.5,
      },
      768: {
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 1.5,
      },
      1200: {
        slidesPerView: 1.8,
      },
      1367: {
        slidesPerView: 2,
      },
      1601: {
        slidesPerView: 2.5,
        spaceBetween: 15,
      }
    },
  });
});


// Copyright year

const yearElement = document.getElementById('year');
if (yearElement) {
  const fullYear = new Date().getFullYear();
  yearElement.textContent = `${fullYear}`;
}


// Preloader

window.addEventListener("load", function() {
  setTimeout(() => {
    document.body.classList.add("loaded");
  }, 300);
});


// Disable right-click

document.addEventListener("contextmenu", function (e) {
  e.preventDefault();
});

document.addEventListener("keydown", function (e) {
  if (e.key === "F12") {
    e.preventDefault();
  }
  if (e.ctrlKey && e.shiftKey && ["I", "J", "C"].includes(e.key.toUpperCase())) {
    e.preventDefault();
  }
  if (e.ctrlKey && ["U", "S"].includes(e.key.toUpperCase())) {
    e.preventDefault();
  }
});


//my new



const aiIntelligence = {
    "assalamu alaikum, how are you today?": "Wa-Alaikum-Assalam! Alhamdulillah, I am doing great and ready to help you explore Mahedi's portfolio. How about you?",
    "what are his core technical skills and expertise?": "Mahedi specializes in HTML5, CSS3, JavaScript (ES6+), React.js, Next.js, and Tailwind CSS. He is also skilled in Firebase and UI/UX design.",
    "tell me about his professional experience and completed projects.": "Md. Mahedi Hasan has successfully completed over 350+ projects, including SunCart (E-commerce) and various professional web applications.",
    "how can i get in touch with him for a potential project?": "You can reach Mahedi via email at mdmahedi.eng@gmail.com or call him at +8801814981811. He is ready for new opportunities!",
    "default": "I'm Mahedi's AI assistant. Try asking about his skills or projects!"
};

function sendMessage() {
    const input = document.getElementById('userInput');
    const userText = input.value.trim();
    const cleanText = userText.toLowerCase();
    if (userText === "") return;

    addMessage(userText, 'user-msg');
    input.value = "";

    setTimeout(() => {
        let aiResponse = aiIntelligence[cleanText] || aiIntelligence["default"];
        // সিম্পল কীওয়ার্ড সার্চ
        if(cleanText.includes("salam")) aiResponse = aiIntelligence["assalamu alaikum, how are you today?"];
        if(cleanText.includes("skill")) aiResponse = aiIntelligence["what are his core technical skills and expertise?"];
        
        addMessage(aiResponse, 'bot-msg');
    }, 700);
}

function addMessage(text, type) {
    const chatBox = document.getElementById('chatBox');
    const msgDiv = document.createElement('div');
    msgDiv.className = `message ${type} wow fadeIn`;
    msgDiv.innerText = text;
    chatBox.appendChild(msgDiv);
    chatBox.scrollTop = chatBox.scrollHeight;
}

function askAI(query) {
    document.getElementById('userInput').value = query;
    sendMessage();
}

function handleKeyPress(e) { if (e.key === 'Enter') sendMessage(); }
