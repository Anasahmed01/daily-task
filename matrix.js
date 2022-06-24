let row = "";
let col = "";

function start() {
    row = +document.querySelector("#row_size").value;
    col = +document.querySelector("#col_size").value;

    let input1 = document.querySelector("#input_1");
    let input2 = document.querySelector("#input_2");
    let mResult = document.querySelector("#mResult");

    input1.innerHTML = "";
    input2.innerHTML = "";
    mResult.innerHTML = "";

    if (row !== col) {
        alert("Please enter the same number for both inputs");
        return;
    }
    if (isNaN(row) || isNaN(col)) {
        alert("Please enter a number");
        return;
    }
    if (row < 2 || col < 2) {
        alert("Please enter a number greater than 1");
        return;
    }

    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {
            input1.innerHTML += `<input type="number" required min="0" max="100" id="m1-${i}-${j}" value="0">`;

            input2.innerHTML += `<input type="number" required min="0" max="100" id="m2-${i}-${j}" value="0">`;

            mResult.innerHTML += `<input type="number" disabled required min="0" max="100" id="mResult-${i}-${j}" value="0">`;
        }
        input1.innerHTML += `<br>`;
        input2.innerHTML += `<br>`;
        mResult.innerHTML += `<br>`;

        
    }
    document.querySelector("#form2").classList.remove("hidden");

}


function sum() {

    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {
            console.log("running");

            document.querySelector(`#mResult-${i}-${j}`).value =
                +document.querySelector(`#m1-${i}-${j}`).value
                +
                +document.querySelector(`#m2-${i}-${j}`).value;
        }
    }


}
