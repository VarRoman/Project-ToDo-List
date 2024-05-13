$( "#create-button" ).click(function() {
  const name = document.getElementById("name1").value;
if (name && name.length >= 3){
  $( "#create-button" ).addClass( "onclic", 50, validate);
}
});

function validate() {
  setTimeout(function() {
    $( "#create-button" ).removeClass( "onclic" );
    $( "#create-button" ).addClass( "validate", 450, callback );
  }, 700 );
}
  function callback() {
    setTimeout(function() {
      $( "#create-button" ).removeClass( "validate" );
    }, 1000 );
  }
////////////////////////////////////////////////////////////////////////////////addlist
function addlist() {
  const name = document.getElementById("name1").value;

  if (name && name.length >= 3) {
    const blockContainer = document.getElementById("table-stats");
    const block = document.createElement("tr");
    const datas = document.querySelector(".data").value;
    block.className = "block";
    // start()
    if(datas){
      block.innerHTML = `
      <th>  <input type="checkbox" name="checkbox-${name}" class="checkbox-list"></th>
      <th><span class="name">${name}</span></th>
      <th><span class="Progress">W trakcie</span></th>
      <th><span class="data"> ${datas}</span></th>
      <th><button class="delete-button"><span><img src="image/trash-xmark-svgrepo-com (1).svg" alt=""></span></button></th> `;
  blockContainer.appendChild(block);
    } else{
      block.innerHTML = `
      <th>  <input type="checkbox" name="checkbox-${name}" class="checkbox-list"></th>
      <th><span class="name">${name}</span></th>
      <th><span class="Progress">W trakcie</span></th>
      <th><span class="data"> Nie</span></th>
      <th><button class="delete-button"><span><img src="image/trash-xmark-svgrepo-com (1).svg" alt=""></span></button></th> `;
  blockContainer.appendChild(block);
    }

    // <th><span class="time" id="timer"> </span></th>
    document.getElementById("name1").value = "";
    document.querySelector(".data").value = "";
  } else {
    alert("Wprowadź tekst składający się z co najmniej 3 znaków");
  }

  const deleteButtons = document.querySelectorAll(".delete-button");

  deleteButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const buttonParent = button.parentElement;
      const buttonParent1 = buttonParent.parentElement;

      buttonParent1.remove();
    });
  });
  const items = document.querySelectorAll(".block");
  setTimeout(() => {
  items.forEach((item) => {
    item.classList.add("table-item")
  })}, "10");

}
function checkboxs() {
  const checkboxs = document.querySelectorAll(".checkbox-list")
  checkboxs.forEach((checkbox) => {
    checkbox.addEventListener("input", () => {
      const checkboxparent = checkbox.parentElement;
      const checkboxparent2 = checkboxparent.parentElement;

      if(checkbox.checked == true){

        checkboxparent2.querySelector(".Progress").style.color = "green";
        checkboxparent2.querySelector(".Progress").innerHTML = "Zakończony"
        checkboxparent2.querySelector(".name").style.textDecoration = "line-through";
        checkboxparent2.querySelector(".name").style.opacity = "0.5";
        checkboxparent2.querySelector(".Progress").style.textDecoration = "line-through";



      }
      if(checkbox.checked !== true){
        checkboxparent2.querySelector(".name").style.opacity = "1";
        checkboxparent2.querySelector(".Progress").style.color = "white";
        checkboxparent2.querySelector(".Progress").innerHTML = "W trakcie"
        checkboxparent2.querySelector(".name").style.textDecoration = "none";
        checkboxparent2.querySelector(".Progress").style.textDecoration = "none";
        checkboxparent2.querySelector(".name").style.color = "white";
      }
    });
})
}

if (document.querySelector("#create-button") !== null) {

  const createButton = document.getElementById("create-button");
  createButton.addEventListener("click", () => {
    addlist()
    checkboxs()
  });
}