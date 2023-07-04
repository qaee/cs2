"use client";
import AppBar from '@mui/material/AppBar';
import {Button, Container, Box,Grid, IconButton, Toolbar, Typography} from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';

import { AccessAlarm, ThreeDRotation  } from '@mui/icons-material';
import Link from "next/link";

import CS2Logo from "@/app/images/logo";
import {right} from "@popperjs/core";
const pages = ['Products', 'Pricing', 'Blog'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];
export default function Cs2Nav() {
    return (
        <>
            <Grid container sx={{border: 2 }} >
                <Grid item sx={{border: 1,m:3 }} xs={2}>
                    <CS2Logo></CS2Logo>
                 </Grid>
                <Grid sx={{display: 'flex', border: 2,borderColor: 'error.main',m:3, justifyContent: 'flex-end' }} xs={8}>
                        <Button color="inherit" component={Link} href="/services">Services</Button>
                        <Button color="inherit" component={Link} href="/partners">Partners</Button>
                        <Button color="inherit" component={Link} href="/about">About</Button>
                        <Button color="inherit" component={Link} href="/contact">contact </Button>
                </Grid>
            </Grid>
        </>
    )
}