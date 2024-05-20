import { useState, useEffect } from "react";
import { ContextLang} from './ContexLang';
const ProviderContext = ({children}) => {
  const getInitialState = () => {
    const savedState = localStorage.getItem('lang');
    return savedState ? JSON.parse(savedState) : true;
  };
    const [lang, setLang] = useState(getInitialState);
    // const updateValue = (lan) => {
    //   lan === "eng" ? setLang(true) : setLang(false);
    // };
useEffect(() => {
    localStorage.setItem('lang', JSON.stringify(lang));
  }, [lang]);
  return (
    <ContextLang.Provider value={{ lang, setLang }}>
      {children}
    </ContextLang.Provider>
  );
}

export default ProviderContext