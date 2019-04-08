import { useContext } from "react";
import { LitteraContext } from ".";

const useLittera = translations => {
    const { language, preset, setLanguage } = useContext(LitteraContext);

    let translated = {};

    const _t =
        typeof translations === "function" ? { ...translations(preset) } : { ...translations };

    Object.keys(_t).forEach(e => {
        translated = { ...translated, [e]: _t[e][language] };
    });

    return [translated, language, setLanguage];
};

export default useLittera;
