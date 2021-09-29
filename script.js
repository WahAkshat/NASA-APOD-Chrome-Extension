fetch('https://api.nasa.gov/planetary/apod?api_key=Hik7MO7t1LazGFYE68g79GjCdY3MiWdXKjlbnNwb')
.then(data => data.json())
.then(jokeData =>{
    const jokeText = jokeData.explanation;
    const jokeElement = document.getElementById('print2');
    const link = jokeData.url;
    
    document.getElementById("print2").href = jokeData.explanation;
    chrome.tabs.update({active: true, url: link});

    jokeElement.innerHTML = "<h2>Today's APOD:</h2>"+jokeText;
})
