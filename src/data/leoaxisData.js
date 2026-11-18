// Centralized LeoAxis Official Company Data
// Extracted authentically from leoaxis.com

export const companyInfo = {
  name: "LeoAxis Technologies Pvt. Ltd.",
  tagline: "INNOVATE. DEVELOP. DELIVER.",
  logo: "/favicon.png",
  founded: "India & Ireland",
  mission: "Empowering businesses, schools, and youth across India and globally with accessible, high-performance technology, cloud, and practical AI solutions.",
  vision: "To be the trusted technology bridge between grassroots potential and enterprise digital transformation.",
  
  // Offices
  indiaOffice: {
    country: "India",
    flag: "🇮🇳",
    role: "Global Development & Delivery Hub",
    operationalAddress: "# 11-9-143, Sy. No. 9/1/A, Lakshmi Nagar Colony, Kothapet, Hyderabad, Telangana",
    registeredAddress: "1-106/1, Plot No-167, Ganesh Nagar, Ragannaguda, Hyderabad, Telangana 501510",
    phone: "+91 96180 76715",
    phoneRaw: "+919618076715",
    email: "info@leoaxis.com",
    whatsapp: "https://wa.me/919618076715",
  },
  
  irelandOffice: {
    country: "Ireland",
    flag: "🇮🇪",
    role: "Regional Business Development – Europe",
    lead: "Rahul (Regional Business Development Manager)",
    phone: "+353 (89) 254 2002",
    phoneRaw: "+353892542002",
    email: "ireland@leoaxis.com",
    whatsapp: "https://wa.me/353892542002",
  },
  
  // PDF Profile
  profilePdf: {
    title: "LEOAXIS Company Profile",
    filename: "LEOAXIS-Technologies-Profile.pdf",
    path: "/LEOAXIS_Portfolio.pdf",
    version: "2026 Edition",
    size: "4.2 MB",
  },
  
  // Statistics
  stats: [
    { value: "28+", label: "Live Client Projects", sub: "Enterprise & MSME" },
    { value: "100%", label: "On-Time Delivery", sub: "Agile Milestone SLA" },
    { value: "2", label: "Global Hubs", sub: "Hyderabad 🇮🇳 & Dublin 🇮🇪" },
    { value: "500+", label: "Students Trained", sub: "AWS Aligned Labs" },
  ]
};

// Strategic Partners & Recognitions
export const partners = [
  {
    id: "nvidia",
    name: "Powered by NVIDIA Inception",
    tagline: "Official NVIDIA Inception Program Member",
    logo: "/nvidia_inception.png",
    photo: "/home/Tech_Innovation.jpg",
    desc: "Official membership grants LeoAxis direct access to advanced AI technologies, GPU compute clusters, technical guidance, and go-to-market acceleration to build enterprise-ready AI systems.",
    badge: "Official NVIDIA Inception Member",
    benefits: [
      "Access to modern GPU & AI architectures",
      "Accelerated product innovation cycles",
      "Scalable computer vision and NLP models",
      "Enterprise AI deployment support"
    ],
    accent: "#76b900",
    cta: "Explore AI Capabilities"
  },
  {
    id: "aws",
    name: "Built on AWS Activate",
    tagline: "Enterprise Cloud Infrastructure Partner",
    logo: "/aws_activate.png",
    photo: "/home/built_by_india.png",
    desc: "Through AWS Activate, LeoAxis architects secure, high-availability, cloud-native backends and containerized microservices with dedicated architecture guidance and 99.9% uptime SLAs.",
    badge: "Backed by AWS Activate",
    benefits: [
      "Enterprise AWS cloud infrastructure",
      "High-availability auto-scaling microservices",
      "Zero-downtime CI/CD deployment pipelines",
      "Cost-optimized serverless architectures"
    ],
    accent: "#ff9900",
    cta: "Explore Cloud Architecture"
  },
  {
    id: "dpiit",
    name: "DPIIT Recognized Startup",
    tagline: "Department for Promotion of Industry and Internal Trade",
    logo: "/clients/DPIIT.png",
    photo: "/home/Future_Ready_India.jpg",
    desc: "Officially recognized as a verified technology startup by the Government of India under the Startup India initiative, acknowledging our contribution to digital innovation.",
    badge: "Govt of India Recognized",
    benefits: [
      "Government-certified technology startup",
      "Eligible for high-level national tenders",
      "Strict compliance & governance standards",
      "Trusted public sector engineering partner"
    ],
    accent: "#0d44e8",
    cta: "View Credentials"
  },
  {
    id: "aws-skill",
    name: "AWS Skill Builder–Aligned Training",
    tagline: "Global Cloud Certification Pathway",
    logo: "/clients/aws.png",
    photo: "/sreyas-college-workshop-on AWS Cloud-JULY-2025.jpeg",
    desc: "Our student and corporate IT training curricula are directly aligned with official AWS Skill Builder learning paths, preparing learners for AWS Solutions Architect & Cloud Practitioner certifications.",
    badge: "Global Curriculum Alignment",
    benefits: [
      "Hands-on official AWS cloud sandbox labs",
      "Real industry use case implementations",
      "Direct certification preparation tracks",
      "Industry-verified placement readiness"
    ],
    accent: "#0284c7",
    cta: "Explore Training"
  }
];

