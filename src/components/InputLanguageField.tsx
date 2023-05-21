import React, {useEffect, useState} from 'react';
import {Autocomplete, Grid, TextField} from "@mui/material";
import {languageType, supportedLanguages} from "@/data/data";
import Box from "@mui/material/Box";
import {useAppDispatch, useAppSelector} from "@/hooks/redux";
import {translateEvents} from "@/store/reducers/TranslatorSlice";

interface Props {
    isResult: boolean;
}

const InputLanguageField: React.FC<Props> = ({isResult}) => {
    const {original, translated} = useAppSelector(state => state.translatorReducer.languages);
    const langCode = isResult ? translated : original;
    const languageObj = supportedLanguages.find(lang => lang.code === langCode) || null;
    const [language, setLanguage] = useState<languageType | null>(languageObj);
    const dispatch = useAppDispatch();

    useEffect(() => {
        setLanguage(languageObj);
    }, [languageObj, original, translated]);
    


    return (
        <Grid item xs={5.75}>
            <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={supportedLanguages}
                sx={{width: '100%'}}
                value={language}
                onChange={(event: any, newValue: languageType | null) => {
                    setLanguage(newValue);
                    if (newValue) {
                        dispatch(translateEvents.setLanguage({isResult, languageCode: newValue.code}))
                    }

                }}
                getOptionLabel={(option) => option.name}
                renderInput={(params) => <TextField {...params} placeholder={'Select Language'}/>}
                renderOption={(props, option) => (
                    <Box component="li" sx={{'& > img': {mr: 2, flexShrink: 0}}} {...props}>
                        {option.name}
                    </Box>
                )}
            />
        </Grid>
    );
};

export default InputLanguageField;
