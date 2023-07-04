let ids = '';

function ids1 () {
    ids = 'servicios.html';
    history.pushState(`Selected: ${ids}`, `./${ids}`);
    pages = 'servicios.html.html';

};

function ids2 () {
    ids = 'carrito.html';
    history.pushState(`Selected: ${ids}`, `./${ids}`);
    pages = 'carrito.html';

};



window.addEventListener('popstate', e => {
    backweb();
    
});

function backarriba(){
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
        });       
};

function backweb() {
   
    if (contador==1) {
        document.getElementById("sharelink").style.display = "none";
        document.getElementById("informacion").style.display = "block";
        document.getElementById("portafolio").style.display = "none";
        document.getElementById("side").style.display = "none";
        conta=0;
        contador=0;
        backarriba();
        history.back();

    }
    else if(contador==2){
        document.getElementById("portafolio").style.display = "block";
        document.getElementById("Razas").style.display = "none";
        document.getElementById("screen4").style.display = "none";
        document.getElementById("somos").style.display = "none";
        contador=1;
        backarriba();
        ids1();

    }
    else{
            history.back();
        
    }

    } 


function inicio() {
    document.getElementById("informacion").style.display = "block";	
    document.getElementById("portafolio").style.display = "none";
    document.getElementById("Razas").style.display = "none";
    document.getElementById("screen4").style.display = "none";
    document.getElementById("side").style.display = "none";
    document.getElementById("sharelink").style.display = "none";
    document.getElementById("somos").style.display = "none";
    conta=0;
    contador=0;
    backarriba();
    backweb();
}




var btn = document.getElementById("inicio"),
    informacion = document.getElementById("infomacion"),
    contador=0;


function servicios() {

    document.getElementById("informacion").style.display = "none";
    document.getElementById("portafolio").style.display = "block";
    document.getElementById("side").style.display = "none";
    document.getElementById("sharelink").style.display = "none";
    document.getElementById("somos").style.display = "none";
    document.getElementById("Razas").style.display = "none";
    conta=0;
    contador=1;
    ids1();

}

function Razas() {
    document.getElementById("informacion").style.display = "none";	
    document.getElementById("portafolio").style.display = "none";
    document.getElementById("Razas").style.display = "block";
    document.getElementById("side").style.display = "none";
    document.getElementById("informacion").style.display = "none";
    document.getElementById("screen4").style.display = "none";
    document.getElementById("sharelink").style.display = "none";
    document.getElementById("somos").style.display = "none";
    conta=0;
    contador=2;
    ids2();
    backarriba(); 
    
    
}


function planes() {
    document.getElementById("screen4").style.display = "block";
    document.getElementById("portafolio").style.display = "none";
    document.getElementById("sharelink").style.display = "none";
    document.getElementById("side").style.display = "none";
    document.getElementById("informacion").style.display = "none";
    document.getElementById("Razas").style.display = "none";
    document.getElementById("somos").style.display = "none";
    conta=0;
    contador=2; 
    ids2();
    backarriba();     
        
}

function somos() {
    document.getElementById("somos").style.display = "block";
    document.getElementById("screen4").style.display = "none";
    document.getElementById("portafolio").style.display = "none";
    document.getElementById("side").style.display = "none";
    document.getElementById("informacion").style.display = "none";
    document.getElementById("Razas").style.display = "none";
    document.getElementById("sharelink").style.display = "none";
    conta=0;
    contador=2; 
    ids2();
    backarriba();  
        
}

function sharetj() {
    document.getElementById("sharelink").style.display = "block";
    document.getElementById("informacion").style.display = "none";
    document.getElementById("portafolio").style.display = "none";
    document.getElementById("side").style.display = "none";
    document.getElementById("Razas").style.display = "none";
    document.getElementById("screen4").style.display = "none";
    document.getElementById("somos").style.display = "none";
    conta=0;
    contador=1;
    ids1();    
       
}


//   boton atras

