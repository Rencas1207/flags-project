const fromApiResponse = (countryData) => {
  if (Array.isArray(countryData)) {
    const countryList = countryData.map(
      ({ flags: { png }, name: { common }, population, region, capital }) => {
        const capitalRef = capital === undefined ? 'Desconocido' : capital[0];
        return { png, common, population, region, capitalRef };
      }
    );
    return countryList;
  }
  return [];
};

export const getFlags = () => {
  const URL = 'https://restcountries.com/v3.1/all';
  return fetch(URL)
    .then((resp) => resp.json())
    .then(fromApiResponse)
    .catch((e) => console.log(e));
};
