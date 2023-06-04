"use client";
import AppBar from '@mui/material/AppBar';
import {Button, IconButton, Toolbar, Typography} from "@mui/material";
import {Badge} from "@mui/base";
import Link from "next/link";
import React from 'react'

const pages = ['Products', 'Pricing', 'Blog'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];
export default function Cs2Nav() {
    return (
        <>
            <AppBar position="relative">
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                       edge="start"
                    >
                        {/*<MenuIcon />*/}
                    </IconButton>
                    <Typography variant="h6" >React Material v4 Layout Example</Typography>
                    <Button color="inherit" component={Link} href="/register">Register</Button>
                    <Button color="inherit" component={Link} href="/login">Login</Button>
                </Toolbar>
            </AppBar>

        </>
    )
}