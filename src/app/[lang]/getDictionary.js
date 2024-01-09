const dictionaries = {
    en: () => import("/dictionaries/en.json").then(r => r.default),
    fr: () => import("/dictionaries/fr.json").then(r => r.default),
    hi: () => import("/dictionaries/hi.json").then(r => r.default)
  }
  
  export const getDictionary = (lang) => {
    return dictionaries[lang]();
  }