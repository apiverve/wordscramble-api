# Word Scramble Generator API - PHP Package

Word Scramble Generator is a scramble word API that creates puzzles where players unscramble letters to form words, returning each scrambled sequence with its answer and letter count.

## Installation

Install via Composer:

```bash
composer require apiverve/wordscramble
```

## Getting Started

Get your API key at [APIVerve](https://apiverve.com)

### Basic Usage

```php
<?php

require_once 'vendor/autoload.php';

use APIVerve\Wordscramble\Client;

// Initialize the client
$client = new Client('YOUR_API_KEY');

// Make a request
$response = $client->execute([
    'difficulty' => 'medium',
    'count' => 5,
    'image' => true
]);

// Print the response
print_r($response);
```


### Error Handling

```php
use APIVerve\Wordscramble\Client;
use APIVerve\Wordscramble\Exceptions\APIException;
use APIVerve\Wordscramble\Exceptions\ValidationException;

try {
    $response = $client->execute(['difficulty' => 'medium', 'count' => 5, 'image' => true]);
    print_r($response['data']);
} catch (ValidationException $e) {
    echo "Validation error: " . implode(', ', $e->getErrors());
} catch (APIException $e) {
    echo "API error: " . $e->getMessage();
    echo "Status code: " . $e->getStatusCode();
}
```

### Debug Mode

```php
// Enable debug logging
$client = new Client(
    apiKey: 'YOUR_API_KEY',
    debug: true
);
```

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

## Requirements

- PHP 7.4 or higher
- Guzzle HTTP client

## Documentation

For more information, visit the [API Documentation](https://docs.apiverve.com/ref/wordscramble?utm_source=packagist&utm_medium=referral&utm_content=readme).

## Support

- Website: [https://apiverve.com/marketplace/wordscramble?utm_source=php&utm_medium=referral&utm_content=readme](https://apiverve.com/marketplace/wordscramble?utm_source=php&utm_medium=referral&utm_content=readme)
- Email: hello@apiverve.com

## License

This package is available under the [MIT License](LICENSE).
