document.addEventListener("DOMContentLoaded", function () {
    // Get all elements with class "Cloud"
    var cloudElements = document.querySelectorAll(".cloud");
    
  
    // Loop through each "Cloud" element
    cloudElements.forEach(function (cloudElement) {
        cloudElement.classList.remove("cloud");
        cloudElement.classList.add("z-10");
        var newChild = cloudElement.cloneNode(true);
        newChild.classList.add("-z-10");

        var parentElement = cloudElement.parentElement;

        cloudElement.classList.add("absolute");
        cloudElement.classList.add("blur");

        parentElement.appendChild(newChild);
        console.log(parentElement);
    });
  });
  