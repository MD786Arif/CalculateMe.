let string = "";
let Mresult = "";
let buttons = document.querySelectorAll(".button");



    Array.from(buttons).forEach((button) => {
        button.addEventListener("click", (e) => {
          if (e.target.innerHTML == "=") {
            string = eval(string);
            document.querySelector("input").value = string;
          } else if (e.target.innerHTML == "C") {
            string = "";
            Mresult = "";
            document.querySelector("input").value = string;
          } else if (e.target.innerHTML == "M+") {
            Mresult = Mresult + "+" + string;
            string = "";
            document.querySelector("input").value = string;
          } else if (e.target.innerHTML == "M-") {
            Mresult = Mresult + "-" + string;
            string = "";
            document.querySelector("input").value = string;
          } else if (e.target.innerHTML == "MR") {
            Mresult = eval(Mresult)+"";
            document.querySelector("input").value = Mresult;
          } else {
            string = string + e.target.innerHTML;
            document.querySelector("input").value = string;
          }
        });
      });


// TO DO M+ and M- functional
