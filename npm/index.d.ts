declare module '@apiverve/wordscramble' {
  export interface wordscrambleOptions {
    api_key: string;
    secure?: boolean;
  }

  /**
   * Describes fields the current plan does not unlock. Locked fields arrive as null
   * in `data`; `locked_fields` names them, using dot paths for nested fields.
   * Absent when the plan unlocks everything.
   */
  export interface PremiumInfo {
    message: string;
    upgrade_url: string;
    locked_fields: string[];
  }

  export interface wordscrambleResponse {
    status: string;
    error: string | null;
    data: WordScrambleGeneratorData;
    code?: number;
    premium?: PremiumInfo;
  }


  interface WordScrambleGeneratorData {
      puzzles:    Puzzle[];
      count:      number | null;
      difficulty: null | string;
      html:       null | string;
      image:      Image;
  }
  
  interface Image {
      imageName:   null | string;
      format:      null | string;
      downloadURL: null | string;
      expires:     number | null;
  }
  
  interface Puzzle {
      scrambled:   null | string;
      answer:      null | string;
      letterCount: number | null;
  }

  export default class wordscrambleWrapper {
    constructor(options: wordscrambleOptions);

    execute(callback: (error: any, data: wordscrambleResponse | null) => void): Promise<wordscrambleResponse>;
    execute(query: Record<string, any>, callback: (error: any, data: wordscrambleResponse | null) => void): Promise<wordscrambleResponse>;
    execute(query?: Record<string, any>): Promise<wordscrambleResponse>;
  }
}
