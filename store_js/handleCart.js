const ApiCart = 'http://localhost:3000/cart'

function getApiCart(callback){
    fetch(ApiCart)
        .then(function(response){
          return  response.json()
        })
        .then(callback)
}

getApiCart(handleRenderCart)
getApiCart(handleTotals)

function handleRenderCart(products){
    const cartContainer = document.querySelector('.cart-container > table');

    var html = products.map(function(product,index){
        return `
            <tr class="product_${index}">
                <td>${index+1}</td>
                <td>${product.name}</td>
                <td><img src="${product.img}" alt=""></td>
                <td>${product.price}</td>
                <td>${product.quantity}</td>
                <td onclick="handleDelete(${index+1})" class="cart-delete">
                    delete
                </td>
            </tr>
        `
    })
    cartContainer.innerHTML = html.join('')

    console.log(products)
}

function handleTotals(products){
    const cartTotal = document.querySelector('.cart-total td:nth-child(2)')

    var html = products.reduce(function(total,product){
        return total + Number(product.price.replace('$',''))
    },0)

    cartTotal.innerHTML = `$${html}`
}

function handleDelete(index){
    var options = {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
    };
   fetch(ApiCart + '/' + index, options)
   .then(function (response) {
        response.json();
   })
   .then (function() {
    var productItem =  document.querySelector('.product_' + index);
    if(productItem) {
       productItem.remove();
    }
})
}



function start(){
    handleRenderCart()
}
start();