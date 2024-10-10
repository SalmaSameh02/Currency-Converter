import { countries } from "./countries.js";
//console.log(countries);
let from_list = document.getElementById("from");
let to_list = document.getElementById("to");
let img_from = document.getElementById("flag_from");
let img_to = document.getElementById("flag_to");

for (let [key, value] of Object.entries(countries)) {

    //console.log(key,value);
    let option =`<option value="${value}" name="${key}">${key}</option>`;
    
    from_list.innerHTML += option;
    //console.log(option);
    to_list.innerHTML += option;
}
let n;
let m;

from_list.addEventListener("change", function () {
    img_from.src = `https://flagsapi.com/${from_list.value}/flat/64.png`;
    n = from_list.options[from_list.selectedIndex].innerHTML;
    console.log(n);

});
to_list.addEventListener("change", function () {
    img_to.src = `https://flagsapi.com/${to_list.value}/flat/64.png`;
    m = to_list.options[to_list.selectedIndex].innerHTML;
    console.log(m); 
})
let result = document.getElementById("result");
let btn = document.getElementById("convert");

btn.addEventListener("click", e=> {
    e.preventDefault();
    exchange();
    });
async function exchange(){
    let amount = document.getElementById("amount").value;
    let url =`https://open.er-api.com/v6/latest/${n}`;
    fetch(url)
    .then(res=>res.json())
    .then(data=>{
        console.log(data);  
        let rate = data.rates[m];
        let total = (amount * rate).toFixed(2);
        result.innerHTML = `${amount} ${n} = ${total} ${m}`;
    })
}