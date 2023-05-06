
document.addEventListener("DOMContentLoaded", () => {

    document.querySelector("button").addEventListener("click", () =>{

        const request = new XMLHttpRequest();

        request.onload = function (){
            const data = JSON.parse(this.responseText);
            const row = document.createElement("tr");
            const th1 = document.createElement("th");
            const th2 = document.createElement("th");
            th1.innerHTML = "Currency";
            th2.innerHTML = "Rates";
            row.append(th1);
            row.append(th2);
            document.querySelector(".res-table").append(row)
            Object.keys(data.rates).forEach((key) => {
                const tr = document.createElement("tr");
                const currency = document.createElement("td");
                const rates = document.createElement("td");
                currency.innerHTML = key;
                rates.innerHTML = data.rates[key];
                tr.append(currency);
                tr.append(rates)
                document.querySelector(".res-table").append(tr);
              });
            console.log(data)
        }
        request.open("GET", "http://127.0.0.1:5000/api/currency/latest");
        request.send();
            
    })


})