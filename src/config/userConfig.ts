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

    // extraCurricularRoles: [
    //     {
    //         role: "Vice President",
    //         institution: "NUICPC",
    //         location: "Nile University",
    //         year: "2023-2024",
    //         images: [
    //             {
    //                 url: "https://i.ibb.co/FbSmTsBw/486635391-1079182187577545-400541279663759578-n.jpg",
    //                 alt: "NUICPC",
    //                 // description: "NUICPC Campus"
    //             },
    //             {
    //                 url: "https://i.ibb.co/1fLrcywC/487093779-1079182100910887-5326561587880729477-n.jpg",
    //                 alt: "NUICPC",
    //                 // description: "NUICPC Campus"
    //             },
    //             {
    //                 url: "https://i.ibb.co/mVJBpngp/486181151-1075334944628936-2845216629795518112-n.jpg",
    //                 alt: "NUICPC",
    //                 // description: "NUICPC Campus"
    //             },
    //             {
    //                 url: "https://i.ibb.co/yn7ccHM1/486507182-1075334774628953-7774379668898780058-n.jpg",
    //                 alt: "NUICPC",
    //                 // description: "NUICPC Campus"
    //             },
    //             {
    //                 url: "https://i.ibb.co/35xMtCDV/486104871-1075333997962364-6362307301859416001-n.jpg",
    //                 alt: "NUICPC",
    //                 // description: "NUICPC Campus"
    //             },
    //             {
    //                 url: "https://i.ibb.co/fzL5qvvS/486248194-1074582274704203-6554786202979315108-n.jpg",
    //                 alt: "NUICPC",
    //                 // description: "NUICPC Campus"
    //             },
    //             {
    //                 url: "https://i.ibb.co/VYxSXZF5/483525641-1070070571822040-3631060112169135578-n.jpg",
    //                 alt: "NUICPC",
    //                 // description: "NUICPC Campus"
    //             }
    //         ]
    //     },
    //     {
    //         role: "Head of SWE Committee",
    //         institution: "GDG Nile University",
    //         location: "Nile University",
    //         year: "2024-2025",
    //         images: [
    //             {
    //                 url: "https://scontent.fcai19-7.fna.fbcdn.net/v/t39.30808-6/487392755_1081523057343458_8188220183188100569_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=127cfc&_nc_ohc=FLS-aCW1uJUQ7kNvwGbXwyf&_nc_oc=AdlFYb4-vwoTMNuaHrlFgSR161QWwnQ7VtWfb-8Y_JyoVI37WuwF6Qwu3I3tjawZM10&_nc_zt=23&_nc_ht=scontent.fcai19-7.fna&_nc_gid=l69wa6Aj6hbCl-b5xEZigg&oh=00_AfHAACCAl3WKApFTelz0kJWcQbEIeAxPXnHV1WHsRoCEJA&oe=6806DA4B",
    //                 alt: "Nile University",
    //                 description: "Nile University Campus"
    //             }
    //         ]
    //     },
    //     {
    //         role: "Member and Mentor",
    //         institution: "NUICPC",
    //         location: "Nile University",
    //         year: "2021-2024",
    //         images: [
    //             {
    //                 url: "https://i.ibb.co/Y43vdxrV/484501388-1069637098532054-11435862832739630-n.jpg",
    //                 alt: "NUICPC",
    //             },
    //             {
    //                 url: "https://i.ibb.co/WWBPM6GG/484804363-1069556495206781-5476304623000762204-n.jpg",
    //                 alt: "Nile University",
    //                 // description: "Nile University Campus"
    //             },
    //             {
    //                 url: "https://i.ibb.co/wNFg7VkR/484643522-1069479561881141-6397451359649224021-n.jpg",
    //                 alt: "Nile University",
    //                 // description: "Nile University Campus"
    //             },
    //             {
    //                 url: "https://i.ibb.co/ZR4dJLyv/482238905-1065269192302178-4747858326277637907-n.jpg",
    //                 alt: "NUICPC"
    //             },
    //             {
    //                 url: "https://i.ibb.co/ymJN2v00/482246774-1065269122302185-3150232388297078773-n.jpg",
    //                 alt: "NUICPC"
    //             },
    //             {
    //                 url: "https://i.ibb.co/vxYBzH64/482027750-1063466179149146-4344066305683793822-n.jpg",
    //                 alt: "NUICPC"
    //             },
    //             {
    //                 url: "https://i.ibb.co/j9K3Smq8/481466571-1061263352702762-7633575959379424468-n.jpg",
    //                 alt: "NUICPC"
    //             },
    //             {
    //                 url: "https://i.ibb.co/S7R12bRy/484136881-1069556391873458-1395371296655723435-n.jpg",
    //                 alt: "NUICPC"
    //             },
    //             {
    //                 url: "https://i.ibb.co/zWVHwSPH/484516365-1070411428454621-8390835945290794938-n.jpg",
    //                 alt: "NUICPC"
    //             },
    //             {
    //                 url: "https://i.ibb.co/27L4bpQY/484381461-1069479998547764-3349306911678016045-n.jpg",
    //                 alt: "NUICPC"
    //             },
    //             {
    //                 url: "https://i.ibb.co/wNFg7VkR/484643522-1069479561881141-6397451359649224021-n.jpg",
    //                 alt: "NUICPC"
    //             },
    //             {
    //                 url: "https://i.ibb.co/MyFj8V6s/484140894-1069479545214476-3560564697839847145-n.jpg",
    //                 alt: "NUICPC"
    //             },
    //             {
    //                 url: "https://i.ibb.co/Sw9psfwX/484640131-1069484585213972-5052989750649951025-n.jpg",
    //                 alt: "NUICPC"
    //             },
    //             {
    //                 url: "https://i.ibb.co/v6QLXpqg/486627143-1081260057369758-4195012303656403802-n.jpg",
    //                 alt: "NUICPC"
    //             },
    //             {
                    
    //             }

    //         ]
    //     },
    //     {
    //         role: "Member",
    //         institution: "TEDxNU",
    //         location: "Nile University",
    //         year: "2021-2022",
    //         images: [
    //             {
    //                 url: "https://www.nu.edu.eg/sites/default/files/2024-06/whatsapp_image_2024-06-25_at_1.33.17_pm.jpeg",
    //                 alt: "Nile University",
    //                 description: "Nile University Campus"
    //             }
    //         ]
    //     },

    // ],

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
            institution: "J'aime beaucoup le basket, je vais plus souvent voir des matchs que le pratiquer",
            location: "c'est un plaisir d'avoir l'ambiance des matchs dans le Sud-Ouest.",
            year: "3 ans"
        },
        {
            title: "Bière-pong",
            institution: "Je pratique le bière-pong avec mes amis",
            location: "chaque été c'est l'occasion d'améliorer mes compétences.",
            year: "9 ans",
            images: [
                {
                    url: "https://i.ibb.co/pv0cqJNh/beerpong.jpg",
                    alt: "Bière-pong",
                    description: "Bière-pong toute l'année"
                }
            ]
        }
    ],
    // competitions: [
    //     {
    //         title: "UGRF 19th Edition",
    //         description: "UGRF 19th Edition",
    //         achievement: "1st Place at the 19th UGRF! 'Enhancing Readibility of Faded Text in Historical Documents Using Image Processing Techniques'",
    //         year: "2025",
    //         images: [
    //             {
    //                 url: "https://i.ibb.co/ks3fxrrm/1738247199943-e-1747872000-v-beta-t-h-XQ9njs-NIMHBp-SUTY26bge-Vx-Zj-EXS4mz2rhth-Jk-Ym-M.jpg",
    //                 alt: "UGRF",
    //                 description: "Team Photo"
    //             },
    //             {
    //                 url: "https://i.ibb.co/dsMPdbzF/1738247190983.jpg",
    //                 alt: "UGRF",
    //                 description: "UGRF Certificate"
    //             },
    //             {
    //                 url: "https://i.ibb.co/4wbzcM7j/1738247196516-e-1747872000-v-beta-t-8-TWVb-MGq-Elw-QW8-Jn-Ej-JMa-Yo-KPdy6-ZOl-Nwxn-GW-TMCY.jpg",
    //                 alt: "UGRF",
    //                 description: "Team Photo"
    //             }
    //         ]
    //     },
    //     {
    //         title: "Dean's Honors",
    //         description: "Dean's Honors",
    //         achievement: "Made the Dean's List for the Fall 2024 semester",
    //         year: "2024",
    //         images: [
    //             {
    //                 url: "https://i.ibb.co/k2jWyBVz/468465943-17952654941854972-3647153475567609171-n.jpg",
    //                 alt: "Dean's Honors",
    //                 description: "Dean's Honors"
    //             },
    //         ]
    //     },
    //     {
    //         title: "Nile University Innovation Competition",
    //         description: "Nile University Innovation Competition",
    //         achievement: "Secured second place in the Nile University Innovation Competition hosted by Nile University - NilePreneurs and NU E-Club ! 🎉🏆",
    //         year: "2025",
    //         images: [
    //             {
    //                 url: "https://i.ibb.co/HfGLHCQn/1723818852840.jpg",
    //                 alt: "NUIC",
    //                 // description: "NUIC Certificate"
    //             },
    //             {
    //                 url: "https://i.ibb.co/VcyKywY4/1723818852069.jpg",
    //                 alt: "NUIC",
    //                 // description: "NUIC Certificate"
    //             }
    //         ]
    //     },
    //     {
    //         title: "ECPC",
    //         description: "Egyptian Collegiate Programming Contest",
    //         achievement: "Rank 3rd in my third year at NU and qualified for the ECPC Finals",
    //         year: "2024",
    //         images: [
    //             {
    //                 url: "https://i.ibb.co/N2RZwmKT/487497338-1081518670677230-8143431170413885977-n.jpg",
    //                 alt: "ECPC",
    //                 description: "ECPC Certificate"
    //             }
    //         ]
    //     },
    //     {
    //         title: "UGRF 17th Edition",
    //         description: "UGRF 17th Edition",
    //         achievement: "2nd place SWE for PregTracker- personalized pregnancy tracker ",
    //         year: "2024",
    //         images: [
    //             {
    //                 url: "https://i.ibb.co/N2qgnb92/1706802292377.jpg",
    //                 alt: "UGRF",
    //                 description: "UGRF Certificate"
    //             }
    //         ]
    //     },
    //     {
    //         title: "UGRF 17th Edition",
    //         description: "UGRF 17th Edition",
    //         achievement: " 2nd place Clinical informatics for Recover360- an advanced physiotherapy clinic management system",
    //         year: "2024",
    //         images: [
    //             {
    //                 url: "https://i.ibb.co/N2qgnb92/1706802292377.jpg",
    //                 alt: "UGRF",
    //                 description: "UGRF Certificate"
    //             },
    //             {
    //                 url: "https://i.ibb.co/SkfYGDv/1706802293048.jpg",
    //                 alt: "UGRF",
    //                 description: "UGRF Certificate"
    //             }
    //         ]
    //     },
    //     {
    //         title: "ECPC",
    //         description: "Egyptian Collegiate Programming Contest",
    //         achievement: "Rank 7th in my first year at NU",
    //         year: "2022",
    //         images: [
    //             {
    //                 url: "https://scontent.fcai19-7.fna.fbcdn.net/v/t39.30808-6/482277706_1065267045635726_1956241697864875127_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=86c6b0&_nc_ohc=1ylVvYBsad4Q7kNvwGOE6DO&_nc_oc=Adltzr1B7OJ92p1jCzivnB0WvixF4DyE-MwQ8qhS7qD8G9fxDmbN3X5qcvrYuUyQ87Q&_nc_zt=23&_nc_ht=scontent.fcai19-7.fna&_nc_gid=3tU8CVtPMYaAEAoV-DVUcQ&oh=00_AfFICX7UOYGbZ01o2DP1U4nOfR4p6P7RUv0AhILIPAql_g&oe=6806DF27",
    //                 alt: "ECPC",
    //                 // description: "ECPC Certificate"
    //             }
    //         ]
    //     },
    //     {
    //         title: "ECPC",
    //         description: "Egyptian Collegiate Programming Contest",
    //         achievement: "Rank 5th in my second year at NU",
    //         year: "2023",
    //         images: [
    //             {
    //                 url: "https://i.ibb.co/NnWkjG8g/486719077-1079195597576204-1921460299948979682-n.jpg",
    //                 alt: "ECPC",
    //                 // description: "ECPC Certificate"
    //             }
    //         ]
    //     },   
    //     {
    //         title: "EOI",
    //         description: "Egyptian Olympiad in Informatics",
    //         achievement: "Rank 51 in Egypt",
    //         year: "2015",
    //         images: [
    //             {
    //                 url: "https://scontent.fcai19-7.fna.fbcdn.net/v/t39.30808-6/462316142_7913407118761100_685588124196353855_n.png?_nc_cat=101&ccb=1-7&_nc_sid=86c6b0&_nc_ohc=7cOAfEscTtUQ7kNvwHHXc59&_nc_oc=AdmZ1IgqnVQhS5ZJxSMlE7VO5h2GwBnOM_SaQ_mXEGhRayrAdbc7l7wIrObBPOGqo6k&_nc_zt=23&_nc_ht=scontent.fcai19-7.fna&_nc_gid=LBTKldq_gsmdhFQ--n6Q6g&oh=00_AfFvKYIPxae6llKl_VT17dG5zIDCLOkf2EigX7n6x00G-g&oe=680AC3F6",
    //                 alt: "EOI",
    //                 // description: "EOI Certificate"
    //             }
    //         ]
    //     },
    //     {
    //         title: "RoboCup",
    //         description: "RoboCup",
    //         achievement: "Rank 10th in Egypt",
    //         year: "2016",
    //         images: [
    //             {
    //                 url: "https://scontent.fcai19-7.fna.fbcdn.net/v/t39.30808-6/462316142_7913407118761100_685588124196353855_n.png?_nc_cat=101&ccb=1-7&_nc_sid=86c6b0&_nc_ohc=7cOAfEscTtUQ7kNvwHHXc59&_nc_oc=AdmZ1IgqnVQhS5ZJxSMlE7VO5h2GwBnOM_SaQ_mXEGhRayrAdbc7l7wIrObBPOGqo6k&_nc_zt=23&_nc_ht=scontent.fcai19-7.fna&_nc_gid=LBTKldq_gsmdhFQ--n6Q6g&oh=00_AfFvKYIPxae6llKl_VT17dG5zIDCLOkf2EigX7n6x00G-g&oe=680AC3F6",
    //                 alt: "RoboCup",
    //                 // description: "RoboCup Certificate"
    //             }
    //         ]
    //     },
    // ],

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