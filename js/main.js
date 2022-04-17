let btnEncriptar = document.querySelector("#encriptar");
let btnDesencriptar = document.querySelector("#desencriptar");
let imagenVisible = document.getElementById("imagen-munieco");
let desencriptadoVisible = document.getElementById("desencriptado");
let texto = document.getElementById("input-texto");
let textoModificado = document.getElementById("texto-encriptado");
let btnCopiar = document.getElementById("copiar");

texto.addEventListener("keypress",(e)=>{
    if(!e.key.match(/[a-z ]/)){
        e.preventDefault();
    }
})

btnCopiar.addEventListener("click",()=>{
    navigator.clipboard.writeText(textoModificado.innerHTML);
    popupSwal('success','Texto \"'+ textoModificado.innerHTML + "\" copiado en el portapapeles");
})

function popupSwal(tipo, mensaje){
    Swal.fire({
        type: tipo,
        title: mensaje,
        showConfirmButton: true,
        confirmButtonColor: '#48D1CC'
    })
}

btnEncriptar.addEventListener("click",()=>{
    imagenVisible.style.display = "none";
    desencriptadoVisible.style.display = "flex";
    let texto_convertido = "";
    for(let letra in texto.value){
        switch (texto.value[letra]) {
            case "a":
                texto_convertido+="ai"
                break;
            case "e":
                texto_convertido+="enter"
                break;
            case "i":
                texto_convertido+="imes"
                break;
            case "o":
                texto_convertido+="ober"
                break;
            case "u":
                texto_convertido+="ufat"
                break;
            default:
                texto_convertido+=texto.value[letra]
                break;
        }
    }
    textoModificado.innerHTML = texto_convertido;
})

btnDesencriptar.addEventListener("click",()=>{
    imagenVisible.style.display = "none";
    desencriptadoVisible.style.display = "flex";
    let texto_desconvertido = "";    
    for(let i=0;i<texto.value.length; i++){
        switch (texto.value[i]) {
            case "a":
                texto_desconvertido+="a"
                i+=1;
                break;
            case "e":
                texto_desconvertido+="e"
                i+=4;
                break;
            case "i":
                texto_desconvertido+="i"
                i+=3;
                break;
            case "o":
                texto_desconvertido+="o"
                i+=3;
                break;
            case "u":
                texto_desconvertido+="u"
                i+=3;
                break;
            default:
                texto_desconvertido+=texto.value[i]
                break;
        }
    }
    textoModificado.innerHTML = texto_desconvertido;
})



