import { add } from '../helper';

describe('String Calculator TDD Kata', () => {
  
  // Step 1a: TDD - Empty string test ✅
  test('should return 0 for empty string', () => {
    expect(add("")).toBe(0);
  });

});
