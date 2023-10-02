import * as fs from 'fs';
import { InputData } from '../types/Items'; // Import the necessary type definition
import { removeDuplicatesFromItems } from '../helper/JSON/removeDuplicates.ts';
import { writeJsonFile } from '../helper/JSON/writeJsonFile.ts';

// Define the type for the JSON objects
interface JsonObject {
  [key: string]: any;
}

// Specify the path to your JSON files
const moonPhaseFilePath = './content/moonPhases.json';
const itemsFilePath = './content/items.json';

// Read and process the moonPhase JSON file
fs.readFile(moonPhaseFilePath, 'utf8', (err, data) => {
  console.log(`Attempting to read: ${moonPhaseFilePath}`);

  if (err) {
    console.error(`Error reading the file: ${err}`);
    return;
  }

  console.log(`Successfully read file: ${moonPhaseFilePath}`);

  try {
    // Parse the JSON data into a JavaScript object
    const jsonObject: JsonObject = JSON.parse(data);

    console.log(JSON.stringify({ parsedData: jsonObject }));

    // Now you can access the data as a regular JavaScript object
  } catch (parseError) {
    console.error(`Error parsing JSON: ${parseError}`);
  }
});

// Read, deduplicate, and write the items JSON file
fs.readFile(itemsFilePath, 'utf8', (err, data) => {
  console.log(`Attempting to read: ${itemsFilePath}`);

  if (err) {
    console.error(`Error reading the file: ${err}`);
    return;
  }
  console.log(`Successfully read file: ${itemsFilePath}`);

  try {
    // Parse the JSON data into a JavaScript object
    const jsonObject: InputData = JSON.parse(data);

    console.log(JSON.stringify({ parsedData: jsonObject }));

    const dedupedItemsData = removeDuplicatesFromItems(jsonObject);

    writeJsonFile({ filePath: itemsFilePath, data: dedupedItemsData });

    // Now you can access the data as a regular JavaScript object
  } catch (parseError) {
    console.error(`Error parsing JSON: ${parseError}`);
  }
});
