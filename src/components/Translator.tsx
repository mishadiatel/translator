import React from 'react';
import {Box, Container, Typography} from "@mui/material";
import { SelectTypeButton} from "@/components/TranslatorStyles";
import TranslateIcon from '@mui/icons-material/Translate';
import DescriptionIcon from '@mui/icons-material/Description';
import TranslateFields from "@/components/TranslateFields";

const Translator: React.FC = () => {
    return (
        <>
            <Box component={'div'} sx={{width: '100vw' }}>
                <Container maxWidth={'lg'} sx={{boxShadow: 'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px', borderRadius: '10px', padding: '1rem'}}>
                    <Box>
                        <SelectTypeButton variant={'outlined'}>
                            <TranslateIcon/>
                            <Typography>Text</Typography>
                        </SelectTypeButton>
                        <SelectTypeButton variant={'outlined'}>
                            <DescriptionIcon/>
                            <Typography>Document</Typography>
                        </SelectTypeButton>
                    </Box>
                    <TranslateFields/>

                </Container>

            </Box>

        </>


    );
};

export default Translator;
