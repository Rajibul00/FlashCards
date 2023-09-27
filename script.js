let flashcards = document.querySelector('.flashcards');
let container = document.querySelector('.container');
let inputBox = document.querySelectorAll('input');
let flag = 0;
let flag1 = 0

function save(){
    if(inputBox[0].value=='' || inputBox[1].value==''){
        if(inputBox[0].value=='' ){
        inputBox[0].placeholder = 'Please fill this with a question';
        }else{
        inputBox[1].placeholder = 'Please fill this with a answer';
        }
    }
else{
    { 
   
        let div = document.createElement('div');
        div.setAttribute('class','flashcardsBox');
        //Warning
    
        //result
       let h3 =  document.createElement('h3');
       h3.innerText = inputBox[0].value;
       div.appendChild(h3);
    inputBox[0].value = '';
    let p = document.createElement('p');
    p.innerText  =  inputBox[1].value
    div.appendChild(p);
    inputBox[1].value = '';
    inputBox[0].placeholder = '';
    inputBox[1].placeholder = '';
    div.addEventListener('click',function(){
    if(flag == 0){
        p.style.display ='block';
        flag++
    }else{
        p.style.display ='none';
        flag--
    }
  
       
    })
     flashcards.appendChild(div);
 

    
    
       }
    
}
}







function hidecontainer(){
container.style.display ='none'
}
let newCard =()=>{
    container.style.display ='block';

      

}

let delCard=()=>{

   flashcards.style.display = 'none';
   window.location.reload()
      
    
}