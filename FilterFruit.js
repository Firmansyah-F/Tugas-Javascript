const axios = require("axios").default;

const getFruit = async () => {
    const users = (await axios.get(" https://res.cloudinary.com/sivadass/raw/upload/v1535817394/json/products.json")).data
    // console.log(users)
    const tipe = users.filter((user) => user.category === 'fruits')
    console.log(tipe)
};
getFruit()
