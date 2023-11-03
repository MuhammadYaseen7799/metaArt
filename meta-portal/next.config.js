/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}
/*
const axios = require('axios');

const inputText = 'Some text to send to the API';

axios.post('https://stablediffusionapi.com/api/v3/text2img', { text: inputText })
  .then(response => {
    console.log('Result:', response.data.result);
  })
  .catch(error => {
    console.error('Error:', error);
  });
*/
module.exports = nextConfig
