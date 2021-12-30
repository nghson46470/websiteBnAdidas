const apiProductMen = 'http://localhost:3000/products_men'
const getApiCart = 'http://localhost:3000/cart'

function getApiMen (callback){
    fetch(apiProductMen)
        .then (function(reponse){
            return reponse.json();
        })
        .then(callback)
}

function handleRenderProducts(){
   
    getApiMen(renderProductsMen)

     


    function renderProductsMen(products){
        const mainProductMen = document.querySelector('.js-product_men')
        var htmls =''

        var htmls = products.map(function(product,index){
            return `
            <div class="product_new_arrivals product_Men_list" index = (${index})> 
                <div class="product_new_arrivals_img">
                    <img src="${product.img}" alt="">
                </div>
                <div class="product_new_arrivals_text un_href">
                    <p class="">${product.name_products}</p>
                    <h6>Men's Originals</h6>
                    <p>sale ends 10/19</p>
                    <h2>${product.price}</h2>
                </div>
                <div class="product_layer">
                    <button class="btn_cart">ADD TO CART</button>
                    
                </div>

            </div>`
        })
    
            mainProductMen.innerHTML= htmls.join('')
    
    }

    
}


function handleAddCart(){
        const productMen = document.querySelector('.js-product_men ')

        productMen.addEventListener('click',handleAddProduct)
        
        console.log(productMen)
        function handleAddProduct(e){
            console.log(e.target)
            getApiMen(getProduct)
            const idProduct = (e.path[2].getAttribute('index'))
            id = (idProduct.replace(')', '')).replace('(', '')
           
            
            function getProduct(products){
               
                // console.log(products[id])

                // function getApi(callback){
                //     fetch(getApiCart)
                //         .then(function (response) {
                //            return response.json();
                //         })
                //         .then (callback)
                // }

                // function reviewQuantily(productsReview){
                //     console.log(productsReview)
                // }

                

                

                function createProducts(data,callback) {
                    var options = {
                        method: 'post',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify(data)
                    };
                   fetch(getApiCart, options)
                   .then(function (response) {
                      response.json();
                   })
                   .then (callback)
                }

                function handleCreateCart() {
                        var name = products[id].name_products
                        var img = products[id].img 
                        var price = products[id].price
                        var index = products[id].id
                        var quantity = 'x1'
                        var data = {
                           name,
                           img,
                           price,
                           quantity,
                           index
                       };
                       createProducts(data,function (){
                            getApi(reviewQuantily)
                       })
                }
                handleCreateCart()
               
            }
          
        }
}





    


function start(){
    handleRenderProducts()
    handleAddCart()
}
 
start()

