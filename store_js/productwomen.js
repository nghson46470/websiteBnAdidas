const apiProductWomen ='http://localhost:3000/products_women'
const getApiCart = 'http://localhost:3000/cart'


function getApiWomen (callback){
    fetch(apiProductWomen)
        .then (function(reponse){
            return reponse.json();
        })
        .then(callback)
}



function handleRenderProducts(){
    
    getApiWomen(renderProductsWomen)
   

    function renderProductsWomen(products){
        const mainProductWomen = document.querySelector('.js-product_women')
        var htmls =''

        var htmls = products.map(function(product,index){
            return `
            <div class="product_new_arrivals js-product" id=(${index})>
                    <div class="product_new_arrivals_img">
                        <img src="${product.img}" alt="">
                    </div>
                    <div class="product_new_arrivals_text ">
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
       
            mainProductWomen.innerHTML= htmls.join('')

}}

function handleAddCart(){
    const productWomen = document.querySelector('.js-product_women')

    productWomen.addEventListener('click',handleAddProduct)
    
    console.log(productWomen)
    function handleAddProduct(e){
        console.log(e.path[2])
        getApiWomen(getProduct)
        const idProduct = (e.path[2].getAttribute('id'))
        id = (idProduct.replace(')', '')).replace('(', '')
       
        
        function getProduct(products){
            

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