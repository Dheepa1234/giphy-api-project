$(document).ready(function)(){


//This variable has been created according to the instructions in the assignment. 
//From #1 in the assignment:
// "...you need to create an array of strings, each one related to a topic that interests you. Save it to a variable called topics."


    var topic = ["Germany World Cup 2018", "Argentina World Cup 2018", "England World Cup 
                2018", "Sweden World Cup 2018", "Brazil World Cup 2018", "Switzerland 
                World Cup 2018", "Costa Rica World Cup 2018", "Croatia World Cup 2018",
                "South Korea World Cup 2018", Iceland World Cup 2018"];
                
//From #2 in the assignment: "Your app should take the topics in this array"
//From #2 (continued) : "and create buttons in your HTML.
//From #2 (continued): "try using a loop that appends a button for each string in the array."

//From #5 in the instructions: "Under every gif, display its rating (PG, G, so on).
// From #5 (continued): "This data is provided by the GIPHY API.""
//From #5 (continued): "Only once you get images displaying with button 
//From #5 (continued):"...presses should you move on to the next step."
//This should add an on click event to all buttons

$"(button").on ("click", function (){
    //This variable should grab and store the gif property value from the button

        var topic = $(this). attr("gifbutton");
        
        //This should construct a queryURL using the gif topic name on the gif button

        var queryURL = "https://api.giphy.com/v1/" +
            topic + "&api_key= SvWFrzEjwylYNM6Ck36dpsYArOZKhLAu"                     

        //This should perform the AJAX request with the query URL

        $.ajax({
            url: queryURL,
            method: "GET"
            }).then(function(response) {
                console.log(response);
        });

            //this should store the data from the AJAX request in the results variable
                var results = response.data;
            
            //this should loop through each result item

                for (var i = 0); i < results.length; i++ {

            //this should create and store a div tag

                var topicDiv = $ ("div")

            //this should create a paragraph tag with the result item's rating

                var p = $("<p>").text("Rating:" + results[i].rating):

            //This should create and store an image tag

                var topicImage =("<img>");
            
            //This should set the src attribute of the image to a property pulled
           

            topicImage.attr("src", results[i].images.fixed_height.url);

        // This should append the paragraph and image tag to the topicDiv

        topicDiv.append[p];
        topicDiv.append(topicImage);

        //This prepends the topicDiv to the HTML pabe in the "#gifs-appear-
        here" div

        $("#gifs-appear-here").prepend(topicDiv); 

    // Set limit for maximum amount of search results displayed on one page.
        
    var limit = '&limit=10';

    // Assign variable for userRating so it can be dynamically applied to the url.
          var rating = $('#gifbutton').val().trim();
            // Convert input for a sucessful API call.
            rating = userRnput.replace(/ /g, "+");

//This is an attempt to create a method that will stop and animate gifs
//From the instructions #4: "When the user clicks one of the still GIPHY images, 
//#4 (continued): "..the gif should animate. 
//#4 (continued):"If the user clicks the gif again,it should stop playing."
            
        function animateGif() { 
                        var state = $(this).attr('data-state');
                        // console.log(state);
                     if (state == 'still'){
                         $(this).attr('src', $(this).data('animate'));
                          $(this).attr('data-state', 'animate');
                     } else{
                         $(this).attr('src', $(this).data('still'));
                         $(this).attr('data-state', 'still');
                        }
    
                    } //end of on click function

    // Create new variable called queryURL which pieces together all of the above variables.
            var queryURL = api + userInput + key + limit /*+ rating */;

// This should request the q parameter as defined in the GIPHY website as follows: 
// (cont'd) "Search query term or phrase.GIPHY search will automatically look for exact matches 
// (cont'd) to queries + AND match + OR match. Explicit AND + OR boolean clauses 
// (cont'd) in search queries are not supported."

var q =$ ()

 



//From #6 in the instructions:
//#6 (continued): "Add a form to your page takes the value from a user input box 
//#6 (continued) :...and adds it into your topics array. Then make a function call   
//#6 (continued):...that takes each topic in the array remakes the buttons on the page.
//I added a form in the index html file
// Deleting the movie buttons prior to adding new movie buttons
         
                  
          
         

});

    













}