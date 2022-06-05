
window.addEventListener("load", function (){
    document.getElementsByTagName("figcaption")[0].tabIndex = 5
    var figures = document.getElementsByTagName("figure")
    for(var x = 0; x < figures.length; x++){
        figures[x].className = "one-third"
    }
    font =  document.getElementsByTagName("figcaption")[0].style.fontFamily
})

document.getElementsByTagName("footer")[0].addEventListener("click", function(){
    document.getElementsByTagName("footer")[0].style.display = "none"
})

document.getElementsByTagName("figure")[4].addEventListener("dblclick", function(){
    document.getElementsByTagName("figure")[4].style.visibility = "hidden"
})


document.getElementsByTagName("figcaption")[0].addEventListener("mouseover", function(){
    document.getElementsByTagName("figcaption")[0].style.fontFamily = "cursive"
})

document.getElementsByTagName("figcaption")[0].addEventListener("mouseout", function(){
    document.getElementsByTagName("figcaption")[0].style.fontFamily = font
})


document.getElementsByTagName("figcaption")[0].addEventListener("focusin", function(){
        document.getElementsByTagName("figcaption")[0].style.fontFamily = "cursive"
})

document.getElementsByTagName("figcaption")[0].addEventListener("focusout", function(){
    document.getElementsByTagName("figcaption")[0].style.fontFamily = font
})







