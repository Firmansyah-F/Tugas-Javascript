
const fetch = require("node-fetch");


class Fetcher {

    
    getJsonResponse (){

        fetch('https://httpbin.org/get')
        .then(res => res.json())
        .then(json => {
            console.log(json)
        })
    }

    deleteJsonResponse (){

        fetch('https://httpbin.org/delete', {
            method: 'DELETE',
            body: JSON.stringify(jsonData.data),
            headers: { 'Content-Type': 'application/json' }
        }).then(res => res.json())
          .then(json => console.log(json));
        

    }
    postJsonResponse (){


        fetch('https://httpbin.org/post', {
            method: 'POST',
            body: JSON.stringify(jsonData),
            headers: { 'Content-Type': 'application/json' }
        }).then(res => res.json())
          .then(json => console.log(json));
    }

    putJsonResponse (){

        fetch('https://httpbin.org/put', {
            method: 'PUT',
            body: JSON.stringify(jsonData),
            headers: { 'Content-Type': 'application/json' }
        }).then(res => res.json())
          .then(json => console.log(json));

    }
    patchJsonResponse (){

        fetch('https://httpbin.org/patch', {
            method: 'PATCH',
            body: JSON.stringify(jsonData),
            headers: { 'Content-Type': 'application/json' }
        }).then(res => res.json())
          .then(json => console.log(json));
    }
}
const jsonData = {
    id  : '30',
    name: 'Someone'
}

const result = new Fetcher()
// result.getJsonResponse()
// result.postJsonResponse()
// result.deleteJsonResponse()
// result.putJsonResponse()
// result.patchJsonResponse()

