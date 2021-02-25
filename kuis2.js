// Buatlah suatu fungsi untuk mencetak tulisan dari 1 hingga 1000, dengan ketentuan berikut:
// - Jika angka ganjil, maka output menjadi __1. Ganjil__
// - Jika angka genap, maka output menjadi __8. Genap__
// - Jika angka ganjil dan kelipatan lima, maka output menjadi __15. Ganjil Kelipatan Lima__
// - Jika angka genap dan kelipatan lima, maka output menjadi __30. Genap Kelipatan Lima__
// - Jika angka kelipatan 100, maka output menjadi __100. Kelipatan Seratus__
// contoh :
// ```
// 1. Ganjil
// 2. Genap
// 3. Ganjil
// 4. Genap
// 5. Ganjil Kelipatan Lima
// 6. Genap
// 7. Ganjil
// 8. Genap
// 9. Ganjil
// 10. Genap Kelipatan Lima
// ...
// 200. Kelipatan Seratus
// ``` 
function deret(){
    let i = 0
    do {
        i++
        if (i%2 != 0){
            if (i%5 ==0 ){
                console.log(i+ ".Ganjil kelipatan lima")
            }
            else {
                console.log( i+".Ganjil")
            }
        }
        else if (i%2 == 0){
            if (i%100 ==0){
                console.log(i+ ".Kelipatan seratus")
            }
            else if (i%5 ==0){
                console.log(i+ ".Genap kelipatan lima")
            }
            else {
                console.log(i+ ".Genap")
            }
        }
        
    } while (i < 200);
}
deret()