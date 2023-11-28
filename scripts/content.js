const c = document.getElementsByClassName("submissionStatus--score");

for (let i = 0; i < c.length; i++) {
    var score = c[i].innerHTML;
    
    var scoreArr = score.split(" ");
    var percentScore = (parseFloat(scoreArr[0]) / parseFloat(scoreArr[2])) * 100;

    var htmlElem = "<details><summary class='submissionStatus--text'>Graded</summary><p>" + score + "&nbsp;&nbsp;(" + percentScore.toFixed(2) + "%)" + "</p></details>";

    c[i].innerHTML = htmlElem;
}