function back() {

    if (contador==1) {
        document.getElementById("informacion").style.display = "block";
        document.getElementById("portafolio").style.display = "none";
        document.getElementById("side").style.display = "none";
        document.getElementById("sharelink").style.display = "none";
        conta=0;
        contador=0;
        backarriba();
        history.back();

    }
    else if(contador==2){
        document.getElementById("portafolio").style.display = "block";
        document.getElementById("Razas").style.display = "none";
        document.getElementById("screen4").style.display = "none";
        document.getElementById("somos").style.display = "none";
        contador=1;
        backarriba();
        ids1();

    }
    else{
            history.back();
        
    }

    } 


       //    menu laterl 

       var btns = document.getElementById("inicio"),
       informacion = document.getElementById("infomacion"),
       conta=0;
   
       function sidebar()  {
   
           if (conta==0) {
               document.getElementById("side").style.display = "block";
               conta=1;
           }
           else{
               document.getElementById("side").style.display = "none";
               conta=0;
           }
           }
   
           function cerrarside() {
               document.getElementById("side").style.display = "none";
               conta=0;
               
           }
   
           // llevar cerrar side automatico
   
           document.querySelector('.tarjeta').addEventListener('click',()=>{
               document.getElementById("side").style.display = "none";
               conta=0;
               });
   
   

   //    menu laterl 

    var btns = document.getElementById("inicio"),
    informacion = document.getElementById("infomacion"),
    conta=0;

    function sidebar()  {

        if (conta==0) {
            document.getElementById("side").style.display = "block";
            conta=1;
        }
        else{
            document.getElementById("side").style.display = "none";
            conta=0;
        }
        }

        function cerrarside() {
            document.getElementById("side").style.display = "none";
            conta=0;
            
        }

 
  
// llevar arriba
    
document.querySelector('.side')   
.addEventListener('click',()=>{
 window.scrollTo({
 top: 0,
 behavior: 'smooth'
});
});

        document.querySelector('.side1')   
        .addEventListener('click',()=>{
         window.scrollTo({
         top: 0,
         behavior: 'smooth'
        });
        });

        document.querySelector('.side2')   
        .addEventListener('click',()=>{
         window.scrollTo({
         top: 0,
         behavior: 'smooth'
        });
        });

        document.querySelector('.side3')   
        .addEventListener('click',()=>{
         window.scrollTo({
         top: 0,
         behavior: 'smooth'
        });
        });

        document.querySelector('.back')   
        .addEventListener('click',()=>{
         window.scrollTo({
         top: 0,
         behavior: 'smooth'
        });
        });
        
// formulario

