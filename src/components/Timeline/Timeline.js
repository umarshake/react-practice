import React from 'react';
import { Typography } from '@material-ui/core'
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
// import WorkIcon from '@material-ui/icons/Work'
import './Timeline.css';

const CustomTimeLine = ({ title, children, icon }) => {
    return (

        <Timeline className={"timeline"}>
            {/* Item header */}
            <TimelineItem className={"timeline_first_item"}>
                <TimelineSeparator>
                    <TimelineDot className={"timeline_dot_header"} > {icon} </TimelineDot>
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                    <Typography variant="h6" className={"timeline_header"}>
                        {title}
                    </Typography>
                </TimelineContent>
            </TimelineItem>
            {/* Remaining Item */}
            {children}

        </Timeline>

    );
}

export const CustomTimeLineItem = ({title,text,link}) => {

    return (
        <TimelineItem>

            <TimelineSeparator className={"seperator_padding"}>
                <TimelineDot variant={"outlined"} className={"timeline_dot"} />
                <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent className={"timeline_content"}>
                
                    { link ? 
                        (
                        <Typography className="timelineitem_text">
                            <span>{title}</span>:{" "}
                            <a href={link} target='_blank'>{text}</a>
                        </Typography>
                        )
                        : 
                        (
                            <Typography className="timelineitem_text">
                                <span>{title}</span>:{" "}{text}
                            </Typography>
                        )
                    }
                
            </TimelineContent>
        </TimelineItem>

    );

}
export default CustomTimeLine;