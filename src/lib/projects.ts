type Project = {
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
    bookingManagementPage?: string[];
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

    image: "/fleettrack.png",

    images: {
      user: ["/fleettrack-1.png", "/fleettrack-2.png"],
      admin: ["/fleettrack-admin1.png", "/fleettrack-admin2.png"],
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

    image: "/emarath.png",

    images: {
      user: ["/emarath-1.png", "/emarath-2.png"],
      admin: ["/emarath-admin1.png", "/emarath-admin2.png"],
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
    slug: "erp-hr",
    title: "ERP HR",
    category: "application",
    description:
      "HR management system covering employee records, attendance, payroll and reporting. A NestJS + PostgreSQL backend with a Next.js frontend replaces manual, spreadsheet-driven HR processes with an auditable system of record.",

    tech: ["Next.js", "NestJS", "PostgreSQL", "Prisma", "JWT", "Tailwind CSS"],

    image: "/erp-hr.png",

    images: {
      user: ["/erp-hr-1.png", "/erp-hr-2.png"],
      admin: ["/erp-hr-admin1.png", "/erp-hr-admin2.png"],
    },

    features: {
      user: [
        "Employee profiles and record management",
        "Attendance tracking and status views",
        "Payroll information and summaries",
        "Personal dashboard with relevant HR data",
        "Secure authentication and scoped access",
      ],
      admin: [
        "Complete employee lifecycle management",
        "Attendance and payroll administration",
        "Role and permission management",
        "HR analytics dashboard and reports",
        "Secure JWT authentication with role-based access",
      ],
    },

    caseStudy: {
      problem:
        "HR ran on spreadsheets — attendance, payroll and employee records were manual, error-prone and hard to report on, with no reliable audit trail.",
      solution:
        "I built the data model and APIs behind employee records, attendance and payroll, treating correctness as the priority: validated inputs, consistent state transitions, and aggregation queries that turn raw attendance into payroll-ready and management-facing reports. Access is JWT-secured, with roles separating employee self-service from HR administration.",
      result:
        "HR moved off spreadsheets to a single system of record with accurate payroll inputs and on-demand reporting, cutting manual reconciliation and giving management data it can trust.",
      architecture: [
        "Backend: NestJS REST APIs with input validation and explicit state management",
        "Data: PostgreSQL with Prisma ORM and aggregation queries for reporting",
        "Access: JWT authentication with employee vs. HR-admin role separation",
        "Frontend: Next.js self-service and administration dashboards",
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

    image: "/vrs.png",

    images: {
      user: ["/vrs-user1.png", "/vrs-user2.png", "/vrs-user3.png"],
      admin: ["/vrs-admin1.png", "/vrs-admin2.png", "/vrs-admin3.png"],
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

    image: "/limoxy.png",

    images: {
      user: ["/limoxy-user1.png", "/limoxy-user2.png"],
      admin: ["/limoxy-admin1.png", "/limoxy-admin2.png"],
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
        "Payment link generation and tracking",
        "Real-time payment status (Paid / Unpaid / Partial)",
        "Automated invoice generation with commission calculation",
        "Voucher generation with trip details",
        "Commission and pricing control with profit tracking",
        "Admin and Super Admin role management",
        "Analytics dashboard for revenue, bookings and performance",
      ],
      bookingManagementPage: [
        "Create bookings manually with full form validation",
        "Capture client details (name, email, phone, country, flight number)",
        "Capture trip details (car type, pickup/drop, date, time, passengers)",
        "Automatic price calculation based on inputs",
        "Assign a supplier/vendor to each booking",
        "Set commission and pricing dynamically",
        "Generate a unique booking reference ID",
        "Track the booking lifecycle (Pending → Confirmed → Completed)",
        "Create payment links directly from a booking",
        "View all bookings with status, date and payment filters",
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

    image: "/fetch-kids.png",

    images: {
      user: ["/fetch-kids.png"],
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
    slug: "woocommerce-projects",
    title: "WooCommerce Projects",
    category: "website",
    description:
      "Custom WooCommerce development for business e-commerce websites — theme customization, REST API integrations, payment gateway setup and performance optimization for production storefronts.",

    tech: [
      "WooCommerce",
      "WordPress",
      "PHP",
      "REST API",
      "JavaScript",
      "Performance",
    ],

    image: "/woocommerce.png",

    images: {
      user: ["/woocommerce-1.png", "/woocommerce-2.png"],
    },

    features: {
      user: [
        "Custom WooCommerce storefronts tailored to each business",
        "Product catalog, cart and checkout flows",
        "Integrated payment gateways",
        "Responsive, SEO-friendly design",
        "Optimized page performance and load times",
      ],
    },

    caseStudy: {
      problem:
        "Businesses needed customized e-commerce storefronts with tailored functionality and third-party integrations beyond default WooCommerce capabilities.",
      solution:
        "Delivered custom WooCommerce builds with theme customization, REST API integrations and payment gateway setup, focused on performance and conversion.",
      result:
        "Launched production e-commerce sites with tailored functionality, secure payments and improved performance.",
      architecture: [
        "Platform: WordPress with WooCommerce",
        "Customization: Custom themes and plugin configuration",
        "Integrations: REST APIs and payment gateways",
        "Optimization: Caching plus asset and performance tuning",
        "Hosting: Hostinger with domain and SSL configuration",
      ],
    },

    github: REPOS,
    live: PROFILE,
  },

  {
    slug: "teal-culture",
    title: "Teal Culture",
    category: "website",
    description:
      "Minimal, black-themed interior studio website designed to present premium architectural and interior work with a strong visual identity and smooth, immersive browsing.",

    tech: ["Next.js", "Tailwind CSS", "Framer Motion"],

    image: "/teal.png",

    images: {
      user: ["/teal-1.png", "/teal-2.png"],
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
