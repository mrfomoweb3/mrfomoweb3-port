const root = document.documentElement;
const themeButton = document.querySelector('.theme-toggle');
const moreButton = document.querySelector('.more-button');
const socialDock = document.querySelector('.social-dock');
const mobileToggle = document.querySelector('.mobile-toggle');
const nav = document.querySelector('.nav-pill');
const form = document.querySelector('.newsletter');
const message = document.querySelector('.form-message');
const danceVideo = document.querySelector('.hero-character');
const projectMarquee = document.querySelector('.project-marquee');
const projectLightbox = document.querySelector('.project-lightbox');
const lightboxImage = projectLightbox?.querySelector('img');
const lightboxClose = projectLightbox?.querySelector('.lightbox-close');
const DANCE_SPEED = 1.4;

const startDance = () => {
  if (!danceVideo) return;
  danceVideo.defaultPlaybackRate = DANCE_SPEED;
  danceVideo.playbackRate = DANCE_SPEED;
  const playback = danceVideo.play();
  if (playback) playback.catch(() => {});
};

if (danceVideo) {
  danceVideo.addEventListener('loadedmetadata', startDance, { once: true });
  danceVideo.addEventListener('canplay', startDance, { once: true });
  if (danceVideo.readyState >= 1) startDance();
}

const openProjectPreview = (image) => {
  if (!projectLightbox || !lightboxImage) return;
  lightboxImage.src = image.currentSrc || image.src;
  lightboxImage.alt = image.alt || 'Project preview';
  projectLightbox.showModal();
};

projectMarquee?.addEventListener('click', (event) => {
  const image = event.target.closest('img');
  if (image) openProjectPreview(image);
});

document.querySelectorAll('.marquee-group:not([aria-hidden]) img').forEach((image) => {
  image.tabIndex = 0;
  image.setAttribute('role', 'button');
  image.setAttribute('aria-label', `Open ${image.alt}`);
  image.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      openProjectPreview(image);
    }
  });
});

document.querySelectorAll('.project-preview').forEach((project) => {
  project.addEventListener('click', () => {
    const image = project.querySelector('img');
    if (image) openProjectPreview(image);
  });
});

lightboxClose?.addEventListener('click', () => projectLightbox.close());
projectLightbox?.addEventListener('click', (event) => {
  if (event.target === projectLightbox) projectLightbox.close();
});

const savedTheme = localStorage.getItem('mr-fomo-theme');
if (savedTheme) root.dataset.theme = savedTheme;

themeButton.addEventListener('click', () => {
  const next = root.dataset.theme === 'light' ? 'dark' : 'light';
  root.dataset.theme = next;
  localStorage.setItem('mr-fomo-theme', next);
});

moreButton.addEventListener('click', () => {
  const open = socialDock.classList.toggle('open');
  moreButton.setAttribute('aria-expanded', String(open));
});

mobileToggle.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  mobileToggle.setAttribute('aria-expanded', String(open));
});

nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('open');
  mobileToggle.setAttribute('aria-expanded', 'false');
}));

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const input = form.querySelector('input');
  if (!input.validity.valid) {
    message.textContent = 'Add a valid email and try again.';
    input.focus();
    return;
  }
  message.textContent = 'You’re in. The next note will find you.';
  form.reset();
});

const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
if (reducedMotion) {
  document.querySelectorAll('.reveal').forEach(el => el.classList.add('visible'));
} else {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  document.querySelectorAll('.reveal').forEach((el, index) => {
    el.style.transitionDelay = `${Math.min(index % 5, 3) * 55}ms`;
    observer.observe(el);
  });
}
