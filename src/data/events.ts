import type { NewsEvent } from "../types";

export const sampleEvents: NewsEvent[] = [
  {
    id: "event-001",
    title: "Wildfire evacuation expands in northern Ontario",
    summary:
      "Authorities expanded evacuation orders across northern Ontario as wildfires continue to spread due to extreme heat and dry conditions. Over 15,000 residents have been displaced, with multiple communities under emergency orders. Air quality warnings have been issued for regions as far south as Toronto.",
    latitude: 49.5,
    longitude: -84.7,
    country: "Canada",
    region: "Ontario",
    category: "disaster",
    importance: 92,
    thumbnailUrl:
      "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?w=200&h=150&fit=crop",
    publishedAt: "2026-07-16T02:00:00Z",
    sources: [
      { name: "CBC News", url: "https://cbc.ca" },
      { name: "Reuters", url: "https://reuters.com" },
      { name: "Toronto Star", url: "https://thestar.com" },
    ],
  },
  {
    id: "event-002",
    title: "Quebec wildfire forces mass evacuation near Saguenay",
    summary:
      "A fast-moving wildfire near Saguenay, Quebec has forced the evacuation of 8,000 residents. Canadian military has been deployed to assist firefighting efforts. The fire has consumed over 50,000 hectares of boreal forest.",
    latitude: 48.4,
    longitude: -71.1,
    country: "Canada",
    region: "Quebec",
    category: "disaster",
    importance: 88,
    thumbnailUrl:
      "https://images.unsplash.com/photo-1542856204-00101eb6def4?w=200&h=150&fit=crop",
    publishedAt: "2026-07-15T18:00:00Z",
    sources: [
      { name: "Radio-Canada", url: "https://ici.radio-canada.ca" },
      { name: "Global News", url: "https://globalnews.ca" },
    ],
  },
  {
    id: "event-003",
    title: "Ceasefire negotiations resume in Middle East conflict",
    summary:
      "International mediators have resumed ceasefire negotiations between warring parties in the ongoing Middle East conflict. The latest round of talks involves representatives from multiple nations, with pressure mounting for a humanitarian corridor agreement.",
    latitude: 31.5,
    longitude: 34.47,
    country: "Israel/Palestine",
    region: "Gaza Strip",
    category: "conflict",
    importance: 95,
    thumbnailUrl:
      "https://images.unsplash.com/photo-1542393545-10f5cde2c810?w=200&h=150&fit=crop",
    publishedAt: "2026-07-16T01:00:00Z",
    sources: [
      { name: "Al Jazeera", url: "https://aljazeera.com" },
      { name: "BBC News", url: "https://bbc.com" },
      { name: "AP News", url: "https://apnews.com" },
      { name: "Reuters", url: "https://reuters.com" },
    ],
  },
  {
    id: "event-004",
    title: "EU passes landmark AI regulation framework",
    summary:
      "The European Union has passed a comprehensive AI regulation framework that sets global precedents for artificial intelligence governance. The regulation classifies AI systems by risk level and imposes strict requirements on high-risk applications.",
    latitude: 50.85,
    longitude: 4.35,
    country: "Belgium",
    region: "Brussels",
    category: "technology",
    importance: 82,
    thumbnailUrl:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=200&h=150&fit=crop",
    publishedAt: "2026-07-15T14:00:00Z",
    sources: [
      { name: "Politico EU", url: "https://politico.eu" },
      { name: "Reuters", url: "https://reuters.com" },
    ],
  },
  {
    id: "event-005",
    title: "Magnitude 6.8 earthquake strikes central Japan",
    summary:
      "A magnitude 6.8 earthquake struck central Japan near Nagano Prefecture, causing widespread structural damage and triggering landslides. Rescue operations are underway with reports of dozens trapped in collapsed buildings. Bullet train services have been suspended across the region.",
    latitude: 36.23,
    longitude: 137.97,
    country: "Japan",
    region: "Nagano",
    category: "disaster",
    importance: 90,
    thumbnailUrl:
      "https://images.unsplash.com/photo-1545579133-99bb5ab189bd?w=200&h=150&fit=crop",
    publishedAt: "2026-07-15T22:30:00Z",
    sources: [
      { name: "NHK", url: "https://www3.nhk.or.jp" },
      { name: "Kyodo News", url: "https://english.kyodonews.net" },
      { name: "Japan Times", url: "https://japantimes.co.jp" },
    ],
  },
  {
    id: "event-006",
    title: "US Federal Reserve signals rate cut in September",
    summary:
      "Federal Reserve Chair indicated strong signals that interest rates could be cut at the September meeting, citing improving inflation data and labor market stabilization. Markets rallied on the announcement with the S&P 500 reaching new highs.",
    latitude: 38.89,
    longitude: -77.03,
    country: "United States",
    region: "Washington D.C.",
    category: "economy",
    importance: 85,
    thumbnailUrl:
      "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=200&h=150&fit=crop",
    publishedAt: "2026-07-15T20:00:00Z",
    sources: [
      { name: "Wall Street Journal", url: "https://wsj.com" },
      { name: "Bloomberg", url: "https://bloomberg.com" },
      { name: "CNBC", url: "https://cnbc.com" },
    ],
  },
  {
    id: "event-007",
    title: "Flooding devastates southern Brazil communities",
    summary:
      "Severe flooding in Rio Grande do Sul state has displaced over 100,000 people and caused significant infrastructure damage. The disaster has been linked to extreme rainfall events intensified by climate change patterns.",
    latitude: -29.9,
    longitude: -51.1,
    country: "Brazil",
    region: "Rio Grande do Sul",
    category: "disaster",
    importance: 86,
    thumbnailUrl:
      "https://images.unsplash.com/photo-1547683905-f686c993aae5?w=200&h=150&fit=crop",
    publishedAt: "2026-07-15T16:00:00Z",
    sources: [
      { name: "Folha de São Paulo", url: "https://folha.uol.com.br" },
      { name: "Reuters", url: "https://reuters.com" },
    ],
  },
  {
    id: "event-008",
    title: "India launches lunar south pole mission",
    summary:
      "India's space agency ISRO successfully launched its next-generation lunar mission targeting the Moon's south pole. The mission aims to study water ice deposits and establish communication relay capabilities for future missions.",
    latitude: 13.07,
    longitude: 80.23,
    country: "India",
    region: "Tamil Nadu",
    category: "technology",
    importance: 78,
    thumbnailUrl:
      "https://images.unsplash.com/photo-1446776877081-d282a0f896e2?w=200&h=150&fit=crop",
    publishedAt: "2026-07-15T08:00:00Z",
    sources: [
      { name: "The Hindu", url: "https://thehindu.com" },
      { name: "BBC News", url: "https://bbc.com" },
    ],
  },
  {
    id: "event-009",
    title: "South Korea political crisis deepens with protests",
    summary:
      "Massive protests have erupted across South Korea as the political crisis deepens following corruption allegations against senior government officials. Over 500,000 protesters gathered in Seoul demanding accountability and reform.",
    latitude: 37.57,
    longitude: 126.98,
    country: "South Korea",
    region: "Seoul",
    category: "politics",
    importance: 80,
    thumbnailUrl:
      "https://images.unsplash.com/photo-1541872703-74c5e44368f9?w=200&h=150&fit=crop",
    publishedAt: "2026-07-15T12:00:00Z",
    sources: [
      { name: "Yonhap News", url: "https://en.yna.co.kr" },
      { name: "Korea Herald", url: "https://koreaherald.com" },
      { name: "AP News", url: "https://apnews.com" },
    ],
  },
  {
    id: "event-010",
    title: "WHO declares new disease outbreak in Central Africa",
    summary:
      "The World Health Organization has declared a public health emergency following a new disease outbreak in the Democratic Republic of Congo. The outbreak has affected multiple provinces with over 2,000 confirmed cases reported.",
    latitude: -4.32,
    longitude: 15.31,
    country: "DR Congo",
    region: "Kinshasa",
    category: "health",
    importance: 87,
    thumbnailUrl:
      "https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?w=200&h=150&fit=crop",
    publishedAt: "2026-07-15T10:00:00Z",
    sources: [
      { name: "WHO", url: "https://who.int" },
      { name: "Reuters", url: "https://reuters.com" },
      { name: "BBC Africa", url: "https://bbc.com/africa" },
    ],
  },
  {
    id: "event-011",
    title: "UK general election results reshape parliament",
    summary:
      "The United Kingdom's general election has produced a historic shift in parliamentary composition, with the winning party securing a substantial majority. Voter turnout reached record levels driven by economic and healthcare concerns.",
    latitude: 51.5,
    longitude: -0.12,
    country: "United Kingdom",
    region: "London",
    category: "politics",
    importance: 84,
    thumbnailUrl:
      "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?w=200&h=150&fit=crop",
    publishedAt: "2026-07-15T23:00:00Z",
    sources: [
      { name: "BBC News", url: "https://bbc.com" },
      { name: "The Guardian", url: "https://theguardian.com" },
      { name: "Sky News", url: "https://news.sky.com" },
    ],
  },
  {
    id: "event-012",
    title: "Australian Great Barrier Reef mass bleaching event",
    summary:
      "Scientists have confirmed the most severe mass bleaching event ever recorded on the Great Barrier Reef, with over 80% of surveyed reefs showing significant coral bleaching. Ocean temperatures have reached unprecedented levels for the southern hemisphere winter.",
    latitude: -18.28,
    longitude: 147.7,
    country: "Australia",
    region: "Queensland",
    category: "environment",
    importance: 83,
    thumbnailUrl:
      "https://images.unsplash.com/photo-1546026423-cc4642628d2b?w=200&h=150&fit=crop",
    publishedAt: "2026-07-15T06:00:00Z",
    sources: [
      { name: "ABC Australia", url: "https://abc.net.au" },
      { name: "Nature", url: "https://nature.com" },
    ],
  },
  {
    id: "event-013",
    title: "Ukraine counteroffensive gains territory in south",
    summary:
      "Ukrainian forces have made significant territorial gains in the southern Zaporizhzhia region as part of ongoing military operations. International observers report substantial changes in front-line positions over the past week.",
    latitude: 47.84,
    longitude: 35.14,
    country: "Ukraine",
    region: "Zaporizhzhia",
    category: "conflict",
    importance: 91,
    thumbnailUrl:
      "https://images.unsplash.com/photo-1646648390512-52f7f0d12a3c?w=200&h=150&fit=crop",
    publishedAt: "2026-07-16T00:00:00Z",
    sources: [
      { name: "Ukrinform", url: "https://ukrinform.net" },
      { name: "BBC News", url: "https://bbc.com" },
      { name: "AP News", url: "https://apnews.com" },
      { name: "Reuters", url: "https://reuters.com" },
    ],
  },
  {
    id: "event-014",
    title: "Mexico City water crisis reaches critical level",
    summary:
      "Mexico City's ongoing water crisis has reached critical levels with multiple neighborhoods experiencing complete water shutoffs. The aquifer supplying the city is depleting faster than expected, prompting emergency rationing measures.",
    latitude: 19.43,
    longitude: -99.13,
    country: "Mexico",
    region: "Mexico City",
    category: "environment",
    importance: 76,
    thumbnailUrl:
      "https://images.unsplash.com/photo-1585399000684-d2f72660f092?w=200&h=150&fit=crop",
    publishedAt: "2026-07-15T15:00:00Z",
    sources: [
      { name: "El Universal", url: "https://eluniversal.com.mx" },
      { name: "AP News", url: "https://apnews.com" },
    ],
  },
  {
    id: "event-015",
    title: "Olympics 2028 preparation milestones in Los Angeles",
    summary:
      "Los Angeles has reached several key preparation milestones for the 2028 Summer Olympics, including completion of athlete village construction and new transit connections. Organizers confirmed all competition venues are on schedule.",
    latitude: 34.05,
    longitude: -118.24,
    country: "United States",
    region: "California",
    category: "sports",
    importance: 72,
    thumbnailUrl:
      "https://images.unsplash.com/photo-1461896836934-bd45ba8b8e25?w=200&h=150&fit=crop",
    publishedAt: "2026-07-15T19:00:00Z",
    sources: [
      { name: "LA Times", url: "https://latimes.com" },
      { name: "ESPN", url: "https://espn.com" },
    ],
  },
  {
    id: "event-016",
    title: "Sudan humanitarian crisis worsens as fighting continues",
    summary:
      "The humanitarian crisis in Sudan has intensified as fighting between rival military factions continues. UNHCR reports over 3 million internally displaced people and warns of famine conditions in multiple regions.",
    latitude: 15.6,
    longitude: 32.53,
    country: "Sudan",
    region: "Khartoum",
    category: "conflict",
    importance: 88,
    thumbnailUrl:
      "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=200&h=150&fit=crop",
    publishedAt: "2026-07-15T11:00:00Z",
    sources: [
      { name: "UNHCR", url: "https://unhcr.org" },
      { name: "Al Jazeera", url: "https://aljazeera.com" },
      { name: "Reuters", url: "https://reuters.com" },
    ],
  },
  {
    id: "event-017",
    title: "New Zealand bans single-use plastics nationwide",
    summary:
      "New Zealand has enacted a comprehensive ban on single-use plastics, becoming one of the most aggressive national policies against plastic waste. The ban covers food packaging, bottles, and shopping bags with immediate effect.",
    latitude: -41.29,
    longitude: 174.78,
    country: "New Zealand",
    region: "Wellington",
    category: "environment",
    importance: 68,
    thumbnailUrl:
      "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=200&h=150&fit=crop",
    publishedAt: "2026-07-15T04:00:00Z",
    sources: [
      { name: "NZ Herald", url: "https://nzherald.co.nz" },
      { name: "The Guardian", url: "https://theguardian.com" },
    ],
  },
  {
    id: "event-018",
    title: "Nigeria tech startup ecosystem reaches record funding",
    summary:
      "Nigeria's technology startup ecosystem has attracted record venture capital investment in the first half of 2026, with fintech and healthtech companies leading the surge. Lagos has consolidated its position as Africa's leading tech hub.",
    latitude: 6.52,
    longitude: 3.38,
    country: "Nigeria",
    region: "Lagos",
    category: "economy",
    importance: 70,
    thumbnailUrl:
      "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=200&h=150&fit=crop",
    publishedAt: "2026-07-15T09:00:00Z",
    sources: [
      { name: "TechCabal", url: "https://techcabal.com" },
      { name: "Bloomberg", url: "https://bloomberg.com" },
    ],
  },
  {
    id: "event-019",
    title: "Heatwave across Southern Europe breaks records",
    summary:
      "An unprecedented heatwave across southern Europe has broken temperature records in Spain, Italy, and Greece. Temperatures exceeding 47°C have been recorded in multiple cities, with authorities warning of extreme fire risk and health dangers.",
    latitude: 40.42,
    longitude: -3.7,
    country: "Spain",
    region: "Madrid",
    category: "disaster",
    importance: 81,
    thumbnailUrl:
      "https://images.unsplash.com/photo-1504370805625-d32c54b16100?w=200&h=150&fit=crop",
    publishedAt: "2026-07-15T13:00:00Z",
    sources: [
      { name: "El País", url: "https://elpais.com" },
      { name: "BBC News", url: "https://bbc.com" },
      { name: "Euronews", url: "https://euronews.com" },
    ],
  },
  {
    id: "event-020",
    title: "China unveils next-generation high-speed rail network",
    summary:
      "China has unveiled plans for its next-generation high-speed rail network capable of speeds exceeding 600km/h using magnetic levitation technology. The first commercial line connecting Shanghai and Hangzhou will begin testing in 2027.",
    latitude: 31.23,
    longitude: 121.47,
    country: "China",
    region: "Shanghai",
    category: "technology",
    importance: 74,
    thumbnailUrl:
      "https://images.unsplash.com/photo-1474487548417-781cb71495f3?w=200&h=150&fit=crop",
    publishedAt: "2026-07-15T07:00:00Z",
    sources: [
      { name: "Xinhua", url: "https://xinhuanet.com" },
      { name: "South China Morning Post", url: "https://scmp.com" },
    ],
  },
  {
    id: "event-021",
    title: "Canadian wildfire smoke reaches Great Lakes region",
    summary:
      "Smoke from the Ontario and Quebec wildfires has created hazardous air quality across the Great Lakes region, affecting major cities including Chicago, Detroit, and Milwaukee. Health authorities have issued air quality emergency warnings.",
    latitude: 43.65,
    longitude: -79.38,
    country: "Canada",
    region: "Ontario",
    category: "disaster",
    importance: 79,
    thumbnailUrl:
      "https://images.unsplash.com/photo-1488866022916-f7f2a9a37ad1?w=200&h=150&fit=crop",
    publishedAt: "2026-07-16T01:30:00Z",
    sources: [
      { name: "CBC News", url: "https://cbc.ca" },
      { name: "Chicago Tribune", url: "https://chicagotribune.com" },
    ],
  },
  {
    id: "event-022",
    title: "Arctic sea ice reaches lowest July extent on record",
    summary:
      "Satellite data confirms that Arctic sea ice has reached its lowest extent ever recorded for the month of July, with scientists warning of potential ice-free summer conditions within the decade.",
    latitude: 78.0,
    longitude: 15.0,
    country: "Arctic",
    region: "Svalbard",
    category: "environment",
    importance: 77,
    thumbnailUrl:
      "https://images.unsplash.com/photo-1494522358652-f30e61a60313?w=200&h=150&fit=crop",
    publishedAt: "2026-07-15T05:00:00Z",
    sources: [
      { name: "Nature", url: "https://nature.com" },
      { name: "NASA", url: "https://nasa.gov" },
      { name: "The Guardian", url: "https://theguardian.com" },
    ],
  },
  {
    id: "event-023",
    title: "Philippines hit by super typhoon Amara",
    summary:
      "Super typhoon Amara made landfall in the eastern Philippines with sustained winds exceeding 250 km/h. Mass evacuations are underway in Samar and Leyte provinces, with the storm expected to affect over 10 million people.",
    latitude: 11.6,
    longitude: 125.0,
    country: "Philippines",
    region: "Eastern Visayas",
    category: "disaster",
    importance: 89,
    thumbnailUrl:
      "https://images.unsplash.com/photo-1509803874385-db7c23652552?w=200&h=150&fit=crop",
    publishedAt: "2026-07-15T21:00:00Z",
    sources: [
      { name: "Philippine Star", url: "https://philstar.com" },
      { name: "Reuters", url: "https://reuters.com" },
      { name: "CNN Philippines", url: "https://cnnphilippines.com" },
    ],
  },
  {
    id: "event-024",
    title: "Argentina economic reform package passes congress",
    summary:
      "Argentina's congress has passed a sweeping economic reform package aimed at stabilizing the currency and attracting foreign investment. The legislation includes tax reform, labor market changes, and privatization of state enterprises.",
    latitude: -34.6,
    longitude: -58.38,
    country: "Argentina",
    region: "Buenos Aires",
    category: "economy",
    importance: 73,
    thumbnailUrl:
      "https://images.unsplash.com/photo-1589909202802-8f4aadce1849?w=200&h=150&fit=crop",
    publishedAt: "2026-07-15T17:00:00Z",
    sources: [
      { name: "Clarin", url: "https://clarin.com" },
      { name: "Reuters", url: "https://reuters.com" },
    ],
  },
  {
    id: "event-025",
    title: "Myanmar resistance forces capture key border town",
    summary:
      "Resistance forces in Myanmar have captured a strategically important border town in Shan State, marking one of the largest territorial gains against the military junta. The development signals growing coordination among opposition groups.",
    latitude: 20.45,
    longitude: 97.03,
    country: "Myanmar",
    region: "Shan State",
    category: "conflict",
    importance: 82,
    thumbnailUrl:
      "https://images.unsplash.com/photo-1540611025311-01df3cef54b5?w=200&h=150&fit=crop",
    publishedAt: "2026-07-15T14:30:00Z",
    sources: [
      { name: "Myanmar Now", url: "https://myanmar-now.org" },
      { name: "BBC News", url: "https://bbc.com" },
      { name: "AP News", url: "https://apnews.com" },
    ],
  },
];
