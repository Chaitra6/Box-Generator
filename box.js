let button = document.getElementById("theBoxes");
button.addEventListener("click", myFunction);

var oldValue = 0;
var i = 1;

function myFunction() {
    let n = document.getElementById('number').value;
    n = parseInt(oldValue) + parseInt(n);
    for (i = 1; i <= n; i++) {
        // Creates box which of type div
        var box = document.createElement('div');

        //this box will have some properties that will be specified in class named - 'myDiv'
        box.classList.add('myDiv');
        document.getElementById('box').appendChild(box);
        box.innerHTML = i;

        oldValue = document.getElementById('box').lastElementChild.innerHTML;

    }
}