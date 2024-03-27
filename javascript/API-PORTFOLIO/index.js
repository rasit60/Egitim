// let data = {};

// function apiRequest(){
//     fetch("./db.json").then(res=>res.json()).then(val=>{val=data});  

// }
// // s-1 yukarda video da tek bir fonksiyon ile hepsini dataya çekiyoruz sonra başka fonksiyonlarda bunu data. diye kullanıyoruz. aşağıda ben hepsini ayrı bir fonksiyon içinde yapabilirmiyim yani her defasında fetch api kullanabilirmiyim ? kullanmaya çalıştım nerde yanlışlık var ?
// function changeSubsTitle(){
//     const subtitleEL= document.getElementById("subtitle")
//     let responseTitle = fetch("./db.json")
//     .then(res=>res.json())
//     .then(val=>{val.subtitle}) ??????
//     console.log(responseTitle);
//     subtitleEL.innerHTML=responseTitle
// }
// changeSubsTitle()
// apiRequest()

//s-2 : bazı yerlerde fonksiyon dışındaki data gibi objelere erişmek için this keywordünü kullanıyodum burda neden kullanmıyorum orda neden kullanıyorum..

let data = {};

apiRequest()
function apiRequest() {
    fetch("./db.json")
    .then(res => res.json())
    .then(response => { data = response 
        changeSubtitle()
        changeSkills()
        changeAboutme()
        changeSocialMedias()
    });
   
};

function changeSubtitle() {
    const subtitleEL = document.getElementById("subtitle")
    subtitleEL.innerHTML = data.subtitle
}

function changeSkills(){
    const skillsEl= document.querySelector(".skills");

    let text ="";
    for(let skill of data.skills){
       text +=`
       <img src="${skill}"
       width="150px">
       `
    }

    skillsEl.innerHTML=text
}
function changeAboutme(){
    const aboutmeEl=document.getElementById("aboutMe");
    aboutmeEl.innerHTML=data.aboutMe
}

function changeSocialMedias(){
 const socialMediasEl= document.getElementById("socialMedias")
 const text="";

 for( let socialMedia of data.socialMedias ){

    text +=`
    <p>${socialMedia.name}</p>
    <a href="${socialMedia.url}" target="_blank">
    <i class="${socialMedia.icon}"></i>
</a>
    `
 }

 socialMediasEl.innerHTML=text


}