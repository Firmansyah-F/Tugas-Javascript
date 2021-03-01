const hello1 = (cb) => {
    setTimeout(() => {
        console.log("hello");
        cb();
    }, 300);
};

const hello2 = (cb) => {
    console.log("hello2");
    cb();
};

const hello3 = () => {
    setTimeout(() => {
        console.log("hello3")
    }, 100);
}

hello1 (() => {
    hello2 (() => {
        hello3 ()
    })
})