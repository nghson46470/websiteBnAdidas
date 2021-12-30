function handleRegister(){
    var callApiLogin = 'http://localhost:3000/login';
    const btnRegister = document.querySelector('.btn-register')
    const nameUser = document.getElementById('text-user-name')
    const lastName = document.getElementById('text-user-last_name')
    const user = document.querySelector('.form_login > #text-user-user')
    const pass = document.querySelector('.form_login > #text-user-pass')

    btnRegister.addEventListener('click', handlePostUser)

    function handlePostUser (){

        var postName = nameUser.value
        var postLastName = lastName.value
        var postUser = user.value
        var postPass = pass.value
 
        if(!(postName && postLastName && postUser && postPass)){
            alert('nhap du thong tin')
        }
        else{
         alert('dang ki thanh cong')
         var data = {
             nameUser : postName,
             lastName : postLastName,
             user : postUser,
             pass : postPass,
           };
           handlePost(data);
        }
     }
     function handlePost(data) {
         var options = {
             method: 'post',
             headers: { 'Content-Type': 'application/json' },
             body: JSON.stringify(data)
         };
         fetch(callApiLogin, options)
             .then (function(reponse){
                 return reponse.json();
             })
             .then(callback)
     }
}

function start(){
    handleRegister()
}
start()