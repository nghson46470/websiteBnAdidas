//header
function rederHeader(){
    const header = document.querySelector('.header');
    html=`
            <div class="header_logo" >
            <a href="./index.html">
                <img src="./image/y-nghia-logo-adidas-3.png" alt="">
            </a>
        </div>
        <div class="header_navition">
            <ul>
                <a href="./productmen.html" class=""><li class="header_navition_item">men</li></a>
                <a href="./productwomen.html" class=""><li class="header_navition_item">women</li></a>
                <a href="./productkids.html" class=""><li class="header_navition_item">kids</li></a>
                <a href="./productsale.html" class=""><li class="header_navition_item">sale</li></a>
                <a href="./productholiday.html" class=""><li class="header_navition_item">holiday</li></a>
                <a href="" class=""><li class="header_navition_item">3 stripe life</li></a>
            </ul>
        </div>
        <div class="header_navition_sub">
            <input type="search" placeholder="search...">
            <a href="./cart.html"> 
                <div class="header_navition_sub_cart  ti-shopping-cart"> 
                    <div class="cart_quantily">
                       
                    </div>
                </div>
            </a>
        </div>
        <div class="header_navition_login js-login-f">
            <ul>
                <li class="js-help-form">help</li>
                <li class="js-login-form">login</li>
                <li><a href="register.html">register</a></li>
            </ul>
        </div>`

        header.innerHTML=html

}



function handleQuantity(){
    const ApiCart = 'http://localhost:3000/cart'

        fetch(ApiCart)
            .then(function(response){
              return  response.json()
            })
            .then(function(reponse){
                const showQuantity = document.querySelector('.cart_quantily')
    
                html=reponse.length
                showQuantity.innerHTML =html
            })
    
}


//form login
function handleFormLogin(){
    const htmlFormLogin =  
    `<div class="modal-body">
        <i title="close" class="ti-close icon-close-modal"></i>
        <div class="modal-header">	
            <p class="text-login-sub">login</p>
        </div>
        <div class="modal-body-sub">
            <label for="text-user-name" class="text-login">user</label>
            <input id="text-user-name"  type="text" required class="text-user js--user-name"  placeholder="nhập tên user..." >
            <label for="text-user-pass" class="text-login">password</label>
            <input id="text-user-pass" type="password" required class="text-user js--user-pass "  placeholder="nhập password...">
        </div>
        <div class="frame-btn-login">
            <button class="btn-login">login</button>
        </div>
        <a href="./register.html" class="sign-up">sign up</a>
    </div>`

    const modallogin = document.querySelector('.js-modal')
    modallogin.innerHTML = htmlFormLogin
    
    const loginForm = document.querySelector('.js-login-form')
    const btnHidelogin = document.querySelector('.icon-close-modal')
    const btnsignUp = document.querySelector('.js-footer_signup>button')

 
        function showmodallogin(){
            modallogin.classList.add('open')
        }

        function hidemodallogin(){
            modallogin.classList.remove('open')
        }

        // for(const buyBtn of buyBtns ){
        //     buyBtn.addEventListener('click', showmodallogin)
        // }

        btnHidelogin.addEventListener('click',hidemodallogin )
        loginForm.addEventListener('click',showmodallogin)
        btnsignUp.addEventListener('click',showmodallogin)
       
}

//handleRegister
function handleLogin(){

    var callApiLogin = 'http://localhost:3000/login';

    const btnLogin = document.querySelector('.btn-login')
    const userLogin = document.querySelector('.js--user-name')
    const passLogin = document.querySelector('.js--user-pass')

    
    btnLogin.addEventListener('click',handleClickLogin)

    function handleClickLogin(){
        fetch(callApiLogin)
        .then(function(response){
            return response.json();
        })
        .then(function(datas){
            var nameLogin = userLogin.value
            var password = passLogin.value
            var review = true
            console.log(datas)

            return datas.map((data,index) => {
                if(data.user === nameLogin && data.pass === password){
                    window.location.assign("./index.html")
                    alert('dang nhap thanh cong')
                    review = false
                }
            })

            if (review){
                alert('vui long kiem tra lai')
            }
        })
           
          
    }


}


