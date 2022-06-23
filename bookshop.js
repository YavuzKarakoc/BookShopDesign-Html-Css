// const likedHeart = (e) =>{
//     let a = document.querySelector(".cardLikedMenu>div>div>.unliked")
//     console.log(a)
//     a.classList.toggle("liked")
// }



// const likedHeart = (e) =>{
//     let a = document.getElementsByClssName("cardLikedMenu")
//     console.log(a[0].children[1].children[0].children[0])
//     for (let i=0; i<a[0].children.length; i++){
//         a[0].children[i].children[0].children[0].addEventListener("click", function(){
//             a[0].children[i].children[0].children[0].classList.toggle("liked")
//         })
        

//     }

// }



// const likeButtons = document.querySelectorAll(".unliked")
// console.log(likeButtons)


// const switchClasses= (element, siniflar)=>{
//     siniflar.forEach(sinif => {
//         element.classList.toggle(sinif);
//     });
// }

// likeButtons.forEach(element =>{
//     element.addEventListener("click", (button) =>{
//         const siniflar= ["unliked","liked"];
//         switchClasses(element,siniflar)
//     })
// })

// emailText = {
//     emailAdres:""
// }

// const emailFunction = () =>{
//     emailText ={
//         ...emailText,
//         emailAdres : document.getElementById("emailText").value
//     }
//     console.log(document.getElementById("emailText").value)

// }


// const emailFunction = () =>{
//     let text = document.getElementById("emailText").value;
//     let pattern= /@/;
//     let result = text.match(pattern)[0];
//     console.log(document.getElementById("emailText").value)
//     console.log(result)

// }
let  myForm=document.getElementById("emailText")
function ValidateEmail(mail) {
  
 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(myForm.value)){
    return (true)
    
  }
  else {
      alert("Geçersiz bir email adresi girdiniz!")
    return (false)
  }  
}
