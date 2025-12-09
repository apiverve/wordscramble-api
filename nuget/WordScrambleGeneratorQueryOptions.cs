using System;
using System.Collections.Generic;
using System.Text;
using Newtonsoft.Json;

namespace APIVerve.API.WordScrambleGenerator
{
    /// <summary>
    /// Query options for the Word Scramble Generator API
    /// </summary>
    public class WordScrambleGeneratorQueryOptions
    {
        /// <summary>
        /// Number of puzzles (1-20)
        /// Example: 5
        /// </summary>
        [JsonProperty("count")]
        public string Count { get; set; }

        /// <summary>
        /// Difficulty: easy, medium, hard (affects word length)
        /// Example: medium
        /// </summary>
        [JsonProperty("difficulty")]
        public string Difficulty { get; set; }
    }
}
