import fs from 'fs';
import { writeJsonFile } from '../helper/JSON/writeJsonFile'; // Replace with the actual path to your helper file

// Mock the fs.writeFile function to prevent actual file writes
jest.mock('fs', () => ({
    writeFile: jest.fn(),
}));

describe('writeJsonFile function', () => {
    afterEach(() => {
        jest.clearAllMocks();
    });

    it('writes JSON data to a file', () => {
        const filePath = 'output.json';
        const dataToWrite = {
            name: 'John Doe',
            age: 30,
            email: 'johndoe@example.com',
        };

        writeJsonFile({ filePath, data: dataToWrite });

        expect(fs.writeFile).toHaveBeenCalledWith(
            filePath,
            JSON.stringify(dataToWrite, null, 2),
            'utf8',
            expect.any(Function)
        );
    });

    // TODO this shouldn't happen but tests are always nice to have for assurance
    // it('handles errors during file write', () => {
    // I need to test this but dont want to spend the time right now to figure out how to simulate file write failure
    //  });
});
