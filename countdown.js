let a = 0;
let b = 0;
let c = 0;
let d = 0;
function start() {
  d++;
  myintern = setInterval(watch, 1000);
}
function starter() {
  if (d == 0) {
    start();
  }
}

function watch() {
  let min = document.getElementById("m").value;
  let hrs = document.getElementById("h").value;
  let sec = document.getElementById("s").value;
  a++;
  document.getElementById("s").value = a;

  if (a == 60) {
    a = 0;
    document.getElementById("s").value = a;
    b++;
    document.getElementById("m").value = b;
    if (b == 60) {
      b = 0;
      document.getElementById("m").value = b;
      c++;
      document.getElementById("h").value = c;
    }
  }
}

function stop() {
  clearInterval(myintern);
  d = 0;
}
function reset() {
  a = 0;
  b = 0;
  c = 0;
  d = 0;
  document.getElementById("h").value = a + "0";
  document.getElementById("s").value = b + "0";
  document.getElementById("m").value = c + "0";
  clearInterval(myintern);
}
