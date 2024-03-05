import { test, expect} from '@jest/globals'

import { sum } from '.'

test("add two numbers", () => {
  expect(sum(3, 5)).toBe(8);
});