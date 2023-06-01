"use client";
import CS2Header from "@/app/sections/header/header";
import CS2Content from "@/app/sections/content/content";
import { Button, Grid, Stack } from "@mui/material";
export default function about() {
    return (
        <div>
        <Grid container height="100vh" alignItems="center" justifyContent="center" direction="column">
            <h1>Using Material UI with Next.js 13</h1>
            <Stack direction="row" columnGap={1}>
                <Button variant="text">Text</Button>
                <Button variant="contained">Contained</Button>
                <Button variant="outlined">Outlined</Button>
            </Stack>
        </Grid>
        <CS2Content></CS2Content>
        </div>
    )
}