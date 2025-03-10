import { createContext, useState, useContext } from "react";

const LanguageContext = createContext();

export const LanguageProvider = (props) => {
    const [language, setLanguage] = useState(0);

    return (
        <LanguageContext.Provider value={{ language, setLanguage }}>
            {props.children}
        </LanguageContext.Provider>
    );
};

export const useLanguageContext = () => useContext(LanguageContext);