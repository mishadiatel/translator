import React, {ChangeEvent, useState} from 'react';
import {TextField} from '@mui/material';
import {InputBox} from '@/components/TextInputStyle';
import {useAppDispatch, useAppSelector} from '@/hooks/redux';
import {translateEvents} from '@/store/reducers/TranslatorSlice';
import {translate} from '@/store/reducers/TranslateAction';
import {useDebounce} from '@/hooks/DebounceHook';
import {MAX_CHARS_TO_TRANSLATE} from "@/data/data";

interface Props {
    isResult: boolean;
    translateFunc?: () => void;
}

const TextInput: React.FC<Props> = ({isResult}) => {
    const [numChars, setNumChars] = useState<number>(0);
    const placeholder = isResult ? 'Result' : 'Write a text for translation';
    const dispatch = useAppDispatch();
    const {
        languages: {original: originalLang, translated: translatedLang},
        text: {initialText, result}
    } = useAppSelector((state) => state.translatorReducer);

    const changeInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        if(!isResult) {
            if(numChars <= MAX_CHARS_TO_TRANSLATE) {
                dispatch(translateEvents.changeInitialText(e.target.value));
                setNumChars(e.target.value.length);
            } else {
                alert ('Input text can\'t be more then 500 chars');
                dispatch(translateEvents.changeInitialText(e.target.value.substring(0, MAX_CHARS_TO_TRANSLATE-1)));
                setNumChars(initialText.length);
            }
        }
    };

    if(!isResult) {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        useDebounce(() => {
            dispatch(translate(initialText, originalLang, translatedLang));
        }, 1000);

    }


    return (
        <>
            <InputBox item xs={6}>
                <TextField
                    style={{height: '100%'}}
                    id=""
                    variant="standard"
                    InputProps={{
                        readOnly: isResult,
                        disableUnderline: true
                    }}
                    multiline
                    value={!isResult ? initialText : result}
                    onChange={changeInputHandler}
                    fullWidth={true}
                    placeholder={placeholder}
                />
                {!isResult && <span>{numChars} / {MAX_CHARS_TO_TRANSLATE}</span>}
            </InputBox>

        </>

    );
};

export default TextInput;

