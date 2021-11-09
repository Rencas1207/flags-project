const fromApiResponse = (countryData) => {
  if (Array.isArray(countryData)) {
    const countryList = countryData.map((country) => {
      const {
        flags: { png },
        name,
        population,
        region,
        capital,
        subregion,
        tld,
        currencies,
        languages,
        borders,
      } = country;
      const capitalRef = capital === undefined ? 'Desconocido' : capital[0];

      const { common, nativeName } = name;

      const { common: common2 } = Object.values(nativeName)[0];

      const tldRef = tld[0];

      let nameCurrencies;
      if (currencies) {
        nameCurrencies = Object.values(currencies)[0].name;
      } else {
        nameCurrencies = 'Desconocido';
      }

      const langs = Object.values(languages);

      return {
        png,
        common,
        population,
        region,
        capitalRef,
        common2,
        subregion,
        tldRef,
        langs,
        nameCurrencies,
        borders,
      };
    });
    return countryList;
  }
  return [];
};

export const getFlagDetail = (code) => {
  const URL = `https://restcountries.com/v3.1/alpha/${code}`;
  return fetch(URL)
    .then((resp) => resp.json())
    .then(fromApiResponse)
    .catch((e) => console.log(e));
};
