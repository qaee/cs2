import exp from "constants";
import * as React from 'react';
import {Button, Typography, Grid, Card, CardHeader, Avatar, CardContent, CardActions,IconButton} from "@mui/material";
import AppleIcon from '@mui/icons-material/Apple';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { red,pink } from '@mui/material/colors';
import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon';
import HomeIcon from '@mui/icons-material/Home';
export default function IndexPage () {
    return (
        <>
            <Card sx={{ border: 2 }}>
                <CardContent>
                    <CardHeader
                        avatar={
                            <Avatar sx={{ bgcolor: red[500] }} aria-label="apple">
                                QA
                            </Avatar>
                        }
                        action={
                            <IconButton aria-label="apple">
                                <MoreVertIcon />
                                <AppleIcon></AppleIcon>
                            </IconButton>
                        }
                        title="Shrimp and Chorizo Paella"
                        subheader="September 14, 2016"
                    />
                    <HomeIcon />
                    <HomeIcon color="primary" />
                    <HomeIcon color="secondary" />
                    <HomeIcon color="success" />
                    <HomeIcon color="action" />
                    <HomeIcon color="disabled" />
                    <HomeIcon sx={{ color: pink[500] }} />
                </CardContent>

            </Card>
        </>

    );
}