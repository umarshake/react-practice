import { AssignmentOutlined, GestureOutlined, GitHub, Language, Speed, WebOutlined, YouTube } from '@material-ui/icons';
import FacebookIcon from '@material-ui/icons/Facebook';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

import tab_back_1 from '../assets/images/tab_background.jpg';
import tab_back_2 from '../assets/images/tab_back2.jpeg';
import tab_back_3 from '../assets/images/tab_back3.jpeg';


var resumeData = {
    name: 'Umar Khan',
    designation: 'Software Engineer',
    birthday: '10-january-1990',
    address: 'Srinagar, Jammu & Kashmir, India',
    phone: '91-9541588557',
    email: 'umarkhan.shakeel@gmail.com',
    skype: 'umarkhan.shakeel@gmail.com',
    company: 'Silver Bullet',
    socials: {

        facebook: {
            link: 'facebook/address',
            text: 'facebook_umar',
            icon: <FacebookIcon />
        },
        linkedin: {
            link: 'linkedin/address',
            text: 'linked_umar',
            icon: <LinkedInIcon />
        },
        github: {
            link: 'github/address',
            text: 'github_umar',
            icon: <GitHubIcon />
        },
       
    },
    education: [
        
        {
            place: 'Srinagar',
            course: 'Master of Computer Applications',
            school: 'Univeristy of Kashmir',
            dated: '2013-2016' 
        },
        {
            place: 'Srinagar',
            course: 'Bachelor of Computer Applications',
            school: 'Univeristy of Kashmir',
            dated: '2009-2012' 
        },
        {
            place: 'Srinagar',
            course: 'High School',
            school: 'Sri Pratap Higher Secondry School',
            dated: '2007-2009' 
        },

    ],
    work_history: [

        {
            place:'Bengaluru,India',
            company:'Marmeto',
            designation:'Backend Developer',
            dated: '06-2020 to 08-2021',
            description:'Create, deploy, and test the web applications using Laravel and Shopify Rest Apis'
        },
        {
            place:'Bengaluru,India',
            company:'Provab Techsoft',
            designation:'Software Engineer',
            dated: '11-2019 to 06-2020',
            description:'Create and test the web applications using Code ignitor and react js'

        },
        {
            place:'Srinagar,India',
            company:'Logic Paradise',
            designation:'Web Developer',
            dated: '07-2017 to 10-2019',
            description:'Create and integrate the web applications using Laravel and Angular js'

        },
        {
            place:'Hyderabad,India',
            company:'Conversion Bug',
            designation:'Junior Software Engineer',
            dated: '03-2017 to 06-2017',
            description:'Working on the apps using Nodejs,sockets.io and image pattern drawing using Open CV'

        },
        
        
        
    ],
    services:[
        {
            title:'Web Development',
            description: '4 years of professional experience in Web development',
            icon: <WebOutlined />
        },
        {
            title:'Branding Identity',
            description: 'Building a brand that is cachable and make a trace',
            icon: <AssignmentOutlined />

        },
        {
            title:'Illustrator Design',
            description: '2 years of professional experience in Illustrator',
            icon: <GestureOutlined />

        },
        {
            title:'Fast Delivery',
            description: 'I deliver your businees better and faster',
            icon: <Speed />

        },

    ],

    skills:[
        {
            title: 'Front End',
            description:[
                'ReactJS',
                'VueJs',
                'JavaScript',
                'Bootstrap',
                'MaterialUI',
            ]
        },
        {
            title: 'Backend',
            description:[
                'NodeJs',
                'PHP Laravel',
                'Python'
            ]
        },
        {
            title: 'Databases',
            description:[
                'MySQL',
                'Firebase',
                'MongoDB'
            ]
        },
        {
            title: 'Source Control',
            description:[
                'GIT',
                'GITHUB',
                'GITLAB'
            ]
        },
    ],
    portfolio:[
        {
            tag:'React',
            image:tab_back_1,
            images: [
                tab_back_1,
                tab_back_2,
                tab_back_3,
            ],
            title:'React project 1',
            caption:'A short description',
            description: 'this is the project description of project one',
            links:[
                {link:'https://www.google.com',icon: <YouTube />},
                {link:'https://www.google.com',icon: <GitHub />},
                {link:'https://www.google.com',icon: <Language />},
            ]
        },
        {
            tag:'React',
            image:tab_back_2,
            images: [
                tab_back_1,
                tab_back_2,
                tab_back_3,
            ],
            caption:'A short description',
            title:'React project 2',
            description: 'this is the project description of project two in react',
            links:[
                {link:'https://www.google.com',icon: <YouTube />},
                {link:'https://www.google.com',icon: <GitHub />},
                {link:'https://www.google.com',icon: <Language />},
            ]
        },
        {
            tag:'JavaScript',
            image:tab_back_3,
            images: [
                tab_back_1,
                tab_back_2,
                tab_back_3,
            ],
            caption:'A short description',
            title:'JavaScript project 2',
            description: 'this is the project description of project two',
            links:[
                {link:'https://www.google.com',icon: <YouTube />},
                {link:'https://www.google.com',icon: <GitHub />},
                {link:'https://www.google.com',icon: <Language />},
            ],
            
        },
        {
            tag:'Python',
            image:tab_back_1,
            images: [
                tab_back_1,
                tab_back_2,
                tab_back_3,
            ],
            caption:'A short description',
            title:'Python project 2',
            description: 'this is the project description of project two',
            links:[
                {link:'https://www.google.com',icon: <YouTube />},
                {link:'https://www.google.com',icon: <GitHub />},
                {link:'https://www.google.com',icon: <Language />},
            ],
            
        },
        

    ],
    about_me:"I am a sotware engineer having 4 years of experience in web development and sotware engineering.I am looking for new opportuinities to implement my skills and enhance them with new one.",

    
} 

export default  resumeData;