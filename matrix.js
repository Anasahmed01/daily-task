let row = "";
        let column = "";
        let target_result_div = document.querySelector("#result_div");
        
        function start() {
            row = Number(document.querySelector("#matrix_row_size").value);
            column = Number(document.querySelector("#matrix_column_size").value);

            let target1 = document.querySelector("#value_input_div1");
            let target2 = document.querySelector("#value_input_div2");
            target1.innerHTML = "";
            target2.innerHTML = "";
            target_result_div.innerHTML = "";

            if (row == "" || column == "") {
                alert("Please enter values");
                return;
            }
            if (row != column) {
                alert("Please enter same number  of rows and columns");
                return;
            }
            if (row < 2 || column < 2) {
                alert("Please enter number greater than 1");
                return;
            }

            for (let i = 0; i < row; i++) {
                for (let j = 0; j < column; j++) {
                    target1.innerHTML += `<input type="number" class="input_boxes" id="matrix_value_${i}${j}" value="0" style="width: 30px;" >`;
                    target2.innerHTML += `<input type="number" class="input_boxes" id="matrix_value2_${i}${j}" value="0" style="width: 30px;" >`;
                    target_result_div.innerHTML += `<input type="number" disabled required  id="Result_values_${i}${j}" value="0" style="width: 30px;">`;
                }
                target1.innerHTML += "<br>";
                target2.innerHTML += "<br>";
                target_result_div.innerHTML += "<br>";
            } }

        function sum() {
            for (let i = 0; i < row; i++) {
                for (let j = 0; j < column; j++) {
                    let value1 = Number(document.querySelector(`#matrix_value_${i}${j}`).value);
                    let value2 = Number(document.querySelector(`#matrix_value2_${i}${j}`).value);
                  let result = sumsum(value1, value2)
                    // let result = value1 + value2;
                    document.querySelector(`#Result_values_${i}${j}`).value = result;
                }
            }
        }
        
        function sumsum(a , b){
           return a+b;
        }
