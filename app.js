'use strict';

const copy = {
  pl: {
    skip: 'Przejdź do projektów', navWork: 'Projekty', navAbout: 'O mnie', navContact: 'Kontakt', navLabel: 'Menu główne',
    heroLineOne: 'Dobry design.', heroLineTwo: 'Własny charakter.',
    heroText: 'Łączę wyrazisty obraz z przemyślaną strukturą. Projektuję strony, identyfikacje i rzeczy, którym warto przyjrzeć się bliżej.',
    viewWork: 'Zobacz moje prace', heroCaption: 'Mały wgląd w mój świat.', heroFooter: 'Pomysł. Forma. Charakter.',
    workEyebrow: 'Portfolio', workTitle: 'Wybrane', workTitleItalic: 'prace.',
    workIntro: 'Różne media. Ten sam głód dobrych pomysłów. Koncepcje, eksperymenty i projekty wizualne.',
    archiveEnd: 'Zawsze jest miejsce na kolejny dobry pomysł.', startProject: 'Może Twój? ↗',
    aboutEyebrow: 'Kilka słów o mnie', aboutTitle: 'Estetyka z', aboutItalic: 'intencją.',
    aboutLead: 'Lubię, kiedy rzeczy dobrze wyglądają. Jeszcze bardziej — kiedy mają sens.',
    aboutText: 'Pracuję nad projektami wizualnymi, które łączą estetykę z porządkiem. Interesuje mnie design, który nie potrzebuje nadmiaru efektów, żeby wyglądać pewnie.',
    skillWeb: 'Strony, interfejsy, systemy komponentów', skillIdentity: 'Znaki, kolory, typografia, branding',
    skillEditorial: 'Layouty, plakaty, opakowania, social media', toolkit: 'Mój warsztat', viewCv: 'Zajrzyj do mojego CV',
    contactEyebrow: 'Kontakt', contactTitle: 'Zróbmy coś', contactItalic: 'dobrego.',
    contactText: 'Masz pomysł, pytanie albo po prostu chcesz się przywitać? Napisz do mnie.',
    backTop: 'Do góry ↑', footerNote: 'Z pomysłem. I charakterem.', close: 'Zamknij', openSite: 'Otwórz stronę',
    moreWork: 'Jeszcze trochę inspiracji?', next: 'Następny projekt', zoom: 'Powiększ obraz', openProject: 'Otwórz projekt',
    imagePreview: 'Podgląd obrazu', filterLabel: 'Kategorie projektów', countLabel: 'projektów',
    description: 'Lizaveta Hladziy — portfolio projektantki wizualnej. Web design, identyfikacja wizualna, editorial i opakowania.',
    categories: { all: 'Wszystko', web: 'Web design', identity: 'Identyfikacje', editorial: 'Editorial', presentation: 'Prezentacje', packaging: 'Opakowania', edits: 'Wideo' }
  },
  en: {
    skip: 'Skip to projects', navWork: 'Work', navAbout: 'About', navContact: 'Contact', navLabel: 'Main navigation',
    heroLineOne: 'Good design.', heroLineTwo: 'A little character.',
    heroText: 'I bring bold visuals and thoughtful structure together. Designing websites, identities and things worth a closer look.',
    viewWork: 'Explore my work', heroCaption: 'A little glimpse into my world.', heroFooter: 'Idea. Form. Character.',
    workEyebrow: 'Portfolio', workTitle: 'Selected', workTitleItalic: 'work.',
    workIntro: 'Different media. The same appetite for good ideas. Concepts, experiments and visual projects.',
    archiveEnd: 'There’s always room for another good idea.', startProject: 'Maybe yours? ↗',
    aboutEyebrow: 'A little about me', aboutTitle: 'Aesthetics with', aboutItalic: 'intention.',
    aboutLead: 'I like things that look good. Even more so when they make sense.',
    aboutText: 'I work on visual projects that combine aesthetics with order. I am interested in design that does not need excessive effects to feel confident.',
    skillWeb: 'Websites, interfaces, component systems', skillIdentity: 'Marks, colour, typography, branding',
    skillEditorial: 'Layouts, posters, packaging, social media', toolkit: 'My toolkit', viewCv: 'Take a look at my CV',
    contactEyebrow: 'Get in touch', contactTitle: 'Let’s make', contactItalic: 'something good.',
    contactText: 'Have an idea, a question, or just want to say hello? I’d love to hear from you.',
    backTop: 'Back to top ↑', footerNote: 'Made with thought. And character.', close: 'Close', openSite: 'Open website',
    moreWork: 'A little more inspiration?', next: 'Next project', zoom: 'Enlarge image', openProject: 'Open project',
    imagePreview: 'Image preview', filterLabel: 'Project categories', countLabel: 'projects',
    description: 'Lizaveta Hladziy — visual designer portfolio. Web design, visual identity, editorial and packaging.',
    categories: { all: 'All work', web: 'Web design', identity: 'Identity', editorial: 'Editorial', presentation: 'Presentations', packaging: 'Packaging', edits: 'Video' }
  }
};

const categoryOrder = ['all', 'web', 'identity', 'editorial', 'presentation', 'packaging', 'edits'];
const displayOrder = ['11', '06', '04', '02', '10', '07', '01', '08', '12', '03', '09'];
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
  document.querySelectorAll('.art-piece').forEach(button => {
    const project = projects.find(item => item.number === button.dataset.project);
    button.setAttribute('aria-label', `${localize(project.short)} — ${copy[language].openProject}`);
  });
  document.querySelector('.navigation').setAttribute('aria-label', copy[language].navLabel);
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
  const count = document.getElementById('project-count');
  count.textContent = `${String(visible.length).padStart(2, '0')} / ${projects.length}`;
  count.setAttribute('aria-label', `${visible.length} / ${projects.length} ${copy[language].countLabel}`);
  visible.forEach((project, index) => {
    const card = makeElement('article', 'project-card');
    card.dataset.project = project.number;
    card.style.setProperty('--project-color', project.number === '11' ? '#e6e3db' : project.color);
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
    visual.append(makeElement('span', 'project-number', project.number), makeElement('span', 'project-open', '↗'));
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
document.querySelectorAll('.art-piece').forEach(button => button.addEventListener('click', () => openProject(button.dataset.project)));
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
