import { morseCodePartOne } from "./morseCodePartOne";

export default function moseCodePartOneRequestHandler({ morseCode }: {morseCode:string}) {
  if (!morseCode) {
    return "";
  }

  return morseCodePartOne.process(morseCode);
}
