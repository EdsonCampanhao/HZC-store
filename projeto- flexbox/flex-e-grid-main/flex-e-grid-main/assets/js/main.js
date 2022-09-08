const menu=document.querySelector('#menu');
const menuLateral=document.querySelector('#menu-lateral')
const logoMenu=document.querySelector('.cabecalho__logo')
const menuOptions=document.querySelector('#menu-options').children
const menuOption=[]

for(i=0;i<menuOptions.length;i++){
    menuOption[i]= menuOptions[i]
}





menu.addEventListener('click',()=>{ menuLateral.classList.toggle('menu-lateral--ativa')});

menuLateral.addEventListener('click',activeOption)



function activeOption(){

   desactiveOption();

   for(i=0;i<menuOption.length;i++){

      if(event.target==menuOption[i]){

         menuOption[i].classList.add('menu-lateral__link--ativo')
         break;

      }     
   }
}

function desactiveOption(){

   for(i=0;i<menuOption.length;i++){

      if(menuOption[i].classList[1]=='menu-lateral__link--ativo'){
         menuOption[i].classList.remove('menu-lateral__link--ativo')
         break
      }


   }
}





/*
menuOptions[].addEventListener('click',optionActive)

function optionActive(){

   alert("é por ai")
}


function openCloseMenu(){

   if ( menuLateral.classList=='menu-lateral'){
    logoMenu.classList='cabecalho__logo--ativa';
    menuLateral.classList='menu-lateral--ativa';
   } else{
    menuLateral.classList='menu-lateral';
    logoMenu.classList='cabecalho__logo';
   }
}
*/