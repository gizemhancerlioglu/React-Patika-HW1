import axios from 'axios';

const getData = (user_id) => {

    return new Promise(async (resolve, reject) => {
        const { data: user } = await axios(
            `https://jsonplaceholder.typicode.com/users/` + user_id
        );

        const { data: post } = await axios(
            `https://jsonplaceholder.typicode.com/posts/` + user_id
        );

        const allData = [user, post];

        (user_id === 1) ?
            resolve(console.log(allData)) :
            reject(console.log("parametre değeri 1'den farklı"));

    });

};

export default getData;