document.addEventListener("DOMContentLoaded", () =>{

    // let apiKey = "Swii0ikN3SUL0MunRQyPLWsBkWD77S6q";

    document.getElementById("search-btn").onclick = () => {
        let hasilsearch = document.getElementById("search").value;
        hasilsearch = hasilsearch.toLowerCase()
        

        const request = new XMLHttpRequest;
        request.onload = function() {
            const data = JSON.parse(this.responseText);
            let berat = data.weight/10;
            console.log(berat)
            let tinggi = data.height/10;
            
            document.getElementById('img').src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${data.id}.png`
            document.getElementById("namaPokemon").innerHTML = `${data.name}`;
            document.getElementById('tipePokemon').innerHTML = `Type: ${data.types[0].type.name}`
            document.getElementById('darahPokemon').innerHTML = `HP: ${data.stats[0].base_stat}`
            document.getElementById('xpPokemon').innerHTML = `XP: ${data.base_experience}`
            document.getElementById('beratPokemon').innerHTML = `Weight: ${berat} KG`
            document.getElementById('tinggiPokemon').innerHTML = `Height: ${tinggi} M`
            document.querySelector(".form-control").value = "";

            if(data.types[0].type.name == "fire"){
                document.body.style.backgroundColor = "red";
                document.getElementById("color").style.color = "white";
                document.querySelector(".color").style.color = "white";
            }
            else if(data.types[0].type.name == "grass"){
                document.body.style.backgroundColor = "green"
                document.getElementById("color").style.color = "white";
                document.querySelector(".color").style.color = "white";
            }
            else if(data.types[0].type.name == "water"){
                document.body.style.backgroundColor = "blue"
                document.getElementById("color").style.color = "white";
                document.querySelector(".color").style.color = "white";
            }
            else if(data.types[0].type.name == "ice"){
                document.body.style.backgroundColor = "cyan"
                document.getElementById("color").style.color = "black";
                document.querySelector(".color").style.color = "black";
            }
            else if(data.types[0].type.name == "bug"){
                document.body.style.backgroundColor = "lightgreen"
                document.getElementById("color").style.color = "black";
                document.querySelector(".color").style.color = "black";
            }
            else if(data.types[0].type.name == "dark"){
                document.body.style.backgroundColor = "rgb(20, 20, 20)"
                document.getElementById("color").style.color = "white";
                document.querySelector(".color").style.color = "white";
            }
            else if(data.types[0].type.name == "dragon"){
                document.body.style.backgroundColor = "darkblue"
                document.getElementById("color").style.color = "white";
                document.querySelector(".color").style.color = "white";
            }
            else if(data.types[0].type.name == "electric"){
                document.body.style.backgroundColor = "yellow"
                document.getElementById("color").style.color = "black";
                document.querySelector(".color").style.color = "black";
            }
            else if(data.types[0].type.name == "fairy"){
                document.body.style.backgroundColor = "pink"
                document.getElementById("color").style.color = "black";
                document.querySelector(".color").style.color = "black";
            }
            else if(data.types[0].type.name == "fighting"){
                document.body.style.backgroundColor = "orange"
                document.getElementById("color").style.color = "black";
                document.querySelector(".color").style.color = "black";
            }
            else if(data.types[0].type.name == "flying"){
                document.body.style.backgroundColor = "lightgrey"
                document.getElementById("color").style.color = "black";
                document.querySelector(".color").style.color = "black";
            }
            else if(data.types[0].type.name == "ghost"){
                document.body.style.backgroundColor = "rgb(70, 0, 70)"
                document.getElementById("color").style.color = "white";
                document.querySelector(".color").style.color = "white";
            }
            else if(data.types[0].type.name == "ground"){
                document.body.style.backgroundColor = "rgb(92, 30, 30)"
                document.getElementById("color").style.color = "white";
                document.querySelector(".color").style.color = "white";
            }
            else if(data.types[0].type.name == "normal"){
                document.body.style.backgroundColor = "white"
                document.getElementById("color").style.color = "black";
                document.querySelector(".color").style.color = "black";
            }
            else if(data.types[0].type.name == "poison"){
                document.body.style.backgroundColor = "lightpurple"
                document.getElementById("color").style.color = "black";
                document.querySelector(".color").style.color = "black";
            }
            else if(data.types[0].type.name == "psychic"){
                document.body.style.backgroundColor = "rgb(248, 65, 96)"
                document.getElementById("color").style.color = "white";
                document.querySelector(".color").style.color = "white";
            }
            else if(data.types[0].type.name == "rock"){
                document.body.style.backgroundColor = "darkgrey"
                document.getElementById("color").style.color = "black";
                document.querySelector(".color").style.color = "black";
            }
            else if(data.types[0].type.name == "steel"){
                document.body.style.backgroundColor = "grey"
                document.getElementById("color").style.color = "black";
                document.querySelector(".color").style.color = "black";
            }
        }

        request.open("GET", `https://pokeapi.co/api/v2/pokemon/${hasilsearch}`);
        request.send();
        
        return false;
    }
})