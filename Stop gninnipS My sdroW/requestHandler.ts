import spinWords from "./stopGnippips";

export default function stopGninnipSRequestHandler({ sentence }: {sentence:string}) {
  if (!sentence) {
    return "";
  }

  return spinWords(sentence);
}
