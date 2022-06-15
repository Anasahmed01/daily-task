let input1 = "", input2 = "";

function start() {

    let message = document.querySelector("#message")
    let mInput1 = document.querySelector("#mInput1")
    let mInput2 = document.querySelector("#mInput2")
    let mResult = document.querySelector("#mResult")

    mInput1.innerHTML = "", mInput2.innerHTML = "", mResult.innerHTML = "";


    input1 = +document.querySelector("#input1").value;
    input2 = +document.querySelector("#input2").value;

    if (input1 !== input2) {
        alert(`
        ${input1} and ${input2} are not same.
        Please enter same Numbers in both fields.`);
        return;
    }

    if (isNaN(input1) || isNaN(input2)) {
        alert(`
        ${input1} and ${input2} are not Numbers
        Please enter Numbers in both fields.`);
        return;
    }

    if (input1 < 2 || input2 < 2) {
        alert(`
        Please enter Numbers greater than 1`);
        return;
    }


    for (let i = 0; i < input1; i++) {
        for (let j = 0; j < input2; j++) {
            console.log("Working");
            mInput1.innerHTML +=
                `<input type="number" required min="0" max="999" id="m1-${i}-${j}" value="0" style="width:30px;">`;
            mInput2.innerHTML +=
                `<input type="number" required min="0" max="999" id="m2-${i}-${j}" value="0" style="width:30px;">`;
            mResult.innerHTML +=
                `<input type="number" disabled required min="0" max="9999999" id="mResult-${i}-${j}" value="0" style="width:30px;">`;
        }

        mInput1.innerHTML += `<br>`;
        mInput2.innerHTML += `<br>`;
        mResult.innerHTML += `<br>`;
    }

    document.querySelector("#consealedInputForm").classList.remove("hidden");

}


function sum() {

    for (let i = 0; i < input1; i++) {
        for (let j = 0; j < input2; j++) {
            console.log("Working");

            document.querySelector(`#mResult-${i}-${j}`).value =
                +document.querySelector(`#m1-${i}-${j}`).value
                +
                +document.querySelector(`#m2-${i}-${j}`).value;
        }
    }

}