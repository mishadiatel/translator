import {AppDispatch} from "@/store/store";
import axios, {AxiosResponse} from "axios";
import {translatorSlice} from "@/store/reducers/TranslatorSlice";

export const translate = (text:string, originalLanguage: string, translateLanguage: string) => async (dispatch: AppDispatch) => {
    try {
        const makeTranslation = async () => {
            const params = new URLSearchParams({
                q: text,
                langpair: `${originalLanguage}|${translateLanguage}`
            })
            dispatch(translatorSlice.actions.translateFetching);
            const response: AxiosResponse = await axios.get(`https://api.mymemory.translated.net/get?${params}`);
            console.log(`https://api.mymemory.translated.net/get?${params}`);
            console.log(response.data.responseData.translatedText)
            return response.data.responseData.translatedText;
            // dispatch(translatorSlice.actions.translateFetchingSuccess(response.data.responseData.translatedText));
        }
        const result  = text ? await makeTranslation() : ""
        dispatch(translatorSlice.actions.translateFetchingSuccess(result));

    } catch (e) {
        dispatch(translatorSlice.actions.translateFetchingError((e as Error).message));
    }
}