import egameboy from './projects/egameboy.json';
import cvenligne from './projects/cvenligne.json';
import luncherweb from './projects/luncherweb.json';
import sitezinguerie from './projects/sitezinguerie.json';
import cfevolution from './projects/cfevolution.json';
import siteomnitrans from './projects/siteomnitrans.json';
 
export const userConfig = {
    // Personal Information
    name: 'Clément GUIMARD',
    role: 'Chef de projet - Developpeur Full Stack',
    location: 'Lormont, France',
    email: 'clement@cf-evolution.com',
    website: 'clementguimard.cf-evolution.com',
    roleFocus: 'Backend Development using .NET, C#, Entity Framework, SQL Server, and Bootstrap. Can also work with Angular, React, and Node.js.',
    age: 23,    

    // Social Links
    social: {
        github: 'https://github.com/ClementGuims',
        linkedin: 'https://www.linkedin.com/in/clément-guimard-574834182/', // Add your LinkedIn URL
    },

    // Contact Information
    contact: {
        email: 'clement@cf-evolution.com',
        phone: '+33622350579', // Add your phone number
        calendly: 'https://calendly.com/clement-g', // Add your Calendly URL
    },

    // Spotify Configuration
    spotify: {
        playlistId: '0pGdGpMm84h2Jl6Q1KmTMn?si=VvYVdi-MTXaVPxcy_szfMQ&pi=nlicIrxSRuKdm', // Your Spotify playlist ID
        playlistName: 'Lofi Codeers',
    },

    // Resume Configuration
    resume: {
        url: 'https://drive.google.com/file/d/1ifEK48f_tIkS2WK93sJjjlAqC-j_mG9K/view',
        localPath: '/cv_clemg.pdf',
    },

    // Education Background
    education: [
        {
            degree: "Master - Expert en Système d’information",
            major: "",
            institution: "ISITECH",
            location: "Lyon 8ème, France",
            year: "2019-2022",
            description: "Conception, gestion et sécurisation des systèmes d’information. Développement et intégration d’applications métiers (web, mobile, logiciel). Administration des infrastructures réseaux, cloud et bases de données. Cybersécurité, gouvernance IT et gestion des risques. Pilotage de projets informatiques et déploiement de solutions technologiques adaptées aux entreprises. Sujet de mémoire : Quel est l’impact de l’intelligence artificielle sur les entreprises du marché du developpement web ? Note globale de mémoire : 17/20.",
            images: [
                {
                    url: "https://i.ibb.co/JRnwtwV2/isitechlyon.png",
                    alt: "ISITECH",
                    description: "ISITECH"
                }
            ]
        },
        {
            degree: "DUT - Réseaux et télécommunications",
            major: "",
            institution: "Université de Pau et des Pays de l'Adour (UPPA)",
            location: "Mont de marsan, France",
            year: "2017-2019",
            description: "Conception, administration et sécurisation de réseaux informatiques et télécoms. Installation et configuration d'équipements réseaux (routeurs, commutateurs, serveurs). Déploiement et maintenance d’infrastructures télécoms et sans fil. Gestion des protocoles de communication, cybersécurité et supervision des systèmes. Programmation et automatisation de tâches réseau.",
            images: [
                {
                    url: "https://i.ibb.co/vCnYwpfT/DUTentre.jpg",
                    alt: "Université de Pau et des Pays de l'Adour (UPPA)",
                    description: "Université de Pau et des Pays de l'Adour (UPPA)"
                }
            ]
        },
        {
            degree: "BAC PRO - Système Électronique Numérique",
            major: "",
            institution: "Lycée profesionnel St. JOSEPH",
            location: "Gabarret, France",
            year: "2014-2017",
            description: "Montage, câblage et maintenance de systèmes électroniques, programmation d'automates et microcontroleurs, installation et dépannage de réseaux et équipements audiovisuels. Maîtrise des logiciels de conception assistée par ordinateur, lecture de schémas et application des normes en vigueur en électricité et électronique.",
            images: [
                {
                    url: "https://i.ibb.co/k27pW06L/lyc-e-saintjeanbosco.jpg",
                    alt: "Lycée profesionnel St. JOSEPH - Gabarret",
                    description: "Lycée profesionnel St. JOSEPH - Gabarret"
                }
            ]
        }
    ],

    // courses: [
    //     {
    //         title: "IOT",
    //         description: "IOT course",
    //         institution: "ITI",
    //         location: "Cairo, Egypt",
    //         year: "2023-2024",
    //         images: [
    //             {
    //                 url: "https://iti.gov.eg/assets/images/ColoredLogo.svg",
    //                 alt: "ITI",
    //                 // description: "ITI Campus"
    //             }
    //         ]
    //     },
    //     {
    //         title: ".NET full stack course",
    //         description: ".NET full stack course",
    //         institution: "Digital Egypt Pioneers Initiative - DEPI",
    //         location: "Cairo, Egypt",
    //         year: "2024",
    //         images: [
    //             {
    //                 url: "https://depi.gov.eg/assets/images/proAr.png",
    //                 alt: "DEPI",
    //                 // description: "DEPI Logo"
    //             }
    //         ]
    //     }
    // ],

    skills: [
        "PHP",
        "C#",
        ".NET",
        "C++",
        "Python",
        "Java",
        "React",
        "JavaScript",
        "TypeScript",
        "HTML",
        "CSS",
        "Node.js",
        "SQL Server",
        "MongoDB",
        "MySQL",
        "PostgreSQL",
        "Entity Framework",
        "Docker",
        "Unity",
        "MCreator",
        "Suite Adobe",
        "Blender",
        "Blockbench"
    ],

    extraCurricularActivities: [
        {
            title: "GOLF",
            institution: "C'est ma plus grande passion",
            location: "j'aime en pratiquer quand j'ai du temps.",
            year: "16 ans",
            images: [
                {
                    url: "https://i.ibb.co/67dt5zMP/golf.jpg",
                    alt: "Golf practice",
                    description: "Golf au practice"
                }
            ]
        },
        
        {
            title: "Voyages",
            institution: "J'adore voyager, aller dans un nouveau pays",
            location: "découvrir les cultures et m'enrichir de savoir.",
            year: "2024",
            images: [
                {
                    url: "https://i.ibb.co/HpqZ7Y9B/voy2.jpg",
                    alt: "Voyage Istanbul",
                    description: "Istanbul - Fatih"
                },
                {
                    url: "https://i.ibb.co/PsggyH1P/voy1.jpg",
                    alt: "Voyage Istanbul",
                    description: "Istanbul - Besiktas"
                }
            ]
        },
        {
            title: "Basket-ball",
            institution: "J'aime beaucoup le basket, je vais plus souvent voir des matchs de Basket Landes que pratiquer",
            location: "c'est un plaisir d'avoir l'ambiance des matchs dans le Sud-Ouest.",
            year: "3 ans"
        }
    ],

    // Professional Experience
    experience: [
        {
            title: "Auto-entrepreneur",
            company: "CF Evolution",
            location: "Bordeaux/Lyon, France",
            period: "Janvier 2024 - Actuellement",
            description: "Conception et développement de sites internet personnalisés (WordPress, PHP, React JS) et d'applications web/mobile (React Native). Création de chartes graphiques et d’identités visuelles (Canva, Photoshop). Accompagnement global des clients, cadrage des besoins, rédaction de cahiers des charges, choix techniques, développement, tests et mise en ligne. Conseil stratégique sur l’ergonomie, le référencement naturel (SEO) et la performance des solutions livrées.",
            technologies: ["PHP", "Python", "SQL Server", "Wordpress", "React", "Bootstrap", "Java", "MySQL", "API"],
            images: [
                {
                    url: "https://i.ibb.co/4RVHjPTQ/cfevo.png",
                    alt: "CF Evolution",
                    // description: "Luftborn Logo"
                }
            ]
        },
        {
            title: "Responsable des chefs de projet web",
            company: "KALITYS",
            location: "Lyon, France",
            period: "Juillet 2023 - Décembre 2023",
            description: "Supervision d’une équipe de chefs de projet web, coordination transverse avec les équipes techniques et créatives. Administration du serveur technique et pilotage de la production. Organisation des plannings, gestion des priorités et des incidents. Interface client pour le suivi opérationnel, la continuité de service et l'amélioration des processus internes.",
            technologies: ["Gestion d'équipe", "Planification", "Analyse des besoins", "conseil stratégique", "relation client", "plan d'action"],
            images: [
                {
                    url: "https://i.ibb.co/4gdBqx6s/kalitys.jpg",
                    alt: "KALITYS",
                    // description: "Working on .NET projects during the internship"
                }
            ]
        },
        {
            title: "Chef de projet web",
            company: "KALITYS",
            location: "Lyon, France",
            period: " Septembre 2019 - Juillet 2023",
            description: "Gestion de projets web de A à Z, élaboration des cahiers des charges avec les clients, réalisation des wireframes sous Figma, coordination des équipes techniques avec Trello et Jira en méthodologie Agile. Planification des sprints, suivi des livrables et gestion des ressources pour garantir le respect des délais. Gestion et supervision des environnements de préproduction / production. Accompagnement post- livraison pour assurer le suivi, vérifications et mises en ligne.",
            technologies: ["Gestion de projet", "HTML", "CSS", "JavaScript", "Python"],
            images: [
                {
                    url: "https://i.ibb.co/4gdBqx6s/kalitys.jpg",
                    alt: "KALITYS",
                    // description: "Working on .NET projects during the internship"
                }
            ]
        },
        {
            title: "Développeur Web",
            company: "NAPSYS",
            location: "Lyon, France",
            period: "Mars 2019 - Mai 2019",
            description: "Conception d'un site en interne, développement d'une géomap de supervision réseau via Centreon et API REST, automatisation de configurations d’équipements réseau avec des scripts, création d’une application de gestion de stocks (MySQL, Bootstrap).",
            technologies: ["PHP", "Python", "Python", "SQL", "HTML", "CSS", "JavaScript", "Centreon", "MongoDB", "MySQL", "Docker"],
            images: [
                {
                    url: "https://i.ibb.co/qLC97g3d/napsys.png",
                    alt: "Napsys group lyon",
                    // description: "Working on .NET projects during the internship"
                }
            ]
        },
        {
            title: "Technicien informatique et réseau",
            company: "CHU ALES/Mdm informatique/Informatique 40/6TM Informatique/",
            location: "Ales/Mont de marsan, France",
            period: "Plus de 6 mois de stage",
            description: "Déploiement de réseaux (Active Directory, Windows Server) en environnement hospitalier et commercial, maintenance et optimisation de postes sous Windows et Linux. Sécurisation des systèmes informatiques et support technique de proximité.",
            technologies: ["C++", "C#", "Python", "SQL"],
            images: [
                {
                    url: "https://i.ibb.co/hJQLVbDq/chuales.jpg",
                    alt: "CHU ALES",
                    // description: "Working on .NET projects during the internship"
                }
            ]
        }
    ],

    // SEO Configuration
    seo: {
        title: 'CV en ligne - GUIMARD Clément',
        description: 'Chef de projet et Developpeur Full-stack basé sur Bordeaux, spécialisé dans le React, Node.js et les technologies web modernes.',
        keywords: ['Chef de projet', 'Developpeur Full-stack', 'React', 'Node.js', 'Developpement web', 'Bordeaux'],
    },

    // Theme Configuration
    theme: {
        primaryColor: '#1ED760', // Spotify green
        secondaryColor: '#1d1d1f',
        accentColor: '#007AFF',
    },

    // Projects Configuration
    projects: [
        egameboy,
        cvenligne,
        siteomnitrans,
        sitezinguerie,
        luncherweb,
        cfevolution,
        
        // Add more projects here
    ]
} as const; 