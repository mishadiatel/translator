import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface languagesInterface {
    original: string;
    translated: string;
}

interface textInterface {
    initialText: string;
    result: string;
}

interface initialStateInterface {
    languages: languagesInterface,
    text: textInterface,
    error: string;
    isLoading: boolean,
}

const initialState: initialStateInterface = {
    languages: {
        original: 'en',
        translated: 'uk',
    },
    text: {
        initialText: '',
        result: '',
    },
    error: '',
    isLoading: false,
}
interface setLanguageParams {
    isResult: boolean;
    languageCode: string;
}

export const translatorSlice = createSlice({
    name: 'translator',
    initialState,
    reducers: {
        translateFetching(state) {
            state.isLoading = true;
        },
        translateFetchingSuccess(state, action: PayloadAction<string>) {
            state.isLoading = false;
            state.error = '';
            state.text.result = action.payload;
        },
        translateFetchingError(state, action: PayloadAction<string>) {
            state.isLoading = false;
            state.error = action.payload;
        },
        setLanguage(state, action: PayloadAction<setLanguageParams>) {
            if(action.payload.isResult) {
                state.languages.translated = action.payload.languageCode;
            }else {
                state.languages.original = action.payload.languageCode;
            }
        },
        switchLanguages(state) {
            const original = state.languages.original;
            state.languages.original = state.languages.translated;
            state.languages.translated = original;
            const initialText = state.text.initialText;
            state.text.initialText = state.text.result;
            state.text.result = initialText;
        },
        changeInitialText(state, action: PayloadAction<string>) {
            state.text.initialText = action.payload;
        }
    }

})


export const translateEvents = translatorSlice.actions;
export default translatorSlice.reducer;
