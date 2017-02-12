//Initialize variables




var zipCodeToSearch;


function checkZipCode(zipCodeToSearch){
  if (zipCodeToSearch.length == 5) {
    if (parseInt(zipCodeToSearch) != NaN) {
      console.log("is a 5 digit number");
      return false;
    }
  } else {
    console.log("enter a valid zip code");
  }
}

$('.close').on('click', function(){
  $('.carousel').show();
  $('#zipcode').val('');
  window.location.reload();
});



$('#zipSubmit').on('click keypress', function() {
 
  //obtain zip code
  zipCodeToSearch = parseInt($('#zipcode').val().trim());


  
  //Verify the zip code is a 5 digit numeric value before proceeding
  if (isNaN(zipCodeToSearch) == false && zipCodeToSearch >2000) {

      $('#repTable').show();
      $('.carousel').hide();
      $('#zipSubmit').hide();

    // Making an ajax request to get the response.
    $.ajax({
      url: '/' + zipCodeToSearch,
      method: 'GET'
    }).done(function(response) {
      console.log(response);
      var yourRep = [];
      yourRep.push(response);
      $('.repName').html('<h3>' + response.name + '</h3>');
      $('.repImage').attr('src', '/assets/images/'+response.image);
      $('.party').html('Party: ' + response.party);
      $('.districtNum').html('District Number: ' + response.districtNum);
      $('.phoneNum').html('<i class="fa fa-phone-square" aria-hidden="true"></i>' + ' ' + response.phoneNum);
      $('.website').attr('href', response.url).html('<i class="fa fa-info" aria-hidden="true"></i>Website');
      $('.tweets').attr('href', response.urlTweets).html('<i class="fa fa-twitter" aria-hidden="true"></i>Twitter');
      
       console.log(response.url);
    })
  }
});

// // to get news article
// var url = "https://api.nytimes.com/svc/news/v3/content/all/all.json";
// url += '?' + $.param({
//   'api-key': "5c379e9645324b7c9dc438eb908e936c"
//   'limit': 10
// });
// $.ajax({
//   url: url,
//   method: 'GET',
// }).done(function(result) {
//   console.log(result);
// }).fail(function(err) {
//   throw err;
// });







