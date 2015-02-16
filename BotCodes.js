/*  LinkedIn Bot 
*  	Coded: Rex Adrivan
*/


/*
*	URL: https://www.linkedin.com/wvmx/profile/rankings?trk=wvmx-profile
*	Description: Auto click connect button
*/

window.setInterval(function(){
	$(".connect-btn").trigger('click');
	$(".btn-text").trigger('click');
}, 5000);


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

