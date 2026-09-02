/**
 * ProjectBridge — Project Ideas Data
 * 
 * These are curated project idea suggestions for B.Tech students.
 * They are not completed projects — students request development support
 * through the ProjectBridge request form.
 */

export const projectIdeas = [
  {
    id: 'ai-resume-analyzer',
    title: 'AI Resume Analyzer',
    description:
      'Analyze resumes and identify technical skills, missing competencies, and areas for improvement using NLP and machine learning.',
    overview:
      'A platform that parses a student\'s resume and automatically identifies technical skills, highlights skill gaps relative to industry expectations, and provides personalized improvement recommendations. Ideal for final-year students preparing for placements.',
    category: 'AI & Machine Learning',
    branches: ['CSE', 'IT', 'AI & ML'],
    years: ['3rd Year', '4th Year'],
    technologies: ['Python', 'AI/ML'],
    techDetails: ['Python', 'Machine Learning', 'NLP', 'React'],
    difficulty: 'Intermediate',
    type: 'Major Project',
    popular: true,
    features: [
      'Resume upload (PDF/DOCX)',
      'Text extraction and parsing',
      'Skill identification and categorization',
      'Skill gap analysis against job descriptions',
      'Recommendation dashboard',
    ],
    futureImprovements: [
      'Job description matching',
      'Multiple resume comparison',
      'Personalized learning path recommendations',
      'Export report as PDF',
    ],
    suitableFor:
      '3rd and 4th year CSE, IT, and AI & ML students looking to explore NLP, machine learning pipelines, and full-stack integration.',
  },
  {
    id: 'student-expense-tracker',
    title: 'Student Expense Tracker',
    description:
      'A simple and intuitive web app to help college students track daily expenses, set budgets, and visualize spending patterns.',
    overview:
      'A personal finance management app built for college students. Users can log daily expenses by category, set monthly budgets, and view spending summaries through clean charts and reports.',
    category: 'Web Project',
    branches: ['CSE', 'IT'],
    years: ['1st Year', '2nd Year'],
    technologies: ['JavaScript', 'React'],
    techDetails: ['React', 'JavaScript', 'Chart.js', 'Local Storage'],
    difficulty: 'Beginner',
    type: 'Mini Project',
    popular: true,
    features: [
      'Expense logging with categories',
      'Monthly budget setup',
      'Spending summary dashboard',
      'Visual charts (pie/bar)',
      'Export data to CSV',
    ],
    futureImprovements: [
      'Cloud sync across devices',
      'Group expense splitting',
      'SMS/email budget alerts',
    ],
    suitableFor:
      '1st and 2nd year CSE or IT students looking for a practical beginner React project with real-world utility.',
  },
  {
    id: 'college-event-management',
    title: 'College Event Management System',
    description:
      'A platform for organizing and managing college events, registrations, announcements, and attendee tracking.',
    overview:
      'A comprehensive event management system for colleges that allows organizers to create events, manage registrations, send notifications, and track attendance. Students can browse upcoming events and register online.',
    category: 'Web Project',
    branches: ['CSE', 'IT'],
    years: ['2nd Year', '3rd Year'],
    technologies: ['React', 'Node.js', 'SQL'],
    techDetails: ['React', 'Node.js', 'Express', 'MySQL'],
    difficulty: 'Intermediate',
    type: 'Mini Project',
    popular: true,
    features: [
      'Event creation and management',
      'Student registration portal',
      'QR code-based attendance',
      'Announcements and notifications',
      'Admin dashboard',
    ],
    futureImprovements: [
      'Online payment integration',
      'Certificate generation',
      'Multi-college support',
    ],
    suitableFor:
      '2nd and 3rd year CSE/IT students who want to build a complete CRUD application with authentication.',
  },
  {
    id: 'campus-placement-platform',
    title: 'Campus Placement Preparation Platform',
    description:
      'An online portal where students can practice aptitude questions, coding challenges, and mock interviews to prepare for campus placements.',
    overview:
      'A full-featured placement preparation platform with topic-wise aptitude question banks, coding challenge modules, mock interview scheduling, and progress tracking — designed specifically for B.Tech campus recruitment.',
    category: 'Web Project',
    branches: ['CSE', 'IT', 'AI & ML'],
    years: ['3rd Year', '4th Year'],
    technologies: ['React', 'Node.js', 'SQL'],
    techDetails: ['React', 'Node.js', 'Express', 'PostgreSQL'],
    difficulty: 'Intermediate',
    type: 'Major Project',
    popular: true,
    features: [
      'Aptitude and reasoning question bank',
      'Coding challenge environment',
      'Topic-wise progress tracking',
      'Mock interview scheduler',
      'Performance analytics dashboard',
    ],
    futureImprovements: [
      'AI-generated question recommendations',
      'Peer-to-peer mock interviews',
      'Company-specific preparation modules',
    ],
    suitableFor:
      '3rd and 4th year CSE, IT, and AI & ML students who want to build a platform relevant to their own placement journey.',
  },
  {
    id: 'smart-attendance-system',
    title: 'Smart Attendance System',
    description:
      'Automate classroom attendance using facial recognition or QR codes, with real-time reporting for faculty.',
    overview:
      'A computer vision-based attendance system that uses facial recognition or QR code scanning to automatically record student attendance. Faculty receive real-time reports, and students can view their own attendance records.',
    category: 'AI & Machine Learning',
    branches: ['CSE', 'IT', 'AI & ML'],
    years: ['3rd Year', '4th Year'],
    technologies: ['Python', 'AI/ML'],
    techDetails: ['Python', 'OpenCV', 'Face Recognition', 'Flask', 'React'],
    difficulty: 'Advanced',
    type: 'Major Project',
    popular: true,
    features: [
      'Facial recognition-based attendance',
      'QR code fallback mode',
      'Real-time faculty dashboard',
      'Student attendance history',
      'Automated low-attendance alerts',
    ],
    futureImprovements: [
      'Multi-camera support for large halls',
      'Integration with college ERP systems',
      'Mobile app for students',
    ],
    suitableFor:
      '3rd and 4th year CSE, IT, or AI & ML students comfortable with Python and interested in computer vision.',
  },
  {
    id: 'cloud-file-management',
    title: 'Cloud-Based File Management System',
    description:
      'A secure platform for uploading, organizing, sharing, and managing files in the cloud with access controls.',
    overview:
      'A Dropbox-style cloud file management system that allows users to upload files, create folder hierarchies, set access permissions, and share files via links. Designed to run on cloud infrastructure.',
    category: 'Cloud & DevOps',
    branches: ['CSE', 'IT'],
    years: ['3rd Year', '4th Year'],
    technologies: ['Node.js', 'Cloud/DevOps'],
    techDetails: ['Node.js', 'AWS S3 / Firebase Storage', 'React', 'Express'],
    difficulty: 'Intermediate',
    type: 'Major Project',
    popular: false,
    features: [
      'File upload and storage',
      'Folder organization',
      'File sharing via links',
      'Role-based access control',
      'Storage quota management',
    ],
    futureImprovements: [
      'Real-time collaboration on documents',
      'Mobile app',
      'End-to-end encryption',
    ],
    suitableFor:
      '3rd and 4th year CSE/IT students interested in cloud storage, REST APIs, and authentication systems.',
  },
  {
    id: 'online-voting-system',
    title: 'Online Voting System',
    description:
      'A secure digital platform for conducting college elections and surveys with real-time result visualization.',
    overview:
      'A tamper-proof digital voting system for college student elections, department polls, or surveys. Includes voter authentication, one-vote-per-user enforcement, and live result charts.',
    category: 'Web Project',
    branches: ['CSE', 'IT', 'ECE'],
    years: ['2nd Year', '3rd Year'],
    technologies: ['React', 'Node.js', 'SQL'],
    techDetails: ['React', 'Node.js', 'MySQL', 'JWT Authentication'],
    difficulty: 'Intermediate',
    type: 'Mini Project',
    popular: false,
    features: [
      'Voter registration and authentication',
      'One-vote-per-user enforcement',
      'Candidate/option listing',
      'Real-time result visualization',
      'Admin vote management dashboard',
    ],
    futureImprovements: [
      'Blockchain-based vote integrity',
      'Multi-round election support',
      'SMS OTP verification',
    ],
    suitableFor:
      '2nd and 3rd year CSE, IT, or ECE students looking for a full-stack project with authentication and real-time features.',
  },
  {
    id: 'library-management-system',
    title: 'Library Management System',
    description:
      'Digitize a college library with book cataloguing, student borrowing records, due date tracking, and fine management.',
    overview:
      'A complete digital library management system for colleges. Librarians can manage book inventory, issue and return books, track due dates, and manage fines. Students can search the catalogue and check their borrowing history.',
    category: 'Web Project',
    branches: ['CSE', 'IT', 'ECE', 'Mechanical', 'Civil'],
    years: ['1st Year', '2nd Year', '3rd Year'],
    technologies: ['Java', 'SQL'],
    techDetails: ['Java', 'Spring Boot', 'MySQL', 'HTML/CSS'],
    difficulty: 'Beginner',
    type: 'Mini Project',
    popular: false,
    features: [
      'Book catalogue management',
      'Issue and return tracking',
      'Due date and fine calculation',
      'Student borrowing history',
      'Search and filter books',
    ],
    futureImprovements: [
      'Barcode scanning',
      'Online book reservation',
      'Digital e-book integration',
    ],
    suitableFor:
      'Students from any branch looking for a classic database-driven CRUD project using Java or web technologies.',
  },
  {
    id: 'crop-disease-detection',
    title: 'Crop Disease Detection using AI',
    description:
      'A mobile-friendly web app that identifies crop diseases from leaf images using deep learning and provides treatment recommendations.',
    overview:
      'An AI-powered agricultural tool that allows farmers or students to upload images of crop leaves, which are then analyzed by a trained CNN model to detect diseases and suggest remedies. Demonstrates practical AI for social good.',
    category: 'AI & Machine Learning',
    branches: ['CSE', 'IT', 'AI & ML'],
    years: ['3rd Year', '4th Year'],
    technologies: ['Python', 'AI/ML'],
    techDetails: ['Python', 'TensorFlow/Keras', 'CNN', 'Flask', 'React'],
    difficulty: 'Advanced',
    type: 'Major Project',
    popular: false,
    features: [
      'Leaf image upload',
      'Disease identification using CNN',
      'Confidence score display',
      'Treatment recommendations',
      'Disease history log',
    ],
    futureImprovements: [
      'Offline mobile app',
      'Multi-language support for rural users',
      'Region-specific disease database',
    ],
    suitableFor:
      '3rd and 4th year CSE, IT, or AI & ML students interested in deep learning and socially impactful AI applications.',
  },
  {
    id: 'hostel-management-system',
    title: 'Hostel Management System',
    description:
      'Manage room allotment, student records, fee payments, and complaints for a college hostel digitally.',
    overview:
      'A complete hostel administration platform for college wardens and management. Handles room allocation, student profiles, fee collection, visitor logs, and complaint tracking — replacing paper registers.',
    category: 'Web Project',
    branches: ['CSE', 'IT'],
    years: ['2nd Year', '3rd Year'],
    technologies: ['React', 'Node.js', 'SQL'],
    techDetails: ['React', 'Node.js', 'Express', 'MySQL'],
    difficulty: 'Intermediate',
    type: 'Major Project',
    popular: false,
    features: [
      'Room allotment and management',
      'Student profile and document management',
      'Fee payment tracking',
      'Complaint and maintenance requests',
      'Visitor log management',
    ],
    futureImprovements: [
      'Online payment integration',
      'Mobile app for students',
      'Gate entry automation',
    ],
    suitableFor:
      '2nd and 3rd year CSE/IT students who want to build a multi-role application with CRUD, authentication, and reporting.',
  },
  {
    id: 'iot-home-automation',
    title: 'IoT Smart Home Automation',
    description:
      'Control home appliances remotely using a mobile/web dashboard connected to Arduino or Raspberry Pi via the cloud.',
    overview:
      'An IoT project that connects home appliances (lights, fans, locks) to the internet, allowing remote control via a web or mobile dashboard. Combines embedded systems with cloud integration and a clean UI.',
    category: 'IoT & Embedded',
    branches: ['CSE', 'ECE', 'EEE'],
    years: ['3rd Year', '4th Year'],
    technologies: ['Python', 'JavaScript', 'Cloud/DevOps'],
    techDetails: ['Arduino/Raspberry Pi', 'Python', 'MQTT', 'Node.js', 'React'],
    difficulty: 'Advanced',
    type: 'Major Project',
    popular: false,
    features: [
      'Remote appliance control via dashboard',
      'Real-time status monitoring',
      'Automated scheduling',
      'Voice command integration',
      'Energy usage tracking',
    ],
    futureImprovements: [
      'Mobile app control',
      'AI-based usage prediction',
      'Security camera integration',
    ],
    suitableFor:
      '3rd and 4th year CSE, ECE, or EEE students interested in combining hardware, cloud, and software into one integrated project.',
  },
  {
    id: 'food-delivery-app',
    title: 'Campus Food Delivery App',
    description:
      'A food ordering platform for college canteens allowing students to pre-order meals and track delivery status.',
    overview:
      'A mobile-friendly web app for college campus food ordering. Students can browse the canteen menu, place orders, make payments, and track their order status in real time. Canteen staff get an order management interface.',
    category: 'Mobile App',
    branches: ['CSE', 'IT'],
    years: ['2nd Year', '3rd Year'],
    technologies: ['React', 'Node.js', 'SQL'],
    techDetails: ['React', 'Node.js', 'Express', 'PostgreSQL', 'Socket.io'],
    difficulty: 'Intermediate',
    type: 'Major Project',
    popular: true,
    features: [
      'Menu browsing and cart management',
      'Order placement and confirmation',
      'Real-time order tracking',
      'Payment integration',
      'Staff order management panel',
    ],
    futureImprovements: [
      'Multiple canteen support',
      'Loyalty rewards system',
      'AI-powered meal recommendations',
    ],
    suitableFor:
      '2nd and 3rd year CSE/IT students who want to build a production-grade app with real-time features and payments.',
  },
  {
    id: 'student-portal-erp',
    title: 'Student ERP Portal',
    description:
      'A mini college ERP with attendance tracking, grade management, timetable display, and faculty–student communication.',
    overview:
      'A lightweight Educational Resource Planning (ERP) system that students can use to view timetables, check attendance, track grades, and communicate with faculty. Admins manage course registrations and academic records.',
    category: 'Web Project',
    branches: ['CSE', 'IT', 'ECE'],
    years: ['3rd Year', '4th Year'],
    technologies: ['React', 'Node.js', 'SQL'],
    techDetails: ['React', 'Node.js', 'MySQL', 'Express'],
    difficulty: 'Advanced',
    type: 'Major Project',
    popular: false,
    features: [
      'Student login and profile',
      'Attendance view and tracking',
      'Grade and marks management',
      'Timetable display',
      'Faculty announcement board',
    ],
    futureImprovements: [
      'Fee payment integration',
      'Mobile app',
      'AI attendance prediction alerts',
    ],
    suitableFor:
      '3rd and 4th year CSE, IT, or ECE students who want to build a complex multi-module full-stack application.',
  },
  {
    id: 'mental-health-chatbot',
    title: 'Student Mental Health Support Chatbot',
    description:
      'An AI-powered chatbot providing mental health support, stress management tips, and resource referrals for college students.',
    overview:
      'A conversational chatbot designed for college students to discuss academic stress, anxiety, and mental health concerns. The bot provides empathetic responses, coping strategies, and links to professional resources — without replacing medical advice.',
    category: 'AI & Machine Learning',
    branches: ['CSE', 'IT', 'AI & ML'],
    years: ['3rd Year', '4th Year'],
    technologies: ['Python', 'AI/ML', 'React'],
    techDetails: ['Python', 'NLP', 'Rasa / OpenAI API', 'React', 'Flask'],
    difficulty: 'Intermediate',
    type: 'Major Project',
    popular: false,
    features: [
      'Conversational chatbot interface',
      'Emotion detection from text',
      'Personalized coping tips',
      'Professional resource directory',
      'Anonymous usage option',
    ],
    futureImprovements: [
      'Voice interaction',
      'Mood tracking over time',
      'Integration with college counselling services',
    ],
    suitableFor:
      '3rd and 4th year CSE, IT, or AI & ML students interested in NLP, conversational AI, and socially meaningful applications.',
  },
  {
    id: 'traffic-management-system',
    title: 'Smart Traffic Management System',
    description:
      'Simulate or implement adaptive traffic signal control using computer vision or sensor data to reduce congestion.',
    overview:
      'An AI-driven traffic signal management system that uses simulated or real camera feeds to detect vehicle density at intersections and dynamically adjusts signal timing to minimize congestion and waiting time.',
    category: 'AI & Machine Learning',
    branches: ['CSE', 'ECE', 'AI & ML'],
    years: ['3rd Year', '4th Year'],
    technologies: ['Python', 'AI/ML'],
    techDetails: ['Python', 'OpenCV', 'YOLOv5', 'Flask', 'Simulation'],
    difficulty: 'Advanced',
    type: 'Major Project',
    popular: false,
    features: [
      'Vehicle detection using YOLO',
      'Real-time traffic density analysis',
      'Adaptive signal timing algorithm',
      'Traffic flow simulation',
      'Monitoring dashboard',
    ],
    futureImprovements: [
      'Emergency vehicle priority routing',
      'Multi-intersection coordination',
      'Integration with GPS navigation apps',
    ],
    suitableFor:
      '3rd and 4th year CSE, ECE, or AI & ML students interested in computer vision, simulation, and smart city applications.',
  },
  {
    id: 'inventory-management',
    title: 'Inventory Management System',
    description:
      'Track stock levels, manage suppliers, automate reorder alerts, and generate procurement reports for a small business or lab.',
    overview:
      'A practical inventory tracking system for a small business, college lab, or department store. Includes stock-in/stock-out tracking, low-stock alerts, supplier management, and procurement history reports.',
    category: 'Web Project',
    branches: ['CSE', 'IT', 'Mechanical', 'Civil'],
    years: ['1st Year', '2nd Year', '3rd Year'],
    technologies: ['Java', 'SQL', 'React'],
    techDetails: ['React', 'Java Spring Boot', 'MySQL'],
    difficulty: 'Beginner',
    type: 'Mini Project',
    popular: false,
    features: [
      'Product and category management',
      'Stock-in and stock-out tracking',
      'Low stock threshold alerts',
      'Supplier contact management',
      'Procurement and usage reports',
    ],
    futureImprovements: [
      'Barcode scanner integration',
      'Multi-warehouse support',
      'Purchase order generation',
    ],
    suitableFor:
      'Students from any branch looking for a practical database-driven project applicable to real-world business problems.',
  },
  {
    id: 'peer-tutoring-platform',
    title: 'Peer-to-Peer Tutoring Platform',
    description:
      'A platform connecting senior B.Tech students who can tutor with juniors seeking academic help.',
    overview:
      'A community tutoring platform where senior B.Tech students can register as tutors, list their subject expertise, and connect with juniors who need academic guidance. Includes session booking, ratings, and a messaging system.',
    category: 'Web Project',
    branches: ['CSE', 'IT'],
    years: ['2nd Year', '3rd Year', '4th Year'],
    technologies: ['React', 'Node.js', 'SQL'],
    techDetails: ['React', 'Node.js', 'PostgreSQL', 'Socket.io'],
    difficulty: 'Intermediate',
    type: 'Major Project',
    popular: true,
    features: [
      'Tutor and student profiles',
      'Subject and availability listing',
      'Session booking system',
      'Rating and review system',
      'In-app messaging',
    ],
    futureImprovements: [
      'Video call integration',
      'Payment for premium tutoring',
      'AI-powered tutor recommendations',
    ],
    suitableFor:
      '2nd, 3rd, and 4th year CSE/IT students who want to build a full-stack platform with real-world features like booking systems and messaging.',
  },
  {
    id: 'bus-tracking-system',
    title: 'College Bus Tracking System',
    description:
      'Track college buses in real-time so students can check bus location, estimated arrival time, and route information.',
    overview:
      'A real-time GPS tracking application for college buses. Students use a mobile-friendly web app to see live bus locations, estimated arrival times at stops, and route maps. Bus drivers or administrators update location data.',
    category: 'Mobile App',
    branches: ['CSE', 'IT', 'ECE'],
    years: ['2nd Year', '3rd Year'],
    technologies: ['React', 'Node.js', 'JavaScript'],
    techDetails: ['React', 'Node.js', 'Google Maps API', 'Socket.io', 'Firebase'],
    difficulty: 'Intermediate',
    type: 'Minor Project',
    popular: false,
    features: [
      'Live bus location on map',
      'Estimated arrival time per stop',
      'Route and stop listing',
      'Driver location update interface',
      'Push notification for near-arrival',
    ],
    futureImprovements: [
      'Mobile app (React Native / Flutter)',
      'Historical route analytics',
      'Bus occupancy tracking',
    ],
    suitableFor:
      '2nd and 3rd year CSE, IT, or ECE students interested in real-time applications, maps, and WebSockets.',
  },
];

/** Filter helpers */

export const BRANCHES = ['All Branches', 'CSE', 'IT', 'AI & ML', 'ECE', 'EEE', 'Mechanical', 'Civil'];
export const YEARS = ['All Years', '1st Year', '2nd Year', '3rd Year', '4th Year'];
export const TYPES = ['All Types', 'Mini Project', 'Major Project'];
export const TECHNOLOGIES = [
  'All Technologies',
  'Python',
  'Java',
  'JavaScript',
  'React',
  'Flutter',
  'AI/ML',
  'Node.js',
  'Cloud/DevOps',
  'SQL',
];
export const DIFFICULTIES = ['All Levels', 'Beginner', 'Intermediate', 'Advanced'];
