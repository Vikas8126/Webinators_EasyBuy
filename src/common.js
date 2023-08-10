
// Get the modal
window.onload = function(){
    var userName = localStorage.getItem("uname")
        document.getElementById("loggedUser").innerHTML = "Welcome " + userName
}

function modelCheck(){
    var userName = localStorage.getItem("uname")
    if(userName != null && userName !="Guest"){
        location.href=  "profile"
    }else{
        location.href=  "login"
    }
}

function cart(){
    var userName = localStorage.getItem("uname")
    if(userName == null || userName =="Guest"){
        location.href=  "login"
    }else{
        location.href=  "cart"
    }
}

function addToCart(img,title,discount, description, price){
    var userName = localStorage.getItem("uname")
    if(userName != null && userName !="Guest"){
        console.log("added to cart",img,title,discount,description,price)
    }else{
        location.href=  "login"
    }
}
