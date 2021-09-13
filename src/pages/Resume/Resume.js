import { Grid,Typography } from '@material-ui/core';
import  React from 'react';
import resumeData from '../../utils/resumeData';

import './Resume.css';

const Resume = () => {

    return(
        <>
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
        </>
    );
}

export default Resume;