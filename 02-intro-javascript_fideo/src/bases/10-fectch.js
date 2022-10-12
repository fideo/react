const apiKey = 'hI3M3t3nEY3h3yeW4zSFwNnQWhIKLMFA';

const peticion = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);

peticion
  .then(resp => resp.json())
  .then(({data}) => {
    const {url} = data.images.original;
    const img = document.createElement('img');
    img.src = url;
    document.body.append(img);
  })
  .catch(console.warn);