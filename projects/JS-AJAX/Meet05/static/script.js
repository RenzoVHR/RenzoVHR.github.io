document.addEventListener("DOMContentLoaded", () =>{

    // let apiKey = "Swii0ikN3SUL0MunRQyPLWsBkWD77S6q";

    document.getElementById("submit-btn").onclick = () => {
        const amount = document.getElementById("amount-entry").value;

        const request = new XMLHttpRequest;
        request.onload = function() {
            const data = JSON.parse(this.responseText);
            console.log(data);
            const paragraph = document.createElement("p");
            paragraph.innerHTML = data.rates[''];

            document.querySelector(".result").append(paragraph);
            document.querySelector("#amount-entry").value = "";
        }

        request.open("GET", `http://127.0.0.1:5000/api/currency/latest`);
        request.send();
        
        return false;
    }
})