// Government of Telangana Initiatives
export const governmentProjects = [
  {
    id: "task",
    title: "TASK Mobile App",
    entity: "Government of Telangana",
    agency: "Telangana Academy for Skill and Knowledge (TASK)",
    screenshot: "/clients/projects/task_mobile_app.jpg",
    category: "Government / Mobile Platform",
    tag: "Statewide Youth Skilling Platform",
    url: "https://play.google.com/store/apps/details?id=in.gov.telangana.taskmobile",
    desc: "Official mobile application designed and engineered for the Telangana Academy for Skill and Knowledge (TASK). Directly connects youth across Telangana with state skill development programs, placement drives, mentorship, and industry certifications.",
    highlights: [
      "Direct youth registration & student profile management",
      "Real-time notifications for government skill development camps",
      "Interview schedules, placement alerts & verified hall tickets",
      "Multi-district reach supporting rural & urban student demographics"
    ],
    actionText: "View on Google Play Store"
  },
  {
    id: "dettg",
    title: "Awarding Body DETTG",
    entity: "Government of Telangana",
    agency: "Department of Employment & Training (NCVET Recognized)",
    screenshot: "/clients/projects/dettg_website.png",
    category: "Government / Web Portal",
    tag: "Statewide Institutional Accreditation & Attendance",
    url: "https://www.awardingbodydettg.in/",
    desc: "Official accreditation, examination, and attendance monitoring portal for DET Telangana. Powers candidate assessment, verified digital certifications, and statewide compliance monitoring across ITIs and modern Advanced Technology Centres (ATCs).",
    highlights: [
      "Centralized candidate registration & assessment lifecycle",
      "Statewide attendance auditing & geofence verification",
      "NCVET-aligned government certification generation",
      "Role-based access for state administrators, examiners & training centers"
    ],
    actionText: "Visit DETTG Official Portal"
  }
];

// In-Built Product: Attendance Management System SaaS
export const attendanceProduct = {
  name: "AcademicTracker & Corporate Attendance SaaS",
  tag: "In-Built SaaS Product",
  url: "https://attendance-production-b5a1.up.railway.app/",
  screenshot: "/clients/projects/attandance_product.jpeg",
  headline: "Attendance Management, Simplified.",
  desc: "A high-reliability software suite engineered for educational institutions, government training centers, and corporate teams to track, manage, and audit real-time attendance effortlessly. Available for whitelabel deployment.",
  features: [
    { title: "Smart Attendance", desc: "Batch & subject-wise record keeping with instant multi-device sync." },
    { title: "Geofence Verification", desc: "GPS & location-radius check-in preventing proxy attendance." },
    { title: "Real-time Analytics", desc: "Interactive dashboards highlighting attendance trends and dropouts." },
    { title: "Automated Reports", desc: "One-click export by student, class, or department in Excel & PDF." },
  ],
  stats: [
    { value: "99.9%", label: "Uptime SLA" },
    { value: "500+", label: "Active Users" },
    { value: "Instant", label: "Real-Time Sync" },
  ]
};

