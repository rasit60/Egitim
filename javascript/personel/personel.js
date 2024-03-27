let personels = [];

function save(event) {

    event.preventDefault();

    const firstNameInputElement = document.getElementById('firstName')
    const lastNameInputElement = document.getElementById('lastName')
    const professionInputElement = document.getElementById('profession')
    const startDateInputElement = document.getElementById('startDate')
    const salaryInputElement = document.getElementById('salary')


    const data = {
        firstName: firstNameInputElement.value,
        lastName: lastNameInputElement.value,
        profession: professionInputElement.value,
        startDate: startDateInputElement.value,
        salary: salaryInputElement.value
    }

    personels.push(data);


    setPersonelstoTable();

    firstNameInputElement.value = "";
    lastNameInputElement.value = "";
    professionInputElement.value = "";
    startDateInputElement.value = "2024-03-18"
    salaryInputElement.value = "60000";

    firstNameInputElement.focus();

    showToast(`${data.firstName} --- İsimli Kayıt başarılı şekilde Eklendi`)


}

function setPersonelstoTable() {

    const tbodyElement = document.querySelector('tbody')
    personels = personels.sort((a, b) => a.firstName.localeCompare(b.firstName));

    let value = "";
    for (const index in personels) {

        const date = new Date(personels[index].startDate)
        const newDate = ` ${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()} `;


        const salary =
            formatSalary(personels[index].salary.replace(",", "."));

        value += `
                <tr>
                    <td>${+index + 1}</td>
                    <td>${personels[index].firstName}</td>
                    <td>${personels[index].lastName}</td>
                    <td>${personels[index].profession}</td>
                    <td>${newDate}</td>
                    <td>${salary}</td>
                    <td>
                        <button class="btn btn-sm btn-outline-primary">Update</button>
                        <button onclick="deleteByIndex(${index})" class="btn btn-sm btn-outline-danger">Delete</button>
                    </td>
                </tr>
        `

    }
    tbodyElement.innerHTML = value;

}

function deleteByIndex(index) {
    const personel = personels[index]; // burda tex te seçtiğimiz kaydı eklemek için bu değişkeni atadık..
    Swal.fire({
        title: "delete?",
        text: `${personel.firstName} --- İsimli Kaydı silmek istediğine eminmisin`,
        icon: "question",
        confirmButtonText: "delete",
        cancelButtontext: "cancel",
        showCancelButton: true
    }).then((val) => {
        if (val.isConfirmed === true) {
            personels.splice(index, 1)
            setPersonelstoTable()
          
            showToast(`${personel.firstName} --- İsimli Kayıt silindi`)


        }
    })

}

function formatSalary(salaryString) {
    const salaryNumber = +salaryString;

    const formatter = new Intl.NumberFormat('tr-TR', {
        style: "currency",
        currency: "TRY",
        minimumFractionDigits: 2
    });

    return formatter.format(salaryNumber);
}

function showToast(message,icon='success') {
    Swal.fire({
        toast: true,
        position: "bottom-end",
        icon: icon,
        title: message,
        showConfirmButton: false,
        timer: 1500
    })

}
function showAddPersonelForm(){
    const el = document.getElementById('addPersonForm')
    if(el !== null){
        el.style.display="flex"
        const btnEl= document.getElementById('addPersonelBtnDiv')
        if (btnEl !== null) {
          btnEl.style.display="none"
        }  
    }

}

function hidePersonelForm() {
    const el = document.getElementById('addPersonForm')
    if(el !== null){
        el.style.display="none "
        const btnEl= document.getElementById('addPersonelBtnDiv')
        if (btnEl !== null) {
          btnEl.style.display="flex"
        }  



    }
}