export const projects = [
  {
    slug: "vrs-realinvest",

    title: "VRS RealInvest",

    description:
      "Full-stack real estate investment platform with advanced admin dashboard, property management, and analytics system.",

    tech: ["Next.js", "Node.js", "MongoDB", "Tailwind"],

    image: "/vrs.png",

    images: {
      user: ["/vrs-user1.png", "/vrs-user2.png", "/vrs-user3.png"],
      admin: ["/vrs-admin1.png", "/vrs-admin2.png", "/vrs-admin3.png"],
    },

    // 🔥 UPDATED FEATURES
    features: {
      user: [
        "Advanced property search with filters (location, price, category)",
        "Interactive property detail pages with images and insights",
        "Fully responsive modern UI for mobile, tablet, and desktop",
        "Optimized performance with fast loading and smooth navigation",
        "User-friendly browsing experience for investors",
      ],
      admin: [
        "Complete property management system (Add, Edit, Delete listings)",
        "Powerful admin dashboard with real-time analytics and insights",
        "Secure authentication and role-based access control (JWT)",
        "Image upload and storage system for property media",
        "Centralized system to manage users, listings, and platform data",
      ],
    },

    // 🔥 UPDATED CASE STUDY
    caseStudy: {
      problem:
        "Traditional real estate platforms lacked advanced filtering, user-friendly interfaces, and centralized management tools for administrators. This made it difficult for users to find suitable investment properties and for admins to efficiently manage listings.",

      solution:
        "Developed a scalable full-stack real estate platform using Next.js and Express, featuring an intuitive user interface and a powerful admin dashboard. Implemented advanced filtering, secure authentication, and a complete CRUD system to streamline both user experience and administrative workflows.",

      result:
        "Delivered a high-performance and scalable platform that significantly improved property discovery, reduced admin workload, and enabled efficient management of real estate listings. The system is designed for future scalability and additional feature expansion.",

      architecture: [
        "Frontend: Next.js (App Router) with TypeScript and Tailwind CSS",
        "Backend: Node.js with Express.js REST API",
        "Database: MongoDB with optimized schema design",
        "Authentication: JWT-based authentication and authorization",
        "Media Handling: Image upload and storage system",
        "Deployment: Frontend hosted on Vercel, backend deployed on cloud server",
      ],
    },

    github: "https://github.com/dk-pv?tab=repositories",
    live: "https://vrs-user.vercel.app",
  },





  
  {
    slug: "limoxy",

    title: "Limoxy",

    description:
      "A full-featured booking and transfer management system with advanced admin controls, automated invoicing, payment tracking, and real-time workflow management.",

    tech: ["Next.js", "Express", "MongoDB"],

    image: "/limoxy.png",

    images: {
      user: ["/limoxy-user1.png", "/limoxy-user2.png"],
      admin: ["/limoxy-admin1.png", "/limoxy-admin2.png"],
    },

    features: {
      user: [
        "Simple and fast booking interface",
        "Real-time booking confirmation",
        "Secure payment via payment link",
        "Invoice and voucher download",
        "Booking history tracking",
      ],

      admin: [
        "Manual booking creation with full client & trip details",
        "Booking status management (Pending / Confirmed / Completed)",
        "Advanced booking dashboard with filters & search",
        "Supplier management (add, assign, manage vendors)",
        "Payment link generation and tracking",
        "Real-time payment status (Paid / Unpaid / Partial)",
        "Automatic invoice generation with commission calculation",
        "Voucher generation with trip details",
        "Commission & pricing control (discount, profit tracking)",
        "Admin & Super Admin role management",
        "Analytics dashboard (revenue, bookings, performance)",
      ],

      bookingManagementPage: [
        "Create new bookings manually with full form validation",
        "Capture client details (name, email, phone, country, flight number)",
        "Capture trip details (car type, pickup/drop, date & time, passengers)",
        "Auto price calculation based on inputs",
        "Assign supplier/vendor to each booking",
        "Set commission and pricing dynamically",
        "Generate unique booking reference ID",
        "Track booking lifecycle (Pending → Confirmed → Completed)",
        "Integrated payment link creation directly from booking",
        "View all bookings with filters (status, date, payment)",
      ],
    },

    caseStudy: {
      problem:
        "The client was managing bookings, suppliers, and invoices manually, leading to data inconsistencies, delayed confirmations, and lack of visibility into payment status and revenue.",

      solution:
        "We built a centralized digital booking management system that automates the entire workflow—from booking creation to payment and invoice generation. The system includes a powerful admin dashboard for managing bookings, suppliers, payments, and analytics in one place.",

      result:
        "The system significantly reduced manual work, improved booking accuracy, enabled real-time payment tracking, and provided full business visibility through analytics and reporting.",

      detailedAdminFlow: [
        "Admin logs in securely and accesses the dashboard",
        "Creates a booking by entering client and trip details",
        "System calculates pricing and stores booking data",
        "Admin assigns supplier and sets commission",
        "Booking is saved with a unique reference ID",
        "Admin generates a payment link and sends it to the client",
        "System tracks payment status in real-time",
        "Once payment is successful, invoice is auto-generated",
        "Voucher is generated and sent to the client",
        "Admin monitors all bookings via dashboard",
      ],

      architecture: [
        "Presentation Layer: Next.js frontend for admin panel and user interface",
        "Application Layer: Express.js backend handling business logic, APIs, authentication, and integrations",
        "Data Layer: MongoDB database storing bookings, users, suppliers, payments, and invoices",
        "Payment Integration: External payment gateway for secure transactions",
        "Authentication & Security: Role-based access (Admin/Super Admin) with secure session handling",
      ],
    },

    github: "https://github.com/dk-pv?tab=repositories",
    live: "https://royal-limoxy-user.vercel.app/",
  },

  {
    slug: "fetch-kids",

    title: "Fetch Kids",

    description:
      "E-commerce platform with admin dashboard, reporting system, and integrations.",

    tech: ["Next.js", "Node.js", "MongoDB"],

    image: "/fetch-kids.png",

    images: {
      user: ["/fetch-user1.png", "/fetch-user2.png"],
      admin: ["/fetch-admin1.png", "/fetch-admin2.png"],
    },

    features: {
      user: [
        "Product browsing & filtering",
        "Cart & checkout system",
        "Responsive UI",
      ],
      admin: ["Product CRUD", "Order management", "Sales reporting"],
    },

    caseStudy: {
      problem:
        "Small businesses needed a scalable e-commerce system with reporting.",

      solution:
        "Built a complete e-commerce solution with admin controls and reporting dashboard.",

      result: "Enabled better sales tracking and product management.",

      architecture: ["Next.js frontend", "Node.js backend", "MongoDB database"],
    },

    github: "https://github.com/dk-pv?tab=repositories",
    live: "https://fetch-kids.vercel.app",
  },
];
