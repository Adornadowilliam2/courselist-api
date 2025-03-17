export default function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  const courseList = [
    {
      id: 1,
      name: "Advanced Gas Metal Arc Welding",
      description: "This module is designed for welders who would like to take further their welding skills in groove welding of carbon steel pipes using Gas Metal Arc Welding process. Practical exercises are designed to develop manual skills necessary to produce quality groove welds on pipes in all types of welding position.",
      price: "₱10,000",
      duration: "40 hours",
      link: "https://courselist.mfi.org.ph/courses/1180",
      image: "https://media.licdn.com/dms/image/v2/C5603AQEYx5k_-qrXcQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1609910450664?e=2147483647&v=beta&t=bvrc339QHKFsD1kxuGeAwpAz3sZF9o3yXIk7OIDWNig"
    },
    {
      id: 2,
      name: "Advanced Graphic Design Using Photoshop & Illustrator (Online Course)",
      description: "An advanced short intensive course aiming to teach young individuals about the basics and importance of Graphic Designing and its practical uses in the creative and working industry.",
      price: "₱1,750",
      duration: "9 hours",
      link: "https://courselist.mfi.org.ph/courses/2655",
      image: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTo33YcutzA1p0mRjKqsm6b1B5XpKRJI9BYr5-7lCIg2UztUTdj"
    },
    {
      id: 3,
      name: "Advanced Industrial Motor Control",
      description: "The Advanced Industrial Motor Control course is designed for electrical technicians, engineers, and maintenance personnel who are responsible for designing, installing, maintaining, and troubleshooting complex motor control systems in industrial settings. This course builds upon foundational knowledge of motor control principles and focuses on advanced concepts, technologies, and applications relevant to industrial automation and control. Participants will explore advanced topics in motor control theory, learn about the latest technologies and techniques in motor control systems, and gain hands-on experience with programming, configuring, and optimizing motor control systems using industry-standard equipment and software. Emphasis will be placed on practical applications, troubleshooting methodologies, and safety considerations in industrial environments.",
      price: "₱9,000",
      duration: "48 hours",
      link: "https://courselist.mfi.org.ph/courses/65",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT70cNDrNfd0qSA8S_4bfttXBvLPaLxJG3OP9hEv1QMAIh0feB2"
    },
    {
      id: 4,
      name: "Advanced Industrial Motor Control (Pasay Branch)",
      description: "This module deals with the study of electric motors (AC and DC) and the associated control circuits. It also includes an understanding and practical use of Programmable Controllers and Variable Frequency Drives. Troubleshooting and design of motor control circuits are also given emphasis. Laboratory activities are provided to verify and practice learned principles.",
      price: "₱9,000",
      duration: "48 Hours",
      link: "https://courselist.mfi.org.ph/courses/1523",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT70cNDrNfd0qSA8S_4bfttXBvLPaLxJG3OP9hEv1QMAIh0feB2"
    },
    {
      id: 7,
      name: "Advanced MS Excel Course (Online)",
      description: "Trainees are expected to efficiently manage spreadsheets and analyze data for business presentations, data storage and analytical representation using one of the world’s most popular spreadsheet application",
      price: "₱3,500",
      duration: "8 hours",
      link: "https://courselist.mfi.org.ph/courses/2661",
      image: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSC6OyFSCCZvPDl9I0A0Vd9QBgG9mD_T3eNmGQ3_-UHy2vqLYEn"
    },
    {
      id: 8,
      name: "Advanced MS Excel Course",
      description: "Trainees are expected to efficiently manage spreadsheets and analyze data for business presentations, data storage and analytical representation using one of the world’s most popular spreadsheet application",
      price: "₱7,200",
      duration: "21 hours",
      link: "https://courselist.mfi.org.ph/courses/1753",
      image: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSC6OyFSCCZvPDl9I0A0Vd9QBgG9mD_T3eNmGQ3_-UHy2vqLYEn"
    },
    {
      id: 9,
      name: "Advanced Shielded Metal Arc Welding (Pipe Welding)",
      description: "This course focuses on advanced techniques in shielded metal arc welding (SMAW) specifically for pipe welding applications. Participants will learn about various pipe welding positions, joint designs, and the properties of different welding electrodes. The curriculum emphasizes safety practices and quality control measures. Hands-on training will enable participants to develop precision welding skills on various types of pipes and materials. By the end of the course, participants will be prepared to tackle complex pipe welding projects in various industrial settings.",
      price: "₱10,000",
      duration: "40 hours",
      link: "https://courselist.mfi.org.ph/courses/1721",
      image: "https://i.ytimg.com/vi/I1P5GuVHFQA/hq720.jpg?sqp=-oaymwE7CK4FEIIDSFryq4qpAy0IARUAAAAAGAElAADIQj0AgKJD8AEB-AH-CYAC0AWKAgwIABABGGMgYyhjMA8=&rs=AOn4CLAQ76Iel9wj6Y_iUcJcbI_M6e3nEg"
    },
    {
      id: 10,
      name: "Applied Industrial Electricity (PEE / BWIM / IE / AIMC)",
      description: "Applied Industrial Electricity focuses on the practical application of electrical principles in an industrial setting. It combines elements from electrical theory, systems, and controls, emphasizing real-world applications in industrial environments. Participants will gain hands-on experience with electrical components, safety practices, and troubleshooting techniques essential for maintaining and optimizing industrial electrical systems.",
      price: "₱31,500",
      duration: "200 Hours",
      link: "https://courselist.mfi.org.ph/courses/3081",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxP-xvKDqLljUn9myHNyR2J2DLYyyh0Kbt5Q&s"
    },
    {
      id: 11,
      name: "AutoCAD",
      description: "This course introduces the students to AUTOCAD by learning the features, commands, techniques for creating, and editing drawing. Student will be able to create 2D and 3D drawings. They will have an opportunity to work on drawings used in various technical fields, such as mechanical parts, electrical plans and schematics, architectural plans and other engineering diagrams. The participants will receive “hands-on” training and will develop the techniques that are essentials in today’s job market. They will learn on how to adapt basic technical drafting techniques to computer generated drawings of various drafting disciplines.",
      price: "₱5,800",
      duration: "60 Hours",
      link: "https://courselist.mfi.org.ph/courses/57",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUn9pJ7BttcPy4UqLi7PnlvVbTR6NtakOIJo8vkxWLGef1kaph"
    },
    {
      id: 12,
      name: "AutoCAD (Pasay Branch)",
      description: "This course introduces the students to AUTOCAD by learning the features, commands, techniques for creating, and editing drawing. Student will be able to create 2D and 3D drawings. They will have an opportunity to work on drawings used in various technical fields, such as mechanical parts, electrical plans and schematics, architectural plans and other engineering diagrams. The students will receive “hands-on” training and will develop the techniques that are essentials in today’s job market. They will learn on how to adapt basic technical drafting techniques to computer generated drawings of various drafting disciplines.",
      price: "₱5,800",
      duration: "60 Hours",
      link: "https://courselist.mfi.org.ph/courses/1499",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUn9pJ7BttcPy4UqLi7PnlvVbTR6NtakOIJo8vkxWLGef1kaph"
    },
    {
      id: 13,
      name: "AutoCAD CIVIL 3D",
      description: "AutoCAD Civil 3D course provides comprehensive training in the use of Autodesk's specialized software for civil engineering design and drafting. Participants learn to navigate the AutoCAD Civil 3D interface, create and edit essential civil objects such as points, alignments, and profiles, and develop proficiency in surface modeling for grading and earthwork calculations. The course covers key aspects of alignment and corridor design for roads and highways, as well as the creation and analysis of pipe and pressure networks for utility systems. Participants gain hands-on experience in quantity takeoff, reporting, and efficient project workflow, emphasizing best practices for data interoperability and collaboration with industry-standard formats. Throughout the course, practical exercises, real-world projects, and case studies reinforce the application of AutoCAD Civil 3D skills, ensuring participants are well-equipped for civil engineering projects in diverse professional settings.",
      price: "₱6,000",
      duration: "60 Hours",
      link: "https://courselist.mfi.org.ph/courses/3054",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_cnFgSNE4gweh-usL_dUBTWtltqWHTp46Vw&s"
    },
    {
      id: 14,
      name: "Automotive Electricity Course",
      description: "The Automotive Electricity course is designed for individuals seeking to gain a thorough understanding of electrical systems and their applications in modern vehicles. This course provides foundational knowledge and practical skills necessary for diagnosing, repairing, and maintaining automotive electrical systems. Participants will explore key concepts in automotive electricity, including wiring diagrams, circuit analysis, component functionality, and troubleshooting techniques. With a focus on hands-on learning, the course includes practical exercises and real-world scenarios to help participants develop the competence needed to work effectively with automotive electrical systems. By the end of the course, participants will be prepared to handle a wide range of electrical issues and perform essential maintenance and repairs in automotive settings.",
      price: "₱7,000",
      duration: "40 Hours",
      link: "https://courselist.mfi.org.ph/courses/3083",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThdjB1Pczp2-eJIRFbyzxOxFd5eGnysESIV3Ont6QnMfLOTgEf"
    },
    {
      id: 15,
      name: "Basic CAD/CAM",
      description: "he Basic CADCAM course introduces participants to the foundational principles and techniques of Computer-Aided Design (CAD) and Computer-Aided Manufacturing (CAM). This course provides an understanding of essential CAD design tools, modeling methods, and CAM processes used in creating and manufacturing precision components. Through hands-on exercises, students will learn to create, modify, and optimize digital designs for real-world manufacturing applications, gaining practical skills that bridge design and production.",
      price: "₱5,000",
      duration: "40 Hours",
      link: "https://courselist.mfi.org.ph/courses/62",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRVJ6X5theDmDdGihLKAyNZZBUXaaKV2Zfvw&s"
    },
    {
      id: 16,
      name: 'Basic Car Maintenance',
      description: "This course provides essential knowledge and skills for performing routine car maintenance. Participants will learn about various vehicle systems, including engines, brakes, tires, and fluids. The training emphasizes practical skills, such as oil changes, tire rotations, and brake inspections. By the end of the course, students will understand the importance of regular maintenance, how to identify potential issues, and gain confidence in performing basic automotive tasks, ensuring safe and reliable vehicle operation.",
      price: "₱5,000",
      duration: "32 Hours",
      link: 'https://courselist.mfi.org.ph/courses/22',
      image: "https://app.mfi.org.ph/uploads/?type=banner&id=22"
    },
    {
      id: 17,
      name: "Basic Gas Metal Arc Welding",
      description: "This course introduces participants to the fundamentals of gas metal arc welding (GMAW), commonly known as MIG welding. Students will learn about the principles of GMAW, equipment setup, and welding techniques. The curriculum includes hands-on practice, enabling learners to weld various materials and thicknesses. By the end of the course, participants will be equipped to perform basic MIG welding tasks safely and effectively, laying the groundwork for more advanced welding techniques. ",
      price: "₱10,000",
      duration: "40 Hours",
      link: "https://courselist.mfi.org.ph/courses/1722",
      image: "https://i.ytimg.com/vi/aWIxotekoXw/sddefault.jpg"
    },
    {
      id: 18,
      name: "Basic Shielded Metal Arc Welding",
      description: 'This course provides an introduction to shielded metal arc welding (SMAW), commonly known as stick welding. Participants will learn the fundamentals of SMAW, including equipment setup, electrode selection, and welding techniques. The course emphasizes hands-on practice, allowing participants to perform basic welding tasks on various materials. By the end of the course, participants will have the skills necessary to execute fundamental SMAW processes safely and effectively. ',
      price: "₱10,000",
      duration: "40 Hours",
      link: 'https://courselist.mfi.org.ph/courses/1719',
      image: " https://i.ytimg.com/vi/I1P5GuVHFQA/maxresdefault.jpg"
    },
    {
      id: 19,
      name: "Basics Of Industrial Automation (Sensorics And FICS)",
      description: "This course offers an essential foundation in industrial automation, focusing on integrating sensors, control systems, and automation technologies used in modern industrial settings. Participants will explore the principles of industrial sensors, control circuit design, programmable logic controllers (PLCs), and electro-pneumatics. Through hands-on activities, participants will learn to implement, maintain, and troubleshoot automation systems while ensuring system safety and efficiency.",
      price: "₱11,000",
      duration: "70 Hours",
      link: "https://courselist.mfi.org.ph/courses/3244",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQe6qnEDjXePB4r8C4Feewd1cQjvyMiBVeOuQ&s"
    },
    {
      id: 20,
      name: "Big Data Analytics Using Spark (Programming)",
      description: "This course covers the fundamentals of Big Data using Spark. Spark is a “fast cluster computing framework” for Big Data Processing. Participants will be exposed to various libraries in Spark for Data Processing and Machine Learning with various datasets. ",
      price: "₱18,956",
      duration: "16 Hours",
      link: "https://courselist.mfi.org.ph/courses/3000",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFY8ctx5wz-yML908H4QhDasNk0xiymZdFBw&s"
    },
    {
      id: 21,
      name: 'Building Wiring Installation And Maintenance',
      description: "The Building Wiring Installation and Maintenance Training course provides participants with comprehensive knowledge and practical skills required for safe and efficient electrical wiring systems in residential, commercial, and industrial buildings. Participants will learn fundamental principles, regulations, and best practices in building wiring, enabling them to plan, install, troubleshoot, and maintain electrical systems effectively. ",
      price: "₱9,000",
      duration: "64 Hours",
      link: "https://courselist.mfi.org.ph/courses/56",
      image: "https://github.com/Adornadowilliam2/mfi-media/blob/master/Screenshot%202025-02-10%20at%2010-39-18%20MFI%20Polytechnic%20Institute%20Inc.%20Online%20Course%20List%20Beyond%20Skills%20A%20Better%20Life.png?raw=true"
    },
    {
      id: 22,
      name: "BUILDING WIRING INSTALLATION AND MAINTENANCE (ORANGE AMBER INC.)",
      description: "The Building Wiring Installation and Maintenance course by Orange Amber Inc. focuses on equipping students with the essential skills for installing, maintaining, and troubleshooting electrical wiring systems in residential, commercial, and industrial buildings. The course covers topics such as electrical safety, wiring diagrams, circuit installations, power distribution, and maintenance techniques. Students will gain hands-on experience, ensuring they are prepared for real-world challenges in electrical wiring and maintenance. Ideal for aspiring electricians, this course prepares participants for work in various building environments while emphasizing industry standards and safety protocols.",
      price: "₱10,384",
      duration: "60 Hours",
      link: "https://courselist.mfi.org.ph/courses/3189",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSihM3w61QN0CSgsuz7jWZetSJGtJQMH4enTg&s"
    },
    {
      id: 23,
      name: "BUILDING WIRING INSTALLATION AND MAINTENANCE (PASAY BRANCH)",
      description: "This module deals with the understanding of light and power circuits in residential/commercial units. It includes topics regarding wiring systems, lighting systems, power wiring systems, PEC regulations on light and power wiring systems. Laboratory activities are provided to verify, and practice learnedprinciples. ",
      price: "₱8,500",
      duration: "60 Hours",
      link: "https://courselist.mfi.org.ph/courses/1500",
      image: "https://douglaselectric.us/wp-content/uploads/2022/07/electrical-preventative-maintenance.jpg"
    },
    {
      id: 24,
      name: "Calibration For Process Instrumentation (CPI)",
      description: "This course provides essential training in the calibration of process instrumentation used in various industries. Participants will learn about different types of instruments, calibration techniques, and standards. The course emphasizes hands-on experience, enabling students to perform calibrations accurately and understand the importance of maintaining instrument accuracy for process efficiency. By the end of the course, students will be equipped to ensure compliance with industry standards and improve overall process reliability. ",
      price: "₱9,500",
      duration: "35 Hours",
      link: 'https://courselist.mfi.org.ph/courses/35',
      image: "https://github.com/Adornadowilliam2/mfi-media/blob/master/Screenshot%202025-02-10%20at%2010-47-01%20MFI%20Polytechnic%20Institute%20Inc.%20Online%20Course%20List%20Beyond%20Skills%20A%20Better%20Life.png?raw=true"
    },
    {
      id: 25,
      name: "CCNAv7: Enterprise Networking, Security, And Automation",
      description: "CCNAv7: Enterprise Networking, Security, and Automation (ENSA) describes the architecture, components, operations, and security to scale for large, complex networks, including wide area network (WAN) technologies. The course emphasizes network security concepts and introduces network virtualization and automation. Students learn how to configure, troubleshoot, and secure enterprise network devices and understand how application programming interfaces (API) and configuration management tools enable network automation. ",
      price: "₱9,500",
      duration: '70 Hours',
      link: "https://courselist.mfi.org.ph/courses/2601",
      image: "https://github.com/Adornadowilliam2/mfi-media/blob/master/Screenshot%202025-02-10%20at%2010-48-41%20MFI%20Polytechnic%20Institute%20Inc.%20Online%20Course%20List%20Beyond%20Skills%20A%20Better%20Life.png?raw=true"
    },
    {
      id: 26,
      name: "CCNAv7: Switching, Routing, And Wireless Essentials",
      description: "CCNAv7: Switching, Routing, and Wireless Essentials (SRWE) covers the architecture, components, and operations of routers and switches in small networks and introduces wireless local area networks (WLAN) and security concepts. Students learn how to configure and troubleshoot routers and switches for advanced functionality using security best practices and resolve common issues with protocols in both IPv4 and IPv6 networks.",
      price: "₱9,500",
      duration: "70 Hours",
      link: 'https://courselist.mfi.org.ph/courses/2600',
      image: "https://github.com/Adornadowilliam2/mfi-media/blob/master/Screenshot%202025-02-10%20at%2010-48-41%20MFI%20Polytechnic%20Institute%20Inc.%20Online%20Course%20List%20Beyond%20Skills%20A%20Better%20Life.png?raw=true"
    },
    {
      id: 27,
      name: "CCTV Configuration, Maintenance & Repair",
      description: "This course deals on the preparation, installation, configuration and troubleshooting CCTV Surveillance System. This includes CCTV system components, functionality, installation and specifications. It also provides understanding of configuration techniques and instructions that will assist the participant in successfully configuring Digital Video Recorder (DVR)/ Network Video Recorder system of various brands and models. Hands-on activities on drafting/designing/lay outing, installation, configuration, and testing of CCTV Surveillance System are provided.",
      price: "₱6,500",
      duration: "24 Hours",
      link: "https://courselist.mfi.org.ph/courses/1165",
      image: "https://media.istockphoto.com/id/673967530/photo/security-camera-setting.jpg?s=612x612&w=0&k=20&c=6-RwuEsTKpApknBoyq1xc41kfrsn2r_BUs6bamDpV6M="
    },
    {
      id: 28,
      name: "CISCO IT Essentials: PC Hardware And Software",
      description: "This course provides a comprehensive introduction to the IT industry and in-depth exposure to personal computers, hardware, and operating systems. Students learn how various hardware and software components work and best practices in maintenance, safety, and security. Through hands-on lab activities, students learn how to assemble and configure computers, install operating systems and software, and troubleshoot hardware and software issues.",
      price: "₱9,400",
      duration: "70 Hours",
      link: 'https://courselist.mfi.org.ph/courses/1115',
      image: "https://www.cisco.com/c/en/us/solutions/cisco-on-cisco/jcr:content/Grid/category_atl/layout-category-atl/blade_3d89/bladeContents2/tile.img.jpg/1637334980511.jpg"
    },
    {
      id: 29,
      name: "CNC Milling Programming",
      description: "This course offers comprehensive training in CNC (Computer Numerical Control) milling programming techniques. Participants will learn to interpret technical drawings, develop CNC programs, and understand machine operation. The curriculum emphasizes hands-on practice with CNC machines, enabling participants to create precise components through effective programming. By the end of the course, students will have the skills to set up, program on CNC milling machines confidently, preparing them for careers in manufacturing and machining.",
      price: "₱4,800",
      duration: "40 Hours",
      link: "https://courselist.mfi.org.ph/courses/64",
      image: "https://images.ctfassets.net/q2hzfkp3j57e/6CIAwMrzUsQkeeCqEUoScG/65edd550b5784984ec573836a4e4116f/cnc-milling-1.webp?w=1600&h=1200&fm=jpg&q=82"
    },
    {
      id: 30,
      name: "Creative Design With Canva And AI Integration (Online Learning)",
      description: "This short course aims to empower participants with the skills to create stunning visual content using Canva, while also exploring the exciting integration of artificial intelligence (AI) in design. From basic graphic design principles to leveraging AI tools for enhanced creativity, this course is designed for beginners and intermediate users alike.",
      price: "₱7,000",
      duration: "30 Hours",
      link: "https://courselist.mfi.org.ph/courses/3047",
      image: "https://images.ctfassets.net/kftzwdyauwt9/bcyEWNucFNbUsrKs9mTHf/28f330217e84323f4804a1380ffa59d2/3.jpg?w=3840&q=90&fm=webp"
    },
    {
      id: 31,
      name: "Cyber Security Basics",
      description: "An introductory cybersecurity course provides foundational knowledge of key concepts, practices, and tools to defend against cyber threats. It serves as the first step toward becoming a cybersecurity professional, covering essential technologies and exploring various fields within cybersecurity.",
      price: "₱7,500",
      duration: "40 Hours",
      link: "https://courselist.mfi.org.ph/courses/3231",
      image: "https://t4.ftcdn.net/jpg/02/45/63/69/360_F_245636933_kY23ohGptK5t6n8wGSXIgLgVXWeHJRct.jpg"
    },
    {
      id: 32,
      name: "DATA Analysis Using Excel (Non Programming)",
      description: "The Data Analysis for Excel workshop is to familiarize the participants with the fundamentals of how to manage, transform and analyze data using the various functions and the power of Microsoft Excel. Microsoft Excel is one of the most popular applications for data analysis. Equipped with built-in pivot tables, they are without a doubt the most sought-after analytic tool available. It is an all-in-one data management software that allows you to easily import, explore, clean, analyze, and visualize your data.",
      price: "₱19,746",
      duration: "16 Hours",
      link: "https://courselist.mfi.org.ph/courses/2993",
      image: "https://media.geeksforgeeks.org/wp-content/uploads/20230115090022/data1.JPG"
    },
    {
      id: 33,
      name: "DATA Analysis Using Power BI (Non Programming)",
      description: "Power BI is a business analytics service by Microsoft. It aims to provide interactive visualizations and business intelligence capabilities with an interface simple enough for end users to create their own reports and dashboards.",
      price: "₱19,746",
      duration: "16 Hours",
      link: "https://courselist.mfi.org.ph/courses/2994",
      image: "https://www.excelchamp.net/wp-content/uploads/2023/07/powerbi-1_edited-1-768x4451-1.jpg"
    },
    {
      id: 34,
      name: "DATA Analysis Using Tableau",
      description: "Tableau is a powerful and fastest-growing data visualization tool used in the Business Intelligence Industry. It helps in simplifying raw data into a very easily understandable format.",
      price: "₱19,746",
      duration: "16 Hours",
      link: "https://courselist.mfi.org.ph/courses/2995",
      image: "https://vtricks.in/lms/public/frontend/infixlmstheme/img/blog/Data-analysis-using-tableau.jpg"
    },
    {
      id: 35,
      name: "DATA Analytics Using Python (Programming)",
      description: "Participants will be taught to use and taken through the key libraries for data ingestion and manipulation, exploratory data analysis, model building and data visualization as well as the basic statistics knowledge required to understand the concepts in the latter workshops.",
      price: "₱15,796",
      duration: "16 Hours",
      link: "https://courselist.mfi.org.ph/courses/2997",
      image: "https://i.ytimg.com/vi/GPVsHOlRBBI/maxresdefault.jpg"
    },
    {
      id: 36,
      name: "DATA Collection And Analysis (Non Programming)",
      description: "Learn about the various Data Collection Frameworks, Modes & Methods of Data Collection, Handling Missing Data and various other techniques to ensure data is well established for analysis.",
      price: "₱17,771",
      duration: "16 Hours",
      link: "https://courselist.mfi.org.ph/courses/2991",
      image: "https://www.questionpro.com/blog/wp-content/uploads/2018/08/data-collection.jpg"
    },
    {
      id: 37,
      name: "DATA Literacy (Non Programming)",
      description: "Being data literate doesn't require becomming an expert in statistic, we have identified four personas for skills needed in different job roles, and tailored our courses to strengthen each one. This course is designed to help users gainan understanding of data literacy and cuture, learn about these concepts and their roles in today's world of data, and help them understand why this information is important in the world today.",
      price: "₱15,796",
      duration: "16 Hours",
      link: "https://courselist.mfi.org.ph/courses/2990",
      image: "https://miro.medium.com/v2/resize:fit:1400/0*rONRlV7zf1ZB2Lq6"
    },
    {
      id: 38,
      name: "DATA Mining (Non Programming)",
      description: "The process of extracting and discovering patterns in large data sets involving methods at the intersection of machine learning, statistics, and database systems. Appraise the application of data analytics in a given context",
      price: "₱17,771",
      duration: "16 Hours",
      link: 'https://courselist.mfi.org.ph/courses/2992',
      image: "https://www.netsuite.com/portal/assets/img/business-articles/data-warehouse/social-data-mining.jpg?v2"
    },
    {
      id: 39,
      name: "Diesel Engine Mechanic",
      description: "This course provides comprehensive training on diesel engine operation, maintenance, and repair. Participants will learn about the components of diesel engines, including fuel systems, lubrication, and exhaust systems. The program emphasizes hands-on experience with diagnostic tools and troubleshooting techniques. By the end of the course, students will have the skills necessary to perform routine maintenance, diagnose engine issues, and execute effective repair strategies, preparing them for a successful career in diesel mechanics.",
      price: "₱7,000",
      duration: "56 Hours",
      link: "https://courselist.mfi.org.ph/courses/21",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeJKP_FbN-PWUgJLv4FYvqCQCvNARto9pplA&s"
    },
    {
      id: 40,
      name: "Docker Fundamentals",
      description: "In the age of rapid web application deployment, containernization is one of the modern technologies that provide seamless packaging and deployment of application that minimizes issues related to deployment compared to traditional deployment setups. Docker is one of the leading containernization technologies that powers most organization that utilizes rapid application deployment strategies, including but not limited to web applications and standalone applications.",
      price: "₱4,500",
      duration: "30 Hours",
      link: "https://courselist.mfi.org.ph/courses/3067",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-xT30qQWArYexyyFgcvQIUvlmS6KPe8Ca-w&s"
    },
    {
      id: 41,
      name: "Electrical Control In Advance System - IE & AIMC (Pasay Branch)",
      description: "The Electrical Control in Advance System - IE & AIMC refers to a sophisticated and innovative system designed to manage and monitor electrical control processes within various industrial and manufacturing settings. This system integrates advanced electrical control technologies with the capabilities of Instrumentation Engineering (IE) and Automation & Instrumentation Control (AIMC).",
      price: "₱18,000",
      duration: "96 Hours",
      link: "https://courselist.mfi.org.ph/courses/1809",
      image: "https://processequipmentandcontrols.com/wp-content/uploads/2023/10/industrial-electrical-systems-4-768x451-1.jpg"
    },
    {
      id: 42,
      name: "ELECTRICAL CONTROL In ADVANCE SYSTEM (IE - AIMC)",
      description: "The Electrical Control in Advanced System (IE - AIMC) is an integrated and cutting-edge solution designed to enhance electrical control and automation in modern industrial applications. This system combines Instrumentation Engineering (IE) and Automation & Instrumentation Control (AIMC) to provide seamless and efficient management of electrical processes, optimizing performance, reliability, and safety.",
      price: "₱18,000",
      duration: "96 Hours",
      link: "https://courselist.mfi.org.ph/courses/3042",
      image: "https://processequipmentandcontrols.com/wp-content/uploads/2023/10/industrial-electrical-systems-4-768x451-1.jpg"
    },
    {
      id: 43,
      name: "Electrical Control Installation And Troubleshooting ( IE & ECWIT )",
      description: "The Electrical Control Installation and Troubleshooting course offers comprehensive training on the installation, maintenance, and troubleshooting of electrical control systems used in industrial environments. Emphasizing practical skills and problem-solving techniques, this course covers a wide range of topics from basic control circuits to advanced control systems.",
      price: "₱18,000",
      duration: "96 Hours",
      link: "https://courselist.mfi.org.ph/courses/3070",
      image: "https://images.squarespace-cdn.com/content/v1/5cc9d678797f74514e09078f/1623355803065-NDB9Y9WUO8K6XYXFE5YP/mission-valley-electrician.jpg"
    },
    {
      id: 44,
      name: "Electrical Control Installation Troubleshooting - IE & ECWIT (Pasay Branch)",
      description: "This module deals with the fundamental concepts of electrical technology. It includes a comprehensive coverage of electrical topics such as safety, electrical instruments, blueprint reading, electrical machines, electrical controls, and troubleshooting. This module also concentrates on motor controls and its applications. Its strength lies on the development of actual wiring skills by doing the wiring activities using a panel board. PLC, VFD, and Digital Controllers will be used to install motor controls on a NEMA standard panel board. Laboratory activities are provided to verify and practice learned principles.",
      price: "₱17,300",
      duration: "96 Hours",
      link: "https://courselist.mfi.org.ph/courses/1810",
      image: "https://images.squarespace-cdn.com/content/v1/5cc9d678797f74514e09078f/1623355803065-NDB9Y9WUO8K6XYXFE5YP/mission-valley-electrician.jpg"
    },
    {
      id: 45,
      name: "Electrical Control On Advance System ( IE & AIMC)",
      description: "The Electrical Control on Advanced Systems course delves into the complexities of modern electrical control systems, including advanced control technologies, integration, and optimization techniques. Designed for professionals with a foundational understanding of electrical control systems, this course covers concepts and practical applications in advanced industrial environments.",
      price: "₱18,000",
      duration: "96 Hours",
      link: "https://courselist.mfi.org.ph/courses/3069",
      image: "https://images.squarespace-cdn.com/content/v1/5cc9d678797f74514e09078f/1623355803065-NDB9Y9WUO8K6XYXFE5YP/mission-valley-electrician.jpg"
    },
    {
      id: 46,
      name: "Electrical Control Wiring Installation And Troubleshooting",
      description: "The Electrical Control Wiring Installation and Troubleshooting  course provides participants with essential knowledge and practical skills needed to effectively install and wire electrical control panels used in industrial and commercial applications. This course covers fundamental concepts, techniques, and safety considerations specific to the assembly, wiring, and installation of control panels. Participants will gain hands-on experience through practical exercises and simulations, preparing them to execute control panel wiring projects competently and safely.",
      price: "₱9,000",
      duration: "48 Hours",
      link: "https://courselist.mfi.org.ph/courses/58",
      image: "https://i.ytimg.com/vi/c6V8EKrJX28/maxresdefault.jpg"
    },
    {
      id: 47,
      name: "Electrical Control Wiring Installation And Troubleshooting (Pasay Branch)",
      description: "This module primarily concentrates on electrical controls and its applications. Its strength lies on the development of actual wiring skills by doing the wiring activities using a panel board.  ",
      price: "₱8,300",
      duration: "48 Hours",
      link: "https://courselist.mfi.org.ph/courses/1524",
      image: "https://i.ytimg.com/vi/c6V8EKrJX28/maxresdefault.jpg"
    },
    {
      id: 48,
      name: "Electrical Wiring Installation ( BWIM / IE)",
      description: "The Electrical Wiring Installation course provides foundational and advanced knowledge in the installation of electrical wiring systems. It covers essential concepts, installation techniques, safety standards, and troubleshooting practices required for effective and compliant electrical wiring.",
      price: "₱18,000",
      duration: "112 Hours",
      link: "https://courselist.mfi.org.ph/courses/3068",
      image: "https://www.electricaltechnology.org/wp-content/uploads/2012/11/Automatic-UPS-Inverter-System-Wiring-Diagram-for-Home-or-Office-using-one-Live-Wire-390x220.png"
    },
    {
      id: 49,
      name: "Electrical Wiring Installation - BWIM & IE (Pasay Branch)",
      description: "This module deals with the understanding of light and power circuits in residential/commercial units. It includes topics regarding wiring systems, lighting systems, power wiring systems, PEC regulations on light and power wiring systems.  This module also deals with the fundamental concepts of electrical technology.  It includes a comprehensive coverage of electrical topics such as safety, electrical instruments, blueprint reading, electrical machines, electrical and motor controls, and troubleshooting. Laboratory activities are provided to verify and practice learned principles.",
      price: "₱17,000",
      duration: "108 Hours",
      link: "https://courselist.mfi.org.ph/courses/1503",
      image: "https://www.electricaltechnology.org/wp-content/uploads/2012/11/Automatic-UPS-Inverter-System-Wiring-Diagram-for-Home-or-Office-using-one-Live-Wire-390x220.png"
    },
    {
      id: 50,
      name: "Electro-Hydraulic Industrial Control",
      description: "This course provides an in-depth exploration of electro-hydraulic systems used in industrial control applications. It covers the principles, components, and control strategies associated with hydraulic systems integrated with electrical control mechanisms. Participants will gain hands-on experience in designing, analyzing, and troubleshooting electro-hydraulic systems, preparing them for practical applications in manufacturing, automotive, aerospace, and other industries. ",
      price: "₱7,000",
      duration: "21 Hours",
      link: "https://courselist.mfi.org.ph/courses/1703",
      image: "https://www.axcontrol.com/blog/wp-content/uploads/2022/12/AXControlInc-194907-Electro-Hydraulic-Control-blogbanner1.jpg"
    },
    {
      id: 51,
      name: "Electro-Pneumatics (EP)",
      description: "This course deals with the study of the design, function and applications of various electro-pneumatic elements commonly used in industry. It presents the different electro-pneumatic symbols and explains how they are used in schematic diagrams in accordance with ANSI, DIN and ISO standards. Sufficient time is allocated for hands-on exercises to achieve hook-up and troubleshooting skills. ",
      price: "₱7,250",
      duration: "28 Hours",
      link: "https://courselist.mfi.org.ph/courses/2839",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYlMMb0wBzJn3rcr7ATm4thqROZV21AHpvZQ&s"
    },
    {
      id: 52,
      name: "ELECTRO-PNEUMATICS (PASAY BRANCH)",
      description: "This course deals with the study of the design, function and applications of various electro-pneumatic elements commonly used in industry. It presents the different electro-pneumatic symbols and explains how they are used in schematic diagrams in accordance with ANSI, DIN and ISO standards. Sufficient time is allocated for hands-on exercises to achieve hook-up and troubleshooting skills. ",
      price: "₱6,500",
      duration: "30 Hours",
      link: "https://courselist.mfi.org.ph/courses/1507",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYlMMb0wBzJn3rcr7ATm4thqROZV21AHpvZQ&s"
    },
    {
      id: 53,
      name: "Electronic Fuel Injected System",
      description: "This course focuses on the fundamentals and operation of electronic fuel injection (EFI) systems in modern vehicles. Participants will learn about the components, diagnostic procedures, and maintenance techniques related to EFI. The course covers fuel delivery, air-fuel mixture management, and the role of sensors and control modules. Hands-on exercises will enhance troubleshooting skills, enabling technicians to efficiently diagnose and resolve EFI-related issues. This course is essential for anyone aiming to specialize in automotive fuel systems.",
      price: "₱5,000",
      duration: "40 Hours",
      link: "https://courselist.mfi.org.ph/courses/3116",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfRE291CkZMKchEIlLK9CjqpuvK34O8JNG8w&s"
    },
    {
      id: 54,
      name: "Essential Inputs For Urban Food Gardening (Hands-on) At MFI Pasig ",
      description: "Production of food crops and its complementary production of natural fertilizers at home in urban areas present many benefits for urban dwellers as well as to the environment. Home grown fruits and vegetables the natural way can help ensure food sufficiency while recycling of fruit and vegetable trimmings into natural garden inputs promotes chemical-free fresh produce while benefiting the environment and reducing the carbon footprint of fresh food consumed in the city. This course covers the hands-on preparation of natural taste enhancer Fermented Fruit Juice (FFJ), naturan growth enhancer Fermented Plant Juice (FPJ), Fish Amino Acid (FAA) and natural calcium phosphate micro nutrients (Calphos). Pre-fermented concoctions and extracts for harvesting of extracts will add to the hands on experence in handlng inputs to nourish crops.",
      price: "₱699",
      duration: "4 Hours",
      link: 'https://courselist.mfi.org.ph/courses/3134',
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUndLd_kzLDnXOySmxm5KpJAz6tZe5t1UPQw&s"
    },
    {
      id: 55,
      name: "Essentials Of Industrial Electronics ",
      description: "The Industrial Electronics Essentials course is designed to provide participants with an in-depth understanding of electronic systems and components critical to industrial applications. This course encompasses a broad spectrum of topics, ranging from foundational principles to advanced applications, including electronic circuits and control systems. Participants will engage with the integration and practical use of electronic devices and systems in diverse industrial settings, emphasizing their significance in optimizing production processes. Through a combination of theoretical instruction and hands-on laboratory exercises, learners will gain valuable practical skills and experience real-world scenarios that enhance their problem-solving abilities. This course prepares participants to meet the challenges of modern industrial environments with confidence and competence. ",
      price: "₱7,500",
      link: "https://courselist.mfi.org.ph/courses/890",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQm6X7XWp0iZCWtz82Vqy7YpmPgy3cdlcvLxQ&s"
    },
    {
      id: 56,
      name: "Fiber Optics Technology",
      description: "This course aims to equip participants with essential knowledge and practical skills in fiber optics technology, aligning with current industry practices and standards. Participants will explore different types of fiber optic cables and connectors, as well as the tools necessary for installation. The course includes hands-on training in installation methods, termination procedures, and splicing techniques. Additionally, participants will learn how to test installed fiber optic cables to meet established quality standards, ensuring their readiness for use in various applications. ",
      price: "₱9,000",
      duration:"24 hours",
      link: 'https://courselist.mfi.org.ph/courses/1740',
      image: "https://www.nai-group.com/wp-content/uploads/2018/09/shutterstock_526546213.jpg"
    },
    {
      id: 57,
      name: "Flux Cored Arc Welding",
      description: "This course introduces participants to flux cored arc welding (FCAW), a versatile and efficient welding process. Participants will learn the principles of FCAW, including equipment setup, filler metal selection, and welding techniques. The course emphasizes hands-on training, enabling learners to perform welding tasks on various materials and thicknesses. By the end of the course, participants will be equipped to execute basic FCAW operations safely and effectively, preparing them for applications in various industrial environments. ",
      price: "₱10,000",
      duration: "40 Hours",
      link: "https://courselist.mfi.org.ph/courses/2083",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLpir6hYv8oIetE_szdmRk_3EnlVBs5W5RuQ&s"
    },
    {
      id: 58,
      name: "Full-stack Development Laravel + React (Hybrid Teaching Modality)",
      description: "is a comprehensive course designed to equip students with the skills needed to build dynamic web applications. The course covers Laravel for backend development, React for frontend development, and API integration between the two. Key topics include authentication, database management, state management, and deployment. Through hands-on projects and real-world applications, students will gain practical experience in full-stack development, preparing them for professional roles in web development.",
      price: "₱36,000",
      duration: "240 Hours",
      link: "https://courselist.mfi.org.ph/courses/3064",
      image: "https://miro.medium.com/v2/resize:fit:1024/0*oUyjZH6_leRq64sQ.png"
    },
    {
      id: 59,
      name: "Full-stack Web Development With Python (Hybrid Teaching Modality)",
      description: "Full-Stack Web Development aims to equip students with the knowledge and skills to build, manage, and deploy web applications across the front-end (client-side) and back-end (server-side) layers. *Hybrid Teaching Modality * is an educational model in which some students attend a lecture or seminar in-person as normal, while others join virtually from home. Lecturers therefore teach remote and in-person students at the same time using tools like Teams or Zoom, alongside the full range of digital tools at MFI. ",
      price: "₱18,000",
      duration: "120 Hours",
      link: "https://courselist.mfi.org.ph/courses/3201",
      image: "https://media.geeksforgeeks.org/wp-content/uploads/20240415204701/How-to-Become-a-Python-Full-Stack-Developer.png"
    },
    {
      id: 60,
      name: "Fundamentals Of Electronics Troubleshooting",
      description: "This course offers a comprehensive exploration of electronics troubleshooting, combining both technical knowledge and practical skills. Participants will learn to gather and analyze symptoms to identify electronic faults effectively. The course will cover essential troubleshooting techniques, including cold check and hot check methods. In addition, students will examine various electronic diagrams, understanding their uses and functions. The course will also introduce commonly used troubleshooting and servicing instruments, equipping participants with the tools needed for efficient electronics repair and maintenance. ",
      price: "₱6,500",
      duration: "35 Hours",
      link: "https://courselist.mfi.org.ph/courses/792",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYyY77DVwG4ipvsxLCwbMdx_IDhkjo-bzXDw&s"
    },
    {
      id: 61,
      name: "Fundamentals Of Motor Controls  (Online Course)",
      description: "This course offers a comprehensive exploration of electronics troubleshooting, combining both technical knowledge and practical skills. Participants will learn to gather and analyze symptoms to identify electronic faults effectively. The course will cover essential troubleshooting techniques, including cold check and hot check methods. In addition, students will examine various electronic diagrams, understanding their uses and functions. The course will also introduce commonly used troubleshooting and servicing instruments, equipping participants with the tools needed for efficient electronics repair and maintenance. ",
      price: "₱4,000",
      duration: "21 Hours",
      link: "https://courselist.mfi.org.ph/courses/792",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYyY77DVwG4ipvsxLCwbMdx_IDhkjo-bzXDw&s"
    },
    {
      id: 62,
      name: "Gas Engine Mechanic",
      description: "This course offers comprehensive training on gas engine operation, maintenance, and repair. Participants will learn about the various components of gas engines, including fuel systems, ignition systems, and emissions controls. The program includes hands-on experience with diagnostic tools and troubleshooting techniques. By the end of the course, students will be equipped to perform routine maintenance, diagnose issues, and implement effective repair strategies, preparing them for a successful career in gas engine mechanics. ",
      price: "₱7,000",
      duration: "60 Hours",
      link: "https://courselist.mfi.org.ph/courses/20",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0g1pgog7uO4ygbpB9ZOM2YdmGhIZLCc4Xug&s"
    },
    {
      id: 63,
      name: "Gas Tungsten Arc Welding (Plate Welding)",
      description: "This Gas Tungsten Arc Welding (GTAW) - Plate Welding course offers in-depth training on the techniques and principles of GTAW, also known as TIG (Tungsten Inert Gas) welding, focused specifically on plate welding. Participants will gain hands-on experience and foundational knowledge in welding steel and stainless steel plates using the GTAW process. The course emphasizes proper safety practices, welding theory, and skill development for creating high-quality welds. Designed for individuals with a basic understanding of welding, this course provides the technical skills and practical applications necessary for producing structurally sound welds. The course will cover weld joint types, filler material selection, and the essential equipment setup, ensuring that participants are prepared to handle plate welding applications in various industrial settings. ",
      price: "₱14,000",
      duration: "40 Hours",
      link: "https://courselist.mfi.org.ph/courses/1723",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9f_aqvlTL-Xfb1ihxI-eJO12IFt2ZreMeIQ&s"
    },
    {
      id: 64,
      name: "Gas Welding, Cutting And Brazing",
      description: "The Gas Welding, Cutting, and Brazing course provides comprehensive training on the techniques and safety protocols for using oxy-acetylene and other gas-based methods in welding, cutting, and brazing applications. Participants will learn to work with gas torches and related equipment to join metals, cut through various materials, and create strong, lasting bonds. This hands-on course emphasizes precision, safety, and technique, preparing students to perform gas welding and cutting in industries such as manufacturing, metal fabrication, and repair services. ",
      price: "₱6,500",
      duration: "40 Hours",
      link: "https://courselist.mfi.org.ph/courses/63",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTMb4s5hQkH5uFkKmqymFc8ktt-AeFRXs6Cw&s"
    },
    {
      id: 65,
      name: "Geometric Dimensioning & Tolerancing Essentials",
      description: "This course is designed for engineering students, CAD engineers, entry-level engineers or technicians, manufacturing or production managers, CNC machinists, machine shop owners or operators.  It aims to enhance reading and understanding of engineering drawings, understand and apply the theory of interchangeability of parts in mass-production, and learn the systems of the various geometric tolerance control symbols and apply them as a common language in engineering.   ",
      price: '₱5,000',
      duration: "21 Hours",
      link: "https://courselist.mfi.org.ph/courses/2593",
      image: "https://i.ytimg.com/vi/M0bVXXmXXdI/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAbayWCB3XgjGDG4KGrigcA-npzxA"
    },
    {
      id: 66,
      name: 'GMAW/FCAW (Gas Metal Arc Welding/Flux Cored Arc Welding) - Pipe Welding',
      description: "GMAW, or Metal Inert Gas (MIG) welding, is a semi automatic process that creates an arc by using a continuously fed solid electrode protected by a shielding gas, while FCAW requires a continuously fed consumable tubular electrode containing a flux, sometimes also protected by a shielding gas. These two processess are widely used in construction because of its high welding speed and produces deeper penetrating weld. This module is designed for welders who would like to develop their welding skills in groove welding of carbon steel pipes using all GMAW or all FCAW or combination of these two processes. Participant learns how to produce quality groove weld on pipes made of carbon steel in all types of welding position using ER70S for GMAW and K71T for FCAW.   ",
      price: "₱11,000",
      duration: "40 hours",
      link: "https://courselist.mfi.org.ph/courses/1725",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJUxVz5JMIwQCBLnWJ9exRUMIporEHnMXbQQ&s"
    },
    {
      id: 67,
      name: "Industrial Electrician",
      description: "The Industrial Electrician Course is designed to provide comprehensive training for individuals aspiring to become industrial electricians or enhance their existing skills in industrial electrical systems. This course covers essential theoretical knowledge, practical skills, and hands-on experience necessary to install, maintain, troubleshoot, and repair electrical equipment and systems in industrial settings. Participants will learn about electrical safety practices, regulations, and standards applicable to industrial environments. They will gain proficiency in reading electrical diagrams, interpreting technical specifications, and using specialized tools and equipment for electrical work. Emphasis will be placed on practical applications, problem-solving, and preventive maintenance to ensure the reliable operation of industrial electrical systems. ",
      price: "₱9,000",
      duration: "48 Hours",
      link: "https://courselist.mfi.org.ph/courses/55",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUhpjVy5TvcyaA1pBTcS6JZRrr88WLYLAx6Q&s"
    },
    {
      id: 68,
      name: "Industrial Electrician (Pasay Branch)",
      description: "This module deals with the fundamental concepts of electrical technology. It includes a comprehensive coverage of electrical topics such as safety, electrical instruments, blueprint reading, electrical machines, electrical controls, and troubleshooting. Laboratory activities are provided toverify and practice learned principles. ",
      price: '₱9,000',
      duration: "48 Hours",
      link: 'https://courselist.mfi.org.ph/courses/1494',
      image: "https://deltawye.com/wp-content/uploads/2024/01/delta-wye-how-to-become-an-industrial-electrician-7x5-1-1024x724.jpg"
    },
    {
      id: 69,
      name: "Industrial Electronics (Pasay Branch)",
      description: "This course is all about the main components of typical industrial electronic systems and will be able to assemble controller systems for industrial process. The aim of this course is to provide knowledge for the assembly of electronic circuits, typical characteristics of equipment used in such installations along with examples of industrial applications. ",
      price: "₱6,800",
      duration: "60 Hours",
      link: 'https://courselist.mfi.org.ph/courses/1498',
      image: "https://deltawye.com/wp-content/uploads/2024/01/delta-wye-how-to-become-an-industrial-electrician-7x5-1-1024x724.jpg"
    },
    {
      id: 70,
      name: "Industrial Mechatronics (IE/EP/AIMC/PLC/SIA)",
      description: "The Industrial Mechatronics course provides a comprehensive overview of the integration of mechanical engineering, electronics, and computer systems in industrial automation. Designed for engineers, technicians, and industry professionals, this course explores the principles and applications of mechatronics in modern industrial settings. Participants will gain hands-on experience and theoretical knowledge on how to design, implement, and maintain sophisticated mechatronic systems that enhance automation and efficiency in manufacturing processes. Key Components: ",
      price: "₱28,350",
      duration: "189 Hours",
      link: "https://courselist.mfi.org.ph/courses/2826",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuHk3i9Na4OKtYEsv-_4c7jKGlLqKey1DcXA&s"
    },
    {
      id: 71,
      name: 'Industrial Process Controls (IPC)',
      description: "This course focuses on the principles and practices of industrial process control systems. Participants will learn about various control strategies, instrumentation, and automation technologies used in industrial environments. The program emphasizes hands-on training with real-world scenarios to develop problem-solving skills. By the end of the course, students will be able to design, implement, and troubleshoot process control systems effectively, ensuring optimal performance and safety in industrial operations. ",
      price: "₱9,000",
      duration: '40 Hours',
      link: "https://courselist.mfi.org.ph/courses/36",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMIQxsoUiTmhlXAGgJC-UPXDTwj0y1j__FyA&s"
    },
    {
      id: 72,
      name: "Instrumentation And Control Essentials (ICE)",
      description: "This course covers the fundamentals of instrumentation. It deals with the principles of instrumentation and control devices including its operation, design, function and installation requirements. It also covers the fundamentals of measuring common process variables including pressure, level, flow and temperature. Practical demonstrations and hands-on exercises are part of this module to enhance the knowledge and skills of trainees in the proper installation of I&C devices. Personal safety and instrument safety are also covered in this training program. ",
      price: "₱5,000",
      duration: "21 hours",
      link: "https://courselist.mfi.org.ph/courses/1732",
      image: "https://media.licdn.com/dms/image/v2/D5612AQHvNxv_xbrw1g/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1728325017925?e=2147483647&v=beta&t=-17--f36QzTXm1APcLQLwGj5oTXhCeMzX4vgSvzK69E"
    },
    {
      id: 73,
      name: "Integrated Electronics Courses (PEE / ESIELEX/TTES)",
      description: "The Electronic Essentials Applications course provides a comprehensive introduction to the practical applications of electronic principles. Designed for individuals seeking to apply electronic fundamentals in real-world scenarios, this course covers essential electronic components, circuit design, and practical applications in residential, commercial, and industrial settings. Participants will explore the functionality and integration of electronic systems, including hands-on exercises and project work to enhance their practical skills. The course emphasizes understanding and applying core electronic concepts to solve practical problems effectively. ",
      price: "₱20,000",
      duration: "115 hours",
      link: "https://courselist.mfi.org.ph/courses/3071",
      image: "https://www.msuiit.edu.ph/assets/img/schools/scs/bs-electronics-and-computer-technology.png"
    },
    {
      id: 74,
      name: "Integrated Troubleshooting Principles",
      description: "This course provides the learners the ability to diagnose and troubleshoot common problems and errors encountered during the operation of programmable logic controllers. Common PLC brands including Siemens, Allen-Bradley and Mitsubishi shall be used in this training. A balance of lecture, demonstration and hands-on exercises shall be implemented to acquire the necessary knowledge and skills in understanding, diagnosing and troubleshooting PLC controlled systems.  ",
      price: "₱15,000",
      duration: "21 hours",
      link: "https://courselist.mfi.org.ph/courses/1865",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCVaxvjUwTH937uqLDUOMY6Ho6rres359MFA&s"
    },
    {
      id: 75,
      name: "Integrated Troubleshooting Technique ",
      description: "The Integrated Troubleshooting Technique Training course equips participants with comprehensive skills and strategies for troubleshooting complex systems across various domains, including electronics, electrical systems, and industrial processes. The course integrates multiple troubleshooting techniques and tools, providing practical, hands-on experience to enhance problem-solving capabilities and improve system reliability. ",
      price: "₱4,500",
      duration: "28 hours",
      link: "https://courselist.mfi.org.ph/courses/2978",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKzIwJStmOBgoCi2DPE6i_P-P54Fi1EkyKGw&s"
    },
    {
      id: 76,
      name: "Intermediate Gas Metal Arc Welding (Structural Welding)",
      description: "The Intermediate Gas Metal Arc Welding (GMAW) – Structural Welding course is designed for welders with a basic understanding of GMAW techniques who wish to advance their skills in structural applications. This course focuses on the specific requirements for welding structural steel and other materials used in construction and fabrication. Participants will learn about joint design, proper welding techniques, and the use of different materials while emphasizing safety practices and quality control. Through hands-on training and practical exercises, students will develop the competencies needed to produce strong, high-quality welds in various structural settings. ",
      price: "₱10,000",
      duration: "40 Hours",
      link: "https://courselist.mfi.org.ph/courses/1179",
      image: "https://lafargeandegge.com/wp-content/uploads/2023/10/Gas-METAL-ARC-WELDING.jpg"
    },
    {
      id: 77,
      name: "Intermediate Shielded Metal Arc Welding (Structural Welding)",
      description: 'The Intermediate Shielded Metal Arc Welding (SMAW) - Structural Welding course builds on foundational welding skills, providing a deeper understanding of SMAW techniques for structural welding applications. Designed for welders with basic SMAW knowledge, this course enhances their ability to work on structural steel projects that require high-strength welds. Participants will learn advanced welding techniques, tackle common structural welding challenges, and follow industry standards for welding quality and safety. With a strong focus on hands-on practice, this course will prepare welders for roles in structural fabrication, construction, and maintenance. ',
      price: "₱10,000",
      duration: "40 Hours",
      link: "https://courselist.mfi.org.ph/courses/1177",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Shielded_Metal_Arc_Welding.jpg/300px-Shielded_Metal_Arc_Welding.jpg"
    },
    {
      id: 78,
      name: "Lathe Machine Operation",
      description: "This course provides comprehensive training in the operation and maintenance of lathe machines. Participants will learn about the various types of lathes, their components, and machining techniques. The curriculum emphasizes hands-on experience, allowing students to perform turning operations, thread cutting, and part finishing. By the end of the course, participants will be proficient in setting up, operating, and troubleshooting lathe machines, preparing them for careers in machining and manufacturing.   ",
      price: "₱10,000",
      duration: "40 hours",
      link: "https://courselist.mfi.org.ph/courses/60",
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRB4D3rZoSGqbHMaVIihvxpnWB5jnoJNDVHuQ&s'
    },
    {
      id: 79,
      name: "LINUX Essentials (Linux System Administration) Cisco",
      description: "The goal of this course is to provide academic institutions and students a ?starting place? for learning the linux operating system. Students who complete this course should understand Linux as an operating system, basic open source concepts, how Linux is used and the basics of the Linux Command line. This course implements a ?practice as you read? approach to learning. Each learner has hands-on access to a Linux virtual Machine to practice, explore and trial Linux command line concepts. The labs provide a learning environment where students interact with the Linux operating system and build on their skills and knowledge as they progress through the course. ",
      price: "₱9,000",
      duration: "42 hours",
      link: 'https://courselist.mfi.org.ph/courses/51',
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqcvRyqXsI_ArgmbOWslFdXXiodn6sBfwoxw&s"
    },
    {
      id: 80,
      name: "Marine Automation And Instrumentation",
      description: "This module covers automation and instrumentation as applied to ship operations. Basic concepts in electronics are introduced to the course to enable the participants to understand succeeding instrumentation and automation concepts. The first module in automation covers the application of pneumatic and electro-pneumatic elements in ships. The succeeding module deals with Programmable Logic Controllers. Lastly. principles of measurement and control are also included. Actual instrumentation and control devices shall be provided to the trainees for them to operate, connect, test and/or calibrate. Control strategies (modes of control) including ON/OFF, proportional, integral and derivative controls will also be discussed. Hands-on exercises are an integral part of this training module so that the trainees can better appreciate the application of electronics, pneumatics, electro-pneumatics, programmable controller, instrumentation devices and controllers. Trainees should be able to connect or hook-up the devices for its proper operation and testing. ",
      price: "₱17,500",
      duration: '49 Hours',
      link: "https://courselist.mfi.org.ph/courses/1795",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQU6l9tiH0aN_-pIDh_o0I7mjNVx4hSdOGXA&s"
    },
    {
      id: 81,
      name: "Marine Electrical Training (Electrical Training For Marine Engineers)",
      description: "The Marine Electrical Training course is designed to provide participants with specialized knowledge and practical skills essential for working with electrical systems onboard marine vessels. This course covers a wide range of topics specific to marine electrical systems, including installation, maintenance, troubleshooting, and safety practices. Participants will gain hands-on experience through practical exercises, simulations, and real-world scenarios, preparing them for roles in marine engineering, shipbuilding, and maritime operations.   ",
      price: "₱10,500",
      duration: "40 hours",
      link: 'https://courselist.mfi.org.ph/courses/1736',
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaTIQZpZksKd77wKPDyKXBFqW7_RpvGCPZxQ&s"
    },
    {
      id: 82,
      name: "Marine Electrical Training (Electrical Training For Marine Engineers) (Pasay Branch)",
      description: "Modern ships are increasingly dependent upon the electrical and control engineering installations for their operation. It is therefore essential that sea-going and shore-based staff have a good appreciation of such systems, ensuring that they are maintained in an efficient operational and safe condition. Over the six (6) days of the course there will be informal, but structured presentations and discussion sessions. More than half of the training duration is dedicated to hands on activities. We adopt the attitude that most people who will study marine electrical technology do so for very practical reasons and with this in mind many practical applications should be demonstrated during lectures to reinforce theory while holding the interest of the students. Delegates receive a certificate upon successful completion of the course. A practical exam will be conducted at the end of the course so as to validate the transfer of knowledge during the training. ",
      price: "₱10,500",
      duration: "40 hours",
      link: "https://courselist.mfi.org.ph/courses/1854",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaTIQZpZksKd77wKPDyKXBFqW7_RpvGCPZxQ&s"
    },
    {
      id:83,
      name:"MARINE REFRIGERATION AND AIRCONDITIONING - PASAY BRANCH",
      description:"This course deals with the fundamental concepts of Marine Refrigeration and Air Conditioning Systems. It covers lessons and activities on Refrigeration and Airconditioning units, Moiler chart / P-H Diagram, refrigeration and airconditioning instruments, servicing operations, maintaining operations and troubleshooting operations.   ",
      price:"₱10,000",
      duration:"40 hours",
      link:"https://courselist.mfi.org.ph/courses/3051",
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQP-sZmXZVLTKIQMsA9WJQLHx0r31pvaCNB-g&s"
    },
    {
      id:84,
      name:"Master Electrician (Open Schedule)",
      description:"This is a packaged course which is a combination of the different short courses that includes the following: 1. Building Wiring Installation and Maintenance 2. Industrial Electrician 3. Electrical Control Wiring Installation and Troubleshooting 4. Advanced Industrial Motor Controls Take the four course modules in succession.  After completing all modules, another certificate titled MASTER ELECTRICIAN is issued.  A reviewer for the Registered Master Electrician(RME) exam administered by Professional Regulatory Commission (PRC) is given as a bonus. This program is designed not only to aid the the participants in passing the RME exam but provides real skills required of a Registered Master Electrician. Please take note that PRC requires some years of related work experience prior to taking the RME exams.  As a guide, below are PRC’s requirements in taking the Registered Master Electrician exams: 1) Notarized Certificate of Experience signed by an REE or RME whose registration is prior to the date of employment 2) Certificate of Employment or service record a.  For BSEE graduates / completed three (3) years BSEE or three (3) year course in ElectricalTechnology – at least one (1) year apprenticeship in electrical wiring and installation, operation and maintenance b.  Two (2) year vocational electrician’s course – at least  two (2) years apprenticeship in electrical installation, operation and maintenance c.  One (1) year vocational electrician’s course – at least three (3) years apprenticeship in electrical installation, operation and maintenance d.  High School graduates – at least five (5) years apprenticeship in electrical wiring installation, operation and maintenance ",
      price:"₱34,300",
      duration:"256 Hours",
      link:'https://courselist.mfi.org.ph/courses/874',
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIBv9yWCFXEGop5TdqNFMLkM7jm1pQKKJBLA&s"
    },
    {
      id:85,
      name:'Mechanical Basics',
      description:"The Mechanical Basics course provides foundational knowledge and skills necessary for understanding basic mechanical principles and concepts. Designed for individuals new to the field or those seeking to refresh their knowledge, this course covers essential topics such as mechanics, materials, tools, and basic machine operations. Participants will engage in hands-on activities to reinforce theoretical concepts, preparing them for further studies in mechanical engineering or related technical fields. This course is ideal for students, technicians, and anyone interested in gaining a solid understanding of mechanical fundamentals. ",
      price:"₱5,000",
      duration:"24 Hours",
      link:"https://courselist.mfi.org.ph/courses/875",
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQO6eV_GTiFHPknLJCS3HaOavEK36hjs_xJ_Q&s"
    },
    {
      id:86,
      name:"Mechanical Fitter Training",
      description:"The Mechanical Fitter course equips participants with the skills and knowledge necessary for installing, assembling, maintaining, and repairing mechanical equipment and systems. This course focuses on the core competencies of mechanical fitting, including blueprint reading, equipment alignment, hydraulic and pneumatic systems, and precision measurement. Participants will gain hands-on experience working with various tools and machinery, emphasizing safety practices and industry standards. Suitable for those pursuing a career as a mechanical fitter or in general mechanical maintenance, this course prepares learners to work in manufacturing, construction, and maintenance environments. ",
      price:"₱10,000",
      duration:"40 hours",
      link:'https://courselist.mfi.org.ph/courses/3186',
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlD2zFSHeRu6mFFbKbhX8GpJSUm1LLRpqKLQ&s"
    },
    {
      id:87,
      name:"MECHATRONICS ESSENTIALS - (EP &PLC) ",
      description:"The Mechatronics Essentials - EP & PLC course covers the fundamental principles of mechatronics, focusing on electropneumatic systems (EP) and programmable logic controllers (PLC) for automation and control applications.",
      price:"₱16,500",
      duration:"70 hours",
      link:"https://courselist.mfi.org.ph/courses/3205",
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRE5nUPtVrNpYQ5pIjZw3kKVexN10ERx3X24Q&s"
    },
    {
      id:88,
      name:"Mechatronics Essentials - EP & PLC (Pasay Branch)",
      description:"The Mechatronics Essentials - EP & PLC course covers the fundamental principles of mechatronics, focusing on electropneumatic systems (EP) and programmable logic controllers (PLC) for automation and control applications.",
      price:"₱14,500",
      duration:"70 hours",
      link:"https://courselist.mfi.org.ph/courses/3205",
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRE5nUPtVrNpYQ5pIjZw3kKVexN10ERx3X24Q&s"
    },
    {
      id:89,
      name:"Mechatronics Essentials (Mecha Ess)",
      description:"This course contains two training modules including Electro-Pneumatics (EP) and Programmable Logic Controls (PLC). The first module deals with the study of the operation, design and function of various electro-pneumatic elements commonly used in the of industry including manufacturing, processing, transportation and utilities. It presents different electro-pneumatic symbols and explains how they are used in the schematic diagrams, in accordance with ANSI, ISO and DIN standards. Sufficient time is allocated for hands-on exercises in setting up and troubleshooting electro-pneumatic circuits while applying safety. The next module introduces programmable logic controllers – its definition, basic capabilities, functional features, benefits, specification, application, communication, operation, installation, troubleshooting, maintenance and programming requirements. Participants shall appreciate the advantages of having a PLC controlled system compared to conventional control systems. More emphasis is given to the actual set-up and development of PLC programs and applying them with real mechatronic devices (electrical and electro-pneumatic devices) which comprise the whole automation system. Hands-on activities on program design, installation, testing and simulation of various PLC circuits are part of the whole training module. ",
      price:"₱17,250",
      duration:'68 Hours',
      link:"https://courselist.mfi.org.ph/courses/2651",
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSytR4OnYvBPM0sYBgbhA-qmfwo3HIJaDG9YA&s"
    },
    {
      id:90,
      name:"Milling Machine Operation",
      description:"This course provides in-depth training in the operation and maintenance of milling machines. Participants will learn about the different types of milling machines, their components, and various milling techniques. The curriculum emphasizes hands-on practice, allowing students to perform operations such as face milling, contour milling, and slotting. By the end of the course, participants will be skilled in setting up, operating, and troubleshooting milling machines, preparing them for careers in manufacturing and machining. ",
      price:"₱10,000",
      duration:"40 Hours",
      link:"https://courselist.mfi.org.ph/courses/61",
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSytR4OnYvBPM0sYBgbhA-qmfwo3HIJaDG9YA&s"
    },
    {
      id:91,
      name:"Mobile Development With React Native",
      description:"React Native is a popular framework for building cross-platform mobile applications using JavaScript and React. It allows developers to write code once and deploy it across both iOS and Android platforms, saving time and effort compared to building separate native apps for each platform. ",
      price:"₱7,500",
      duration:"48 Hours",
      link:"https://courselist.mfi.org.ph/courses/3066",
      image:"https://media.licdn.com/dms/image/v2/C4D12AQGVl4X6rA0uew/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1652265949718?e=2147483647&v=beta&t=kuX_J3r7gOF_6WiY-3zkflDbO_ecSu_TE7q8z3TgJlE"
    },
    {
      id:92,
      name:"Motorcycle Engine Maintenance",
      description:"This course focuses on the essential skills and knowledge required for effective motorcycle engine maintenance, including comprehensive training on the overhauling of both engine and transmission systems. Participants will gain a deep understanding of engine components, operation, and maintenance procedures. Through a combination of theoretical knowledge and hands-on practice, students will learn how to perform engine diagnostics, routine servicing, and troubleshooting techniques, ensuring optimal performance and longevity of motorcycle engines and transmissions. ",
      price:"₱5,000",
      duration:"30 Hours",
      link:"https://courselist.mfi.org.ph/courses/2536",
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuYlEoPj8DmKrwKBsWukKLfdL9LuvYCeYAbw&s"
    },
    {
      id:93,
      name:"Motorcycle Maintenance Essentials",
      description:"This course provides foundational skills and knowledge in motorcycle maintenance, focusing on essential procedures to keep motorcycles in top condition. Participants will learn about various motorcycle systems, including the engine, transmission, electrical, and braking systems. Through hands-on practice, they’ll gain proficiency in diagnostics, preventive maintenance, and basic repair techniques, empowering them to address common issues and perform routine maintenance confidently. ",
      price:"₱5,000",
      duration:"28 Hours",
      link:"https://courselist.mfi.org.ph/courses/2519",
      image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQc4ZZjmde0ZwlZpa3gE24RFR9TacvL_gUTtg&s'
    },
    {
      id:94,
      name:"Office Productivity",
      description:"The course covers the major application groups of Microsoft Office – MS WORD, MS EXCEL, MS POWERPOINT, and the most recent Windows OS. The course allows the participants hands-on computer experience to investigate and explore the different capabilities inside the Windows Office Package. During the course the participant will produce documents, worksheets and presentations. ",
      price:"₱5,800",
      duration:"₱5,800",
      link:"https://courselist.mfi.org.ph/courses/1",
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTH4rHX1WGRoDitsSD0msU2M2IPDiXLfgF4QA&s"
    },
    {
      id:95,
      name:"PHP And MySQL Training",
      description:"PHP (recursive acronym for PHP: Hypertext Preprocessor) is a widely-used Open Source general-purpose scripting language that is especially suited for Web development and can be embedded into HTML. The course is intended for aspiring and experienced web developers and programmers. To enhance students learning, the course will focus mainly on the creation of a threaded workshop. After the course, the students will be able to come-up with a web site that interacts with a MySQL Database (also an Open Source Product). ",
      price:"₱7,200",
      duration:"40 Hours",
      link:"https://courselist.mfi.org.ph/courses/2291",
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQRLDKSsYgl024UckUbRwnZwsK18VB1ztCTA&s"
    },
    {
      id:96,
      name:"Pipefitting",
      description:"The Pipefitting course provides participants with the foundational skills and knowledge needed for the installation, assembly, maintenance, and repair of piping systems in various industrial and construction settings. This hands-on course covers essential topics, including blueprint reading, pipe layout, cutting, threading, welding, and fitting techniques. With an emphasis on safety, precision, and industry standards, students will learn to work with a variety of piping materials such as steel, PVC, and copper. This course is ideal for those seeking a career as a pipefitter in industries like manufacturing, oil and gas, construction, and plumbing. ",
      price:"₱10,000",
      duration:"48 hours",
      link:"https://courselist.mfi.org.ph/courses/1726",
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSa1Mc5B2tMXNBr8hUWWV9D_u9RHI1Durg_qQ&s"
    },
    {
      id:97,
      name:"PLC Programming For Advanced User",
      description:"The PLC Programming for Advanced Users course is an intensive program designed for professionals seeking to enhance their skills in PLC programming and industrial automation. This course delves into programming techniques, control strategies, and advanced troubleshooting methods, equipping participants with the tools necessary to handle intricate control systems and optimize performance. Participants will explore advanced PLC programming languages and structures, learn to design and implement complex control algorithms, and integrate PLC systems with various industrial technologies. Through a combination of theoretical knowledge and hands-on practice, this course aims to develop mastery in managing and troubleshooting advanced PLC applications. ",
      price:'₱10,000',
      duration:"35 hours",
      link:'https://courselist.mfi.org.ph/courses/2148',
      image:"https://i.ytimg.com/vi/1NpE7sV0Nq0/maxresdefault.jpg"
    },
    {
      id:98,
      name:'PLC WIRING INSTALLATION MAINTENANCE AND TROUBLESHOOTING (formerly PLC)',
      description:"PLC Wiring Installation, Maintenance, and Troubleshooting (formerly PLC) involves the installation, routine maintenance, and troubleshooting of programmable logic controllers (PLCs) to ensure efficient operation and resolve any technical issues, ensuring optimal performance of automated systems.",
      price:"₱10,000",
      duration:'40 Hours',
      link:'https://courselist.mfi.org.ph/courses/3196',
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0o1KexyQBgbIb74UwtOJwNHGpqASXPubZFg&s"
    },
    {
      id:99,
      name:'PLC WIRING INSTALLATION MAINTENANCE AND TROUBLESHOOTING (PASAY BRANCH)',
      description:"This course covers the operation, application, basic capabilities, functional features, specifications, troubleshooting procedures and preventive maintenance of a programmable logic controller (PLC). In this course, the participant develops an appreciation of mechatronics and the many advantages of a PLC compared to conventional control systems. Emphasis is given to the actual hook-up of the PLC to common electrical and electro-pneumatic devices such as lamps, relays, contactors, solenoid valves, timers, counters, directional valves and cylinders. Hands-on exercises on testing and simulation of various practical applications with a PLC are also covered.  ",
      price:"₱8,500",
      duration:"40 Hours",
      link:"https://courselist.mfi.org.ph/courses/2880",
      image:"https://m.media-amazon.com/images/I/71TNRXFQOML._AC_UF894,1000_QL80_.jpg"
    },
    {
      id:100,
      name:'PLC Wiring Installation, Maintenance And Troubleshooting',
      description:"The PLC Wiring, Installation, Maintenance, and Troubleshooting course is designed for professionals seeking to enhance their skills in the practical aspects of PLC systems. This comprehensive course covers the essential techniques and best practices for wiring, installing, maintaining, and troubleshooting PLC systems effectively. Participants will gain hands-on experience and theoretical knowledge to ensure reliable and efficient PLC operations in industrial environments. ",
      price:"₱10,000",
      duration:"40 Hours",
      link:"https://courselist.mfi.org.ph/courses/1839",
      image:"https://i.ytimg.com/vi/x_GD2c11tX0/maxresdefault.jpg"
    },
    {
      id:101,
      name:"Practical Electricity And Electronics",
      description:"The Practical Electricity and Electronics course is designed to provide participants with hands-on experience and practical skills in fundamental electrical and electronic principles. This course covers essential concepts, theories, and applications necessary for understanding, designing, and troubleshooting electrical and electronic circuits. Participants will engage in practical exercises, laboratory sessions, and projects to reinforce theoretical knowledge and develop proficiency in practical applications. ",
      price:"₱6,000",
      duration:"40 Hours",
      link:"https://courselist.mfi.org.ph/courses/1835",
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZM96B5Ww5vPnlnnqZEUdinkefjz43DrgQig&s"
    },
    {
      id:102,
      name:"Preventive Maintenance System",
      description:"A Preventive Maintenance System focuses on regularly scheduled inspections, servicing, and repairs to equipment and machinery to prevent breakdowns, extend lifespan, and ensure optimal performance.",
      price:"₱5,700",
      duration:"21 hours",
      link:"https://courselist.mfi.org.ph/courses/2845",
      image:"https://campbellinc.com/wp-content/uploads/2020/04/The-Benefits-of-Preventive-Maintenance-12-3-19-v2-scaled.jpg"
    },
    {
      id:103,
      name:"Program Logic Formulation With C++ Programming",
      description:"This course deals with the fundamentals of computer programming. This module will give the students an understanding of data representation, data structure, algorithm, flowcharting and hands-on experience in the techniques of structured programming using the most popular language C++. ",
      price:"₱7,500",
      duration:"₱7,500",
      link:"https://courselist.mfi.org.ph/courses/1662",
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUUn1YbFgqosZm-wl2cf4dSQRzVz4ssQo6SA&s"
    },
    {
      id:104,
      name:"Python Fundamentals",
      description:"An introduction to programming using a language called Python. Learn how to read and write code as well as how to test and debug it. Designed for students with or without prior programming experience who'd like to learn Python specifically. Learn about functions, arguments, and return values (oh my!); variables and types; conditionals and Boolean expressions; and loops. Learn how to handle exceptions, find and fix bugs, and write unit tests; use third-party libraries; validate and extract data with regular expressions; model real-world entities with classes, objects, methods, and properties; and read and write files. Hands-on opportunities for lots of practice. Exercises inspired by real-world programming problems. What you’ll learn: ● Functions, Variables ● Conditionals ● Loops ● Exceptions ● Libraries ● Unit Tests ● File I/O ● Regular Expressions ● Object-Oriented Programming ● Et Cetera ",
      price:"₱7,500",
      duration:"40 Hours",
      link:"https://courselist.mfi.org.ph/courses/3063",
      image:"https://www.freecodecamp.org/news/content/images/size/w2000/2020/07/1_5YaueU4meqq-bCM8y3OlkQ.jpeg",

    },
    {
      id:105,
      name:"Refrigeration And Air-conditioning Mechanic (RACME)",
      description:"This course deals with the Fundamentals of Refrigeration and Air-conditioning System. It covers the details of the Refrigeration Cycle,  Four Major components and its function in the RAC System, Mechanical Vapor Compression process, Refrigerants and its underlying properties at different operating temperatures. Procedures in Recovery, Vacuuming and Charging of Refrigerant in the  system are also given emphasis. Maintenance and Troubleshooting techniques of unit are also covered. ",
      price:"₱9,000",
      duration:"60 hours",
      link:"https://courselist.mfi.org.ph/courses/25",
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRm-X7ixKEA0KtOWyqIbhqs8K-JwFTb6g3yhQ&s"
    },
    {
      id:106,
      name:"Refrigeration And Airconditioning Mechanic (Pasay Branch)",
      description:"This course deals with the Fundamentals of Refrigeration and Air-conditioning System. It covers the details of the Refrigeration Cycle. The Four Major components and its function in the RAC System, Mechanical Vapor Compression process, Refrigerants and its underlying properties at different operating temperatures. A procedure in Recovery, Vacuuming and Charging of Refrigerant in the system is also given emphasis. Maintenance and Troubleshooting techniques of unit are also covered. ",
      price:"₱8,500",
      duration:"60 hours",
      link:"https://courselist.mfi.org.ph/courses/25",
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRm-X7ixKEA0KtOWyqIbhqs8K-JwFTb6g3yhQ&s"
    },
    {
      id:107,
      name:'Sensorics (Industrial Sensors)',
      description:"This course provides an in-depth exploration of various industrial sensors commonly used in automation and control systems. It covers the principles of operation, key specifications, and critical parameters of different sensor types. Additionally, the course highlights practical applications in industrial settings, equipping participants with the knowledge needed to select, configure, and utilize sensors effectively for optimal system performance. ",
      price:"₱5,600",
      duration:"35 hours",
      link:"https://courselist.mfi.org.ph/courses/3242",
      image:"https://media.gettyimages.com/id/709136431/photo/hand-operating-sensoric-device.jpg?s=612x612&w=gi&k=20&c=T-UG9akjEgYWMEg8mNUg3Jie9GegwAAtkmzmlT8RfNE="
    },
    {
      id:108,
      name:"Supervisory Development Program",
      description:'This program is designed to help the supervisor understand the critical areas of supervision as well as identify those skills that can help them become more effective leaders in order to successfully get work done through others, with the end in view of increasing the company’s productivity, thereby making themselves ever viable to the organization. ',
      price:"₱7,200",
      duration:"21 hours",
      link:"https://courselist.mfi.org.ph/courses/1085",
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT59NzJEZf-gtkyHde0t2EwQig8LKFbLpV5vA&s"
    },
    {
      id:109,
      name:"System Integration And Automation ",
      description:"The System Integration and Automation course provides a comprehensive exploration of the methodologies and technologies involved in integrating various systems and automating processes within industrial environments. Designed for engineers, technicians, and automation specialists, this course covers the principles and practices required to effectively combine disparate systems into cohesive, automated solutions that enhance operational efficiency and productivity. ",
      price:"₱6,500",
      duration:"35 hours",
      link:"https://courselist.mfi.org.ph/courses/3115",
      image:"https://images.squarespace-cdn.com/content/v1/55181a36e4b05c72e7f6a2a3/1587404952565-SM6OXHGS3RRY7DYSRZKN/Global-Industrial-Automation-Market-in-Life-Sciences-Industry-1024x684.jpg?format=1500w"
    },
    {
      id:110,
      name:"Trade Test For Hydraulic Technician - Aureol Global",
      description:"The Trade Test for Hydraulic Technicians at Aureol Global evaluates the skills and expertise required to install, maintain, and repair hydraulic systems, ensuring proficiency in the field.",
      price:"₱7,000",
      duration:"8 hours",
      link:"https://courselist.mfi.org.ph/courses/3236",
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNBJ9DYipisKm3GHPpmyE1HNZpT0PkfrgNIQ&s"
    },
    {
      id:111,
      name:"Trade Test For Mechanical Fitter - Aureol Global",
      description:"Trade Test For Mechanical Fitter - Aureol Global",
      price:"₱6,800",
      duration:"8 hours",
      link:"https://courselist.mfi.org.ph/courses/3235",
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5K0faffalmCemUnNYoZp11flEyoRFSwuW2g&s"
    },
    {
      id:112,
      name:"Train The Trainers",
      description:" This course introduces to the participants the basic competencies in delivering an effective training session. It focuses on three main training requirements: plan and develop a training session, utilize appropriate teaching methodologies, and enhance training effectiveness through technology.   COURSE OUTLINE: MODULE 1: PLANNING TRAINING SESSION  MODULE 2: FACILITATING A LEARNING SESSION MODULE 3: ENHANCING TRAINING EFFECTIVENESS THROUGH TECHNOLOGY    ",
      price:"₱3,998",
      duration:"24 hours",
      link:"https://courselist.mfi.org.ph/courses/2909",
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTy0F77Lrb8cHz0QClsoIl2CZMKPGIfhjNylw&s"
    },
    {
      id:113,
      name:"Trainers Methodology (TM) Level I",
      description:"This qualification is designed to enhance the knowledge, skills, positive attitude and work values of the learner in accordance with the prevailing standards in the Technical and Vocational Education and Training (TVET) sector. This encompasses competencies required of a Technical- Vocational Trainer to perform the tasks in the areas of instructional delivery/facilitation, competency assessment, and maintenance of training resources/facilities. ",
      price:"₱15,000",
      duration:"120 hours",
      link:"https://courselist.mfi.org.ph/courses/2604",
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTUuhYYj0FaEl9G4AAcCg0IJQ-gakj3A-e-g&s"
    },
    {
      id:114,
      name:"Troubleshooting PLC Based Controlled Systems (TPLCBCS)",
      description:"The Troubleshooting PLC-Based Controlled Systems course is designed to provide professionals with the expertise needed to diagnose and resolve issues within PLC-controlled environments. This course covers both theoretical and practical aspects of troubleshooting, focusing on common problems, diagnostic techniques, and system maintenance to ensure optimal performance and reliability of PLC-based control systems. Participants will gain hands-on experience with troubleshooting methodologies, diagnostic tools, and best practices for maintaining PLC systems. By exploring real-world scenarios and conducting practical exercises, learners will develop the skills necessary to efficiently identify, analyze, and fix issues that can impact automated processes. ",
      price:"₱6,000",
      duration:"35 Hours",
      link:'https://courselist.mfi.org.ph/courses/2643',
      image:"https://i.ytimg.com/vi/x_GD2c11tX0/maxresdefault.jpg"
    },
    {
      id:115,
      name:"Under Chassis Mechanic",
      description:"This course focuses on the maintenance and repair of vehicle undercarriage systems, including suspension, steering, and braking systems. Participants will gain knowledge of various under chassis components and their functions. The training includes hands-on experience with tools and diagnostic equipment to troubleshoot issues. By the end of the course, students will be able to perform routine inspections, maintenance, and repairs on undercarriage systems, preparing them for careers as under chassis mechanics. ",
      price:"₱6,000",
      duration:"60 Hours",
      link:"https://courselist.mfi.org.ph/courses/1764",
      image:"https://thumbs.dreamstime.com/b/auto-mechanic-under-car-3649800.jpg"
    },
    {
      id:116,
      name:"Web Development With ReactJS",
      description:"React JS is a JavaScript library for building user interfaces and web applications. It is primarily used for developing complex web UIs and single-page applications that require frequent updates. With React JS, you write your code using React and it compiles it to plain JavaScript that can run in any browser. ",
      price:"₱7,500",
      duration:'48 Hours',
      link:"https://courselist.mfi.org.ph/courses/3065",
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSahnQyBXL4n443hMbTnD9OTFCwKlQ4kII2PA&s"
    },
    {
      id:117,
      name:"Work Attitude And Values Enhancement For The New Normal",
      description:"Work Attitude and Values Enhancement for the New Normal focuses on developing essential skills and positive attitudes to adapt effectively to the evolving workplace environment.",
      price:"₱4,000",
      duration:"21 hours",
      link:"https://courselist.mfi.org.ph/courses/2858",
      image:"https://crossworks.ph/wp-content/uploads/2023/04/CourseImage-EB-WAVE.png"
    },
    {
      id: 118,
      name:"Workplace Communication Essentials",
      description:"Workplace Communication Essentials covers the key skills and strategies needed for effective communication in professional settings, promoting collaboration and clear information exchange.",
      price:"₱4,000",
      duration:"21 hours",
      link:"https://courselist.mfi.org.ph/courses/2669",
      image:"https://blog.acesence.com/wp-content/uploads/2023/04/Blog-covers-1280-%C3%97-720-px-3840-%C3%97-2160-px-4.png"
    }
  ]
  res.status(200).json(courseList);
}
