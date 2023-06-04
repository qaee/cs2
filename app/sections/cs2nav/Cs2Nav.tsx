"use client";
import AppBar from '@mui/material/AppBar';
import {Button, IconButton, Toolbar, Typography} from "@mui/material";
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
            <AppBar >
                <CS2Logo />
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                       edge="start"
                    >
                        {/*<MenuIcon />*/}
                    </IconButton>
                    <Typography variant="h6" >React Material</Typography>
                    <Button color="inherit" component={Link} href="/register">Register</Button>
                </Toolbar>
            </AppBar>

        </>
    )
}