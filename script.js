/*template_5u54itp*/
//service_08zooao
//Vf4u076Aejfoy8dnC
let isModalOpen=false;
let contrastToggle=false;
const scaleFactor=1/20
function moveBackground(event){
const shapes=document.querySelectorAll(".shape")
const x=event.clientX*scaleFactor
const y=event.clientY*scaleFactor

for(let i=0;i<shapes.length;++i){
    const isOdd=i%2!==0
    const boolInt=isOdd?-1:1
    shapes[i].style.transform=`translate(${x*boolInt}px,${y*boolInt}px)`
}
}
function toggleContrast(){
    contrastToggle=!contrastToggle
    if(contrastToggle){
        document.body.classList+=" dark-theme"
    }
else{
    document.body.classList.remove("dark-theme")
}
}
function contact(event){
    event.preventDefault();
    const loading=document.querySelector('.modal_overlay-loading')
    const success=document.querySelector('.modal_overlay-success')
    loading.classList+=" modal_overlay--visible"
    emailjs
    .sendForm(
        'service_8i6kyza',
        'template_4hcorss',
        event.target,
        'bfsw0vY6xhDp3RMiP'
    ).then(() => {
       
        loading.classList.remove("modal_overlay--visible")
        success.classList+=" modal_overlay--visible"
      
    }).catch(()=>{
        loading.classList.remove("modal_overlay--visible")
        alert(
            "the email service is temporarily unavailable"
        )
    })
    
    

}

function toggleModal(){
    
    if(isModalOpen){
        isModalOpen=false;
        return document.body.classList.remove("modal--open")
    }
    isModalOpen=true
      document.body.classList+=" modal--open"
}
