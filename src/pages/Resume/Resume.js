import { Grid,Icon,Paper,TextField,Typography } from '@material-ui/core';
import { School, Work } from '@material-ui/icons';
import Timeline from '@material-ui/lab/Timeline';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import  React from 'react';
import CustomButton from '../../components/Button/Button';
import CustomTimeLine from '../../components/Timeline/Timeline';
import resumeData from '../../utils/resumeData';

import './Resume.css';

const Resume = () => {

    return(
        <>
        {/* About me */}
            <Grid container className="resume_section pad_b_45">
                <Grid item className="section_title m_b_30">
                    <span></span>
                    <Typography variant="h6">
                        About Me
                    </Typography>
                    
                </Grid>
                <Grid item xs={12}>
                    <Typography className="aboutme_text"> {resumeData.about_me} </Typography>
                </Grid>
            </Grid>
            <Grid container className="resume_section">
                <Grid item className="section_title">
                    <span></span>
                    <Typography>
                        
                    </Typography>
                    
                </Grid>
            </Grid>
        
        {/* Education and Work */}
        <Grid container className="resume_section pad_b_45">
            <Grid item className="section_title m_b_30">
                <span></span>
                <Typography variant="h6">
                    Resume
                </Typography>  
            </Grid>

            <Grid item xs={12}>
                <Grid container>

                    {/* Experience */}
                        <Grid item sm={12} md={6}>
                            <CustomTimeLine title={"Work Experiences"} icon={<Work />}>
                                    {
                                        resumeData.work_history.map( (item,key) => {

                                            return (

                                                <TimelineItem>
                                                    <TimelineSeparator className="seperator_padding">
                                                        <TimelineDot variant={"outlined"} className={"timeline_dot"} />
                                                        <TimelineConnector />

                                                    </TimelineSeparator>
                                                    <TimelineContent className={"timeline_content"}>
                                                        <Typography className="timeline_designation">
                                                        {item.designation}
                                                        </Typography>
                                                        <Typography variant="caption" className="timeline_dated">
                                                        {item.dated}
                                                        </Typography>
                                                        <Typography variant="body2" className="timeline_description">
                                                        {item.description}
                                                        </Typography>

                                                    </TimelineContent>
                                                </TimelineItem>
                                                
                                            )  
                                        })
                                    }
                            </CustomTimeLine>
                        </Grid>

                    {/* Education */}
                        <Grid item sm={12} md={6}>
                        <CustomTimeLine title={"Education History"} icon={<School />}>
                                    {
                                        resumeData.education.map( (item,key) => {

                                            return (

                                                <TimelineItem>
                                                    <TimelineSeparator className="seperator_padding">
                                                        <TimelineDot variant={"outlined"} className={"timeline_dot"} />
                                                        <TimelineConnector />

                                                    </TimelineSeparator>
                                                    <TimelineContent className={"timeline_content"}>
                                                        <Typography className="timeline_course">
                                                        {item.course}
                                                        </Typography>
                                                        <Typography variant="caption" className="timeline_dated">
                                                        {item.dated}
                                                        </Typography>
                                                        <Typography variant="body2" className="timeline_school">
                                                        {item.school}
                                                        </Typography>

                                                    </TimelineContent>
                                                </TimelineItem>
                                                
                                            )  
                                        })
                                    }
                            </CustomTimeLine>
                        
                        </Grid>
                </Grid>    
             </Grid>
        </Grid>
        
        {/* Services */}
        <Grid container className="service_section  pad_b_45"  >
            <Grid item className="section_title mb_30">
                <span></span>
                <Typography variant="h6">
                    My Services
                </Typography>  
            </Grid>
            <Grid item xs={12}>
                <Grid container  justify='space-around'>
                    { resumeData.services.map( (item,key) => {

                        return (
                            <Grid xs={12} sm={6} md={3}>
                                <div className={"service"}>
                                    <Icon className={"service_icon"}>{item.icon}</Icon>
                                    <Typography className="service_title" variant="h6">
                                        {item.title}
                                    </Typography>
                                    <Typography className="service_description" variant="body2">
                                        {item.description}
                                    </Typography>
                                </div>
                            </Grid>
                        )
                    })}
                </Grid>
            </Grid>
        </Grid>
        
        {/* Skills */}
        <Grid container className="skill_section graybg pad_b_45 pad_50">
            <Grid item xs={12}>
                <Grid container spacing={3} justify="space-between" >
                    {
                        resumeData.skills.map( (skill) => (
                            <Grid item xs={12} sm={6} md={3}>
                                    <Paper elevation={0} className="skills">
                                        <Typography variant="h6" className="skills_title">
                                            {skill.title}
                                        </Typography>

                                        {skill.description.map( (item) => (

                                                <Typography variant="body2" className="skills_description">
                                                    <TimelineDot variant="outlined" className="timeline_dot"/>
                                                    {item}
                                                </Typography>

                                        ))}
                                    </Paper>
                            </Grid>

                        ))
                    }
                </Grid>
            </Grid>
        </Grid>
        
        {/* Contacts */}
        <Grid container spacing={5} className="contacts_section pad_t_45 pad_b_45">
                {/* contact form */}
                <Grid item xs={12} lg={7}>
                    <Grid container className="pad_b_45">
                        <Grid item className="section_title mb_30">
                            <span></span>
                            <Typography variant="h6">
                                Contact Form
                            </Typography>  
                        </Grid>
                        <Grid item xs={12}>
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={6}>
                                    <TextField fullWidth name='name' label="Name"/>
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField fullWidth name='email' label="Email"/>
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField fullWidth name='message' label="Message" multiline rows={4}/>
                                </Grid>
                                <Grid item xs={12}>
                                    <CustomButton text='Submit' />
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    
                </Grid>
                {/* contact information */}
                <Grid item xs={12} lg={5}>
                    <Grid container>
                        <Grid item className="section_title mb_30">
                            <span></span>
                            <Typography variant="h6">
                                Contact Information
                            </Typography>  
                        </Grid>
                        <Grid item xs={12}>
                            <Grid container>
                                <Grid item xs={12}>
                                    <Typography className="contactinfo_item">
                                        <span>Address</span> :  {resumeData.address}
                                    </Typography>
                                </Grid>
                                <Grid item xs={12}>
                                    <Typography className="contactinfo_item">
                                        <span>Phone</span> :  {resumeData.phone}
                                    </Typography>
                                </Grid>
                                <Grid item xs={12}>
                                    <Typography className="contactinfo_item">
                                        <span>Email</span> :  {resumeData.email}
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Grid>  
                        <Grid item xs={12}>
                            <Grid container className="contactinfo_socialcontainer">
                                {
                                    Object.keys(resumeData.socials).map( (item) => (

                                        <Grid item className="contactinfo_social">
                                                <a key={resumeData.socials[item].link} href={resumeData.socials[item].link} target="_blank">
                                                        {resumeData.socials[item].icon}
                                                </a>
                                        </Grid>
                                    ))
                                }
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                
        </Grid>

        </>

    );
}

export default Resume;