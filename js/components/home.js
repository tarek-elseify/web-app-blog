function home(id) {

    /* inject the content into the page */
    /*                                  */
    var content = `
      <div class="main-row">
       <div class="column-3">
        <h1>
         Hello, Welcome to YouNews.
        </h1>
        <p>
         YouNews is a website that allows you to aggregate all your favorite news 
         content in one place. This site works by using an API called News-API. By selecting 
         certain parameters (i.e: site, topic, etc.), this site is able to develop a personalized 
         feed based on your needs. There will be a general page based on the latest news articles 
         from major news networks. However, you will be given a seperate page containing your 
         personalized feed. Get started by creating a new account!
        </p>

        <span class="read-more">
         <a href="#">REGISTER</a>
        </span>
       </div>
       <div class="column-6">
        <img src="images/main-image.jpg" class="main-image">
       </div>
      </div>
`;

    document.getElementById(id).innerHTML = content;
}
