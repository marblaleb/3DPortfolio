import { meta, shopify, starbucks, tesla } from "../assets/images";
import {
    shop,
    makeup,
    artist,
    netflix,
    koro,
    event,
    fiverr,
    santander,
    atrebo,
    carling,
    angular,
    net,
    csharp,
    java,
    spring,
    car,
    contact,
    css,
    estate,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    pricewise,
    react,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: spring,
        name: "Spring Boot",
        type: "Backend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },

    {
        imageUrl: angular,
        name: "Angular",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },

    {
        imageUrl: java,
        name: "Java",
        type: "Backend",
    },


    {
        imageUrl: net,
        name: ".NET",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: csharp,
        name: "C#",
        type: "Backend",
    },
    {
        imageUrl: sass,
        name: "Sass",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    }
];

export const experiences = [
    {
        title: "Fullstack Developer",
        company_name: "Atrebo",
        icon: atrebo,
        iconBg: "#accbe1",
        date: "March 2024 - July 2024",
        points: [
            "Developing and maintaining a modular app using .NET, Javascript and other related technologies.",
            "Work with SQL Server, Entity Framework, and other database technologies to design and manage data storage solutions",
        
        ],
    },
    {
        title: "Video Editor and Designer",
        company_name: "Freelance",
        icon: fiverr,
        iconBg: "#fbc3bc",
        date: "Jan 2021 - Feb 2023",
        points: [
            "Edit raw video footage into cohesive, high-quality videos using Adobe Premiere Pro and DaVinci Resolve. Manage timelines, cutting, trimming, and sequencing clips to create a polished final product.",
            "Create and integrate motion graphics, titles, and visual effects using Adobe After Effects, adding dynamic elements to video projects to enhance storytelling and branding.",
            "Use DaVinci Resolve's advanced color grading tools to enhance the look and feel of video footage, adjusting lighting, color balance, and exposure for a consistent and professional aesthetic.",

        ],
    },
    {
        title: "Copywriter and Content Creator",
        company_name: "Carlinga Ed.",
        icon: carling,
        iconBg: "#b7e4c7",
        date: "Jan 2021 - July 2022",
        points: [
            "Write clear, compelling, and engaging copy for a variety of platforms, including websites, blogs, emails, social media, and product descriptions, tailored to the target audience and brand voice.",
            "SEO-Optimized Copy: Develop content that is optimized for search engines by incorporating relevant keywords, writing meta descriptions, and crafting title tags to improve organic search visibility and rankings.",
  
        ],
    },
    {
        title: "Insurance appraiser",
        company_name: "Santander Insurance",
        icon: santander,
        iconBg: "#a2d2ff",
        date: "Jan 2022 - Jan 2023",
        points: [
            "Review and assess insurance claims in accordance with Santander's insurance policies, terms, and conditions, ensuring all claims meet the company's compliance standards and underwriting guidelines.",
            "Use specialized software and industry knowledge to provide precise estimates for repair or replacement costs, ensuring accurate claim settlements for clients.",
            
        ],
    },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/marblaleb',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/marco-antonio-blanco-lebr%C3%B3n-b76351195/',
    }
];

export const projects = [
    {
        iconUrl: koro,
        theme: 'btn-back-red',
        name: 'Koro. Find your Kore ',
        description: 'Developed a web application that allows to search social events and create them',
        link: 'https://marblaleb.github.io/KoroOriginal/',
    },
    {
        iconUrl: event,
        theme: 'btn-back-green',
        name: 'Full Stack WeMeet App',
        description: 'Created a full-stack social network that allows to create and join social events and write in a forum to share your experiences. Made with Spring and Angular',
        link: 'https://github.com/marblaleb/WeMeet-PI',
    },
    {
        iconUrl: netflix,
        theme: 'btn-back-blue',
        name: 'Netflix Clone',
        description: 'Designed and built a replica of the famous American subscription video streaming service with Angular',
        link: 'https://github.com/marblaleb/Netflix-Angular-Clone',
    },
    {
        iconUrl: artist,
        theme: 'btn-back-pink',
        name: 'Path Gallery for Artists',
        description: 'Built and designed a Path Gallery with nice animations',
        link: 'https://marblaleb.github.io/Path-Gallery/',
    },
    {
        iconUrl: makeup,
        theme: 'btn-back-black',
        name: 'MUA Portfolio',
        description: 'Developed a web portfolio  for the makeup artist Victoria Bauzada.',
        link: 'https://marblaleb.github.io/Victoria-s-Portfolio/',
    },
    {
        iconUrl: shop,
        theme: 'btn-back-yellow',
        name: '.NET Shop',
        description: 'Developed a FullStack Shop with .NET',
        link: 'https://github.com/marblaleb/Tienda-.NET',
    }
];