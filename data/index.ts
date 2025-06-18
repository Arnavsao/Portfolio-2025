export const navItems = [
  { name: 'About', link: '#about' },
  { name: 'Projects', link: '#projects' },
  { name: 'Experience', link: '#experience' },
  { name: 'Testimonials', link: '#testimonials' },
  { name: 'Contact', link: '#contact' },
]

export const gridItems = [
  {
    id: 1,
    title: 'I prioritize client collaboration, fostering open communication ',
    description: '',
    className: 'lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]',
    imgClassName: 'w-full h-full',
    titleClassName: 'justify-end',
    img: '/b1.svg',
    spareImg: '',
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: '',
    className: 'lg:col-span-2 md:col-span-3 md:row-span-2',
    imgClassName: '',
    titleClassName: 'justify-start',
    img: '',
    spareImg: '',
  },
  {
    id: 3,
    title: 'My tech stack',
    description: 'I constantly try to improve',
    className: 'lg:col-span-2 md:col-span-3 md:row-span-2',
    imgClassName: '',
    titleClassName: 'justify-center',
    img: '',
    spareImg: '',
  },
  {
    id: 4,
    title: 'Tech enthusiast with a passion for development.',
    description: '',
    className: 'lg:col-span-2 md:col-span-3 md:row-span-1',
    imgClassName: '',
    titleClassName: 'justify-start',
    img: '/grid.svg',
    spareImg: '/b4.svg',
  },

  {
    id: 5,
    title: 'Working on scalable frontend at BridgeYU',
    description: 'The Inside Scoop',
    className: 'md:col-span-3 md:row-span-2',
    imgClassName: 'absolute right-0 bottom-0 md:w-96 w-60',
    titleClassName: 'justify-center md:justify-start lg:justify-center',
    img: '/b5.svg',
    spareImg: '/grid.svg',
  },
  {
    id: 6,
    title: 'Do you want to start a project together?',
    description: '',
    className: 'lg:col-span-2 md:col-span-3 md:row-span-1',
    imgClassName: '',
    titleClassName: 'justify-center md:max-w-full max-w-60 text-center',
    img: '',
    spareImg: '',
  },
]

export const projects = [
  {
    id: 1,
    title: 'Tomato: Food Delivery Website',
    des: 'Built a responsive MERN stack food delivery platform with real-time tracking and JWT-auth, enhancing user experience by 40%.',
    img: '/projects/tomato.png',
    iconLists: ['/re.svg', '/node.svg', '/express.svg', '/mongo.svg', '/jwt.svg'],
    link: 'https://tomato-food-delivery-frontend.vercel.app/',
  },
  {
    id: 2,
    title: 'RAG System using OpenAI GPT-4',
    des: 'Developed a scalable RAG system with LangChain and FAISS, processing 10k+ queries daily via FastAPI endpoints.',
    img: '/projects/gail rag.png',
    iconLists: ['/py.svg', '/fastapi.svg', '/openai.svg', '/faiss.svg', '/langchain.svg'],
    link: 'https://github.com/Arnavsao/Gail_Chatbot_Model',
  },
  {
    id: 3,
    title: 'Image Stitching Automation',
    des: 'Automated panoramic image generation with OpenCV, supporting image preprocessing, contour detection, and CLI interaction.',
    img: '/projects/image stitching.png',
    iconLists: ['/py.svg', '/opencv.svg', '/numpy.svg', '/imutils.svg', '/cli.svg'],
    link: 'https://github.com/Arnavsao/DIC-Project-Image-Stitching-using-OpenCV',
  },
  {
    id: 4,
    title: 'MultiModal RAG App for Video Processing',
    des: 'Designed a MultiModal RAG system using LlamaIndex, LanceDB, and GPT-4V to process videos and generate context-rich responses.',
    img: '/projects/multimodal rag.png',
    iconLists: ['/llama.svg', '/lancedb.svg', '/openai.svg', '/yt.svg', '/vision.svg'],
    link: 'https://github.com/Arnavsao/MultiModal_RAG_System',
  },
];

