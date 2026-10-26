// Original project content and gallery ordering, retained from the portfolio.
const projectData = [
      {
        number: '01',
        category: 'web',
        short: { pl: 'Sklep', en: 'Store' },
        title: { pl: 'Strona zakupowa sklepu internetowego', en: 'Web store purchase page' },
        type: { pl: 'E-commerce', en: 'E-commerce' },
        label: { pl: 'Sklep internetowy', en: 'Web store' },
        description: {
          pl: 'Widok zakupowy z naciskiem na hierarchię, czytelność i ścieżkę do finalizacji zamówienia.',
          en: 'A purchase flow view focused on hierarchy, clarity and checkout readiness.'
        },
        facts: { pl: ['HTML/CSS', 'desktop layout', 'e-commerce'], en: ['HTML/CSS', 'desktop layout', 'e-commerce'] },
        color: '#d9c7a8',
        previewImage: 'camerasite.png'
      },
      {
        number: '02',
        category: 'web',
        short: { pl: 'Chota', en: 'Chota' },
        title: { pl: 'Platforma AI-agentów dla biznesu', en: 'AI agent platform for business' },
        type: { pl: 'SaaS / AI', en: 'SaaS / AI' },
        label: { pl: 'Chota', en: 'Chota' },
        description: {
          pl: 'Strona produktu Chota: AI-agenci dla wiadomości, zgłoszeń, zapisów i przekazywania danych do CRM.',
          en: 'A product page for Chota: AI agents for messages, leads, booking support and CRM handoff.'
        },
        facts: { pl: ['SaaS', 'AI agents', 'web design'], en: ['SaaS', 'AI agents', 'web design'] },
        color: '#aeb39f',
        caseStudy: true,
        gallery: [
          'chota-hero.jpg',
          'chota-demo.jpg',
          'chota-how-it-works.jpg'
        ],
        galleryAlt: {
          pl: [
            'Chota — strona główna z logo, nawigacją i prezentacją platformy AI.',
            'Chota — sekcja demonstracyjna z pytaniem, odpowiedzią i bazą wiedzy.',
            'Chota — sekcja opisująca ładowanie dokumentów, indeksowanie i dostęp.'
          ],
          en: [
            'Chota — homepage with the logo, navigation and AI platform overview.',
            'Chota — demo section with a question, answer and knowledge base.',
            'Chota — section explaining document uploads, indexing and access.'
          ]
        },
        hideOpenSite: true,
        url: 'https://chota.by/'
      },
      {
        number: '03',
        category: 'editorial',
        short: { pl: 'Blog', en: 'Blog' },
        title: { pl: 'System postów dla bloga eksperckiego', en: 'Post system for an expert blog' },
        type: { pl: 'Social media', en: 'Social media' },
        label: { pl: 'Posty editorialowe', en: 'Editorial posts' },
        description: {
          pl: 'Szablony karuzel, cytatów i okładek z naciskiem na rytm, spójność i pracę z tekstem.',
          en: 'Carousel, quote and cover templates focused on rhythm, consistency and working with text.'
        },
        facts: { pl: ['templates', 'typography', 'content system'], en: ['templates', 'typography', 'content system'] },
        color: '#c9b8a6',
        gallery: ['ig1.jpg', 'ig2.jpg', 'ig3.jpg', 'ig4.jpg']
      },
      {
        number: '04',
        category: 'web',
        short: { pl: 'Purr Home', en: 'Purr Home' },
        title: { pl: 'Strona schroniska Purr Home', en: 'Purr Home cat shelter website' },
        type: { pl: 'Landing page', en: 'Landing page' },
        label: { pl: 'Purr Home', en: 'Purr Home' },
        description: {
          pl: 'Strona schroniska Purr Home z profilami kotów, zasadami opieki, menu i ścieżką adopcji.',
          en: 'A Purr Home shelter website with cat profiles, care guidance, menu and an adoption path.'
        },
        facts: { pl: ['HTML/CSS', 'web design', 'shelter site'], en: ['HTML/CSS', 'web design', 'shelter site'] },
        color: '#6d9b86',
        caseStudy: true,
        gallery: [
          'purr-home-hero.png',
          'purr-home-how-it-works.jpg',
          'purr-home-menu.jpg',
          'purr-home-rules.jpg',
          'purr-home-mission.jpg',
          'purr-home-cats.jpg'
        ],
        galleryAlt: {
          pl: [
            'Purr Home — strona główna schroniska dla kotów.',
            'Purr Home — sekcja Jak to działa.',
            'Purr Home — menu kawiarni.',
            'Purr Home — sześć prostych zasad przed spotkaniem z kotem.',
            'Purr Home — misja i partnerzy schroniska.',
            'Purr Home — profile kotów i karta Ryzhik.'
          ],
          en: [
            'Purr Home — cat shelter homepage.',
            'Purr Home — How it works section.',
            'Purr Home — cafe menu.',
            'Purr Home — six simple rules before meeting a cat.',
            'Purr Home — shelter mission and partners.',
            'Purr Home — cat profiles and the Ryzhik card.'
          ]
        }
      },
      {
        number: '05',
        category: 'editorial',
        short: { pl: 'Plakat', en: 'Poster' },
        title: { pl: 'Plakat wydarzenia kulturalnego', en: 'Poster for a cultural event' },
        type: { pl: 'Poster', en: 'Poster' },
        label: { pl: 'Plakat typograficzny', en: 'Type poster' },
        description: {
          pl: 'Ćwiczenie z dużą typografią, hierarchią i napięciem między pustą przestrzenią a tekstem.',
          en: 'An exercise in large typography, hierarchy and the tension between text and negative space.'
        },
        facts: { pl: ['print', 'composition', 'type'], en: ['print', 'composition', 'type'] },
        color: '#c89472',
        gallery: ['graphicsposter.jpg', 'graphics.jpg']
      },
      {
        number: '06',
        category: 'packaging',
        short: { pl: 'Kawa', en: 'Coffee' },
        title: { pl: 'Opakowania dla kawy', en: 'Coffee packaging design' },
        type: { pl: 'Packaging', en: 'Packaging' },
        label: { pl: 'Opakowanie kawy', en: 'Coffee pack' },
        description: {
          pl: 'Seria opakowań i kart produktowych dla kawy, z ilustracjami i spokojną kompozycją.',
          en: 'A coffee packaging series with illustrated packs, product cards and a calm layout system.'
        },
        facts: { pl: ['coffee', 'packaging', 'product cards'], en: ['coffee', 'packaging', 'product cards'] },
        color: '#d6cfc1',
        gallery: ['packagedesign.jpg', 'packagedesign2.jpg', 'packagedesign3.jpg', 'packagedesign4.jpg']
      },
      {
        number: '07',
        category: 'editorial',
        short: { pl: 'Magazyn', en: 'Magazine' },
        title: { pl: 'Rozkładówka magazynu', en: 'Magazine spread' },
        type: { pl: 'Editorial', en: 'Editorial' },
        label: { pl: 'Rozkładówka magazynu', en: 'Magazine spread' },
        description: {
          pl: 'Praktyka siatki, rytmu kolumn, podpisów i równowagi między obrazem a tekstem.',
          en: 'Practice with grids, column rhythm, captions and balance between image and text.'
        },
        facts: { pl: ['grid', 'editorial', 'layout'], en: ['grid', 'editorial', 'layout'] },
        color: '#a7a094',
        gallery: ['animayo.jpg', 'animayo2.jpg', 'animayo3.jpg']
      },
      {
        number: '08',
        category: 'identity',
        short: { pl: 'Logotypy', en: 'Logos' },
        title: { pl: 'Zestaw znaków i logotypów', en: 'Logo and mark collection' },
        type: { pl: 'Brand identity', en: 'Brand identity' },
        label: { pl: 'Zestaw logotypów', en: 'Logo set' },
        description: {
          pl: 'Osobny zestaw znaków, szkiców brandingowych i prostych aplikacji wizualnych.',
          en: 'A separate set of marks, branding sketches and simple visual applications.'
        },
        facts: { pl: ['logos', 'marks', 'identity'], en: ['logos', 'marks', 'identity'] },
        color: '#c7b7a3',
        gallery: [
          'chotalogo.jpg',
          'chotalogo2.jpg',
          'logoviva.jpg',
          'nasha-ezka-logo-01.jpg',
          'nasha-ezka-logo-02.jpg',
          'cat-logo-01.jpg',
          'cat-logo-02.jpg',
          'cat-logo-03.jpg'
        ]
      },
      {
        number: '09',
        category: 'edits',
        short: { pl: 'Forestrock', en: 'Forestrock' },
        title: { pl: 'Edit video dla forestrock.tv', en: 'Video edit for forestrock.tv' },
        type: { pl: 'Video edit', en: 'Video edit' },
        label: { pl: 'Forestrock.tv', en: 'Forestrock.tv' },
        description: {
          pl: 'Krótki montaż wideo przygotowany jako praca edytorska dla forestrock.tv.',
          en: 'A short video edit prepared as editing work for forestrock.tv.'
        },
        facts: { pl: ['MP4', 'editing', 'forestrock.tv'], en: ['MP4', 'editing', 'forestrock.tv'] },
        color: '#b7b0a5',
        video: 'edit.MP4',
        url: 'https://forestrock.tv/'
      },
      {
        number: '10',
        category: 'editorial',
        short: { pl: 'Forestrock IG', en: 'Forestrock IG' },
        title: { pl: 'Karty na Instagram dla Forestrock', en: 'Instagram cards for Forestrock' },
        type: { pl: 'Social media', en: 'Social media' },
        label: { pl: 'Forestrock Instagram', en: 'Forestrock Instagram' },
        description: {
          pl: 'Seria kart do karuzeli Instagram z mocną typografią, kontrastowymi akcentami i kierunkiem digitalowym.',
          en: 'A carousel card series for Instagram with bold typography, high-contrast accents and a digital-forward direction.'
        },
        facts: { pl: ['Instagram', 'carousel', 'forestrock'], en: ['Instagram', 'carousel', 'forestrock'] },
        color: '#cfe87b',
        gallery: [
          'forestrock-instagram-01.png',
          'forestrock-instagram-02.png',
          'forestrock-instagram-03.png',
          'forestrock-instagram-04.png',
          'forestrock-instagram-05.png',
          'forestrock-instagram-06.png',
          'forestrock-instagram-07.png'
        ]
      },
      {
        number: '11',
        category: 'identity',
        short: { pl: 'Missing Objects', en: 'Missing Objects' },
        title: { pl: 'System identyfikacji wizualnej Missing Objects', en: 'Missing Objects visual identity system' },
        type: { pl: 'Brand system', en: 'Brand system' },
        label: { pl: 'Missing Objects', en: 'Missing Objects' },
        description: {
          pl: 'Identyfikacja wizualna archiwum pamięci: typografia, kolor, zestaw archiwizacyjny i kampania plakatowa.',
          en: 'A visual identity for a memory archive, spanning typography, color, an archive kit and a poster campaign.'
        },
        facts: {
          pl: ['brand identity', 'editorial', 'archive system'],
          en: ['brand identity', 'editorial', 'archive system']
        },
        color: '#dedbd3',
        caseStudy: true,
        gallery: [
          'missing-objects-cover.jpg',
          'missing-objects-brand-system-detail.jpg',
          'missing-objects-archive-kit.jpg',
          'missing-objects-poster-digital-archive.jpg'
        ],
        galleryAlt: {
          pl: [
            'Missing Objects — główna prezentacja identyfikacji i pakiet archiwizacyjny.',
            'Missing Objects — szczegóły systemu identyfikacji wizualnej.',
            'Missing Objects — karty, koperty, fotografie i etykiety zestawu archiwizacyjnego.',
            'Missing Objects — kampania plakatowa.'
          ],
          en: [
            'Missing Objects — identity overview and archive package.',
            'Missing Objects — visual identity system details.',
            'Missing Objects — archive kit with cards, envelopes, photographs and labels.',
            'Missing Objects — poster campaign.'
          ]
        }
      },
      {
        number: '12',
        category: 'presentation',
        short: { pl: 'The Cube', en: 'The Cube' },
        title: { pl: 'Prezentacja koncepcji reklamowej The Cube', en: 'The Cube advertising concept presentation' },
        type: { pl: 'Prezentacja', en: 'Presentation' },
        label: { pl: 'The Cube', en: 'The Cube' },
        description: {
          pl: 'Trzyczęściowa prezentacja koncepcji nośnika reklamowego 360°: wizja produktu, sposób wyróżnienia w przestrzeni handlowej i plan uruchomienia pierwszych konstrukcji.',
          en: 'A three-part presentation for a 360° advertising display, covering the product vision, its impact in retail spaces and the launch plan for the first installations.'
        },
        facts: {
          pl: ['presentation', 'advertising', '360° display'],
          en: ['presentation', 'advertising', '360° display']
        },
        color: '#bcc5d0',
        caseStudy: true,
        gallery: [
          'the-cube-vision.jpg',
          'the-cube-360-view.jpg',
          'the-cube-launch.jpg'
        ],
        galleryAlt: {
          pl: [
            'The Cube — slajd otwierający z wizją nośnika reklamowego 360°.',
            'The Cube — slajd prezentujący widok 360° i przewagę przestrzennej konstrukcji.',
            'The Cube — slajd z planem uruchomienia pierwszych konstrukcji we wrześniu i październiku 2026.'
          ],
          en: [
            'The Cube — opening slide presenting the vision for a 360° advertising display.',
            'The Cube — slide showing the 360° view and the impact of the spatial format.',
            'The Cube — launch slide for the first installations in September and October 2026.'
          ]
        }
      }
    ];
