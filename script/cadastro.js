const url = 'https://go-wash-api.onrender.com/api/user';

function mostrarSenha(){
    var inputPass = document.getElementById('password')
    var btnShowPass = document.getElementById('btn-senha')

    if(inputPass.type === 'password'){
        inputPass.setAttribute('type','text')
        btnShowPass.classList.replace('bi-eye','bi-eye-slash')
    }else{
        inputPass.setAttribute('type','password')
        btnShowPass.classList.replace('bi-eye-slash','bi-eye')
    }
}

async function cadastroUsuario(){   
    let name = document.getElementById('name');
    let email = document.getElementById('email')
    let cpf_cnpj = document.getElementById('cpf_cnpj')
    let password = document.getElementById('password')
    let birthday = document.getElementById('birthday')


    // essa verificação foi colocada aqui devido ser necessario executa-la antes do fetch(função que chama a API)
    if(name.value==''){
        alert("preencha o seu nome")
        return
        }
    
        if(email.value==''){
        alert("preencha o seu Email")
        return
        }

        if(cpf_cnpj.value==''){
            alert("Informe seu CPF ou CNPJ")
            return
            }

    

    let resposta = await fetch(url,{
        method:"POST",
        body:JSON.stringify(
            {
                "name":name.value,
                "email":email.value,
                "user_type_id":1,
                "password":password.value,
                "cpf_cnpj":cpf_cnpj.value.replace(/[^0-9]/g,''),
                "terms": 1,
                "birthday":birthday.value   
            }
        ),
        headers:{
            'Content-Type': 'application/json'
        }        
    });

    let data = await resposta.json();

    //if (cpf_cnpj.value !=)

    if(data.data?.statusCode && data.data.statusCode != 200){
        alert(data.data.errors);
        return;
    }
    alert("Cadastro feito com sucesso");
    window.location.href = "login.html";




}
