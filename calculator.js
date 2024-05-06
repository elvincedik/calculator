let screen = document.getElementById("screen");




for (let i = 3; i<= 19; i++) {
    document.getElementsByTagName("input")[i].addEventListener("click", function() {
        screen.value += document.getElementsByTagName("input")[i].value
    });
}

// code to porogram my = button
document.getElementsByTagName("input")[20].addEventListener("click", function() {
    screen.value = eval(screen.value);
});

// code to programme AC button
document.getElementsByTagName("input")[1].addEventListener("click", function() {
    screen.value = "";
});

// code to programme del button
document.getElementsByTagName("input")[2].addEventListener("click", function() {
   screen.value = screen.value.toString().slice(0, -1);
});
