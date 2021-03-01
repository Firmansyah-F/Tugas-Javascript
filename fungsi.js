const users = [{ firstName: 'Bradley', lastName: 'Bouley', role: 'Full Stack Resident' },
             { firstName: 'Chloe', lastName: 'Alnaji', role: 'Full Stack Resident' },
             { firstName: 'Jonathan', lastName: 'Baughn', role: 'Enterprise Instructor' },
             { firstName: 'Michael', lastName: 'Herman', role: 'Lead Instructor' },
             { firstName: 'Robert', lastName: 'Hajek', role: 'Full Stack Resident' },
             { firstName: 'Wes', lastName: 'Reid', role: 'Instructor'},
             { firstName: 'Zach', lastName: 'Klabunde', role: 'Instructor'}];
// Bagaimana agar aku bisa mencetak welcoming message, (contoh : "Good Morning Bradley Bouley !") untuk semua data karyawan

const fill = users.filter ((e) =>{
    return e.role == 'Full Stack Resident'
}).map ((e) => `Good morning  ${e.firstName} ${e.lastName} ${e.role} `)
console.log(fill)

// const welcoming = users.map ((e) => {
//     return (`Good morning  ${e.firstName} ${e.lastName} ${e.role} `)
// }).fill(e)
// console.log(welcoming)