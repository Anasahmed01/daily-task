function printTable() {
    let table = document.querySelector("#table").value
    for (let i = 0; i < 10; i++) {

        console.log(`${table}  x  ${i + 1}  =  ${table * (i + 1)} `)
    }
}