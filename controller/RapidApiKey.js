const request = require('request');

let options = {
  'method': 'POST',
  'url': 'https://google.serper.dev/search',
  'headers': {
    'X-API-KEY': '3a6eda156b23efec6813f7b181b2a710f64620ed',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    "q": "apple inc"
  })

  

};
request(options, (error, response) => {
  if (error) throw new Error(error);
  console.log(response.body);
});

// console.log(options)

const generateimage = async (req, res) => {
    try {
        const response = await options.createImage({
            prompt: "cat",
            n: 1,
            size: '512x512'
        });

        const imageUrl = response.data.data[0].url;
        res.status(200).json({
            success: true,
            data: imageUrl
        });
    } catch (error) {
        if (error.response) {
            console.log(error.response.status);
            console.log(error.response.data);
        } else {
            console.log(error.message);
        }

        res.status(400).json({
            success: false,
            error: 'The image could not be generated'
        });
    }
}

module.exports = { generateimage };