// Real 28+ Client Portfolio Projects
export const clientProjects = [
  {
    name: "TASK Mobile App (Govt of Telangana)",
    category: "Government",
    client: "Telangana Academy for Skill & Knowledge",
    url: "https://play.google.com/store/apps/details?id=in.gov.telangana.taskmobile",
    logo: "",
    screenshot: "/clients/projects/task_mobile_app.jpg",
    fallbackColor: "from-blue-700 to-emerald-700",
    desc: "Government skilling & youth placement app",
    featured: true
  },
  {
    name: "Awarding Body DETTG",
    category: "Government",
    client: "Govt of Telangana Department of Employment & Training",
    url: "https://www.awardingbodydettg.in/",
    logo: "",
    screenshot: "/clients/projects/dettg_website.png",
    fallbackColor: "from-indigo-700 to-emerald-700",
    desc: "Institutional accreditation & attendance portal",
    featured: true
  },
  {
    name: "AAdesigner Studio",
    category: "Design",
    client: "AA Designer Studio",
    url: "https://aadesignerstudio.com/",
    logo: "/clients/AAdesignerStudio.png",
    screenshot: "/business/websites/AAdesigner.png",
    fallbackColor: "from-pink-600 to-pink-800",
    desc: "Creative architecture & luxury interior design portfolio"
  },
  {
    name: "iFocus Infotech",
    category: "IT Services",
    client: "iFocus InfoSolutions",
    url: "https://www.ifocusinfosolutions.com/",
    logo: "/clients/ifocusinfotech.png",
    screenshot: "",
    fallbackColor: "from-blue-700 to-blue-900",
    desc: "Enterprise IT solutions & global talent consulting"
  },
  {
    name: "MyCorp Solutions",
    category: "IT Services",
    client: "MyCorp Solutions Info",
    url: "https://www.mycorpsolutions.info/",
    logo: "/clients/projects/mycorp.png",
    screenshot: "/business/websites/MYCorpSolutions.png",
    fallbackColor: "from-blue-600 to-blue-800",
    desc: "Corporate business solutions & management consulting"
  },
  {
    name: "RK Software Solutions",
    category: "IT Services",
    client: "RK Software Solutions",
    url: "https://rksoftwaresolutions.in/",
    logo: "/clients/projects/rksoftware-logo.png",
    screenshot: "",
    fallbackColor: "from-indigo-600 to-indigo-800",
    desc: "Custom software development & digital transformation"
  },
  {
    name: "CA Ghantasala & Co",
    category: "Finance",
    client: "CA Ghantasala & Co",
    url: "https://www.caghantasalaandco.com/",
    logo: "/clients/projects/ca_ghantasala.png",
    screenshot: "",
    fallbackColor: "from-emerald-600 to-emerald-800",
    desc: "Chartered accountancy firm, auditing & tax consultancy"
  },
  {
    name: "Ikyata Foundation",
    category: "NGO",
    client: "Ikyata Foundation",
    url: "https://ikyatafoundation.org/",
    logo: "/clients/projects/ikyata.png",
    screenshot: "",
    fallbackColor: "from-purple-600 to-purple-800",
    desc: "Non-profit social welfare & community education foundation"
  },
  {
    name: "Saravana Pooja Store",
    category: "E-Commerce",
    client: "Saravana Store",
    url: "https://saravanapoojastore-production.up.railway.app/",
    logo: "/clients/projects/saravana_pooja.png",
    screenshot: "",
    fallbackColor: "from-yellow-600 to-yellow-800",
    desc: "Online pooja essentials & spiritual items e-commerce platform"
  },
  {
    name: "5 Star Digitals",
    category: "Design",
    client: "5 Star Digitals",
    url: "https://5stardigitals.vercel.app/",
    logo: "/clients/projects/5star_digitals.png",
    screenshot: "",
    fallbackColor: "from-pink-600 to-pink-800",
    desc: "Commercial flex printing, graphic design & signages"
  },
  {
    name: "Roo & Co",
    category: "Fashion",
    client: "Roo & Co",
    url: "https://www.rooandco.in/",
    logo: "/clients/projects/rooco.png",
    screenshot: "",
    fallbackColor: "from-rose-500 to-rose-700",
    desc: "Modern fashion clothing brand & apparel e-commerce"
  },
  {
    name: "Arunachalam Caterers",
    category: "Food & Hospitality",
    client: "Arunachalam Caterers",
    url: "https://arunachalamcaters-arunachala-kitchen-sinhas-projects-48fe0f31.vercel.app/",
    logo: "",
    screenshot: "/business/websites/Arunachala_caterings.png",
    fallbackColor: "from-amber-600 to-amber-800",
    desc: "Premium event catering, wedding banquets & hospitality"
  },
  {
    name: "The Apex Dental",
    category: "Healthcare",
    client: "Apex Dental Clinic",
    url: "https://theapexdental.vercel.app/",
    logo: "/clients/projects/apex_dental.png",
    screenshot: "",
    fallbackColor: "from-teal-600 to-teal-800",
    desc: "Advanced multi-specialty dental clinic & patient appointments"
  },
  {
    name: "NRI Matrimony",
    category: "Matrimony",
    client: "NRI Matrimony Global",
    url: "https://nrimatrimony-production.up.railway.app/",
    logo: "",
    screenshot: "",
    fallbackColor: "from-violet-600 to-violet-800",
    desc: "Global match-making platform connecting NRI communities"
  },
  {
    name: "Toros Steakhouse",
    category: "Food & Hospitality",
    client: "Toros Steakhouse (Australia)",
    url: "https://www.torossteakhouse.com.au/",
    logo: "/clients/projects/toros.jpeg",
    screenshot: "",
    fallbackColor: "from-red-600 to-red-800",
    desc: "Authentic steakhouse dining experience based in Australia"
  },
  {
    name: "Band Geetham",
    category: "Entertainment",
    client: "Band Geetham",
    url: "https://bandgeetam-band-geetham-eta.vercel.app/",
    logo: "/clients/projects/bandgeetam.jpg",
    screenshot: "",
    fallbackColor: "from-fuchsia-600 to-fuchsia-800",
    desc: "Live music performance band & concerts booking platform"
  },
  {
    name: "Zyca Cafe",
    category: "Food & Hospitality",
    client: "Zyca Cafe & Kitchen",
    url: "https://zyca.vercel.app/",
    logo: "/clients/projects/zyca.png",
    screenshot: "",
    fallbackColor: "from-sky-600 to-sky-800",
    desc: "Gourmet cafe, artisan coffee & food ordering experience"
  },
  {
    name: "Little Stars Playschool",
    category: "Education",
    client: "Little Stars",
    url: "https://playschool-omega.vercel.app/",
    logo: "",
    screenshot: "/business/websites/BloomField.png",
    fallbackColor: "from-yellow-500 to-orange-500",
    desc: "Early childhood playschool & digital admission portal"
  },
  {
    name: "Bright Minds School",
    category: "Education",
    client: "Bright Minds Hub",
    url: "https://bright-minds-hub-six.vercel.app/",
    logo: "",
    screenshot: "",
    fallbackColor: "from-cyan-600 to-blue-700",
    desc: "Comprehensive school portal from Nursery to 10th standard"
  },
  {
    name: "Satva Pre School",
    category: "Education",
    client: "Satva Preschool",
    url: "https://satva-eight.vercel.app/",
    logo: "",
    screenshot: "",
    fallbackColor: "from-pink-500 to-rose-600",
    desc: "Holistic child development preschool platform"
  },
  {
    name: "Vasista Model School",
    category: "Education",
    client: "Vasista MHS",
    url: "https://www.vashistamhs.org/",
    logo: "",
    screenshot: "",
    fallbackColor: "from-green-600 to-emerald-700",
    desc: "Academic curriculum, student notices & institutional website"
  },
  {
    name: "Lawstro Philosophy",
    category: "Education",
    client: "Lawstro Education",
    url: "https://lawstrophilosophy.vercel.app/",
    logo: "",
    screenshot: "",
    fallbackColor: "from-slate-700 to-slate-900",
    desc: "Law and philosophy learning platform"
  },
  {
    name: "Mahesh Family Style",
    category: "Beauty & Wellness",
    client: "Mahesh Family Salon",
    url: "https://mahesh-family-style.vercel.app/",
    logo: "",
    screenshot: "",
    fallbackColor: "from-amber-600 to-orange-800",
    desc: "Family salon & beauty services"
  },
  {
    name: "HKM Tirupati",
    category: "NGO",
    client: "Hare Krishna Movement Tirupati",
    url: "https://www.hkmtirupati.org/",
    logo: "",
    screenshot: "",
    fallbackColor: "from-amber-600 to-orange-700",
    desc: "Spiritual trust, temple services, food distribution & outreach"
  },
  {
    name: "Velvet Sky",
    category: "Travel & Hospitality",
    client: "Velvet Sky Holidays",
    url: "https://velvetsky-teal.vercel.app/",
    logo: "",
    screenshot: "",
    fallbackColor: "from-teal-600 to-cyan-800",
    desc: "Luxury travel, customized holiday packages & itinerary booking"
  },
  {
    name: "Nishi Cabs",
    category: "Travel & Hospitality",
    client: "Nishi Cabs",
    url: "https://www.nishicabs.com/",
    logo: "",
    screenshot: "",
    fallbackColor: "from-amber-600 to-yellow-700",
    desc: "Outstation car rentals, airport pickups & taxi booking service"
  },
  {
    name: "Schara Studio",
    category: "Design",
    client: "Schara Studio",
    url: "https://www.scharastudio.com/",
    logo: "",
    screenshot: "",
    fallbackColor: "from-zinc-700 to-zinc-900",
    desc: "Creative architecture, urban design & styling studio"
  },
  {
    name: "Laventro Interiors",
    category: "Design",
    client: "Laventro Interiors",
    url: "https://www.laventrointeriors.com/",
    logo: "",
    screenshot: "",
    fallbackColor: "from-amber-700 to-stone-900",
    desc: "Turnkey residential and commercial interior design solutions"
  }
];

