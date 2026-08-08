import { DoctorInfo, MediaImage, VideoItem, ServiceItem, FAQItem, TestimonialItem } from '../types';

export const DOCTOR_INFO: DoctorInfo = {
  name: "Dr. Shakeel Anjum Ramay",
  title: "Child Healthcare Specialist & Pediatrician",
  experience: "20+ Years of Experience",
  location: "Adda Gamber",
  credentials: [
    "MD (Medicine)",
    "MBBS",
    "RMP",
    "D.A. (PGMI)"
  ],
  additionalRoles: [
    "Diploma in Child Health",
    "Member Pakistan Pediatric Association Punjab",
    "Ex. Deputy District Health Officer Okara",
    "Ex. General Secretary / Vice President PMA Okara"
  ],
  phone: "+92 344 3335333",
  whatsapp: "https://wa.me/923443335333",
  googleMapsUrl: "https://maps.app.goo.gl/YQFZvfHeKGPxiqP48"
};

export const HERO_IMAGE = "https://i.ibb.co/PsNTmwkC/Whats-App-Image-2026-08-08-at-10-20-11-PM.jpg";

export const SUPPORTING_IMAGES: MediaImage[] = [
  {
    id: "img-1",
    url: "https://i.ibb.co/nsssKXdz/Whats-App-Image-2026-08-08-at-10-11-42-PM-1.jpg",
    title: "Professional Doctor Consultation",
    caption: "Dedicated pediatric consultation with gentle patient care.",
    category: "doctor"
  },
  {
    id: "img-2",
    url: "https://i.ibb.co/hxPmc0Kq/Whats-App-Image-2026-08-08-at-10-11-40-PM.jpg",
    title: "Compassionate Child Examination",
    caption: "Careful physical checkup tailored to ensure young children feel calm and comfortable.",
    category: "doctor"
  },
  {
    id: "img-3",
    url: "https://i.ibb.co/1f48rWFS/Whats-App-Image-2026-08-08-at-10-11-41-PM-2.jpg",
    title: "Pediatric Diagnostics & Health Assessment",
    caption: "Comprehensive diagnosis for childhood illnesses and growth milestones.",
    category: "services"
  },
  {
    id: "img-4",
    url: "https://i.ibb.co/nszBpJtd/Whats-App-Image-2026-08-08-at-10-11-42-PM-2.jpg",
    title: "Child Growth & Physical Evaluation",
    caption: "Monitoring developmental progress, nutrition, and physical health.",
    category: "services"
  },
  {
    id: "img-5",
    url: "https://i.ibb.co/4Z11YTmg/Whats-App-Image-2026-08-08-at-10-11-42-PM.jpg",
    title: "Preventive Care & Immunization",
    caption: "Vaccination scheduling and preventive guidance for infant immunity.",
    category: "services"
  },
  {
    id: "img-6",
    url: "https://i.ibb.co/vfh16KF/Whats-App-Image-2026-08-08-at-10-11-43-PM-1.jpg",
    title: "Infant & Newborn Health Checkup",
    caption: "Specialized care for neonates and infants under experienced medical guidance.",
    category: "services"
  },
  {
    id: "img-7",
    url: "https://i.ibb.co/vSBTYCN/Whats-App-Image-2026-08-08-at-10-11-44-PM-1.jpg",
    title: "Friendly Clinic Atmosphere",
    caption: "Warm, child-friendly environment reducing anxiety for parents and kids.",
    category: "why_choose"
  },
  {
    id: "img-8",
    url: "https://i.ibb.co/fGGdwd88/Whats-App-Image-2026-08-08-at-10-11-44-PM.jpg",
    title: "Parent Counseling & Support",
    caption: "Clear explanations provided to parents regarding treatments and home care.",
    category: "why_choose"
  },
  {
    id: "img-9",
    url: "https://i.ibb.co/67KLxfFn/Whats-App-Image-2026-08-08-at-10-11-45-PM-1.jpg",
    title: "Trusted Community Healthcare",
    caption: "Serving families in Adda Gamber with over two decades of clinical trust.",
    category: "why_choose"
  },
  {
    id: "img-10",
    url: "https://i.ibb.co/ymv7wkYD/Whats-App-Image-2026-08-08-at-10-11-45-PM.jpg",
    title: "Modern Adda Gamber Clinic Facility",
    caption: "Clean, hygienic consultation rooms equipped for modern pediatric care.",
    category: "clinic"
  },
  {
    id: "img-11",
    url: "https://i.ibb.co/ynmdjn9q/Whats-App-Image-2026-08-08-at-10-11-46-PM.jpg",
    title: "Waiting & Reception Area",
    caption: "Spacious seating ensuring parent comfort during clinic visits.",
    category: "clinic"
  },
  {
    id: "img-12",
    url: "https://i.ibb.co/ycy5XsXB/Whats-App-Image-2026-08-08-at-10-11-47-PM.jpg",
    title: "Hygiene & Safety Standards",
    caption: "Sanitised clinical setup adhering to strict child healthcare safety protocols.",
    category: "clinic"
  }
];

