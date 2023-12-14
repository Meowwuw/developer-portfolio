import one from '../assets/svg/projects/one.svg'
import two from '../assets/svg/projects/two.svg'
import three from '../assets/svg/projects/three.svg'
import four from '../assets/svg/projects/four.svg'
import five from '../assets/svg/projects/five.svg'
import six from '../assets/svg/projects/six.svg'
import seven from '../assets/svg/projects/seven.svg'
import eight from '../assets/svg/projects/eight.svg'

import pokemon from '../assets/png/pokemon.png';
import patitas from '../assets/png/Patitas.jpg';
import movies from '../assets/png/movies.png';
import cientifica from '../assets/png/cientifica.png';
import sanke from '../assets/png/Sanke.jpg';
import MDP from '../assets/png/MDP.jpg';



export const projectsData = [
    {
        id: 1,
        projectName: 'Data Lovers | Pokemon Web Site',
        projectDesc: 'A website where you can search and discover information about your favorite Pokémon and learn more about the different types of Pokémon that exist.',
        tags: ['SPA', 'HTML' ,'CSS', 'Javascript'],
        code: 'https://github.com/Meowwuw/Datalovers-Pokedex/tree/main/src',
        demo: 'https://meowwuw.github.io/Datalovers-Pokedex/src/index.html',
        image: pokemon
    },
    {
        id: 2,
        projectName: 'Social Network | Patitas',
        projectDesc: 'Social network developed in SPA format, you can register, log in, post, edit and like.',
        tags: ['HTML', 'CSS','Javascript','Firebase'],
        code: 'https://github.com/adrieli2307/DEV005-social-network/tree/main',
        demo: 'https://patitas-91318.web.app/',
        image: patitas
    },
    {
        id: 3,
        projectName: 'Movie Challengue | Movies',
        projectDesc: 'Movie application that uses the TMDB API to have the best updated movies',
        tags: ['React', 'Css', 'Jest'],
        code: 'https://github.com/Meowwuw/Movie-Challenge-Magenta',
        demo: 'https://movie-challenge-magenta-6b1a.vercel.app/',
        image: movies
    },
    {
        id: 4,
        projectName: 'Cientifica Peruana | App',
        projectDesc: 'Application built for the Cientifica Peruana, for the private use of its distributors',
        tags: ['Angular', 'Css', 'Dynamo DB', 'Serveless', 'AWS S3'],
        code: 'https://www.figma.com/file/sIHQQZ5AC7Wp1igOMRYgyl/Cient%C3%ADfica-Mockup?type=design&node-id=0%3A1&mode=design&t=G8jzHEUHgexUYtrq-1',
        demo: 'https://cientificaperuana.com/',
        image: cientifica
    },
    {
        id: 5,
        projectName: 'Sanke Nomabo | Textil',
        projectDesc:  'Sanke nomabo is a project created for the Shipiba community in Caimito',
        tags: ['Figma', 'UX', 'Trello','Design Thinking'],
        demo: 'https://www.figma.com/file/GzS6RljD0dIoXNe79dwUTQ/Saken-Nomabo?type=design&node-id=0%3A1&mode=design&t=BMyMUuhJkfCanj1s-1',
        image: sanke
    },

    {
        id: 6,
        projectName: 'MDP | Ticketing Prototype',
        projectDesc: 'Prototyping in figma for ticketing incident attention',
        tags: ['Figma', 'UX', 'Prototypes'],
        demo: 'https://www.figma.com/file/iWi6LocuGMq7Vy7RCl2gvo/MDP?type=design&node-id=0-1&mode=design&t=HLQdzt2J4nnOcnWD-0',
        image: MDP
    },
    
]


// Do not remove any fields.
// Leave it blank instead as shown below

/* 
{
    id: 1,
    projectName: 'Car Pooling System',
    projectDesc: '',
    tags: ['Flutter', 'React'],
    code: '',
    demo: '',
    image: ''
}, 
*/