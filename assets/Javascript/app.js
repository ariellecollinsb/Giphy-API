
var topics = ["Happy", "Sad", "Excited", "Angry", "Surprised"];

for (i = 0; i < topics.length; i++) {

    $("#buttons").append(`<button class="btn btn-light">${topics[i]}</button>`);
}

$("#buttons button").on("click", function (event) {
    event.preventDefault();
    search($(this).text());
})

$("#search-button").on("click", function (event) {
    event.preventDefault();
    var userInput = $("#user-input").val().trim();
    search(userInput);

    var userBtn = $("<button>");
    userBtn.text(userInput);
    userBtn.addClass("btn btn-light");
    $("#buttons").append(userBtn);
    $(userBtn).on("click", function () {
        search($(this).text());
    });

})

var apiKey = "psvs2Qwoq05mon9BeoB6OeULhaI6jdym";
var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=" + apiKey + "&limit=10&q=";

function search(topic) {
    $("#gifs-appear-here").empty()

    $.ajax({
        url: queryURL + topic,
        method: "GET"
    }).then(function (response) {
        var results = response.data;
        for (var i = 0; i < results.length; i++) {

            var gifDiv = $("<div class='card'>");
            var rating = results[i].rating;
            var p = $("<p class='text-muted'>").text("Rating: " + rating);
            var gifImg = $("<img class='card-img-top'>");
            var gifBody = $("<div class='card-body'>");
            gifBody.append(p);
            gifDiv.append(gifImg);
            gifDiv.append(gifBody);

            gifImg.attr("src", results[i].images.fixed_width_still.url);
            gifImg.attr("data-still", results[i].images.fixed_width_still.url);
            gifImg.attr("data-animated", results[i].images.fixed_width.url);
            gifImg.attr("data-state", "still");

            $("#gifs-appear-here").prepend(gifDiv);
        }

        $("#gifs-appear-here img").on("click", function () {

            var state = $(this).attr("data-state");
            var stillUrl = $(this).attr("data-still");
            var animateUrl = $(this).attr("data-animated");

            if (state === "still") {
                $(this).attr("src", animateUrl);
                $(this).attr("data-state", "animated");
            } else {
                $(this).attr("src", stillUrl);
                $(this).attr("data-state", "still");

            }

        })

    });


}














//         //
//         var imageUrl = response.data.image_original_url;

//         //
//         var catImage = $("<img>");

//         //
//         catImage.attr("src", imageUrl);
//         catImage.attr("alt", "cat image");

//         //
//         $("#images").prepend(catImage);
//     });

// $(".gif").on("click", function() {


// var state = $(this).attr("data-state");
// var stillUrl = $(this).attr("data-still");
// var animateUrl = $(this).attr("data-animate");




// if (state === "still") {
//     $(this).attr("src", animateUrl);
//     // then update the src attribute of this image to it's data-animate value,
//     $(this).attr("data-state","animate");
//     // and update the data-state attribute to 'animate'.
//      } else {
//         $(this).attr("src", stillUrl);
//         $(this).attr("data-state","still");

//      }


// Try using a loop that appends a button for each string in the array.



// When the user clicks on a button, the page should grab 10 static, non - animated gif images from the GIPHY API and place them on the page.


// When the user clicks one of the still GIPHY images, the gif should animate.If the user clicks the gif again, it should stop playing.


// Under every gif, display its rating(PG, G, so on).

// This data is provided by the GIPHY API.
// Only once you get images displaying with button presses should you move on to the next step.



// Add a form to your page that takes a value from a user input box and adds it to your topics array.Then make a function call that takes each topic in the array and remakes the buttons on the page.


// Deploy your assignment to Github Pages.


//     Rejoice! You just made something really cool.


    // $("button").on("click", function() {
    //     var person = $(this).attr("data-person");
    //     var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
    //       person + "&api_key=BkaUZZWcFij6J7AoQj3WtPb1R2p9O6V9&limit=10";

    //     $.ajax({
    //       url: queryURL,
    //       method: "GET"
    //     })
    //       .then(function(response) {
    //         var results = response.data;

    //         for (var i = 0; i < results.length; i++) {
    //           var gifDiv = $("<div>");

    //           var rating = results[i].rating;

    //           var p = $("<p>").text("Rating: " + rating);

    //           var personImage = $("<img>");
    //           personImage.attr("src", results[i].images.fixed_height.url);

    //           gifDiv.prepend(p);
    //           gifDiv.prepend(personImage);

    //           $("#gifs-appear-here").prepend(gifDiv);
    //         }
    //       });
    //   });