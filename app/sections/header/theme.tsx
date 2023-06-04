import {createTheme} from "@mui/material";
import { Roboto } from 'next/font/google';
export const theme = createTheme({
    palette: {
        primary: {
            main: '#556cd6',
        },
        secondary: {
            main: '#19857b',
        },
        error: {
            main: '#FF2900',
        },
    },
});