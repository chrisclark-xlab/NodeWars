import { decoder } from "./decoder";

export class morseCodePartOne {
    static process(inputString: string) {
      const decodedString =  this.decodeWords(inputString);
      return decodedString;
    }

    static decodeWords(inputString:string) {
      return inputString.split('   ')
      .map(s => this.decodeCharacters(s))
      .filter(s => s)
      .join(' ');
    }

    static decodeCharacters(inputString:string) {
      return inputString.split(' ')
      .map(s => decoder.decode(s))
      .join('');
    }
  }