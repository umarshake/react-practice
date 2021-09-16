import { Card, CardActionArea, CardContent, CardMedia, Dialog, DialogActions, DialogContent, DialogTitle, Grid, Grow, Tab, Tabs, Typography } from '@material-ui/core';
import React, { useState } from 'react';
import resumeData from '../../utils/resumeData';
import ImageGallery from '../../components/ImageGallery/ImageGallery';

import './Portfolio.css';


const Portfolio = () => {
    const [tabValue, setTabValue] = useState('All');
    const [projectDialog, setProjectDialog] = useState(false);



    return (

        <Grid container spacing={1} className="portfolio_section pad_t_45 pad_b_45">
            {/* title */}
            <Grid item className="section_title mb_30">
                <span></span>
                <Typography variant="h6">
                    Portfolio
                </Typography>
            </Grid>

            {/* tabs */}
            <Grid item xs={12}>
                <Tabs
                    value={tabValue}
                    indicatorColor="white"
                    className="customTabs"
                    onChange={(event, newValue) => setTabValue(newValue)}>

                    <Tab label="All" value="All" className={tabValue === 'All' ? "customTabs_item active" : "customTabs_item"} />

                    {
                        [...new Set(resumeData.portfolio.map((item) => item.tag))].map(tag => (
                            <Tab label={tag} value={tag} className={tabValue ===  tag  ? "customTabs_item active" : "customTabs_item"} />
                        ))
                    }
                </Tabs>
            </Grid>
            {/* Projects */}
            <Grid item xs={12}>
                <Grid container spacing={3}>
                    {
                        resumeData.portfolio.map(project => (

                            project.tag == tabValue || tabValue == 'All' ?
                                (

                                    <Grid item xs={12} sm={6} md={4}>
                                        <Grow in timeout={1000}>
                                            <Card className="customCard" onClick={() => setProjectDialog(project)}>
                                                <CardActionArea>
                                                    <CardMedia className="customCard_image" image={project.image} title={project.title} />
                                                    <CardContent>
                                                        <Typography variant="body2" className="customCard_title">{project.title}</Typography>
                                                        <Typography variant="body2" className="customCard_caption">{project.caption}</Typography>
                                                    </CardContent>
                                                </CardActionArea>
                                            </Card>
                                        </Grow>
                                    </Grid>

                                )
                                : null

                        ))
                    }
                </Grid>
            </Grid>

            <Dialog className="projectDialog" 
            open={projectDialog} onClose={() => setProjectDialog(false)} 
            maxWidth={"lg"}
            fullWidth>
                <DialogTitle onClose={() => setProjectDialog(false)}>{projectDialog.title}</DialogTitle>
                {/* <img src={projectDialog.image} alt="image_caption" className="projectDialog_image" /> */}
                <DialogContent>
                    <Typography className="projectDialog_description">
                        {projectDialog.description}
                    </Typography>
                </DialogContent>
                {
                    projectDialog.images && (
                            <ImageGallery images={projectDialog.images}/>
                    )
                }
                <DialogActions className="projectDialog_actions">
                    {
                        projectDialog?.links?.map((link) => (
                            <a className="projectDialog_icon" href={link.link} target="_blank"> {link.icon} </a>
                        ))
                    }
                </DialogActions>
            </Dialog>

        </Grid>
    );
}

export default Portfolio;