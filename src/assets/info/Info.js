import self from '../img/self.jpg';
import { colors } from '../colors/mainGradient';

export const info = {
  firstName: 'Adlu',
  lastName: 'Bagus I.',
  initials: 'AB', // the example uses first and last, but feel free to use three or more if you like.
  position: 'a Full Stack Developer',
  selfPortrait: self, // don't change this unless you want to name your self-portrait in the "img" folder something else!
  gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
  baseColor: colors[0],
  miniBio: [
    // these are just some "tidbits" about yourself. You can look at mine https://paytonjewell.github.io/#/ for an example if you'd like
    {
      emoji: '🇮🇩',
      text: 'based in the Malang, Indonesia',
    },
    {
      emoji: '💻',
      text: 'Full Stack Developer',
    },
    {
      emoji: '📧',
      text: 'adlubagusi@gmail.com',
    },
  ],
  socials: [
    // {
    //   link: '#', // this should be https://yourname.com/resume.pdf once you've deployed
    //   icon: 'fa fa-file',
    //   label: 'resume',
    // },
    {
      link: 'https://www.instagram.com/adlubagusi/',
      icon: 'fa fa-instagram',
      label: 'instagram',
    },
    {
      link: 'https://github.com/adlubagusi',
      icon: 'fa fa-github',
      label: 'github',
    },
    {
      link: 'https://linkedin.com/in/adlu-bagus-irawan-882962178',
      icon: 'fa fa-linkedin',
      label: 'linkedin',
    },
    {
      link: 'https://twitter.com/',
      icon: 'fa fa-twitter',
      label: 'twitter',
    },
  ],
  bio: "Hello! I'm Adlu Bagus Irawan. I'm a Full Stack Developer. I enjoy building web applications and learning new technologies. I'm currently working at assistindo as a PHP Programmer. I'm also a freelance at BanaTech. I love to watch anime/manga. I'm currently based in Malang, Indonesia.",
  skills: {
    // you dont havew to strictly follow the 'languages', 'frameworks', 'databases', 'cloudServices', and 'tools' categories. You can add your own if you'd like.
    // but the structure should be the same, an array of strings and the key should be one word, no spaces.
    languages: ['JavaScript', 'PHP', 'HTML/CSS', 'TypeScript', 'C++','Jade/Pug JS'],
    frameworks: [
      'React',
      'Node JS',
      'Code Igniter',
      'Lumen/Laravel',
      'Bootstrap/jQuery',
      'Tailwind CSS',
      'Angular JS',
    ],
    databases: ['MySQl', 'MongoDB'],
    cloudServices: ['VPS/Hosting', 'Cloudinary', 'Firebase'],
    tools: [
      'Git',
      'Postman',
      'npm',
      'yarn',
      'Bitbucket',
    ],
  },
  hobbies: [
    {
      label: 'Geography',
      emoji: '🌏',
    },
    {
      label: 'Anime',
      emoji: '🎞',
    },
    {
      label: 'Manga',
      emoji: '📓',
    },
    {
      label: 'Video Games',
      emoji: '🎮',
    },
    {
      label: 'Culinary',
      emoji: '🍣',
    },
    // Same as above, change the emojis to match / relate to your hobbies or interests.
    // You can also remove the emojis if you'd like, I just think they look cute :P
  ],
  portfolio: [
    // This is where your portfolio projects will be detailed
    //   for the null ones, the button will not show up
    {
      title: 'Movimax',
      live: 'https://movimax.co.id', //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
      source: null, // this should be a link to the **repository** of the project, where the code is hosted.
      image: 'https://res.cloudinary.com/dlhrqbvtt/image/upload/v1701062992/adlu-web/dhct4oub2dzi8orxdfi5.png',
    },{
      title: 'E-Commerce MERN',
      live: null, //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
      source: 'https://github.com/adlubagusi/e-commerce-mern', // this should be a link to the **repository** of the project, where the code is hosted.
      image: 'https://res.cloudinary.com/dlhrqbvtt/image/upload/v1701063748/adlu-web/jjseqdlllzhefrdjdlas.png',
    },
    {
      title: 'Koperasi Albanna Bali',
      live: 'https://banatechid.com',
      source: null,
      image: 'https://res.cloudinary.com/dlhrqbvtt/image/upload/v1701064152/adlu-web/m7ou2derpljbq0m60esi.png',
    },
    {
      title: 'Online Office',
      live: 'https://office.banatechid.com',
      source: null,
      image: 'https://res.cloudinary.com/dlhrqbvtt/image/upload/v1701065232/y4v6elsfkncocpdaffhw.png'
    },
  ],
};
