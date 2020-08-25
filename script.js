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



document.getElementById("question-type").addEventListener("change", () => {
  var questionType = document.querySelector("#question-type").value;
  if(questionType === "Multiple-Choice"){
    answerOutput(` <div class="row">
                    <div class="col-1 pr-0 pt-2"><input type="radio" disabled></div>
                    <div class="col-6 pl-0"><input type="text" value="Option 1" class="form-control px-0"></div>
                  </div>
                  <div class="row">
                    <div class="col-1 pr-0 pt-2"><input type="radio" disabled></div>
                    <div class="col-6 text-left p-2 px-3"><a href="" class="text-secondary">Add option</a> or <a href="">add "Other"</a></div>
                  </div>`);
  }
  else if(questionType === "Checkbox"){
    answerOutput(`<div class="row">
    <div class="col-1 pr-0 pt-2"><input type="checkbox" disabled></div>
    <div class="col-6 pl-0"><input type="text" value="Option 1" class="form-control px-0"></div>
  </div>
  <div class="row">
    <div class="col-1 pr-0 pt-2"><input type="checkbox" disabled></div>
    <div class="col-6 text-left p-2 px-3"><a href="" class="text-secondary">Add option</a> or <a href="">add "Other"</a></div>
  </div>`)

  } else if(questionType === "Dropdown"){
    answerOutput(` <div class="row">
                    <div class="col-1 pr-0 pt-2"><span>1.</span></div>
                    <div class="col-6 pl-0"><input type="text" value="Option 1" class="form-control px-0"></div>
                  </div>
                  <div class="row">
                    <div class="col-1 pr-0 pt-2"><span>2</span></div>
                    <div class="col-6 text-left p-2 px-3"><a href="" class="text-secondary">Add option</a></div>
                  </div>`);
  } else if(questionType === "Paragraph"){
    answerOutput(`<div class="row justify-content-start">  
                    <div class="col-6 mb-4">
                      <input type="text" class="form-control text" placeholder="Short answer text" disabled>
                    </div>
                  </div>`);
  }
});
console.log(document.querySelector("#question-type").value);
