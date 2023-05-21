import React from 'react';
import InputLanguageField from "@/components/InputLanguageField";
import {FieldsContainer} from "@/components/TranslateFieldsStyles";
import SyncAltOutlinedIcon from '@mui/icons-material/SyncAltOutlined';
import {Grid} from "@mui/material";
import Box from "@mui/material/Box";
import TextInput from "@/components/TextInput";
import {useAppDispatch} from "@/hooks/redux";
import {translateEvents} from "@/store/reducers/TranslatorSlice";
import Button from "@mui/material/Button";

const TranslateFields = () => {
    const dispatch = useAppDispatch();
    return (
        <div>
            <FieldsContainer container>

                <InputLanguageField isResult={false}/>
                <Grid item xs={0.5} >
                    <Box display={'flex'} height={'100%'} alignItems={'center'} justifyContent={'center'}>
                        <Button onClick={() => dispatch(translateEvents.switchLanguages())}>
                            <SyncAltOutlinedIcon/>
                        </Button>
                    </Box>
                </Grid>
                <InputLanguageField isResult={true}/>
                <Grid container>
                    <TextInput isResult={false}/>
                    <TextInput isResult={true}/>
                </Grid>
            </FieldsContainer>

        </div>


    );
};

export default TranslateFields;
