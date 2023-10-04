import fs from 'fs';

interface JsonFileWriterOptions {
  filePath: string;
  data: any;
}

export function writeJsonFile({ filePath, data }: JsonFileWriterOptions): void {
  const jsonData = JSON.stringify(data, null, 2);

  fs.writeFile(filePath, jsonData, 'utf8', (err) => {
    if (err) {
      console.error(`Error writing to file: ${err}`);
    } else {
      console.log(`Data has been written to ${filePath}`);
    }
  });
}