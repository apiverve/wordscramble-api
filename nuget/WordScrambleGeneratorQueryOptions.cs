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
        /// Difficulty level (affects word length)
        /// </summary>
        [JsonProperty("difficulty")]
        public string Difficulty { get; set; }

        /// <summary>
        /// Number of puzzles
        /// </summary>
        [JsonProperty("count")]
        public int? Count { get; set; }

        /// <summary>
        /// Set to true to generate a downloadable puzzle image
        /// </summary>
        [JsonProperty("image")]
        public bool? Image { get; set; }
    }
}
