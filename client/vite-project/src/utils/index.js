import FileSaver from "file-saver";
import { surpriseMePrompts } from "../contants";

export function getRandomPrompt(prompt) {
  const random = Math.floor(Math.random() * surpriseMePrompts.length);

  console.log(surpriseMePrompts[random]);
  const randomPrompt = surpriseMePrompts[random];
  console.log(randomPrompt);

  return randomPrompt;
}

export async function downloadImage(_id, photo) {
  FileSaver.saveAs(photo, `download-${_id}.jpg`);
}
