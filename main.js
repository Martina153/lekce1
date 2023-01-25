// tady je místo pro náš program


/**
 * Sečte dvě čísla na vstupu a vrátí výsledek
 *
 * @param {int} a
 * @param {int} b
 */
function secti(a, b) {
  let c = a + b;
  return c;
}

function vysledok(){
  let vysledok = document.querySelector("#vysledek").innerHTML = secti(4, 3);

}

/**
 * Upozorní uživatele při spuštění.
 */
function replace(){
  let replace = 'Hi'
  return replace
}

function upozorni() {
  let ctverecek = document.querySelector(".ctverecek").innerHTML= replace();
  alert("Gratulace, právě jsi spustila tuto funkci!");
  console.log("Gratulace, právě jsi spustila tuto funkci!")
}
/*console.log("Gratulace, právě jsi spustila tuto funkci!") */
function zmenCtverecekNaZeleno(){
    let ctverecek = document.querySelector(".ctverecek")
    ctverecek.style.backgroundColor = 'green';
}