'use strict';

const copy = {
  "pl": {
    "skip": "Przejdź do projektów",
    "brandNote": "Graphic & web designer",
    "navWork": "Projekty",
    "navAbout": "O mnie",
    "navContact": "Kontakt",
    "hello": "Cześć, jestem Lizaveta.",
    "heroText": "To mój mały zbiór stron, identyfikacji i rzeczy do druku.",
    "aboutEyebrow": "02 / Autorka",
    "aboutLead": "Zajmuję się projektowaniem wizualnym — od stron internetowych po rzeczy, które można wziąć do ręki.",
    "aboutText": "Lubię szukać tego jednego detalu, który nadaje projektowi charakter. Czasem jest nim kolor, czasem litera, czasem zupełnie prosty pomysł.",
    "viewCv": "Moje CV",
    "contactTitle": "Zacznijmy od cześć.",
    "contactText": "Masz pomysł na projekt? Napisz, chętnie go poznam.",
    "backTop": "Do góry ↑",
    "close": "Zamknij",
    "openSite": "Otwórz stronę",
    "moreWork": "Zobacz też",
    "next": "Następny projekt",
    "zoom": "Powiększ obraz",
    "openProject": "Otwórz projekt",
    "imagePreview": "Podgląd obrazu",
    "filterLabel": "Kategorie projektów",
    "countLabel": "projektów",
    "description": "Lizaveta Hladziy — portfolio projektantki wizualnej. Web design, identyfikacja wizualna, editorial i opakowania.",
    "categories": {
      "all": "Wszystko",
      "web": "Strony",
      "identity": "Identyfikacje",
      "editorial": "Grafika",
      "presentation": "Prezentacje",
      "packaging": "Opakowania",
      "edits": "Wideo"
    },
    "workEyebrow": "Wybrane prace / 2026",
    "contactEyebrow": "03 / Następna strona?",
    "contents": "Spis treści",
    "currentlyViewing": "Na tych stronach",
    "previous": "Poprzedni projekt",
    "footerNote": "Grafika, strony i dobre pomysły."
  },
  "en": {
    "skip": "Skip to projects",
    "brandNote": "Graphic & web designer",
    "navWork": "Projects",
    "navAbout": "About me",
    "navContact": "Contact",
    "hello": "Hello, I’m Lizaveta.",
    "heroText": "A small collection of websites, identities and things for print.",
    "aboutEyebrow": "02 / The designer",
    "aboutLead": "I’m a visual designer. I work on websites and on things you can hold in your hands.",
    "aboutText": "I like finding that one detail that gives a project its character. Sometimes it’s a colour, sometimes a letter, sometimes a very simple idea.",
    "viewCv": "My CV",
    "contactTitle": "Let’s start with hello.",
    "contactText": "Have a project in mind? Drop me a line — I’d love to hear about it.",
    "backTop": "Back to top ↑",
    "close": "Close",
    "openSite": "Open website",
    "moreWork": "You might also like",
    "next": "Next project",
    "zoom": "Enlarge image",
    "openProject": "Open project",
    "imagePreview": "Image preview",
    "filterLabel": "Project categories",
    "countLabel": "projects",
    "description": "Lizaveta Hladziy — visual designer portfolio. Web design, visual identity, editorial and packaging.",
    "categories": {
      "all": "All projects",
      "web": "Websites",
      "identity": "Identity",
      "editorial": "Graphics",
      "presentation": "Presentations",
      "packaging": "Packaging",
      "edits": "Video"
    },
    "workEyebrow": "Selected work / 2026",
    "contactEyebrow": "03 / The next page?",
    "contents": "Table of contents",
    "currentlyViewing": "On these pages",
    "previous": "Previous project",
    "footerNote": "Graphics, websites and good ideas."
  }
};

const categoryOrder = ['all', 'web', 'identity', 'editorial', 'presentation', 'packaging', 'edits'];
const displayOrder = ['06', '04', '11', '02', '10', '07', '01', '05', '08', '12', '03', '09'];
const projects = displayOrder.map(number => projectData.find(project => project.number === number));
const grid = document.getElementById('project-grid');
const filters = document.getElementById('filters');
const projectDialog = document.getElementById('project-dialog');
const imageDialog = document.getElementById('image-dialog');
const gallery = document.getElementById('project-gallery');
const fullImage = document.getElementById('full-image');
let language = 'pl';
let category = 'all';
let selectedProject = null;
let featuredNumber = '06';
try { if (localStorage.getItem('portfolio-language') === 'en') language = 'en'; } catch { /* Storage may be disabled. */ }

