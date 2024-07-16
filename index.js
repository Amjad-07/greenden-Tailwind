//selecting side navbar
var sidenav = document.getElementById("side-nav")
var menuIcon = document.getElementById("menuicon")
var closenavbar = document.getElementById("close-navbar")
menuIcon.addEventListener("click",function(){
    sidenav.style.right="0"
})
closenavbar.addEventListener("click",function(){
    sidenav.style.right="-50%"

})
//product search funcionality
var productContainer= document.getElementById("product-container")
var search=document.getElementById("search")
var productList = productContainer.querySelectorAll("div")
search.addEventListener("keyup",function(event){
    var enterValue  =event.target.value.toUpperCase()
    for (count = 0; count < productList.length; count+=1) {
    var productname = productList[count].querySelector("p").textContent

        if (productname.toUpperCase().indexOf(enterValue)<0) {

            productList[count].style.display="none"
        }
        else{
            productList[count].style.display="block"

        }
    }
})