document.querySelector("#submit").addEventListener("click", e => {
    e.preventDefault();
  let items = document.getElementById("numer2").textContent;
   if (items == 0 ){
    console.log('noenvia')
   }else {
    let allTasks = "";
    let tasks = JSON.parse(localStorage.getItem('tasks'));
    
    for (let i = 0; i < tasks.length; i++) {
      allTasks +=  "Raza:" + tasks[i].title + " Un " + tasks[i].description + " / " + "\n";
    }
//INGRESE UN NUMERO DE WHATSAPP VALIDO AQUI:
let telefono = "59996079530";
let cliente = document.querySelector("#cliente").value;
let Ubicacion = document.querySelector("#Ubicacion").value;
let venta = document.querySelector("#venta").value;
let resp = document.querySelector("#respuesta");
let cantidad = index2;
let productos = allTasks ;

resp.classList.remove("fail");
resp.classList.remove("send");

let url = `https://api.whatsapp.com/send?phone=${telefono}&text=
      *Cachorros los Chillos*%0A
      *Datos del Carrito*%0A
      *Cliente*%0A
      ${cliente}%0A
      *Ubicacion*%0A
      ${Ubicacion}%0A
      *Forma de Pago*%0A
      ${venta}%0A
      *Cantidad*%0A
      ${cantidad}%0A
      *Pedido*%0A
      ${productos}%0A`;

if (cliente === "" || Ubicacion === "" || venta === "" ) {
  resp.classList.add("fail");
  resp.innerHTML = `Espera, ${cliente} faltan algunos Datos `;
  return false;
}
resp.classList.remove("fail");
resp.classList.add("send");
resp.innerHTML = `Tu Pedido Fue Enviada, ${cliente}`;
window.open(url);
clearLocalStorage();
clearTasks();

   }
    
  });
          
  function save(){
    let url = `https://drive.google.com/u/0/uc?id=1KJm5kxGJqaOyzg2zkzAF8PymeSGKKsjD&export=download`;
    window.open(url); 
   };


          function ftuser() {
              Swal.fire({
                  title: 'Cachorros los Chillos',
                  text: 'Tu Mejor Amigo en un Solo Lugar',
                  imageUrl: 'img/mascotas.png',
                  imageWidth: 100,
                  confirmButtonText: 'Añadir a Contactos',
                  showCloseButton: 'true',
                  showCancelButton: true,
            
              
                }).then((result) => {
                  if (result.isConfirmed) {
                    save();
                    Swal.fire({
                      position: 'top-end',
                      icon: 'success',
                      title: 'Descarga Correcta',
                      showConfirmButton: false,
                      timer: 1500
                    })
                  }
                })
          
           
          };
          
          function abrirpagos(){
            let urla = `https://cachorrosloschillos.blogspot.com/p/opciones-de-pago.html`;
            window.open(urla); 
           };
    
    
           function verpagos(){
            let urlsp = `https://cachorrosloschillos.blogspot.com/p/opciones-de-pago.html`;
            window.open(urlsp); 
           };
    
    
          function msjpagos() {
            Swal.fire({
                title: 'Opciones de Pago',
                icon: 'success',
                html:
               '<a href="https://api.whatsapp.com//send?text=Enviado%20desde%20la%20App%20de%20Cliconline%20Ver%20Opciones%20de%20Pago%20https://cachorrosloschillos.blogspot.com/p/opciones-de-pago.html" class="botonp" ><span class="fa fa-share-alt"></span >&nbsp;Compartir nro. Cuenta</a>',
                showCloseButton: true,
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                confirmButtonText: 'Ver nro. Cuenta',
              })
              .then((result) => {
                if (result.isConfirmed) {
                  verpagos();
                  Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Información ',
                    showConfirmButton: false,
                    timer: 1500
                  })
                }
              })
          
           
          };
          
          function msj2() {
            Swal.fire({
            showCloseButton: true,
            icon: 'success',
            title: 'Tarjeta Digital',
            text: 'Link Copiado a Portapapeles',
            footer: 'CliconlineStudios'
            });
          
           
          };
    
    
    
    const $content = document.getElementById('textareacopy');
          $btncopy = document.getElementById ('btcopi');
          $title = document.getElementById ('titlelink')
    
          $btncopy.addEventListener('click', e => {
            $content.select();
            document.execCommand('copy')
            msj2();
          });
    
        
// share tarjeta

