import { meta, shopify, starbucks, tesla } from "../assets/images";
import {
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
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
        imageUrl: express,
        name: "Express",
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
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: motion,
        name: "Motion",
        type: "Animation",
    },
    {
        imageUrl: mui,
        name: "Material-UI",
        type: "Frontend",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: redux,
        name: "Redux",
        type: "State Management",
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
        title: "React.js Developer",
        company_name: "Starbucks",
        icon: starbucks,
        iconBg: "#accbe1",
        date: "Maret 2020 - April 2021",
        points: [
            "Mengembangkan dan memelihara aplikasi web menggunakan React.js dan teknologi terkait lainnya.",
            "Bekerja sama dengan tim lintas fungsi termasuk desainer, manajer produk, dan pengembang lain untuk menciptakan produk berkualitas tinggi.",
            "Menerapkan desain responsif dan memastikan kompatibilitas antar browser.",
            "Berpartisipasi dalam peninjauan kode dan memberikan masukan konstruktif kepada pengembang lain.",
        ],
    },
    {
        title: "React Native Developer",
        company_name: "Tesla",
        icon: tesla,
        iconBg: "#fbc3bc",
        date: "Jan 2021 - Feb 2022",
        points: [
            "Mengembangkan dan memelihara aplikasi web menggunakan React.js dan teknologi terkait lainnya.",
            "Bekerja sama dengan tim lintas fungsi termasuk desainer, manajer produk, dan pengembang lain untuk menciptakan produk berkualitas tinggi.",
            "Menerapkan desain responsif dan memastikan kompatibilitas antar browser.",
            "Berpartisipasi dalam peninjauan kode dan memberikan masukan konstruktif kepada pengembang lain.",
        ],
    },
    {
        title: "Web Developer",
        company_name: "Shopify",
        icon: shopify,
        iconBg: "#b7e4c7",
        date: "Jan 2022 - Jan 2023",
        points: [
            "Mengembangkan dan memelihara aplikasi web menggunakan React.js dan teknologi terkait lainnya.",
            "Bekerja sama dengan tim lintas fungsi termasuk desainer, manajer produk, dan pengembang lain untuk menciptakan produk berkualitas tinggi.",
            "Menerapkan desain responsif dan memastikan kompatibilitas antar browser.",
            "Berpartisipasi dalam peninjauan kode dan memberikan masukan konstruktif kepada pengembang lain.",
        ],
    },
    {
        title: "Full Stack Developer",
        company_name: "Meta",
        icon: meta,
        iconBg: "#a2d2ff",
        date: "Jan 2023 - Sekarang",
        points: [
            "Mengembangkan dan memelihara aplikasi web menggunakan React.js dan teknologi terkait lainnya.",
            "Bekerja sama dengan tim lintas fungsi termasuk desainer, manajer produk, dan pengembang lain untuk menciptakan produk berkualitas tinggi.",
            "Menerapkan desain responsif dan memastikan kompatibilitas antar browser.",
            "Berpartisipasi dalam peninjauan kode dan memberikan masukan konstruktif kepada pengembang lain.",
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
        link: 'https://github.com/YourGitHubUsername',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/YourLinkedInUsername',
    }
];

export const projects = [
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'Pelacak Harga Amazon',
        description: 'Mengembangkan aplikasi web yang memantau dan memberi notifikasi kepada pengguna tentang perubahan harga produk di Amazon, membantu pengguna menemukan penawaran terbaik.',
        link: 'https://github.com/adrianhajdin/pricewise',
    },
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: 'Clone Threads Full Stack',
        description: 'Membuat replika full-stack dari platform diskusi populer "Threads", memungkinkan pengguna untuk memposting dan terlibat dalam percakapan berantai.',
        link: 'https://github.com/adrianhajdin/threads',
    },
    {
        iconUrl: car,
        theme: 'btn-back-blue',
        name: 'Aplikasi Pencarian Mobil',
        description: 'Merancang dan membangun aplikasi mobile untuk mencari dan membandingkan mobil yang tersedia di pasaran, mempermudah proses pembelian mobil.',
        link: 'https://github.com/adrianhajdin/project_next13_car_showcase',
    },
    {
        iconUrl: snapgram,
        theme: 'btn-back-pink',
        name: 'Clone Instagram Full Stack',
        description: 'Membangun clone lengkap dari Instagram, memungkinkan pengguna berbagi foto dan terhubung dengan teman dalam lingkungan media sosial yang familiar.',
        link: 'https://github.com/adrianhajdin/social_media_app',
    },
    {
        iconUrl: estate,
        theme: 'btn-back-black',
        name: 'Aplikasi Real Estate',
        description: 'Mengembangkan aplikasi web untuk listing properti real estat, memfasilitasi pencarian properti dan menghubungkan pembeli dengan penjual.',
        link: 'https://github.com/adrianhajdin/projects_realestate',
    },
    {
        iconUrl: summiz,
        theme: 'btn-back-yellow',
        name: 'Aplikasi AI Ringkasan',
        description: 'Aplikasi yang memanfaatkan AI untuk secara otomatis menghasilkan ringkasan yang singkat dan informatif dari konten teks panjang atau blog.',
        link: 'https://github.com/adrianhajdin/project_ai_summarizer',
    }
];
