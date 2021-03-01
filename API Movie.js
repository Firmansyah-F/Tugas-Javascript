const axios = require("axios").default;

// Soal No 3 Point no 4
let numb = 800
// for (let i=0; i<100; i++){

//     const Movie = async () => {
//         try {
//             const result = await axios.get(
//                 `https://api.themoviedb.org/3/movie/${numb}?api_key=bff9192b3201ae7c1be28a79cc309510`);
//                 let average = result.data.vote_average
//                 let date = result.data.release_date
//                 let title = result.data.title
//                 let objDate = new Date(date);
//                 var year = objDate.getFullYear()
//                 if (average > 7.5 && year === 2016 ){
//                     console.log(`Vote Average > 7.5 : ${average} => Title : ${title} `);
//                     console.log(`Release year on 2016 : ${year}`)
//                 }else {
//                     console.log(`Vote Average :  ${average} => Tile : ${title}`);
//                     console.log(`Release year : ${year}`)
//                 }
               
//         } catch (error) {
//             console.log({ error });
//         }
//     };
//     Movie()
//     numb += 1 
// }

// Point 1
for (let i=0; i<100; i++){

    const Movie = async () => {
        try {
            const result = await axios.get(
                `https://api.themoviedb.org/3/movie/${numb}?api_key=bff9192b3201ae7c1be28a79cc309510`);
                let language = result.data.original_language
                let title = result.data.title

                if (language === 'id' ){
                    console.log(`Original_Languange Indonesia : ${language} => Title : ${title} `);
                }else {
                    console.log(`Original_Languange : ${language} => Title : ${title} `);
                }
               
        } catch (error) {
            console.log({ error });
        }
    };
    Movie()
    numb += 1 
}