export const VIDEOS: VideoItem[] = [
  {
    id: "vid-73",
    filename: "VID-20260808-WA0073.mp4",
    videoUrl: "/VID-20260808-WA0073.mp4",
    fallbackPosterUrl: "https://i.ibb.co/PsNTmwkC/Whats-App-Image-2026-08-08-at-10-20-11-PM.jpg",
    title: "Meet Dr. Shakeel Anjum Ramay",
    category: "featured_doctor",
    description: "Introductory video featuring Dr. Shakeel Anjum Ramay discussing pediatric care philosophy and 20+ years of dedicated service.",
    duration: "1:15",
    featured: true
  },
  {
    id: "vid-71",
    filename: "VID-20260808-WA0071.mp4",
    videoUrl: "/VID-20260808-WA0071.mp4",
    fallbackPosterUrl: "https://i.ibb.co/nsssKXdz/Whats-App-Image-2026-08-08-at-10-11-42-PM-1.jpg",
    title: "Doctor Consultation & Child Checkup",
    category: "featured_doctor",
    description: "A look into a patient consultation session, highlighting gentle examination techniques for children.",
    duration: "0:45",
    featured: true
  },
  {
    id: "vid-70",
    filename: "VID-20260808-WA0070.mp4",
    videoUrl: "/VID-20260808-WA0070.mp4",
    fallbackPosterUrl: "https://i.ibb.co/ymv7wkYD/Whats-App-Image-2026-08-08-at-10-11-45-PM.jpg",
    title: "Inside Our Adda Gamber Clinic",
    category: "featured_clinic",
    description: "Walkthrough of our modern clinic facilities in Adda Gamber designed for children and families.",
    duration: "1:00",
    featured: true
  },
  {
    id: "vid-68",
    filename: "VID-20260808-WA0068.mp4",
    videoUrl: "/VID-20260808-WA0068.mp4",
    fallbackPosterUrl: "https://i.ibb.co/hxPmc0Kq/Whats-App-Image-2026-08-08-at-10-11-40-PM.jpg",
    title: "Child Healthcare & Disease Prevention",
    category: "gallery",
    description: "Insights on preventive measures for seasonal child fevers, allergies, and infections.",
    duration: "0:52"
  },
  {
    id: "vid-66",
    filename: "VID-20260808-WA0066.mp4",
    videoUrl: "/VID-20260808-WA0066.mp4",
    fallbackPosterUrl: "https://i.ibb.co/1f48rWFS/Whats-App-Image-2026-08-08-at-10-11-41-PM-2.jpg",
    title: "Pediatric Examination & Diagnostics",
    category: "gallery",
    description: "Demonstrating physical examination techniques for respiratory and chest assessment.",
    duration: "0:58"
  },
  {
    id: "vid-62",
    filename: "VID-20260808-WA0062.mp4",
    videoUrl: "/VID-20260808-WA0062.mp4",
    fallbackPosterUrl: "https://i.ibb.co/ynmdjn9q/Whats-App-Image-2026-08-08-at-10-11-46-PM.jpg",
    title: "Adda Gamber Clinic Environment Tour",
    category: "gallery",
    description: "Showcasing the welcoming seating area and sanitised treatment environment.",
    duration: "0:40"
  },
  {
    id: "vid-61",
    filename: "VID-20260808-WA0061.mp4",
    videoUrl: "/VID-20260808-WA0061.mp4",
    fallbackPosterUrl: "https://i.ibb.co/nszBpJtd/Whats-App-Image-2026-08-08-at-10-11-42-PM-2.jpg",
    title: "Compassionate Patient Care Highlights",
    category: "gallery",
    description: "Real interactions showing how Dr. Shakeel Anjum Ramay puts young patients at ease.",
    duration: "1:10"
  },
  {
    id: "vid-59",
    filename: "VID-20260808-WA0059.mp4",
    videoUrl: "/VID-20260808-WA0059.mp4",
    fallbackPosterUrl: "https://i.ibb.co/vfh16KF/Whats-App-Image-2026-08-08-at-10-11-43-PM-1.jpg",
    title: "Infant & Newborn Health Care",
    category: "gallery",
    description: "Specialized newborn guidance for mothers regarding feeding, jaundice, and growth.",
    duration: "0:48"
  },
  {
    id: "vid-60",
    filename: "VID-20260808-WA0060.mp4",
    videoUrl: "/VID-20260808-WA0060.mp4",
    fallbackPosterUrl: "https://i.ibb.co/67KLxfFn/Whats-App-Image-2026-08-08-at-10-11-45-PM-1.jpg",
    title: "Clinic Walkthrough Adda Gamber",
    category: "gallery",
    description: "Detailed walkthrough of the clinic entry, reception desk, and consultation suite.",
    duration: "1:05"
  },
  {
    id: "vid-58",
    filename: "VID-20260808-WA0058.mp4",
    videoUrl: "/VID-20260808-WA0058.mp4",
    fallbackPosterUrl: "https://i.ibb.co/ycy5XsXB/Whats-App-Image-2026-08-08-at-10-11-47-PM.jpg",
    title: "Pediatric Care Excellence",
    category: "gallery",
    description: "Overview of comprehensive medical services offered under one roof in Adda Gamber.",
    duration: "0:50"
  }
];

