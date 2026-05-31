const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
]

//elementlere eris
const addBox = document.querySelector(".add-box")
const popupBox = document.querySelector(".popup-box");
const popup = document.querySelector(".popup");
const closeBtn = document.querySelector("header i");
const form = document.querySelector("form");
const wrapper = document.querySelector(".wrapper");
const popupTitle = document.querySelector("#popup-title");
const popupButton = document.querySelector("#form-btn");

//veri alani
const NOTES = "notes1"

let notes = JSON.parse(localStorage.getItem(NOTES)) || []


let isUpdate = false
let updateId = null

document.addEventListener("DOMContentLoaded", renderNotes(notes))

//notlari ekrana bas

function renderNotes(notes) {
    
    document.querySelectorAll(".note").forEach((noteItem)=>noteItem.remove())

    notes.forEach((note)=>{
        let noteHTML = `<div class="note" data-id=${note.id} >
        <div class="details">
          <h2>${note.title}</h2>
          <p>${note.description}</p>
        </div>


        <div class="bottom">
          
          <p>${note.date}</p>

         
          <div class="settings">
         
            <i class="bx bx-dots-horizontal-rounded"></i>

        
            <ul class="menu">
              <li class="edit-icon"><i class="bx bx-edit"></i> Edit</li>
              <li class="delete-icon">
                <i class="bx bx-trash"></i>
                Delete
              </li>
            </ul>
          </div>
        </div>
      </div>`;

      addBox.insertAdjacentHTML("afterend",noteHTML)

    })

}

//ekranda tiklanma olursa
wrapper.addEventListener("click",(e)=>{
    if (e.target.classList.contains("bx-dots-horizontal-rounded")) {
        console.log(e.target)
        showMenu(e.target)
    } else if (e.target.classList.contains("delete-icon")) {
        deleteNot(e.target)
    } else if(e.target.classList.contains("edit-icon")){
        editNot(e.target)
    }
})

//notu guncelle
function editNot(item) {
    const note = item.closest(".note")
    const noteId = parseInt(note.dataset.id)

    const foundNote = notes.find((note)=>note.id==noteId)

    showFormAndSetup()

    form[0].value = foundNote.title
    form[1].value = foundNote.description

    isUpdate = true
    updateId = noteId

    popupTitle.textContent = "Notu Guncelle"
    popupButton.textContent = "Guncelle"
}

//delete not
function deleteNot(item) {
    const response = confirm("silmek istedigine emin misin?")

    if (response) {
        const noteItem = item.closest(".note")
        const noteId = Number(noteItem.dataset.id)
        
        notes = notes.filter((note)=>note.id != noteId)
        localStorage.setItem(NOTES,JSON.stringify(notes))

        renderNotes(notes)
    }
}

//menuyu goster
function showMenu(item) {
    const parentElement = item.parentElement
    parentElement.classList.add("show")

    document.addEventListener("click",(e)=>{
        if (e.target.tagName != "I"  || e.target != item    )  {
            parentElement.classList.remove("show")
        }
    })
}

//ekleye tiklanilirsa
addBox.addEventListener("click",showFormAndSetup)

//formu goster duzenle
function showFormAndSetup() {
    popupBox.classList.add("show")
    popup.classList.add("show")
}

//kapata tiklanilirsa
closeBtn.addEventListener("click",clearFormAndRemove)

//formu kaldir
function clearFormAndRemove() {
    popupBox.classList.remove("show")
    popup.classList.remove("show")

    form.reset()

    //formu vasatilana cevir 
    makePopupDefault()
}

//form submit edilirsa
form.addEventListener("submit",(e)=>{
    e.preventDefault()

    const titleInput = e.target[0]
    const descriptionInput = e.target[1]

    const title = titleInput.value
    const description = descriptionInput.value

    if (!title || !description) {
        alert("alanlar bos olamaz")
        return
    }

    const date = new Date()

    const day = date.getDate()
    const month = date.getMonth()
    const updateMonth = months[month]
    const year = date.getFullYear()
    const id = date.getTime()

    if (isUpdate) {
        //dolduracagiz

        const updateIndex = notes.findIndex((note)=>note.id == updateId)

        notes[updateIndex]={
           title,
            description,
            date: `${updateMonth} ${day},${year}`,
            id
        }

        makePopupDefault()

    } else {
        let noteItem = {
            title,
            description,
            date: `${updateMonth} ${day},${year}`,
            id
        }
        notes.push(noteItem)
    }

    localStorage.setItem(NOTES,JSON.stringify(notes))
    clearFormAndRemove()
    renderNotes(notes)
})

//form alanini varsayilan yap
function makePopupDefault() {
    popupTitle.textContent = "Yeni not"
    popupButton.textContent = "Ekle"
    isUpdate = false
    updateId = null
}