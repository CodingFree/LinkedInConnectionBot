/*  
*	LinkedIn Bot 
*  	Coded: Rex Adrivan
*/


/*
*
*
*/
window.setInterval(function(){

  // like statuses
  $( ".like" ).each(function( index ) {
  like = $( this ).text();
  console.log('status', like);
  if(like == 'Like'){
    $(this).trigger('click');
  }

  // add connection
  $(".add-btn").trigger('click');


  var $target = $('html,body'); 
$target.animate({scrollTop: $target.height()}, 1000);  
});

  
}, 10000);





/*
* URL: https://www.linkedin.com/hp/?dnr=ioklP-hMxzCibvktiWH_XZRMhp7Gba1wiBT&trk=nav_responsive_tab_home
*
*/



window.setInterval(function(){
$(".add-btn").trigger('click');
$(".show-action").trigger('click');  
}, 1000);


/*
* URL: https://www.linkedin.com/people/pymk?trk=hp-feed-pymk-logo
*
*/


window.setInterval(function(){
$(".bt-request-buffed").trigger('click');
var $target = $('html,body'); 
$target.animate({scrollTop: $target.height()}, 1000);  
}, 1000);



/*
*	URL: https://www.linkedin.com/wvmx/profile/rankings?trk=wvmx-profile
*	Description: Auto click connect button
*/

window.setInterval(function(){
	$(".connect-btn").trigger('click');
	$(".btn-text").trigger('click');
}, 1000);

/*
*	URL:
*	Description: Connect user and scroll down
*/


window.setInterval(function(){
  $(".bt-request-buffed").trigger('click');
	window.scrollBy(0,180);
}, 1000);



/*
*	URL:
*	Description: Mass sendmessage
*/

window.setInterval(function(){
 $(".follow-glyph").trigger('click');
 $("#connect_linkedin_profile_message").val('Hello, this is a test mass message');
 $(".btn-linkedin").trigger('click');
}, 1000);


/*
*	URL:
*	Description: Add Group
*/

$(".groups-join").trigger('click');


/*
*	URL:
*	Description: Follow User
*/

$(".following-action").trigger('click');

/*
*	URL: https://www.linkedin.com/vsearch/p?page_num=5&f_N=S,A&openFacets=N,G,CC&pt=people
*	Description: Connect User
*/


$( "a[data-li-result-interaction='instant-connect']" ).trigger('click');

url = window.location.href; 
function getUrlParameter(sParam)
{
    var sPageURL = window.location.search.substring(1);
    var sURLVariables = sPageURL.split('&');
    for (var i = 0; i < sURLVariables.length; i++) 
    {
        var sParameterName = sURLVariables[i].split('=');
        if (sParameterName[0] == sParam) 
        {
            return sParameterName[1];
        }
    }
}    
 tech = parseInt(getUrlParameter('page_num'));
 y = 1;
 page_num = (tech + y);
 console.log(page_num);

 function updateQueryStringParameter(uri, key, value) {
  var re = new RegExp("([?&])" + key + "=.*?(&|$)", "i");
  var separator = uri.indexOf('?') !== -1 ? "&" : "?";
  if (uri.match(re)) {
    return uri.replace(re, '$1' + key + "=" + value + '$2');
  }
  else {
    return uri + separator + key + "=" + value;
  }
}    
var newUrl = location.href.replace("page_num="+tech, "page_num="+page_num);
window.open(newUrl,'_blank');
$( "a[data-li-result-interaction='instant-connect']" ).trigger('click');

$("textarea").trigger('click');
$(".comment").trigger('click');
$(".mentions-input").focus(function(){
$(".mentions-input").val('hello can you endorse me?');
$(".comment-submit").trigger('click');
});
$(".comment-submit")


$(".comment-submit").trigger('click');


/*
* URL: https://www.linkedin.com/wvmx/profile?trk=prof-sb-wvmp-viewed_by#recommended-actions
*
*/
$(".send-message").trigger('click');