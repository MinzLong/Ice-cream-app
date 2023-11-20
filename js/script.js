//~~~~~~~~responsive navigation bar~~~~~~~~~
function myFunction() {
  var x = document.getElementById("navbar");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

//~~~~~~~~~~~~~~~~~Add product to cart~~~~~~~~~~~~~~~~
const btn = document.querySelectorAll(".product button")
btn.forEach(function(button,index){
  button.addEventListener("click",function(event){{
   var btnItem = event.target
   var Icecream = btnItem.parentElement 
   var IcecreamImg = Icecream.querySelector("img").src
   var IcecreamName = Icecream.querySelector(".product-item-text h2").innerText
   var IcecreamPrice = Icecream.querySelector(".product-item-text span").innerText
   
   addcart(IcecreamImg,IcecreamName,IcecreamPrice)
  }})
})

function addcart(IcecreamImg,IcecreamName,IcecreamPrice) {
  var addProduct = document.createElement("tr")
  var productContent = '<tr><td style="display: flex;align-items: center;margin-right:8%"><img style="width:50%;" src="'+IcecreamImg+'" alt=""><strong>'+IcecreamName+'</strong></td><td><p><span>'+IcecreamPrice+'</span><sup>đ</sup></p></td><td><input style="width: 30px;outline: none;" type="number" value="1" min="0"></td><td style="cursor: pointer;"><span class="delete">Delete</span></td></tr>'
  addProduct.innerHTML = productContent
  var Table = document.querySelector("tbody")
  Table.append(addProduct)
  
  total()
  
  deleteItem()
  
}

//~~~~~~~~~~~~~total-price~~~~~~~~~~
function total() {
  var Total1= 0
  var CartProduct = document.querySelectorAll("tbody tr")
  for (var i=0;i< CartProduct.length;i++){
    var ItemValue = CartProduct[i].querySelector("tbody input").value
    var ItemPrice = CartProduct[i].querySelector("tbody span").innerHTML
    Total2= ItemValue*ItemPrice*1000
    Total1 = Total1 + Total2
  } 
  var CartTotal = document.querySelector(".total-price span")
  CartTotal.innerHTML = Total1.toLocaleString('de-DE')
  AmountChange()
  
}  

//~~~~~~~~~~~~~~~~~delete~~~~~~~~~~~~~~~~~~~
function deleteItem() {
  var CartProduct = document.querySelectorAll("tbody tr")
  for (var i=0;i< CartProduct.length;i++){
    var deletebtn = document.querySelectorAll(".delete")
    deletebtn[i].addEventListener("click",function(event){
      var deleteCart = event.target
      var Itemcart = deleteCart.parentElement.parentElement
      Itemcart.remove()

      total()
    })
    
  }
}

function AmountChange(){
  var CartProduct = document.querySelectorAll("tbody tr")
  for (var i=0;i< CartProduct.length;i++){
    var AmountValue = CartProduct[i].querySelector("input")
    AmountValue.addEventListener("change",function () {
      total()
    })
    
  }
}

