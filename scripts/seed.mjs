// Plain Node seed script (no TS runtime required) — populates the Invytra
// content tables with the initial catalogue described in the brand brief.
// Safe to re-run: it wipes and re-inserts so content always matches source.
import "dotenv/config";
import pg from "pg";

const { Pool } = pg;
const pool = new Pool({ connectionString: process.env.DATABASE_URL });

const siteConfigData = {
  brand: {
    name: "INVYTRA",
    tagline: "Ideas today. Impact tomorrow.",
    philosophy: "Learn • Create • Celebrate",
  },
  hero: {
    eyebrow: "THE INVYTRA ECOSYSTEM",
    titleLines: ["One vision.", "Three worlds."],
    description:
      "A growing venture creating meaningful experiences across education, technology and celebrations.",
    primaryCTA: "Explore Invytra",
    secondaryCTA: "Our Story",
  },
  whatsapp: {
    number: "918606159002",
    messages: {
      project: "Hello Invytra Project, I am interested in a college project / software solution.",
      learning: "Hello Invytra Learning, I would like to know more about tutoring.",
      event: "Hello Invytra Event, I am interested in a digital invitation.",
    },
  },
  contact: {
    email: "hello@invytra.com",
    phone: "+91 86061 59002",
    instagram: "https://instagram.com/invytra",
  },
  settings: {
    showFeatured: true,
    showTestimonials: true,
    showStats: true,
  },
};

const ventureRows = [
  {
    slug: "project",
    number: "01",
    name: "INVYTRA PROJECT",
    label: "DESIGN • DEVELOP • DELIVER",
    theme: "project",
    hero_image: "/images/project-desk.jpg",
    description:
      "Turning college ideas into meaningful software, digital products and academic experiences.",
    headline: JSON.stringify(["INVYTRA", "PROJECT"]),
    features: JSON.stringify([
      "Academic Projects",
      "Software Development",
      "UI / UX",
      "Documentation",
      "Presentations",
      "Final Year Projects",
    ]),
    cta: "Explore Project",
    link: "/project",
    sort_order: 1,
  },
  {
    slug: "learning",
    number: "02",
    name: "INVYTRA LEARNING",
    label: "LEARN • GROW • SUCCEED",
    theme: "learning",
    hero_image: "/images/learning-tutor.jpg",
    description:
      "Personalized learning designed to give every student focused attention and stronger foundations.",
    headline: JSON.stringify(["ONE TUTOR.", "ONE STUDENT.", "ONE FOCUSED JOURNEY."]),
    features: JSON.stringify(["1 : 1 Tuition", "All Subjects", "Language Learning", "Exam Preparation", "Progress Tracking"]),
    cta: "Explore Learning",
    link: "/learning",
    sort_order: 2,
  },
  {
    slug: "event",
    number: "03",
    name: "INVYTRA EVENT",
    label: "PREMIUM DIGITAL INVITATIONS",
    theme: "event",
    hero_image: "/images/event-phone.jpg",
    description:
      "Premium digital invitations and immersive event experiences crafted for moments worth remembering.",
    headline: JSON.stringify(["YOUR MOMENT.", "REIMAGINED."]),
    features: JSON.stringify(["Wedding", "Save The Date", "RSVP", "Gallery", "Countdown", "Event Websites"]),
    cta: "Explore Event",
    link: "/event",
    sort_order: 3,
  },
];

