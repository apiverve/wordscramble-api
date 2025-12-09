declare module '@apiverve/wordscramble' {
  export interface wordscrambleOptions {
    api_key: string;
    secure?: boolean;
  }

  export interface wordscrambleResponse {
    status: string;
    error: string | null;
    data: WordScrambleGeneratorData;
    code?: number;
  }


  interface WordScrambleGeneratorData {
      puzzles:    Puzzle[];
      count:      number;
      difficulty: string;
      html:       string;
  }
  
  interface Puzzle {
      scrambled:   string;
      answer:      string;
      letterCount: number;
      hint:        string;
  }

  export default class wordscrambleWrapper {
    constructor(options: wordscrambleOptions);

    execute(callback: (error: any, data: wordscrambleResponse | null) => void): Promise<wordscrambleResponse>;
    execute(query: Record<string, any>, callback: (error: any, data: wordscrambleResponse | null) => void): Promise<wordscrambleResponse>;
    execute(query?: Record<string, any>): Promise<wordscrambleResponse>;
  }
}
