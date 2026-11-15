import type { VentureSlug } from "@/lib/types";

/**
 * In-depth, first-party information about each Invytra division.
 *
 * This content exists so visitors (students, parents, couples, clients)
 * can genuinely understand what each service includes, how it works and
 * what it costs in effort/time — before they ever message us. It is kept
 * deliberately factual: everything here describes the real services
 * already offered elsewhere on the site (see site.json / offerings).
 */

export type GuideInclude = { title: string; body: string };
export type GuideStep = { title: string; body: string };
export type GuideFaq = { q: string; a: string };

export type VentureGuide = {
  /** Two short paragraphs expanding on the hero description. */
  intro: string[];
  includesTitle: string;
  includes: GuideInclude[];
  processTitle: string;
  process: GuideStep[];
  topicsTitle: string;
  topics: string[];
  faqs: GuideFaq[];
};

export const VENTURE_GUIDES: Record<VentureSlug, VentureGuide> = {
  project: {
    intro: [
      "Invytra Project helps college students plan, build and genuinely understand academic software projects — final-year projects, mini projects and custom web or app builds. The goal is never just a zip file of code: every project is developed alongside explanations, documentation and presentation support so you can demonstrate and defend your own work in front of a panel.",
      "Most students arrive with one of three things: a topic approved by their department, a rough idea that needs shaping, or a deadline that is closer than they would like. We start from wherever you are, agree on a realistic scope for your timeline and syllabus requirements, and then build in visible milestones — you see working software early, not in the final week.",
    ],
    includesTitle: "What every project engagement includes",
    includes: [
      {
        title: "Working source code",
        body: "A complete, runnable project built with a modern stack matched to your topic — for example Next.js, Node.js and PostgreSQL for web platforms, React Native for apps, or Python for computer-vision systems like our facial-recognition attendance builds.",
      },
      {
        title: "Project documentation",
        body: "Structured documentation covering the problem statement, system architecture, module descriptions, database design and screenshots — the material departments typically expect in a project report.",
      },
      {
        title: "Architecture diagrams",
        body: "Clear diagrams (system architecture, data-flow and use-case views) that explain how the pieces fit together, drawn from your actual implementation rather than copied templates.",
      },
      {
        title: "Setup & installation guide",
        body: "Step-by-step instructions to run the project on your own machine, so you are never dependent on us to start your own demo.",
      },
      {
        title: "Demo walkthrough",
        body: "A guided walkthrough of the finished project: what each module does, how data flows through it, and the questions examiners most commonly ask about systems like yours.",
      },
      {
        title: "Viva & presentation support",
        body: "Help preparing slides and likely viva answers based on your project's real design decisions — why this stack, why this database design, where the limitations are.",
      },
    ],
    processTitle: "How a project works, step by step",
    process: [
      {
        title: "Share your requirement",
        body: "Message us your topic, department guidelines, deadline and any reference material. If you only have an idea, we help shape it into an approvable scope.",
      },
      {
        title: "Scope & proposal",
        body: "You receive a clear proposal: features, technology stack, milestones and price — agreed before any work begins, with no hidden additions later.",
      },
      {
        title: "Build in milestones",
        body: "Development happens in stages with working demos at each milestone, so you can track progress, give feedback and start learning the system early.",
      },
      {
        title: "Documentation & handover",
        body: "Final delivery includes the code, documentation, diagrams and setup guide, followed by a walkthrough session and viva preparation.",
      },
    ],
    topicsTitle: "Project domains we regularly build",
    topics: [
      "Final-year capstone projects",
      "Mini projects",
      "Facial recognition & computer vision",
      "Attendance & management systems",
      "E-commerce platforms",
      "SaaS dashboards & admin panels",
      "Restaurant & ordering apps",
      "Web applications (Next.js / Node.js)",
      "Mobile apps (React Native)",
      "Database design (PostgreSQL)",
    ],
    faqs: [
      {
        q: "Can you build a project on a topic my department already approved?",
        a: "Yes — that is the most common starting point. Share the approved topic and any guidelines from your department, and we scope the features, stack and documentation around exactly those requirements.",
      },
      {
        q: "I only have a rough idea, not a full topic. Can you help?",
        a: "Yes. Tell us your subject area and interests, and we will suggest project ideas that are realistic for your timeline, demonstrable in a viva, and matched to technologies you can actually explain.",
      },
      {
        q: "Will I be able to explain the project in my viva?",
        a: "That is a core part of the service. You receive documentation, architecture diagrams and a personal walkthrough of how your system works, plus preparation for the questions panels typically ask. Our aim is that you understand your project, not just submit it.",
      },
      {
        q: "What do I receive at the end?",
        a: "The complete source code, project documentation, architecture diagrams, a setup and installation guide, and presentation support. Delivery is online, and we walk you through running the project on your own machine.",
      },
      {
        q: "How long does a project take?",
        a: "Mini projects are usually a matter of days to a couple of weeks; full final-year systems take longer depending on scope. When you share your deadline we confirm a milestone schedule up front — if a timeline is not realistic, we will tell you before you commit.",
      },
      {
        q: "How do we start, and how is pricing decided?",
        a: "Message us on WhatsApp or email with your topic and deadline. Pricing depends on the scope and features we agree in the proposal — you see the full price before work begins, and listed packages (for example complete systems from ₹2,999) give a realistic starting range.",
      },
    ],
  },

  learning: {
    intro: [
      "Invytra Learning is 100% online, one-to-one tutoring: one student, one dedicated tutor, and a plan built around that student's syllabus, pace and confidence. There are no crowded batches and no generic recordings — every session is live, personal and adjusted based on how the student is actually progressing.",
      "Families and students come to us for regular school support (LP and UP classes across subjects), deeper STEM and coding mentorship, language learning, and focused crash courses before board and semester examinations. Because sessions are one-to-one, the tutor notices exactly where a student gets stuck — a specific step in a maths problem, a grammar pattern, a data-structures concept — and works on that, rather than re-teaching the whole chapter.",
    ],
    includesTitle: "What learning with Invytra includes",
    includes: [
      {
        title: "A dedicated 1:1 tutor",
        body: "The same tutor stays with the student, learning their strengths, gaps and pace — so no session is wasted re-introducing context.",
      },
      {
        title: "A personalised study plan",
        body: "Sessions follow the student's school or college syllabus, sequenced around exams and weak topics rather than a fixed off-the-shelf curriculum.",
      },
      {
        title: "Personalised problem sets",
        body: "Practice material chosen for the student's current level — consolidation where they are shaky, stretch problems where they are ready.",
      },
      {
        title: "Direct chat support",
        body: "Questions between sessions do not have to wait a week. Students can reach their tutor directly for doubts as they study.",
      },
      {
        title: "Milestone assessments",
        body: "Regular short assessments track whether concepts are actually sticking, and the plan is adjusted based on the results.",
      },
      {
        title: "Progress visibility",
        body: "Parents and students can see what has been covered and what is improving — progress is discussed openly, not guessed at report-card time.",
      },
    ],
    processTitle: "How tutoring works, step by step",
    process: [
      {
        title: "Tell us the goal",
        body: "Message us the student's class, subjects and what is not working — regular support, exam preparation, or a specific topic like Data Structures.",
      },
      {
        title: "Level & fit assessment",
        body: "We understand the student's current level and learning style so the plan and pace start from reality, not assumptions.",
      },
      {
        title: "Regular 1:1 sessions",
        body: "Live online sessions at mutually workable times, following the personalised plan, with practice sets between sessions.",
      },
      {
        title: "Assess & adjust",
        body: "Milestone assessments and progress updates show what has improved and what needs more time — the plan evolves with the student.",
      },
    ],
    topicsTitle: "Subjects and programmes",
    topics: [
      "LP & UP tuition — all subjects",
      "School mathematics & science",
      "STEM mentorship",
      "Coding & computer science",
      "Data Structures & algorithms",
      "Language learning (reading, writing, grammar, speaking)",
      "Exam crash courses (board & semester)",
      "Homework & concept support",
      "Personalised revision plans",
    ],
    faqs: [
      {
        q: "Who is Invytra Learning for?",
        a: "School students who need regular subject support, students preparing intensively for board or semester exams, and learners who want 1:1 STEM or coding mentorship. If a student feels lost in a large class or tuition batch, the one-to-one format is usually where we help most.",
      },
      {
        q: "How do online sessions work?",
        a: "Sessions are live and one-to-one over video call, with worked examples and problem-solving done together in real time. All you need is a phone, tablet or computer with an internet connection — students join from anywhere.",
      },
      {
        q: "Will the tutoring follow my school's syllabus?",
        a: "Yes. The plan is built around the student's actual syllabus, textbooks and exam schedule. We strengthen weak chapters, keep pace with what is being taught in class, and revise systematically before examinations.",
      },
      {
        q: "How is progress tracked?",
        a: "Through regular milestone assessments, personalised problem sets, and honest progress updates. If a topic is not improving, the plan changes — different explanation, more practice, or a slower pace — rather than simply moving on.",
      },
      {
        q: "Are timings flexible?",
        a: "Sessions are scheduled at mutually workable times and can be arranged around school hours and other commitments. Because it is one-to-one, rescheduling a session is far easier than in a batch.",
      },
      {
        q: "How do we start, and what does it cost?",
        a: "Message us on WhatsApp or email with the student's class, subjects and goals. Mentorship programmes such as the 1:1 Intensive STEM & Coding package start from ₹1,499/month; the right plan and price are confirmed with you before enrolment, with no obligation from the first conversation.",
      },
    ],
  },

  event: {
    intro: [
      "Invytra Event creates cinematic digital invitations and complete event websites — primarily for weddings, and for the celebrations around them. Instead of a static image forwarded on WhatsApp, your guests receive one elegant link: the invitation, your story, the schedule, venue maps, a photo gallery, a live countdown and an RSVP form, all in one place.",
      "For hosts, the practical side matters as much as the design. Every RSVP is collected and organised for you — who is coming, how many guests, dietary preferences — so planning numbers stop being guesswork. Invitations are designed to be shared instantly on WhatsApp and email, opened on any phone without installing anything, and updated if plans change.",
    ],
    includesTitle: "What an Invytra event site includes",
    includes: [
      {
        title: "Custom wedding website",
        body: "A bespoke site designed around your event's colours, photos and story — not a generic template with your names pasted in.",
      },
      {
        title: "Interactive RSVP & guest list",
        body: "Guests confirm attendance (and details like guest count and dietary preferences) through the site; responses are organised into a list you can actually plan with.",
      },
      {
        title: "Itinerary & venue maps",
        body: "Ceremony and reception schedules presented clearly, with venue locations linked to maps so out-of-town guests can find their way.",
      },
      {
        title: "Photo & video gallery",
        body: "A high-resolution gallery for your photos — before the event for your story, and after it for the memories you want to share.",
      },
      {
        title: "Live countdown timer",
        body: "A countdown to the big day on the invitation itself, building anticipation every time a guest opens the link.",
      },
      {
        title: "Easy sharing & updates",
        body: "One link that works on WhatsApp, email and social media — and if a time or venue detail changes, the site is updated once and every guest sees the latest version.",
      },
    ],
    processTitle: "How your event site is made",
    process: [
      {
        title: "Share your event",
        body: "Tell us the occasion, dates, venues and the feel you want — traditional, modern, cinematic — plus the photos and details you would like featured.",
      },
      {
        title: "Design draft",
        body: "We craft a first version of your invitation site in your chosen style for you to review on your own phone, exactly as guests will see it.",
      },
      {
        title: "Review & refine",
        body: "You request changes — wording, photos, schedule, colours — and we refine until it feels like your event, not a template.",
      },
      {
        title: "Launch & share",
        body: "Your site goes live on a single shareable link. RSVPs start collecting immediately, and we stay available for updates as the event approaches.",
      },
    ],
    topicsTitle: "Events and formats we create for",
    topics: [
      "Wedding invitation websites",
      "Save-the-date reels & pages",
      "Engagement invitations",
      "Reception & sangeet pages",
      "Birthday & milestone celebrations",
      "Full event hubs (invite + gallery + RSVP + countdown)",
      "WhatsApp-ready invitation links",
      "Post-event photo galleries",
    ],
    faqs: [
      {
        q: "What exactly do guests receive?",
        a: "A single link you can send on WhatsApp, email or social media. Opening it shows your full invitation experience — event details, schedule, venue maps, gallery, countdown and the RSVP form. Guests need no app and no login; any phone browser works.",
      },
      {
        q: "How does RSVP collection work?",
        a: "Guests fill in the RSVP form on the site — attendance, number of guests, and preferences such as meals. Responses are collected and organised for you, so you always know your expected numbers without chasing replies across chats.",
      },
      {
        q: "Can we update details after sharing the link?",
        a: "Yes — that is one of the main advantages over printed or image invitations. If a venue, time or schedule detail changes, tell us and the site is updated; every guest opening the same link sees the current information.",
      },
      {
        q: "How early should we order?",
        a: "Ideally as soon as your date and venues are fixed, so the save-the-date and invitation can go out with comfortable time for RSVPs. If your event is sooner than that, talk to us — a focused version can be turned around quickly depending on scope.",
      },
      {
        q: "Can the design match our wedding theme?",
        a: "Yes. Colours, typography, photos and tone are designed around your event. You review a draft on your phone before anything is shared, and we refine it with your feedback.",
      },
      {
        q: "How do we start, and what does it cost?",
        a: "Message us on WhatsApp or email with your event date and what you have in mind. Complete invitation experiences start from ₹1,999 (see the packages on this page); your exact quote is confirmed after we understand the scope, before any payment.",
      },
    ],
  },
};

