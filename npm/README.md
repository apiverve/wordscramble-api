# Word Scramble Generator API

Word Scramble Generator creates puzzles where players unscramble letters to form words, with optional hints from dictionary definitions.

![Build Status](https://img.shields.io/badge/build-passing-green)
![Code Climate](https://img.shields.io/badge/maintainability-B-purple)
![Prod Ready](https://img.shields.io/badge/production-ready-blue)
[![npm version](https://img.shields.io/npm/v/@apiverve/wordscramble.svg)](https://www.npmjs.com/package/@apiverve/wordscramble)

This is a Javascript Wrapper for the [Word Scramble Generator API](https://apiverve.com/marketplace/wordscramble?utm_source=npm&utm_medium=readme)

---

## Installation

Using npm:
```shell
npm install @apiverve/wordscramble
```

Using yarn:
```shell
yarn add @apiverve/wordscramble
```

---

## Configuration

Before using the Word Scramble Generator API client, you have to setup your account and obtain your API Key.
You can get it by signing up at [https://apiverve.com](https://apiverve.com?utm_source=npm&utm_medium=readme)

---

## Quick Start

[Get started with the Quick Start Guide](https://docs.apiverve.com/quickstart?utm_source=npm&utm_medium=readme)

The Word Scramble Generator API documentation is found here: [https://docs.apiverve.com/ref/wordscramble](https://docs.apiverve.com/ref/wordscramble?utm_source=npm&utm_medium=readme).
You can find parameters, example responses, and status codes documented here.

### Setup

```javascript
const wordscrambleAPI = require('@apiverve/wordscramble');
const api = new wordscrambleAPI({
    api_key: '[YOUR_API_KEY]'
});
```

---

## Usage

---

### Perform Request

Using the API is simple. All you have to do is make a request. The API will return a response with the data you requested.

```javascript
var query = {
  difficulty: "medium",
  count: 5,
  image: false
};

api.execute(query, function (error, data) {
    if (error) {
        return console.error(error);
    } else {
        console.log(data);
    }
});
```

---

### Using Promises

You can also use promises to make requests. The API returns a promise that you can use to handle the response.

```javascript
var query = {
  difficulty: "medium",
  count: 5,
  image: false
};

api.execute(query)
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.error(error);
    });
```

---

### Using Async/Await

You can also use async/await to make requests. The API returns a promise that you can use to handle the response.

```javascript
async function makeRequest() {
    var query = {
  difficulty: "medium",
  count: 5,
  image: false
};

    try {
        const data = await api.execute(query);
        console.log(data);
    } catch (error) {
        console.error(error);
    }
}
```

---

## Example Response

```json
{
  "status": "ok",
  "error": null,
  "data": {
    "puzzles": [
      {
        "scrambled": "ISIEMM",
        "answer": "IMMIES",
        "letterCount": 6
      },
      {
        "scrambled": "DRIGIANN",
        "answer": "DRAINING",
        "letterCount": 8
      },
      {
        "scrambled": "RDAKCE",
        "answer": "ARCKED",
        "letterCount": 6
      },
      {
        "scrambled": "ERTHASDB",
        "answer": "BREADTHS",
        "letterCount": 8
      },
      {
        "scrambled": "SISSNASA",
        "answer": "ASSASSIN",
        "letterCount": 8
      }
    ],
    "count": 5,
    "difficulty": "medium",
    "html": "<html><head><title>Word Scramble Puzzle</title><style>body {font-family: Arial, sans-serif; padding: 20px; max-width: 600px; margin: 0 auto;}h1 {text-align: center; color: #333;}.puzzle {background: #f5f5f5; padding: 20px; margin: 15px 0; border-radius: 10px;}.scrambled {font-size: 28px; font-weight: bold; letter-spacing: 5px; color: #2196F3; text-align: center;}.hint {font-size: 14px; color: #666; margin-top: 10px; font-style: italic;}.answer-line {margin-top: 15px; border-bottom: 2px solid #333; height: 30px;}.number {font-size: 14px; color: #999;}</style></head><body><h1>Word Scramble</h1><div class='puzzle'><div class='number'>#1 (6 letters)</div><div class='scrambled'>ISIEMM</div><div class='answer-line'></div></div><div class='puzzle'><div class='number'>#2 (8 letters)</div><div class='scrambled'>DRIGIANN</div><div class='answer-line'></div></div><div class='puzzle'><div class='number'>#3 (6 letters)</div><div class='scrambled'>RDAKCE</div><div class='answer-line'></div></div><div class='puzzle'><div class='number'>#4 (8 letters)</div><div class='scrambled'>ERTHASDB</div><div class='answer-line'></div></div><div class='puzzle'><div class='number'>#5 (8 letters)</div><div class='scrambled'>SISSNASA</div><div class='answer-line'></div></div></body></html>",
    "image": {
      "imageName": "d1ae484c-e879-4a0e-95b0-bfa872fa758a_wordscramble.png",
      "format": ".png",
      "downloadURL": "https://storage.googleapis.com/apiverve/APIData/wordscramble/d1ae484c-e879-4a0e-95b0-bfa872fa758a_wordscramble.png?GoogleAccessId=635500398038-compute%40developer.gserviceaccount.com&Expires=1766010755&Signature=A9uZl5RTt%2Bk0WWM4onUMA5OyLA4xXdvR2iar2gjYoNWpdlLgYreoRvdOSYdbKpXOUENwtFphQIS6AU5iOKeAD6zC47jFAgFPPR%2BiVJjdluhg%2B37xJXMzSaU3uaFRkO4YWu2zAgSRxPNgtMM3ahbGlU5H5Nv6GGuLBihmIPcw6IVhJXG1LBzt4Vat7FEnfU4GuwJhEcpYINhkuIPTdN7yy%2FjSeBq7ZAgvwJuzDI13Ng5mFcE4uB1qB5B9AiL%2BApnyqoAJljXJbbgzHCtwwg%2FCtTlzMa0C4Biy1ka4f%2Bjf%2Bs8c07khRku4b6MNvuMiRVhjw4tRb3D7Hui%2Bx%2FWyaoB6Pg%3D%3D",
      "expires": 1766010755245
    }
  }
}
```

---

## Customer Support

Need any assistance? [Get in touch with Customer Support](https://apiverve.com/contact?utm_source=npm&utm_medium=readme).

---

## Updates

Stay up to date by following [@apiverveHQ](https://twitter.com/apiverveHQ) on Twitter.

---

## Legal

All usage of the APIVerve website, API, and services is subject to the [APIVerve Terms of Service](https://apiverve.com/terms?utm_source=npm&utm_medium=readme), [Privacy Policy](https://apiverve.com/privacy?utm_source=npm&utm_medium=readme), and [Refund Policy](https://apiverve.com/refund?utm_source=npm&utm_medium=readme).

---

## License
Licensed under the The MIT License (MIT)

Copyright (&copy;) 2026 APIVerve, and EvlarSoft LLC

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
