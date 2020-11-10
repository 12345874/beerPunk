export const getBeers = async page => {
    const users = await (
        await fetch(`https://api.punkapi.com/v2/beers/?page=${page}&results=50`)
    ).json();
    return users.data;
};