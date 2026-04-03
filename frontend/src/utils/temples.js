const temples = [
  {
    id: 1,
    name: "Kashi Vishwanath Temple",
    slug: "kashi-vishwanath",
    deity:
      "Lord Shiva in the form of Vishwanatha, meaning the Supreme Lord of the Universe who governs all creation, preservation, and dissolution",
    otherNames: [
      "Golden Temple of Varanasi known for its magnificent gold-plated spire and dome",
      "Kashi Vishwanath Dham representing the expanded sacred temple complex and spiritual corridor",
    ],

    location: {
      city: "Varanasi, one of the oldest living cities in the world and a major spiritual capital of India",
      state:
        "Uttar Pradesh, a historically rich and culturally vibrant northern Indian state",
      country:
        "India, a land known for its ancient traditions, diverse spirituality, and deep-rooted religious heritage",
      coordinates: { lat: 25.3109, lng: 83.0107 },
      nearbyRiver:
        "Ganga, the holiest river in Hinduism believed to purify sins and grant liberation, with direct access through the grand corridor",
      address:
        "Lahori Tola, Kashi Vishwanath Dham complex, Varanasi, Uttar Pradesh, India, PIN code 221001, located near the sacred ghats of the Ganga river",
    },

    images: [
      "https://i.pinimg.com/736x/d2/51/d9/d251d9e17fb65d0fd54f9dd47a2a9ac8.jpg",
      "https://i.pinimg.com/1200x/cd/18/c4/cd18c4585728c9d865c48c45cca701a7.jpg",
      "https://i.pinimg.com/736x/40/63/e3/4063e3d3533014d1513c59dfea459463.jpg",
    ],

    historicalInfo: {
      builtIn:
        "Ancient origin dating back thousands of years with references in sacred Hindu texts; current structure constructed in 1780 and grand corridor expansion completed in 2021",
      builtBy:
        "Rebuilt by the revered Maratha queen Ahilyabai Holkar of Indore, with later contributions including gold plating donated by Maharaja Ranjit Singh of Punjab",
      significance:
        "One of the twelve Jyotirlingas representing the infinite light form of Lord Shiva, a central hub of Shaivism, and a sacred site believed to grant Moksha or liberation from the cycle of birth and death",
      description:
        "The history of the Kashi Vishwanath Temple is deeply rooted in the spiritual, cultural, and historical evolution of India, extending back into ancient times when Kashi, now known as Varanasi, was already celebrated as a timeless city of ज्ञान (knowledge), भक्ति (devotion), and मोक्ष (liberation). Revered in sacred scriptures such as the Skanda Purana, the city is described as the eternal abode of Lord Shiva, a divine realm that transcends time and destruction. The temple has witnessed numerous cycles of destruction and reconstruction across centuries, particularly during medieval invasions, yet its spiritual significance has remained unwavering. Devotees continued worship through all adversities, preserving its sanctity through faith and tradition. The present temple, built in 1780 by Ahilyabai Holkar, marked a revival of its glory, while the gold-plated spire added by Maharaja Ranjit Singh enhanced its divine magnificence. In modern times, the Kashi Vishwanath Corridor has transformed the temple experience by connecting it seamlessly with the Ganga ghats, blending heritage with modern infrastructure. Today, the temple stands as a living symbol of resilience, devotion, and the eternal presence of Lord Shiva, attracting millions of pilgrims who seek spiritual awakening and divine blessings.",
    },

    architecture: {
      style:
        "Traditional Nagara style of North Indian temple architecture combined with modern corridor development enhancing accessibility and spatial grandeur",
      material:
        "Constructed using high-quality Chunar sandstone, fine marble, and adorned with over 800 kilograms of pure gold plating on the shikhara and domes",
      notableFeatures: [
        "Sacred Shiva Lingam enshrined in the गर्भगृह (sanctum sanctorum)",
        "Magnificent golden shikhara shining as a symbol of divine power",
        "Grand Ganga-facing gateway providing a direct spiritual pathway",
        "Spacious mandapams and courtyards for devotees and rituals",
      ],
    },

    rituals: {
      dailyAarti: [
        "Mangala Aarti performed early morning to awaken the deity with sacred chants",
        "Bhog Aarti offering food and श्रद्धा (devotion) to the deity",
        "Sandhya Aarti conducted during evening hours with lamps and मंत्र chanting",
        "Shringar Aarti where the deity is beautifully adorned and decorated",
        "Shayan Aarti marking the resting ritual of the deity at night",
      ],
      specialPoojas: [
        "Rudrabhishek, a powerful ritual involving sacred offerings to Lord Shiva",
        "Sapta Rishi Aarti performed with deep spiritual significance and Vedic chants",
        "Mahashivratri Special Puja celebrated with grandeur and intense devotion",
      ],
    },

    timings: {
      open: "3:00 AM early morning opening for Mangala Aarti and darshan",
      close: "11:00 PM closing after Shayan Aarti and final rituals of the day",
    },

    entryFee:
      "Free entry for general दर्शन (darshan) with optional paid services available for Sugam Darshan, special aartis, and priority access experiences",

    bestTimeToVisit:
      "October to March during pleasant winter season or during the holy month of Shravan when the temple atmosphere becomes highly spiritual and vibrant with devotees",

    festivals: [
      "Mahashivratri celebrated as the grandest festival dedicated to Lord Shiva with night-long prayers and rituals",
      "Dev Deepawali when the ghats of Varanasi are illuminated with thousands of दीप (lamps)",
      "Rang Bhari Ekadashi marking the divine return of Lord Shiva to Kashi with festive celebrations",
    ],

    crowdLevel:
      "Extremely High throughout the year, especially during festivals and auspicious months, efficiently managed through the spacious corridor and organized queue systems",

    nearbyAttractions: [
      "Dashashwamedh Ghat प्रसिद्ध for its grand Ganga Aarti ceremony",
      "Manikarnika Ghat considered one of the most sacred cremation grounds",
      "Annapurna Devi Temple dedicated to Goddess Annapurna, the provider of food",
      "Kaal Bhairav Temple associated with the guardian deity of Kashi",
    ],

    facilities: [
      "Secure locker rooms for storing belongings of pilgrims and visitors",
      "Strict security checkpoints ensuring safety and smooth crowd management",
      "Wheelchair accessibility for elderly and differently-abled devotees",
      "Information desks providing guidance and assistance to visitors",
      "Large waiting halls designed for comfort during peak crowd times",
    ],

    howToReach: {
      byAir:
        "Lal Bahadur Shastri International Airport located approximately 25 kilometers away with connectivity to major Indian cities",
      byRail:
        "Varanasi Junction (BSB) and Banaras (BSBS) Railway Stations offering extensive rail connectivity across India",
    },

    officialWebsite:
      "https://shrikashivishwanath.org for official updates, bookings, and temple information",

    rating: 4.9,
  },

{
  id: 2,
  name: "Tirupati Balaji Temple",
  slug: "tirupati-balaji",
  deity: "Lord Venkateswara, an incarnation of Lord Vishnu who is worshipped as the preserver and protector of the universe and the giver of prosperity and blessings",
  otherNames: [
    "Tirumala Temple located on the sacred hills and considered the main shrine of Lord Venkateswara",
  ],

  location: {
    city: "Tirupati, a major pilgrimage city in southern India known for its spiritual importance and religious heritage",
    state: "Andhra Pradesh, a culturally rich southern Indian state with a strong tradition of temple architecture and devotion",
    country: "India, a diverse nation known for its deep-rooted spirituality and ancient religious traditions",
    coordinates: { lat: 13.6833, lng: 79.3476 },
    hill: "Tirumala Hills, a sacred range of seven hills representing the seven heads of Adisesha where the temple is majestically situated",
  },

  images: [
    "https://i.pinimg.com/736x/67/7d/9f/677d9fe0bb89d3ce4ff840494647959a.jpg",
    "https://i.pinimg.com/736x/f0/63/ae/f063aedc86ec1a4a943f9a8b41d2d81a.jpg",
    "https://i.pinimg.com/1200x/9a/ec/f7/9aecf781d8bfc427bc88525be2af5f92.jpg",
  ],

  historicalInfo: {
    builtIn:
      "Ancient origins believed to date back to around 300 AD with references found in early scriptures and inscriptions over centuries",
    dynasty:
      "Developed and patronized by several powerful South Indian dynasties including the Pallava, Chola, and later the Vijayanagara Empire which significantly enhanced the temple’s grandeur",
    significance:
      "Recognized as one of the richest temples in the world with immense donations from devotees and considered a प्रमुख वैष्णव तीर्थ (major Vaishnav pilgrimage site) attracting millions seeking blessings and fulfillment of wishes",
  },

  architecture: {
    style:
      "Traditional Dravidian style of South Indian temple architecture characterized by towering gopurams and intricate carvings",
    material:
      "Primarily constructed using strong granite stones with gold-plated elements adding to its divine and majestic appearance",
    notableFeatures: [
      "Golden roof of the sanctum known as Ananda Nilayam shining brilliantly",
      "Massive gopurams with detailed carvings depicting mythological stories",
    ],
  },

  rituals: {
    dailyAarti: [
      "Suprabhatam, the early morning ritual performed to awaken the deity with sacred hymns and chants",
    ],
    specialPoojas: [
      "Kalyanotsavam, a special ritual symbolizing the divine marriage of Lord Venkateswara",
    ],
    hairOffering:
      true,
  },

  timings: {
    open: "2:30 AM early morning darshan begins with Suprabhatam seva",
    close: "1:30 AM late night closing after continuous darshan and rituals",
  },

  entryFee:
    "Free darshan available for all devotees with optional ₹300 special darshan tickets for quicker access and reduced waiting time",

  bestTimeToVisit:
    "September to February when the weather is pleasant and suitable for pilgrimage, avoiding extreme summer heat",

  festivals: [
    "Brahmotsavam, the grand annual festival celebrated with عظ (grandeur), processions, and लाखों devotees participating",
  ],

  crowdLevel:
    "Extremely High throughout the year with massive footfall, especially during weekends, holidays, and festival seasons",

  nearbyAttractions: [
    "Akasa Ganga, a sacred waterfall believed to provide holy water for temple rituals and spiritual purification",
  ],

  facilities: [
    "Free भोजन (food) services provided to thousands of devotees daily as prasadam",
    "Accommodation and stay facilities ranging from free dormitories to paid guest houses managed by the temple authorities",
  ],

  howToReach: {
    byAir:
      "Tirupati Airport located nearby with connectivity to major cities like Chennai, Hyderabad, and Bangalore",
    byRail:
      "Tirupati Railway Station well connected to various parts of India with frequent train services",
  },

  officialWebsite:
    "https://tirumala.org providing official information, darshan booking, and seva reservations",

  rating:
    4.9,
},

  {
    id: 3,
    name: "Jagannath Temple",
    slug: "jagannath-puri",
    deity: "Lord Jagannath",
    location: {
      city: "Puri",
      state: "Odisha",
      country: "India",
      coordinates: { lat: 19.8047, lng: 85.8174 },
      nearSea: "Bay of Bengal",
    },
    images: [
      "https://i.pinimg.com/1200x/d3/64/7d/d3647d1e51cea36c2a0a690dcdd10032.jpg",
      "https://i.pinimg.com/736x/5a/c7/98/5ac79851f317652e5005e91ff28ff029.jpg",
      "https://i.pinimg.com/736x/62/3e/61/623e613f018d941e97fb98a113223100.jpg",
    ],
    historicalInfo: {
      builtIn: "12th century",
      builtBy: "King Anantavarman",
      significance: "Char Dham Yatra",
    },
    architecture: {
      style: "Kalinga",
      material: "Stone",
    },
    rituals: {
      specialPoojas: ["Rath Yatra"],
    },
    timings: { open: "5:00 AM", close: "12:00 AM" },
    entryFee: "Free",
    bestTimeToVisit: "Oct–Feb",
    festivals: ["Rath Yatra"],
    restrictions: ["Only Hindus allowed"],
    nearbyAttractions: ["Konark Sun Temple"],
    facilities: ["Prasad"],
    officialWebsite: "https://jagannath.nic.in",
    rating: 4.7,
  },

  {
    id: 4,
    name: "Kedarnath Temple",
    slug: "kedarnath",
    deity: "Lord Shiva",
    location: {
      city: "Kedarnath",
      state: "Uttarakhand",
      country: "India",
      coordinates: { lat: 30.7352, lng: 79.0669 },
      altitude: "3583m",
    },
    images: [
      "https://i.pinimg.com/1200x/e5/1a/2c/e51a2c91647858284dab3c5a3875ec58.jpg",
      "https://i.pinimg.com/1200x/5c/da/2b/5cda2b99127c7afa6e1e2b6b08efd217.jpg",
    ],
    historicalInfo: {
      builtIn: "8th century",
      builtBy: "Adi Shankaracharya",
      significance: "Jyotirlinga & Char Dham",
    },
    architecture: {
      style: "Himalayan stone",
    },
    rituals: {
      dailyAarti: ["Morning & Evening"],
    },
    timings: {
      openMonths: "Apr–Nov",
      closedMonths: "Winter",
    },
    entryFee: "Free",
    trekDistance: "16 km",
    nearbyAttractions: ["Bhairavnath Temple"],
    facilities: ["Helicopter", "Medical"],
    officialWebsite: "https://badrinath-kedarnath.gov.in",
    rating: 4.9,
  },

  {
    id: 5,
    name: "Meenakshi Temple",
    slug: "meenakshi-temple",
    deity: "Goddess Meenakshi & Lord Shiva",
    location: {
      city: "Madurai",
      state: "Tamil Nadu",
      country: "India",
      coordinates: { lat: 9.9195, lng: 78.1193 },
    },
    images: [
      "https://i.pinimg.com/1200x/f4/0f/2c/f40f2c1d317c3e02409f519594cf80a3.jpg",
      "https://i.pinimg.com/1200x/c0/c2/99/c0c299dbd6758a13d3fb47589e95d7d5.jpg",
    ],
    historicalInfo: {
      builtIn: "17th century",
      dynasty: "Nayak",
      significance: "Major South Indian pilgrimage",
    },
    architecture: {
      style: "Dravidian",
      notableFeatures: ["Gopurams", "1000 pillar hall"],
    },
    rituals: {
      specialPoojas: ["Meenakshi Thirukalyanam"],
    },
    timings: { open: "5:00 AM", close: "10:00 PM" },
    entryFee: "Free",
    bestTimeToVisit: "Oct–Mar",
    festivals: ["Chithirai Festival"],
    nearbyAttractions: ["Thirumalai Palace"],
    facilities: ["Guides"],
    officialWebsite: "https://maduraimeenakshi.org",
    rating: 4.8,
  },
];

export default temples;
