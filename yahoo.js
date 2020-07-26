
var standalone = window.navigator.standalone,
    userAgent = window.navigator.userAgent.toLowerCase(),
    safari = /safari/.test( userAgent ),
    ios = /iphone|iPod|ipad/.test( userAgent );
var text = null;
var element = document.createElement('h1'); 

if( ios ) {
    if ( !standalone && safari ) {
        console.log("browser");
        text = "browser";
        
    } else if ( standalone && !safari ) {
        console.log("standalone");
        text = "standalone";
    } else if ( !standalone && !safari ) {
        console.log("uiwebview");
        text ="uiwebview";
    };
} else {
    console.log("not iOS");
    text = "not iOS";
};


element.id = "id"; 
element.innerHTML = "text"; 


    if (1==0){
         window.location.href = 'http://www.yahoo.co.jp/';
    }
