//===============================================  Atividades  ==================================================================

//Menu Atividades
function img01(){
    document.getElementById("trocarimg").src="musculacao.png";
    document.getElementById("M2icon1").src="iconVerm.png";
    document.getElementById("M2icon2").src="icon8.png";
    document.getElementById("M2icon3").src="icon3.png";
    document.getElementById("M2icon4").src="icon4.png";
    
    document.getElementById("M2icon6").src="icon6.png";
    document.getElementById("M2icon7").src="icon7.png";
}
function img02() {
    document.getElementById("trocarimg").src="corrida.png";
    document.getElementById("M2icon1").src="icon.png";
    document.getElementById("M2icon2").src="icon8Verm.png";
    document.getElementById("M2icon3").src="icon3.png";
    document.getElementById("M2icon4").src="icon4.png";
  
    document.getElementById("M2icon6").src="icon6.png";
    document.getElementById("M2icon7").src="icon7.png";
}
function img03(){
    
    document.getElementById("trocarimg").src="ginastica.png";
    document.getElementById("M2icon1").src="icon.png";
    document.getElementById("M2icon2").src="icon8.png";
    document.getElementById("M2icon3").src="icon3Verm.png";
    document.getElementById("M2icon4").src="icon4.png";
    
    document.getElementById("M2icon6").src="icon6.png";
    document.getElementById("M2icon7").src="icon7.png";
}
function img04(){
    document.getElementById("trocarimg").src="danca.png";
    document.getElementById("M2icon1").src="icon.png";
    document.getElementById("M2icon2").src="icon8.png";
    document.getElementById("M2icon3").src="icon3.png";
    document.getElementById("M2icon4").src="icon4Verm.png";
    
    document.getElementById("M2icon6").src="icon6.png";
    document.getElementById("M2icon7").src="icon7.png";
}


function img06(){
    document.getElementById("trocarimg").src="inicio.png";
    document.getElementById("M2icon1").src="icon.png";
    document.getElementById("M2icon2").src="icon8.png";
    document.getElementById("M2icon3").src="icon3.png";
    document.getElementById("M2icon4").src="icon4.png";
    document.getElementById("M2icon6").src="icon6Verm.png";
    document.getElementById("M2icon7").src="icon7.png";
   
}

function img07(){
    document.getElementById("trocarimg").src="alimentacao.png";
    document.getElementById("M2icon1").src="icon.png";
    document.getElementById("M2icon2").src="icon8.png";
    document.getElementById("M2icon3").src="icon3.png";
    document.getElementById("M2icon4").src="icon4.png";
   
    document.getElementById("M2icon6").src="icon6.png";
    document.getElementById("M2icon7").src="icon7Verm.png";
    
}
function esconder(){
    document.getElementById("oi").style.display='none';
    document.getElementById("esconder").style.display='none';
    document.getElementById("aparecer").style.display='block';
    document.getElementById("aparecer").style.color='#BB0A21';
    document.getElementById("aparecer").style.borderColor='#BB0A21';
}
function aparecer(){
document.getElementById("oi").style.display='flex';
document.getElementById("esconder").style.display='block';
document.getElementById("aparecer").style.display='none';

}
//Fim Menu

//===============================================   Pagamento   ==================================================================
//Pagamento , Pix , Debito e Credito
function fa(){

                    
    var oi = document.pag.lplanos.value;
    
    

   if (oi == 'pix'){
    document.getElementById("Credito").style.display='none';
    document.getElementById("Debito").style.display='none';
    document.getElementById("pix").style.display='block';
    
   }
   else
   if(oi =='cdt'){
    document.getElementById("pix").style.display='none';
    document.getElementById("Debito").style.display='none';
    document.getElementById("Credito").style.display='block';
   }
   else
   if(oi =='dbt'){
    document.getElementById("pix").style.display='none';
    document.getElementById("Credito").style.display='none';
    document.getElementById("Debito").style.display='block';
   }

}
    
//Mudar Mesal e Anual
function tempo(){
    var tempo = document.pag.planos.value;
    var valor = document.querySelector("#valor");
    var valor1 = document.querySelector("#valor1");
    var titulo = document.querySelector("#tiPlanos");
    
    if(tempo == "msl"){
        titulo.innerHTML='Mensal';
        valor1.innerHTML='Preço Mensal'
        valor.innerHTML='R$ 69,99'
        
        document.getElementById("imgPag1").style.display='block';
        document.getElementById("imgPag1").src='../Home/mesal.png';
        document.getElementById("infPlanos").style.display='block';
        


    }else if(tempo == "anl"){
        valor1.innerHTML='Preço Anual'
        titulo.innerHTML='Anual';
        valor.innerHTML='R$ 340,00';
        document.getElementById("imgPag1").style.display='block';
        document.getElementById("imgPag1").src='../Home/anual.png';
        document.getElementById("infPlanos").style.display='block';
        
    }
}



