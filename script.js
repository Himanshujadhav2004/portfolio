const text=document.querySelector(".sec-text");
const a=0;
const textload = () =>{

    setTimeout(() =>{


text.textContent="Developer";
    },0);

    setTimeout(() =>{


        text.textContent=" Trader";
            },4000);
            setTimeout(() =>{


                text.textContent="Youtuber";
                
                    },8000 );
                    setTimeout(() =>{


                        text.textContent="";
                        textload();
                            },12000 );
                  
}

textload();