export const testimonials = [
  {
    quote:
      "Arnav has consistently demonstrated professionalism, technical excellence, and a strong sense of ownership across every team he’s contributed to. At BridgeYU, he built and maintained over of the main web app's frontend, implemented scalable architecture with Redux Toolkit, and enhanced developer workflows with clean, modular components. His work ethic and communication made sprint planning smoother and deliveries more reliable.",
    name: 'Ajit Rana',
    title: 'CTO at BridgeYU',
    image: 'https://ca.slack-edge.com/T06TH7HBD6U-U06SUB7ED6X-8965cf2a2d5f-192'
  },
  {
    quote:
      "I’ve seen Arnav take full ownership of feature delivery, from implementing responsive UI layouts to handling state logic with precision. He’s proactive in communication, clear with updates, and quick to understand business needs. His frontend contributions and collaborative spirit added tremendous value to our product and team dynamics.",
    name: 'Rohit Sengupta',
    title: 'Project Manager at BridgeYU',
    image: 'https://ca.slack-edge.com/T06TH7HBD6U-U06SMRDFJTY-76a35b78f428-192'
  },
  {
    quote:
      "Despite joining as an intern, Arnav approached the work like a seasoned developer. He modularized a complex layout, cleaned up legacy code, and suggested meaningful UI improvements. He worked independently when needed and contributed across our codebase with maturity and efficiency. A true asset to any team.",
    name: 'Patel Muhammad',
    title: 'Senior Frontend Developer at BridgeYU',
    image: 'https://ca.slack-edge.com/T06TH7HBD6U-U08M7MFU287-02ae7da787f6-192'
  },
  {
    quote:
      "Arnav was instrumental in implementing GenAI chatbot features and RAG-based API systems at TitansAI. He combined strong frontend skills with backend AI integration, understood client requirements quickly, and delivered solutions ahead of schedule. His ability to work across the stack and deliver clean, scalable code stood out during the entire freelance engagement.",
    name: 'Sam Yokubbaev',
    title: 'Founder & CEO at TitansAI',
    image: 'https://media.licdn.com/dms/image/v2/D4D03AQGoDqDp5J5T0Q/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1726475196640?e=1755734400&v=beta&t=D7IMEugFya1wjiMZ9o1aAjZBZ8TciCVSpu4kAjtVTOs'
  },
  {
    quote:
      "Arnav quickly improved the stability of our web frontend at HealthyBites by resolving layout inconsistencies and ensuring responsiveness across browsers. His contributions helped us deliver a polished product experience. His attention to performance optimization and cross-browser support was invaluable during tight deadlines.",
    name: 'Karan Vishwakarma',
    title: 'Tech Lead at HealthyBites',
    image: 'https://media.licdn.com/dms/image/v2/D5603AQHMPXdOQK2EyA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1725742339732?e=1755734400&v=beta&t=qAceq4HBKatMzbaHKhDj7N3YkalSiPgr9plcEP2x17s'
  },
];

export const companies = [
  {
    id: 1,
    name: 'cloudinary',
    img: '/cloud.svg',
    nameImg: '/cloudName.svg',
  },
  {
    id: 2,
    name: 'appwrite',
    img: '/app.svg',
    nameImg: '/appName.svg',
  },
  {
    id: 3,
    name: 'HOSTINGER',
    img: '/host.svg',
    nameImg: '/hostName.svg',
  },
  {
    id: 4,
    name: 'stream',
    img: '/s.svg',
    nameImg: '/streamName.svg',
  },
  {
    id: 5,
    name: 'docker.',
    img: '/dock.svg',
    nameImg: '/dockerName.svg',
  },
]

export const workExperience = [
  {
    id: 1,
    title: 'Frontend Engineer Intern',
    desc: 'Assisted in the development of a web-based platform using React.js, enhancing interactivity.',
    className: 'md:col-span-2',
    thumbnail: '/exp1.svg',
  },
  {
    id: 2,
    title: 'Mobile App Dev - JSM Tech',
    desc: 'Designed and developed mobile app for both iOS & Android platforms using React Native.',
    className: 'md:col-span-2', // change to md:col-span-2
    thumbnail: '/exp2.svg',
  },
  {
    id: 3,
    title: 'Freelance App Dev Project',
    desc: 'Led the dev of a mobile app for a client, from initial concept to deployment on app stores.',
    className: 'md:col-span-2', // change to md:col-span-2
    thumbnail: '/exp3.svg',
  },
  {
    id: 4,
    title: 'Lead Frontend Developer',
    desc: 'Developed and maintained user-facing features using modern frontend technologies.',
    className: 'md:col-span-2',
    thumbnail: '/exp4.svg',
  },
]

export const socialMedia = [
  {
    id: 1,
    img: '/git.svg',
    link: 'https://github.com/Arnavsao',
  },
  {
    id: 2,
    img: '/twit.svg',
    link: 'https://x.com/_arnav_sao_',
  },
  {
    id: 3,
    img: '/link.svg',
    link: 'https://www.linkedin.com/in/arnavsao/',
  },
  {
    id: 4,
    img: '/leetcode.svg',
    link: 'https://leetcode.com/u/arnavsao1924/',
  },
]
