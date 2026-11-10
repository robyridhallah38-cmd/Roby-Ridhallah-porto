import { PortfolioItem } from '../utils/portfolioLogic';

export interface DiverProfile {
  name: string;
  role: string;
  greeting: string;
  bio: string;
  avatar: string;
  diverLevel: number;
  gold: number;
  cookstaRating: number;
  contactEmail: string;
  location: string;
}

export const PROFILE_DATA: DiverProfile = {
  name: "Roby Rizqy Ridhallah",
  role: "3D Artist, Graphic Designer, & Creative Explorer",
  greeting: "Diving into the Creative Ocean",
  bio: "Halo! Saya Roby Rizqy Ridhallah, seorang creative explorer yang gemar menyelami kedalaman imajinasi visual. Mengolah model dan pahatan 3D di Blender, meracik identitas visual dan tata letak di Adobe Illustrator, hingga menangkap keheningan momen lewat fotografi konseptual.",
  avatar: "/assets/aistudio/Gambar_WhatsApp_2025-02-16_pukul_14.19.36_4757f056-removebg-preview_0d08c160.png",
  diverLevel: 99,
  gold: 99990,
  cookstaRating: 5,
  contactEmail: "robyridhallah38@gmail.com",
  location: "Indonesia • Ready for Remote Projects & Collaborations",
};

export interface GearSkill {
  id: string;
  name: string;
  software: string;
  level: number;
  maxLevel: number;
  gearClass: string;
  iconType: 'blender' | 'illustrator' | 'camera';
  summary: string;
  stats: Array<{ name: string; value: number }>;
  perks: string[];
}

export const GEAR_SKILLS: GearSkill[] = [
  {
    id: "gear-3d",
    name: "3D Art & Digital Sculpting",
    software: "Blender 5.1.1 / 3D Suite",
    level: 5,
    maxLevel: 5,
    gearClass: "Diamond Abyssal Sculptor (LV.MAX)",
    iconType: "blender",
    summary: "Kemampuan memahat karakter estilistik (Wino), hard-surface props, topologi rapi, serta shading dan pencahayaan dinamis.",
    stats: [
      { name: "3D Modeling", value: 95 },
      { name: "Digital Sculpting (Dyntopo & Multires)", value: 94 },
      { name: "Simple Animating & Rigging", value: 85 },
      { name: "Lighting & EEVEE/Cycles Shading", value: 90 },
    ],
    perks: [
      "Detail sculpting karakter ekspresif (Wino Project)",
      "Topologi bersih untuk render real-time",
      "Gradient hair styling & procedural anime shading",
    ],
  },
  {
    id: "gear-graphic",
    name: "Graphic Design & Branding",
    software: "Adobe Illustrator / Vector Suite",
    level: 5,
    maxLevel: 5,
    gearClass: "Master Vector Harpoon (LV.MAX)",
    iconType: "illustrator",
    summary: "Merancang visual branding yang memikat, banner iklan konversi tinggi, feeds sosial media harmonis, dan logo ikonik.",
    stats: [
      { name: "Banner & Poster Advertising", value: 94 },
      { name: "Feed Instagram & Social Media Kit", value: 92 },
      { name: "Logo Maker & Visual Identity", value: 90 },
      { name: "Typography & Layout Hierarchy", value: 89 },
    ],
    perks: [
      "Skalabilitas vektor tak terbatas (lossless)",
      "Harmoni palet warna dan kontras tinggi",
      "Komposisi tajam yang memikat perhatian audiens",
    ],
  },
  {
    id: "gear-photo",
    name: "Photography & Visual Storytelling",
    software: "Conceptual Lens & Camera",
    level: 5,
    maxLevel: 5,
    gearClass: "Deep Sea Lumix Shutter (LV.MAX)",
    iconType: "camera",
    summary: "Menangkap esensi keheningan cerita visual, permainan siluet pencahayaan senja dramatis, dan komposisi framing alami.",
    stats: [
      { name: "Konseptual Photography", value: 93 },
      { name: "Visual Storytelling & Framing", value: 95 },
      { name: "Color Grading & Sunset Tones", value: 90 },
      { name: "Natural Ambient Lighting", value: 92 },
    ],
    perks: [
      "Penceritaan emosional dalam satu bidikan (Siluet Senja Menara)",
      "Komposisi framing alami menggunakan siluet dedaunan palem",
      "Gradasi warna langit senja alami (Pink to Violet palette)",
    ],
  },
];

/**
 * HANYA KARYA ASLI MILIK ROBY RIZQY RIDHALLAH:
 * - 3D Art: Wino 3D Character Sculpt (Blender 5.1.1)
 * - Photography: Senja Hening Siluet Menara (DSC03096)
 * - Graphic Design: Portofolio Layanan Desain Roby (Logo, Banner, Feed)
 */
