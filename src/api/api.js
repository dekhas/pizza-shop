import * as axios from "axios";

export const getPizzas = () => {
    return axios.get("https://dekhas.github.io/pizza-shop/db.json") // Когда выпускаешь прод меняеешь на https://dekhas.github.io/pizza-shop/db.json когда разрабатываешь то, localhost:3000/db.json
};
