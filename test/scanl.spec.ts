import { scanl } from '../src/scanl';
import { expect } from 'chai';

describe('Prelude', function() {
  const xs = [1, 2, 3, 4, 5];

  describe('scanl', function() {
    it('Should scan an array of numbers using the add function', function() {
      const actual = scanl((x, y) => x + y, 0, xs);
      const expected = [0, 1, 3, 6, 10, 15];

      expect(actual).to.eql(expected);
    });

    it('Should scan an array of numbers using the multiply function', function() {
      const actual = scanl((x, y) => x * y, 1, xs);
      const expected = [1, 1, 2, 6, 24, 120];

      expect(actual).to.eql(expected);
    });

    it('Should return an empty array if the input array is empty', function() {
      const actual = scanl((x, y) => x + y, 0, []);
      const expected = [];

      expect(actual).to.eql(expected);
    });

    it('Should throw an error when inputs are not supplied', function() {
      expect(() => scanl(undefined, 0, [])).to.throw();
      expect(() => scanl(_ => _, undefined, [])).to.throw();
      expect(() => scanl(_ => _, 0, undefined)).to.throw();
      expect(scanl).to.throw();
    });
  });
});
