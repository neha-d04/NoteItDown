//console.log("This is app.js");
//If user adds a note add it to the local storage
showNotes();
let addBtn = document.getElementById("addbtn");
addBtn.addEventListener("click", function (e) {
  let addTxt = document.getElementById("addtxt");
  let notes = localStorage.getItem("notes");

  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }
  notesObj.push(addTxt.value);
  localStorage.setItem("notes", JSON.stringify(notesObj));
  addTxt.value = "";
  //console.log(notesObj);
  showNotes();
});
//Function to show elements from local storage
function showNotes() {
  let notes = localStorage.getItem("notes");

  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }
  let html = "";
  notesObj.forEach((element, index) => {
    html += `
     
       <div class="card my-2 mx-2 noteCard" style="width: 18rem;">
            
            <div class="card-body">
              <h5 class="card-title">Note ${index + 1}</h5>
              <p class="card-text">${element}</p>
              <button id =${index} onclick="deleteNote(this.id)" class="btn btn-primary">Delete Note</button>
            </div>
          </div>
       
       `;
  });

  let notesEle = document.getElementById("notes");
  if (notesObj.length != 0) {
    notesEle.innerHTML = html;
  } else {
    notesEle.innerHTML = `Nothing to show! Add new notes using "Add a Note" section.`;
  }
}

//function to delete a note
function deleteNote(index) {
  console.log("This is delete function", index);

  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }

  notesObj.splice(index, 1);
  localStorage.setItem("notes", JSON.stringify(notesObj));
  showNotes();
}

//Search functionality
let searchTxt = document.getElementById('searchtxt');
searchTxt.addEventListener('input',function() {
    console.log("Input evenet fired!");
    let inputVal = searchTxt.value.toLowerCase();
    //console.log(inputVal);

    let noteCards = document.getElementsByClassName('noteCard')
    Array.from(noteCards).forEach(function (element) {
        let crdTxt = element.getElementsByTagName('p')[0].innerText;
        console.log(crdTxt);
        if(crdTxt.includes(inputVal)){
            element.style.display ="block";
        }
        else{
            element.style.display ="none";
        }
    })
})
/*Fethur features 
1. Add Title
2.Mark a note as important
3.Seperate notes by user
4.sync and host to a web server
*/
