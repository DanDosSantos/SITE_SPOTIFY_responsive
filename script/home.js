let url = "https://go-wash-api.onrender.com/api/auth/address";
async function endereco(){

    let token = JSON.parse(localStorage.getItem('user')).acess_token;
    
    let resposta = await fetch( url,{
        method:"GET",
        headers:{
            "Authorization": "Bearer "+token
        }
    })

    let responseApi = await resposta.json();
    console.log(responseApi)
}

endereco();