import {styled} from "@mui/material";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";

export const HeaderToolbar = styled(Toolbar)(({theme}) => ({
    backgroundColor: theme.palette.common.white,

}))
export const HeaderLoginButton = styled(Button)(({theme}) => ({
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
    textTransform: 'none',
    fontWeight: 400,
}))
export const MarginDiv = styled('div')(({theme}) => ({
    marginBottom: '80px',
    [theme.breakpoints.down('sm')]: {
        marginBottom: '72px',
    }
}))

