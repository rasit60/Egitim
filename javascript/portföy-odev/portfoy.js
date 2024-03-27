function changeTitle() {
    const inputBtnEl = document.getElementById('inputButton')
    const inputDivEl = document.getElementById('inputDiv')
    const titleDivEl = document.getElementById('titleDiv')
    const inputEl = document.getElementById('input')
    const cardTitleEl = document.getElementById('cardTitle')
    let value = ' ';
    if (inputDivEl.value !== '') {
        Swal.fire({
            title: "Eminmisin ??",
            text: `${inputEl.value} --- İsimli Kaydı değiştirmek  istediğine eminmisin`,
            icon: "question",
            confirmButtonText: "Değiştir",
            cancelButtontext: "Vazgeç",
            showCancelButton: true
        }).then((val) => {
            if (val.isConfirmed == true) {
                value += ` <h2> Mr. ${inputEl.value}</h2>`
                cardTitleEl.innerHTML = value

                inputDivEl.style.display = 'none'
                titleDivEl.style.display = "block";
            }
        })

    } else {
        value += ` <h5>${inputEl.value}</h5>`

        cardTitleEl.innerHTML = value

        inputEl.style.display = 'flex'

    }



}

function edit(){
    const inputDivEl = document.getElementById('inputDiv')
    const titleDivEl = document.getElementById('titleDiv')

    inputDivEl.style.display = "block"
    titleDivEl.style.display = "none"
}

function addProperty() {
  
    const inputgroupFormEl = document.getElementById('inputgroupForm')
    const propertyButtonEl = document.getElementById('propertyButton')
    inputgroupFormEl.style.display='flex'
    
    setTimeout(() => {
        if ( propertyButtonEl!==null) {
            propertyButtonEl.style.display="none"
         }
        
    }, 500);
 
   


}
function hideformProperty() {
    const inputgroupFormEl = document.getElementById('inputgroupForm')
    const propertyButtonEl = document.getElementById('propertyButton')
    inputgroupFormEl.style.display='none'
    if ( propertyButtonEl!==null) {
        propertyButtonEl.style.display='flex'
    }
   
}




// Title elementinin yanına edit butonu koyun
// Edit butonuna bastığımızda title elementi kaybolup input elementi gelsin ve içine mevcut yazdığımız title görünsün
// Değişiklik bitince inputun yanındaki kaydet butona basalım ve sweeralert ile bir soru ekrana gelsin
// Onaylarsak title elementi yeni verdiğimiz değer ile görünsün ve input kaybolsun