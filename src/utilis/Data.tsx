import { FaReact, FaCss3Alt } from 'react-icons/fa';
import { SiTypescript, SiJavascript } from 'react-icons/si';
import Project1 from '../Assetss/weatherapp.png';
import Project2 from '../Assetss/counter.png';
import Project3 from '../Assetss/ecommerce.png';
import Project4 from '../Assetss/testimony.png'

export const Skills = [
    {
        id: 0,
        tech: 'React JS',
        icon: <FaReact />
    },
    {
        id: 1,
        tech: 'TypeScript TS',
        icon: <SiTypescript />
    },
    {
        id: 2,
        tech: 'CSS',
        icon: <FaCss3Alt />
    },
    {
        id: 3,
        tech: 'Javascript',
        icon: <SiJavascript />
    }
]
export const projectDetails = [
    {
        id: 0,
        project_name: "Weather App",
        project_desc: "Live weather forecasting with Javascript and use of API",
        tech_stack: ['JavaScript', 'BootStrap CSS', 'API'],
        project_img: Project1,
        project_url: 'https://adedeji-weather-app.netlify.app/',
        reverse: false,
    },
    {
        id: 0,
        project_name: "Review Counter",
        project_desc: "Animated Counter",
        tech_stack: ['JavaScript', 'BootStrap CSS'],
        project_img: Project2,
        project_url: 'https://adedeji-resturant-counter.netlify.app/',
        reverse: true,
    },
    {
        id: 0,
        project_name: "E-commerce Website",
        project_desc: "A multipaged E-commerce website using JavaScript",
        tech_stack: ['JavaScript', 'BootStrap CSS'],
        project_img: Project3,
        project_url: 'https://adedeji-ecommerce.netlify.app/',
        reverse: false,
    },
    {
        id: 0,
        project_name: "Color Flipper",
        project_desc: "Backgroup Color Flipper",
        tech_stack: ['JavaScript', 'BootStrap CSS'],
        project_img: Project1,
        project_url: 'https://adedeji-color-flipper.netlify.app/',
        reverse: true,
    },
]

export const navLinks = [
    {
        id: 0,
        name: 'Home',
        href: 'Home',
    },
    {
        id: 1,
        name: 'My skills',
        href: 'Skills',
    },
    {
        id: 2,
        name: 'My projects',
        href: 'Projects',
    },
    {
        id: 3,
        name: 'My Contact',
        href: 'Contact',
    },
]