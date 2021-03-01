const axios = require("axios").default;

const Movie = async () => {
    try {
        const result = await axios.get(
            "https://api.themoviedb.org/3/movie/550?api_key=bff9192b3201ae7c1be28a79cc309510",
            // {
            //     headers: {
            //         key: `e634e5410ecb00e93779b3be44547d24`,
            //     },
            // }
        );

        console.log(result.data);
    } catch (error) {
        console.log({ error });
    }
};
Movie()
