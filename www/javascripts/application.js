//Fade in subtitle on homepage
$(document).ready(function(){
    $(".subtitle").hide(0).delay(500).fadeIn(3000)
});

  // Create Hub webview/push to signup screen
  var hubView = new steroids.views.WebView("../hub.html");
  hubView.preload();
  
  function openShow() {
    steroids.layers.push(hubView);
  }


  window.fbAsyncInit = function() {
// init the Facebook JavaScript SDK
    FB.init({
        appId       : '213402672198380',
        channelUrl  : "localhost/channel.html",
        status      : false,
        cookie      : true,
        xfbml       : true
    });

    FB.getLoginStatus(function(response) {
        if (response.status === 'connected') {
          
        } else if (response.status === 'not_authorized') {
            // not authorized
            
        } else {
            // not_logged_in
            
        }
    });
};

function login() {
    FB.login(function(response) {
        if (response.authResponse) {
            // connected
            mainpush();
        } else {
            // cancelled
        }
    });
}

function mainpush() {
    steroids.layers.push(hubView);
    };

function logout() {
    FB.logout(function(response) {
        if (response.authResponse) {
            // connected
            alert("person is jogged out");
        } else {
            // cancelled
        }
    });
}



(function(d){
    var js, id = 'facebook-jssdk', ref = d.getElementsByTagName('script')[0];
    if (d.getElementById(id)) {return;}
    js = d.createElement('script'); js.id = id; js.async = true;
    js.src = "//connect.facebook.net/en_US/all.js";
    ref.parentNode.insertBefore(js, ref);
}(document));