// Interactive Demo Concept Projects from LeoAxis
export const demoProjects = [
  { 
    image: "/business/websites/realestate.png", 
    title: "Real Estate & Housing", 
    url: "https://leoaxis01.github.io/RealEstate_Demo/", 
    category: "Real Estate",
    desc: "Modern property showcase with floor plans & lead capture"
  },
  { 
    image: "/business/websites/gym.png", 
    title: "Gym & Fitness Club", 
    url: "https://leoaxis01.github.io/gym_website_demo/", 
    category: "Health & Fitness",
    desc: "Membership tiers, trainer booking & workout schedule"
  },
  { 
    image: "/business/websites/saree.png", 
    title: "Saree & Fashion Couture", 
    url: "https://leoaxis01.github.io/saree_website_Demo/", 
    category: "Fashion",
    desc: "Ethnic apparel catalog with multi-currency checkout"
  },
  { 
    image: "/business/websites/kitchen.png", 
    title: "Cloud Kitchen & Dining", 
    url: "https://leoaxis01.github.io/Kitchen_website_Demo/", 
    category: "Food & Beverage",
    desc: "Online food ordering with delivery time tracking"
  },
  { 
    image: "/business/websites/ecommerce.png", 
    title: "Retail & E-Commerce Store", 
    url: "https://leoaxis01.github.io/Retail_website_Demo/", 
    category: "E-Commerce",
    desc: "Instant search, cart abandonment & payment gateways"
  },
  { 
    image: "/business/websites/sports_academy.png", 
    title: "Sports Academy & Coaching", 
    url: "https://leoaxis01.github.io/Sports_Academy_demo/", 
    category: "Sports",
    desc: "Batch registration, sports camps & coach schedules"
  }
];

