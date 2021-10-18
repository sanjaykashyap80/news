

function getNews() {

    let container = document.getElementById("news");

    container.innerHTML = null

    let topic = document.getElementById("oneNews").value;


fetch(`http://newsapi.org/v2/everything?q=${topic}&from=2021-10-18&sortBy=popularity&apiKey=eade32a448934e93bc0e544c6ca18c2e`)

.then((res) => {
  return res.json()
})
.then((res) => {
  console.log(res.articles)
  showNews(res.articles)
});

//   let container = document.getElementById("news");

function showNews(newss){

newss.forEach((news) => {
    

    let div = document.createElement("div");

    let p = document.createElement("p");

    p.textContent = news.title;

    let img = document.createElement("img");

    img.src = news.urlToImage;

    div.append(img,p);

    container.append(div);


});

}
}