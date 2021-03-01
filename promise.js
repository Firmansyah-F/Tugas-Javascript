const input1 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // download
            const success = true;
            if (success) {
                resolve("INPUT PROSES 1");
            } else {
                reject("GAGAL INPUT 1");
            }
        }, 5000);
    });
};


const input2 = () => {
    return `INPUT PROSES 2`;
};


const input3 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (true) {
                resolve(`INPUT PROSES 3`);
            } else {
                reject(`GAGAL INPUT 3`);
            }
        }, 1000);
    });
};


// input1()
//     .then((result) => {
//         // console.log(result);
//         input3()
//             .then((result) => {
//                 // console.log(input2());
//                 // console.log(result);
//             })
//             .catch((err) => console.log(err));
//     })
//     .catch((err) => console.log(err));


input1().then((result1) => {
        // console.log(result);
    input3().then((result3) => {
        console.log(result1)
        console.log(input2());
        console.log(result3);
    }).catch((err) => console.log(err));
}).catch((err) => console.log(err));
