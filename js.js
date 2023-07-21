console.log("%c Start Page \n Data:2023-04-10","color:#0072e2");

function savecookie(cookiename,cookieValue,cookieDates){
    var d=new Date();
    d.setDate(d.getDate()+cookieDates)
    document.cookie = cookiename+"="+cookieValue+";expires="+d.toUTCString();
}