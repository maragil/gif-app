export const getGifs = async( eachCategory ) => {

    const url = `https://api.giphy.com/v1/gifs/search?api_key=12hdLEWjcW0obRDXy0Ph9Mw7UsQMKp9L&q=${ eachCategory }&limit=10`;

    //petición https
    const resp = await fetch( url );
    const { data } = await resp.json();

    const gifs = data.map( eachGif => ({
        id: eachGif.id,
        title: eachGif.title,
        url: eachGif.images.downsized_medium.url
    }));

    return gifs;

}