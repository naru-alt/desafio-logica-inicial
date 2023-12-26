//insira o nome do seu herói/heroína:
let nomeHeroi = "Naru";

//insira o nível do seu herói/heroína:
let experienciaDoHeroi = 5002;

// insira o gênero do seu herói/heroína (M para masculino, F para feminino):
let generoHeroi = "F";

let generoDoHeroi = (generoHeroi === "F") ? "A heroína" : "O herói";


if (experienciaDoHeroi <= 1000) {
    nivelDoHeroi = "Ferro";
} else if (experienciaDoHeroi >= 1001 && experienciaDoHeroi <= 2000) {
    nivelDoHeroi = "Bronze";
} else if (experienciaDoHeroi >= 2001 && experienciaDoHeroi <= 5000) {
    nivelDoHeroi = "Prata";
} else if (experienciaDoHeroi >= 5001 && experienciaDoHeroi <= 7000) {
    nivelDoHeroi = "Ouro";
} else if (experienciaDoHeroi >= 7001 && experienciaDoHeroi <= 8000) {
    nivelDoHeroi = "Platina";
} else if (experienciaDoHeroi >= 8001 && experienciaDoHeroi <= 9000) {
    nivelDoHeroi = "Ascendente";
} else if (experienciaDoHeroi >= 9001 && experienciaDoHeroi <= 10000) {
    nivelDoHeroi = "Imortal";
} else {
    nivelDoHeroi = "Radiante";
}


console.log(generoDoHeroi + " de nome " + nomeHeroi + " está no nível " + nivelDoHeroi + ".")