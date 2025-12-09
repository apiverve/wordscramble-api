Word Scramble Generator API
============

Word Scramble Generator creates puzzles where players unscramble letters to form words, with optional hints from dictionary definitions.

![Build Status](https://img.shields.io/badge/build-passing-green)
![Code Climate](https://img.shields.io/badge/maintainability-B-purple)
![Prod Ready](https://img.shields.io/badge/production-ready-blue)

This is a Python API Wrapper for the [Word Scramble Generator API](https://apiverve.com/marketplace/api/wordscramble)

---

## Installation
	pip install apiverve-wordscramblegenerator

---

## Configuration

Before using the wordscramble API client, you have to setup your account and obtain your API Key.  
You can get it by signing up at [https://apiverve.com](https://apiverve.com)

---

## Usage

The Word Scramble Generator API documentation is found here: [https://docs.apiverve.com/api/wordscramble](https://docs.apiverve.com/api/wordscramble).  
You can find parameters, example responses, and status codes documented here.

### Setup

```
# Import the client module
from apiverve_wordscramblegenerator.apiClient import WordscrambleAPIClient

# Initialize the client with your APIVerve API key
api = WordscrambleAPIClient("[YOUR_API_KEY]")
```

---


### Perform Request
Using the API client, you can perform requests to the API.

###### Define Query

```
query = { "count": 5, "difficulty": "medium" }
```

###### Simple Request

```
# Make a request to the API
result = api.execute(query)

# Print the result
print(result)
```

###### Example Response

```
{
  "status": "ok",
  "error": null,
  "data": {
    "puzzles": [
      {
        "scrambled": "AFYLER",
        "answer": "FLAYER",
        "letterCount": 6,
        "hint": "One who strips off the skin."
      },
      {
        "scrambled": "PUHIRRC",
        "answer": "CHIRRUP",
        "letterCount": 7,
        "hint": "To quicken or animate by chirping; to cherup.  To chirp. Tennyson. The criket chirrups on the hearth..."
      },
      {
        "scrambled": "PAINTACO",
        "answer": "PACATION",
        "letterCount": 8,
        "hint": "The act of pacifying; a peacemaking.  Coleridge."
      },
      {
        "scrambled": "OMADTSI",
        "answer": "MASTOID",
        "letterCount": 7,
        "hint": "(a) Resembling the nipple or the breast; -- applied specifically to a process of the temporal bone b..."
      },
      {
        "scrambled": "CRVELAA",
        "answer": "ACERVAL",
        "letterCount": 7,
        "hint": "Pertaining to a heap. [Obs.]"
      }
    ],
    "count": 5,
    "difficulty": "medium",
    "html": "<html><head><title>Word Scramble Puzzle</title><style>body {font-family: Arial, sans-serif; padding: 20px; max-width: 600px; margin: 0 auto;}h1 {text-align: center; color: #333;}.puzzle {background: #f5f5f5; padding: 20px; margin: 15px 0; border-radius: 10px;}.scrambled {font-size: 28px; font-weight: bold; letter-spacing: 5px; color: #2196F3; text-align: center;}.hint {font-size: 14px; color: #666; margin-top: 10px; font-style: italic;}.answer-line {margin-top: 15px; border-bottom: 2px solid #333; height: 30px;}.number {font-size: 14px; color: #999;}</style></head><body><h1>Word Scramble</h1><div class='puzzle'><div class='number'>#1 (6 letters)</div><div class='scrambled'>AFYLER</div><div class='hint'>Hint: One who strips off the skin.</div><div class='answer-line'></div></div><div class='puzzle'><div class='number'>#2 (7 letters)</div><div class='scrambled'>PUHIRRC</div><div class='hint'>Hint: To quicken or animate by chirping; to cherup.  To chirp. Tennyson. The criket chirrups on the hearth...</div><div class='answer-line'></div></div><div class='puzzle'><div class='number'>#3 (8 letters)</div><div class='scrambled'>PAINTACO</div><div class='hint'>Hint: The act of pacifying; a peacemaking.  Coleridge.</div><div class='answer-line'></div></div><div class='puzzle'><div class='number'>#4 (7 letters)</div><div class='scrambled'>OMADTSI</div><div class='hint'>Hint: (a) Resembling the nipple or the breast; -- applied specifically to a process of the temporal bone b...</div><div class='answer-line'></div></div><div class='puzzle'><div class='number'>#5 (7 letters)</div><div class='scrambled'>CRVELAA</div><div class='hint'>Hint: Pertaining to a heap. [Obs.]</div><div class='answer-line'></div></div></body></html>"
  }
}
```

---

## Customer Support

Need any assistance? [Get in touch with Customer Support](https://apiverve.com/contact).

---

## Updates
Stay up to date by following [@apiverveHQ](https://twitter.com/apiverveHQ) on Twitter.

---

## Legal

All usage of the APIVerve website, API, and services is subject to the [APIVerve Terms of Service](https://apiverve.com/terms) and all legal documents and agreements.

---

## License
Licensed under the The MIT License (MIT)

Copyright (&copy;) 2025 APIVerve, and EvlarSoft LLC

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.