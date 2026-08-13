import type { TimelineEvent } from '../types/timeline';

export const EVENTS: TimelineEvent[] = [
  // ── 2018 ──────────────────────────────────────────────
  {
    id: 'mixicom-hostage-2018',
    title: 'Prise d\'otage aux bureaux de Mixicom',
    shortTitle: 'Prise d\'otage Mixicom',
    date: '12 juin 2018',
    dateSort: new Date('2018-06-12').getTime(),
    year: 2018,
    month: 6,
    category: 'gaming',
    description:
      'Un homme déguisé en livreur retient des employés de l\'agence de Cyprien, Squeezie et Norman pendant 4 heures à Paris. Intervention de la BRI.',
    longDescription:
      'Le 12 juin 2018, un individu souffrant de troubles psychiatriques s\'est introduit dans les bureaux de Mixicom, une agence qui gérait alors plusieurs des plus grands YouTubeurs français (Cyprien, Squeezie, Norman). Déguisé en livreur, il a retenu plusieurs employés en otage pendant environ quatre heures. Il avait apporté de l\'essence et menaçait de mettre le feu, et était muni d\'un support numérique contenant des théories complotistes. Aucun des YouTubeurs vedettes n\'était présent. La BRI (Brigade de Recherche et d\'Intervention) est intervenue pour mettre fin à la situation. Le réalisateur Ludoc a produit une série documentaire intitulée "La prise d\'otage que YouTube veut oublier", avec des témoignages exclusifs des victimes et des forces de l\'ordre.',
    intensity: 5,
    status: 'resolved',
    sources: [
      { label: 'Documentaire Ludoc (YouTube)', url: 'https://youtube.com' },
      { label: 'SensCritique', url: 'https://senscritique.com' },
    ],
    tags: ['YouTube', 'Mixicom', 'Cyprien', 'Squeezie', 'Norman', 'BRI', 'prise d\'otage'],
    keyFacts: [
      'L\'auteur était déguisé en livreur',
      'Aucun YouTubeur vedette n\'était présent',
      'Il avait apporté de l\'essence et des théories complotistes',
      'Intervention de la BRI après 4 heures',
      'Documentaire de Ludoc sorti des années plus tard',
    ],
  },
  {
    id: 'gilets-jaunes-2018',
    title: 'Mouvement des Gilets Jaunes',
    shortTitle: 'Gilets Jaunes',
    date: 'Novembre 2018 – 2019',
    dateSort: new Date('2018-11-17').getTime(),
    year: 2018,
    month: 11,
    category: 'social-movement',
    description:
      'Premier mouvement social français organisé quasi exclusivement via Facebook. Diffusion en direct de violences policières. Contre-pouvoir numérique.',
    longDescription:
      'Le mouvement des Gilets Jaunes est un tournant historique dans l\'utilisation des réseaux sociaux en France. Pour la première fois, un mouvement social d\'envergure nationale s\'est organisé quasi exclusivement via les réseaux sociaux (notamment Facebook), sans passer par les syndicats ou les partis politiques traditionnels. Les groupes Facebook ont permis de créer une identité commune et de coordonner les actions locales (blocages, ronds-points) sur tout le territoire. Les réseaux sociaux ont servi de contre-pouvoir aux médias traditionnels, les manifestants diffusant en direct des vidéos de violences policières, imposant ainsi leurs propres récits au cœur du débat public.',
    intensity: 5,
    status: 'resolved',
    sources: [
      { label: 'Vie-publique.fr', url: 'https://vie-publique.fr' },
      { label: 'Wikipedia', url: 'https://fr.wikipedia.org/wiki/Mouvement_des_Gilets_jaunes' },
    ],
    tags: ['Gilets Jaunes', 'Facebook', 'mouvements sociaux', 'manifestations', 'violences policières'],
    keyFacts: [
      'Organisé quasi exclusivement via Facebook',
      'Pas de syndicat ni parti politique à l\'origine',
      'Vidéos de violences policières diffusées en direct',
      'Contre-pouvoir numérique aux médias traditionnels',
      'Mouvement durable sur plusieurs mois',
    ],
  },

  // ── 2019 ──────────────────────────────────────────────
  {
    id: 'notre-dame-2019',
    title: 'Incendie de Notre-Dame de Paris',
    shortTitle: 'Notre-Dame en feu',
    date: '15 avril 2019',
    dateSort: new Date('2019-04-15').getTime(),
    year: 2019,
    month: 4,
    category: 'disaster',
    description:
      'Suivi en direct mondial sur Twitter. Émotion planétaire. Vague de fake news. Débat sur les dons des milliardaires.',
    longDescription:
      'L\'incendie de la cathédrale Notre-Dame de Paris le 15 avril 2019 a été suivi en direct par des millions de personnes dans le monde entier via Twitter et les réseaux sociaux. L\'événement a suscité une émotion planétaire, avec des millions de tweets partagés en quelques heures. Malgré la rapidité des images, des théories complotistes ont circulé très vite, certaines remettant en cause l\'origine accidentelle du feu et suggérant un acte criminel. Un vif débat a éclaté sur les réseaux sociaux concernant les dons massifs des milliardaires français (Arnault, Pinault) pour la reconstruction, certains les jugeant comme de la communication plutôt qu\'un véritable acte de générosité.',
    intensity: 5,
    status: 'resolved',
    sources: [
      { label: 'Wikipedia', url: 'https://fr.wikipedia.org/wiki/Incendie_de_Notre-Dame_de_Paris' },
      { label: 'AFP', url: 'https://afp.com' },
    ],
    tags: ['Notre-Dame', 'incendie', 'Paris', 'fake news', 'Twitter', 'milliardaires'],
    keyFacts: [
      'Suivi en direct mondial sur Twitter',
      'Théories complotistes sur l\'origine criminelle',
      'Débat sur les dons d\'Arnault et Pinault',
      'Des millions de tweets en quelques heures',
    ],
  },

  // ── 2020 ──────────────────────────────────────────────
  {
    id: 'covid-2020',
    title: 'Pandémie de Covid-19 & Confinements',
    shortTitle: 'Covid-19',
    date: 'Mars 2020 – 2021',
    dateSort: new Date('2020-03-17').getTime(),
    year: 2020,
    month: 3,
    category: 'disaster',
    description:
      'Explosion des usages numériques. « Infodémie » (OMS). Fake news sur les vaccins. Transformation durable des comportements.',
    longDescription:
      'La crise sanitaire du Covid-19 a accéléré la numérisation de la société française, faisant des réseaux sociaux le principal vecteur d\'interaction sociale lors des confinements. L\'OMS a qualifié le phénomène de désinformation autour du virus d\'« infodémie ». Les réseaux sociaux ont été le berceau d\'une prolifération de rumeurs, de fausses informations sur les vaccins ou les traitements, compliquant la gestion de la crise par les autorités. Cette période a pérennisé de nouveaux comportements : essor du télétravail, téléconsultations, achats en ligne, et a ancré les réseaux sociaux comme source d\'information quotidienne.',
    intensity: 5,
    status: 'resolved',
    sources: [
      { label: 'OMS', url: 'https://who.int' },
      { label: 'Vie-publique.fr', url: 'https://vie-publique.fr' },
    ],
    tags: ['Covid-19', 'confinement', 'infodémie', 'vaccins', 'fake news', 'télétravail'],
    keyFacts: [
      'Explosion des usages numériques pendant les confinements',
      '« Infodémie » qualifiée par l\'OMS',
      'Prolifération de fake news sur les vaccins',
      'Transformation durable (télétravail, streaming)',
    ],
  },
  {
    id: 'marvel-fitness-2020',
    title: 'Affaire Marvel Fitness — Prison ferme pour cyberharcèlement',
    shortTitle: 'Marvel Fitness',
    date: '21 septembre 2020',
    dateSort: new Date('2020-09-21').getTime(),
    year: 2020,
    month: 9,
    category: 'judicial',
    description:
      'Première condamnation d\'un YouTubeur à de la prison ferme pour cyberharcèlement en meute. 2 ans d\'emprisonnement dont 1 an ferme.',
    longDescription:
      'Le 21 septembre 2020, le tribunal correctionnel de Versailles a condamné le YouTubeur Marvel Fitness (Habannou S.) à deux ans d\'emprisonnement, dont un an ferme avec mandat de dépôt, assortis d\'un sursis probatoire de trois ans. Il a été reconnu coupable de cyberharcèlement à l\'encontre de neuf plaignants (six femmes et trois hommes) ainsi que de violence sur avocat. Le YouTubeur, suivi par plus de 150 000 abonnés, utilisait ses vidéos pour critiquer violemment d\'autres influenceurs et incitait sa communauté à mener des "raids" numériques contre eux. Malgré la sévérité de la peine, sa communauté a lancé le hashtag #FreeMarvel pour dénoncer la décision.',
    intensity: 4,
    status: 'resolved',
    sources: [
      { label: 'L\'ADN', url: 'https://ladn.eu' },
      { label: 'Consultation.avocat.fr', url: 'https://consultation.avocat.fr' },
      { label: 'Gens d\'Internet', url: 'https://gensdinternet.fr' },
    ],
    tags: ['Marvel Fitness', 'cyberharcèlement', 'prison', 'YouTube', '#FreeMarvel'],
    keyFacts: [
      'Première condamnation d\'un YouTubeur à de la prison ferme',
      '9 victimes (6 femmes, 3 hommes)',
      '2 ans d\'emprisonnement dont 1 an ferme',
      'Raids numériques incités contre d\'autres influenceurs',
      'Hashtag #FreeMarvel lancé par ses fans',
    ],
  },
  {
    id: 'thekairi78-2020',
    title: 'Polémique TheKairi78 & relation avec une mineure',
    shortTitle: 'TheKairi78 polémique',
    date: '2020',
    dateSort: new Date('2020-07-01').getTime(),
    year: 2020,
    month: 7,
    category: 'gaming',
    description:
      'Le streamer (33 ans) au cœur d\'une polémique pour sa relation avec une jeune fille de 16 ans. Fort débat moral sur les réseaux.',
    longDescription:
      'En 2020, le créateur de contenu TheKairi78 (Jaoued Daouki) a été au cœur d\'une vive polémique concernant sa relation avec une jeune fille de 16 ans, alors qu\'il en avait 33. Cette situation a suscité un fort débat sur la moralité sur les réseaux sociaux, bien qu\'elle n\'ait pas abouti à un procès pénal. Plus tard, en juillet 2023, une plainte pour viol a été déposée contre lui par une jeune femme, et en décembre 2024, la DGCCRF lui a infligé une amende de 45 000 euros pour promotion de NFT non déclarée.',
    intensity: 3,
    status: 'resolved',
    sources: [
      { label: 'Wikipedia', url: 'https://fr.wikipedia.org/wiki/TheKairi78' },
      { label: 'Verzeni Avocat', url: 'https://verzeni-avocat.fr' },
    ],
    tags: ['TheKairi78', 'mineure', 'polémique', 'Twitch'],
    keyFacts: [
      'Relation avec une jeune fille de 16 ans (lui 33 ans)',
      'Fort débat moral sur les réseaux sociaux',
      'Plainte pour viol déposée en juillet 2023',
      'Amende DGCCRF de 45 000€ en décembre 2024 pour promo NFT',
    ],
  },

  // ── 2021–2023 ─────────────────────────────────────────
  {
    id: 'crypto-scams-2021',
    title: 'Vague de crypto-scams & NFT par des influenceurs',
    shortTitle: 'Crypto-scams influenceurs',
    date: '2021 – 2023',
    dateSort: new Date('2021-06-01').getTime(),
    year: 2021,
    month: 6,
    category: 'judicial',
    description:
      'Projets Animoon (~6M$ de préjudice), Crypto-Gouv (~4M€ disparus). Rug pulls, pump & dump. Création du Collectif AVI.',
    longDescription:
      'Entre 2021 et 2023, la France a fait face à une multiplication des arnaques liées aux cryptomonnaies et aux NFT, souvent portées par des influenceurs. Le projet Animoon, inspiré de Pokémon et promu par Marc Blata et Jake Paul, a causé ~6 millions de dollars de préjudice. Le YouTubeur Crypto-Gouv a disparu avec ~4 millions d\'euros appartenant à 300 investisseurs. Les techniques utilisées incluaient les "rug pulls" (disparition avec les fonds), le "pump and dump" (gonflement artificiel puis revente) et le copy-trading trompeur. Face à ces dérives, le Collectif d\'Aide aux Victimes d\'Influenceurs (AVI) a été créé, et l\'AMF a renforcé sa surveillance.',
    intensity: 4,
    status: 'resolved',
    sources: [
      { label: 'AMF', url: 'https://amf-france.org' },
      { label: 'DGCCRF', url: 'https://economie.gouv.fr' },
    ],
    tags: ['crypto', 'NFT', 'arnaque', 'Animoon', 'Crypto-Gouv', 'Marc Blata', 'Collectif AVI'],
    keyFacts: [
      'Animoon : ~6M$ de préjudice (promu par Marc Blata)',
      'Crypto-Gouv : ~4M€ disparus, 300 victimes',
      'Techniques : rug pull, pump & dump, copy-trading',
      'Création du Collectif AVI pour les victimes',
    ],
  },

  // ── 2022 ──────────────────────────────────────────────
  {
    id: 'buitoni-2022',
    title: 'Scandale Nestlé / Buitoni Fraîch\'Up',
    shortTitle: 'Buitoni E.coli',
    date: 'Mars 2022',
    dateSort: new Date('2022-03-01').getTime(),
    year: 2022,
    month: 3,
    category: 'corporate',
    description:
      'Contamination E. coli STEC dans les pizzas surgelées. 2 enfants décédés, ~50 intoxications graves. Mise en examen de Nestlé France.',
    longDescription:
      'En mars 2022, la consommation de pizzas surgelées de la gamme Fraîch\'Up, fabriquées dans l\'usine Nestlé de Caudry, a été liée à une contamination par la bactérie E. coli STEC. Cette crise a entraîné le décès de deux enfants et l\'intoxication d\'une cinquantaine d\'autres, provoquant des cas graves de syndrome hémolytique et urémique (SHU). Des enquêtes de Disclose et Envoyé Spécial ont révélé des conditions d\'hygiène déplorables et des négligences documentées dès 2020. En juillet 2024, Nestlé France et sa filiale SPAC ont été mises en examen pour mise en danger de la vie d\'autrui, tromperie aggravée et mise sur le marché de produits préjudiciables à la santé.',
    intensity: 5,
    status: 'ongoing',
    sources: [
      { label: 'Disclose', url: 'https://disclose.ngo' },
      { label: 'Envoyé Spécial', url: 'https://france.tv' },
    ],
    tags: ['Nestlé', 'Buitoni', 'E. coli', 'pizzas', 'Caudry', 'scandale sanitaire'],
    keyFacts: [
      '2 enfants décédés, ~50 intoxications graves',
      'Conditions d\'hygiène déplorables à l\'usine de Caudry',
      'Négligences documentées dès 2020',
      'Mise en examen de Nestlé France en juillet 2024',
    ],
  },
  {
    id: 'gironde-fires-2022',
    title: 'Incendies de Gironde (Landiras & La Teste-de-Buch)',
    shortTitle: 'Feux de Gironde',
    date: 'Juillet 2022',
    dateSort: new Date('2022-07-12').getTime(),
    year: 2022,
    month: 7,
    category: 'disaster',
    description:
      '+30 000 hectares brûlés. Photo virale du couple sur la plage face au brasier. Vague de fake news. Solidarité numérique massive.',
    longDescription:
      'Les incendies de Gironde à l\'été 2022 ont été des événements majeurs : plus de 30 000 hectares brûlés entre Landiras et La Teste-de-Buch. L\'image d\'un couple sur une plage observant le brasier (cliché AFP) est devenue virale et symbolique. Les réseaux sociaux ont propagé d\'importantes fake news, notamment la théorie selon laquelle les feux auraient été déclenchés pour installer des panneaux solaires — des vidéos montrant des panneaux à Hostens ont été détournées alors que ces installations étaient antérieures aux incendies. Parallèlement, les réseaux ont permis une solidarité massive : cagnottes, dons, coordination des secours, appels relayés par des personnalités publiques.',
    intensity: 5,
    status: 'resolved',
    sources: [
      { label: 'Gironde.gouv.fr', url: 'https://gironde.gouv.fr' },
      { label: 'BonPote', url: 'https://bonpote.com' },
      { label: 'ENS Lyon', url: 'https://ens-lyon.fr' },
    ],
    tags: ['Gironde', 'incendie', 'forêt', 'fake news', 'solidarité', 'AFP'],
    keyFacts: [
      '+30 000 hectares brûlés',
      'Photo virale du couple face au brasier (AFP)',
      'Fake news : théorie des panneaux solaires réfutée',
      'Solidarité numérique massive (cagnottes, dons)',
    ],
  },
  {
    id: 'influvoleurs-2022',
    title: 'Booba lance la croisade contre les « Influvoleurs »',
    shortTitle: 'Influvoleurs (Booba)',
    date: 'Mi-2022 – 2024',
    dateSort: new Date('2022-07-01').getTime(),
    year: 2022,
    month: 7,
    category: 'social-media',
    description:
      'Dénonciation du dropshipping abusif, des promotions frauduleuses, de Shauna Events. La DGCCRF intensifie les contrôles.',
    longDescription:
      'À partir de mi-2022, le rappeur Booba a lancé une forte mobilisation, dénoncant les pratiques trompeuses d\'influenceurs : dropshipping abusif, promotion de produits dangereux, escroqueries financières, et l\'agence Shauna Events. Ce mouvement a médiatisé massivement les dérives du secteur et a poussé les autorités à réagir. La DGCCRF a intensifié ses contrôles dès le début 2023, constatant qu\'une très large part des profils contrôlés (près de la moitié) présentait des anomalies, allant de l\'absence de mention publicitaire à des pratiques illégales graves. Cette mobilisation a directement contribué à l\'adoption de la loi du 9 juin 2023.',
    intensity: 4,
    status: 'resolved',
    sources: [
      { label: 'DGCCRF', url: 'https://economie.gouv.fr' },
    ],
    tags: ['Booba', 'Influvoleurs', 'dropshipping', 'Shauna Events', 'DGCCRF'],
    keyFacts: [
      'Mobilisation lancée par le rappeur Booba',
      'Dénonciation du dropshipping et de Shauna Events',
      'DGCCRF : ~50% des profils contrôlés avec anomalies',
      'A directement contribué à la loi du 9 juin 2023',
    ],
  },
  {
    id: 'zevent-2022',
    title: 'ZEvent 2022 — Polémiques et record de 10M€',
    shortTitle: 'ZEvent 2022',
    date: 'Septembre 2022',
    dateSort: new Date('2022-09-10').getTime(),
    year: 2022,
    month: 9,
    category: 'gaming',
    description:
      'Absence polémique de streamers majeurs. Accusations infondées de racisme. Débat sur la Fondation GoodPlanet. Malgré tout : 10M€ récoltés.',
    longDescription:
      'L\'édition 2022 du ZEvent a été marquée par des polémiques : l\'absence de streamers comme Amine, Kameto, Gotaga, Squeezie et Inoxtag a suscité des accusations infondées de racisme envers l\'organisateur ZeratoR. Le choix de la Fondation GoodPlanet (liée à TotalEnergies et BNP Paribas) a aussi été fortement critiqué. En réponse, ZeratoR a proposé un vote communautaire pour choisir 5 associations environnementales. Les streamers absents ont confirmé des conflits d\'agenda, démentant tout boycott. Malgré ces remous, l\'événement a récolté 10 millions d\'euros, un nouveau record.',
    intensity: 3,
    status: 'resolved',
    sources: [
      { label: 'Dexerto France', url: 'https://dexerto.fr' },
      { label: 'WeTheNew', url: 'https://wethenew.com' },
    ],
    tags: ['ZEvent', 'ZeratoR', 'Amine', 'caritatif', 'Twitch', 'GoodPlanet'],
    keyFacts: [
      'Absences polémiques (Amine, Kameto, Gotaga, Squeezie)',
      'Accusations infondées de racisme démenties',
      'Choix controversé de la Fondation GoodPlanet',
      'Record de 10 millions d\'euros récoltés',
    ],
  },
  {
    id: 'gp-explorer-1-2022',
    title: 'GP Explorer 1 — Squeezie crée l\'événement',
    shortTitle: 'GP Explorer 1',
    date: '8 octobre 2022',
    dateSort: new Date('2022-10-08').getTime(),
    year: 2022,
    month: 10,
    category: 'cultural',
    description:
      'Première course de F4 entre YouTubeurs au Mans. +1 million de spectateurs simultanés sur Twitch. Naissance d\'un phénomène culturel.',
    longDescription:
      'Le GP Explorer est une course événementielle de Formule 4 organisée par le vidéaste Squeezie (Lucas Hauchard). La première édition, le 8 octobre 2022, a réuni des créateurs de contenu et des personnalités au circuit Bugatti du Mans. L\'événement a battu des records d\'audience sur Twitch avec plus d\'un million de spectateurs simultanés, devenant un véritable phénomène culturel. L\'idée a germé lors du ZEvent 2020 et s\'est concrétisée en partenariat avec la FFSA (Fédération Française du Sport Automobile).',
    intensity: 3,
    status: 'resolved',
    sources: [
      { label: 'Wikipedia', url: 'https://fr.wikipedia.org/wiki/GP_Explorer' },
      { label: 'GP-Explorer.fr', url: 'https://gp-explorer.fr' },
    ],
    tags: ['GP Explorer', 'Squeezie', 'Formule 4', 'Le Mans', 'Twitch', 'course'],
    keyFacts: [
      'Course de F4 entre YouTubeurs au circuit Bugatti',
      '+1 million de spectateurs simultanés sur Twitch',
      'Idée née lors du ZEvent 2020',
      'Encadré par la FFSA',
    ],
  },

  // ── 2023 ──────────────────────────────────────────────
  {
    id: 'loi-influenceurs-2023',
    title: 'Loi du 9 juin 2023 — Encadrement de l\'influence commerciale',
    shortTitle: 'Loi Influenceurs',
    date: '9 juin 2023',
    dateSort: new Date('2023-06-09').getTime(),
    year: 2023,
    month: 6,
    category: 'social-media',
    description:
      'Adoptée à l\'unanimité. Définition légale de l\'influenceur. Mention « publicité » obligatoire. Interdictions. Sanctions pénales.',
    longDescription:
      'Adoptée à l\'unanimité par le Parlement, la loi n°2023-451 du 9 juin 2023 définit légalement le statut d\'influenceur et impose des règles strictes : identification claire des contenus sponsorisés ("publicité", "collaboration commerciale"), obligation d\'indiquer les images retouchées ou générées par IA, interdiction de promouvoir la chirurgie esthétique ou les services financiers risqués sans agrément. Les sanctions sont lourdes : peines d\'emprisonnement et amendes. Cette loi fait de la France un pays pionnier dans la régulation de l\'influence commerciale.',
    intensity: 4,
    status: 'resolved',
    sources: [
      { label: 'Légifrance', url: 'https://legifrance.gouv.fr' },
      { label: 'Vie-publique.fr', url: 'https://vie-publique.fr' },
    ],
    tags: ['loi', 'influenceurs', 'publicité', 'DGCCRF', 'transparence'],
    keyFacts: [
      'Adoptée à l\'unanimité',
      'Définition légale de l\'influenceur',
      'Mention "publicité" obligatoire',
      'Interdiction promo chirurgie esthétique et crypto non régulées',
      'Sanctions pénales (prison + amendes)',
    ],
  },
  {
    id: 'nahel-2023',
    title: 'Mort de Nahel M. à Nanterre & Émeutes',
    shortTitle: 'Émeutes Nahel',
    date: '27 juin 2023',
    dateSort: new Date('2023-06-27').getTime(),
    year: 2023,
    month: 6,
    category: 'social-movement',
    description:
      'Vidéo virale du tir policier. Émeutes nationales amplifiées par TikTok, Snapchat. Macron évoque la coupure des réseaux.',
    longDescription:
      'La mort de Nahel Merzouk, abattu par un policier lors d\'un contrôle routier à Nanterre le 27 juin 2023, a déclenché des émeutes nationales. La vidéo du tir est devenue virale quasi instantanément, provoquant une onde de choc. TikTok, Snapchat et Twitter/X ont agi comme des amplificateurs massifs : les vidéos de dégradations ont créé un mimétisme entre villes, et la carte interactive de Snapchat a permis de localiser les points de tension en temps réel. Emmanuel Macron a évoqué la possibilité de couper les réseaux sociaux. La cagnotte en soutien au policier a récolté +1M€, exacerbant les tensions. Le rôle des réseaux a été au cœur du débat politique.',
    intensity: 5,
    status: 'resolved',
    sources: [
      { label: 'Wikipedia', url: 'https://fr.wikipedia.org/wiki/Mort_de_Nahel_Merzouk' },
      { label: 'TV5Monde', url: 'https://tv5monde.com' },
      { label: 'Vie-publique.fr', url: 'https://vie-publique.fr' },
    ],
    tags: ['Nahel', 'Nanterre', 'émeutes', 'TikTok', 'Snapchat', 'violences policières'],
    keyFacts: [
      'Vidéo du tir policier devenue virale instantanément',
      'Émeutes amplifiées par TikTok et Snapchat',
      'Macron évoque la coupure des réseaux sociaux',
      'Cagnotte pour le policier : +1M€ en quelques jours',
      'Mimétisme entre villes via les réseaux',
    ],
  },
  {
    id: 'majorite-numerique-2023',
    title: 'Loi « majorité numérique » du 7 juillet 2023',
    shortTitle: 'Majorité numérique 15 ans',
    date: '7 juillet 2023',
    dateSort: new Date('2023-07-07').getTime(),
    year: 2023,
    month: 7,
    category: 'social-media',
    description:
      'Fixe à 15 ans l\'âge de la majorité numérique. Autorisation parentale requise pour -15 ans. Restera largement inappliquée.',
    longDescription:
      'La loi du 7 juillet 2023 fixe à 15 ans l\'âge de la majorité numérique en France : un mineur de 15 ans peut consentir seul au traitement de ses données personnelles. L\'inscription des moins de 15 ans sur un réseau social nécessite l\'autorisation d\'un parent. Faute de décret d\'application et de solutions techniques de vérification d\'âge, ces dispositions sont restées en grande partie théoriques et peu appliquées.',
    intensity: 2,
    status: 'resolved',
    sources: [
      { label: 'Légifrance', url: 'https://legifrance.gouv.fr' },
      { label: 'MAE.fr', url: 'https://mae.fr' },
    ],
    tags: ['majorité numérique', 'mineurs', '15 ans', 'réseaux sociaux', 'loi'],
    keyFacts: [
      'Âge de la majorité numérique fixé à 15 ans',
      'Autorisation parentale requise pour les -15 ans',
      'Largement inappliquée faute de décrets',
      'Pas de solutions techniques de vérification d\'âge',
    ],
  },
  {
    id: 'shrinkflation-2023',
    title: 'Shrinkflation — Carrefour dénonce les marques',
    shortTitle: 'Shrinkflation Carrefour',
    date: 'Septembre 2023',
    dateSort: new Date('2023-09-01').getTime(),
    year: 2023,
    month: 9,
    category: 'corporate',
    description:
      'Carrefour appose des affichettes "Name & Shame" sur des produits ayant réduit leur contenu. Obligation légale d\'affichage en juillet 2024.',
    longDescription:
      'En septembre 2023, Carrefour a lancé une campagne médiatique en apposant des affichettes sur des produits de grandes marques (PepsiCo, Unilever, etc.) pour dénoncer la "shrinkflation" : réduction du contenu sans baisse de prix. Cette approche "name and shame" a été critiquée par les industriels et certaines associations comme 60 Millions de Consommateurs, qui ont souligné que Carrefour pratiquait la même chose sur ses propres marques distributeurs. L\'affaire a mené à une nouvelle obligation légale : depuis le 1er juillet 2024, les distributeurs doivent afficher les cas de shrinkflation pendant 2 mois.',
    intensity: 3,
    status: 'resolved',
    sources: [
      { label: 'Economie.gouv.fr', url: 'https://economie.gouv.fr' },
      { label: 'Foodwatch', url: 'https://foodwatch.org' },
    ],
    tags: ['shrinkflation', 'Carrefour', 'name and shame', 'consommation', 'prix'],
    keyFacts: [
      'Affichettes "name and shame" en magasin',
      'Carrefour aussi critiqué pour ses propres marques',
      'Obligation légale d\'affichage dès juillet 2024',
      'Pratique dénoncée par foodwatch et 60 Millions',
    ],
  },
  {
    id: 'gp-explorer-2-2023',
    title: 'GP Explorer 2 — Record de 1,3M spectateurs',
    shortTitle: 'GP Explorer 2',
    date: '2023',
    dateSort: new Date('2023-10-07').getTime(),
    year: 2023,
    month: 10,
    category: 'cultural',
    description:
      'Pic de 1,3 million de spectateurs simultanés sur Twitch. Squeezie confirme le phénomène GP Explorer.',
    longDescription:
      'La deuxième édition du GP Explorer, organisée par Squeezie en 2023, a atteint un pic de 1,3 million de spectateurs simultanés sur Twitch, dépassant le record de la première édition. L\'événement a confirmé que les créateurs de contenu pouvaient organiser des compétitions sportives d\'envergure professionnelle.',
    intensity: 2,
    status: 'resolved',
    sources: [
      { label: 'Wikipedia', url: 'https://fr.wikipedia.org/wiki/GP_Explorer' },
      { label: 'France Télévisions', url: 'https://francetelevisions.fr' },
    ],
    tags: ['GP Explorer', 'Squeezie', 'Twitch', 'course', 'record'],
    keyFacts: [
      '1,3 million de spectateurs simultanés sur Twitch',
      'Record du GP Explorer battu',
      'Confirmation du phénomène culturel',
    ],
  },

  // ── 2024 ──────────────────────────────────────────────
  {
    id: 'nestle-waters-2024',
    title: 'Nestlé Waters — Eaux purifiées illégalement',
    shortTitle: 'Nestlé Waters scandale',
    date: 'Début 2024',
    dateSort: new Date('2024-01-15').getTime(),
    year: 2024,
    month: 1,
    category: 'corporate',
    description:
      'Perrier, Vittel, Hépar, Contrex traitées aux UV et charbon actif (interdit). Fraude depuis des années. L\'État savait depuis 2021.',
    longDescription:
      'Début 2024, des enquêtes ont révélé que Nestlé Waters utilisait des traitements de purification interdits (UV, filtres à charbon actif, microfiltration) sur ses eaux minérales naturelles Perrier, Vittel, Hépar et Contrex — en violation de la réglementation qui impose une "pureté originelle" sans traitement. La fraude durait depuis des années. En septembre 2024, une Convention Judiciaire d\'Intérêt Public (CJIP) a abouti à une amende de 2 millions d\'euros, jugée "dérisoire" par foodwatch et France Nature Environnement. Une commission d\'enquête sénatoriale a révélé que l\'État était au courant depuis 2021 sans avoir alerté les consommateurs.',
    intensity: 4,
    status: 'ongoing',
    sources: [
      { label: 'Sénat', url: 'https://senat.fr' },
      { label: 'Foodwatch', url: 'https://foodwatch.org' },
    ],
    tags: ['Nestlé', 'Perrier', 'Vittel', 'Hépar', 'eau', 'fraude', 'CJIP'],
    keyFacts: [
      'Traitements interdits sur les eaux "minérales naturelles"',
      'Fraude depuis des années',
      'Amende CJIP de 2M€ jugée "dérisoire"',
      'Commission d\'enquête sénatoriale',
      'L\'État savait depuis 2021',
    ],
  },
  {
    id: 'squeezie-legislatives-2024',
    title: 'Squeezie & la Lettre Ouverte contre le RN',
    shortTitle: 'Squeezie anti-RN',
    date: '14 juin 2024',
    dateSort: new Date('2024-06-14').getTime(),
    year: 2024,
    month: 6,
    category: 'social-movement',
    description:
      'Publication Instagram contre le RN. Appel au vote. Suivi par Mister V, Léna Situations. Fort soutien et fortes critiques.',
    longDescription:
      'Le 14 juin 2024, à l\'approche des élections législatives anticipées, Squeezie a publié une lettre ouverte sur Instagram, prenant position fermement contre le Rassemblement National. Il a détaillé les votes passés du RN sur l\'égalité salariale, l\'IVG, le SMIC et les droits LGBTQIA+. Habituellement apolitique, il a estimé que la montée du RN dépassait le cadre d\'un simple choix politique. D\'autres créateurs (Mister V, Léna Situations, Just Riadh) ont suivi. La publication a suscité un fort soutien mais aussi des critiques virulentes sur l\'implication politique des influenceurs.',
    intensity: 4,
    status: 'resolved',
    sources: [
      { label: 'Anadolu Agency', url: 'https://aa.com.tr' },
      { label: 'Rotek', url: 'https://rotek.fr' },
    ],
    tags: ['Squeezie', 'RN', 'législatives', 'politique', 'Instagram', 'Léna Situations'],
    keyFacts: [
      'Lettre ouverte Instagram contre le RN',
      'Habituellement apolitique, première prise de position',
      'Suivi par Mister V, Léna Situations, Just Riadh',
      'Fort soutien et fortes critiques',
    ],
  },
  {
    id: 'durov-arrest-2024',
    title: 'Arrestation de Pavel Durov (Telegram) en France',
    shortTitle: 'Durov arrêté',
    date: '24 août 2024',
    dateSort: new Date('2024-08-24').getTime(),
    year: 2024,
    month: 8,
    category: 'judicial',
    description:
      'Interpellé au Bourget. 12 chefs d\'accusation. Contrôle judiciaire. Débat mondial sur la responsabilité des plateformes.',
    longDescription:
      'Pavel Durov, fondateur et PDG de Telegram, a été arrêté le 24 août 2024 à l\'aéroport de Paris-Le Bourget. Mis en examen pour 12 chefs d\'accusation, incluant complicité dans la diffusion d\'images pédopornographiques, trafic de stupéfiants, escroquerie et criminalité organisée. Placé sous contrôle judiciaire avec interdiction de quitter la France (assouplie en mars 2025). Il a qualifié les accusations d\'"absurdes", arguant qu\'il ne pouvait être tenu responsable des crimes d\'utilisateurs. L\'affaire a suscité un débat mondial sur la responsabilité des plateformes numériques.',
    intensity: 5,
    status: 'ongoing',
    sources: [
      { label: 'Wikipedia', url: 'https://fr.wikipedia.org/wiki/Pavel_Durov' },
      { label: 'TV5Monde', url: 'https://tv5monde.com' },
      { label: 'Next.ink', url: 'https://next.ink' },
    ],
    tags: ['Pavel Durov', 'Telegram', 'arrestation', 'Le Bourget', 'modération', 'plateformes'],
    keyFacts: [
      'Arrêté à l\'aéroport du Bourget (Azerbaïdjan → Paris)',
      '12 chefs d\'accusation',
      'Contrôle judiciaire, interdiction de quitter la France',
      'Débat mondial sur la responsabilité des plateformes',
      'Autorisation de quitter la France obtenue en mars 2025',
    ],
  },
  {
    id: 'kaizen-inoxtag-2024',
    title: 'Inoxtag — Documentaire Kaizen & l\'Everest',
    shortTitle: 'Kaizen (Inoxtag)',
    date: 'Septembre 2024',
    dateSort: new Date('2024-09-01').getTime(),
    year: 2024,
    month: 9,
    category: 'cultural',
    description:
      'Sortie cinéma événementielle. Polémiques : touristification de l\'Everest, impact environnemental, narcissisme. Succès populaire massif.',
    longDescription:
      'Le documentaire "Kaizen : 1 an pour gravir l\'Everest", centré sur l\'ascension de l\'Everest par le YouTubeur Inoxtag (Inès Benazzouz), est sorti en cinéma en septembre 2024. Succès populaire massif avec des millions de vues, mais polémiques multiples : accusation de "touristification" de la haute montagne, recours aux sherpas et à l\'oxygène vu comme du tourisme de luxe (~50 000€/personne), impact environnemental, accusations de narcissisme ("égotrip de gamin"), et paradoxe d\'un message de déconnexion venant d\'une figure 100% digitale. La qualité technique a néanmoins été largement saluée.',
    intensity: 3,
    status: 'resolved',
    sources: [
      { label: 'Wikipedia', url: 'https://fr.wikipedia.org/wiki/Kaizen_(film)' },
      { label: 'Elle.ch', url: 'https://elle.ch' },
      { label: 'Démotivateur', url: 'https://demotivateur.fr' },
    ],
    tags: ['Inoxtag', 'Kaizen', 'Everest', 'documentaire', 'cinéma', 'polémique'],
    keyFacts: [
      'Sortie événementielle en cinéma',
      'Polémique : "touristification" de l\'Everest',
      '~50 000€ par personne pour l\'expédition',
      'Accusations de narcissisme et paradoxe du message',
      'Qualité technique saluée malgré les critiques',
    ],
  },
  {
    id: 'ordonnance-influenceurs-2024',
    title: 'Ordonnance du 6 novembre 2024 — Ajustement loi influenceurs',
    shortTitle: 'Ordonnance influenceurs',
    date: '6 novembre 2024',
    dateSort: new Date('2024-11-06').getTime(),
    year: 2024,
    month: 11,
    category: 'social-media',
    description:
      'Alignement sur le Digital Services Act européen. Assouplissement des mentions obligatoires.',
    longDescription:
      'L\'ordonnance du 6 novembre 2024 aligne le cadre français sur les directives européennes, notamment le Digital Services Act. Elle apporte des assouplissements sur les mentions obligatoires tout en maintenant l\'exigence de clarté pour le consommateur.',
    intensity: 1,
    status: 'resolved',
    sources: [
      { label: 'Légifrance', url: 'https://legifrance.gouv.fr' },
    ],
    tags: ['ordonnance', 'influenceurs', 'DSA', 'Digital Services Act'],
    keyFacts: [
      'Alignement sur le Digital Services Act européen',
      'Assouplissement des mentions obligatoires',
      'Maintien de l\'exigence de clarté',
    ],
  },

  // ── 2025 ──────────────────────────────────────────────
  {
    id: 'gp-explorer-3-2025',
    title: 'GP Explorer 3 « The Last Race »',
    shortTitle: 'GP Explorer 3 (fin)',
    date: '3-5 octobre 2025',
    dateSort: new Date('2025-10-03').getTime(),
    year: 2025,
    month: 10,
    category: 'cultural',
    description:
      'Ultime édition sur 3 jours au Mans. Diffusé sur France Télévisions. Fin du format par choix de Squeezie.',
    longDescription:
      'Annoncée comme l\'ultime édition, le GP Explorer 3 "The Last Race" s\'est tenu du 3 au 5 octobre 2025. Le format a été étendu sur trois jours avec concerts, qualifications et course sprint. Pour la première fois, l\'événement a été diffusé sur les antennes de France Télévisions en plus des plateformes numériques. Squeezie a choisi d\'arrêter l\'événement pour conclure sur une note positive et éviter l\'essoufflement du concept.',
    intensity: 3,
    status: 'resolved',
    sources: [
      { label: 'France Télévisions', url: 'https://francetelevisions.fr' },
      { label: 'Wikipedia', url: 'https://fr.wikipedia.org/wiki/GP_Explorer' },
    ],
    tags: ['GP Explorer', 'Squeezie', 'The Last Race', 'France Télévisions', 'Le Mans'],
    keyFacts: [
      'Ultime édition du GP Explorer',
      '3 jours : concerts, qualifications, course sprint',
      'Diffusé sur France Télévisions',
      'Fin du format par choix de Squeezie',
    ],
  },
  {
    id: 'decret-contrat-2025',
    title: 'Décret du 28 nov 2025 — Contrat obligatoire influenceurs',
    shortTitle: 'Contrat obligatoire 1000€',
    date: '28 novembre 2025',
    dateSort: new Date('2025-11-28').getTime(),
    year: 2025,
    month: 11,
    category: 'social-media',
    description:
      'Seuil de 1 000€ HT pour contrat écrit obligatoire entre influenceur et marque. Effectif au 1er janvier 2026.',
    longDescription:
      'Le décret du 28 novembre 2025 rend opérationnel l\'article 8 de la loi de 2023 sur l\'influence commerciale. Il fixe à 1 000€ HT le seuil de rémunération (en numéraire ou en nature/gifting) à partir duquel un contrat écrit est obligatoire entre l\'influenceur et la marque. Effectif au 1er janvier 2026, cette mesure marque une étape majeure vers la fin de l\'informel dans le secteur.',
    intensity: 2,
    status: 'resolved',
    sources: [
      { label: 'Légifrance', url: 'https://legifrance.gouv.fr' },
    ],
    tags: ['décret', 'contrat', 'influenceurs', '1000€', 'gifting'],
    keyFacts: [
      'Seuil de 1 000€ HT pour contrat obligatoire',
      'En numéraire ou en nature (gifting)',
      'Effectif au 1er janvier 2026',
      'Fin de l\'informel dans le secteur',
    ],
  },

  // ── 2026 ──────────────────────────────────────────────
  {
    id: 'lena-situations-2026',
    title: 'Léna Situations & entourage — Polémique et bad buzz massif',
    shortTitle: 'Polémique Léna Situations',
    date: 'Courant 2026',
    dateSort: new Date('2026-06-15').getTime(),
    year: 2026,
    month: 6,
    category: 'social-media',
    description:
      'Gros pressing sur les réseaux : accusations de sionisme, hypocrisie sur l\'évolution de YouTube, et déconnexion avec son public.',
    longDescription:
      'En 2026, Léna Situations et une grande partie de son entourage (incluant Squeezie et d\'autres créateurs) ont subi un très fort « pressing » et un bad buzz massif sur les réseaux sociaux. Au cœur de la polémique : des accusations de sionisme et des critiques vives concernant leur positionnement vis-à-vis de la situation à Gaza. À cela s\'est ajoutée une controverse sur l\'hypocrisie du groupe : après avoir longtemps critiqué les grosses productions télévisuelles, ils ont été accusés de reproduire le même schéma sur YouTube pour s\'enrichir. Enfin, des déclarations de Léna se plaignant de "ne pas assez profiter de la vie" ont été perçues comme indécentes et déconnectées, rappelant son statut de millionnaire.',
    intensity: 5,
    status: 'recent',
    sources: [
      { label: 'Réseaux sociaux', url: 'https://twitter.com' }
    ],
    tags: ['Léna Situations', 'Squeezie', 'bad buzz', 'Gaza', 'YouTube', 'polémique'],
    keyFacts: [
      'Accusations de sionisme et critiques sur leur silence ou positionnement',
      'Bad buzz partagé par tout son entourage de créateurs (dont Squeezie)',
      'Accusations d\'hypocrisie sur la transformation de YouTube en télévision',
      'Déclarations jugées déconnectées de la réalité (se plaindre en étant millionnaire)'
    ],
  },
  {
    id: 'sony-digital-2026',
    title: 'Sony & Rockstar — Le scandale du passage au "Tout Digital"',
    shortTitle: 'Scandale Tout Digital (Sony/Rockstar)',
    date: 'Été 2026',
    dateSort: new Date('2026-07-01').getTime(),
    year: 2026,
    month: 7,
    category: 'gaming',
    description:
      'GTA VI sans disque physique, suivi de l\'annonce par Sony de la fin des disques pour 2028. Colère massive des joueurs.',
    longDescription:
      'À l\'été 2026, l\'industrie a connu un séisme : Rockstar Games a annoncé que les éditions physiques de GTA VI ne contiendraient pas de disque, mais un simple code de téléchargement. Peu après, Sony a confirmé l\'arrêt de la production de jeux physiques PlayStation pour janvier 2028. Cette bascule vers le "tout digital" a provoqué une colère massive et une énorme pression sur les réseaux sociaux. Les joueurs dénoncent une perte de propriété et un monopole des stores en ligne. Des pétitions "Don\'t Kill the Disc" ont réuni des millions de signatures.',
    intensity: 5,
    status: 'ongoing',
    sources: [
      { label: 'IGN - Fin du disque', url: 'https://ign.com' },
      { label: 'Stop Killing Games', url: 'https://stopkillinggames.com' },
    ],
    tags: ['Sony', 'PlayStation', 'Rockstar Games', 'GTA VI', 'tout digital', 'scandale'],
    keyFacts: [
      'GTA VI annoncé sans disque physique (code uniquement)',
      'Sony annonce la fin des jeux physiques pour janvier 2028',
      'Colère et pression massives sur les réseaux sociaux',
      'Craintes sur la fin de la propriété numérique et le monopole',
    ],
  },
  {
    id: 'loi-fast-fashion-2026',
    title: 'Loi anti-Fast Fashion (Shein/Temu)',
    shortTitle: 'Loi anti-Shein/Temu',
    date: '8 juillet 2026',
    dateSort: new Date('2026-07-08').getTime(),
    year: 2026,
    month: 7,
    category: 'social-media',
    description:
      'Malus jusqu\'à 50% du prix HT. Interdiction de pub pour l\'ultra-fast-fashion. Premier pays européen à légiférer.',
    longDescription:
      'Promulguée le 8 juillet 2026, cette loi fait de la France le premier pays européen à encadrer l\'ultra-fast-fashion. Un malus financier pouvant atteindre 50% du prix HT (max 10€/article) est instauré à partir du 1er septembre 2026. Toute publicité pour les produits d\'ultra-fast-fashion est interdite. Les plateformes doivent afficher des messages de sensibilisation. L\'ultra-fast-fashion est définie par le nombre élevé de nouvelles références et la faible incitation à la réparation. Le parcours législatif a été long (2024-2026) avec des pressions de lobbying intenses.',
    intensity: 3,
    status: 'recent',
    sources: [
      { label: 'Écologie.gouv.fr', url: 'https://ecologie.gouv.fr' },
      { label: 'Légifrance', url: 'https://legifrance.gouv.fr' },
      { label: 'Sénat', url: 'https://senat.fr' },
    ],
    tags: ['Shein', 'Temu', 'fast fashion', 'loi', 'écologie', 'malus'],
    keyFacts: [
      'Malus jusqu\'à 50% du prix HT (max 10€/article)',
      'Interdiction de publicité pour l\'ultra-fast-fashion',
      'Premier pays européen à légiférer',
      'Effectif au 1er septembre 2026',
    ],
  },
  {
    id: 'fontainebleau-fires-2026',
    title: 'Incendies de la forêt de Fontainebleau',
    shortTitle: 'Feux Fontainebleau',
    date: '12 juillet 2026',
    dateSort: new Date('2026-07-12').getTime(),
    year: 2026,
    month: 7,
    category: 'disaster',
    description:
      '~2 000 hectares brûlés (10% du massif). Possible origine volontaire, interpellations. Cagnottes de replantation.',
    longDescription:
      'Les incendies qui ont touché la forêt de Fontainebleau à partir du 12 juillet 2026 ont ravagé environ 2 000 hectares, soit 10% du massif forestier. Les autorités ont évoqué une possible origine volontaire, et la gendarmerie a procédé à plusieurs interpellations. L\'accès au massif a été interdit par arrêté préfectoral. Le suivi sur les réseaux sociaux a été massif, avec les comptes officiels (Préfecture, ONF, SDIS) servant de sources principales, et des appels aux dons relayés pour la replantation via la Fondation du Patrimoine.',
    intensity: 4,
    status: 'recent',
    sources: [
      { label: 'ONF', url: 'https://onf.fr' },
      { label: 'Seine-et-Marne.gouv.fr', url: 'https://seine-et-marne.gouv.fr' },
      { label: 'Intérieur.gouv.fr', url: 'https://interieur.gouv.fr' },
    ],
    tags: ['Fontainebleau', 'incendie', 'forêt', 'Seine-et-Marne', 'ONF'],
    keyFacts: [
      '~2 000 hectares brûlés (10% du massif)',
      'Possible origine volontaire',
      'Interpellations par la gendarmerie',
      'Accès interdit par arrêté préfectoral',
      'Cagnottes de replantation (Fondation du Patrimoine)',
    ],
  },
  {
    id: 'loi-rs-15ans-2026',
    title: 'Loi interdiction des réseaux sociaux aux -15 ans',
    shortTitle: 'Interdiction RS -15 ans',
    date: '21 juillet 2026',
    dateSort: new Date('2026-07-21').getTime(),
    year: 2026,
    month: 7,
    category: 'social-media',
    description:
      'Interdiction d\'accès aux réseaux pour les -15 ans. Premier pays européen. Critiquée comme inapplicable et inutile.',
    longDescription:
      'Adoptée le 21 juillet 2026, cette loi fait de la France le premier pays européen à instaurer une interdiction d\'accès aux réseaux sociaux pour les mineurs de moins de 15 ans. Entrée en vigueur le 1er septembre 2026 pour les nouveaux comptes, et janvier 2027 pour les comptes existants. Les plateformes doivent mettre en place des dispositifs de vérification d\'âge fiables. Cependant, de nombreux experts et juristes soulignent que le texte manque de mécanismes d\'application concrets et de sanctions précises, faisant craindre une difficulté de mise en œuvre, à l\'instar des textes précédents. La loi est vue comme scandaleuse et inutile par de nombreux observateurs.',
    intensity: 3,
    status: 'recent',
    sources: [
      { label: 'Vie-publique.fr', url: 'https://vie-publique.fr' },
      { label: 'Le Club des Juristes', url: 'https://leclubdesjuristes.com' },
    ],
    tags: ['réseaux sociaux', 'mineurs', '-15 ans', 'interdiction', 'loi', 'inapplicable'],
    keyFacts: [
      'Premier pays européen à interdire',
      'Entrée en vigueur sept 2026 (nouveaux comptes)',
      'Janvier 2027 pour les comptes existants',
      'Critiquée comme inapplicable par les experts',
      'Manque de sanctions et mécanismes concrets',
    ],
  },
  {
    id: 'guillaume-pley-2026',
    title: 'Affaire Guillaume Pley (Legend)',
    shortTitle: 'Affaire Pley',
    date: 'Août 2026',
    dateSort: new Date('2026-08-12').getTime(),
    year: 2026,
    month: 8,
    category: 'judicial',
    description:
      'Accusations de messages sexuels à des mineures. Plaintes en diffamation en retour. Affaire en cours. Présomption d\'innocence.',
    longDescription:
      'En août 2026, l\'animateur et fondateur du média Legend, Guillaume Pley, est visé par des enquêtes de presse (Les Inrockuptibles, Le Monde) faisant état de témoignages de femmes qui auraient reçu des messages à caractère sexuel alors qu\'elles étaient mineures. Des critiques de management toxique ont aussi émergé. Le 12 août 2026, son avocate a annoncé le dépôt de plaintes pour diffamation contre différents médias. Il a contesté être l\'auteur de l\'ensemble des propos rapportés. Aucune procédure pénale n\'a abouti à ce stade. Présomption d\'innocence.',
    intensity: 4,
    status: 'ongoing',
    sources: [
      { label: 'Entrevue', url: 'https://entrevue.fr' },
      { label: 'Le Monde', url: 'https://lemonde.fr' },
    ],
    tags: ['Guillaume Pley', 'Legend', 'accusations', 'mineures', 'présomption d\'innocence'],
    keyFacts: [
      'Enquêtes des Inrocks et Le Monde',
      'Accusations de messages sexuels à des mineures',
      'Plaintes en diffamation déposées en retour',
      'Présomption d\'innocence — affaire en cours',
    ],
  },
];
