

const Keyboard = (e) => {
    let elementActive = null;
    e = e || window.event;
    let i  = 0;
    let feature = false;
    let widthMenu = 221;
    if (e.keyCode == '38') {//UP
       elementActive = document.activeElement; 
       let className = elementActive.className;
       let clasName = className.split(" ");
       let clas = clasName[0];
       let el = elementActive.id
       if(clas==="screen-slider"){           
           feature = true;
        console.log("screen-slider: feature: "+feature);
        return new Promise((resolve, reject)=>{
            resolve(feature);
        });
       }else if(el==="Início"){
        document.getElementById("Busca").focus();
       }else if( el==="Agora na Globo"){
        document.getElementById("Início").focus();
       }else if( el==="Categorias"){
        document.getElementById("Agora na Globo").focus();
       }else if( el==="Minha Conta"){
        document.getElementById("Categorias").focus();
       }
    }
    else if (e.keyCode == '40') {//DOWN
       elementActive = document.activeElement; 
       let className = elementActive.className;
       let el = elementActive.id;
       console.log("className: "+className);
       if(className==="feature-bt"){
        document.getElementById("screen-2").focus();   
       }else if(el==="Busca"){
        document.getElementById("Início").focus();
       } else if(el==="Início"){
        document.getElementById("Agora na Globo").focus();
       }else if(el==="Agora na Globo"){
        document.getElementById("Categorias").focus();
       }else if(el==="Categorias"){
        document.getElementById("Minha Conta").focus();
       }
    }
    else if (e.keyCode == '37') {//LEFT
       elementActive = document.activeElement;
       let screen = 2;//first screen from menu of screen
       let className = elementActive.className;
       let clasName = className.split(" ");
       let clas = clasName[0];
      let el = elementActive.id
      if(el==="assista"){
        document.querySelector(".menu-vertical").style.width=widthMenu+"px";
        for(let m=1; m<=5;m++){
            document.getElementById("title-menu-"+m).style.display="inline";
        }
          document.getElementById("Busca").focus();
      }else if(el==="veja-mais"){
        document.getElementById("assista").focus();
      }else if(clas==="screen-slider"){
        let idItem = el.split("-");
        i = idItem[1];
        i--;   
       if(i>=screen){           
           let id = "screen-"+i
           document.getElementById(id).focus();
       }else{
        document.querySelector(".menu-vertical").style.width=widthMenu+"px";
        for(let m=1; m<=5;m++){
            document.getElementById("title-menu-"+m).style.display="inline";
        }
        document.getElementById("Busca").focus();
       }
      }
    }
    else if (e.keyCode == '39') {//RIGHT
      elementActive = document.activeElement;
      let screen = 6;//last screen from menu of screen
      let className = elementActive.className;
      let clasName = className.split(" ");
      let clas = clasName[0];
      let el = elementActive.id
      console.log("className: "+className);
      console.log("el: "+el);
        if(el==="assista"){
            document.getElementById("veja-mais").focus();
        }else if(el==="Busca" ||
                 el==="Início" || 
                 el==="Agora na Globo" ||
                 el==="Categorias" ||
                 el==="Minha Conta" ){
                    for(let m=1; m<=5;m++){
                        document.getElementById("title-menu-"+m).style.display="none";
                    }
                    document.querySelector(".menu-vertical").style.width="24"+"px";
                    if(document.getElementById("assista")){
                        document.getElementById("assista").focus();
                    } else {
                        document.getElementById("screen-2").focus();  
                    }                   
        }else if(clas==="screen-slider"){
            let idItem = el.split("-");
             i = parseInt(idItem[1]);
             i++;   
            if(i<=screen){
                let id = "screen-"+i
                console.log("el: "+id);
                document.getElementById(id).focus();
            }
          }
    }
    return new Promise((resolve, reject)=>{
        resolve(feature);
    });

};

export default Keyboard;