function localize(value) { return typeof value === 'string' ? value : value[language]; }
function visibleProjects() { return projects.filter(project => category === 'all' || project.category === category); }
function makeElement(tag, className, text) {
  const element = document.createElement(tag);
  if (className) element.className = className;
  if (text !== undefined) element.textContent = text;
  return element;
}
function thumbnail(project) {
  const source = project.previewImage || project.image || project.gallery?.[0];
  return source ? `assets/previews/${source.replace(/\.[^.]+$/, '')}.webp` : null;
}
function updateLanguage() {
  document.documentElement.lang = language;
  document.querySelector('meta[name="description"]').content = copy[language].description;
  document.querySelectorAll('[data-i18n]').forEach(element => { element.textContent = copy[language][element.dataset.i18n]; });
  document.querySelectorAll('[data-lang]').forEach(button => button.setAttribute('aria-pressed', String(button.dataset.lang === language)));
  filters.setAttribute('aria-label', copy[language].filterLabel);
  imageDialog.setAttribute('aria-label', copy[language].imagePreview);
  document.getElementById('prev-featured').setAttribute('aria-label', copy[language].previous);
  document.getElementById('next-featured').setAttribute('aria-label', copy[language].next);
  renderFilters();
  renderGrid();
}
function renderFilters() {
  filters.replaceChildren();
  categoryOrder.forEach(key => {
    const button = makeElement('button', '', copy[language].categories[key]);
    button.type = 'button';
    button.dataset.category = key;
    button.setAttribute('aria-pressed', String(category === key));
    button.addEventListener('click', () => {
      category = key;
      filters.querySelectorAll('button').forEach(item => item.setAttribute('aria-pressed', String(item === button)));
      renderGrid();
    });
    filters.append(button);
  });
}
function renderGrid() {
  grid.replaceChildren();
  const visible = visibleProjects();
  if (!visible.some(project => project.number === featuredNumber)) featuredNumber = visible[0].number;
  document.getElementById('project-count').textContent = `${String(visible.length).padStart(2, '0')} / 12`;
  document.getElementById('project-count').setAttribute('aria-label', `${visible.length} / 12 ${copy[language].countLabel}`);
  visible.forEach(project => {
    const button = makeElement('button', 'index-button');
    button.type = 'button';
    button.dataset.project = project.number;
    button.setAttribute('aria-pressed', String(project.number === featuredNumber));
    button.setAttribute('aria-controls', 'project-spread');
    button.append(makeElement('span', '', project.number), document.createTextNode(localize(project.short)), makeElement('i', '', '↗'));
    button.querySelector('i').setAttribute('aria-hidden', 'true');
    button.addEventListener('click', () => setFeatured(project.number));
    grid.append(button);
  });
  setFeatured(featuredNumber);
}
function setFeatured(number) {
  const visible = visibleProjects();
  const project = visible.find(item => item.number === number);
  if (!project) return;
  featuredNumber = number;
  grid.querySelectorAll('button').forEach(button => button.setAttribute('aria-pressed', String(button.dataset.project === number)));
  const activeIndex = grid.querySelector('[aria-pressed="true"]');
  if (activeIndex && grid.scrollWidth > grid.clientWidth) {
    grid.scrollLeft += activeIndex.getBoundingClientRect().left - grid.getBoundingClientRect().left - 2;
  }
  const button = document.getElementById('featured-project');
  button.dataset.project = number;
  button.setAttribute('aria-label', `${localize(project.short)} — ${copy[language].openProject}`);
  const mounts = { '04': '#e6e9dd', '06': '#eee4d8', '11': '#ece9e1', '02': '#e6ebed', '10': '#e9ebdc', '07': '#eee3de', '01': '#e8e2d9', '05': '#eee0dd', '08': '#e7e9df', '12': '#e4e9ee', '03': '#ede1e1' };
  button.style.setProperty('--project-color', mounts[number] || '#e9e5dc');
  document.getElementById('featured-title').textContent = localize(project.short);
  document.getElementById('featured-category').textContent = localize(project.type);
  document.getElementById('featured-number').textContent = `NO. ${number}`;
  document.getElementById('featured-position').textContent = `${String(visible.indexOf(project) + 1).padStart(2, '0')} / ${String(visible.length).padStart(2, '0')}`;
  const media = document.getElementById('featured-media');
  media.replaceChildren();
  const source = thumbnail(project);
  if (source) {
    const image = makeElement('img');
    image.src = source;
    image.alt = '';
    image.decoding = 'async';
    media.append(image);
  } else {
    const cover = makeElement('span', 'video-cover');
    cover.append(makeElement('small', '', 'MOTION / VIDEO EDIT'), makeElement('strong', '', 'forestrock.tv'), makeElement('span', 'play-icon', '▶'));
    media.append(cover);
  }
  media.setAttribute('aria-hidden', 'true');
  document.getElementById('prev-featured').disabled = visible.length < 2;
  document.getElementById('next-featured').disabled = visible.length < 2;
}
function stepFeatured(direction) {
  const visible = visibleProjects();
  const index = visible.findIndex(project => project.number === featuredNumber);
  setFeatured(visible[(index + direction + visible.length) % visible.length].number);
}
function syncScrollLock() { document.body.classList.toggle('modal-open', projectDialog.open || imageDialog.open); }
function openProject(number) {
  const project = projects.find(item => item.number === number);
  if (!project) return;
  gallery.querySelectorAll('video').forEach(video => video.pause());
  selectedProject = project;
  document.getElementById('project-label').textContent = `${project.number} / ${localize(project.short)}`;
  document.getElementById('project-category').textContent = copy[language].categories[project.category];
  document.getElementById('project-title').textContent = localize(project.title);
  document.getElementById('project-description').textContent = localize(project.description);
  document.getElementById('project-facts').replaceChildren(...project.facts[language].map(fact => makeElement('span', '', fact)));
  const site = document.getElementById('project-site');
  site.hidden = !project.url || project.hideOpenSite === true;
  if (!site.hidden) site.href = project.url;
  else site.removeAttribute('href');
  gallery.replaceChildren();
  if (project.video) {
    const video = makeElement('video');
    video.src = project.video;
    video.controls = true;
    video.playsInline = true;
    video.preload = 'metadata';
    video.setAttribute('aria-label', localize(project.title));
    video.append(makeElement('p', '', localize(project.description)));
    gallery.append(video);
  } else {
    const images = project.gallery || [project.previewImage || project.image];
    images.forEach((source, index) => {
      const item = makeElement('div', 'gallery-item');
      const button = makeElement('button', 'gallery-image');
      button.type = 'button';
      const alt = project.galleryAlt?.[language]?.[index] || `${localize(project.title)} — ${index + 1}`;
      button.setAttribute('aria-label', `${copy[language].zoom}: ${alt}`);
      const image = makeElement('img');
      image.src = source;
      image.alt = alt;
      image.loading = index === 0 ? 'eager' : 'lazy';
      image.decoding = 'async';
      button.append(image);
      button.addEventListener('click', () => {
        fullImage.src = source;
        fullImage.alt = alt;
        imageDialog.showModal();
        syncScrollLock();
      });
      const caption = makeElement('div', 'gallery-caption');
      caption.append(makeElement('span', '', `${String(index + 1).padStart(2, '0')} / ${String(images.length).padStart(2, '0')}`), makeElement('span', '', `${copy[language].zoom} ↗`));
      item.append(button, caption);
      gallery.append(item);
    });
  }
  const pool = visibleProjects().some(item => item.number === number) ? visibleProjects() : projects;
  document.getElementById('next-project').hidden = pool.length < 2;
  if (!projectDialog.open) projectDialog.showModal();
  projectDialog.scrollTop = 0;
  syncScrollLock();
  document.getElementById('project-title').focus({ preventScroll: true });
}