// Core Services
export const services = [
  {
    id: "web-dev",
    title: "Website Development",
    short: "High-Speed Platforms",
    desc: "Bespoke, blazing-fast websites and web applications engineered with Next.js, React, and Tailwind. Optimized for sub-second loading, top Google Core Web Vitals, and conversion rate optimization.",
    deliverables: ["Custom UI/UX Design", "SEO Architecture", "CMS & Admin Dashboards", "Mobile-first Responsive Build"],
    tag: "Core Expertise"
  },
  {
    id: "app-dev",
    title: "Mobile App Development",
    short: "iOS & Android Native",
    desc: "Production-grade cross-platform and native mobile apps built with Flutter, React Native, and Swift. Engineered with secure cloud backends, offline sync, push notifications, and intuitive UX.",
    deliverables: ["Native iOS & Android", "App Store & Play Store Deployment", "Offline SQLite Sync", "Biometric Authentication"],
    tag: "Enterprise Mobile"
  },
  {
    id: "digital-marketing",
    title: "Digital Marketing & SEO",
    short: "Data-Backed Growth",
    desc: "Full-funnel digital customer acquisition strategies. Combining technical search engine optimization (SEO), Google Ads, Meta campaigns, and conversion rate optimization to multiply your pipeline.",
    deliverables: ["Technical & Local SEO", "Performance Ad Campaigns", "Conversion Rate Audits", "Social Media Branding"],
    tag: "Measurable ROI"
  },
  {
    id: "it-support",
    title: "IT Support & Maintenance",
    short: "24/7 Managed Uptime",
    desc: "End-to-end IT infrastructure support, continuous software patching, security vulnerability scans, and proactive server monitoring backed by clear response SLAs.",
    deliverables: ["24/7 Uptime Monitoring", "Data Backups & Recovery", "Security Hardening", "Dedicated Technical Helpdesk"],
    tag: "SLA Guaranteed"
  },
  {
    id: "cloud-devops",
    title: "Cloud Solutions & DevOps",
    short: "AWS Activate Powered",
    desc: "Enterprise cloud architecture on Amazon Web Services (AWS). High-availability container orchestration, automated CI/CD deployment pipelines, serverless scaling, and cloud cost optimization.",
    deliverables: ["AWS Cloud Migration", "Docker & Kubernetes", "Automated CI/CD Pipelines", "Database Replication & Caching"],
    tag: "Cloud Native"
  },
  {
    id: "ai-solutions",
    title: "AI-Powered Solutions",
    short: "NVIDIA Inception Member",
    desc: "Practical AI integration for business workflows. Custom natural language chatbots, predictive business models, automated computer vision inspection, and intelligent document processing.",
    deliverables: ["Custom LLM & Agent Workflows", "Computer Vision Systems", "Predictive Analytics", "Document OCR & Automation"],
    tag: "Deep Tech"
  }
];

