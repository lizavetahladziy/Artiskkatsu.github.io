// Original project content and gallery ordering, retained from the portfolio.
const projectData = [
      {
        number: '13',
        category: 'web',
        short: { pl: 'FLORE Studio', en: 'FLORE Studio' },
        title: { pl: 'FLORE Studio — strona studia florystycznego', en: 'FLORE Studio — floral atelier website' },
        type: { pl: 'Projekt strony', en: 'Website design' },
        label: { pl: 'FLORE Studio', en: 'FLORE Studio' },
        description: {
          pl: 'Koncepcja strony internetowej dla studia florystycznego. Projekt łączy sezonowy katalog bukietów z historią pracowni, ofertą kompozycji na zamówienie i dziennikiem marki.',
          en: 'A website concept for a floral atelier. The design brings together the seasonal bouquet collection, the atelier’s story, custom arrangements and the studio journal.'
        },
        facts: { pl: ['web design', 'e-commerce', 'art direction'], en: ['web design', 'e-commerce', 'art direction'] },
        color: '#e3e6dc',
        thumbnail: 'assets/flore/cover.webp',
        gallery: [
          { src: 'assets/flore/editorial-hero.jpg', preview: 'assets/flore/editorial-hero.webp', width: 2240, height: 1226 },
          { src: 'assets/flore/seasonal-collection.jpg', preview: 'assets/flore/seasonal-collection.webp', width: 2240, height: 1510 },
          { src: 'assets/flore/atelier-story.jpg', preview: 'assets/flore/atelier-story.webp', width: 2240, height: 964 },
          { src: 'assets/flore/flowers-for-every-feeling.jpg', preview: 'assets/flore/flowers-for-every-feeling.webp', width: 2240, height: 688 },
          { src: 'assets/flore/custom-bouquet-invitation.jpg', preview: 'assets/flore/custom-bouquet-invitation.webp', width: 2240, height: 887 },
          { src: 'assets/flore/client-love-note.jpg', preview: 'assets/flore/client-love-note.webp', width: 2240, height: 622 },
          { src: 'assets/flore/field-notes.jpg', preview: 'assets/flore/field-notes.webp', width: 2240, height: 1078 },
          { src: 'assets/flore/newsletter-invitation.jpg', preview: 'assets/flore/newsletter-invitation.webp', width: 2240, height: 428 },
          { src: 'assets/flore/site-footer.jpg', preview: 'assets/flore/site-footer.webp', width: 2240, height: 947 }
        ],
        galleryAlt: {
          pl: [
            'FLORE Studio — ekran otwierający z kompozycją róż.',
            'Kolekcja sezonowa — trzy bukiety z nazwami i cenami.',
            'Historia pracowni — florystka układa jasny bukiet.',
            'Kwiaty na różne okazje — urodziny, miłość i drobne gesty.',
            'Bukiet na zamówienie — zaproszenie do stworzenia własnej kompozycji.',
            'Opinia klientki — cytat i ocena studia.',
            'Dziennik FLORE — dwa artykuły z fotografiami kwiatów.',
            'Zaproszenie do newslettera Letters, in bloom.',
            'Stopka — nawigacja, dane kontaktowe i logotyp FLORE.'
          ],
          en: [
            'FLORE Studio — opening screen with an arrangement of roses.',
            'Seasonal collection — three bouquets with names and prices.',
            'Atelier story — a florist arranging a light-colored bouquet.',
            'Flowers for every feeling — birthdays, romance and small gestures.',
            'Custom bouquet invitation — an invitation to create a personal arrangement.',
            'Client love note — a testimonial and studio rating.',
            'Field notes — two articles from the FLORE journal with floral photography.',
            'Newsletter invitation — Letters, in bloom.',
            'Site footer — navigation, contact information and the FLORE wordmark.'
          ]
        }
      },
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
          { src: 'assets/updated-projects/chota-hero.jpg', width: 1280, height: 726 },
          { src: 'assets/updated-projects/chota-knowledge-base.jpg', width: 1023, height: 321 },
          { src: 'assets/updated-projects/chota-demo.jpg', width: 1280, height: 341 },
          { src: 'assets/updated-projects/chota-sign-in.jpg', width: 1280, height: 888 }
        ],
        galleryAlt: {
          pl: [
            'Logo Chota z ilustracjami dokumentów.',
            'Sekcja o bazie wiedzy Chota.',
            'Demonstracja odpowiedzi z odnośnikami do źródeł.',
            'Ekran logowania Chota.'
          ],
          en: [
            'Chota logo with illustrations of documents.',
            'Chota knowledge base section.',
            'Demo answer with references to sources.',
            'Chota sign-in screen.'
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
          { src: 'assets/updated-projects/purr-home-hero.jpg', width: 1280, height: 702 },
          { src: 'assets/updated-projects/purr-home-how-it-works.jpg', width: 1280, height: 617 },
          { src: 'assets/updated-projects/purr-home-cats.jpg', width: 1280, height: 869 },
          { src: 'assets/updated-projects/purr-home-adoption-stories.jpg', width: 1280, height: 713 },
          { src: 'assets/updated-projects/purr-home-menu.jpg', width: 1280, height: 810 },
          { src: 'assets/updated-projects/purr-home-rules.jpg', width: 1280, height: 776 },
          { src: 'assets/updated-projects/purr-home-mission.jpg', width: 1280, height: 657 },
          { src: 'assets/updated-projects/purr-home-booking.jpg', width: 1280, height: 759 }
        ],
        galleryAlt: {
          pl: [
            'Strona główna Purr Home z czarno-białym kotem.',
            'Cztery etapy wizyty i adopcji w Purr Home.',
            'Profile kotów i karta Ryzhik.',
            'Historie kotów, które znalazły dom.',
            'Menu kawiarni Purr Home.',
            'Sześć zasad przed spotkaniem z kotem.',
            'Misja i partnerzy schroniska Purr Home.',
            'Formularz rezerwacji wizyty i informacje o dojeździe.'
          ],
          en: [
            'Purr Home homepage with a black-and-white cat.',
            'Four steps for a visit and adoption at Purr Home.',
            'Cat profiles and the Ryzhik card.',
            'Stories of cats who found a home.',
            'Purr Home cafe menu.',
            'Six rules before meeting a cat.',
            'Purr Home shelter mission and partners.',
            'Visit booking form and directions.'
          ]
        }
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
          { src: 'assets/missing-objects/cover.webp', preview: 'assets/missing-objects/cover-preview.webp', width: 5760, height: 2476 },
          { src: 'assets/missing-objects/brand-system.webp', preview: 'assets/missing-objects/brand-system-preview.webp', width: 5760, height: 2316 },
          { src: 'assets/missing-objects/archive-kit.webp', preview: 'assets/missing-objects/archive-kit-preview.webp', width: 5760, height: 2804 },
          { src: 'assets/missing-objects/poster-campaign.webp', preview: 'assets/missing-objects/poster-campaign-preview.webp', width: 5760, height: 3664 },
          { src: 'assets/missing-objects/digital-archive.webp', preview: 'assets/missing-objects/digital-archive-preview.webp', width: 5760, height: 1264 }
        ],
        galleryAlt: {
          pl: [
            'Główna prezentacja identyfikacji Missing Objects.',
            'Logo, typografia i paleta kolorów Missing Objects.',
            'Karty, koperty i fotografie zestawu archiwizacyjnego.',
            'Trzy plakaty z kampanii Missing Objects.',
            'Widok cyfrowego archiwum Missing Objects.'
          ],
          en: [
            'Missing Objects identity cover.',
            'Missing Objects logo, typography and color palette.',
            'Archive kit showing cards, envelopes and photographs.',
            'Three Missing Objects campaign posters.',
            'Missing Objects digital archive screen.'
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
