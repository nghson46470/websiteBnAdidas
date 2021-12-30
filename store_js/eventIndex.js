function handleNextProduct(){
    const nextRight =document.querySelector('.next_right')
    const nextLeft =document.querySelector('.next_left')
    const productContainer = document.querySelectorAll('.tab_pane')
    
    function nextProduct(){
        productContainer.forEach(function(product){
            var transform = product.style.transform
            if(transform==='translateX(0px)'){
                product.style.transform = 'translateX(-400px)'; 
            }
            else{
                product.style.transform = 'translateX(0px)'
            }
        })
    }
    console.log(nextRight)
    nextRight.addEventListener('click',nextProduct)
    nextLeft.addEventListener('click',nextProduct)
}


function handleTransferProduct(){
    const btnTransfer = document.querySelectorAll('.js-content_text_sub')
    const Panes = document.querySelectorAll('.tab_pane')
    
    btnTransfer.forEach(function(tab,index){
        const pane = Panes[index]
        tab.onclick = function(){
            document.querySelector('.content_text_sub--opa').classList.remove('content_text_sub--opa')
            document.querySelector('.product--display_none').classList.remove('product--display_none')
            
            this.classList.add('content_text_sub--opa')
            pane.classList.add('product--display_none')
        }
    })

}

function start(){
    handleNextProduct()
    handleTransferProduct()
}

start() 


