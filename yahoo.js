
var standalone = window.navigator.standalone,
    userAgent = window.navigator.userAgent.toLowerCase(),
    safari = /safari/.test( userAgent ),
    ios = /iphone|iPod|ipad/.test( userAgent );

if( ios ) {
    if ( !standalone && safari ) {
        console.log("browser");
    } else if ( standalone && !safari ) {
        console.log("standalone");
    } else if ( !standalone && !safari ) {
        console.log("uiwebview");
    };
} else {
    console.log("not iOS");
};

    if (1==0){
         window.location.href = 'http://www.yahoo.co.jp/';
    }