export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  // 1. KARYA 3D ASLI ROBY (BLENDER 5.1.1)
  {
    id: "3d-wino",
    title: "Wino - Stylized 3D Character Sculpt",
    category: "3d",
    subcategory: "Character Sculpting (Blender)",
    image: "/assets/aistudio/Cuplikan_layar_2026-08-19_185710_562f1186.png",
    description: "Karya digital sculpting karakter 3D orisinal bernama 'Wino' yang dipahat langsung di Blender 5.1.1 oleh Roby Rizqy Ridhallah. Menampilkan eksplorasi proporsi wajah anime yang ekspresif, helai rambut berlapis dengan gradasi warna ungu-hitam vibran, serta perbandingan dual viewport (kiri: Front Orthographic Sculpting untuk validasi anatomi, kanan: Lit Shading EEVEE untuk evaluasi bayangan dan pantulan cahaya).",
    tools: ["Blender 5.1.1", "Dyntopo Sculpt", "EEVEE Engine", "Vertex Color", "Sphere Base Mesh", "Orthographic View"],
    date: "2026",
    featured: true,
    likes: 1840,
    depthLevel: 180,
    tags: ["Karya Asli Roby", "Blender 5.1.1", "Character Sculpting", "Stylized Anime", "EEVEE"],
    comments: [
      {
        author: "Duff (Weapon & Otaku Master)",
        role: "Anime 3D Critic",
        avatar: "⚡",
        text: "Karakter Wino ini sangat berkarakter! Poni rambut dan gradasi warna ungunya sangat rapi dan hidup di EEVEE!",
      },
      {
        author: "Bancho",
        role: "Head Chef",
        avatar: "🔪",
        text: "Presisi dalam memahat bentuk hidung dan garis bibirnya sangat matang dan proporsional.",
      },
    ],
  },

  // 2. KARYA FOTOGRAFI ASLI ROBY (DSC03096)
  {
    id: "photo-twilight-sanctuary",
    title: "Senja Hening: Siluet Menara & Guratan Langit Senja",
    category: "photo",
    subcategory: "Konseptual & Visual Storytelling",
    image: "/assets/aistudio/DSC03096_c95167b0.jpg",
    description: "Karya fotografi orisinal oleh Roby Rizqy Ridhallah (DSC03096). Menangkap momen puitis saat fajar senja menyelimuti kubah menara berarsitektur khas. Dibingkai secara simetris alami oleh siluet dedaunan palem tropis di sisi kiri dan kanan, dengan sapuan guratan cahaya lembut melintasi langit bergradasi jingga, merah muda, dan ungu teduh.",
    tools: ["Digital Camera", "Natural Twilight Lighting", "Visual Storytelling Framing", "High Dynamic Range"],
    date: "2026",
    featured: true,
    likes: 2450,
    depthLevel: 45,
    tags: ["Karya Asli Roby", "Fotografi Konseptual", "Visual Storytelling", "Golden Hour & Senja", "Siluet"],
    comments: [
      {
        author: "Bancho",
        role: "Chef",
        avatar: "🔪",
        text: "Keheningan langit senja ini menghadirkan ketenangan jiwa, layaknya hembusan angin laut di malam hari.",
      },
      {
        author: "Dave",
        role: "The Diver",
        avatar: "🤿",
        text: "Siluet dedaunan palemnya membingkai menara dengan sangat anggun! Foto yang sarat makna dan rasa damai.",
      },
      {
        author: "Cobra",
        role: "Captain",
        avatar: "🕶️",
        text: "Bidikan kamera yang sangat profesional, Roby! Pencahayaan alami dan gradasi warnanya luar biasa.",
      },
    ],
  },

  // 3. DESAIN GRAFIS ROBY (ADOBE ILLUSTRATOR)
  {
    id: "gd-vector-logo",
    title: "Logo Maker & Brand Identity System",
    category: "graphic",
    subcategory: "Logo Maker (Adobe Illustrator)",
    image: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 600 400' fill='%2306172d'><rect width='600' height='400' fill='%23051429'/><circle cx='300' cy='180' r='100' fill='none' stroke='%2300e5ff' stroke-width='4' stroke-dasharray='8 6'/><polygon points='300,100 370,220 230,220' fill='%23f59e0b'/><circle cx='300' cy='180' r='35' fill='%23041226'/><text x='300' y='188' font-family='monospace' font-size='22' font-weight='bold' fill='%2300e5ff' text-anchor='middle'>RR</text><text x='300' y='325' font-family='sans-serif' font-size='18' font-weight='bold' fill='white' text-anchor='middle'>ROBY RIZQY • LOGO &amp; IDENTITY</text><text x='300' y='355' font-family='sans-serif' font-size='13' fill='%2338bdf8' text-anchor='middle'>Adobe Illustrator Vector Precision</text></svg>",
    description: "Layanan perancangan logo orisinal dan identitas merek oleh Roby Rizqy Ridhallah. Menitikberatkan pada konsep filosofis yang kuat, proporsi geometri presisi, dan skalabilitas vektor tak terbatas (lossless) untuk segala media cetak dan digital.",
    tools: ["Adobe Illustrator", "Vector Geometry", "Brand Typography", "Identity Guidelines"],
    date: "2026",
    featured: false,
    likes: 1280,
    tags: ["Karya Desain Roby", "Logo Maker", "Vector Art", "Brand Identity"],
    comments: [
      {
        author: "Bancho",
        role: "Chef",
        avatar: "🔪",
        text: "Logo yang kuat adalah tanda dedikasi seorang profesional. Karya yang sangat rapi!",
      },
    ],
  },
  {
    id: "gd-banner-promo",
    title: "Commercial Banner & Poster Advertising",
    category: "graphic",
    subcategory: "Banner Design (Adobe Illustrator)",
    image: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 600 400' fill='%2306172d'><rect width='600' height='400' fill='%23120b04'/><rect x='20' y='20' width='560' height='360' fill='none' stroke='%23f59e0b' stroke-width='3'/><rect x='40' y='50' width='520' height='70' fill='%23f59e0b'/><text x='300' y='95' font-family='monospace' font-size='24' font-weight='bold' fill='%23041226' text-anchor='middle'>COMMERCIAL AD BANNER</text><text x='300' y='180' font-family='sans-serif' font-size='26' font-weight='bold' fill='white' text-anchor='middle'>HIGH-IMPACT VISUAL ADVERTISING</text><text x='300' y='220' font-family='sans-serif' font-size='15' fill='%23fed7aa' text-anchor='middle'>Tata Letak Berdaya Tarik Tinggi &amp; Komposisi Warna Tajam</text><rect x='200' y='270' width='200' height='50' fill='%2300e5ff'/><text x='300' y='302' font-family='monospace' font-size='14' font-weight='bold' fill='%23041226' text-anchor='middle'>ROBY RIDHALLAH</text></svg>",
    description: "Desain spanduk dan media promosi komersial dengan hierarki tipografi tegas, perpaduan kontras visual dinamis, serta layout yang memaksimalkan konversi perhatian target audiens.",
    tools: ["Adobe Illustrator", "Typography Hierarchy", "Commercial Advertising"],
    date: "2026",
    featured: false,
    likes: 1150,
    tags: ["Karya Desain Roby", "Banner Advertising", "Poster", "Illustrator"],
    comments: [
      {
        author: "Cobra",
        role: "Promoter",
        avatar: "🕶️",
        text: "Banner dengan keterbacaan tajam seperti ini selalu berhasil menarik perhatian calon klien!",
      },
    ],
  },
  {
    id: "gd-instagram-feed",
    title: "Instagram 9-Grid & Social Media Branding Kit",
    category: "graphic",
    subcategory: "Feed Instagram (Adobe Illustrator)",
    image: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 600 400' fill='%231c0515'><rect width='600' height='400' fill='%231e071a'/><g fill='none' stroke='%23ec4899' stroke-width='2'><rect x='160' y='60' width='80' height='80'/><rect x='260' y='60' width='80' height='80'/><rect x='360' y='60' width='80' height='80'/><rect x='160' y='160' width='80' height='80'/><rect x='260' y='160' width='80' height='80'/><rect x='360' y='160' width='80' height='80'/><rect x='160' y='260' width='80' height='80'/><rect x='260' y='260' width='80' height='80'/><rect x='360' y='260' width='80' height='80'/></g><circle cx='300' cy='200' r='25' fill='%23ec4899'/><text x='300' y='206' font-family='sans-serif' font-size='16' font-weight='bold' fill='white' text-anchor='middle'>9-GRID</text><text x='300' y='365' font-family='monospace' font-size='14' font-weight='bold' fill='%23fbcfe8' text-anchor='middle'>INSTAGRAM FEED &amp; SOCIAL BRANDING</text></svg>",
    description: "Perancangan template feed Instagram terpadu dengan sistem grid estetik dan harmonis. Memastikan konsistensi tone warna, font, dan visual branding agar akun tampak profesional dan berkelas.",
    tools: ["Adobe Illustrator", "Social Grid Layout", "Color Harmony", "Visual System"],
    date: "2026",
    featured: false,
    likes: 1390,
    tags: ["Karya Desain Roby", "Feed Instagram", "Social Media Kit", "Grid Layout"],
    comments: [
      {
        author: "Maki",
        role: "Food Influencer",
        avatar: "📱",
        text: "Grid Instagram yang harmonis selalu membuat akun terlihat lebih terpercaya dan estetik!",
      },
    ],
  },
];
