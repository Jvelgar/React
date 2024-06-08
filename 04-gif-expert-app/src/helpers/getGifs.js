export const getGifs = async(category) => {
    const apiKey = '2d6yS4vG9BUa9cwr3pTYZn7kWbkLts4x';
    const resp = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${category}&limit=10`);
    const {data} = await resp.json();
    const gifs = data.map(img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }));
    return gifs;
}