export const SERVICES: ServiceItem[] = [
  {
    id: "srv-1",
    title: "General Pediatric Consultation",
    shortDesc: "Comprehensive health checkups for babies, children, and teenagers.",
    fullDesc: "Thorough diagnosis and medical management for acute and chronic childhood illnesses. Focused on gentle patient handling and accurate clinical assessment.",
    iconName: "Stethoscope",
    imageUrl: "https://i.ibb.co/hxPmc0Kq/Whats-App-Image-2026-08-08-at-10-11-40-PM.jpg",
    highlights: [
      "Fever & Viral Infection Management",
      "Comprehensive Physical Checks",
      "Seasonal Illness Care",
      "Parent Counseling"
    ]
  },
  {
    id: "srv-2",
    title: "Newborn & Infant Care",
    shortDesc: "Specialized neonatology and infant development monitoring.",
    fullDesc: "Expert clinical care for neonates including jaundice screening, infant nutrition, colic relief, umbilical cord care, and early developmental milestone tracking.",
    iconName: "Baby",
    imageUrl: "https://i.ibb.co/vfh16KF/Whats-App-Image-2026-08-08-at-10-11-43-PM-1.jpg",
    highlights: [
      "Neonatal Jaundice Check",
      "Infant Feeding Guidance",
      "Early Growth Milestones",
      "Sleep & Colic Solutions"
    ]
  },
  {
    id: "srv-3",
    title: "Growth & Development Tracking",
    shortDesc: "Monitoring height, weight, cognitive, and physical milestones.",
    fullDesc: "Regular physical growth charts, nutritional assessment, weight monitoring, and developmental delay evaluation to ensure your child grows healthy and strong.",
    iconName: "TrendingUp",
    imageUrl: "https://i.ibb.co/nszBpJtd/Whats-App-Image-2026-08-08-at-10-11-42-PM-2.jpg",
    highlights: [
      "Percentile Growth Charts",
      "Nutritional Deficiencies Assessment",
      "Milestone Verification",
      "Dietary Plans for Underweight/Overweight"
    ]
  },
  {
    id: "srv-4",
    title: "Vaccination & Immunization",
    shortDesc: "Complete WHO & EPI standard immunization schedules.",
    fullDesc: "Safe, scheduled immunizations for infants and young children protecting against dangerous infectious diseases with proper cold-chain management.",
    iconName: "Syringe",
    imageUrl: "https://i.ibb.co/4Z11YTmg/Whats-App-Image-2026-08-08-at-10-11-42-PM.jpg",
    highlights: [
      "EPI & WHO Standard Schedule",
      "Infant Booster Doses",
      "Cold-chain Maintained Vaccines",
      "Minimal Pain Technique"
    ]
  },
  {
    id: "srv-5",
    title: "Chest & Respiratory Care",
    shortDesc: "Treatment for childhood asthma, pneumonia, cough, and allergies.",
    fullDesc: "Specialized clinical diagnosis and nebulization support for asthma, bronchitis, pneumonia, throat infections, and seasonal respiratory allergies.",
    iconName: "Activity",
    imageUrl: "https://i.ibb.co/1f48rWFS/Whats-App-Image-2026-08-08-at-10-11-41-PM-2.jpg",
    highlights: [
      "In-clinic Nebulization Care",
      "Child Asthma Management",
      "Chest Congestion Therapy",
      "Allergies & Bronchitis Care"
    ]
  },
  {
    id: "srv-6",
    title: "Pediatric Nutrition & Gastro Health",
    shortDesc: "Solutions for digestive issues, diarrhea, appetite loss, and anemia.",
    fullDesc: "Addressing pediatric stomach pain, dehydration management, constipation, intestinal infections, appetite restoration, and essential vitamin supplements.",
    iconName: "Apple",
    imageUrl: "https://i.ibb.co/67KLxfFn/Whats-App-Image-2026-08-08-at-10-11-45-PM-1.jpg",
    highlights: [
      "Dehydration & ORS Therapy",
      "Appetite & Weight Support",
      "Anemia & Micronutrient Therapy",
      "Stomach Pain & Diarrhea Care"
    ]
  }
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: "test-1",
    parentName: "Muhammad Imran",
    location: "Adda Gamber",
    childAge: "Father of 3-year-old Hassan",
    comment: "Dr. Shakeel Anjum Ramay is the most patient pediatrician in Adda Gamber. When my son had a severe fever, his gentle diagnosis and medicine made him recover within 2 days. Highly recommended!",
    rating: 5,
    date: "Recent Patient"
  },
  {
    id: "test-2",
    parentName: "Fatima Bibi",
    location: "Adda Gamber Region",
    childAge: "Mother of 6-month-old Baby",
    comment: "He guided us so clearly on vaccination and newborn feeding. You can really feel his 20+ years of experience in the way he listens and explains everything calmly.",
    rating: 5,
    date: "Verified Visit"
  },
  {
    id: "test-3",
    parentName: "Chaudhry Rashid",
    location: "Adda Gamber",
    childAge: "Father of 5-year-old Ayesha",
    comment: "No unnecessary medicines or heavy doses! Dr. Shakeel gives exact, effective treatment for chest congestion and allergies. The clinic environment is very clean and well maintained.",
    rating: 5,
    date: "Verified Patient"
  }
];

