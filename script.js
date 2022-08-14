function display_time() {
    const d = new Date();
    let text = "🌏 " + d.toLocaleString("en-US", { dateStyle: 'full',}) + " • " + d.toLocaleString("en-US", {timeStyle: 'medium'});
    document.getElementById('time').innerHTML = text;
    display_time2();
}
function display_time2() {
    var refresh = 1000;
    mytime = setTimeout('display_time()', refresh)
}
display_time2()

function loadingGG() {
    setTimeout(function () {
        document.getElementById("aload").style = "";
        document.getElementById("bload").style = "display: none;";
    }, 1500);
}

function reloadIMG(imgurl, imgid) {
    var timestamp = new Date().getTime();
    var image = document.getElementById(imgid);
    image.src = imgurl + "&t=" + timestamp;
}
setInterval('reloadIMG("https://lanyard-profile-readme.vercel.app/api/600286650509295616?hideDiscrim=true&idleMessage=Probably%20AFK", "lanyardimage")', 30000)