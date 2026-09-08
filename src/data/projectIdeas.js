/**
 * ProjectBridge — Project Ideas Data
 * 
 * Curated software project idea suggestions for B.Tech students (1st to 4th year).
 * All projects are strictly SOFTWARE DEVELOPMENT implementations (No hardware/IoT).
 * Students request development support through the ProjectBridge request form.
 */

export const projectIdeas = [
  {
    "id": "student-grade-management-system",
    "title": "Student Grade & Marks Management System",
    "description": "A console and desktop software application that records student course marks, calculates GPAs and letter grades, and generates semester grade cards.",
    "overview": "Designed for first-year engineering students to master object-oriented programming, data structures, and file/database persistence. It allows teachers to enter course marks, calculate credit-weighted GPAs, and export printable student report cards.",
    "category": "Education Technology",
    "branches": [
      "CSE",
      "IT"
    ],
    "years": [
      "1st Year"
    ],
    "technologies": [
      "Java",
      "SQL"
    ],
    "techDetails": [
      "Java",
      "JDBC",
      "MySQL / SQLite",
      "Object-Oriented Design"
    ],
    "difficulty": "Beginner",
    "type": "Lab Project",
    "popular": false,
    "features": [
      "Student registration and course enrollment",
      "Weighted continuous internal assessment & semester mark calculations",
      "Automatic GPA and SGPA computation with grade thresholds",
      "Persistent record storage with SQL and CSV export",
      "Individual student report card generation"
    ],
    "futureImprovements": [
      "GUI dashboard using JavaFX or React",
      "Automated email dispatch of grade cards to parents",
      "Batch student import from Excel spreadsheets"
    ],
    "suitableFor": "1st Year CSE and IT students learning Java, OOP principles, and basic database operations."
  },
  {
    "id": "student-expense-tracker",
    "title": "Student Expense Tracker",
    "description": "A simple and intuitive web app to help college students track daily expenses, set budgets, and visualize spending patterns.",
    "overview": "A personal finance management app built for college students. Users can log daily expenses by category, set monthly budgets, and view spending summaries through clean charts and reports.",
    "category": "Productivity Software",
    "branches": [
      "CSE",
      "IT"
    ],
    "years": [
      "1st Year",
      "2nd Year"
    ],
    "technologies": [
      "JavaScript",
      "React"
    ],
    "techDetails": [
      "React",
      "JavaScript",
      "Chart.js",
      "Local Storage"
    ],
    "difficulty": "Beginner",
    "type": "Mini Project",
    "popular": true,
    "features": [
      "Expense logging with categories (food, books, travel, hostel)",
      "Monthly budget setup and threshold warnings",
      "Interactive spending summary charts (pie and bar graphs)",
      "Filter and search by date range and category",
      "Export expense summary to CSV and PDF"
    ],
    "futureImprovements": [
      "Cloud sync across multiple devices",
      "Group expense splitting with roommates",
      "SMS and email budget over-limit alerts"
    ],
    "suitableFor": "1st and 2nd year CSE or IT students looking for a practical beginner React project with real-world utility."
  },
  {
    "id": "library-management-system",
    "title": "Digital College Library Management System",
    "description": "Digitize college library operations with book cataloguing, student borrowing records, due date tracking, and automated fine calculation.",
    "overview": "A complete digital library management system for colleges. Librarians can manage book inventory, issue and return books, track return deadlines, and calculate fines. Students can search the catalogue and check borrowing histories.",
    "category": "Database / Enterprise Software",
    "branches": [
      "CSE",
      "IT"
    ],
    "years": [
      "1st Year",
      "2nd Year"
    ],
    "technologies": [
      "Java",
      "SQL"
    ],
    "techDetails": [
      "Java",
      "Spring Boot",
      "MySQL",
      "HTML/CSS"
    ],
    "difficulty": "Beginner",
    "type": "Mini Project",
    "popular": false,
    "features": [
      "Searchable book catalogue with author and genre filters",
      "Student membership registration and issue/return ledger",
      "Automated fine calculation based on due dates",
      "Real-time book availability and stock tracking",
      "Librarian administrative dashboard with transaction logs"
    ],
    "futureImprovements": [
      "Barcode and QR code scanning for physical books",
      "Online reserve-and-hold feature for students",
      "Digital e-book and PDF lecture notes integration"
    ],
    "suitableFor": "1st and 2nd year CSE and IT students looking for a classic database-driven CRUD application using Java and SQL."
  },
  {
    "id": "python-quiz-application",
    "title": "Interactive Academic Quiz & Assessment Engine",
    "description": "A modular quiz application with timed tests, random question picking, instant scoring, and topic-wise performance breakdowns.",
    "overview": "Built in Python, this desktop/web application allows educators to create multiple-choice question banks and conduct timed quizzes. It tracks student response times, generates instant percentage scores, and provides answer explanations.",
    "category": "Education Technology",
    "branches": [
      "CSE",
      "IT",
      "AI & ML"
    ],
    "years": [
      "1st Year"
    ],
    "technologies": [
      "Python",
      "SQL"
    ],
    "techDetails": [
      "Python",
      "Tkinter / Streamlit",
      "SQLite",
      "JSON"
    ],
    "difficulty": "Beginner",
    "type": "Lab Project",
    "popular": false,
    "features": [
      "Subject-wise question bank management with difficulty levels",
      "Timed quiz sessions with question randomization",
      "Instant result calculation with answer explanations",
      "Topic-wise score summary and weak-area diagnosis",
      "Leaderboard and past attempt history"
    ],
    "futureImprovements": [
      "Web-based multi-user student exam portal",
      "AI-powered dynamic difficulty adjustment",
      "Anti-cheating window blur detection"
    ],
    "suitableFor": "1st Year students mastering Python fundamentals, data structures, and GUI/Streamlit development."
  },
  {
    "id": "student-study-planner",
    "title": "Smart Student Study & Revision Planner",
    "description": "An academic timetable and revision planning tool that creates daily study schedules based on subject syllabus weights and upcoming exam dates.",
    "overview": "Helps college students stay on top of semester coursework by breaking down course syllabi into daily study blocks. It calculates revision intervals using spaced repetition and tracks daily topic completion.",
    "category": "Productivity Software",
    "branches": [
      "CSE",
      "IT"
    ],
    "years": [
      "1st Year"
    ],
    "technologies": [
      "JavaScript",
      "React"
    ],
    "techDetails": [
      "React",
      "Tailwind CSS",
      "JavaScript",
      "Local Storage"
    ],
    "difficulty": "Beginner",
    "type": "Lab Project",
    "popular": false,
    "features": [
      "Semester course and syllabus chapter logging",
      "Exam countdown timer and milestone tracking",
      "Automated daily study schedule generator",
      "Interactive task checklist with completion progress bars",
      "Spaced repetition revision reminders"
    ],
    "futureImprovements": [
      "Google Calendar sync via API",
      "Study group collaboration and shared roadmaps",
      "AI-driven study plan optimization based on past test scores"
    ],
    "suitableFor": "1st Year engineering students building responsive frontend productivity tools in JavaScript and React."
  },
  {
    "id": "student-attendance-logger",
    "title": "Student Course Attendance Logger & Defaulter Tracker",
    "description": "A desktop and console tool for professors and class representatives to record class attendance, compute percentages, and generate defaulter lists.",
    "overview": "Designed to replace paper registers, this software records lecture-wise attendance across subjects, calculates 75% university eligibility thresholds, and automatically produces list of students with attendance shortages.",
    "category": "Education Technology",
    "branches": [
      "CSE",
      "IT"
    ],
    "years": [
      "1st Year"
    ],
    "technologies": [
      "Python",
      "SQL"
    ],
    "techDetails": [
      "Python",
      "SQLite",
      "Pandas",
      "CLI / Tkinter"
    ],
    "difficulty": "Beginner",
    "type": "Lab Project",
    "popular": false,
    "features": [
      "Class student roster management with roll numbers",
      "Daily lecture attendance entry across subjects",
      "Automatic calculation of attendance percentage per student",
      "One-click generation of <75% attendance defaulter reports",
      "Export detailed attendance sheets to Excel/CSV"
    ],
    "futureImprovements": [
      "Automated SMS/Email notification to low-attendance students",
      "Biometric fingerprint scanner software integration",
      "Mobile app for student self-check portal"
    ],
    "suitableFor": "1st Year students developing practical Python utilities with file operations and database queries."
  },
  {
    "id": "markdown-resume-builder",
    "title": "Markdown-Driven Tech Resume Builder",
    "description": "A lightweight web tool that compiles structured Markdown into ATS-friendly, clean single-page engineering resumes with live preview.",
    "overview": "Allows engineering students to write resume sections in clean Markdown and view instant, beautifully formatted, print-ready PDF resumes. Includes pre-configured templates tuned for software developer job applications.",
    "category": "Career / Placement Software",
    "branches": [
      "CSE",
      "IT"
    ],
    "years": [
      "1st Year",
      "2nd Year"
    ],
    "technologies": [
      "JavaScript",
      "React"
    ],
    "techDetails": [
      "React",
      "JavaScript",
      "HTML5/CSS3",
      "PrintJS / jsPDF"
    ],
    "difficulty": "Beginner",
    "type": "Mini Project",
    "popular": false,
    "features": [
      "Split-pane interface with live Markdown preview",
      "Pre-built engineering resume sections (Projects, Skills, Education)",
      "One-click PDF download with crisp vector typography",
      "ATS-friendly single-column and two-column layout options",
      "Client-side local storage auto-save"
    ],
    "futureImprovements": [
      "Resume keyword optimization suggestions for job postings",
      "Direct GitHub repository importer for projects",
      "Multiple modern color theme palettes"
    ],
    "suitableFor": "1st and 2nd year students looking for a real-world frontend web development project."
  },
  {
    "id": "simple-event-registration-portal",
    "title": "Department Workshop & Event Registration Portal",
    "description": "A web portal for college technical symposiums that handles participant registration, ticket pass generation, and organizer check-ins.",
    "overview": "Facilitates online registration for department workshops, hackathons, and guest lectures. It validates student roll numbers, generates a unique registration ID pass, and provides administrators with attendee rosters.",
    "category": "Web Development",
    "branches": [
      "CSE",
      "IT"
    ],
    "years": [
      "1st Year",
      "2nd Year"
    ],
    "technologies": [
      "JavaScript",
      "SQL"
    ],
    "techDetails": [
      "Node.js",
      "Express",
      "SQLite",
      "HTML/Tailwind CSS"
    ],
    "difficulty": "Beginner",
    "type": "Mini Project",
    "popular": false,
    "features": [
      "Event details showcase with registration deadlines",
      "Student registration form with validation and seat quota checks",
      "Unique digital pass generation with verification token",
      "Organizer admin panel with attendee search and filtering",
      "CSV export of participant rosters for certificate printing"
    ],
    "futureImprovements": [
      "QR code validation for instant gate check-in",
      "Automated email confirmation with calendar invite",
      "Payment gateway integration for paid events"
    ],
    "suitableFor": "1st and 2nd year CSE/IT students building their first full-stack web application with client-server architecture."
  },
  {
    "id": "college-event-management",
    "title": "College Event Management System",
    "description": "A platform for organizing and managing college events, registrations, announcements, and attendee tracking.",
    "overview": "A comprehensive event management system for colleges that allows organizers to create events, manage registrations, send notifications, and track attendance. Students can browse upcoming events and register online.",
    "category": "Web Development",
    "branches": [
      "CSE",
      "IT"
    ],
    "years": [
      "2nd Year",
      "3rd Year"
    ],
    "technologies": [
      "React",
      "Node.js",
      "SQL"
    ],
    "techDetails": [
      "React",
      "Node.js",
      "Express",
      "MySQL"
    ],
    "difficulty": "Intermediate",
    "type": "Mini Project",
    "popular": true,
    "features": [
      "Event creation and lifecycle management",
      "Student registration portal with capacity limits",
      "QR code-based attendee check-in system",
      "Announcements and notifications broadcast",
      "Admin analytics dashboard with attendance metrics"
    ],
    "futureImprovements": [
      "Online payment gateway integration",
      "Automated digital certificate generation and emailing",
      "Multi-college inter-university event hosting"
    ],
    "suitableFor": "2nd and 3rd year CSE/IT students who want to build a complete CRUD application with authentication."
  },
  {
    "id": "hostel-management-system",
    "title": "Digital Hostel Management & Allocation Portal",
    "description": "Manage room allotment, student records, fee payments, and maintenance complaints for college hostels digitally.",
    "overview": "A complete hostel administration platform for college wardens and management. Handles room allocation, student profiles, fee collection, visitor logs, and complaint tracking — replacing paper registers with role-based dashboards.",
    "category": "Database / Enterprise Software",
    "branches": [
      "CSE",
      "IT"
    ],
    "years": [
      "2nd Year",
      "3rd Year"
    ],
    "technologies": [
      "React",
      "Node.js",
      "SQL"
    ],
    "techDetails": [
      "React",
      "Node.js",
      "Express",
      "MySQL"
    ],
    "difficulty": "Intermediate",
    "type": "Major Project",
    "popular": false,
    "features": [
      "Room inventory, occupancy tracking, and allotment system",
      "Student profile, guardian contacts, and document storage",
      "Hostel fee payment status and due alert logs",
      "Maintenance ticket submission with resolution status tracking",
      "Digital in/out register and visitor logs"
    ],
    "futureImprovements": [
      "Online payment gateway integration for mess and hostel fees",
      "Student mobile app with push notifications",
      "Mess menu rating and food waste monitoring module"
    ],
    "suitableFor": "2nd and 3rd year CSE/IT students who want to build a multi-role enterprise application with relational DBMS."
  },
  {
    "id": "online-examination-system",
    "title": "Secure Online Examination & Evaluation System",
    "description": "A web-based exam portal featuring randomized question delivery, automated grading for objective tests, and secure student sessions.",
    "overview": "Empowers colleges to conduct mid-term and semester examinations online. Instructors create question banks with negative marking rules, while students take timed tests with automatic submission on timer expiry and immediate score generation.",
    "category": "Education Technology",
    "branches": [
      "CSE",
      "IT"
    ],
    "years": [
      "2nd Year",
      "3rd Year"
    ],
    "technologies": [
      "React",
      "Node.js",
      "SQL"
    ],
    "techDetails": [
      "React",
      "Node.js",
      "Express",
      "PostgreSQL",
      "JWT"
    ],
    "difficulty": "Intermediate",
    "type": "Major Project",
    "popular": true,
    "features": [
      "Role-based authentication for Faculty, Student, and Admin",
      "Dynamic question paper generator with subject chapters and marks",
      "Fullscreen lockdown and tab-switch penalty tracking",
      "Auto-evaluation engine for objective and multiple-choice tests",
      "Class analytics with question difficulty breakdown"
    ],
    "futureImprovements": [
      "AI-based webcam proctoring for eye-movement monitoring",
      "Coding assessment module with live compiler execution",
      "Subjective answer parsing with natural language matching"
    ],
    "suitableFor": "2nd and 3rd year students wanting to build high-concurrency, secure evaluation systems with relational schemas."
  },
  {
    "id": "student-notes-sharing-portal",
    "title": "Peer Student Notes & Study Material Repository",
    "description": "A collaborative community repository where college students can upload, search, rate, and download lecture notes and previous question papers.",
    "overview": "Solves the problem of fragmented academic study material across chat groups. Organizes lecture notes, PPTs, handwritten notes, and solved question papers categorized by university regulation, semester, branch, and subject code.",
    "category": "Social / Community Platforms",
    "branches": [
      "CSE",
      "IT"
    ],
    "years": [
      "2nd Year"
    ],
    "technologies": [
      "React",
      "Node.js",
      "SQL"
    ],
    "techDetails": [
      "React",
      "Node.js",
      "Express",
      "PostgreSQL",
      "Multer"
    ],
    "difficulty": "Intermediate",
    "type": "Mini Project",
    "popular": false,
    "features": [
      "Document uploads with metadata (University, Branch, Subject Code, Year)",
      "PDF preview viewer without mandatory download",
      "Upvoting, rating, and verified student contributor badges",
      "Keyword search across subjects, topics, and authors",
      "Moderator approval queue to prevent spam or irrelevant uploads"
    ],
    "futureImprovements": [
      "OCR full-text search inside handwritten notes",
      "AI document summarizer for quick revision key points",
      "Audio lecture recording attachments"
    ],
    "suitableFor": "2nd Year CSE/IT students learning file handling, cloud asset storage, and relational database indexing."
  },
  {
    "id": "student-complaint-management",
    "title": "College Grievance Redressal & Complaint Tracker",
    "description": "A transparent grievance tracking portal for college departments, infrastructure, and hostels with escalation workflows.",
    "overview": "Enables students to lodge complaints regarding academics, lab equipment, hostel facilities, or campus infrastructure. Features tracking IDs, SLA countdowns, department routing, and grievance escalation to college authorities.",
    "category": "Web Development",
    "branches": [
      "CSE",
      "IT"
    ],
    "years": [
      "2nd Year"
    ],
    "technologies": [
      "React",
      "Node.js",
      "SQL"
    ],
    "techDetails": [
      "React",
      "Node.js",
      "Express",
      "MySQL"
    ],
    "difficulty": "Intermediate",
    "type": "Mini Project",
    "popular": false,
    "features": [
      "Category-based complaint lodging (Lab, Mess, Academics, Admin)",
      "Unique complaint tracking token with real-time status timeline",
      "Department officer dispatch and resolution note submission",
      "Student satisfaction feedback upon ticket closure",
      "Admin analytics on average resolution time per department"
    ],
    "futureImprovements": [
      "Anonymous whistleblowing mode for sensitive issues",
      "Automated escalation to Principal if ticket exceeds SLA",
      "WhatsApp notification updates on status change"
    ],
    "suitableFor": "2nd Year students building workflow-driven web systems with role-based access control (RBAC)."
  },
  {
    "id": "college-club-management-system",
    "title": "Campus Student Club & Activity Hub",
    "description": "A centralized portal for student technical and cultural clubs to manage memberships, event calendars, budget approvals, and recruitment drives.",
    "overview": "Streamlines student club operations across campus. Club leads can announce recruitment drives, publish activity calendars, register workshop attendees, and track internal task assignments in a unified workspace.",
    "category": "Web Development",
    "branches": [
      "CSE",
      "IT"
    ],
    "years": [
      "2nd Year"
    ],
    "technologies": [
      "React",
      "Node.js",
      "SQL"
    ],
    "techDetails": [
      "React",
      "Tailwind CSS",
      "Node.js",
      "Express",
      "PostgreSQL"
    ],
    "difficulty": "Intermediate",
    "type": "Mini Project",
    "popular": false,
    "features": [
      "Club showcase pages with executive board profiles and past activities",
      "Online recruitment applications and interview status tracking",
      "Interactive master campus activity calendar",
      "Event volunteer sign-up and duty roster assignment",
      "Budget request and expenditure ledger for faculty approval"
    ],
    "futureImprovements": [
      "Real-time club discussion forum and chat channels",
      "Automated participation badge generation for active members",
      "Merchandise pre-ordering and distribution system"
    ],
    "suitableFor": "2nd Year CSE/IT students building multi-faceted campus web portals with clean relational models."
  },
  {
    "id": "internship-tracking-portal",
    "title": "Student Internship & Industrial Training Portal",
    "description": "A platform for managing mandatory student industrial internships, company approvals, weekly logbook submissions, and mentor evaluations.",
    "overview": "Academic departments require students to complete industrial training and submit weekly progress reports. This portal allows students to submit internship offer letters, log weekly work summaries, and receive digital mentor approvals.",
    "category": "Career / Placement Software",
    "branches": [
      "CSE",
      "IT"
    ],
    "years": [
      "2nd Year",
      "3rd Year"
    ],
    "technologies": [
      "React",
      "Node.js",
      "SQL"
    ],
    "techDetails": [
      "React",
      "Node.js",
      "Express",
      "PostgreSQL"
    ],
    "difficulty": "Intermediate",
    "type": "Major Project",
    "popular": false,
    "features": [
      "Company registration and internship verification workflow",
      "Weekly student work logbook submission with progress metrics",
      "Faculty guide evaluation and credit mark allocation",
      "Final internship completion certificate and report upload",
      "Department dashboard tracking student internship placements"
    ],
    "futureImprovements": [
      "Integrated company HR feedback and grading form",
      "Placement cell analytics correlating training to placement offers",
      "AI report originality and quality check"
    ],
    "suitableFor": "2nd and 3rd year students wanting to build enterprise administrative workflows for universities."
  },
  {
    "id": "campus-food-delivery-app",
    "title": "Campus Food Pre-Ordering & Canteen Management",
    "description": "A food ordering platform for college canteens allowing students to pre-order meals, skip queues, and track order preparation.",
    "overview": "Eliminates canteen crowding during short break periods. Students browse live food menus, place pre-orders, receive token numbers, and pick up food when ready. Canteen staff receive digital kitchen display orders.",
    "category": "Web Development",
    "branches": [
      "CSE",
      "IT"
    ],
    "years": [
      "2nd Year",
      "3rd Year"
    ],
    "technologies": [
      "React",
      "Node.js",
      "SQL"
    ],
    "techDetails": [
      "React",
      "Node.js",
      "Express",
      "PostgreSQL",
      "Socket.io"
    ],
    "difficulty": "Intermediate",
    "type": "Major Project",
    "popular": true,
    "features": [
      "Live menu catalog with item availability toggles and price tags",
      "Cart management with custom dietary notes",
      "Digital token generation with estimated preparation countdown",
      "Kitchen display board for canteen staff with order status buttons",
      "Sales reporting and daily inventory consumption summaries"
    ],
    "futureImprovements": [
      "UPI payment gateway integration with instant refunds",
      "Weekly meal subscription plans for hostellers",
      "AI demand prediction to minimize canteen food waste"
    ],
    "suitableFor": "2nd and 3rd year CSE/IT students who want to build real-time order processing web apps with WebSockets."
  },
  {
    "id": "peer-tutoring-platform",
    "title": "Peer-to-Peer Academic Tutoring Platform",
    "description": "A platform connecting senior B.Tech students who can tutor with juniors seeking academic guidance in tough engineering subjects.",
    "overview": "A collaborative community tutoring platform where senior engineering students register as peer mentors, list their subject strengths (such as Data Structures, Digital Logic, or Mathematics), and schedule study sessions with juniors.",
    "category": "Social / Community Platforms",
    "branches": [
      "CSE",
      "IT"
    ],
    "years": [
      "2nd Year",
      "3rd Year"
    ],
    "technologies": [
      "React",
      "Node.js",
      "SQL"
    ],
    "techDetails": [
      "React",
      "Node.js",
      "PostgreSQL",
      "Socket.io"
    ],
    "difficulty": "Intermediate",
    "type": "Major Project",
    "popular": true,
    "features": [
      "Tutor subject expertise listing and verified GPA badges",
      "Interactive appointment booking and timeslot reservation",
      "Peer rating, review, and feedback system",
      "In-app direct messaging for study material coordination",
      "Session completion tracking and volunteer credit logs"
    ],
    "futureImprovements": [
      "In-browser WebRTC video calling and whiteboard collaboration",
      "Gamified tutor points exchangeable for campus perks",
      "AI-powered matching based on syllabus needs and schedules"
    ],
    "suitableFor": "2nd and 3rd year students building collaborative full-stack platforms with scheduling and messaging."
  },
  {
    "id": "online-voting-system",
    "title": "Tamper-Evident College Election & Polling System",
    "description": "A secure digital platform for conducting college student union elections and department polls with real-time result visualization.",
    "overview": "Replaces paper ballots with a secure digital voting portal for student council elections. Enforces one-vote-per-student rules using cryptographic verification and renders live, transparent vote count visualizations.",
    "category": "Cybersecurity",
    "branches": [
      "CSE",
      "IT"
    ],
    "years": [
      "2nd Year",
      "3rd Year"
    ],
    "technologies": [
      "React",
      "Node.js",
      "SQL"
    ],
    "techDetails": [
      "React",
      "Node.js",
      "MySQL",
      "JWT Authentication",
      "Crypto"
    ],
    "difficulty": "Intermediate",
    "type": "Mini Project",
    "popular": false,
    "features": [
      "Voter verification using college email and unique student ID tokens",
      "Cryptographic vote hashing to guarantee anonymity and integrity",
      "Candidate manifesto profiles with election positions",
      "Real-time voter turnout percentage tracker",
      "Instant automated result tallying upon election closing"
    ],
    "futureImprovements": [
      "Zero-knowledge proof verification for enhanced auditability",
      "Two-factor SMS OTP authentication before ballot cast",
      "Multi-seat preferential voting system algorithm"
    ],
    "suitableFor": "2nd and 3rd year CSE/IT students interested in security principles, authentication, and election software integrity."
  },
  {
    "id": "inventory-management-system",
    "title": "Lab Equipment & Department Inventory Tracker",
    "description": "Track engineering lab components, component borrowings, minimum stock thresholds, and procurement records digitally.",
    "overview": "A practical web-based inventory tracking system for college computing and engineering labs. Manages component stock-in/stock-out, student component borrowings for term projects, and automated low-stock procurement alerts.",
    "category": "Database / Enterprise Software",
    "branches": [
      "CSE",
      "IT"
    ],
    "years": [
      "2nd Year",
      "3rd Year"
    ],
    "technologies": [
      "Java",
      "SQL",
      "React"
    ],
    "techDetails": [
      "React",
      "Java Spring Boot",
      "MySQL"
    ],
    "difficulty": "Intermediate",
    "type": "Mini Project",
    "popular": false,
    "features": [
      "Item classification by category, lab room, and specification",
      "Student issue and return ledger with due date alerts",
      "Automated threshold alerts when component stock runs low",
      "Supplier details and purchase invoice record keeping",
      "Audit log tracking every component transfer and damage report"
    ],
    "futureImprovements": [
      "Barcode and QR code generation for asset labeling",
      "Maintenance cycle reminders for lab equipment",
      "Purchase order PDF generation for department heads"
    ],
    "suitableFor": "2nd and 3rd year students building robust Java Spring Boot and React enterprise applications."
  },
  {
    "id": "alumni-association-portal",
    "title": "College Alumni Networking & Mentorship Platform",
    "description": "A private networking portal connecting college alumni with current students for career mentorship, referral postings, and reunion updates.",
    "overview": "Bridges the gap between college alumni working in tech and current students. Alumni can post job referrals, share company experiences, offer mentorship slots, and support department development initiatives.",
    "category": "Social / Community Platforms",
    "branches": [
      "CSE",
      "IT"
    ],
    "years": [
      "2nd Year",
      "3rd Year"
    ],
    "technologies": [
      "React",
      "Node.js",
      "SQL"
    ],
    "techDetails": [
      "React",
      "Node.js",
      "Express",
      "PostgreSQL"
    ],
    "difficulty": "Intermediate",
    "type": "Major Project",
    "popular": false,
    "features": [
      "Verified alumni profiles with company, role, and graduation batch",
      "Internal job referral board posted exclusively by alumni",
      "1-on-1 mentorship slot booking for placement guidance",
      "College announcement channel for alumni reunions and lectures",
      "Department donation and scholarship tracking ledger"
    ],
    "futureImprovements": [
      "LinkedIn profile auto-sync integration",
      "Alumni location directory map for alumni chapters worldwide",
      "Direct in-app messaging and resume critique exchange"
    ],
    "suitableFor": "2nd and 3rd year CSE/IT students looking to build social networking platforms with multi-tier user authorization."
  },
  {
    "id": "digital-lost-and-found-system",
    "title": "Campus Digital Lost & Found Portal",
    "description": "A campus-wide web service where students can report lost items, browse found property listings, and verify ownership securely.",
    "overview": "Replaces messy social media posts with an organized campus portal. Students post lost items with location details, while finders or campus security post found items with security verification questions to prove rightful ownership.",
    "category": "Web Development",
    "branches": [
      "CSE",
      "IT"
    ],
    "years": [
      "2nd Year"
    ],
    "technologies": [
      "React",
      "Node.js",
      "SQL"
    ],
    "techDetails": [
      "React",
      "Node.js",
      "Express",
      "SQLite / MySQL"
    ],
    "difficulty": "Beginner",
    "type": "Mini Project",
    "popular": false,
    "features": [
      "Categorized lost item reporting with location, date, and description",
      "Found item directory with hidden verification question mechanism",
      "Claim resolution workflow requiring security desk verification",
      "Search filters by item type (IDs, Electronics, Wallets, Books)",
      "Automated email notification matching lost and found keywords"
    ],
    "futureImprovements": [
      "Computer vision image similarity matching between lost & found photos",
      "College security gate handover acknowledgment QR system",
      "Telegram/WhatsApp alert bot for newly posted lost items"
    ],
    "suitableFor": "2nd Year students building useful community utilities with keyword matching and role-based validation."
  },
  {
    "id": "classroom-resource-reservation-system",
    "title": "Classroom & Seminar Hall Resource Reservation System",
    "description": "An automated booking system for college seminar halls, seminar projectors, and computer labs preventing scheduling clashes.",
    "overview": "Resolves conflicts over shared college infrastructure. Faculty and student club coordinators can view live availability calendars, submit booking requests with required equipment (projector, audio, seating), and receive admin approvals.",
    "category": "Web Development",
    "branches": [
      "CSE",
      "IT"
    ],
    "years": [
      "2nd Year",
      "3rd Year"
    ],
    "technologies": [
      "React",
      "Node.js",
      "SQL"
    ],
    "techDetails": [
      "React",
      "Node.js",
      "Express",
      "PostgreSQL"
    ],
    "difficulty": "Intermediate",
    "type": "Mini Project",
    "popular": false,
    "features": [
      "Interactive visual timetable for all college auditoriums and labs",
      "Clash detection algorithm preventing overlapping reservations",
      "Resource equipment checklist (projector, microphones, AC, PCs)",
      "Department head approval workflow with email notifications",
      "Utilization reports detailing most-used rooms and peak hours"
    ],
    "futureImprovements": [
      "Digital e-paper door display integration via HTTP webhook",
      "Automated cancellation if room is unconfirmed 15 minutes before",
      "Mobile app for quick on-the-go hall bookings"
    ],
    "suitableFor": "2nd Year CSE/IT students learning calendar logic, concurrency conflict resolution, and relational booking schemas."
  },
  {
    "id": "ai-resume-analyzer",
    "title": "AI Resume Analyzer & Skill Gap Detector",
    "description": "Analyze resumes and identify technical skills, missing competencies, and areas for improvement using NLP and machine learning.",
    "overview": "A platform that parses a student's resume and automatically identifies technical skills, highlights skill gaps relative to industry expectations, and provides personalized improvement recommendations. Ideal for final-year students preparing for placements.",
    "category": "AI & Machine Learning",
    "branches": [
      "CSE",
      "IT",
      "AI & ML"
    ],
    "years": [
      "3rd Year",
      "4th Year"
    ],
    "technologies": [
      "Python",
      "AI/ML",
      "React"
    ],
    "techDetails": [
      "Python",
      "Machine Learning",
      "NLP",
      "React",
      "FastAPI"
    ],
    "difficulty": "Intermediate",
    "type": "Major Project",
    "popular": true,
    "features": [
      "Resume upload with PDF and DOCX text extraction",
      "Entity recognition for technical skills, certifications, and projects",
      "Job description keyword comparison and ATS compatibility score",
      "Actionable recommendations to fix formatting and missing keywords",
      "Interactive visual dashboard showing skill proficiency distribution"
    ],
    "futureImprovements": [
      "Direct LinkedIn profile import and auto-analysis",
      "Automated personalized project suggestions based on skill gaps",
      "Multi-resume comparative ranking for campus recruiters"
    ],
    "suitableFor": "3rd and 4th year CSE, IT, and AI & ML students looking to explore NLP pipelines, scikit-learn/spaCy, and modern full-stack integration."
  },
  {
    "id": "campus-placement-platform",
    "title": "Campus Placement Preparation & Aptitude Platform",
    "description": "An online portal where students can practice aptitude questions, coding challenges, and mock interviews to prepare for campus placements.",
    "overview": "A full-featured placement preparation platform with topic-wise aptitude question banks, coding challenge modules, mock interview scheduling, and progress tracking — designed specifically for B.Tech campus recruitment.",
    "category": "Full-Stack Development",
    "branches": [
      "CSE",
      "IT",
      "AI & ML"
    ],
    "years": [
      "3rd Year",
      "4th Year"
    ],
    "technologies": [
      "React",
      "Node.js",
      "SQL"
    ],
    "techDetails": [
      "React",
      "Node.js",
      "Express",
      "PostgreSQL"
    ],
    "difficulty": "Intermediate",
    "type": "Major Project",
    "popular": true,
    "features": [
      "Aptitude, quantitative, and logical reasoning practice banks",
      "Coding challenge environment with test case validations",
      "Company-specific hiring test patterns and interview experiences",
      "Personalized progress tracker and percentile rank among peers",
      "Placement officer analytics dashboard to monitor batch readiness"
    ],
    "futureImprovements": [
      "AI-generated adaptive question recommendations",
      "Peer-to-peer mock technical interview video rooms",
      "Company-specific mock placement drives with leaderboard"
    ],
    "suitableFor": "3rd and 4th year CSE, IT, and AI & ML students wanting to build an enterprise platform relevant to their placement journey."
  },
  {
    "id": "smart-attendance-system",
    "title": "Facial Recognition Automated Attendance System",
    "description": "Automate classroom attendance using facial recognition software with real-time reporting and anti-spoofing checks.",
    "overview": "A computer vision-based attendance software system that processes classroom camera images or webcam feeds to identify enrolled students and record presence. Faculty receive instant reports without manual roll calls.",
    "category": "Computer Vision",
    "branches": [
      "CSE",
      "IT",
      "AI & ML"
    ],
    "years": [
      "3rd Year",
      "4th Year"
    ],
    "technologies": [
      "Python",
      "AI/ML",
      "React"
    ],
    "techDetails": [
      "Python",
      "OpenCV",
      "Face Recognition",
      "Flask",
      "React"
    ],
    "difficulty": "Advanced",
    "type": "Major Project",
    "popular": true,
    "features": [
      "High-accuracy face detection and 128-d face vector encoding",
      "Liveness detection to prevent photo and screen spoofing",
      "Real-time classroom multi-face detection from webcam or IP feed",
      "Automated attendance marking with timetable integration",
      "Faculty dashboard with manual correction override options"
    ],
    "futureImprovements": [
      "Multi-camera video stream processing for large auditoriums",
      "Direct integration with university ERP databases via REST APIs",
      "Mobile app for student attendance self-verification"
    ],
    "suitableFor": "3rd and 4th year CSE, IT, or AI & ML students comfortable with Python and interested in computer vision pipelines."
  },
  {
    "id": "crop-disease-detection",
    "title": "Plant Leaf Disease Detection & Remedy Engine",
    "description": "A web app that diagnoses plant and crop leaf diseases from uploaded images using deep learning CNNs and recommends remedies.",
    "overview": "An AI-powered agricultural tool that allows farmers and students to upload photos of diseased plant leaves. A trained Convolutional Neural Network (CNN) detects diseases across tomato, potato, and corn crops, and suggests treatments.",
    "category": "Computer Vision",
    "branches": [
      "CSE",
      "IT",
      "AI & ML"
    ],
    "years": [
      "3rd Year",
      "4th Year"
    ],
    "technologies": [
      "Python",
      "AI/ML"
    ],
    "techDetails": [
      "Python",
      "TensorFlow / Keras",
      "CNN",
      "FastAPI",
      "React"
    ],
    "difficulty": "Advanced",
    "type": "Major Project",
    "popular": false,
    "features": [
      "Image upload with client-side preprocessing and resizing",
      "Deep learning classification across 30+ crop disease classes",
      "Classification confidence percentage and top-3 predictions",
      "Curated organic and chemical treatment recommendations",
      "History log of past diagnoses with date and confidence metrics"
    ],
    "futureImprovements": [
      "Lightweight TensorFlow Lite model for offline mobile execution",
      "Multilingual interface support for regional languages",
      "Location-based seasonal disease outbreak alerts"
    ],
    "suitableFor": "3rd and 4th year CSE, IT, or AI & ML students interested in computer vision, deep learning, and impactful AI applications."
  },
  {
    "id": "student-mental-health-chatbot",
    "title": "Student Wellness & Mental Health Support Chatbot",
    "description": "An empathetic conversational AI chatbot offering stress management strategies, coping tips, and college counseling referrals.",
    "overview": "A conversational chatbot tailored for college students managing exam anxiety, placement stress, and academic pressure. It uses NLP sentiment and intent detection to offer supportive dialogue and recommend professional campus resources.",
    "category": "Natural Language Processing",
    "branches": [
      "CSE",
      "IT",
      "AI & ML"
    ],
    "years": [
      "3rd Year",
      "4th Year"
    ],
    "technologies": [
      "Python",
      "AI/ML",
      "React"
    ],
    "techDetails": [
      "Python",
      "NLP",
      "Transformers / NLTK",
      "FastAPI",
      "React"
    ],
    "difficulty": "Intermediate",
    "type": "Major Project",
    "popular": false,
    "features": [
      "Conversational dialogue interface with intent matching",
      "Sentiment analysis detecting escalating emotional distress",
      "Evidence-based stress reduction exercises (guided breathing, grounding)",
      "Confidential directory of campus counseling and helpline contacts",
      "Complete privacy mode with zero permanent chat storage"
    ],
    "futureImprovements": [
      "Daily mood journal and longitudinal emotional wellness tracking",
      "Voice-based conversational input and acoustic tone analysis",
      "Direct anonymous appointment booking with college psychologists"
    ],
    "suitableFor": "3rd and 4th year students interested in NLP, conversational systems, and socially conscious software."
  },
  {
    "id": "traffic-management-system",
    "title": "Computer Vision Smart Traffic Density Simulator",
    "description": "A video analytics application that computes vehicle density at 4-way intersections and dynamically optimizes traffic signal timings.",
    "overview": "A pure-software computer vision and simulation project. It accepts video feeds of traffic junctions, counts vehicles per lane using YOLO object detection, and dynamically computes optimal green light durations to prevent congestion.",
    "category": "Computer Vision",
    "branches": [
      "CSE",
      "IT",
      "AI & ML"
    ],
    "years": [
      "3rd Year",
      "4th Year"
    ],
    "technologies": [
      "Python",
      "AI/ML"
    ],
    "techDetails": [
      "Python",
      "OpenCV",
      "YOLOv8",
      "Tkinter / React",
      "SimPy"
    ],
    "difficulty": "Advanced",
    "type": "Major Project",
    "popular": false,
    "features": [
      "Real-time vehicle detection and classification (cars, buses, bikes)",
      "Lane-wise density calculation from video feeds or simulation clips",
      "Dynamic signal timing algorithm prioritizing congested corridors",
      "Emergency vehicle recognition (ambulances) with instant green bypass",
      "Live dashboard with traffic throughput graphs and wait-time metrics"
    ],
    "futureImprovements": [
      "Coordinated multi-intersection network optimization",
      "Integration with open-source road network simulators (SUMO)",
      "Carbon emission reduction estimations based on idling reduction"
    ],
    "suitableFor": "3rd and 4th year CSE and AI & ML students interested in object detection, video analytics, and algorithm optimization."
  },
  {
    "id": "student-performance-prediction",
    "title": "Student Academic Performance & Dropout Prediction System",
    "description": "A machine learning predictive model that identifies students at risk of academic failure or dropout based on historical academic data.",
    "overview": "Enables academic institutions to intervene early. Using demographic, attendance, midterm exam, and assignment data, machine learning classification algorithms identify at-risk students and highlight key contributing risk factors.",
    "category": "Data Science & Analytics",
    "branches": [
      "CSE",
      "IT",
      "AI & ML"
    ],
    "years": [
      "3rd Year",
      "4th Year"
    ],
    "technologies": [
      "Python",
      "AI/ML"
    ],
    "techDetails": [
      "Python",
      "scikit-learn",
      "Pandas",
      "FastAPI",
      "Streamlit"
    ],
    "difficulty": "Intermediate",
    "type": "Major Project",
    "popular": true,
    "features": [
      "Data preprocessing pipeline handling missing records and outliers",
      "Model comparison (Random Forest, XGBoost, Logistic Regression)",
      "Feature importance analysis explaining primary causes of academic risk",
      "Batch CSV upload for full-class semester risk assessments",
      "Early warning notifications for faculty mentors and advisors"
    ],
    "futureImprovements": [
      "Integration with live Learning Management System (LMS) logs",
      "Prescriptive recommendation engine for custom remedial coursework",
      "Student self-service dashboard showing projected final semester grades"
    ],
    "suitableFor": "3rd and 4th year students specializing in machine learning, statistical modeling, and educational data mining."
  },
  {
    "id": "phishing-url-detection-engine",
    "title": "AI-Powered Phishing & Malicious URL Detection Engine",
    "description": "A cybersecurity tool that evaluates web URLs using lexical heuristics and machine learning to flag fraudulent and phishing websites.",
    "overview": "Detects phishing links disguised as banking portals or college logins. Analyzes URL lexical structure, domain age, SSL details, and token entropy with trained classification algorithms to prevent credential theft.",
    "category": "Cybersecurity",
    "branches": [
      "CSE",
      "IT",
      "AI & ML"
    ],
    "years": [
      "3rd Year",
      "4th Year"
    ],
    "technologies": [
      "Python",
      "AI/ML"
    ],
    "techDetails": [
      "Python",
      "scikit-learn",
      "Flask / FastAPI",
      "Chrome Extension"
    ],
    "difficulty": "Intermediate",
    "type": "Major Project",
    "popular": true,
    "features": [
      "Lexical feature extraction (URL length, special characters, subdomains)",
      "Domain reputation checks using WHOIS and DNS lookup data",
      "Trained Random Forest classifier achieving >95% detection accuracy",
      "REST API endpoint for real-time URL risk assessment",
      "Lightweight browser extension demonstrating client protection"
    ],
    "futureImprovements": [
      "Webpage HTML DOM and login form analysis for zero-day phishing",
      "Deep learning recurrent model evaluating raw character sequences",
      "Real-time threat feed integration with open-source threat intelligence"
    ],
    "suitableFor": "3rd and 4th year CSE/IT students combining cybersecurity principles with machine learning pipelines."
  },
  {
    "id": "document-summarization-platform",
    "title": "Academic Research Paper & Document Summarizer",
    "description": "An NLP application that extracts key findings, methodology summaries, and bulleted takeaways from dense academic PDF papers.",
    "overview": "Helps engineering researchers and students digest lengthy research papers. Parses PDF files, analyzes textual semantics using transformer models, and generates concise abstractive and extractive summaries highlighting core contributions.",
    "category": "Natural Language Processing",
    "branches": [
      "CSE",
      "IT",
      "AI & ML"
    ],
    "years": [
      "3rd Year",
      "4th Year"
    ],
    "technologies": [
      "Python",
      "AI/ML",
      "React"
    ],
    "techDetails": [
      "Python",
      "Hugging Face Transformers",
      "BART / T5",
      "FastAPI",
      "React"
    ],
    "difficulty": "Intermediate",
    "type": "Major Project",
    "popular": true,
    "features": [
      "PDF text extraction and section-wise parsing (Abstract, Method, Conclusion)",
      "Dual summarization modes: executive bullet points or condensed paragraphs",
      "Key concept and technical keyword extraction",
      "Adjustable summary length slider with instant text regeneration",
      "Export formatted summary report to Markdown or PDF"
    ],
    "futureImprovements": [
      "Interactive Question-Answering (Q&A) on uploaded documents (RAG)",
      "Multi-document comparative synthesis across multiple papers",
      "Automatic citation and bibtex generation"
    ],
    "suitableFor": "3rd and 4th year students exploring state-of-the-art transformer NLP models and modern web frontends."
  },
  {
    "id": "college-placement-analytics-dashboard",
    "title": "College Placement Data Analytics & Visualization Platform",
    "description": "An interactive business intelligence dashboard analyzing multi-year campus placement statistics, package distributions, and recruiter trends.",
    "overview": "Provides placement cells and students with deep statistical insights into recruitment outcomes. Visualizes historical salary packages, branch-wise hiring percentages, core vs. IT trends, and recurring company preferences.",
    "category": "Data Science & Analytics",
    "branches": [
      "CSE",
      "IT",
      "AI & ML"
    ],
    "years": [
      "3rd Year",
      "4th Year"
    ],
    "technologies": [
      "Python",
      "React",
      "SQL"
    ],
    "techDetails": [
      "Python",
      "Pandas",
      "FastAPI",
      "React",
      "Recharts",
      "PostgreSQL"
    ],
    "difficulty": "Intermediate",
    "type": "Major Project",
    "popular": false,
    "features": [
      "Branch-wise placement rate, median salary, and highest CTC visualizations",
      "Company tier breakdown (Super Dream, Dream, Service-based recruitments)",
      "Skill demand trends correlated with compensation brackets",
      "Predictive trend charts forecasting upcoming recruitment season demand",
      "Exportable comprehensive placement reports for accreditation audits (NBA/NAAC)"
    ],
    "futureImprovements": [
      "Student individual offer probability calculator based on GPA & skills",
      "Alumni placement path trajectory mapping over 5 years",
      "Automated batch email reports for department heads"
    ],
    "suitableFor": "3rd and 4th year CSE/IT/AI&ML students focusing on data warehousing, analytics dashboards, and data visualization."
  },
  {
    "id": "sentiment-analysis-feedback-system",
    "title": "Student Course Feedback Sentiment Analyzer",
    "description": "An NLP analytics application that evaluates student end-semester feedback comments to gauge sentiment and flag faculty improvement areas.",
    "overview": "Helps academic administrators derive objective insights from thousands of qualitative student feedback comments. Applies sentiment classification and topic modeling to highlight course strengths, pacing issues, and teaching methodologies.",
    "category": "Natural Language Processing",
    "branches": [
      "CSE",
      "IT",
      "AI & ML"
    ],
    "years": [
      "3rd Year",
      "4th Year"
    ],
    "technologies": [
      "Python",
      "AI/ML",
      "React"
    ],
    "techDetails": [
      "Python",
      "VADER / RoBERTa",
      "LDA Topic Modeling",
      "FastAPI",
      "React"
    ],
    "difficulty": "Intermediate",
    "type": "Major Project",
    "popular": false,
    "features": [
      "Bulk CSV/Excel feedback comment ingestion with automatic anonymization",
      "Sentiment classification (Positive, Neutral, Negative) with polarity scores",
      "Topic modeling grouping feedback into Syllabus, Lab, Pace, and Assessment",
      "Word-cloud visualizations highlighting recurring student keywords",
      "Department comparative sentiment benchmarks across semesters"
    ],
    "futureImprovements": [
      "Aspect-based sentiment analysis pinpointing specific course modules",
      "Multilingual feedback support for regional mixed-language text",
      "Automated constructive advice generation for instructors"
    ],
    "suitableFor": "3rd and 4th year students interested in applied NLP, sentiment analysis, and educational business intelligence."
  },
  {
    "id": "fake-news-detection-system",
    "title": "Online Fake News & Misinformation Classifier",
    "description": "A machine learning NLP system that evaluates news article headlines and content to detect credibility scores and misinformation.",
    "overview": "Combats digital misinformation by training text classification algorithms on verified news corpuses. Users paste news article text or URLs to receive an authenticity probability score and a breakdown of sensationalist linguistic patterns.",
    "category": "Natural Language Processing",
    "branches": [
      "CSE",
      "IT",
      "AI & ML"
    ],
    "years": [
      "3rd Year",
      "4th Year"
    ],
    "technologies": [
      "Python",
      "AI/ML"
    ],
    "techDetails": [
      "Python",
      "scikit-learn",
      "TF-IDF",
      "PassiveAggressive Classifier",
      "Flask"
    ],
    "difficulty": "Intermediate",
    "type": "Major Project",
    "popular": false,
    "features": [
      "Web scraping and text extraction from news article links",
      "Text cleaning, lemmatization, and TF-IDF n-gram vectorization",
      "Binary classification (Real vs. Fake) with probability confidence metrics",
      "Sensationalist and clickbait headline detection heuristics",
      "Explanation module showing top terms influencing the classification"
    ],
    "futureImprovements": [
      "Fact-checking API integration against verified truth databases",
      "Browser extension for on-the-fly social media post verification",
      "Stance detection comparing multiple news outlets covering the same event"
    ],
    "suitableFor": "3rd Year students learning NLP feature engineering, text classification, and model deployment."
  },
  {
    "id": "handwritten-digit-document-scanner",
    "title": "Digitized Exam Marks & Optical Document Scanner",
    "description": "A computer vision tool that processes scanned exam papers, crops mark grids, and recognizes handwritten scores into spreadsheets.",
    "overview": "Automates manual marks entry for college professors. Teachers scan exam paper front covers; the software applies computer vision perspective transformation, segmenting handwritten digits and using CNNs to tabulate scores directly into an Excel sheet.",
    "category": "Computer Vision",
    "branches": [
      "CSE",
      "IT",
      "AI & ML"
    ],
    "years": [
      "3rd Year",
      "4th Year"
    ],
    "technologies": [
      "Python",
      "AI/ML",
      "React"
    ],
    "techDetails": [
      "Python",
      "OpenCV",
      "PyTorch / MNIST CNN",
      "FastAPI",
      "React"
    ],
    "difficulty": "Intermediate",
    "type": "Major Project",
    "popular": false,
    "features": [
      "Scanned document upload with automatic perspective correction",
      "Grid and boundary detection isolating mark entry cells",
      "Deep learning digit recognition trained on handwritten digits",
      "Interactive human-in-the-loop verification and manual correction UI",
      "One-click export to gradebook-compatible Excel and CSV files"
    ],
    "futureImprovements": [
      "Full handwritten student answer recognition using OCR transformers",
      "Batch processing of entire class paper stacks from scanner PDFs",
      "Automated question-by-question total verification checking for math errors"
    ],
    "suitableFor": "3rd and 4th year CSE/AI&ML students combining traditional image processing with deep learning models."
  },
  {
    "id": "campus-navigation-mobile-app",
    "title": "Interactive Campus Navigation & Building Guide App",
    "description": "A mobile software application providing indoor building maps, department directions, and faculty room finders for college campuses.",
    "overview": "Helps new students and visitors navigate sprawling college campuses. Provides interactive vector maps of college buildings, floor-by-floor room directories, lab locations, and walking route directions purely using indoor vector maps and software graph algorithms.",
    "category": "Mobile Application Development",
    "branches": [
      "CSE",
      "IT"
    ],
    "years": [
      "3rd Year",
      "4th Year"
    ],
    "technologies": [
      "Flutter",
      "JavaScript"
    ],
    "techDetails": [
      "Flutter",
      "Dart",
      "Firebase",
      "OpenStreetMap / Leaflet"
    ],
    "difficulty": "Intermediate",
    "type": "Major Project",
    "popular": true,
    "features": [
      "Interactive 2D multi-floor campus map with pinch-to-zoom",
      "Searchable directory of faculty cabins, seminar halls, and laboratories",
      "A* pathfinding algorithm providing shortest indoor walking directions",
      "Campus facility bookmarks (canteen, library, emergency clinic, parking)",
      "Offline map caching allowing navigation without active campus Wi-Fi"
    ],
    "futureImprovements": [
      "Augmented Reality (AR) camera overlay directions using ARKit/ARCore",
      "Live shuttle bus arrival countdown integration",
      "Crowd density heatmaps based on student check-in data"
    ],
    "suitableFor": "3rd and 4th year CSE/IT students specializing in cross-platform mobile development with Flutter and graph pathfinding."
  },
  {
    "id": "password-security-analyzer-audit-tool",
    "title": "Password Security & Credential Leak Audit Tool",
    "description": "A security auditing web tool that evaluates password entropy, flags dictionary vulnerabilities, and checks for breach exposure.",
    "overview": "An educational cybersecurity utility for students and administrators. Analyzes password complexity, simulates brute-force crack time estimates, tests against common dictionary patterns, and checks breach databases using k-anonymity API hashing.",
    "category": "Cybersecurity",
    "branches": [
      "CSE",
      "IT"
    ],
    "years": [
      "2nd Year",
      "3rd Year"
    ],
    "technologies": [
      "JavaScript",
      "Python"
    ],
    "techDetails": [
      "Python",
      "Flask",
      "React",
      "zxcvbn",
      "Crypto"
    ],
    "difficulty": "Intermediate",
    "type": "Mini Project",
    "popular": false,
    "features": [
      "Entropy calculation measuring password complexity and crack time",
      "Pattern matching detecting keyboard walks, dates, and common words",
      "k-Anonymity SHA-1 hash lookup checking compromised breach databases",
      "Client-side cryptographically secure strong password generator",
      "Educational guide explaining credential stuffing and password hygiene"
    ],
    "futureImprovements": [
      "Enterprise Active Directory password policy compliance checker",
      "Multi-factor authentication (TOTP) simulator and QR generator",
      "Automated breach notification alert for college email domains"
    ],
    "suitableFor": "2nd and 3rd year CSE/IT students learning cryptography, security heuristics, and safe authentication practices."
  },
  {
    "id": "cloud-file-management",
    "title": "Cloud-Based Secure File Storage & Management Platform",
    "description": "A scalable cloud storage platform for uploading, organizing, and securely sharing documents with granular access controls.",
    "overview": "A full-stack cloud storage system similar to Google Drive or Dropbox. Users organize files in hierarchical folders, share time-limited download links, and manage permissions with cloud bucket storage integration.",
    "category": "Cloud Computing",
    "branches": [
      "CSE",
      "IT"
    ],
    "years": [
      "3rd Year",
      "4th Year"
    ],
    "technologies": [
      "Node.js",
      "Cloud/DevOps",
      "React"
    ],
    "techDetails": [
      "Node.js",
      "AWS S3 / Firebase",
      "React",
      "Express",
      "JWT"
    ],
    "difficulty": "Intermediate",
    "type": "Major Project",
    "popular": false,
    "features": [
      "Direct multipart file uploads to S3-compatible cloud storage",
      "Folder hierarchy creation, nested navigation, and file tagging",
      "Time-expiring public shareable links with optional passwords",
      "Role-based access controls (Viewer vs. Editor permissions)",
      "Storage quota tracking and file type analytics per user"
    ],
    "futureImprovements": [
      "Client-side end-to-end file encryption before cloud upload",
      "Collaborative document editing using Operational Transformation",
      "Automatic media transcoding and document preview generation"
    ],
    "suitableFor": "3rd and 4th year CSE/IT students wanting to gain hands-on expertise with cloud architecture and REST API systems."
  },
  {
    "id": "sales-and-expense-forecasting-engine",
    "title": "Time-Series Sales & Expense Forecasting Engine",
    "description": "A machine learning predictive tool applying time-series models to forecast future organizational revenues and budget expenditures.",
    "overview": "Demonstrates financial time-series forecasting. Businesses or student ventures upload historic daily/monthly financial transactions; machine learning models (ARIMA, Prophet) analyze seasonal cycles and project future cash flows.",
    "category": "Data Science & Analytics",
    "branches": [
      "CSE",
      "IT",
      "AI & ML"
    ],
    "years": [
      "3rd Year",
      "4th Year"
    ],
    "technologies": [
      "Python",
      "AI/ML"
    ],
    "techDetails": [
      "Python",
      "Prophet",
      "ARIMA",
      "Pandas",
      "Streamlit"
    ],
    "difficulty": "Intermediate",
    "type": "Major Project",
    "popular": false,
    "features": [
      "CSV upload supporting multi-year transaction logs with missing dates",
      "Automatic trend, seasonality, and holiday decomposition",
      "Comparative evaluation between statistical and machine learning models",
      "Interactive forward-looking forecast charts with confidence intervals",
      "Downloadable financial projections report with variance analysis"
    ],
    "futureImprovements": [
      "Deep learning LSTM model integration for volatile market predictions",
      "Scenario simulation modeling inflation and economic shocks",
      "Automated email alerts when actual expenses exceed forecasted bounds"
    ],
    "suitableFor": "3rd and 4th year students interested in quantitative finance, time-series forecasting, and data science."
  },
  {
    "id": "student-project-collaboration-hub",
    "title": "Engineering Project Collaboration & Team Matcher",
    "description": "A workspace where students pitch capstone project ideas, discover teammates with complementary skills, and track project tasks.",
    "overview": "Solves the student challenge of finding capable teammates for final-year projects and hackathons. Students post project visions and required skill sets (frontend, backend, ML), while prospective collaborators apply with verified profiles.",
    "category": "Productivity Software",
    "branches": [
      "CSE",
      "IT"
    ],
    "years": [
      "2nd Year",
      "3rd Year"
    ],
    "technologies": [
      "React",
      "Node.js",
      "SQL"
    ],
    "techDetails": [
      "React",
      "Node.js",
      "Express",
      "PostgreSQL",
      "Socket.io"
    ],
    "difficulty": "Intermediate",
    "type": "Major Project",
    "popular": false,
    "features": [
      "Project pitch creation with required tech stack and team member quotas",
      "Skill-based teammate recommendation engine",
      "Kanban task board for admitted team members (To Do, In Progress, Done)",
      "Shared project file and repository link directory",
      "Faculty guide review and milestone endorsement system"
    ],
    "futureImprovements": [
      "Direct GitHub repository commit tracking and contribution heatmaps",
      "Built-in real-time team chat and document sharing",
      "College-wide virtual project exhibition showcase mode"
    ],
    "suitableFor": "2nd and 3rd year CSE/IT students building rich workflow and collaboration platforms."
  },
  {
    "id": "ai-mock-interview-preparation-platform",
    "title": "AI-Powered Technical Mock Interview & Feedback Platform",
    "description": "An intelligent interview preparation platform that conducts dynamic speech/text technical interviews and evaluates answer depth.",
    "overview": "Prepares engineering students for software engineering job interviews. The AI asks follow-up technical questions based on the candidate's responses, analyzes communication pace, technical correctness, and generates a detailed rubric evaluation.",
    "category": "AI & Machine Learning",
    "branches": [
      "CSE",
      "IT",
      "AI & ML"
    ],
    "years": [
      "4th Year"
    ],
    "technologies": [
      "Python",
      "AI/ML",
      "React"
    ],
    "techDetails": [
      "Python",
      "LLM / Transformers",
      "Web Speech API",
      "FastAPI",
      "React"
    ],
    "difficulty": "Advanced",
    "type": "Final Year Project",
    "popular": true,
    "features": [
      "Role-tailored interview tracks (Frontend, Backend, Data Science, DevOps)",
      "Dynamic follow-up questions generated contextually based on student answers",
      "Speech-to-text transcription with speaking pace and filler word detection",
      "Multi-dimensional rubric scoring: Technical Depth, Clarity, and Relevance",
      "Personalized interview scorecard with suggested improvement areas"
    ],
    "futureImprovements": [
      "Computer vision facial expression and eye-contact confidence tracking",
      "Interactive coding whiteboard with live automated execution",
      "Company-specific interview persona simulation (FAANG style vs. Startup)"
    ],
    "suitableFor": "Final-year CSE, IT, and AI & ML students creating advanced conversational AI applications for campus placements."
  },
  {
    "id": "intelligent-career-recommendation-engine",
    "title": "Intelligent Career Path & Tech Specialization Recommender",
    "description": "A machine learning recommendation system that maps student grades, coding skill profiles, and interests to ideal software career paths.",
    "overview": "Helps engineering graduates decide between specialized tech careers (such as Cloud Architecture, AI Engineering, DevOps, or Cybersecurity). Uses multi-criteria collaborative filtering to assess student strengths and produce custom career roadmaps.",
    "category": "Career / Placement Software",
    "branches": [
      "CSE",
      "IT",
      "AI & ML"
    ],
    "years": [
      "4th Year"
    ],
    "technologies": [
      "Python",
      "AI/ML",
      "React"
    ],
    "techDetails": [
      "Python",
      "scikit-learn",
      "Collaborative Filtering",
      "FastAPI",
      "React"
    ],
    "difficulty": "Advanced",
    "type": "Final Year Project",
    "popular": true,
    "features": [
      "Comprehensive student profile assessment across 20+ tech competencies",
      "Machine learning matching against real-world industry job role profiles",
      "Visual radar chart mapping current skills against career benchmarks",
      "Curated step-by-step learning roadmap with courses and open-source project ideas",
      "Salary trends and demand forecasts for suggested specialization paths"
    ],
    "futureImprovements": [
      "Live job market API integration fetching real-time hiring trends",
      "GitHub repository commit parsing for automated skill verification",
      "Mentorship pairing with alumni working in the recommended career track"
    ],
    "suitableFor": "Final year students building personalized recommendation systems combining machine learning with data-driven career planning."
  },
  {
    "id": "network-intrusion-detection-dashboard",
    "title": "Real-Time Network Intrusion Detection & Security Dashboard",
    "description": "An enterprise security platform that inspects network packet flows with machine learning classifiers to flag anomalies and DDoS attacks.",
    "overview": "A cybersecurity software application that captures and analyzes network packet flows. Using machine learning models trained on network traffic datasets, it detects port scans, brute force attempts, and DDoS attacks in real time.",
    "category": "Cybersecurity",
    "branches": [
      "CSE",
      "IT",
      "AI & ML"
    ],
    "years": [
      "4th Year"
    ],
    "technologies": [
      "Python",
      "AI/ML",
      "Cloud/DevOps"
    ],
    "techDetails": [
      "Python",
      "Scapy",
      "Random Forest / XGBoost",
      "FastAPI",
      "React"
    ],
    "difficulty": "Advanced",
    "type": "Final Year Project",
    "popular": true,
    "features": [
      "Network flow analysis capturing packet volume, duration, and protocol flags",
      "Supervised and unsupervised anomaly detection identifying zero-day attacks",
      "Instant threat classification (DDoS, Port Scan, Brute Force, Normal)",
      "Security Operations Center (SOC) dashboard with live alert feeds",
      "Automated firewall rule recommendation to block malicious IP sources"
    ],
    "futureImprovements": [
      "Deep packet inspection parsing payload contents for malicious scripts",
      "Distributed multi-node probe deployment using Docker containers",
      "SIEM export compatibility (Elasticsearch/Splunk format)"
    ],
    "suitableFor": "4th Year CSE and IT students interested in network security, packet analysis, and practical machine learning defense."
  },
  {
    "id": "ai-code-review-assistant",
    "title": "Automated AI Code Review & Security Vulnerability Assistant",
    "description": "A software developer tool that scans source code repositories to detect security vulnerabilities, anti-patterns, and bug risks.",
    "overview": "Acts as an automated senior code reviewer. It parses uploaded code or connects to Git repositories, runs static AST analysis combined with specialized LLM prompts to flag security flaws (SQL injection, XSS), code smells, and efficiency bottlenecks.",
    "category": "DevOps",
    "branches": [
      "CSE",
      "IT",
      "AI & ML"
    ],
    "years": [
      "4th Year"
    ],
    "technologies": [
      "Python",
      "AI/ML",
      "React"
    ],
    "techDetails": [
      "Python",
      "AST Analysis",
      "OpenAI / Claude API",
      "FastAPI",
      "React"
    ],
    "difficulty": "Advanced",
    "type": "Advanced Project",
    "popular": true,
    "features": [
      "Multi-language source code parsing (Python, JavaScript, Java)",
      "OWASP Top 10 security vulnerability detection (SQLi, XSS, Hardcoded Secrets)",
      "Code complexity scoring and refactoring suggestions",
      "Side-by-side diff view showing automated code fix proposals",
      "Exportable code audit report in Markdown and PDF"
    ],
    "futureImprovements": [
      "GitHub Pull Request webhook bot automatically commenting on PRs",
      "Automated unit test generation for detected edge-case bugs",
      "Custom enterprise rule editor enforcing organization code styles"
    ],
    "suitableFor": "4th Year students aiming to build advanced developer tools, static analyzers, and AI-assisted DevOps utilities."
  },
  {
    "id": "cloud-native-ci-cd-pipeline-dashboard",
    "title": "Cloud-Native Microservice CI/CD & Deployment Dashboard",
    "description": "A developer dashboard for orchestrating code builds, automated unit testing, container packaging, and staging deployments.",
    "overview": "Demystifies modern DevOps for academic institutions. Developers push code to trigger automated linting, test suites, Docker image building, and deployment to cloud clusters, all observable through a central web interface.",
    "category": "DevOps",
    "branches": [
      "CSE",
      "IT"
    ],
    "years": [
      "4th Year"
    ],
    "technologies": [
      "Cloud/DevOps",
      "Node.js",
      "React"
    ],
    "techDetails": [
      "Docker",
      "Kubernetes / Helm",
      "GitHub Actions",
      "Node.js",
      "React"
    ],
    "difficulty": "Advanced",
    "type": "Final Year Project",
    "popular": false,
    "features": [
      "Visual pipeline execution graph showing build, test, and deploy stages",
      "Real-time streaming console logs for each pipeline step",
      "Docker image container registry tracking build tags and image sizes",
      "Automated rollbacks on deployment health check failures",
      "Environment variable and secret management interface"
    ],
    "futureImprovements": [
      "Canary and blue-green zero-downtime deployment strategies",
      "Infrastructure as Code (IaC) provisioning using Terraform scripts",
      "Slack and Discord notifications on build status"
    ],
    "suitableFor": "Final year CSE/IT students targeting DevOps, cloud engineering, and container orchestration careers."
  },
  {
    "id": "multi-tenant-college-management-platform",
    "title": "Multi-Tenant SaaS University Management Platform",
    "description": "A multi-tenant cloud software architecture serving multiple college campuses with data isolation and customized branding.",
    "overview": "A robust software engineering project demonstrating software-as-a-service (SaaS) architecture. A single web deployment serves multiple college campuses, providing isolated databases, custom subdomains, fee portals, and academic modules.",
    "category": "Full-Stack Development",
    "branches": [
      "CSE",
      "IT"
    ],
    "years": [
      "4th Year"
    ],
    "technologies": [
      "React",
      "Node.js",
      "SQL",
      "Cloud/DevOps"
    ],
    "techDetails": [
      "React",
      "Node.js",
      "PostgreSQL (Row-Level Security)",
      "Docker",
      "AWS"
    ],
    "difficulty": "Advanced",
    "type": "Final Year Project",
    "popular": false,
    "features": [
      "Multi-tenancy architecture with tenant isolation and subdomain routing",
      "Super-admin panel managing college subscriptions and resource quotas",
      "Campus-specific role-based access control (Dean, Faculty, Student, Parent)",
      "Academic grading, timetable, and department course management",
      "Scalable containerized deployment designed for high concurrency"
    ],
    "futureImprovements": [
      "Automated tenant provisioning via cloud APIs",
      "Global multi-region read replicas for low-latency queries",
      "Multi-currency payment processing for international student fees"
    ],
    "suitableFor": "4th Year students aiming to master cloud-native SaaS patterns, relational data isolation, and scalable software architecture."
  },
  {
    "id": "automated-question-paper-generator",
    "title": "Automated Academic Question Paper Generator with Bloom's Taxonomy",
    "description": "An intelligent assessment system that compiles balanced semester examination papers adhering to Bloom's taxonomy and mark distributions.",
    "overview": "Solves the time-consuming process of manual question paper setting for universities. Uses optimization algorithms to select questions from department banks ensuring balanced difficulty, course outcome (CO) mapping, and Bloom's cognitive levels.",
    "category": "Education Technology",
    "branches": [
      "CSE",
      "IT",
      "AI & ML"
    ],
    "years": [
      "4th Year"
    ],
    "technologies": [
      "Python",
      "SQL",
      "React"
    ],
    "techDetails": [
      "Python",
      "Constraint Satisfaction Algorithms",
      "PostgreSQL",
      "React"
    ],
    "difficulty": "Advanced",
    "type": "Final Year Project",
    "popular": false,
    "features": [
      "Question repository tagged with Bloom's taxonomy levels (Remember, Apply, Analyze)",
      "Constraint satisfaction engine balancing difficulty, modules, and marks",
      "Course Outcome (CO) and Program Outcome (PO) mapping reports",
      "Instant export to ready-to-print institutional LaTeX and Word templates",
      "Zero-duplication algorithm ensuring consecutive exams do not repeat questions"
    ],
    "futureImprovements": [
      "AI question generator synthesizing novel variations from reference textbooks",
      "Formula and diagram rendering support using MathJax and TikZ",
      "Automated model answer key and rubric scheme generator"
    ],
    "suitableFor": "4th Year students building algorithmically rigorous educational software conforming to NBA engineering accreditation guidelines."
  },
  {
    "id": "secure-medical-records-sharing-portal",
    "title": "Role-Based Healthcare Record Management & Consent Portal",
    "description": "A HIPAA-conscious healthcare software platform enabling patients to store electronic health records and share access with doctors securely.",
    "overview": "Designed to demonstrate secure healthcare software development. Patients maintain digital medical histories, lab reports, and prescriptions, granting granular, time-limited cryptographic access to doctors while maintaining audit trails.",
    "category": "Healthcare Software",
    "branches": [
      "CSE",
      "IT"
    ],
    "years": [
      "4th Year"
    ],
    "technologies": [
      "React",
      "Node.js",
      "SQL",
      "Cloud/DevOps"
    ],
    "techDetails": [
      "React",
      "Node.js",
      "Express",
      "PostgreSQL",
      "AES-256 Encryption"
    ],
    "difficulty": "Advanced",
    "type": "Final Year Project",
    "popular": false,
    "features": [
      "Client-side AES-256 file encryption before cloud storage upload",
      "Granular consent management allowing patients to revoke doctor access anytime",
      "Doctor prescription builder with medication schedule generation",
      "Tamper-evident audit logs recording every file access event",
      "Emergency access override with automated audit alert notifications"
    ],
    "futureImprovements": [
      "Interoperable FHIR (Fast Healthcare Interoperability Resources) data format support",
      "DICOM medical image viewer for X-rays and MRI scans",
      "AI symptom check and preliminary specialist recommendation"
    ],
    "suitableFor": "Final-year students looking to tackle secure enterprise architecture, cryptographic data protection, and healthcare standards."
  },
  {
    "id": "ai-legal-document-clause-analyzer",
    "title": "AI Contract & Legal Document Risk Analyzer",
    "description": "An NLP legal-tech platform that extracts clauses, flags high-risk stipulations, and explains legal jargon in plain English.",
    "overview": "Helps small businesses and freelancers understand software contracts, NDAs, and service agreements. Uses natural language processing models to identify indemnification liabilities, non-compete clauses, and termination terms.",
    "category": "Natural Language Processing",
    "branches": [
      "CSE",
      "IT",
      "AI & ML"
    ],
    "years": [
      "4th Year"
    ],
    "technologies": [
      "Python",
      "AI/ML",
      "React"
    ],
    "techDetails": [
      "Python",
      "Legal-BERT",
      "Hugging Face Transformers",
      "FastAPI",
      "React"
    ],
    "difficulty": "Advanced",
    "type": "Advanced Project",
    "popular": false,
    "features": [
      "Document parsing supporting PDF, DOCX, and scanned contract text",
      "Clause categorization (Confidentiality, Liability, Termination, Payment)",
      "Risk scoring algorithm highlighting unfavorable legal commitments",
      "Plain-English simplification tool translating complex legalese",
      "Red-line comparison showing differences between contract drafts"
    ],
    "futureImprovements": [
      "Contract drafting assistant proposing standard protective amendments",
      "Jurisdiction-specific compliance verification (Indian Contract Act vs. GDPR)",
      "Digital signature integration with cryptographic timestamping"
    ],
    "suitableFor": "4th Year CSE and AI&ML students interested in specialized NLP, LegalTech applications, and high-impact document analysis."
  },
  {
    "id": "microservices-ecommerce-backend-platform",
    "title": "High-Throughput Microservices E-Commerce Backend",
    "description": "A distributed, event-driven e-commerce backend with independent services for inventory, orders, payments, and notifications.",
    "overview": "A showcase software engineering project implementing microservices architecture. Decouples an online store into autonomous services communicating over RabbitMQ event brokers and REST APIs, featuring distributed tracing and containerized deployments.",
    "category": "Full-Stack Development",
    "branches": [
      "CSE",
      "IT"
    ],
    "years": [
      "4th Year"
    ],
    "technologies": [
      "Java",
      "Cloud/DevOps",
      "SQL"
    ],
    "techDetails": [
      "Java Spring Boot",
      "RabbitMQ",
      "PostgreSQL",
      "Docker",
      "Redis"
    ],
    "difficulty": "Advanced",
    "type": "Advanced Project",
    "popular": true,
    "features": [
      "Decoupled services: Product Catalog, Order Processing, Payment, Notification",
      "Asynchronous event-driven communication via RabbitMQ message broker",
      "Distributed caching using Redis to achieve sub-50ms catalog lookups",
      "Saga pattern orchestration ensuring transactional consistency across services",
      "API Gateway managing rate limiting, authentication, and request routing"
    ],
    "futureImprovements": [
      "Kubernetes cluster deployment with horizontal pod autoscaling",
      "Distributed tracing using Jaeger and OpenTelemetry",
      "Event-sourcing architecture for full auditability of order states"
    ],
    "suitableFor": "4th Year CSE/IT students aiming to prove enterprise-level backend engineering, distributed systems, and Spring Boot microservices."
  },
  {
    "id": "real-time-fraud-detection-system",
    "title": "Real-Time Financial Transaction Fraud Detection System",
    "description": "A high-frequency financial technology tool that analyzes banking transactions with machine learning to identify fraudulent anomalies.",
    "overview": "Simulates modern banking security operations. High-speed transaction streams are evaluated in sub-second latency by an ensemble machine learning model, evaluating transaction velocity, geo-deviation, and behavioral anomaly indicators.",
    "category": "FinTech Software",
    "branches": [
      "CSE",
      "IT",
      "AI & ML"
    ],
    "years": [
      "4th Year"
    ],
    "technologies": [
      "Python",
      "AI/ML",
      "SQL"
    ],
    "techDetails": [
      "Python",
      "Kafka",
      "Isolation Forests / LightGBM",
      "PostgreSQL",
      "React"
    ],
    "difficulty": "Advanced",
    "type": "Final Year Project",
    "popular": true,
    "features": [
      "High-throughput transaction streaming and feature computation",
      "Ensemble classification handling extreme class imbalance (<0.2% fraud)",
      "Sub-second risk scoring with detailed alert trigger reasons",
      "Fraud analyst investigation portal with historical transaction maps",
      "Dynamic threshold tuning allowing risk parameter adjustments"
    ],
    "futureImprovements": [
      "Graph neural networks identifying coordinated synthetic identity rings",
      "Real-time automated card-freeze webhook dispatch",
      "Explainable AI visualizations (SHAP values) for regulatory audits"
    ],
    "suitableFor": "Final-year students passionate about FinTech, streaming data architectures (Kafka), and fraud analytics."
  },
  {
    "id": "intelligent-customer-support-agent",
    "title": "AI Multi-Channel Customer Support Automation Platform",
    "description": "An enterprise AI support platform that handles customer support tickets using retrieval-augmented generation (RAG) and intelligent routing.",
    "overview": "Reduces support ticket backlogs for tech products. Connects to company documentation and knowledge bases via vector search, generating accurate responses, and intelligently routing unresolvable tickets to appropriate human engineering teams.",
    "category": "Smart Software / Intelligent Applications",
    "branches": [
      "CSE",
      "IT",
      "AI & ML"
    ],
    "years": [
      "4th Year"
    ],
    "technologies": [
      "Python",
      "AI/ML",
      "React"
    ],
    "techDetails": [
      "Python",
      "LangChain / LlamaIndex",
      "ChromaDB",
      "FastAPI",
      "React"
    ],
    "difficulty": "Advanced",
    "type": "Final Year Project",
    "popular": false,
    "features": [
      "Knowledge base document ingestion (Markdown, HTML, PDF manuals)",
      "Vector semantic retrieval (RAG) delivering grounded, hallucination-free answers",
      "Ticket urgency detection and automated sentiment classification",
      "Smart routing engine forwarding edge cases to specialized support staff",
      "Support agent co-pilot recommending reply drafts for quick approval"
    ],
    "futureImprovements": [
      "Omnichannel integration with Zendesk, Slack, and email webhooks",
      "Self-learning feedback loop refining answers based on resolved tickets",
      "Voice support integration using realistic streaming text-to-speech"
    ],
    "suitableFor": "4th Year students specializing in modern Generative AI, Retrieval-Augmented Generation (RAG), and vector databases."
  },
  {
    "id": "distributed-task-scheduling-system",
    "title": "Fault-Tolerant Distributed Task Scheduler & Worker Queue",
    "description": "A distributed background job processing engine with leader election, heartbeat health checks, and automatic worker failure recovery.",
    "overview": "A high-performance systems programming and distributed computing project. Allows applications to dispatch computational tasks to a pool of distributed worker nodes, providing guarantees on execution, retries, and worker load balancing.",
    "category": "Cloud Computing",
    "branches": [
      "CSE",
      "IT"
    ],
    "years": [
      "4th Year"
    ],
    "technologies": [
      "Java",
      "Node.js",
      "Cloud/DevOps"
    ],
    "techDetails": [
      "Java",
      "Redis",
      "Node.js",
      "Docker",
      "REST / gRPC"
    ],
    "difficulty": "Advanced",
    "type": "Advanced Project",
    "popular": false,
    "features": [
      "Distributed task queue supporting delayed, scheduled, and priority jobs",
      "Worker node registration with heartbeat health monitoring",
      "Automatic task re-assignment upon worker node crash or disconnect",
      "Web-based administration dashboard showing worker CPU/memory loads",
      "Dead-letter queue (DLQ) for failed task inspection and re-triggering"
    ],
    "futureImprovements": [
      "Raft consensus algorithm for distributed leader election",
      "gRPC communication between coordinator and worker nodes",
      "Dynamic cloud worker node autoscaling based on queue depth"
    ],
    "suitableFor": "4th Year CSE students interested in distributed systems, operating system principles, fault tolerance, and concurrency."
  },
  {
    "id": "ai-proctored-online-exam-system",
    "title": "AI-Proctored Online Examination & Anti-Cheat Suite",
    "description": "An examination platform monitoring webcam feeds, screen focus, and audio levels to detect unauthorized aids and tab switching.",
    "overview": "A comprehensive remote proctoring solution designed for university online exams. Analyzes student video for multiple faces, absence from screen, phone detection, and background voices, compiling an integrity index report for instructors.",
    "category": "Computer Vision",
    "branches": [
      "CSE",
      "IT",
      "AI & ML"
    ],
    "years": [
      "4th Year"
    ],
    "technologies": [
      "Python",
      "AI/ML",
      "React"
    ],
    "techDetails": [
      "Python",
      "OpenCV",
      "MediaPipe",
      "WebRTC",
      "FastAPI",
      "React"
    ],
    "difficulty": "Advanced",
    "type": "Final Year Project",
    "popular": true,
    "features": [
      "Face pose estimation tracking student gaze direction away from screen",
      "Multiple person detection flagging unauthorized individuals in frame",
      "Object detection flagging mobile phones or books in video feed",
      "Audio volume and speech activity detection in candidate environment",
      "Comprehensive candidate integrity score report with timestamped violation clips"
    ],
    "futureImprovements": [
      "On-device browser-based inference using TensorFlow.js to reduce server loads",
      "Secondary smartphone camera integration for side-angle desk monitoring",
      "Automated candidate ID verification before exam unlock"
    ],
    "suitableFor": "Final-year students combining computer vision, real-time media streaming, and machine learning into an academic enterprise product."
  },
  {
    "id": "application-performance-monitoring-dashboard",
    "title": "Full-Stack Application Performance Monitoring (APM) & Log Analyzer",
    "description": "A telemetry platform collecting server metrics, API latencies, error traces, and log streams into real-time health dashboards.",
    "overview": "A Datadog-style monitoring tool tailored for student and enterprise web apps. Client applications install a lightweight middleware that captures request latencies, unhandled exceptions, and memory metrics, presenting live analytics dashboards.",
    "category": "DevOps",
    "branches": [
      "CSE",
      "IT"
    ],
    "years": [
      "4th Year"
    ],
    "technologies": [
      "Node.js",
      "Cloud/DevOps",
      "React"
    ],
    "techDetails": [
      "Node.js",
      "Express",
      "TimescaleDB / PostgreSQL",
      "React",
      "Docker"
    ],
    "difficulty": "Advanced",
    "type": "Advanced Project",
    "popular": false,
    "features": [
      "Express/FastAPI middleware capturing request duration and HTTP status codes",
      "Real-time P95, P99, and average response latency graphs",
      "Centralized error logging with stack trace capture and occurrence grouping",
      "Customizable threshold alert rules with webhook dispatch",
      "System resource tracking (CPU usage, memory footprint, active connections)"
    ],
    "futureImprovements": [
      "OpenTelemetry distributed tracing propagation across microservices",
      "AI anomaly detection flagging unusual latency spikes before outages",
      "Synthetic uptime pings from multiple global geographic regions"
    ],
    "suitableFor": "4th Year CSE/IT students focusing on site reliability engineering (SRE), observability, and high-volume timeseries databases."
  },
  {
    "id": "personalized-adaptive-learning-system",
    "title": "Personalized Adaptive Learning & Knowledge Mastery System",
    "description": "An educational technology engine that customizes learning paths and exercise difficulty dynamically based on student mastery levels.",
    "overview": "Replaces one-size-fits-all curricula with algorithmic personalization. As students solve programming or engineering problems, Item Response Theory (IRT) and knowledge-tracing models dynamically present harder or remedial materials.",
    "category": "Education Technology",
    "branches": [
      "CSE",
      "IT",
      "AI & ML"
    ],
    "years": [
      "4th Year"
    ],
    "technologies": [
      "Python",
      "AI/ML",
      "React"
    ],
    "techDetails": [
      "Python",
      "Item Response Theory (IRT)",
      "FastAPI",
      "React",
      "PostgreSQL"
    ],
    "difficulty": "Advanced",
    "type": "Final Year Project",
    "popular": true,
    "features": [
      "Dynamic knowledge-state tracing tracking mastery of individual concepts",
      "Adaptive exercise selection matching current student skill level",
      "Interactive skill tree visualization showing prerequisite knowledge chains",
      "Remedial concept micro-lessons automatically triggered upon repeated mistakes",
      "Teacher dashboard showing class-wide conceptual stumbling blocks"
    ],
    "futureImprovements": [
      "Reinforcement learning agent optimizing lifelong learning retention",
      "Automatic code challenge generation matching specific skill gaps",
      "Peer collaboration recommendation pairing struggling students with master peers"
    ],
    "suitableFor": "Final-year students passionate about cognitive science, educational data mining, and adaptive algorithm design."
  }
];

/** Filter helpers */

export const BRANCHES = ['All Branches', 'CSE', 'IT', 'AI & ML'];
export const YEARS = ['All Years', '1st Year', '2nd Year', '3rd Year', '4th Year'];
export const TYPES = [
  'All Types',
  'Lab Project',
  'Mini Project',
  'Major Project',
  'Final Year Project',
  'Advanced Project',
];
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
