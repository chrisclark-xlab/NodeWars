import { highAndLow } from "./highAndLow";

export default function highAndLowRequestHandler({ numbers } : {numbers:string}) {
  if (!numbers) {
    return "";
  }

  return highAndLow.process(numbers);
}
