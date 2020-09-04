document.querySelector(".fa-star").addEventListener("click", () => {
//  this.classList.toggle('fas');
//  this.classList.toggle('far');
  $(".fa-star").toggleClass('far');
  $(".fa-star").toggleClass('fas');
});

var answer = document.querySelector(".answers");

const answerOutput = (contents) => {
  let output = "";
  output += contents;
  console.log(output);
  answer.innerHTML = output;
}


var data = {
  checkbox: ['Option 1'],
  dropdown: [
    {
      id: 1,
      choice: 'Option 1'
    }
  ]
};
 console.log(data.dropdown[0].choice);

const refresh = () =>{
  var questionType = document.querySelector("#question-type").value;
  if(questionType === "Checkbox"){
    let options = '';
    data.checkbox.forEach(option => {
      (options += ` <div class="row">
                      <div class="col-md-1 col-3 pr-0 pt-2"><input type="checkbox" disabled></div>
                      <div class="col-md-6 col-7 pl-0"><input type="text" value="${option}" class="form-control px-0"></div>
                    </div>`);
    });
    if(data.checkbox[data.checkbox.length-1] !== "Other"){
      options += ` <div class="row">
                    <div class="col-md-1 col-3 pr-0 pt-2"><input type="checkbox" disabled></div>
                    <div class="col-6 text-left p-2 px-3"><a onClick="addCheckbox()" class="text-secondary">Add option</a> or <a onClick="addCheckboxOther()">add "Other"</a></div>
                  </div>`;
      }
      answerOutput(options);

  } else if(questionType === "Dropdown"){
    let options = '';
    data.dropdown.forEach(option => {
      (options += `  <div class="row">
                        <div class="col-md-1 col-3 pr-0 pt-2"><span>${option.id}.</span></div>
                        <div class="col-md-6 col-7 pl-0"><input type="text" value="${option.choice}" class="form-control px-0"></div>
                      </div>`);
    });
      options += ` <div class="row">
                      <div class="col-md-1 col-3 pr-0 pt-2"><span>${data.dropdown.length+1}.</span></div>
                      <div class="col-6 text-left p-2 px-3"><a onClick="addDropdown()" class="text-secondary">Add option</a></div>
                    </div>`;
       answerOutput(options);   
   
   
  } else if(questionType === "Paragraph"){
    answerOutput(`<div class="row justify-content-start">  
                    <div class="col-6 mb-4">
                      <input type="text" class="form-control text" placeholder="Short answer text" disabled>
                    </div>
                  </div>`);
  }
}


const addCheckbox = () => {
  let size = data.checkbox.length;
  data.checkbox.push('Option ' + (size+1));
  console.log(data.checkbox);
  refresh();
}

const addCheckboxOther = () => {
  data.checkbox.push('Other');
  refresh();
}

const addDropdown = () => {
  let size = data.dropdown.length;
  data.dropdown.push({
    id: (size+1),
    choice: "Option" + (size+1)
  });
  // console.log(data.checkbox);
  refresh();
}


document.getElementById("question-type").addEventListener("change", refresh);


const newCard = document.querySelector(".new");
let newCards = "";

const newCardFunc = () => {
  (newCards += `
      <div id="question" class="row justify-content-between my-3">
      <div class="card col-lg-7 col-md-9 col-11">
        <form action="">
          <div class="row">
            <div class="col-md-7 col-10 py-4 pl-2">
              <h3><input type="text" value="Untitled Question" class="form-control question form-control-lg"></h3>
            </div>
            <div class="col-md-1 col-1">
              <input type="file" class="custom-file-input">
            </div>
            <div class="col-md-4 col-10 pr-5 py-4 dropdown">
              <select class="custom-select my-1 mr-sm-2 choice" id="question-type">
                <option value="Paragraph">Paragraph</option>
                <option value="Multiple-Choice" selected>Multiple Choice</option></a>
                <option value="Checkbox">Checkbox</option>
                <option value="Dropdown">Dropdown</option>>
              </select>
            </div>
          </div>

          <div class="answers d-flex flex-column">
            <div class="row">
              <div class="col-md-1 col-3 pr-0 pt-2"><input type="checkbox" disabled></div>
              <div class="col-md-6 col-7 pl-0"><input type="text" value="Option 1" class="form-control px-0"></div>
            </div>
            <div class="row">
              <div class="col-md-1 col-3 pr-0 pt-2"><input type="checkbox" disabled></div>
              <div class="col-6 text-left p-2 px-3"><a onClick="addCheckbox()" class="text-secondary">Add option</a> or <a onClick="addCheckboxOther()">add "Other"</a></div>
            </div>
          </div>

          <hr class="mt-4 mx-3">
          <div class="row justify-content-end mt-4 mb-2">
            <div class="col-md-1 col-2 px-0">
              <i class="far fa-trash-alt"></i>
            </div>
            <div class="col-md-1 col-2 px-0">
              <a onclick="newCardFunc()" class="addnew"><i class="far fa-copy"></i></a>
            </div>
          </div>
        </form>    
      </div>
    </div>`);
    newCard.innerHTML = newCards;
}

// document.querySelectorAll(".addnew").addEventListener("click", newCardsFunc());