// Published Client Testimonials
export const testimonials = [
  {
    name: "Rajesh Kumar",
    role: "Owner, Kumar Textiles",
    location: "Gurugram, Haryana",
    quote: "LeoAxis helped us get online in just 2 weeks. Now customers from other cities also order from us. Best decision for my business!",
    metric: "200% Sales Increase",
    tag: "Verified Client"
  },
  {
    name: "Anita Sharma",
    role: "Proprietor, Sharma Sweets",
    location: "Jaipur, Rajasthan",
    quote: "Our sweet shop was only known locally. After LeoAxis made our website, we get orders from across the state. Sales doubled in 3 months!",
    metric: "Statewide Reach",
    tag: "Verified Client"
  },
  {
    name: "Meena Devi",
    role: "Founder, Meena Boutique",
    location: "Lucknow, Uttar Pradesh",
    quote: "I was afraid of technology, but LeoAxis team explained everything patiently. Now my tailoring business has a beautiful website and more customers.",
    metric: "Digital Transformation",
    tag: "Verified Client"
  }
];

// Why Choose LeoAxis Differentiators
export const whyChooseUs = [
  {
    title: "Experienced Engineering Team",
    desc: "Senior software developers, cloud architects, and UI/UX designers with proven enterprise track records."
  },
  {
    title: "Quality Assured Architecture",
    desc: "Production-grade, highly scalable codebases built with modern frameworks and strict security auditing."
  },
  {
    title: "Punctual Delivery Commitments",
    desc: "Agile 2-week sprints with milestone transparency, regular video demos, and strict deadline commitments."
  },
  {
    title: "Measurable Growth Outcomes",
    desc: "We don't just build software; we engineer platforms designed specifically to convert traffic and scale revenue."
  },
  {
    title: "Affordable & Fair Pricing",
    desc: "Enterprise-grade quality accessible for growing Indian startups, schools, and local businesses without inflated agency markups."
  },
  {
    title: "Continuous Maintenance & Support",
    desc: "Dedicated ongoing technical support, security patches, performance tuning, and 24/7 emergency response."
  }
];
