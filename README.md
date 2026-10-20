# [Word Scramble Generator API](https://apiverve.com/marketplace/wordscramble?utm_source&#x3D;github&amp;utm_medium&#x3D;referral&amp;utm_content&#x3D;readme)

Word Scramble Generator is a scramble word API that creates puzzles where players unscramble letters to form words, returning each scrambled sequence with its answer and letter count.

The Word Scramble Generator API provides a simple, reliable way to integrate word scramble generator functionality into your applications. Built for developers who need production-ready word scramble generator capabilities without the complexity of building from scratch.

**[View API Details →](https://apiverve.com/marketplace/wordscramble?utm_source&#x3D;github&amp;utm_medium&#x3D;referral&amp;utm_content&#x3D;readme)**

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![API Status](https://img.shields.io/badge/Status-Active-green.svg)](https://apiverve.com/marketplace/wordscramble?utm_source&#x3D;github&amp;utm_medium&#x3D;referral&amp;utm_content&#x3D;readme)
[![Method](https://img.shields.io/badge/Method-GET-blue.svg)](#)
[![Platform](https://img.shields.io/badge/Platform-Multi--Platform-orange.svg)](#installation)

**Available on:**
[![npm](https://img.shields.io/badge/npm-CB3837?style=flat&logo=npm&logoColor=white)](https://www.npmjs.com/package/@apiverve/wordscramble)
[![NuGet](https://img.shields.io/badge/NuGet-004880?style=flat&logo=nuget&logoColor=white)](https://www.nuget.org/packages/APIVerve.API.WordScrambleGenerator)
[![PyPI](https://img.shields.io/badge/PyPI-3776AB?style=flat&logo=python&logoColor=white)](https://pypi.org/project/apiverve-wordscramble/)
[![RubyGems](https://img.shields.io/badge/RubyGems-E9573F?style=flat&logo=rubygems&logoColor=white)](https://rubygems.org/gems/apiverve_wordscramble)
[![Packagist](https://img.shields.io/badge/Packagist-F28D1A?style=flat&logo=packagist&logoColor=white)](https://packagist.org/packages/apiverve/wordscramble)
[![Go](https://img.shields.io/badge/Go-00ADD8?style=flat&logo=go&logoColor=white)](#-go)
[![Dart](https://img.shields.io/badge/Dart-0175C2?style=flat&logo=dart&logoColor=white)](https://pub.dev/packages/apiverve_wordscramble)
[![JitPack](https://img.shields.io/badge/JitPack-2E7D32?style=flat&logo=android&logoColor=white)](#-android-jitpack)

---

## Quick Start

### Using JavaScript

```javascript
async function callWordScrambleGeneratorAPI() {
    try {
        const params = new URLSearchParams({
            difficulty: 'medium'
        });

        const response = await fetch(`https://api.apiverve.com/v1/wordscramble?${params}`, {
            method: 'GET',
            headers: {
                'x-api-key': 'YOUR_API_KEY_HERE'
            }
        });

        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Error:', error);
    }
}

callWordScrambleGeneratorAPI();
```

### Using cURL

```bash
curl -X GET "https://api.apiverve.com/v1/wordscramble?difficulty=medium" \
  -H "x-api-key: YOUR_API_KEY_HERE"
```

**Get your API key:** [https://apiverve.com](https://apiverve.com)

**📁 For more examples, see the [examples folder](./examples/)**

---

## Installation

Choose your preferred programming language:

### 📦 NPM (JavaScript/Node.js)

```bash
npm install @apiverve/wordscramble
```

[**View NPM Package →**](https://www.npmjs.com/package/@apiverve/wordscramble) | [**Package Code →**](./npm/)

---

### 🔷 NuGet (.NET/C#)

```bash
dotnet add package APIVerve.API.WordScrambleGenerator
```

[**View NuGet Package →**](https://www.nuget.org/packages/APIVerve.API.WordScrambleGenerator) | [**Package Code →**](./nuget/)

---

### 🐍 Python (PyPI)

```bash
pip install apiverve-wordscramble
```

[**View PyPI Package →**](https://pypi.org/project/apiverve-wordscramble/) | [**Package Code →**](./python/)

---

### 💎 Ruby (RubyGems)

```bash
gem install apiverve_wordscramble
```

[**View RubyGems Package →**](https://rubygems.org/gems/apiverve_wordscramble) | [**Package Code →**](./ruby/)

---

### 🐘 PHP (Packagist)

```bash
composer require apiverve/wordscramble
```

[**View Packagist Package →**](https://packagist.org/packages/apiverve/wordscramble) | [**Package Code →**](./php/)

---

### 🎯 Dart (pub.dev)

```bash
dart pub add apiverve_wordscramble
```

[**View pub.dev Package →**](https://pub.dev/packages/apiverve_wordscramble) | [**Package Code →**](./dart/)

---

### 🤖 Android (JitPack)

```gradle
implementation 'com.github.apiverve:wordscramble-api:1.0.0'
```

[**Package Code →**](./android/)

---

### 🐹 Go

```bash
go get github.com/apiverve/wordscramble-api/go
```

[**Package Code →**](./go/)

---

## Why Use This API?

| Feature | Benefit |
|---------|---------|
| **Multi-language SDKs** | Native packages for JavaScript, Python, C#, Go, and Android |
| **Simple Integration** | Single API key authentication, consistent response format |
| **Production Ready** | 99.9% uptime SLA, served from 24 global regions |
| **Comprehensive Docs** | Full examples, OpenAPI spec, and dedicated support |

---

## Documentation

- 🏠 **API Home:** [Word Scramble Generator API](https://apiverve.com/marketplace/wordscramble?utm_source&#x3D;github&amp;utm_medium&#x3D;referral&amp;utm_content&#x3D;readme)
- 📚 **API Reference:** [docs.apiverve.com/ref/wordscramble](https://docs.apiverve.com/ref/wordscramble)
- 📖 **OpenAPI Spec:** [openapi.yaml](./openapi.yaml)
- 💡 **Examples:** [examples/](./examples/)

---

## What Can You Build?

The Word Scramble Generator API is commonly used for:

- **Web Applications** - Add word scramble generator features to your frontend or backend
- **Mobile Apps** - Native SDKs for Android development
- **Automation** - Integrate with n8n, Zapier, or custom workflows
- **SaaS Products** - Enhance your product with word scramble generator capabilities
- **Data Pipelines** - Process and analyze data at scale

---

## API Reference

### Authentication
All requests require an API key in the header:
```
x-api-key: YOUR_API_KEY_HERE
```

Get your API key: [https://apiverve.com](https://apiverve.com)

### Response Format

Every APIVerve endpoint returns the same envelope — check `status`, then read `data`:

```json
{
  "status": "ok",
  "error": null,
  "data": { ... }
}
```

### Example Response

A real response from the Word Scramble Generator API:

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

## Support & Community

- 🏠 **API Home**: [Word Scramble Generator API](https://apiverve.com/marketplace/wordscramble?utm_source&#x3D;github&amp;utm_medium&#x3D;referral&amp;utm_content&#x3D;readme)
- 💬 **Support**: [https://apiverve.com/contact](https://apiverve.com/contact)
- 🐛 **Issues**: [GitHub Issues](../../issues)
- 📖 **Documentation**: [https://docs.apiverve.com](https://docs.apiverve.com)
- 🌐 **Website**: [https://apiverve.com](https://apiverve.com)

---

## Contributing

We welcome contributions! Please see [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.

---

## Security

For security concerns, please review our [Security Policy](SECURITY.md).

---

## License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

---

## Acknowledgments

Built with ❤️ by [APIVerve](https://apiverve.com)

Copyright © 2026 APIVerve. All rights reserved.
