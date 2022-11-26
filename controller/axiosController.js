'use strict';
const axios = require('axios');
const posts = async (req, res) => {
    try {
        let [result, result1, result2] = await Promise.all([
            axios.get('https://mocki.io/v1/112cd649-f6fd-4d8a-aa37-3b8623c367c8'),
            axios.get('https://mocki.io/v1/112cd649-f6fd-4d8a-aa37-3b8623c367c8'),
            axios.get('https://mocki.io/v1/112cd649-f6fd-4d8a-aa37-3b8623c367c8')
        ]);
        res.send({ result: [result.data, result1.data, result2.data] });
    } catch (err) {
        res.send(err.message)
    }
}
const comments = async (req, res) => {
    try {
        let result = await axios.get('https://mocki.io/v1/112cd649-f6fd-4d8a-aa37-3b8623c367c8');
        let result1 = await axios.get('https://mocki.io/v1/112cd649-f6fd-4d8a-aa37-3b8623c367c8');
        let result2 = await axios.get('https://mocki.io/v1/112cd649-f6fd-4d8a-aa37-3b8623c367c8');
        res.send({ result: [result.data, result1.data, result2.data] });
    }
    catch (err) {
        res.send(err.message);
    }
}

module.exports = {
    posts,
    comments
}