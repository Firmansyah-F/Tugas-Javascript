const axios = require('axios')


const getData = () => {
  axios.get(`https://jsonplaceholder.typicode.com/posts`).then((res) => {
    let dataPosts = res.data;
    // console.log(dataPosts.name);
    axios.get(`https://jsonplaceholder.typicode.com/users`).then((res) => {
      let dataUsers = res.data;
      // console.log(dataPosts);
      let dataMerge = dataPosts.map((e) => {
        let temp = dataUsers.find((element) => element.id === e.userId);
        if (temp) {
          e.user = temp;
        }
        return e;
      });
      console.log(dataMerge);
      console.log("=================================================");
    });
  });
};

getData();
