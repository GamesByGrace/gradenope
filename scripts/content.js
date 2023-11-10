const c = document.getElementsByClassName("submissionStatus--score");

for (let i = 0; i < c.length; i++) {
    var score = c[i].innerHTML;
    var htmlElem = "<details><summary class='submissionStatus--text'>Graded</summary><p>" + score + "</p></details>";

    c[i].innerHTML = htmlElem;
}