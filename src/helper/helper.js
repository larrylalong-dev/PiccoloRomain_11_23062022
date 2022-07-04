const fetchData = async (url) => {
    const result = await fetch(url);
    return await result.json();
};

const getFromCacheOrFetch = async (item, url) => {
    let cachedData = JSON.parse(localStorage.getItem(item));

    if (!cachedData) {
        cachedData = fetchData(url).then((data) => {
            localStorage.setItem(item, JSON.stringify(data));
            return data;
        });
    }

    return cachedData;
};

export { fetchData, getFromCacheOrFetch };