export const HOME_FAQS: GuideFaq[] = [
  {
    q: "What is Invytra?",
    a: "Invytra is one venture with three specialised divisions: Invytra Project (academic software projects and development support for college students), Invytra Learning (100% online one-to-one tutoring) and Invytra Event (digital wedding and event invitation websites). Each division is focused on doing one kind of work exceptionally well, to one shared standard of craft.",
  },
  {
    q: "How do I get started with any Invytra service?",
    a: "The fastest way is WhatsApp or email (see the contact section). Tell us which division you need and a few details — your project topic and deadline, your child's class and subjects, or your event date — and we reply with clear next steps, scope and pricing before you commit to anything.",
  },
  {
    q: "Is everything really online?",
    a: "Yes. Tutoring sessions, project development and walkthroughs, and event-site design reviews all happen online, so students, families and couples work with us from anywhere. Final deliverables — code, documentation, live websites — are handed over digitally with guidance on using them.",
  },
  {
    q: "How does pricing work?",
    a: "Each page lists realistic starting prices for its most popular packages (for example mentorship from ₹1,499/month, event sites from ₹1,999, complete project systems from ₹2,999). Your exact quote depends on scope and is always confirmed with you in advance — no surprise additions afterwards.",
  },
  {
    q: "Who will I actually be working with?",
    a: "You work directly with the people doing the work — the tutor teaching your child, the developer building your project, the designer crafting your invitation. There is no call-centre layer; the person you message is accountable for your delivery.",
  },
  {
    q: "How quickly will I hear back?",
    a: "We aim to respond to new enquiries within about 2 hours during the day. If you message on WhatsApp with your requirement in the first message itself, we can usually reply with substantive next steps rather than just an acknowledgement.",
  },
];
