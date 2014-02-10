
var hubView = new steroids.views.WebView("../hub.html");
hubView.preload();

var homeView = new steroids.views.WebView("../index.html");
homeView.preload();

function hubPush() {
    steroids.layers.push(hubView);
};

function homePush() {
    steroids.layers.push(homeView);
};



window.fbAsyncInit = function () {
    // init the Facebook JavaScript SDK
    FB.init({
        appId: '213402672198380',
        channelUrl: "localhost/channel.php",
        status: true,
        cookie: true,
        xfbml: true,
        oauth: true
    });

    FB.getLoginStatus(function (response) {
        if (response.status === 'connected') {
            // window.location.replace("http://localhost/hub.html");
        } else if (response.status === 'not_authorized') {
            alert("youre not authorized");

        } else {
            function sendHome() {
                window.location.replace("http://localhost/index.html");
            }
        }
    });
};

function login() {
    FB.login(function (response) {
        if (response.authResponse) {
            FB.api('/me', function (response) {
                window.location.replace("http://localhost/hub.html");
                // FB.logout(function (response) {
                //     console.log('Logged out.');
                // });
            });
        } else {
            console.log('User cancelled login or did not fully authorize.');
        }
    }, {
        scope: 'email,publish_stream',
        display: 'touch'
    });
}



function logout() {
    FB.logout(function (response) {
        if (response.authResponse) {
            // connected
             alert("person is logged out");

        } else {
            // cancelled
        }
    });
}



(function (d) {
    var js, id = 'facebook-jssdk',
        ref = d.getElementsByTagName('script')[0];
    if (d.getElementById(id)) {
        return;
    }
    js = d.createElement('script');
    js.id = id;
    js.async = true;
    js.src = "//connect.facebook.net/en_US/all.js";
    ref.parentNode.insertBefore(js, ref);
}(document));


