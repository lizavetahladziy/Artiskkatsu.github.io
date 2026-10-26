'use strict';

const copy = {
  "pl": {
    "skip": "Przejdź do projektów",
    "brandNote": "projektowanie graficzne",
    "navWork": "Projekty",
    "navAbout": "O mnie",
    "navContact": "Kontakt",
    "hello": "Miło, że tu jesteś!",
    "heroLineOne": "Cześć, jestem",
    "heroText": "Projektuję strony, identyfikacje wizualne i materiały do druku. Tutaj znajdziesz moje prace.",
    "viewWork": "Zobacz projekty",
    "workTitle": "Moje projekty",
    "workIntro": "Strony, marki i trochę eksperymentów. Kliknij projekt, żeby zobaczyć więcej.",
    "aboutEyebrow": "Po drugiej stronie ekranu",
    "aboutTitle": "Trochę o mnie",
    "aboutLead": "Jestem Lizaveta. Zajmuję się projektowaniem wizualnym — od stron internetowych po rzeczy, które można wziąć do ręki.",
    "aboutText": "W moich pracach jest miejsce na kolor i eksperymenty, ale też na prostą typografię i czytelny układ.",
    "whatIDo": "Czym się zajmuję",
    "skillWeb": "Strony i interfejsy",
    "skillIdentity": "Logotypy i identyfikacje",
    "skillEditorial": "Plakaty, opakowania, layouty",
    "toolkit": "Pod ręką",
    "viewCv": "Moje CV",
    "contactTitle": "Napisz do mnie",
    "contactText": "W sprawie projektu, współpracy albo po prostu, żeby się przywitać.",
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
    }
  },
  "en": {
    "skip": "Skip to projects",
    "brandNote": "graphic design",
    "navWork": "Projects",
    "navAbout": "About me",
    "navContact": "Contact",
    "hello": "Lovely to see you here!",
    "heroLineOne": "Hi, I’m",
    "heroText": "I design websites, visual identities and things for print. Here’s a selection of my work.",
    "viewWork": "See my projects",
    "workTitle": "My projects",
    "workIntro": "Websites, identities and a few experiments. Pick a project to take a closer look.",
    "aboutEyebrow": "Behind the screen",
    "aboutTitle": "A little about me",
    "aboutLead": "I’m Lizaveta, a visual designer. I work on websites and on things you can hold in your hands.",
    "aboutText": "My work makes room for colour and experiments, alongside simple typography and clear layouts.",
    "whatIDo": "What I work on",
    "skillWeb": "Websites and interfaces",
    "skillIdentity": "Logos and brand identities",
    "skillEditorial": "Posters, packaging and layouts",
    "toolkit": "My tools",
    "viewCv": "My CV",
    "contactTitle": "Drop me a line",
    "contactText": "About a project, working together, or just to say hello.",
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
    }
  }
};

const categoryOrder = ['all', 'web', 'identity', 'editorial', 'presentation', 'packaging', 'edits'];
const displayOrder = ['04', '06', '11', '02', '10', '07', '01', '05', '08', '12', '03', '09'];
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
  document.getElementById('project-count').textContent = `${String(visible.length).padStart(2, '0')} / 12`;
  document.getElementById('project-count').setAttribute('aria-label', `${visible.length} / 12 ${copy[language].countLabel}`);
  visible.forEach((project, index) => {
    const card = makeElement('article', 'project-card');
    card.dataset.project = project.number;
    const mounts = { '04': '#e4ebe0', '06': '#f2e6d4', '11': '#ece9e1', '02': '#e7ebee', '10': '#e9ebdc', '07': '#eee3de', '01': '#e8e2d9', '05': '#eee0dd', '08': '#e7e9df', '12': '#e4e9ee', '03': '#ede1e1' };
    card.style.setProperty('--project-color', mounts[project.number] || '#e9e5dc');
    const button = makeElement('button', 'project-button');
    button.type = 'button';
    button.setAttribute('aria-label', `${localize(project.short)} — ${copy[language].openProject}`);
    const visual = makeElement('div', 'project-visual');
    const source = thumbnail(project);
    if (source) {
      const img = makeElement('img');
      img.src = source;
      img.alt = '';
      img.loading = index < 2 ? 'eager' : 'lazy';
      img.decoding = 'async';
      visual.append(img);
    } else {
      const cover = makeElement('div', 'video-cover');
      cover.append(makeElement('small', '', 'MOTION / VIDEO EDIT'), makeElement('strong', '', 'forestrock.tv'), makeElement('span', 'play-icon', '↗'));
      visual.append(cover);
    }
    visual.append(makeElement('span', 'project-open', '↗'));
    visual.setAttribute('aria-hidden', 'true');
    const info = makeElement('div', 'project-card-info');
    info.append(makeElement('h3', '', localize(project.short)), makeElement('p', '', localize(project.type)));
    button.append(visual, info);
    button.addEventListener('click', () => openProject(project.number));
    card.append(button);
    grid.append(card);
  });
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
