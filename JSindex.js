var nosales = 0;
var saledone = [0, 0, 0];
var times = 0;
var sandwich_after = [];
var salad_after = [];
var drinks_after = [];
var fillpricetable = [0, 0, 0];
window.addEventListener('message', function (event) {
    sessionStorage.setItem("sale_amount", event.data);
    if (document.getElementById("sandwiches").style.display == "flex")
        f1();
    if (document.getElementById("salad").style.display == "flex")
        f2();
    if (document.getElementById("drinks").style.display == "flex")
        f3();
});
function f1() {
    if (sessionStorage.getItem("sale_amount") == 0 && times == 0) {
        times = 1;
        alert("Do not forget our today offer:\n Spin and win sales!!");
        location.hash = "#todayoffer";
    }
    document.getElementById("sandwiches").style.display = "flex";
    document.getElementById("salad").style.display = "none";
    document.getElementById("initial").style.display = "none";
    document.getElementById("drinks").style.display = "none";
    document.getElementsByClassName("choose")[0].style.color = "white";
    document.getElementsByClassName("choose")[1].style.color = "black";
    document.getElementsByClassName("choose")[2].style.color = "black";
    var x = document.getElementsByClassName("pricesa");
    for (var i = 0; i < x.length; i++) {
        if (fillpricetable[0] == 0) {
            var newx = x[i].innerHTML.slice(1);
            newx = parseFloat(newx);
            sandwich_after.push(newx);

        }
        document.getElementsByClassName("pricesa")[i].style.fontWeight = "bold";
        document.getElementsByClassName("pricesa")[i].style.fontSize = "3vh";
        document.getElementsByClassName("pricesa")[i].style.textAlign = "center";
    } fillpricetable[0] = 1;
    if (sessionStorage.getItem("sale_amount") != 0 && saledone[0] == 0) {
        saledone[0] = 1;
        var x = document.getElementsByClassName("pricesa");
        sandwich_after = [];
        for (var i = 0; i < x.length; i++) {
            var newx = x[i].innerHTML.slice(1);
            newx = parseFloat(newx);
            var sale = parseInt(sessionStorage.getItem("sale_amount"));
            var aftersale = newx - sale * newx * 0.01;
            sandwich_after.push(aftersale);
            document.getElementsByClassName("pricesa")[i].innerHTML = document.getElementsByClassName("pricesa")[i].innerHTML + " After Sale: " + sale + "% $" + aftersale;
            document.getElementsByClassName("pricesa")[i].style.fontWeight = "bold";
            document.getElementsByClassName("pricesa")[i].style.fontSize = "3vh";
            document.getElementsByClassName("pricesa")[i].style.textAlign = "center";
            document.getElementsByClassName("pricesa")[i].style.marginTop = "5px";
        }
    }
}
function f2() {
    if (sessionStorage.getItem("sale_amount") == 0 && times == 0) {
        times = 1;
        alert("Do not forget our today offer:\n Spin and win sales!!");
        location.hash = "#todayoffer";
    }
    document.getElementById("salad").style.display = "flex";
    document.getElementById("sandwiches").style.display = "none";
    document.getElementById("initial").style.display = "none";
    document.getElementById("drinks").style.display = "none";
    document.getElementsByClassName("choose")[1].style.color = "white";
    document.getElementsByClassName("choose")[2].style.color = "black";
    document.getElementsByClassName("choose")[0].style.color = "black";
    var x = document.getElementsByClassName("prices");
    for (var i = 0; i < x.length; i++) {
        if (fillpricetable[1] == 0) {
            var newx = x[i].innerHTML.slice(1);
            newx = parseFloat(newx);
            salad_after.push(newx);

        }
        document.getElementsByClassName("prices")[i].style.fontWeight = "bold";
        document.getElementsByClassName("prices")[i].style.fontSize = "3vh";
        document.getElementsByClassName("prices")[i].style.textAlign = "center";
    } fillpricetable[1] = 1;
    if (sessionStorage.getItem("sale_amount") != 0 && saledone[1] == 0) {
        saledone[1] = 1;
        var x = document.getElementsByClassName("prices");
        salad_after = [];
        for (var i = 0; i < x.length; i++) {
            var newx = x[i].innerHTML.slice(1);
            newx = parseFloat(newx);
            var sale = parseInt(sessionStorage.getItem("sale_amount"));
            var aftersale = newx - sale * newx * 0.01;
            salad_after.push(aftersale);
            document.getElementsByClassName("prices")[i].innerHTML = document.getElementsByClassName("prices")[i].innerHTML + " After Sale: " + sale + "% $" + aftersale;
            document.getElementsByClassName("prices")[i].style.fontWeight = "bold";
            document.getElementsByClassName("prices")[i].style.fontSize = "3vh";
            document.getElementsByClassName("prices")[i].style.textAlign = "center";
            document.getElementsByClassName("prices")[i].style.marginTop = "5px";
        }
    }
}

