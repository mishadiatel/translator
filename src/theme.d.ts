// import {ThemeOptions} from '@mui/material/styles'
// declare module '@mui/material/styles' {
//     interface ThemeOptions {
//         common: {
//             gray: React.CSSProperties["color"];
//         }
//     }
// }
import "@mui/material/styles/createPalette";
declare module "@mui/material/styles/createPalette" {
    interface CommonColors {
        gray: string;
        textColor: string;
        lightGray: string;

    }
}