//form help
function handleFormHelp() {
    const htmlModalHelp = `<div class="help-body">
    <i title="close" class="ti-close icon-close-help"></i>
    <div class="help-header">	
        <p class="text-help-sub">What help do you need?</p>
    </div>
    <div class="help-body-sub">
        <label for="text-user-name" class="text-help text-user">name</label>
        <input id="text-user-name"  type="text" required class="text-user "  placeholder="name..." >
        <label for="text-user-email" class="text-help text-email">email</label>
        <input id="text-user-email" type="email" required class="text-user "  placeholder="email...">
        <label for="text-user-phone" class="text-help text-phone">phone number</label>
        <input id="text-user-phone" type="tel" required class="text-user "  placeholder="phone...">
        <label for="text-user-question" class="text-help text-question">question your</label>
        <input id="text-user-question" type="text" required class="text-user "  placeholder="question...">
    </div>
    <div class="frame-btn-login">
        <button class="btn-send">send</button>
    </div>
    
    </div>`
    const modalHelp = document.querySelector('.js-help')
    modalHelp.innerHTML = htmlModalHelp

    const helpForm = document.querySelector('.js-help-form')
    const closeFormhelp= document.querySelector('.icon-close-help')
    function showmodalhelp(){
        modalHelp.classList.add('open')
    }

    function hidemodalhelp(){
        modalHelp.classList.remove('open')
    }

    helpForm.addEventListener('click',showmodalhelp)
    closeFormhelp.addEventListener('click',hidemodalhelp)
}

//form footer
function formFooter(){
    const footerContainer = document.querySelector('.footer_container')
    const htmlFormFooter = ` 
        <div class="footer_info_store">
            <div class="footer_info_store_text footer_info_1">
                <p>STORIES, STYLE, AND SPORTING GOODS AT ADIDAS, SINCE 1949</p>
                <h5>Through sports, we have the power to change lives. Sports keep us fit. They keep us mindful. They bring us together. At
                    hletes inspire us. They help us to get up and get moving. And sporting goods featuring the latest technologies help us beat our personal best. adidas is home to the runner, the basketball player, the soccer kid,
                    the fitness enthusiast, the yogi. And even the weekend hiker looking to escape the city. The 3-Stripes are everywhere and anywhere. In sports. In music. On life’s stages. Before the whistle blows, 
                    during the race, and at the finish line. We’re here to 
                    support creators. To improve their game. To live their lives. And to change the world.
            </br>
            </br>

                    adidas is about more than sportswear and workout clothes. We partner with the best in the industry to co-create. This way we offer our fans the sporting goods, style and clothing that match the athletic needs,
                    while keeping sustainability in mind. We’re here to support creators. Improve their game. Create change. And we think about the impact we have on our world.
                    </h5>
            </div>
            <div class="footer_info_store_text footer_info_2">
                <p>WORKOUT CLOTHES, FOR ANY SPORT</p>
                <h5>adidas designs for athletes of all kinds. Creators who love to change the game. People who challenge conventions, break the rules, and define new ones. Then break them all over again. We design sports apparel that gets you moving, 
                    winning, and living life to the fullest. We create bras and tights for female athletes who play just as hard as the men. 
                    From low to high support. Maximum comfort. We design, innovate and iterate. We test new technologies in action. On the field, the track, the court, and in the pool. We’re inspired by retro workout clothes, creating new 
                    streetwear essentials. From NMD and Ozweego to our Firebird tracksuits. From Stan Smith to Superstar. Classic sports models are brought back to life on the streets and the stages around the world.
            </br>
            </br>
                    Through our collections we blur the borders between high fashion and high performance. Like our adidas by Stella McCartney athletic clothing collection – designed to look the part inside and outside of the gym. Or some of our adidas Originals lifestyle pieces, that can be
                    worn as sports apparel too. Our lives are constantly changing. Becoming more and more versatile. And adidas designs with that in mind.</h5>
            </div>
        </div>

        <div class="footer_signup js-footer_signup">
            <h1>JOIN OUR CREATORS CLUB & GET 15% OFF</h1>
            <button>SIGN UP FOR FREE <i class="ti-arrow-right"></i></button>
        </div>

        <div class="footer_info_main">
            <div class="footer_info_main_sub">
                <a href="https://www.facebook.com/ng.hongson.2000/" ><i class="ti-facebook"></i> FACEBOOK</a>
                <a href="https://www.instagram.com/nghsonn.19.1/" ><i class="ti-instagram"></i> INSTagram</a>
                <p> <i class="ti-email"></i> nghson46470@gmail.com</p>
                <p>2021 adidas America Inc.</p>
            </div>
            <div class="footer_info_main_sub">
                <p>Data settings</p>
                <p>Do not sell my personal information</p>
                <p>Privacy Policy</p>
                <p>Terms and Conditions</p>
            </div>
        </div>
    `

    footerContainer.innerHTML = htmlFormFooter
}


