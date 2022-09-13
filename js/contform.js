window.onload = () => {
  declareEvents();
}

const declareEvents = () => {
  let send_form = document.querySelector("#id_form");
  send_form.addEventListener("submit", function (e) {
      e.preventDefault();
      clearAlerts();
      let name_val = document.querySelector("#id_name").value;
      let email_val = document.querySelector("#id_email").value;
      let text_val = document.querySelector("#id_text").value;
      if (name_val.length < 2) {
          document.querySelector("#id_checkName").innerHTML = "You are required to have at least 2 letters"
          return;
      }
      else if (checkNumbers(name_val)) {
          document.querySelector("#id_checkName").innerHTML = "Name cannot contain numbers"
          return;
      }
      else if (email_val.indexOf("@") == -1 || email_val.indexOf(".") == -1 || email_val.length <= 7) {
          document.querySelector("#id_checkEmail").innerHTML = "Please insert valid Email";
          return;
      }
      else if (text_val.length < 2) {
          document.querySelector("#id_checkText").innerHTML = "You are required to have at least 2 letters";
          return;
      }
      formSubmit();
  })
}
/** clear input after confirm form */
function clearFormInput() {
  document.querySelector("#id_name").value = '';
  document.querySelector("#id_email").value = '';
  document.querySelector("#id_text").value = '';
}
/** send form after click send message */
function formSubmit() {
  let name = document.querySelector("#id_name").value;
  clearFormInput();
  alert(`Dear ${name}, thank you!`);
}
/** return true if have numbers in the string 
* false if not */
function checkNumbers(str) {
  return /\d/.test(str);
}
function checkString(number) {
  return /^[0-9]+$/.test(number);
}
function clearAlerts(){
  document.querySelector("#id_checkName").innerHTML = ''
  document.querySelector("#id_checkEmail").innerHTML = ''
  document.querySelector("#id_checkText").innerHTML = ''
}