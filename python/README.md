Word Scramble Generator API
============

Word Scramble Generator creates puzzles where players unscramble letters to form words, with optional hints from dictionary definitions.

![Build Status](https://img.shields.io/badge/build-passing-green)
![Code Climate](https://img.shields.io/badge/maintainability-B-purple)
![Prod Ready](https://img.shields.io/badge/production-ready-blue)

This is a Python API Wrapper for the [Word Scramble Generator API](https://apiverve.com/marketplace/wordscramble?utm_source=pypi&utm_medium=readme)

---

## Installation

Using `pip`:

```bash
pip install apiverve-wordscramblegenerator
```

Using `pip3`:

```bash
pip3 install apiverve-wordscramblegenerator
```

---

## Configuration

Before using the wordscramble API client, you have to setup your account and obtain your API Key.
You can get it by signing up at [https://apiverve.com](https://apiverve.com?utm_source=pypi&utm_medium=readme)

---

## Quick Start

Here's a simple example to get you started quickly:

```python
from apiverve_wordscramblegenerator.apiClient import WordscrambleAPIClient

# Initialize the client with your APIVerve API key
api = WordscrambleAPIClient("[YOUR_API_KEY]")

query = { "difficulty": "medium", "count": 5 }

try:
    # Make the API call
    result = api.execute(query)

    # Print the result
    print(result)
except Exception as e:
    print(f"Error: {e}")
```

---

## Usage

The Word Scramble Generator API documentation is found here: [https://docs.apiverve.com/ref/wordscramble](https://docs.apiverve.com/ref/wordscramble?utm_source=pypi&utm_medium=readme).
You can find parameters, example responses, and status codes documented here.

### Setup

```python
# Import the client module
from apiverve_wordscramblegenerator.apiClient import WordscrambleAPIClient

# Initialize the client with your APIVerve API key
api = WordscrambleAPIClient("[YOUR_API_KEY]")
```

---

## Perform Request

Using the API client, you can perform requests to the API.

###### Define Query

```python
query = { "difficulty": "medium", "count": 5 }
```

###### Simple Request

```python
# Make a request to the API
result = api.execute(query)

# Print the result
print(result)
```

###### Example Response

```json
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

## Error Handling

The API client provides comprehensive error handling through the `WordscrambleAPIClientError` exception. Here are some examples:

### Basic Error Handling

```python
from apiverve_wordscramblegenerator.apiClient import WordscrambleAPIClient, WordscrambleAPIClientError

api = WordscrambleAPIClient("[YOUR_API_KEY]")

query = { "difficulty": "medium", "count": 5 }

try:
    result = api.execute(query)
    print("Success!")
    print(result)
except WordscrambleAPIClientError as e:
    print(f"API Error: {e.message}")
    if e.status_code:
        print(f"Status Code: {e.status_code}")
    if e.response:
        print(f"Response: {e.response}")
```

### Handling Specific Error Types

```python
from apiverve_wordscramblegenerator.apiClient import WordscrambleAPIClient, WordscrambleAPIClientError

api = WordscrambleAPIClient("[YOUR_API_KEY]")

query = { "difficulty": "medium", "count": 5 }

try:
    result = api.execute(query)

    # Check for successful response
    if result.get('status') == 'success':
        print("Request successful!")
        print(result.get('data'))
    else:
        print(f"API returned an error: {result.get('error')}")

except WordscrambleAPIClientError as e:
    # Handle API client errors
    if e.status_code == 401:
        print("Unauthorized: Invalid API key")
    elif e.status_code == 429:
        print("Rate limit exceeded")
    elif e.status_code >= 500:
        print("Server error - please try again later")
    else:
        print(f"API error: {e.message}")
except Exception as e:
    # Handle unexpected errors
    print(f"Unexpected error: {str(e)}")
```

### Using Context Manager (Recommended)

The client supports the context manager protocol for automatic resource cleanup:

```python
from apiverve_wordscramblegenerator.apiClient import WordscrambleAPIClient, WordscrambleAPIClientError

query = { "difficulty": "medium", "count": 5 }

# Using context manager ensures proper cleanup
with WordscrambleAPIClient("[YOUR_API_KEY]") as api:
    try:
        result = api.execute(query)
        print(result)
    except WordscrambleAPIClientError as e:
        print(f"Error: {e.message}")
# Session is automatically closed here
```

---

## Advanced Features

### Debug Mode

Enable debug logging to see detailed request and response information:

```python
from apiverve_wordscramblegenerator.apiClient import WordscrambleAPIClient

# Enable debug mode
api = WordscrambleAPIClient("[YOUR_API_KEY]", debug=True)

query = { "difficulty": "medium", "count": 5 }

# Debug information will be printed to console
result = api.execute(query)
```

### Manual Session Management

If you need to manually manage the session lifecycle:

```python
from apiverve_wordscramblegenerator.apiClient import WordscrambleAPIClient

api = WordscrambleAPIClient("[YOUR_API_KEY]")

try:
    query = { "difficulty": "medium", "count": 5 }
    result = api.execute(query)
    print(result)
finally:
    # Manually close the session when done
    api.close()
```

---

## Customer Support

Need any assistance? [Get in touch with Customer Support](https://apiverve.com/contact?utm_source=pypi&utm_medium=readme).

---

## Updates
Stay up to date by following [@apiverveHQ](https://twitter.com/apiverveHQ) on Twitter.

---

## Legal

All usage of the APIVerve website, API, and services is subject to the [APIVerve Terms of Service](https://apiverve.com/terms?utm_source=pypi&utm_medium=readme) and all legal documents and agreements.

---

## License
Licensed under the The MIT License (MIT)

Copyright (&copy;) 2026 APIVerve, and EvlarSoft LLC

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
