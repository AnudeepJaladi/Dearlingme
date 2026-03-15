/* ===================================================================
   DEARLING.ME — Internationalization (i18n)
   Supported languages: English (en), German (de)
   =================================================================== */

'use strict';

const translations = {

  /* ================================================================
     ENGLISH
     ================================================================ */
  en: {
    // Navigation
    'nav.home':    'Home',
    'nav.shop':    'Shop',
    'nav.about':   'Our Story',
    'nav.contact': 'Contact',
    'nav.account': 'My Account',

    // Promo banner
    'promo': '🚚 FREE shipping on orders over $50 &nbsp;|&nbsp; Use <strong>NEWBORN10</strong> for 10% off your first order',

    // Hero
    'hero.tag':          '✨ Trusted by 10,000+ happy families',
    'hero.h1':           'Every little moment <em>deserves</em> the best',
    'hero.subtitle':     'Premium baby essentials — safety-tested, beautifully made, designed for the real moments of parenthood.',
    'hero.cta1':         'Shop All Products →',
    'hero.cta2':         'Our Story',
    'hero.stat1.num':    '10k+',
    'hero.stat1.label':  'Families',
    'hero.stat2.num':    '4.9★',
    'hero.stat2.label':  'Avg Rating',
    'hero.stat3.num':    '30-Day',
    'hero.stat3.label':  'Returns',
    'hero.f1.title':     '4.9 / 5 Rating',
    'hero.f1.sub':       'From 2,847 reviews',
    'hero.f2.title':     'Safety Certified',
    'hero.f2.sub':       'BPA-free & tested',

    // Trust bar
    'trust.ship':    'Free Shipping $50+',
    'trust.safety':  'Safety Certified',
    'trust.bpa':     'BPA-Free Materials',
    'trust.returns': '30-Day Easy Returns',
    'trust.support': '24/7 Support',

    // Categories
    'cat.eyebrow':        'Browse by Category',
    'cat.h2':             'Everything baby needs',
    'cat.sub':            'Curated collections for every stage of your little one\'s journey',
    'cat.sleep':          'Sleep & Comfort',
    'cat.sleep.n':        '18 products',
    'cat.bath':           'Bath & Care',
    'cat.bath.n':         '12 products',
    'cat.feed':           'Feeding',
    'cat.feed.n':         '24 products',
    'cat.play':           'Play & Learn',
    'cat.play.n':         '31 products',
    'cat.travel':         'On the Go',
    'cat.travel.n':       '15 products',
    'cat.wear':           'Clothing & Swaddles',
    'cat.wear.n':         '22 products',

    // Products section (homepage)
    'best.eyebrow': 'Bestsellers',
    'best.h2':      'Parents can\'t get enough',
    'best.viewall': 'View All →',

    // Card categories
    'card.cat.sleep':  'Sleep',
    'card.cat.feed':   'Feeding',
    'card.cat.bath':   'Bath',
    'card.cat.play':   'Play',
    'card.cat.wear':   'Clothing',
    'card.cat.safety': 'Safety',

    // Why us
    'why.eyebrow':      'Why Dearling.me',
    'why.h2':           'Made with parents in mind',
    'why.sub':          'We obsess over the details so you don\'t have to worry about them',
    'why.s.title':      'Safety First',
    'why.s.desc':       'Every product passes rigorous safety testing. BPA-free, CE certified, and parent-approved before it ever reaches you.',
    'why.n.title':      'Natural Materials',
    'why.n.desc':       'We source organic, non-toxic materials. Because your baby\'s skin deserves nothing but the gentlest touch.',
    'why.r.title':      '30-Day Returns',
    'why.r.desc':       'Not happy? Send it back for free. No questions asked. We stand 100% behind every product we sell.',
    'why.p.title':      'Parent Support',
    'why.p.desc':       'Real parents on our support team who understand the midnight panics. We\'re here whenever you need us.',

    // Testimonials
    'test.eyebrow': 'What Parents Say',
    'test.h2':      '10,000 families can\'t be wrong',
    'test.sub':     'Real reviews from real parents — unfiltered and unedited',
    'test.1.text':  '"The sleep sack has been life-changing. My daughter went from waking every 2 hours to sleeping a full 7-hour stretch in week one. I\'ve told every parent I know."',
    'test.1.name':  'Sarah M.',
    'test.1.meta':  'Mum of 1 · Verified Purchase',
    'test.2.text':  '"Finally a suction bowl that actually sticks! My 10-month-old has been trying to catapult every bowl off the table for months. The SootheSip bowl does not move. Brilliant."',
    'test.2.name':  'James K.',
    'test.2.meta':  'Dad of 2 · Verified Purchase',
    'test.3.text':  '"I was sceptical about paying more for a baby bath, but the foldable design is genius for our small flat. Worth every penny. The quality feels premium, not plastic-cheap."',
    'test.3.name':  'Anika P.',
    'test.3.meta':  'Mum of twins · Verified Purchase',

    // Newsletter
    'news.eyebrow': 'Join the family',
    'news.h2':      'Get 10% off your first order',
    'news.sub':     'Plus parenting tips, product launches, and exclusive offers — no spam ever.',
    'news.ph':      'your@email.com',
    'news.btn':     'Claim 10% Off',
    'news.note':    '🔒 Your email is safe with us. Unsubscribe anytime.',

    // Footer
    'footer.tagline':    'Premium baby essentials for the moments that matter most. Beautifully made, safety tested, loved by families worldwide.',
    'footer.shop':       'Shop',
    'footer.help':       'Help',
    'footer.contact':    'Contact',
    'footer.all':        'All Products',
    'footer.returns':    'Returns & Refunds',
    'footer.shipping':   'Shipping Info',
    'footer.sizes':      'Size Guides',
    'footer.faq':        'FAQs',
    'footer.contactus':  'Contact Us',
    'footer.chat':       'Live chat: Mon–Fri 9am–6pm',
    'footer.dispatch':   'Orders dispatched in 1–2 days',
    'footer.copy':       '© 2025 Dearling.me · All rights reserved',

    // SHOP PAGE
    'shop.h1':         'All Products',
    'shop.sub':        '122 premium baby essentials, safety-tested and parent-approved',
    'shop.showing':    'Showing <strong>122</strong> products',
    'shop.filters':    'Filters',
    'shop.clearall':   'Clear all',
    'shop.cat.label':  'Category',
    'shop.cat.all':    'All Products (122)',
    'shop.cat.sleep':  'Sleep & Comfort (18)',
    'shop.cat.feed':   'Feeding (24)',
    'shop.cat.bath':   'Bath & Care (12)',
    'shop.cat.play':   'Play & Learn (31)',
    'shop.cat.travel': 'On the Go (15)',
    'shop.cat.wear':   'Clothing & Swaddles (22)',
    'shop.price':      'Price Range',
    'shop.upto':       'Up to $150',
    'shop.age':        'Age Group',
    'shop.age.0':      'Newborn (0–3 months)',
    'shop.age.1':      'Infant (3–6 months)',
    'shop.age.2':      'Baby (6–12 months)',
    'shop.age.3':      'Toddler (1–3 years)',
    'shop.rating':     'Rating',
    'shop.r.5':        '★★★★★ Only',
    'shop.r.4':        '★★★★☆ & above',
    'shop.r.all':      'All ratings',
    'shop.materials':  'Materials',
    'shop.sort.best':  'Best Selling',
    'shop.sort.lohi':  'Price: Low to High',
    'shop.sort.hilo':  'Price: High to Low',
    'shop.sort.new':   'Newest First',
    'shop.sort.top':   'Top Rated',
    'shop.loadmore':   'Load More Products →',

    // PRODUCT PAGE
    'prod.cat':        'Sleep & Comfort',
    'prod.title':      'DreamCloud Sleep Sack',
    'prod.readrev':    'Read reviews',
    'prod.save':       'Save 28%',
    'prod.urgency':    '<strong>Only 8 left</strong> in stock — 23 people viewing right now',
    'prod.size':       'Size',
    'prod.colour':     'Colour',
    'prod.qty':        'Quantity',
    'prod.addcart':    '🛒 Add to Cart — $42.99',
    'prod.buynow':     '⚡ Buy Now',
    'prod.t.bpa':      'BPA-Free & Non-Toxic',
    'prod.t.cert':     'CE Safety Certified',
    'prod.t.ret':      '30-Day Free Returns',
    'prod.t.ship':     'Ships in 1–2 Business Days',
    'prod.tab.desc':   'Description',
    'prod.tab.feat':   'Features',
    'prod.tab.rev':    'Reviews (1,204)',
    'prod.tab.faq':    'FAQ',
    'prod.related.ey': 'You might also love',
    'prod.related.h2': 'Complete the sleep setup',

    // ABOUT PAGE
    'about.eyebrow':   'Our Story',
    'about.h1':        'Made by a parent,<br>for every parent',
    'about.sub':       'Born from a sleepless night, a frustrated Amazon scroll, and a promise that we could do better for families everywhere.',
    'about.s.eye':     'How it started',
    'about.s.h2':      'One long night, one big idea',
    'about.s.p1':      'It was 3am on a Tuesday in 2022. Our founder, Meera, was on her fourth lap of the kitchen with a non-sleeping newborn and a growing list of grievances about the baby products she\'d spent a small fortune on.',
    'about.s.p2':      'The sleep sack was too stiff. The suction bowls didn\'t actually suction. The sensory mat arrived looking nothing like the photos. And not one of the products had been clearly safety-certified for a baby under 6 months.',
    'about.s.p3':      'By morning, Meera had sketched out what would become Dearling.me — a brand that would obsess over exactly the details that most baby companies glossed over: safety standards, material quality, and honest, accurate product descriptions.',
    'about.s.p4':      'Two years, 10,000 families, and a 4.9-star average rating later — the mission hasn\'t changed.',
    'about.s.btn':     'Shop the Collection →',
    'about.stat1.num': '10,000+',
    'about.stat1.lbl': 'Families served worldwide',
    'about.stat2.num': '4.9★',
    'about.stat2.lbl': 'Average product rating',
    'about.stat3.num': '122',
    'about.stat3.lbl': 'Products in our range',
    'about.stat4.num': '30-Day',
    'about.stat4.lbl': 'Hassle-free returns',
    'about.v.eyebrow': 'What we stand for',
    'about.v.h2':      'Our values aren\'t on a poster. They\'re in every product.',
    'about.v.sub':     'We make decisions based on these four principles — and we\'d rather carry fewer products than compromise on any of them.',
    'about.v1.title':  'Safety Above All',
    'about.v1.desc':   'Every product passes third-party safety testing before it reaches our store. No exceptions. No shortcuts. No "close enough."',
    'about.v2.title':  'Natural Materials',
    'about.v2.desc':   'We source organic, BPA-free, non-toxic materials. Baby skin is sensitive. We treat it with the respect it deserves.',
    'about.v3.title':  'Honest Descriptions',
    'about.v3.desc':   'What you see is what you get. We write product descriptions based on real testing, not marketing copy.',
    'about.v4.title':  'Parent-First Service',
    'about.v4.desc':   'Our support team is made up of real parents. They understand the 3am panic. They reply fast, with empathy, not scripts.',
    'about.v5.title':  'Responsible Sourcing',
    'about.v5.desc':   'We work with suppliers who share our values — fair wages, safe working conditions, and sustainable manufacturing practices.',
    'about.v6.title':  'Genuine Guarantee',
    'about.v6.desc':   '30-day no-questions-asked returns. If something doesn\'t work for your family, we make it right. Full stop.',
    'about.m.eye':     'Our mission',
    'about.m.h2':      'Less worry. More moments.',
    'about.m.p1':      'We know that when you\'re a new parent, every decision feels enormous. Every product you put near your baby carries weight. The last thing you need is to be worried about whether the thing you bought is actually safe.',
    'about.m.p2':      'That\'s what Dearling.me solves. We do the research — the safety certifications, the material sourcing, the durability testing — so you don\'t have to. You just get to enjoy the moments.',
    'about.m.p3':      'Every product in our store has been tested by our team (which, by the way, is mostly parents with actual babies). If we wouldn\'t use it with our own kids, it doesn\'t go on the site. Simple as that.',
    'about.cta.eye':   'Ready to start?',
    'about.cta.h2':    'Join 10,000+ happy families',
    'about.cta.sub':   'Discover products your baby will love — and you\'ll feel great about.',
    'about.cta.btn1':  'Shop All Products →',
    'about.cta.btn2':  'Talk to Us',

    // CART PAGE
    'cart.h1':        'Your Cart',
    'cart.items':     'Items',
    'cart.clear':     'Clear all',
    'cart.e.title':   'Your cart is empty',
    'cart.e.sub':     'Looks like you haven\'t added anything yet.',
    'cart.e.btn':     'Browse Products →',
    'cart.tr.ship':   'Free shipping on orders over $50',
    'cart.tr.ret':    '30-day free returns',
    'cart.tr.sec':    'Secure checkout via Shopify',
    'cart.sum.title': 'Order Summary',
    'cart.subtotal':  'Subtotal',
    'cart.shipping':  'Shipping',
    'cart.free.note': 'Add $50+ for free shipping',
    'cart.total':     'Total',
    'cart.coup.ph':   'Coupon code (e.g. NEWBORN10)',
    'cart.coup.btn':  'Apply',
    'cart.checkout':  '🔒 Proceed to Checkout',
    'cart.continue':  '← Continue Shopping',
    'cart.sec.note':  'Secure payment via Shopify',
    'cart.up.eye':    'Parents also loved',
    'cart.up.h2':     'Complete your order',

    // CONTACT PAGE
    'con.h1':         'We\'d love to hear from you',
    'con.sub':        'Real parents on our team. We reply within 24 hours — usually much faster.',
    'con.g.title':    'Get in touch',
    'con.email.t':    'Email',
    'con.email.v':    'hello@dearling.me',
    'con.email.n':    'We reply within 24 hours',
    'con.chat.t':     'Live Chat',
    'con.chat.v':     'Available via the chat widget',
    'con.chat.n':     'Monday – Friday, 9am – 6pm GMT',
    'con.ret.t':      'Returns & Refunds',
    'con.ret.v':      '30-day hassle-free returns',
    'con.ret.n':      'Include your order number in the message',
    'con.track.t':    'Order Tracking',
    'con.track.v':    'Tracking link sent at dispatch',
    'con.track.n':    'Orders dispatched within 1–2 business days',
    'con.follow':     'Follow us',
    'con.faq.title':  'Common questions',
    'con.form.title': 'Send us a message',
    'con.fn':         'First Name',
    'con.fn.ph':      'Emma',
    'con.ln':         'Last Name',
    'con.ln.ph':      'Johnson',
    'con.email.l':    'Email Address',
    'con.email.ph':   'emma@example.com',
    'con.order.l':    'Order Number (optional)',
    'con.order.ph':   'DM-12345',
    'con.subj.l':     'Subject',
    'con.subj.d':     'Select a topic…',
    'con.msg.l':      'Message',
    'con.msg.ph':     'Tell us how we can help. Include as much detail as possible so we can get you the fastest answer.',
    'con.btn':        'Send Message →',
    'con.note':       '🔒 Your information is kept private and never shared. We reply within 24 hours.',
    'con.tr.reply':   '24-hr reply time',
    'con.tr.team':    'Parent support team',
    'con.tr.ret':     '30-day returns',
    'con.tr.sec':     'Secure & private',
  },

  /* ================================================================
     GERMAN
     ================================================================ */
  de: {
    // Navigation
    'nav.home':    'Startseite',
    'nav.shop':    'Shop',
    'nav.about':   'Unsere Geschichte',
    'nav.contact': 'Kontakt',
    'nav.account': 'Mein Konto',

    // Promo banner
    'promo': '🚚 KOSTENLOSER Versand ab 50 € &nbsp;|&nbsp; Code <strong>NEWBORN10</strong> für 10 % Rabatt auf deine erste Bestellung',

    // Hero
    'hero.tag':          '✨ Von 10.000+ glücklichen Familien vertraut',
    'hero.h1':           'Jeder kleine Moment <em>verdient</em> das Beste',
    'hero.subtitle':     'Erstklassige Babyprodukte — sicherheitsgeprüft, wunderschön gestaltet, für die echten Momente der Elternschaft.',
    'hero.cta1':         'Alle Produkte →',
    'hero.cta2':         'Unsere Geschichte',
    'hero.stat1.num':    '10.000+',
    'hero.stat1.label':  'Familien',
    'hero.stat2.num':    '4,9★',
    'hero.stat2.label':  'Ø Bewertung',
    'hero.stat3.num':    '30 Tage',
    'hero.stat3.label':  'Rückgabe',
    'hero.f1.title':     '4,9 / 5 Bewertung',
    'hero.f1.sub':       'Von 2.847 Bewertungen',
    'hero.f2.title':     'Sicherheitszertifiziert',
    'hero.f2.sub':       'BPA-frei & geprüft',

    // Trust bar
    'trust.ship':    'Gratis Versand ab 50 €',
    'trust.safety':  'Sicherheitszertifiziert',
    'trust.bpa':     'BPA-freie Materialien',
    'trust.returns': '30 Tage einfache Rückgabe',
    'trust.support': '24/7 Support',

    // Categories
    'cat.eyebrow':        'Nach Kategorie stöbern',
    'cat.h2':             'Alles, was dein Baby braucht',
    'cat.sub':            'Kuratierte Kollektionen für jede Phase der Entwicklung deines Kindes',
    'cat.sleep':          'Schlafen & Komfort',
    'cat.sleep.n':        '18 Produkte',
    'cat.bath':           'Baden & Pflege',
    'cat.bath.n':         '12 Produkte',
    'cat.feed':           'Ernährung',
    'cat.feed.n':         '24 Produkte',
    'cat.play':           'Spielen & Lernen',
    'cat.play.n':         '31 Produkte',
    'cat.travel':         'Unterwegs',
    'cat.travel.n':       '15 Produkte',
    'cat.wear':           'Kleidung & Pucken',
    'cat.wear.n':         '22 Produkte',

    // Products section
    'best.eyebrow': 'Bestseller',
    'best.h2':      'Eltern können nicht genug davon bekommen',
    'best.viewall': 'Alle ansehen →',

    // Card categories
    'card.cat.sleep':  'Schlafen',
    'card.cat.feed':   'Ernährung',
    'card.cat.bath':   'Baden',
    'card.cat.play':   'Spielen',
    'card.cat.wear':   'Kleidung',
    'card.cat.safety': 'Sicherheit',

    // Why us
    'why.eyebrow':      'Warum Dearling.me',
    'why.h2':           'Mit Eltern im Sinn gemacht',
    'why.sub':          'Wir kümmern uns um die Details, damit du dir keine Sorgen machen musst',
    'why.s.title':      'Sicherheit zuerst',
    'why.s.desc':       'Jedes Produkt besteht strenge Sicherheitstests. BPA-frei, CE-zertifiziert und von Eltern geprüft.',
    'why.n.title':      'Natürliche Materialien',
    'why.n.desc':       'Wir verwenden organische, schadstofffreie Materialien. Denn die Haut deines Babys verdient nur das Sanfteste.',
    'why.r.title':      '30-Tage-Rückgabe',
    'why.r.desc':       'Nicht zufrieden? Schick es kostenlos zurück. Keine Fragen gestellt. Wir stehen 100 % hinter jedem Produkt.',
    'why.p.title':      'Eltern-Support',
    'why.p.desc':       'Echte Eltern in unserem Support-Team, die die Mitternachtspanik verstehen. Wir sind immer für dich da.',

    // Testimonials
    'test.eyebrow': 'Was Eltern sagen',
    'test.h2':      '10.000 Familien können sich nicht irren',
    'test.sub':     'Echte Bewertungen von echten Eltern — ungefiltert und unbearbeitet',
    'test.1.text':  '„Der Schlafsack war ein Wendepunkt. Meine Tochter wachte alle 2 Stunden auf und schläft jetzt 7 Stunden am Stück. Ich habe ihn allen Eltern empfohlen."',
    'test.1.name':  'Sarah M.',
    'test.1.meta':  'Mutter von 1 Kind · Verifizierter Kauf',
    'test.2.text':  '„Endlich ein Saugnapf-Schüsselset, das wirklich hält! Die SootheSip-Schüssel bewegt sich nicht. Genial."',
    'test.2.name':  'James K.',
    'test.2.meta':  'Vater von 2 Kindern · Verifizierter Kauf',
    'test.3.text':  '„Ich war skeptisch, mehr für eine Babywanne zu zahlen, aber das faltbare Design ist genial für unsere kleine Wohnung. Jeden Cent wert."',
    'test.3.name':  'Anika P.',
    'test.3.meta':  'Mutter von Zwillingen · Verifizierter Kauf',

    // Newsletter
    'news.eyebrow': 'Werde Teil der Familie',
    'news.h2':      '10 % Rabatt auf deine erste Bestellung',
    'news.sub':     'Elterntipps, Produktneuheiten und exklusive Angebote — kein Spam.',
    'news.ph':      'deine@email.de',
    'news.btn':     '10 % sichern',
    'news.note':    '🔒 Deine E-Mail ist sicher. Jederzeit abmelden.',

    // Footer
    'footer.tagline':    'Erstklassige Babyprodukte für die Momente, die zählen. Wunderschön gemacht, sicherheitsgeprüft, weltweit geliebt.',
    'footer.shop':       'Shop',
    'footer.help':       'Hilfe',
    'footer.contact':    'Kontakt',
    'footer.all':        'Alle Produkte',
    'footer.returns':    'Rücksendungen & Rückerstattungen',
    'footer.shipping':   'Versandinfo',
    'footer.sizes':      'Größentabellen',
    'footer.faq':        'FAQs',
    'footer.contactus':  'Kontaktiere uns',
    'footer.chat':       'Live-Chat: Mo–Fr 9–18 Uhr',
    'footer.dispatch':   'Versand in 1–2 Werktagen',
    'footer.copy':       '© 2025 Dearling.me · Alle Rechte vorbehalten',

    // SHOP PAGE
    'shop.h1':         'Alle Produkte',
    'shop.sub':        '122 erstklassige Babyprodukte, sicherheitsgeprüft und von Eltern empfohlen',
    'shop.showing':    '<strong>122</strong> Produkte',
    'shop.filters':    'Filter',
    'shop.clearall':   'Alle zurücksetzen',
    'shop.cat.label':  'Kategorie',
    'shop.cat.all':    'Alle Produkte (122)',
    'shop.cat.sleep':  'Schlafen & Komfort (18)',
    'shop.cat.feed':   'Ernährung (24)',
    'shop.cat.bath':   'Baden & Pflege (12)',
    'shop.cat.play':   'Spielen & Lernen (31)',
    'shop.cat.travel': 'Unterwegs (15)',
    'shop.cat.wear':   'Kleidung & Pucken (22)',
    'shop.price':      'Preisbereich',
    'shop.upto':       'Bis zu 150 €',
    'shop.age':        'Altersgruppe',
    'shop.age.0':      'Neugeborene (0–3 Monate)',
    'shop.age.1':      'Säugling (3–6 Monate)',
    'shop.age.2':      'Baby (6–12 Monate)',
    'shop.age.3':      'Kleinkind (1–3 Jahre)',
    'shop.rating':     'Bewertung',
    'shop.r.5':        '★★★★★ Nur',
    'shop.r.4':        '★★★★☆ & besser',
    'shop.r.all':      'Alle Bewertungen',
    'shop.materials':  'Materialien',
    'shop.sort.best':  'Bestseller',
    'shop.sort.lohi':  'Preis: Aufsteigend',
    'shop.sort.hilo':  'Preis: Absteigend',
    'shop.sort.new':   'Neueste zuerst',
    'shop.sort.top':   'Am besten bewertet',
    'shop.loadmore':   'Mehr Produkte laden →',

    // PRODUCT PAGE
    'prod.cat':        'Schlafen & Komfort',
    'prod.title':      'DreamCloud Schlafsack',
    'prod.readrev':    'Bewertungen lesen',
    'prod.save':       '28 % sparen',
    'prod.urgency':    '<strong>Nur noch 8 auf Lager</strong> — 23 Personen schauen gerade',
    'prod.size':       'Größe',
    'prod.colour':     'Farbe',
    'prod.qty':        'Menge',
    'prod.addcart':    '🛒 In den Warenkorb — 42,99 €',
    'prod.buynow':     '⚡ Jetzt kaufen',
    'prod.t.bpa':      'BPA-frei & schadstoffgeprüft',
    'prod.t.cert':     'CE-Sicherheitszertifiziert',
    'prod.t.ret':      '30 Tage kostenlose Rückgabe',
    'prod.t.ship':     'Versand in 1–2 Werktagen',
    'prod.tab.desc':   'Beschreibung',
    'prod.tab.feat':   'Eigenschaften',
    'prod.tab.rev':    'Bewertungen (1.204)',
    'prod.tab.faq':    'FAQ',
    'prod.related.ey': 'Das könnte dir auch gefallen',
    'prod.related.h2': 'Das Schlafsystem vervollständigen',

    // ABOUT PAGE
    'about.eyebrow':   'Unsere Geschichte',
    'about.h1':        'Von einem Elternteil,<br>für alle Eltern',
    'about.sub':       'Entstanden aus einer schlaflosen Nacht, einem frustrierten Amazon-Scrollen und dem Versprechen, es besser zu machen.',
    'about.s.eye':     'Wie alles begann',
    'about.s.h2':      'Eine lange Nacht, eine große Idee',
    'about.s.p1':      'Es war 3 Uhr morgens an einem Dienstag 2022. Unsere Gründerin Meera war auf ihrer vierten Runde durch die Küche mit einem nicht schlafenden Neugeborenen.',
    'about.s.p2':      'Der Schlafsack war zu steif. Die Saugnapf-Schüsseln saugten sich nicht fest. Die Sensorikmatte sah gar nicht wie auf den Fotos aus. Kein einziges Produkt war klar sicherheitszertifiziert für Babys unter 6 Monaten.',
    'about.s.p3':      'Bis zum Morgen hatte Meera den Grundstein für Dearling.me gelegt — eine Marke, die sich um die Details kümmern würde, über die die meisten Babyunternehmen hinwegsehen: Sicherheitsstandards, Materialqualität und ehrliche Produktbeschreibungen.',
    'about.s.p4':      'Zwei Jahre, 10.000 Familien und eine Durchschnittsbewertung von 4,9 Sternen später — die Mission hat sich nicht geändert.',
    'about.s.btn':     'Zur Kollektion →',
    'about.stat1.num': '10.000+',
    'about.stat1.lbl': 'Familien weltweit',
    'about.stat2.num': '4,9★',
    'about.stat2.lbl': 'Durchschnittliche Bewertung',
    'about.stat3.num': '122',
    'about.stat3.lbl': 'Produkte im Sortiment',
    'about.stat4.num': '30 Tage',
    'about.stat4.lbl': 'Problemlose Rückgabe',
    'about.v.eyebrow': 'Wofür wir stehen',
    'about.v.h2':      'Unsere Werte stehen nicht auf einem Poster. Sie stecken in jedem Produkt.',
    'about.v.sub':     'Wir treffen Entscheidungen nach diesen Grundsätzen — lieber weniger Produkte als Kompromisse.',
    'about.v1.title':  'Sicherheit über alles',
    'about.v1.desc':   'Jedes Produkt besteht externe Sicherheitsprüfungen. Keine Ausnahmen. Keine Abkürzungen.',
    'about.v2.title':  'Natürliche Materialien',
    'about.v2.desc':   'Wir verwenden organische, BPA-freie, schadstofffreie Materialien. Babyhaut ist empfindlich.',
    'about.v3.title':  'Ehrliche Beschreibungen',
    'about.v3.desc':   'Was du siehst, bekommst du. Produktbeschreibungen basieren auf echten Tests, nicht auf Marketing.',
    'about.v4.title':  'Eltern an erster Stelle',
    'about.v4.desc':   'Unser Support-Team besteht aus echten Eltern. Sie verstehen die 3-Uhr-Panik.',
    'about.v5.title':  'Verantwortungsvolle Beschaffung',
    'about.v5.desc':   'Wir arbeiten mit Lieferanten, die unsere Werte teilen — faire Löhne, sichere Arbeitsbedingungen.',
    'about.v6.title':  'Echte Garantie',
    'about.v6.desc':   '30 Tage Rückgabe ohne Fragen. Wenn etwas nicht passt, machen wir es richtig.',
    'about.m.eye':     'Unsere Mission',
    'about.m.h2':      'Weniger Sorgen. Mehr Momente.',
    'about.m.p1':      'Als frische Eltern fühlt sich jede Entscheidung riesig an. Das Letzte, was du brauchst, ist sich zu fragen, ob das Produkt wirklich sicher ist.',
    'about.m.p2':      'Das ist es, was Dearling.me löst. Wir machen die Recherche — die Sicherheitszertifikate, die Materialprüfung — damit du es nicht musst.',
    'about.m.p3':      'Jedes Produkt in unserem Shop wurde von unserem Team getestet. Wenn wir es nicht bei unseren eigenen Kindern nutzen würden, kommt es nicht in den Shop.',
    'about.cta.eye':   'Bereit loszulegen?',
    'about.cta.h2':    'Schließ dich 10.000+ glücklichen Familien an',
    'about.cta.sub':   'Entdecke Produkte, die dein Baby liebt — und die du mit gutem Gewissen kaufst.',
    'about.cta.btn1':  'Alle Produkte →',
    'about.cta.btn2':  'Kontakt',

    // CART PAGE
    'cart.h1':        'Dein Warenkorb',
    'cart.items':     'Artikel',
    'cart.clear':     'Alle entfernen',
    'cart.e.title':   'Dein Warenkorb ist leer',
    'cart.e.sub':     'Schaut so aus, als hättest du noch nichts hinzugefügt.',
    'cart.e.btn':     'Produkte entdecken →',
    'cart.tr.ship':   'Gratis Versand ab 50 €',
    'cart.tr.ret':    '30 Tage kostenlose Rückgabe',
    'cart.tr.sec':    'Sicherer Checkout via Shopify',
    'cart.sum.title': 'Bestellübersicht',
    'cart.subtotal':  'Zwischensumme',
    'cart.shipping':  'Versand',
    'cart.free.note': 'Ab 50 € kostenlosen Versand sichern',
    'cart.total':     'Gesamt',
    'cart.coup.ph':   'Gutscheincode (z. B. NEWBORN10)',
    'cart.coup.btn':  'Einlösen',
    'cart.checkout':  '🔒 Zur Kasse',
    'cart.continue':  '← Weiter einkaufen',
    'cart.sec.note':  'Sichere Zahlung via Shopify',
    'cart.up.eye':    'Eltern liebten auch',
    'cart.up.h2':     'Bestellung vervollständigen',

    // CONTACT PAGE
    'con.h1':         'Wir freuen uns von dir zu hören',
    'con.sub':        'Echte Eltern in unserem Team. Wir antworten innerhalb von 24 Stunden — meistens viel schneller.',
    'con.g.title':    'Kontakt aufnehmen',
    'con.email.t':    'E-Mail',
    'con.email.v':    'hello@dearling.me',
    'con.email.n':    'Wir antworten innerhalb von 24 Stunden',
    'con.chat.t':     'Live-Chat',
    'con.chat.v':     'Verfügbar über das Chat-Widget',
    'con.chat.n':     'Montag – Freitag, 9–18 Uhr MEZ',
    'con.ret.t':      'Rücksendungen & Rückerstattungen',
    'con.ret.v':      '30 Tage problemlose Rücksendungen',
    'con.ret.n':      'Bitte Bestellnummer in der Nachricht angeben',
    'con.track.t':    'Sendungsverfolgung',
    'con.track.v':    'Tracking-Link wird beim Versand gesendet',
    'con.track.n':    'Bestellungen werden in 1–2 Werktagen versendet',
    'con.follow':     'Folge uns',
    'con.faq.title':  'Häufige Fragen',
    'con.form.title': 'Nachricht senden',
    'con.fn':         'Vorname',
    'con.fn.ph':      'Emma',
    'con.ln':         'Nachname',
    'con.ln.ph':      'Müller',
    'con.email.l':    'E-Mail-Adresse',
    'con.email.ph':   'emma@beispiel.de',
    'con.order.l':    'Bestellnummer (optional)',
    'con.order.ph':   'DM-12345',
    'con.subj.l':     'Betreff',
    'con.subj.d':     'Thema auswählen…',
    'con.msg.l':      'Nachricht',
    'con.msg.ph':     'Wie können wir dir helfen? Gib so viele Details wie möglich an.',
    'con.btn':        'Nachricht senden →',
    'con.note':       '🔒 Deine Daten sind sicher. Wir antworten innerhalb von 24 Stunden.',
    'con.tr.reply':   '24 Std. Antwortzeit',
    'con.tr.team':    'Eltern-Support-Team',
    'con.tr.ret':     '30-Tage-Rückgabe',
    'con.tr.sec':     'Sicher & privat',
  }
};

/* ===================================================================
   LANGUAGE SWITCHER
   =================================================================== */
function applyLanguage(lang) {
  const t = translations[lang] || translations['en'];

  // Update all [data-i18n] elements (innerHTML)
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (t[key] !== undefined) el.innerHTML = t[key];
  });

  // Update all [data-i18n-ph] placeholders
  document.querySelectorAll('[data-i18n-ph]').forEach(el => {
    const key = el.dataset.i18nPh;
    if (t[key] !== undefined) el.placeholder = t[key];
  });

  // Update HTML lang attribute
  document.documentElement.lang = lang;

  // Save to localStorage
  localStorage.setItem('dearling_lang', lang);

  // Update active state on switcher buttons
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });
}

// Init on DOM ready
document.addEventListener('DOMContentLoaded', () => {
  const saved = localStorage.getItem('dearling_lang') || 'en';
  applyLanguage(saved);

  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => applyLanguage(btn.dataset.lang));
  });
});
