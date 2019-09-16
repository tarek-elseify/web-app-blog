function blog(id) {

    /* inject the content into the page */
    /*                                  */
    var content = `
      <div class="blog-row">
       <h1>2019-09-09 Homework 1 Blog Entry</h1>
        <p>
         I really enjoyed developing and designing the website in homework 1. 
         I realized I spent a lot of time creating a design, not liking it, then 
         completely reworking the design. This is what took up most of my time. 
         An issue I had initially is dealing with the window resizing. I dealt 
         with this by developing a system based on REM and media queries, which 
         resizes all the elements using REM based on a percentage and perfectly 
         scales them. Once the window size becomes lower than a certain point, 
         all elements are serialized vertically.
        </p>   
      </div>

      <div class="blog-row">
       <h1>2019-09-09 Homework 2 Blog Entry</h1>
        <p>
         Developing the 
         <a href="files/db_submission.docx">database</a> 
         was a new experience for me. I have never worked 
         with SQL or MySQL before, but it all seemed to make sense regardless. I 
         developed three tables in total (web_user, user_role, and new_items). My 
         goal is to call an API that aggregates news items and populate them in that 
         database. The tricky part about setting all this up was understanding how 
         foreign keys work. By referencing a column to another table you essentially 
         link both tables together.
        </p>   
      </div>

      <div class="blog-row">
       <h1>2019-09-09 Homework 3 Blog Entry</h1>
        <p>
         The routing portion of the homework was fairly straightforward. By creating 
         js functions that inject the custom content written. This makes creating new 
         pages a breeze (no need to keep copying and pasting things that don't change 
         such as the navigation bar). Although SHTML files allow this using include 
         statements. Either way it was good to get more hands-on with JavaScript. I also 
         created a function that removes and adds the active class once you redirect to a 
         page, which highlights it as red on the navigation bar. This was done by slicing 
         that path after the '/'.
        </p>   
      </div>

`;
    document.getElementById(id).innerHTML = content;
}
