import { useContext, useState, useEffect } from "react";
import { LitteraContext } from ".";

const useLittera = translations => {
    const [translated, setTranslated] = useState({});
    const { language, preset } = useContext(LitteraContext);

    useEffect(() => {
        const _t =
            typeof translations === "function" ? { ...translations(preset) } : { ...translations };

        Object.keys(_t).forEach(e => setTranslated({ ...translated, [e]: _t[e][language] }));
    }, [language]);

    return [translated, language];
};

export default useLittera;