function handleRenderProducts(){
  
        

        fetch(apiProductWomen)
            .then(function(reponse){
                return reponse.json();
            })
            .then(function(products){
                var detailProductApi = 'http://localhost:3000/detailProduct'
                // lấy ra detailProductApi
                function getDetailProduct (callback){
                    fetch(detailProductApi)
                        .then (function(reponse){
                            return reponse.json();
                        })
                        .then(callback)
                }
    
        
        //render detailProduct
        function renderDetailProduct(product){
            var html = product.map(function(productWomen){
                return `<img src="${productWomen.img}" alt="">`
            })
            window.onload = function what(){
                productDetails.innerHTML = html.join('')
            }
        }
        
        //phương thức tạo
        function handlePost(data) {
            var options = {
                method: 'post',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data)
            };
            fetch(detailProductApi, options)
                .then (function(reponse){
                    return reponse.json();
                })
                .then(callback)
        }
        function handleCreateProductDetail() {
            productsWomen.forEach(function(productWomen){
                productWomen.onclick = function () {
                    var name_products = products[productWomen.id].name_products;
                    var img = products[productWomen.id].img;
                    var price = products[productWomen.id].price;
                    var quality = products[productWomen.id].quality;
                    var data = {
                        name_products: name_products,
                        img: img,
                        price:price,
                        quality:quality
                    };
                    handlePost(data,function(){
                        getDetailProduct(renderDetailProduct)
                    });
                }
            })
        }

        getDetailProduct(renderDetailProduct)
        handleCreateProductDetail()
    })
        
    }


function handleAddCart(){
    console.log("heasd")
}



// function handleRenderProductsDetail(){
//     const productDetails = document.querySelector('.img_product_details')
//     const productsWomen = document.querySelectorAll('.js-product')
//     const apiProductWomen ='http://localhost:3000/products_women'

//    fetch(apiProductWomen)
//     .then(function(reponse){
//         return reponse.json();
//     })
//     .then(function(products){
//         var detailProductApi = 'http://localhost:3000/detailProduct'
//         // lấy ra detailProductApi
//         function getDetailProduct (callback){
//             fetch(detailProductApi)
//                 .then (function(reponse){
//                     return reponse.json();
//                 })
//                 .then(callback)
//         }
    
        
//         //render detailProduct
//         function renderDetailProduct(product){
//             var html = product.map(function(productWomen){
//                 return `<img src="${productWomen.img}" alt="">`
//             })
//             productDetails.innerHTML = html.join('')
//         }
        
//         //phương thức tạo
//         function handlePost(data) {
//             var options = {
//                 method: 'post',
//                 headers: { 'Content-Type': 'application/json' },
//                 body: JSON.stringify(data)
//             };
//             fetch(detailProductApi, options)
//                 .then (function(reponse){
//                     return reponse.json();
//                 })
//                 .then(callback)
//         }
//         function handleCreateProductDetail() {
//             productsWomen.forEach(function(productWomen){
//                 productWomen.onclick = function () {
//                     var name_products = products[productWomen.id].name_products;
//                     var img = products[productWomen.id].img;
//                     var price = products[productWomen.id].price;
//                     var quality = products[productWomen.id].quality;
//                     var data = {
//                         name_products: name_products,
//                         img: img,
//                         price:price,
//                         quality:quality
//                     };
//                     handlePost(data,function(){
//                         getDetailProduct(renderDetailProduct)
//                     });
//                 }
//             })
//         }

//         getDetailProduct(renderDetailProduct)
//         handleCreateProductDetail()
//     })
// }




function start(){
    rederHeader()
    formFooter()
    handleFormLogin()
    handleFormHelp()
    handleLogin()
    handleQuantity()
    // handleRenderProductsDetail()
}

start()