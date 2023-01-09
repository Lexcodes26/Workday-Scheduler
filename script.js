// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.

  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  
  
var today = dayjs();
$('#currentDay').text(today.format('MMMM D, YYYY h:mm A'));

$(function () {
$(".saveBtn").on("click" , function () {
  console.log("function");
  var text = $(this).siblings(".description").val();
  console.log(text);
  localStorage.setItem($(this).parent().attr('id'), $(this).prev().val()); // saves the item to local storage.
  
  $("#clearFieldsBtn").click(function (event) {
    event.preventDefault;
    $("textarea").val("");
    localStorage.clear();
    //event clears items in local storage
  });
});

   var currentHour  = dayjs().hour();
        
           $(".row").each(function(i) {
            var text = localStorage.getItem($(this).attr('id'))
            $(this).children('.description').val(text)
            var timeBlock = $(this)
            var timeId = timeBlock.attr('id')
            var time = timeId.split('-') [1];
            console.log(time);
            if (time < currentHour) { 
                timeBlock.addClass('past');
            }
            else if (time > currentHour) {
                timeBlock.addClass('future');
            } else {
                timeBlock.addClass('present');
            }     
             // loops through function 
           });

      //Get items from local Storage
           $("#hour-09 .time-block").val(localStorage.getItem("09"));
           $("#hour-10 .time-block").val(localStorage.getItem("10"));
           $("#hour-11 .time-block").val(localStorage.getItem("11"));
           $("#hour-12 .time-block").val(localStorage.getItem("12"));
           $("#hour-13 .time-block").val(localStorage.getItem("13"));
           $("#hour-14 .time-block").val(localStorage.getItem("14"));
           $("#hour-15 .time-block").val(localStorage.getItem("15"));
           $("#hour-16 .time-block").val(localStorage.getItem("16"));
           $("#hour-17 .time-block").val(localStorage.getItem("17"));

  });

  
