import {Button, styled} from "@mui/material";
import Box from "@mui/material/Box";

// export const GrayBlock = styled('div')(({theme}) => ({
//     height: '100px',
//     position: 'relative',
//     backgroundColor: theme.palette.common.lightGray,
//
// }))
// export const TranslatorBox = styled(Box)(({theme}) => ({
//     // marginTop: '-80px',
// }))
export const SelectTypeButton = styled(Button)(({theme}) => ({

    margin: '0 10px 20px 0',
    textTransform: 'none',
    borderRadius: '3px',
    display: 'flex-inline',
    gap: '10px'

}))
