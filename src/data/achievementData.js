import scrumImage from '../assets/png/Scrum.png';
import frontend from '../assets/png/Frontend.png';
import figma from '../assets/png/Figma.png';
import node from '../assets/png/Node.png';


export const achievementData = {
    bio : "The illiterate of the 21st century will not be those who cannot read and write, but those who cannot learn, unlearn, and relearn. - Alvin Toffler",
    achievements : [
        {
            id : 1,
            title : 'Figma Course',
            details : 'Platzi',
            date : 'August, 2022',
            field : 'UX',
            image: figma
        },
        {
            id : 2,
            title : 'Scrum Foundation Professional Certificate SFPC',
            details : 'Certi Prof',
            date : 'September, 2022',
            field : 'UX',
            image : scrumImage
        },
        {
            id : 3,
            title : 'Fundamentals course with node.js',
            details : 'Platzi',
            date : 'October, 2022',
            field : 'Backend',
            image : node
        },
        {
            id: 4,
            title : 'Frontend Developer Course',
            details : 'Platzi',
            date : 'December, 2021',
            field : 'Frontend',
            image : frontend
            
       }

    ]
}


// Do not remove any fields.
// Leave it blank instead as shown below.

/*

export const achievementData = {
    bio : "",
    achievements : []
}

*/