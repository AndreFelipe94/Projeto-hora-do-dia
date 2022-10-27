function carregar(){
    let msg = document.getElementById('msg')
    let img = document.querySelector('.imagem')
    let data = new Date()
    let hora = data.getHours()
    let minutos = data.getMinutes()
    
    
    if(hora >= 0 && hora < 12){
        msg.innerHTML = `Agora são ${hora} horas e ${minutos} minutos <br/> Bom dia`
        img.src = 'manha.jpg'
        document.body.style.background ='#e2dc9f'
    } else if (hora >= 12 && hora <= 18){
        msg.innerHTML = `Agora são ${hora} horas e ${minutos} minutos <br/> Boa tarde`
        img.src = 'tarde.jpg'
        document.body.style.background ='#b9846f'
    } else {
        msg.innerHTML = `Agora são ${hora} horas e ${minutos} minutos <br/> Boa Noite`
        img.src = 'noite.jpg'
        document.body.style.background ='#515154'
    }
    
    }
    
    