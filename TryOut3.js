// Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras interdum mi eu magna fermentum, vel luctus tellus semper. Nunc dignissim eleifend ipsum, nec viverra mauris pellentesque non. Fusce auctor ex id mauris egestas, quis luctus nunc pharetra. Sed in dignissim nisi. Aliquam sed tempor urna, nec aliquam mi. Aenean eu feugiat lacus, vel dictum eros. Nulla condimentum porttitor aliquet. Vestibulum vehicula elit non arcu auctor maximus. Quisque est eros, maximus nec diam faucibus, mollis odio.

var rl = require('readline-sync')
var abjad = ("a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z")
var Input = rl.question("Masukkan kode : ")
var jumlah_rotasi = rl.questionInt("Masukkan jumlah rotasi : ")
var abjad_array = abjad.split(',')
var arraykalimat = abjad.split(',') 
var kode = Input.split('')
var output = []


function rotasiArray(arraykalimat, jumlah_rotasi) {
    if (jumlah_rotasi >= 0) {
      var potong = arraykalimat.splice(arraykalimat, jumlah_rotasi);
      var output = [...arraykalimat,...potong];
      return output;
    } 
    else {
      return "Format Salah";
    }
  }


function char_count(str, letter) 
{
 var letter_Count = 0;
 for (var position = 0; position < str.length; position++) 
 {
    if (str.charAt(position) == letter) 
      {
      letter_Count += 1;
      }
  }
  return letter_Count;
}

for (i=0; i<abjad_array.length;i++){
  console.log("Jumlah karakter "+abjad_array[i] +": ",char_count(Input, abjad_array[i]));
}
  

var rotasi = rotasiArray(arraykalimat,jumlah_rotasi)
var rotasi = rotasi.toString()
console.log("rotasi abjad " + jumlah_rotasi + 'x = ' , rotasi)

for(let i=0; i<kode.length; i++){
    if(abjad.includes(kode[i]))
    {   
        var z = abjad.indexOf(kode[i])
        output.push(rotasi[z])
    }
    else if( (abjad.toUpperCase()).includes(kode[i]) )
    {
        var x = (abjad.toUpperCase()).indexOf(kode[i])
        output.push(rotasi[x].toUpperCase())
    }
    else
    {
        output.push(kode[i])
    }

} 
console.log("Rotasi kalimat : ",output.join(''))
