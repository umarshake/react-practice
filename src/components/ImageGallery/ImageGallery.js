import { Card, CardActionArea, CardContent, CardMedia, Dialog, DialogActions, DialogContent, DialogTitle, Grid, Grow, Tab, Tabs, Typography } from '@material-ui/core';
import React, { useState } from 'react';
import Gallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";
import resumeData from '../../utils/resumeData';

const ImageGallery = (props) => {
    const imageList = props?.images?.map( (image) => (

        {
            original: image,
            thumbnail: image
        }
    ))

    return (

        <div>
            <Gallery items={imageList} showBullets showThumbnails={false}/>
        </div>
    )
}

export default ImageGallery;