const shareData2 = {
    title: 'Cachorros los Chillos',
    text: 'Enviado desde Cliconline App.Tarjeta Digital Cachorros los Chillos',
    url: 'https://cachorrosloschillos.blogspot.com',
    }
    
    
    // Share must be triggered by "user activation"
   
    var urltarjeta = 'https://cachorrosloschillos.blogspot.com'
  
    function sharetarjeta(){
    if (navigator.share) {
        navigator
       .share(shareData2)
       .then(() => console.log('correcto'))
       .catch(error => console.log ('error sharing',error) );
    }else {
        sharetj();
    }
    } 



    function alerta() {
        Swal.fire({
        showCloseButton: true,
        icon: 'success',
        text: 'Se Habilitara Próximamente ',
        footer: 'Tarjeta Digital Demo'
        });
      
       
      };

      var agregar = ``;
  
      let amountProduct = document.querySelector('.count-product');
      
      //absorventes>
      
      
      function pekines() {
        document.getElementById('imgc').value =  `https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj42Q0C_UCRSqd75uPEr3Eh04eN1MwPQEUJD-k1NHONXcQm631UeW1-QbOgWfMg2UwTbNheqsZLt4AuiYsiZa_oo2F8TxBUxysc0No2QX3mru9OT2kK_kyeWqcbfxNqu_uzfWqSIl0Xl-tQD_Sw4YN2x4p9YLlXqToqAdTEZHK8GAf89CBhc0U_ylE-GII/s320/pekinesss.png`;
        document.getElementById('title').value =  `PEKINÉS`;
        document.getElementById('description').value = `Perro`;
        cotizar2();
        
          }   

            
      function pomerania() {
        document.getElementById('imgc').value =  `https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjZOSZ_XAe3ZydbC7PvEw4TVAz1CtBRtB488A-Bj3XfE9AVoxLT1HEn4zLErWujfPdCVOH2pWKLPCT0Yx6KqeaHRZ1UMZAcRpV6lr1i5g0lV5X9IEKRvyAK36_binDngiAhNg3-ncejzSAGAnBVa1VQrvBTyBUTSS34-voJXvWn3024j3CvTShB2w5V/w400-h400/POMERANIA.png`;
        document.getElementById('title').value =  `POMERANIA`;
        document.getElementById('description').value = `Perro`;
        cotizar2();
        
          }

            
      function bichonmaltes() {
        document.getElementById('imgc').value =  `https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiikuyArq7s9dZ4HEx4Ew8AXP_sIu92rvBXmJLDygvEV5Oy4rtMUcmE0XJUBwkmufVVeJZVXfZM3a87Cna7qWQjoPQTv5M7aefLnPd9y4rUslyjTvssX40piEJuS0V3OXu8MIbKR6JGesGf5Ee72DpKJVL_ti6kdkVZ7q7FevWPmvJ5z1TjMolG5za3/w400-h400/BICH%C3%93N%20MALTES.png`;
        document.getElementById('title').value =  `BICHÓN MALTES`;
        document.getElementById('description').value = `Perro`;
        cotizar2();
        
          }

          function cocker() {
            document.getElementById('imgc').value =  `https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhDwt84N6hyBorBc2kEkt0V1AMJU2CsHLJYFxoilDhpS9Ten7uLtF4FOsAO4KNlRp8uOERi2zfsx8tfIjeIfF1i4GB-UiRMUORuitraqq3myTIZnH4612-qyiQDj9aUEL3zCgYTBIJ6QvwxP1imppxwx1tNj3O8xDG65dkpWUGWawXWIBUBfyaT3lzYuZw/w320-h320/cocker.png`;
            document.getElementById('title').value =  `American Cocker Spaniel`;
            document.getElementById('description').value = `Perro`;
            cotizar2();
            
              }

              function Sheltie() {
                document.getElementById('imgc').value =  `https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjrKAl1gYJmvQLsa1oGHCFkGd7VRoY-fq9zEtx6YAUzsF1YtphRujx3CK2axMn84XFPish3pZtloWbsAo2YqxD10CNmHJWKaeIvoKx_qewS4sHyWeqgEja_I2aPqzPd1imphV9Q0Xllp_D2lF_Oaw5bzaSCVpfqoolSQdig8zE-fcqqOWpceyNL3nw6EV4/s320/Sheltie.png`;
                document.getElementById('title').value =  `Sheltie`;
                document.getElementById('description').value = `Perro`;
                cotizar2();
                
                  }  
                  
                  
        function BulldogFrancés() {
                    document.getElementById('imgc').value =  `https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjCvhwQgzWYZEz-pR1xCXOReu-YRvvDeumCOl_4F0G9ZbpchAa3rifz7XIlvJSvAIFr_y_nCpwuFCfnLaq642PCv5_wvFKeBnkiXlgP_E01HUnsnwCc6I0m0mwsHfxF6zBBYKs_ifrXju8rO7c5uUQDFlyBZDLmpFx8sCYDuqckHNCz9AaeqYKISUj-Vmo/s320/Bulldog%20Franc%C3%A9s.png`;
                    document.getElementById('title').value =  `Bulldog Francés`;
                    document.getElementById('description').value = `Perro`;
                    cotizar2();
                    
                      } 
                      
        function Chihuahua() {
                        document.getElementById('imgc').value =  `https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjVoxj07PBaJ-07mT1p-FyPabuamuSBYifWBxJh8xFEg0sFBsA_zX7VPmyoFLS3IgkepFb01ua4S1_TASbNyIuxdNKH4WhxYM3hMz94hFPd3h8jJF6jL3pewNoZb12uKAwMh_6Y4ztwhWuTnqesZ9b7ZEQdbStf2P9vgSTKMzmTGZO7Enpflf8jhJXEHc4/s320/Chihuahua.png`;
                        document.getElementById('title').value =  `Chihuahua`;
                        document.getElementById('description').value = `Perro`;
                        cotizar2();
                        
                          }


        function ScottishTerrier() {
                            document.getElementById('imgc').value =  `https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgyOUFDr89VXO3euMOn9g-J12oCEVdMUVHoOHxeHn63Kt0Ob5lcY18qPCAHAgBdQxmrKKFgnbJc6a0KUJO_5K0fR4Hex0q7qNBTwWHdFZhr1ps2Sg8-bsask-9jGfGuHrEanOEXOyJaV__dISdoL-eseS400EnTer9hL60484MEaP1tH6PgpogdsMoS1w8/s320/Scottish%20Terrier.png`;
                            document.getElementById('title').value =  `Scottish Terrier`;
                            document.getElementById('description').value = `Perro`;
                            cotizar2();
                            
                              }

        function ShihTzu() {
                                document.getElementById('imgc').value =  `https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg8oL0aWcVwWWTxcHcF4TODrbb4FxGxug96E6nwok1WDp3XdG8FzrD9vP-Y3kmllKCjVy-P8zmY5RrqU04qO5oPFG8KEYpjm5ayDTu44_shoXbm1IaNdvD3lSiUS2i6jzwQVo8izOEgbRg22wEwhSOkqQ6ZPJuX9F7nUf5PlxUEJeoWsq441Da0qAy91OY/s320/Shih%20Tzu.png`;
                                document.getElementById('title').value =  `Shih Tzu`;
                                document.getElementById('description').value = `Perro`;
                                cotizar2();
                                
                                  }

        
          function Jack() {
                                    document.getElementById('imgc').value =  `https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhudWe80IvbtUrha4h3sIVQMjXM98vyFUcTK-DWnxN_MAVuktuqU3MXSVr5GLOPqqN4hoSiqe7opnDWqiFKr18_Q-HKO5hFVmG7tOZTy0mS8tRONKeSoF-aeBMacZKDYmwh8Cmf-d2ILtfJQDMQ3iOVjz0avQ5N3NWRzExq2FDRzJBWm0GN7lc7qU2UB7w/s320/Jack%20Russell%20Terrier.png`;
                                    document.getElementById('title').value =  `Jack Russell Terrier`;
                                    document.getElementById('description').value = `Perro`;
                                    cotizar2();
                                    
                                      }

   function TerrierIng() {
    document.getElementById('imgc').value =  `https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEizJgeI9eKLIgxuS235TaM6bGAJRn0nli7-t1NFvEokBCgLWU25SeSsiHMa5EW9aUy5iS-M8mgVJ05oxXytup4E7dMvPYLOSkz8zoxVYjf1I11cxtmMIOLO0scDSK7Wlcrv5kyXi-h2JDZyq1KuyuOqiDiKsyBbxbF9J5m1PV3m2vxdEAyEP-H0VO1xpQ0/s320/Terrier%20de%20Norfolk.png`;
    document.getElementById('title').value =  `Terrier Norfolk`;
    document.getElementById('description').value = `Perro`;
    cotizar2();
                                        
      }

 function Beagle() {
   document.getElementById('imgc').value =  `https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjpxD7X9GYEQQcIDFGLxm64XIfLuV19cKVU8zeptc2De3zT1Z6pva0klTkK9DDT5-kV-XYY0xLUFSx5slbSg4chxhYolGOdNVW_ThQO8Z63J31azPIyVI8TGbRHJ6jfNWFRFcNL3Jq0rSYvSLzQdUO-WC73HR05CTq9uVWa3GqysH6dakhy0OaqTRos510/s320/Beagle.png`;
   document.getElementById('title').value =  `Beagle`;
   document.getElementById('description').value = `Perro`;
   cotizar2();
                                            
     }

