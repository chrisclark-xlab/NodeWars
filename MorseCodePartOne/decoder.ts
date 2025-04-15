import MorseCodeMap from "./MorseCodeMap";

export class decoder {
    static decode(input:string): string {
        const mappedInput = MorseCodeMap[input];
        return mappedInput;
    }
}