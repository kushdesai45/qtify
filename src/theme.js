import { createTheme } from "@mui/material";

const theme = createTheme({
    palette: {
        primary: { main: '#34C94B' },
        black: '#121212',
        white: '#ffffff',
    },
    components:{
        MuiTypography: {
            color: '#ffffff'
        }
    }
})

export default theme;