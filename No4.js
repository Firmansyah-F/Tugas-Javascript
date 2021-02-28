const axios = require("axios").default;

const getSalary = async () => {
    const result = (await axios.get("https://mul14.github.io/data/employees.json")).data
    const loop = result.map(e => {
        return e.salary
    })
    // console.log(loop.length)
    for (i=0; i<loop.length;i++){
        if (loop[i] > 15000000){
            console.log(`salary > 15000000 :  ${loop[i]}`)
        }
    }
}
getSalary()


const getAddress = async () => {
    const result = (await axios.get("https://mul14.github.io/data/employees.json")).data
    result.map(e => { let add = e.addresses
        // return satu
        for(let i=0; i<add.length; i++){
            if(add[i].city == 'DKI Jakarta'){
            console.log(add[i])
            }
        }
    }) 
}

getAddress()

const getBirthday = async () => {
    const result = (await axios.get("https://mul14.github.io/data/employees.json")).data
    const birth = result.map(e => {
        return e.birthday
    })   
    for (let i=0; i<birth.length;i++){
        let objDate = new Date(birth[i]);
        // console.log(objDate)
        var month = objDate.getMonth()
        // console.log(month)
        if (month == 2){
            console.log('Lahir bulan maret')
        }
        else {
            console.log('Bukan lahir bulan maret')
        }
    }
}
getBirthday()



const getDepartmen = async () => {
    const result = (await axios.get("https://mul14.github.io/data/employees.json")).data
    const depart = result.map(e => {
        return e.department
    })   
 
    for (let i = 0; i<depart.length; i++){
        if (depart[i].name == 'Research and development'){
            console.log(`Research and development : ${result[i].first_name}`)
        }
        else {
            console.log(`Tidak di Research and development : ${result[i].first_name}`)
        }
    }
}
getDepartmen()


const getDataAbsences = () => {
    axios.get("https://mul14.github.io/data/employees.json").then((res) => {
      let dataAbsences = res.data
      // console.log(dataBirthday[0].birthday)
      let count = 0
      for (let i = 0; i < dataAbsences.length; i++) {
        for (let j = 0; j < dataAbsences[i].presence_list.length; j++) {
          if (dataAbsences[i].presence_list[j].substring(5, 7) == '10') {
            count += 1
          }
        }
        console.log(`${dataAbsences[i].first_name} ${dataAbsences[i].last_name}, Hadir Sebanyak = ${count}`)
      }
    })
  }
  
  
getDataAbsences()