function BostonTerrier() {
 document.getElementById('imgc').value =  `https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEik73Nys8FQfHy8kyBlaBl2mj-q4nwNbnrH6oTr7-_9Cz2fntnAmfW1AFNgXxsfYDskO1OiKWGCXET_KRrDIMn0TuzJ7dNROGT3rBXzEdLGO-SzEG1D6rvn095bogezmUUBKleSPWYzNljeiNO01Jn_Rq4mvoVpwLcAvSdEyqQEKlM1PB0aAE1jAKG_1l8/s320/Boston%20Terrier.png`;
document.getElementById('title').value =  `Boston Terrier`;
document.getElementById('description').value = `Perro`;
cotizar2();
                                                
   }

   function Pug() {
    document.getElementById('imgc').value =  `https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiySnpBBoj8PxCct3ckV9yeCisQpnUNpP2lEcW47-Rha6dsStqyWnhZ4wHbz6HQlaZQld93j1ivYQ_uIIpn7d8AnZFAPJeI7QW96-4Nas1STqlRQ3w5X-8LQpK2NMOf5ddLZg6_x2EOSekLkQHndor6_3tQjUpxKt04CFTZgL4am96b7ZoSlUsAzkOXTdE/s320/PUG.png`;
   document.getElementById('title').value =  `Pug`;
   document.getElementById('description').value = `Perro`;
   cotizar2();
                                                   
      }


        

          function msjcarrito() {
            Swal.fire({
                icon: 'success',
                showConfirmButton: false,
                text: 'Agregado al Carrito',
                timer: 500
              });
          
           
          }
        
        
          function cotizar2() {
            Swal.fire({
                title: 'Mascota',
                showCloseButton: true,
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                confirmButtonText: 'Añadir al Carrito',
              })
              .then((result) => {
                if (result.isConfirmed) {
                  saveTask();
                  msjcarrito();
                }else if (result.dismiss) {
                    document.getElementById('formTask').reset();
                  }
              })
          
            
          };
          
        
          function saveTask(e) {
            let imgc = document.getElementById('imgc').value;
            let title = document.getElementById('title').value;
            let description = document.getElementById('description').value;
          
          
            let task = {
              imgc,
              title,
              description
            };
          
            if(localStorage.getItem('tasks') === null) {
              let tasks = [];
              tasks.push(task);
              localStorage.setItem('tasks', JSON.stringify(tasks));
            } else {
              let tasks = JSON.parse(localStorage.getItem('tasks'));
              tasks.push(task);
              localStorage.setItem('tasks', JSON.stringify(tasks));
            }
          
            getTasks();
            document.getElementById('formTask').reset();
          
          }
          
          var index = 0; 
          
          function deleteTask(title) {
            let tasks = JSON.parse(localStorage.getItem('tasks'));
            for(let i = 0; i < tasks.length; i++) {
              if(tasks[i].title == title) {
                tasks.splice(i, 1);
                document.getElementById("numer").textContent = i ;
                document.getElementById("numer2").textContent = i ;
           
              }
            }
            
            localStorage.setItem('tasks', JSON.stringify(tasks));
            getTasks();
          }
          
          
          var index2 = '';
          
          function getTasks() {
            if(localStorage.getItem('tasks') === null) {
              console.log('sinproductos')
            } else {
              let tasks = JSON.parse(localStorage.getItem('tasks'));
              let tasksView = document.getElementById('tasks');
              tasksView.innerHTML = '';
              for(let i = 0; i < tasks.length; i++) {
                let imgc = tasks[i].imgc;
                let title = tasks[i].title;
                let description = tasks[i].description;
                index2 = i + 1;
                document.getElementById("numer").textContent = index2  ;
                document.getElementById("numer2").textContent = index2 ;
                tasksView.innerHTML += `<div class="cardp">
                    <div class="card-body">
                     <img src="${imgc}" alt="">
                      <p class="items">${description} - ${title}
                      <a href="javascript:deleteTask('${title}')"><span class="fa fa-trash"></span ></a>
                      </p>
                   
                    </div>
                  </div>`;
               
              }
            }
            
          };
        
          
        function whatsapp() {
          
            let allTasks = "";
        let tasks = JSON.parse(localStorage.getItem('tasks'));
        
        for (let i = 0; i < tasks.length; i++) {
          allTasks +=  "Raza:" + tasks[i].title + " Descripción " + tasks[i].description + " / " + "\n";
        }
        
               clearLocalStorage();
               clearTasks();
        };
        
          
          
          
          
           
          function clearLocalStorage() {
            localStorage.clear()
            ;
          
          }
          
          function clearTasks() {
            localStorage.removeItem('tasks');
            location.reload();
            getTasks();
          
          }
          
        
          getTasks();
          
        