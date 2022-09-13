window.onload = function(){
    declareEvents()
}

function declareEvents(){
let more_Information = document.querySelector("#id_details_show");
more_Information.innerHTML = "...see more";
if (more_Information != null) {
    more_Information.addEventListener("click", () => {
      let details = document.querySelector("#id_more");
      if(details.classList.contains("d-none")){
        details.classList.remove("d-none");
        more_Information.innerHTML = "show less"
        more_Information.style.color = "red"
      }
      else{
        details.classList.add("d-none");
        more_Information.innerHTML = "...see more"
        more_Information.style.color = "white"
      }
    })
  }
}