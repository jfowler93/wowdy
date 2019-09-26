$(document).ready(function () {


    function displayShowGif() {

        var queryURL = "https://api.giphy.com/v1/gifs/search?q=owen+wilson&api_key=BkaUZZWcFij6J7AoQj3WtPb1R2p9O6V9&limit=30";

        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {
            var results = response.data;

            for (var i = 0; i < results.length; i++) {
                var gifDiv = $("<div class ='card'>");

                // var rating = results[i].rating;

                // var p = $("<p>").text("Rating: " + rating);

                var showImage = $("<img>");
                showImage.attr("src", results[i].images.fixed_height.url)
                    .attr("src", results[i].images.fixed_width.url)
                    .attr('data-animate', results[i].images.fixed_height.url)
                    .attr('data-state', "animate")
                    .addClass("showImage");

                // gifDiv.prepend(p);
                gifDiv.prepend(showImage);

                $("#gifArea").prepend(gifDiv);


            };

        });
    };
    //create a function to render buttons using array items

    $("#gifButton").on("click", function (event) {
        event.preventDefault();

        displayShowGif();
    });

});
