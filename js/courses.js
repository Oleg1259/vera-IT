let pythonCours = document.querySelector("#python");
let webCours = document.querySelector("#web_programming");
let javaCours = document.querySelector("#java");
let unityCours = document.querySelector("#unity");

pythonCours.addEventListener("click", function() {
    window.location.href = './python_course.html';
});

webCours.addEventListener("click", function() {
    window.location.href = './web_programming.html';
});

javaCours.addEventListener("click", function() {
    window.location.href = './java_course.html';
});

unityCours.addEventListener("click", function() {
    window.location.href = './unity_cours.html';
});