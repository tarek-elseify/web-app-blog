function news(id) {
    var content = document.getElementById(id)
    content.innerHTML = ''
    var request = new XMLHttpRequest()
    request.open('GET', "https://newsapi.org/v2/top-headlines?country=us&apiKey=b6786d11d50342b7997c86720346c5b4", true)
    console.log("GET REQUEST")
    console.log(content)
    request.onload = function(){
	var data = JSON.parse(this.response)
	if(request.status == 200){
	    console.log(data)
	    data.articles.forEach(article => {
		var container = document.createElement('div')
		container.setAttribute('class', 'row')
		var imgCol = document.createElement('div')
		imgCol.setAttribute('class', 'column-3')
		var newsCol = document.createElement('div')
		newsCol.setAttribute('class', 'column-6')
		container.appendChild(imgCol)
		container.appendChild(newsCol)
		content.appendChild(container)
		var img = document.createElement('img')
		img.src = article.urlToImage
		imgCol.appendChild(img)
		var h1 = document.createElement('h1')
		h1.textContent = `${article.title}`
		newsCol.appendChild(h1)
		var p = document.createElement('p')
		var len = article.content.length - 4
		article.content = article.content.substring(0, 261)
		p.textContent = `${article.content}`
		newsCol.appendChild(p)
		var button = document.createElement('span')
		button.setAttribute('class', 'read-more')
		var link = document.createElement('a')
		link.textContent = "Read More"
		link.href= article.url
		button.appendChild(link)
		newsCol.appendChild(button)
	    })

	}else {
	    console.log("GET REQUEST FAILED!")
	}
    }
    request.send()
}