export const FAQS: FAQItem[] = [
  {
    question: "Where is Dr. Shakeel Anjum Ramay's clinic located?",
    answer: "The clinic is located exclusively in Adda Gamber. You can click 'Get Directions' on the map section to view the exact location on Google Maps (https://maps.app.goo.gl/YQFZvfHeKGPxiqP48).",
    category: "Location"
  },
  {
    question: "What are Dr. Shakeel Anjum Ramay's qualifications and experience?",
    answer: "Dr. Shakeel Anjum Ramay holds MD (Medicine), MBBS, RMP, and D.A. (PGMI) qualifications, along with a Diploma in Child Health. He brings over 20 years of specialized experience in treating children's diseases. He is also a Member of the Pakistan Pediatric Association Punjab, Ex-Deputy District Health Officer Okara, and Ex-General Secretary / Vice President PMA Okara.",
    category: "Qualifications"
  },
  {
    question: "How can I book an appointment?",
    answer: "You can book an appointment by filling out the online form on this website, calling directly at +92 344 3335333, or clicking the 'WhatsApp Us' button to send an instant booking request.",
    category: "Appointments"
  },
  {
    question: "Does the clinic offer infant vaccination and nebulization services?",
    answer: "Yes, our clinic in Adda Gamber provides scheduled child vaccinations following standard safety protocols, as well as in-clinic nebulization therapy for acute chest congestion and respiratory relief.",
    category: "Services"
  },
  {
    question: "What should I bring for my child's first consultation?",
    answer: "Please bring any previous medical prescriptions, growth charts, vaccination cards, or lab reports if available, so Dr. Shakeel can review your child's complete medical history.",
    category: "Appointments"
  }
];
