const axios = require("axios").default;

const getTitle = async () => {
    const users = (await axios.get("https://jsonplaceholder.typicode.com/posts ")).data
    console.log(users)
    const title = users.map(e => {
        return (`title : ${e.title}`)
    })
    console.log(title)
};
getTitle()
