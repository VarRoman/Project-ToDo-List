
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
    block.className = "block";
    // start()
    block.innerHTML = `
        <th>  <input type="checkbox" name="checkbox-${name}" class="checkbox-list"></th>
        <th><span class="name">${name}</span></th>
        <th><span class="Progress">W trakcie</span></th>
        <th><button class="delete-button"><span><img src="image/trash-xmark-svgrepo-com (1).svg" alt=""></span></button></th> `;
    blockContainer.appendChild(block);
    // <th><span class="time" id="timer"> </span></th>
    document.getElementById("name1").value = "";
   
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

// var count =1;
// // запущен таймер или нет
// started = false;

// // запуск таймера по кнопке
// function start() {

//   // если таймер уже запущен — выходим из функции
//   if (started) {return};
//   // запоминаем время нажатия
//   var start_time = new Date(); 
//   // получаем время окончания таймера
//   var stop_time = start_time.setMinutes(start_time.getMinutes() + count); 

//   // запускаем ежесекундный отсчёт
//   var countdown = setInterval(function() {
//     // текущее время
//     var now = new Date().getTime();
//     // сколько времени осталось до конца таймера
//     var remain = stop_time - now; 
//     // переводим миллисекунды в минуты и секунды
//     var min = Math.floor( (remain % (1000 * 60 * 60)) / (1000 * 60) );
//     var sec = Math.floor( (remain % (1000 * 60)) / 1000 );
//     // если значение текущей секунды меньше 10, добавляем вначале ведущий ноль
//     sec = sec < 10 ? "0" + sec : sec;
//     // отправляем значение таймера на страницу в нужный раздел
//     document.getElementById("timer").innerHTML = min + ":" + sec;
//     // если время вышло
//     if (remain < 0) {
//       // останавливаем отсчёт 
//       clearInterval(countdown);
//       // пишем текст вместо цифр
//       document.getElementById("timer").style.color = "red"
//       document.getElementById("timer").innerHTML = "Koniec";
//      }
//   }, 1000);
//   // помечаем, что таймер уже запущен
//   started = true;
// }