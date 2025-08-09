import { sum } from "./index"; // ✅ Replaces require()

test("hello world!", () => {
  expect(sum(1, 1)).toBe(2);
});
