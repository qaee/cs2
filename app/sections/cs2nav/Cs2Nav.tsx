"use client";
import AppBar from '@mui/material/AppBar';
import {Button, Container, Grid, IconButton, Toolbar, Typography} from "@mui/material";
import {Badge} from "@mui/base";
import Link from "next/link";
import React from 'react'
import CS2Logo from "@/app/images/logo";
import { Roboto } from 'next/font/google';
import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

export const roboto = Roboto({
    weight: ['300', '400', '500', '700'],
    subsets: ['latin'],
    display: 'swap',
    fallback: ['Helvetica', 'Arial', 'sans-serif'],
});

const pages = ['Products', 'Pricing', 'Blog'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];
export default function Cs2Nav() {
    return (
        <>
            <Grid container spacing={2} >
                <Grid item xs={2}>
                <CS2Logo />
                </Grid>
                <Grid item xs={8}>
                    <Button color="inherit" component={Link} href="/register">Link1</Button>
                    <Button color="inherit" component={Link} href="/register">Link2</Button>
                    <Button color="inherit" component={Link} href="/register">Link3</Button>
                    <Button color="inherit" component={Link} href="/register">Link4</Button>
                    <Button color="inherit" component={Link} href="/register">Link5</Button>
                </Grid>
            </Grid>
        </>
    )
}