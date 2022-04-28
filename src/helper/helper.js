export const fetchData = async (url) => {
    const result = await fetch(url);
    return await result.json();
};
