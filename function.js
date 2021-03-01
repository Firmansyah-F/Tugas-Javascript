// jika aku sekumpulan score yaitu [100,300,235,400,500],
// setiap score akan dikalikan dengan 10.
// carilah score dengan hasil akhir kurang dari 3500

const score = [100,300,235,400,500]

const hasil = score.map ((e) => {
    e *= 10
    console.log(e)
    return e

}).filter((e) => {
    return e < 3500
})

console.log(hasil)