const offeringRows = [
  // PROJECT
  {
    venture: "project",
    title: "Smart Attendance System",
    category: "College Project",
    description: "Face-recognition attendance platform with an admin dashboard and analytics.",
    image: "/images/poster-project.jpg",
    price: "₹2,999",
    old_price: "₹4,999",
    discount: "40% OFF",
    badge: "POPULAR",
    cta: "View Project",
    link: "/project",
    featured: true,
    gallery_size: "large",
    sort_order: 1,
  },
  {
    venture: "project",
    title: "E-Commerce Final Year Suite",
    category: "Final Year Project",
    description: "Full-stack storefront with payments, admin panel and complete documentation.",
    image: "/images/project-desk.jpg",
    price: "₹4,499",
    old_price: null,
    discount: null,
    badge: "NEW",
    cta: "View Project",
    link: "/project",
    featured: true,
    gallery_size: "small",
    sort_order: 2,
  },
  {
    venture: "project",
    title: "Restaurant Ordering App",
    category: "Software Development",
    description: "Cross-platform ordering experience built with React Native.",
    image: "/images/project-desk.jpg",
    price: "₹3,499",
    old_price: null,
    discount: null,
    badge: null,
    cta: "View Project",
    link: "/project",
    featured: false,
    gallery_size: null,
    sort_order: 3,
  },
  // LEARNING
  {
    venture: "learning",
    title: "LP & UP Tuition — All Subjects",
    category: "1 : 1 Tuition",
    description: "Complete academic support with concept-based teaching and regular assessments.",
    image: "/images/poster-learning.jpg",
    price: "₹1,499 / mo",
    old_price: null,
    discount: null,
    badge: "ADMISSIONS OPEN",
    cta: "Enroll Now",
    link: "/learning",
    featured: true,
    gallery_size: "wide",
    sort_order: 1,
  },
  {
    venture: "learning",
    title: "Language Learning",
    category: "English • Hindi • Malayalam",
    description: "Reading, writing, grammar and speaking skills built one session at a time.",
    image: "/images/learning-tutor.jpg",
    price: "₹1,199 / mo",
    old_price: null,
    discount: null,
    badge: null,
    cta: "Enroll Now",
    link: "/learning",
    featured: true,
    gallery_size: "small",
    sort_order: 2,
  },
  {
    venture: "learning",
    title: "Exam Crash Course",
    category: "Exam Preparation",
    description: "Focused revision sprints before board and semester examinations.",
    image: "/images/learning-tutor.jpg",
    price: null,
    old_price: null,
    discount: null,
    badge: "LIMITED",
    cta: "Ask For Details",
    link: "/learning",
    featured: false,
    gallery_size: null,
    sort_order: 3,
  },
  // EVENT
  {
    venture: "event",
    title: "Ivory Wedding Invitation Website",
    category: "Wedding",
    description: "A cinematic wedding microsite with RSVP, gallery and countdown.",
    image: "/images/poster-event.jpg",
    price: "₹1,999",
    old_price: "₹2,999",
    discount: "33% OFF",
    badge: "FEATURED",
    cta: "Preview Template",
    link: "/event",
    featured: true,
    gallery_size: "vertical",
    sort_order: 1,
  },
  {
    venture: "event",
    title: "Save The Date Reel",
    category: "Save The Date",
    description: "A short cinematic teaser built for sharing on WhatsApp and Instagram.",
    image: "/images/event-phone.jpg",
    price: "₹499",
    old_price: null,
    discount: null,
    badge: null,
    cta: "Preview Template",
    link: "/event",
    featured: false,
    gallery_size: null,
    sort_order: 2,
  },
  {
    venture: "event",
    title: "Full Event Website",
    category: "RSVP • Gallery • Countdown",
    description: "The complete event experience — invitation, gallery, RSVP and countdown in one link.",
    image: "/images/event-phone.jpg",
    price: "₹3,499",
    old_price: null,
    discount: null,
    badge: "POPULAR",
    cta: "Preview Template",
    link: "/event",
    featured: false,
    gallery_size: null,
    sort_order: 3,
  },
];

const statRows = [
  { value: "100+", label: "Projects Delivered", sort_order: 1 },
  { value: "50+", label: "Students Guided", sort_order: 2 },
  { value: "100+", label: "Invitations Crafted", sort_order: 3 },
  { value: "3", label: "Ventures, One Vision", sort_order: 4 },
];

const testimonialRows = [
  {
    quote:
      "Invytra built our final year project end-to-end — clean code, real documentation, and a presentation that actually impressed our panel.",
    name: "Aditya R.",
    category: "Project",
    sort_order: 1,
  },
  {
    quote: "My daughter finally enjoys studying. The one-to-one attention made all the difference in a single term.",
    name: "Meera K.",
    category: "Learning",
    sort_order: 2,
  },
  {
    quote: "Our wedding website felt like a boutique hotel's — elegant, fast, and every guest RSVP'd within days.",
    name: "Rohan & Ananya",
    category: "Event",
    sort_order: 3,
  },
  {
    quote: "Professional from the first message to final delivery. Exactly the quiet confidence we wanted for our brand.",
    name: "Fathima S.",
    category: "Project",
    sort_order: 4,
  },
];

async function run() {
  const client = await pool.connect();
  try {
    await client.query("BEGIN");
    await client.query("TRUNCATE TABLE offerings, ventures, testimonials, stats, site_config RESTART IDENTITY");

    await client.query("INSERT INTO site_config (data) VALUES ($1)", [siteConfigData]);

    for (const v of ventureRows) {
      await client.query(
        `INSERT INTO ventures (slug, number, name, label, theme, hero_image, description, headline, features, cta, link, active, sort_order)
         VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,true,$12)`,
        [v.slug, v.number, v.name, v.label, v.theme, v.hero_image, v.description, v.headline, v.features, v.cta, v.link, v.sort_order],
      );
    }

    for (const o of offeringRows) {
      await client.query(
        `INSERT INTO offerings (venture, title, category, description, image, price, old_price, discount, badge, cta, link, featured, gallery_size, active, sort_order)
         VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,true,$14)`,
        [
          o.venture,
          o.title,
          o.category,
          o.description,
          o.image,
          o.price,
          o.old_price,
          o.discount,
          o.badge,
          o.cta,
          o.link,
          o.featured,
          o.gallery_size,
          o.sort_order,
        ],
      );
    }

    for (const s of statRows) {
      await client.query("INSERT INTO stats (value, label, active, sort_order) VALUES ($1,$2,true,$3)", [
        s.value,
        s.label,
        s.sort_order,
      ]);
    }

    for (const t of testimonialRows) {
      await client.query(
        "INSERT INTO testimonials (quote, name, category, active, sort_order) VALUES ($1,$2,$3,true,$4)",
        [t.quote, t.name, t.category, t.sort_order],
      );
    }

    await client.query("COMMIT");
    console.log("✅ Invytra content seeded successfully.");
  } catch (error) {
    await client.query("ROLLBACK");
    console.error("❌ Seed failed:", error);
    process.exitCode = 1;
  } finally {
    client.release();
    await pool.end();
  }
}

run();
