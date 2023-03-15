function header()
{
    document.getElementById("h1").style.transform="translate(20vw,0vh)"
    document.getElementById("h1").style.color="black"
    document.getElementById("h1").style.transition="transform 0.5s, color 0.5s"

    document.getElementById("h2").style.transform="translate(20vw,0vh)"
    document.getElementById("h2").style.color="black"
    document.getElementById("h2").style.transition="transform 0.5s ,color 0.5s"

    document.getElementById("h3").style.transform="translate(10vw,-20vh)"
    document.getElementById("h3").style.color="black"
    document.getElementById("h3").style.transition="transform 0.5s, color 0.5s"

    document.getElementById("h4").style.transform="translate(-1vw,-10vh)"
    document.getElementById("h4").style.color="black"
    document.getElementById("h4").style.transition="transform 0.5s ,color 0.5s"

    document.getElementById("hexagon").style.backgroundColor="black"
    document.getElementById("v").style.color="white"
}
var a=setTimeout(header,500)
function hoverhexa()
{
    document.getElementById("hexagon").style.backgroundColor="black"
    document.getElementById("v").style.color="white"
}
function hoverhexaout()
{
    document.getElementById("hexagon").style.backgroundColor="white"
    document.getElementById("v").style.color="black"
}
