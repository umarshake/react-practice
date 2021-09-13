import FacebookIcon from '@material-ui/icons/Facebook';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

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
            place:'Hyderabad,India',
            company:'Conversion Bug',
            designation:'Junior Software Engineer',
            dated: '03-2017 to 06-2017' 
        },
        {
            place:'Srinagar,India',
            company:'Logic Paradise',
            designation:'Web Developer',
            dated: '07-2017 to 10-2019' 
        },
        {
            place:'Bengaluru,India',
            company:'Provab Techsoft',
            designation:'Software Engineer',
            dated: '11-2019 to 06-2020' 
        },
        {
            place:'Bengaluru,India',
            company:'Marmeto',
            designation:'Backend Developer',
            dated: '06-2020 to 08-2021' 
        }
    ],
    about_me:"I am a sotware engineer having 4 years of experience in web development and sotware engineering.I am looking for new opportuinities to implement my skills and enhance them with new one.",

    
} 

export default  resumeData;