function newBlogPost(title, author, body) {
  var h2 = $("<h2></h2>").text(title);
  var h3 = $("<h3></h3>").text(author);
  var p = $("<p></p>").text(body);

  var newBlogContent = $("<div class='newBlogPost'>").append(h2, h3, p);

  console.log(h2, h3, p);

  return newBlogContent;
}

$(document).ready(function() {
  $.get('/blogPosts', function(blogPosts) {

    for (var i in blogPosts) {
      $(".blogPosts").prepend(newBlogPost(blogPosts[i].title, blogPosts[i].author, blogPosts[i].body));
    }

    console.log(blogPosts);
  
  });

  $("form").submit(function(event) {
    event.preventDefault();

    var formContent = {
      "title": event.target.title.value,
      "author": event.target.author.value,
      "body": event.target.body.value
    }

    $.post('/blogPosts', formContent, function(data) {
      $(".blogPosts").prepend(newBlogPost(formContent.title, formContent.author, formContent.body));
      console.log(data);
    });

    event.target.title.value = "";
    event.target.author.value = "";
    event.target.body.value = "";

  });

});