export type Project = {
  slug: string;
  title: string;
  category: string;
  description: string;
  tech: string[];
  image: string;

  images: {
    user: string[];
    admin?: string[];
  };

  features: {
    user: string[];
    admin?: string[];
  };

  caseStudy: {
    problem: string;
    solution: string;
    result: string;
    architecture: string[];
    detailedAdminFlow?: string[];
  };

  github: string;
  live: string;
};

// Central repos link reused where a project is private / enterprise work.
const REPOS = "https://github.com/dk-pv?tab=repositories";
const PROFILE = "https://github.com/dk-pv";

export const projects: Project[] = [
  {
    slug: "fleettrack",
    title: "FleetTrack",
    category: "application",
    description:
      "Enterprise fleet-management platform for live GPS tracking and fleet operations. A NestJS + PostgreSQL backend ingests vehicle telemetry and streams it to a Next.js dashboard over Socket.IO, rendering real-time position, route and status on an interactive map.",

    tech: [
      "Next.js",
      "NestJS",
      "PostgreSQL",
      "Prisma",
      "Socket.IO",
      "WebSockets",
      "TypeScript",
    ],

    image: "/fleettrack.webp",

    images: {
      user: ["/fleettrack.webp"],
    },

    features: {
      user: [
        "Real-time vehicle tracking on an interactive live map",
        "Live location and route updates streamed over WebSockets",
        "Vehicle trip history and movement playback",
        "Status monitoring for location, speed and activity",
        "Responsive tracking dashboard across all devices",
      ],
      admin: [
        "Fleet and vehicle management (add, configure and assign units)",
        "Driver-to-vehicle assignment and operational controls",
        "Centralized dashboard with a live fleet-wide overview",
        "Historical route and trip analytics",
        "Role-based access for operators and administrators",
      ],
    },

    caseStudy: {
      problem:
        "Operators managed vehicles through disconnected tools with no live view — location was checked manually and after the fact, making dispatch decisions slow and trip history unreliable.",
      solution:
        "I built the real-time pipeline end to end: a NestJS ingestion API, a normalized PostgreSQL schema for vehicles, trips and telemetry, and a Socket.IO layer that fans location updates out to connected dashboards without polling. The hard part was keeping the live map consistent under a constant stream of updates — I handled connection lifecycle, room-based broadcasting per fleet, and reconnection so clients recover state cleanly. I also designed the trip-history model and the admin controls for vehicles and assignments.",
      result:
        "Operators gained a single live view of the fleet, replacing manual location checks with continuous tracking and accurate, queryable trip history — on an architecture built to absorb more vehicles and telemetry types.",
      architecture: [
        "Real-time: Socket.IO over WebSockets with room-based broadcasting per fleet",
        "Backend: NestJS ingestion and REST APIs over a modular service layer",
        "Data: PostgreSQL for vehicles, trips and telemetry, via Prisma ORM",
        "Frontend: Next.js dashboard with an interactive live map",
        "Access: JWT authentication with role-based permissions for operators and admins",
        "Deployment: Vercel (frontend) and Railway (backend)",
      ],
    },

    github: REPOS,
    live: PROFILE,
  },

  {
    slug: "emarath-erp",
    title: "Emarath ERP",
    category: "application",
    description:
      "Enterprise ERP consolidating HR and core business operations into one role-based platform. Built as a modular NestJS + PostgreSQL system with a Next.js frontend, so new business domains can be added without reworking existing modules.",

    tech: ["Next.js", "NestJS", "PostgreSQL", "Prisma", "TypeScript", "Tailwind CSS"],

    image: "/emarath.webp",

    images: {
      user: ["/emarath.webp"],
    },

    features: {
      user: [
        "Unified dashboard for business modules and operations",
        "HR and employee management workflows",
        "Role-specific views and scoped permissions",
        "Structured reporting and data views",
        "Responsive interface for desktop and mobile",
      ],
      admin: [
        "Modular ERP architecture spanning multiple business domains",
        "Role-based access control across departments",
        "Employee, workflow and business-process management",
        "Configurable dashboards and reporting",
        "Scalable service layer designed for enterprise growth",
      ],
    },

    caseStudy: {
      problem:
        "The business ran HR and operational processes across disconnected systems, creating data silos, inconsistent permissions and no single source of truth for reporting.",
      solution:
        "I contributed to a modular ERP where each business domain is an isolated module over a shared NestJS service layer and PostgreSQL schema. I built domain modules and the role-based access layer that scopes every view and action to a user's department and role — the hardest part being a permission model that stays consistent across modules without duplicating checks. Dashboards and reporting read from a unified data model rather than siloed sources.",
      result:
        "Teams now work from one system with consistent, role-scoped access and reporting, and the module boundaries let new domains ship without destabilizing what is already in production.",
      architecture: [
        "Architecture: Modular domain design over a shared NestJS service layer",
        "Access: Centralized role-based access control enforced across every module",
        "Data: PostgreSQL with Prisma ORM and a unified reporting model",
        "Frontend: Next.js with role-scoped dashboards",
        "Deployment: Vercel and Railway",
      ],
    },

    github: REPOS,
    live: PROFILE,
  },

  {
    slug: "enterprise-erp",
    title: "Enterprise ERP Platform",
    category: "application",
    description:
      "Full-featured enterprise ERP platform that centralizes sales, development, user management, HR, finance and marketing into a single role-based business workspace. Built as a modular NestJS + PostgreSQL backend with a Next.js frontend, designed to support multiple business operations from one system.",

    tech: ["Next.js", "NestJS", "PostgreSQL", "Prisma", "JWT", "Tailwind CSS"],

    image: "/enterprise-erp.webp",

    images: {
      user: ["/enterprise-erp.webp"],
    },

    features: {
      user: [
        "Unified workspace spanning sales, development, HR, finance and marketing modules",
        "Role-based dashboards scoped to each user's department and permissions",
        "HR workflows covering employee records, attendance and payroll",
        "Structured reporting and data views across business functions",
        "Responsive interface for desktop and mobile",
      ],
      admin: [
        "Modular architecture — each business function is an isolated module",
        "Centralized user and role management with fine-grained access control",
        "Administration across sales, development, finance and marketing operations",
        "Cross-module reporting from a unified data model",
        "Secure JWT authentication with role separation",
      ],
    },

    caseStudy: {
      problem:
        "The business ran sales, HR, finance and marketing processes in separate, disconnected tools — duplicated data, inconsistent permissions and no single operational view across departments.",
      solution:
        "I worked on a modular ERP workspace where each business function — sales, development, user management, HR, finance and marketing — lives as its own module over a shared NestJS service layer and PostgreSQL schema. I built module APIs and the access layer that scopes every view and action to a user's role and department, with validated inputs and consistent state transitions so cross-module data stays reliable enough to report on.",
      result:
        "Departments moved from scattered tools into one role-scoped workspace with a single source of truth for business data, and the module boundaries let new functions be added without reworking what already runs in production.",
      architecture: [
        "Architecture: Modular domain design — sales, development, user management, HR, finance and marketing modules over a shared NestJS service layer",
        "Access: JWT authentication with centralized role-based access control enforced in every module",
        "Data: PostgreSQL with Prisma ORM and cross-module reporting from a unified model",
        "Frontend: Next.js workspace with role-scoped module dashboards",
        "Deployment: Vercel and Railway",
      ],
    },

    github: REPOS,
    live: PROFILE,
  },

  {
    slug: "vrs-realinvest",
    title: "VRS RealInvest",
    category: "application",
    description:
      "Full-stack real estate investment platform with advanced property search, an administrative dashboard and analytics. Built with a Next.js frontend and a Node.js/Express REST API backed by MongoDB.",

    tech: ["Next.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],

    image: "/vrs.webp",

    images: {
      user: ["/vrs-user1.webp", "/vrs-user2.webp", "/vrs-user3.webp"],
      admin: ["/vrs-admin1.webp", "/vrs-admin2.webp", "/vrs-admin3.webp"],
    },

    features: {
      user: [
        "Advanced property search with filters for location, price and category",
        "Interactive property detail pages with imagery and insights",
        "Fully responsive interface for mobile, tablet and desktop",
        "Optimized performance with fast loading and smooth navigation",
        "Streamlined browsing experience for investors",
      ],
      admin: [
        "Full property management (create, edit and delete listings)",
        "Administrative dashboard with analytics and insights",
        "Secure JWT authentication with role-based access control",
        "Image upload and media management for listings",
        "Centralized control over users, listings and platform data",
      ],
    },

    caseStudy: {
      problem:
        "Traditional real estate platforms lacked advanced filtering, intuitive interfaces and centralized management tools, making it hard for users to find suitable properties and for admins to manage listings efficiently.",
      solution:
        "Developed a scalable full-stack platform with Next.js and Express, pairing an intuitive investor-facing interface with a powerful admin dashboard. Implemented advanced filtering, secure authentication and full CRUD workflows.",
      result:
        "Delivered a high-performance, scalable platform that improved property discovery, reduced admin workload and streamlined listing management, with room for future feature expansion.",
      architecture: [
        "Frontend: Next.js (App Router) with TypeScript and Tailwind CSS",
        "Backend: Node.js with an Express.js REST API",
        "Database: MongoDB with an optimized schema design",
        "Authentication: JWT-based authentication and authorization",
        "Media: Image upload and storage handling",
        "Deployment: Vercel (frontend) with the API on a cloud server",
      ],
    },

    github: REPOS,
    live: "https://vrsrealinvest.com.au",
  },

  {
    slug: "limoxy",
    title: "Royal Limoxy",
    category: "application",
    description:
      "Full-featured booking and transfer management system with advanced admin controls, automated invoicing, payment tracking and real-time workflow management. Built with Next.js, Node.js/Express and MongoDB.",

    tech: ["Next.js", "Node.js", "Express.js", "MongoDB"],

    image: "/limoxy.webp",

    images: {
      user: ["/limoxy-user1.webp", "/limoxy-user2.webp"],
      admin: ["/limoxy-admin1.webp", "/limoxy-admin2.webp"],
    },

    features: {
      user: [
        "Fast, streamlined booking interface",
        "Real-time booking confirmation",
        "Secure payment via generated payment links",
        "Invoice and voucher downloads",
        "Booking history tracking",
      ],
      admin: [
        "Manual booking creation with full client and trip details",
        "Booking status management (Pending / Confirmed / Completed)",
        "Advanced booking dashboard with filters and search",
        "Supplier management (add, assign and manage vendors)",
        "Payment link generation and real-time payment status",
        "Automated invoice and voucher generation with commission calculation",
        "Analytics dashboard for revenue, bookings and performance",
      ],
    },

    caseStudy: {
      problem:
        "The client managed bookings, suppliers and invoices manually, causing data inconsistencies, delayed confirmations and no visibility into payment status or revenue.",
      solution:
        "Built a centralized booking management system that automates the full workflow — from booking creation to payment and invoice generation — with a powerful admin dashboard for bookings, suppliers, payments and analytics.",
      result:
        "Significantly reduced manual work, improved booking accuracy, enabled real-time payment tracking and provided full business visibility through analytics and reporting.",
      detailedAdminFlow: [
        "Admin logs in securely and accesses the dashboard",
        "Creates a booking by entering client and trip details",
        "System calculates pricing and stores the booking",
        "Admin assigns a supplier and sets commission",
        "Booking is saved with a unique reference ID",
        "Admin generates a payment link and sends it to the client",
        "System tracks payment status in real time",
        "On successful payment, the invoice is auto-generated",
        "Voucher is generated and sent to the client",
        "Admin monitors all bookings via the dashboard",
      ],
      architecture: [
        "Frontend: Next.js for the admin panel and user interface",
        "Backend: Express.js handling business logic, APIs, auth and integrations",
        "Database: MongoDB storing bookings, users, suppliers, payments and invoices",
        "Payments: External payment gateway for secure transactions",
        "Security: Role-based access (Admin / Super Admin) with secure sessions",
      ],
    },

    github: REPOS,
    live: "https://royal-limoxy-user.vercel.app/",
  },

  {
    slug: "fetch-kids",
    title: "Fetch Kids",
    category: "application",
    description:
      "E-commerce platform for a kids' retail business, featuring product browsing, cart and checkout on the storefront and a full admin dashboard with order management and sales reporting.",

    tech: ["Next.js", "Node.js", "Express.js", "MongoDB"],

    image: "/fetch-kids.webp",

    images: {
      user: ["/fetch-kids.webp"],
    },

    features: {
      user: [
        "Product browsing with search and filtering",
        "Cart and checkout flow",
        "Responsive storefront UI",
      ],
      admin: [
        "Product management (create, update, delete)",
        "Order management and fulfilment tracking",
        "Sales reporting and insights",
      ],
    },

    caseStudy: {
      problem:
        "A growing retail business needed a scalable e-commerce system with reliable order management and sales reporting beyond off-the-shelf tools.",
      solution:
        "Built a complete e-commerce solution with a Next.js storefront, an Express.js API and MongoDB, including administrative controls and a reporting dashboard.",
      result:
        "Enabled reliable order management, clearer sales tracking and easier product management for the business.",
      architecture: [
        "Frontend: Next.js storefront",
        "Backend: Node.js with an Express.js REST API",
        "Database: MongoDB",
        "Deployment: Vercel with a cloud-hosted API",
      ],
    },

    github: REPOS,
    live: "https://fetch-kids.vercel.app",
  },

  {
    slug: "teal-culture",
    title: "Teal Culture",
    category: "website",
    description:
      "Minimal, black-themed interior studio website designed to present premium architectural and interior work with a strong visual identity and smooth, immersive browsing.",

    tech: ["Next.js", "Tailwind CSS", "Framer Motion"],

    image: "/teal.webp",

    images: {
      user: ["/teal-1.webp", "/teal-2.webp"],
    },

    features: {
      user: [
        "Minimal black-themed UI with strong visual storytelling",
        "Smooth animations and transitions for immersive browsing",
        "Structured navigation across the studio's sections",
        "Categorized project showcase for interior work",
        "Responsive design optimized for all devices",
        "High-quality visual presentation for premium branding",
      ],
    },

    caseStudy: {
      problem:
        "Interior studios often struggle to present their work in a visually impactful, structured way, with traditional sites lacking storytelling and aesthetic consistency.",
      solution:
        "Designed and built a visually rich, minimal website focused on storytelling and presentation, with structured navigation, smooth animations and a categorized project showcase.",
      result:
        "Delivered a premium digital presence that strengthens brand identity, improves engagement and showcases projects in a clean, modern format.",
      architecture: [
        "Frontend: Next.js with the App Router",
        "Styling: Tailwind CSS with a custom design system",
        "Animations: Framer Motion for smooth transitions",
        "Approach: Minimal, dark-themed, visual-first UI",
        "Deployment: Optimized for performance and fast loading",
      ],
    },

    github: REPOS,
    live: "https://www.moodbyteal.com/",
  },
];
