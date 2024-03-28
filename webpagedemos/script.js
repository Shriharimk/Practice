document.addEventListener("DOMContentLoaded", function () {
  const savedData = localStorage.getItem("userData");
  if (savedData) {
    displayData(JSON.parse(savedData));
  }
});

function saveData() {
  const formData = document.getElementById("form");
  const jsonobj = `{
    "name": "${formData.elements.name.value}",
    "email": "${formData.elements.email.value}",
    "desc": "${formData.elements.desc.value}"
  }`;
  localStorage.setItem("userData", jsonobj);
  displayData(JSON.parse(jsonobj));
}

function displayData(data) {
  const divelement = document.getElementById("displayData");
  divelement.innerHTML = `<strong>Name: </strong> ${data.name}<br><strong>Email: </strong> ${data.email}<br><strong>Description: </strong> ${data.desc}`;
  
  // Set the initial opacity to 0
  divelement.style.opacity = 0;
  
  // Use CSS transitions to fade in the element
  divelement.style.transition = "opacity 1s";
  
  // Use setTimeout to set the opacity to 1 after a slight delay
  setTimeout(() => {
    divelement.style.opacity = 1;
  }, 10);
}
function redirectToURL(url) {
  // Change the URL to the desired destination
  window.location.href = url; // Replace with the URL you want to redirect to
}