function f3() {
    if (sessionStorage.getItem("sale_amount") == 0 && times == 0) {
        times = 1;
        alert("Do not forget our today offer:\n Spin and win sales!!");
        location.hash = "#todayoffer";
    }
    document.getElementById("drinks").style.display = "flex";
    document.getElementById("sandwiches").style.display = "none";
    document.getElementById("initial").style.display = "none";
    document.getElementById("salad").style.display = "none";
    document.getElementsByClassName("choose")[2].style.color = "white";
    document.getElementsByClassName("choose")[0].style.color = "black";
    document.getElementsByClassName("choose")[1].style.color = "black";
    var x = document.getElementsByClassName("priced");
    for (var i = 0; i < x.length; i++) {
        if (fillpricetable[2] == 0) {
            var newx = x[i].innerHTML.slice(1);
            newx = parseFloat(newx);
            drinks_after.push(newx);
        }
        document.getElementsByClassName("priced")[i].style.fontWeight = "bold";
        document.getElementsByClassName("priced")[i].style.fontSize = "3vh";
        document.getElementsByClassName("priced")[i].style.textAlign = "center";
    } fillpricetable[2] = 1;
    if (sessionStorage.getItem("sale_amount") != 0 && saledone[2] == 0) {
        saledone[2] = 1;
        var x = document.getElementsByClassName("priced");
        drinks_after = [];
        for (var i = 0; i < x.length; i++) {
            var newx = x[i].innerHTML.slice(1);
            newx = parseFloat(newx);
            var sale = parseInt(sessionStorage.getItem("sale_amount"));
            var aftersale = newx - sale * newx * 0.01;
            drinks_after.push(aftersale);
            document.getElementsByClassName("priced")[i].innerHTML = document.getElementsByClassName("priced")[i].innerHTML + " After Sale: " + sale + "% $" + aftersale;
            document.getElementsByClassName("priced")[i].style.fontWeight = "bold";
            document.getElementsByClassName("priced")[i].style.fontSize = "3vh";
            document.getElementsByClassName("priced")[i].style.textAlign = "center";
            document.getElementsByClassName("priced")[i].style.textAlign = "center";
            document.getElementsByClassName("priced")[i].style.marginTop = "5px";
        }
    }
}
function remove(foodnb) {
    document.getElementsByClassName("howmany")[foodnb].value = 0;
    document.getElementsByClassName("howmany")[foodnb].disabled = false;
    document.getElementsByClassName("howmany")[foodnb].style.background="linear-gradient(90deg,chocolate 50%,red 60%)";
}
function confirm(foodnb) {
    if (document.getElementsByClassName("howmany")[foodnb].value <= 0) {
        document.getElementsByClassName("quantityvalidation")[foodnb].style.display = "flex";
        return;
    }
    document.getElementsByClassName("howmany")[foodnb].style.background="linear-gradient(90deg,chocolate 50%,rgb(62, 223, 62) 60%)";
    document.getElementsByClassName("quantityvalidation")[foodnb].style.display = "none";
    document.getElementsByClassName("howmany")[foodnb].disabled = true;
}
/*    Book Order     */
function bookorder() {
    if (document.getElementById("salad").style.display == "flex" || document.getElementById("sandwiches").style.display == "flex" || document.getElementById("drinks").style.display == "flex") {
        f1(); f2(); f3();
    }
    else {
        alert("Please choose your order!!!");
        location.hash = "#menu";
        return;
    }
    var totalbill = 0;
    var allprices = [];
    for (var i=0; i < salad_after.length; i++)
        allprices.push(salad_after[i]);
    for (var i=0; i < sandwich_after.length; i++)
        allprices.push(sandwich_after[i]);
    for (var i=0; i < drinks_after.length; i++)
        allprices.push(drinks_after[i]);
    var quantity = document.getElementsByClassName("howmany");
    for (var i = 0; i < quantity.length; i++) {
        if((quantity[i].disabled) == true)
        totalbill += (quantity[i].value) * allprices[i];
    }
    if(totalbill==0){
        alert("You do not order any thing!!!");
    }
    if(totalbill!=0){
    sessionStorage.setItem("totalbill",totalbill);
    window.location.href = "Payment.html";
    }
}