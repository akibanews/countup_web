setTimeout(() => {
    console.log('Hello!');
}, 1);

console.log('你好');




const fetchData = () => {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Done!');
        }, 1000);
    });
    return promise;
}



setTimeout(() => {
    fetchData()
    .then(text => {
        console.log(text);
        console.log('1');
        return fetchData().then(text2 => {
            console.log(text2);
            console.log('2');
        });
    });
}, 2000);

setTimeout(() => {
    fetchData()
    .then(text => {
        console.log(text);
        console.log('3');
        return fetchData().then(text2 => {
            console.log(text2);
            console.log('4');
        });
    });
}, 10);