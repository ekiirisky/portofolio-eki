// Mobile menu toggle
const menuBtn = document.querySelector(".mobile-menu-btn");
const nav = document.querySelector("nav ul");

menuBtn.addEventListener("click", () => {
  nav.classList.toggle("active");
  menuBtn.classList.toggle("active");
});

// Close menu when clicking links
document.querySelectorAll("nav ul li a").forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("active");
    menuBtn.classList.remove("active");
  });
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// Initialize project sliders
document.querySelectorAll(".slider").forEach((slider) => {
  const slides = slider.querySelector(".slides");
  const slideItems = slider.querySelectorAll(".slide");
  const prevBtn = slider.querySelector(".prev");
  const nextBtn = slider.querySelector(".next");
  const dots = slider.querySelectorAll(".dot");

  let currentIndex = 0;
  const totalSlides = slideItems.length;

  function updateSlider() {
    slides.style.transition = "none"; // Matikan transisi
    slides.style.transform = `translateX(-${currentIndex * 100}%)`;

    // Update active classes
    slideItems.forEach((slide, index) => {
      slide.classList.toggle("active", index === currentIndex);
    });

    dots.forEach((dot, index) => {
      dot.classList.toggle("active", index === currentIndex);
    });
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;
    slides.style.transition = "transform 0.5s ease"; // Tambahkan transisi
    slides.style.transform = `translateX(-${currentIndex * 100}%)`;
    updateActiveClasses();
  }

  function prevSlide() {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    slides.style.transition = "transform 0.5s ease"; // Tambahkan transisi
    slides.style.transform = `translateX(-${currentIndex * 100}%)`;
    updateActiveClasses();
  }

  function goToSlide(index) {
    currentIndex = index;
    slides.style.transition = "transform 0.5s ease"; // Tambahkan transisi
    slides.style.transform = `translateX(-${currentIndex * 100}%)`;
    updateActiveClasses();
  }

  function updateActiveClasses() {
    slideItems.forEach((slide, index) => {
      slide.classList.toggle("active", index === currentIndex);
    });

    dots.forEach((dot, index) => {
      dot.classList.toggle("active", index === currentIndex);
    });
  }

  // Event listeners
  nextBtn.addEventListener("click", nextSlide);
  prevBtn.addEventListener("click", prevSlide);

  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => goToSlide(index));
  });

  // Initialize
  updateSlider();
});

document
  .querySelector(".contact-form form")
  .addEventListener("submit", function (e) {
    e.preventDefault(); // Jangan kirim form seperti biasa

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const subject = document.getElementById("subject").value;
    const message = document.getElementById("message").value;

    const fullMessage = `Halo! Saya ${name} (${email}) ingin menghubungi Anda.\n\nSubjek: ${subject}\nPesan: ${message}`;
    const encodedMessage = encodeURIComponent(fullMessage);

    const phone = "628568351056"; // Ganti dengan nomor WhatsApp kamu (tanpa +)
    const waLink = `https://wa.me/${phone}?text=${encodedMessage}`;

    window.open(waLink, "_blank");
  });

function typeEffect(element, speed) {
  const fullText = element.getAttribute("data-text");
  element.textContent = "";
  let i = 0;
  const typing = setInterval(() => {
    if (i < fullText.length) {
      element.textContent += fullText[i];
      i++;
    } else {
      clearInterval(typing);
    }
  }, speed);
}

document.addEventListener("DOMContentLoaded", () => {
  const heroTitle = document.querySelector(".hero-text h1");
  const originalText = heroTitle.textContent;
  heroTitle.setAttribute("data-text", originalText);
  typeEffect(heroTitle, 70);
});

