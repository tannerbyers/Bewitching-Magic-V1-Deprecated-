import { removeDuplicatesFromItems } from '../helper/JSON/removeDuplicates'; // Replace with the actual path to your helper file

describe('removeDuplicatesFromItems function', () => {
  it('removes duplicates based on the "name" property', () => {
    const inputData = {
      items: [
        { name: 'A', link: 'http://example.com/a' },
        { name: 'B', link: 'http://example.com/b' },
        { name: 'A', link: 'http://example.com/c' },
        { name: 'C', link: 'http://example.com/d' },
      ],
    };

    const expectedResult = {
      items: [
        { name: 'A', link: 'http://example.com/a' },
        { name: 'B', link: 'http://example.com/b' },
        { name: 'C', link: 'http://example.com/d' },
      ],
    };

    const result = removeDuplicatesFromItems(inputData);
    expect(result).toEqual(expectedResult);
  });

  it('handles an empty input', () => {
    const inputData = {
      items: [],
    };

    const result = removeDuplicatesFromItems(inputData);
    expect(result).toEqual(inputData); // Should return the same empty object
  });
});
