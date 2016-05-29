$(document).ready(function(){
  // Activate the side menu
  // Initialize collapse button
  $('.button-collapse').sideNav({
        edge: 'right', // Choose the horizontal origin
        closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
        Transition: 750,
        Interval: 7500
      }
    );

    $('.slider').slider({indicators: false});
 });
