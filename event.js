let akapit = document.createElement("p");
akapit.textContent = "Lubie placki";

akapit.addEventListener("click", function() {
    akapit.style.color = "red";
}
);  
 document.body.appendChild(akapit);

 //Data 
  let time = document.getElementById("timeprzycisk");
  let timecontainer = document.getElementById("timecontainer");

  function pokazDate() {
    let aktualnaData = new Date();
    timecontainer.textContent = aktualnaData.toString();
  }
    time.addEventListener("click", pokazDate);
