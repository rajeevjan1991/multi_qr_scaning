import { createWorker } from 'tesseract.js';
const converter = async (img : string) => {
    const worker = await createWorker('eng');
    //const ret = await worker.recognize('https://tesseract.projectnaptha.com/img/eng_bw.png');
    const ret = await worker.recognize(img);
    const text = ret.data.text;
    // console.log(ret.data.text);
    await worker.terminate();
    return text;
  };

  export default converter;