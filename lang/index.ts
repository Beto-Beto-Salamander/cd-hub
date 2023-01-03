import en from "./en.json";
import id from "./id.json";

export type LocaleMessages = { [x: string]: string }

export function getLocalText(language: string): LocaleMessages {
    switch (language) {
        case "en" || "en-EN":
            return en;
        case "id":
            return id;
        default:
            return en;
    }
}