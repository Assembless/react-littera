import { useContext } from "react";
import { LitteraContext } from ".";

/**
 * Translation hook.
 * @argument {Object} translations
 * @returns {Array} Hook returns `translated` object, active `language` string and `setLanguage` function.
 */
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
