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
    catHint: 'Kliknij lub stuknij po kolejnego kota.',
    catHoverHint: 'Najedź, żeby się pobawić. Kliknij po kolejnego kota.',
    nextCat: 'Pokaż następnego kota',
    cats: { tuxedo: 'Czarno-biały kot.', ginger: 'Rudy kot w paski.', calico: 'Trójkolorowy kot.', sleepy: 'Śpiący szary kot.' },
    aboutLead: 'Lubię, kiedy rzeczy dobrze wyglądają. Jeszcze bardziej — kiedy mają sens.',
    aboutText: 'Pracuję nad projektami wizualnymi, które łączą estetykę z porządkiem. Interesuje mnie design, który nie potrzebuje nadmiaru efektów, żeby wyglądać pewnie.',
    skillWebTitle: 'UX/UI i projektowanie stron',
    skillWeb: 'Układy stron, ekrany logowania i makiety interfejsów w Figmie. Czytelna hierarchia i użyteczność.',
    skillIdentityTitle: 'Identyfikacja wizualna',
    skillIdentity: 'Projekty logo, materiały i makiety marki, palety kolorów i typografia.',
    skillMediaTitle: 'Grafika i montaż wideo',
    skillMedia: 'Grafiki promocyjne i do mediów społecznościowych oraz krótkie filmy na Reels i TikToka.',
    toolkit: 'Mój warsztat', viewCv: 'Zajrzyj do mojego CV',
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
    catHint: 'Tap to meet the next cat.',
    catHoverHint: 'Hover to play. Click for the next cat.',
    nextCat: 'Show the next cat',
    cats: { tuxedo: 'Black-and-white cat.', ginger: 'Orange tabby cat.', calico: 'Calico cat.', sleepy: 'Sleepy gray cat.' },
    aboutLead: 'I like things that look good. Even more so when they make sense.',
    aboutText: 'I work on visual projects that combine aesthetics with order. I am interested in design that does not need excessive effects to feel confident.',
    skillWebTitle: 'UX/UI & web design',
    skillWeb: 'Website layouts, sign-in screens and UI mockups in Figma, with attention to visual hierarchy and usability.',
    skillIdentityTitle: 'Brand identity',
    skillIdentity: 'Logo concepts, brand assets and mockups, color palettes and typography.',
    skillMediaTitle: 'Graphic design & video editing',
    skillMedia: 'Promotional graphics, social media visuals and short-form video editing for Reels and TikTok.',
    toolkit: 'My toolkit', viewCv: 'Take a look at my CV',
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
const displayOrder = ['13', '11', '06', '04', '02', '10', '07', '01', '08', '12', '03', '09'];
const projects = displayOrder.map(number => projectData.find(project => project.number === number));
const grid = document.getElementById('project-grid');
const filters = document.getElementById('filters');
const projectDialog = document.getElementById('project-dialog');
const imageDialog = document.getElementById('image-dialog');
const gallery = document.getElementById('project-gallery');
const fullImage = document.getElementById('full-image');
const catComputer = document.getElementById('cat-computer');
const computerScreen = document.getElementById('computer-screen');
const catHintCopy = document.getElementById('cat-hint-copy');
const catAnnouncement = document.getElementById('cat-announcement');
const canHover = window.matchMedia('(hover: hover)');
const screenCats = ['tuxedo', 'ginger', 'calico', 'sleepy'];
let catIndex = 0;
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
  if (project.thumbnail) return project.thumbnail;
  const source = project.previewImage || project.image || project.gallery?.[0];
  if (source && typeof source !== 'string') return source.preview || source.src;
  return source ? `assets/previews/${source.replace(/\.[^.]+$/, '')}.webp` : null;
}
function updateCatHint() {
  catHintCopy.textContent = canHover.matches ? copy[language].catHoverHint : copy[language].catHint;
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
  catComputer.setAttribute('aria-label', copy[language].nextCat);
  catAnnouncement.textContent = copy[language].cats[screenCats[catIndex]];
  updateCatHint();
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
    card.dataset.category = project.category;
    card.style.setProperty('--project-color', project.color);
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
      const artwork = makeElement('div', 'project-artwork');
      artwork.append(img);
      visual.append(artwork);
    } else {
      const cover = makeElement('div', 'video-cover');
      cover.append(makeElement('strong', '', 'forestrock.tv'), makeElement('span', 'play-icon', '▷'));
      visual.append(cover);
    }
    visual.setAttribute('aria-hidden', 'true');
    const info = makeElement('div', 'project-card-info');
    const title = makeElement('div');
    title.append(makeElement('h3', '', localize(project.short)), makeElement('p', '', localize(project.type)));
    const arrow = makeElement('span', 'project-open', '↗');
    arrow.setAttribute('aria-hidden', 'true');
    info.append(title, arrow);
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
  projectDialog.style.setProperty('--project-color', project.color);
  document.getElementById('project-label').textContent = localize(project.short);
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
    images.forEach((entry, index) => {
      const { src, preview = src, width, height } = typeof entry === 'string' ? { src: entry } : entry;
      const button = makeElement('button', 'gallery-image');
      button.type = 'button';
      const description = project.galleryAlt?.[language]?.[index];
      const alt = description || `${localize(project.title)} — ${index + 1}`;
      button.setAttribute('aria-label', `${copy[language].zoom}: ${alt}`);
      const image = makeElement('img');
      image.src = preview;
      image.alt = alt;
      if (width && height) {
        image.width = width;
        image.height = height;
      }
      image.loading = index === 0 ? 'eager' : 'lazy';
      image.decoding = 'async';
      const frame = makeElement('span', 'gallery-frame');
      frame.append(image);
      button.addEventListener('click', () => {
        fullImage.src = src;
        fullImage.alt = alt;
        imageDialog.showModal();
        syncScrollLock();
      });
      const caption = makeElement('span', 'gallery-caption');
      const summary = makeElement('span', 'gallery-description');
      if (images.length > 1) {
        summary.append(makeElement('span', 'gallery-position', `${String(index + 1).padStart(2, '0')} / ${String(images.length).padStart(2, '0')}`));
      }
      if (description) summary.append(makeElement('span', '', description));
      caption.append(summary, makeElement('span', 'gallery-zoom', `${copy[language].zoom} ↗`));
      button.append(frame, caption);
      gallery.append(button);
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
function setCatReaction(active) {
  computerScreen.toggleAttribute('data-reacting', active);
}

function reactToPointer(event) {
  if (event.pointerType !== 'touch') setCatReaction(event.type === 'pointerenter');
}

canHover.addEventListener('change', updateCatHint);
catComputer.addEventListener('pointerenter', reactToPointer);
catComputer.addEventListener('pointerleave', reactToPointer);
catComputer.addEventListener('focus', () => {
  if (catComputer.matches(':focus-visible')) setCatReaction(true);
});
catComputer.addEventListener('blur', () => setCatReaction(false));
catComputer.addEventListener('click', () => {
  catIndex = (catIndex + 1) % screenCats.length;
  const cat = screenCats[catIndex];
  computerScreen.dataset.cat = cat;
  catAnnouncement.textContent = copy[language].cats[cat];
  setCatReaction(true);
});
catComputer.disabled = false;
document.getElementById('cat-hint').hidden = false;
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