document.querySelectorAll('[data-lang]').forEach(button => button.addEventListener('click', () => {
  language = button.dataset.lang;
  try { localStorage.setItem('portfolio-language', language); } catch { /* Optional preference only. */ }
  updateLanguage();
}));
document.getElementById('featured-project').addEventListener('click', () => openProject(featuredNumber));
document.getElementById('prev-featured').addEventListener('click', () => stepFeatured(-1));
document.getElementById('next-featured').addEventListener('click', () => stepFeatured(1));
document.getElementById('close-project').addEventListener('click', () => projectDialog.close());
document.getElementById('close-image').addEventListener('click', () => imageDialog.close());
document.getElementById('next-project').addEventListener('click', () => {
  const pool = visibleProjects().some(project => project.number === selectedProject.number) ? visibleProjects() : projects;
  openProject(pool[(pool.findIndex(project => project.number === selectedProject.number) + 1) % pool.length].number);
});
projectDialog.addEventListener('close', () => { gallery.querySelectorAll('video').forEach(video => video.pause()); syncScrollLock(); });
imageDialog.addEventListener('close', () => { fullImage.removeAttribute('src'); syncScrollLock(); });
[projectDialog, imageDialog].forEach(dialog => {
  // Only close for a real backdrop click, not whitespace inside the dialog.
  dialog.addEventListener('click', event => {
    const bounds = dialog.getBoundingClientRect();
    if (event.target === dialog && (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom)) dialog.close();
  });
});
updateLanguage();
