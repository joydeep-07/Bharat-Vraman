import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Temple from './models/Temple.js';
import User from './models/User.js';
import bcrypt from 'bcryptjs';

dotenv.config();

// The data from frontend's temples.js
const templesData = [
  {
    name: "Kashi Vishwanath Temple",
    slug: "kashi-vishwanath",
    templeType: "Jyotirlinga Temple",
    established: "Ancient (exact date unknown)",
    state: "Uttar Pradesh",
    city: "Varanasi",
    deityInformation: "Dedicated to Lord Shiva (Vishweshwara)",
    historicalBackground: "The original temple, called the Adi Vishveshwar Temple, was demolished by Mohammad of Ghor...",
    rituals: "Five daily aartis (Mangala, Bhog, Saptarishi, Shringar/Bhog, Shayan).",
    darshanTimings: "3:00 AM - 11:00 PM",
    visitorGuidelines: "Dress modestly. No mobile phones or cameras allowed inside the inner sanctum.",
    description: "Kashi Vishwanath Temple is a Hindu temple dedicated to Shiva. It is located in Vishwanath Gali, in Varanasi, Uttar Pradesh, India. The temple is a Hindu pilgrimage site and is one of the twelve Jyotirlinga shrines.",
    images: [
      "https://i.pinimg.com/736x/d2/51/d9/d251d9e17fb65d0fd54f9dd47a2a9ac8.jpg",
      "https://i.pinimg.com/1200x/cd/18/c4/cd18c4585728c9d865c48c45cca701a7.jpg",
      "https://i.pinimg.com/736x/40/63/e3/4063e3d3533014d1513c59dfea459463.jpg",
    ],
  },
  {
    name: "Tirupati Balaji Temple",
    slug: "tirupati-balaji",
    templeType: "Vaishnavite Temple",
    established: "c. 300 CE",
    state: "Andhra Pradesh",
    city: "Tirumala",
    deityInformation: "Dedicated to Venkateswara, a form of Vishnu.",
    historicalBackground: "The temple of Venkateswara was built by Thondaman king and reformed periodically by Cholas, Pandyas and Vijayanagar.",
    rituals: "Suprabhatam to Ekantha Seva.",
    darshanTimings: "2:30 AM - 1:30 AM (Almost 24 hours depending on the crowd)",
    visitorGuidelines: "Strict dress code: traditional wear. Hair tonsuring is a common practice.",
    description: "The Venkateswara Swami Temple, also known as Tirumala Temple, Tirupati Temple, and Tirupati Balaji Temple, is a Hindu temple situated in the hills of Tirumala...",
    images: [
      "https://i.pinimg.com/736x/67/7d/9f/677d9fe0bb89d3ce4ff840494647959a.jpg",
      "https://i.pinimg.com/736x/f0/63/ae/f063aedc86ec1a4a943f9a8b41d2d81a.jpg",
      "https://i.pinimg.com/1200x/9a/ec/f7/9aecf781d8bfc427bc88525be2af5f92.jpg",
    ],
  },
  {
    name: "Jagannath Temple",
    slug: "jagannath-puri",
    templeType: "Char Dham Temple",
    established: "12th Century CE",
    state: "Odisha",
    city: "Puri",
    deityInformation: "Dedicated to Jagannath (Vishnu), Balabhadra and Subhadra.",
    historicalBackground: "Present temple was rebuilt from the eleventh century onwards by Anantavarman Chodaganga.",
    rituals: "Daily Mahaprasad offering.",
    darshanTimings: "5:00 AM - 11:30 PM",
    visitorGuidelines: "Only Hindus are allowed inside the main temple. Modest clothing required.",
    description: "The Jagannath Temple is a Hindu temple dedicated to Jagannath, a form of Vishnu. It is located in Puri, Odisha...",
    images: [
      "https://i.pinimg.com/1200x/d3/64/7d/d3647d1e51cea36c2a0a690dcdd10032.jpg",
      "https://i.pinimg.com/736x/5a/c7/98/5ac79851f317652e5005e91ff28ff029.jpg",
      "https://i.pinimg.com/736x/62/3e/61/623e613f018d941e97fb98a113223100.jpg",
    ],
  },
  {
    name: "Kedarnath Temple",
    slug: "kedarnath",
    templeType: "Jyotirlinga & Char Dham",
    established: "8th Century CE",
    state: "Uttarakhand",
    city: "Kedarnath",
    deityInformation: "Dedicated to Lord Shiva",
    historicalBackground: "Initially built by the Pandavas and revived by Adi Sankaracharya. It's the highest among 12 Jyotirlingas.",
    rituals: "Maha Abhishek, Rudrabhishek.",
    darshanTimings: "4:00 AM - 9:00 PM (Open only April to November)",
    visitorGuidelines: "Prepare for extreme weather. Requires an uphill trek. Medical fitness is advised.",
    description: "Kedarnath Temple is a Hindu temple dedicated to Lord Shiva. Located on the Garhwal Himalayan range...",
    images: [
      "https://i.pinimg.com/1200x/e5/1a/2c/e51a2c91647858284dab3c5a3875ec58.jpg",
      "https://i.pinimg.com/1200x/5c/da/2b/5cda2b99127c7afa6e1e2b6b08efd217.jpg",
    ],
  },
  {
    name: "Meenakshi Temple",
    slug: "meenakshi-temple",
    templeType: "Paadal Petra Sthalam",
    established: "6th Century CE",
    state: "Tamil Nadu",
    city: "Madurai",
    deityInformation: "Dedicated to Meenakshi (Parvati) and Sundareshwarar (Shiva).",
    historicalBackground: "Built by Pandyas and later rebuilt by Nayaks in the 16th-17th centuries.",
    rituals: "Six daily pujas.",
    darshanTimings: "5:00 AM - 12:30 PM, 4:00 PM - 10:00 PM",
    visitorGuidelines: "Shoulders and knees must be covered. Photography restrictions apply.",
    description: "Meenakshi Amman Temple is a historic Hindu temple located on the southern bank of the Vaigai River in Madurai...",
    images: [
      "https://i.pinimg.com/1200x/f4/0f/2c/f40f2c1d317c3e02409f519594cf80a3.jpg",
      "https://i.pinimg.com/1200x/c0/c2/99/c0c299dbd6758a13d3fb47589e95d7d5.jpg",
    ],
  }
];

const seedDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Connected to DB');

    // Create Admin if not exists
    const adminExists = await User.findOne({ email: 'admin@bharatvraman.com' });
    if (!adminExists) {
      const hashedPassword = await bcrypt.hash('admin123', 12);
      const admin = new User({ email: 'admin@bharatvraman.com', password: hashedPassword });
      await admin.save();
      console.log('Admin user created');
    }

    // Seed Temples
    await Temple.deleteMany({});
    await Temple.insertMany(templesData);
    console.log('Temples seeded successfully');

    mongoose.disconnect();
  } catch (error) {
    console.error('Error seeding DB:', error);
    mongoose.disconnect();
  }
};

seedDB();
