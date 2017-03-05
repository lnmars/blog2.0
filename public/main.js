$(document).ready(function() {
  $.get('/blogPosts', function(blogPosts) {

    function newBlogPost(title, author, body) {
    var h2 = $("<h2></h2>").text(title);
    var h3 = $("<h3></h3>").text(author);
    var p = $("<p></p>").text(body);
    var content = $("<div class='newBlogPost'>").append(h2, h3, p);
    console.log(h2, h3, p);

    return content;
    }

//    $(".blogPosts").prepend(newBlogPost());
    for (var i in blogPosts) {
      console.log(blogPosts[i].title);
      console.log(blogPosts[i].author);
      console.log(blogPosts[i].body);
      $(".blogPosts").prepend(newBlogPost(blogPosts[i].title, blogPosts[i].author, blogPosts[i].body));
    }
    console.log(blogPosts);
  });

  $("form").submit(event)
    event.preventDefault();
});