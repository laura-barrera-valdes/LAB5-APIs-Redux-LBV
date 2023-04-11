export const getData = async () => {
  const getData = await fetch("https://swapi.dev/api/people/");
  return getData;
};
