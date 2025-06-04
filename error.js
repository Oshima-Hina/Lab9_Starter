document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("log").addEventListener("click", () => {
    console.log("console log demo");
  });

  document.getElementById("error").addEventListener("click", () => {
    console.error("console error demo");
  });

  document.getElementById("count").addEventListener("click", () => {
    console.count("Count Button");
  });

  document.getElementById("warn").addEventListener("click", () => {
    console.warn("console warn button");
  });

  document.getElementById("assert").addEventListener("click", () => {
    const number = 2;
    const expected = 3;
    console.assert(number === expected, { number, errorMsg: 'The number does not equal 3' });
  });

  document.getElementById("clear").addEventListener("click", () => {
    console.clear();
  });

  document.getElementById("dir").addEventListener("click", () => {
    const object = document.getElementById("dir");
    console.dir(object);
  });

  document.getElementById("dirxml").addEventListener("click", () => {
    console.dirxml(document.getElementById("dirxml"));
  });

  document.getElementById("group-start").addEventListener("click", () => {
    console.group();
  });

  document.getElementById("group-end").addEventListener("click", () => {
    console.groupEnd();
  });

  document.getElementById("table").addEventListener("click", () => {
    const people = [
      { character:"Raana", actress:"Aoki" },
      { character:"Tomori", actress:"Youmiya" },
      { character:"Hajimi", actress:"Neko" },
    ];
    console.table(people);
  });

  document.getElementById("start-timer").addEventListener("click", () => {
    console.time("timer button");
  });

  document.getElementById("end-timer").addEventListener("click", () => {
    console.timeEnd("timer button");
  });

  document.getElementById("trace").addEventListener("click", () => {
        function deep() {
          function deeper() {
            function deepest() {
              console.trace('console.trace');
            }
            deepest();
          }
          deeper();
        }
        deep();
  });


document.getElementById("global").addEventListener("click", () => {
    boom();
  });
});


window.onerror = (err)=> {
  console.log("Global error caught:");
  return true; // Prevents the default browser error message
};