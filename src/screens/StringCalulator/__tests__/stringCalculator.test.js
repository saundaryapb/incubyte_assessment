import { add } from "../helper";

describe("String Calculator TDD Kata", () => {
   test("should return 0 for empty string", () => {
      expect(add("")).toBe(0);
   });

   test("should return the number itself for single number", () => {
      expect(add("5")).toBe(5);
   });

   test("should return the sum for two or more comma-separated numbers", () => {
      expect(add("1,2")).toBe(3);
      expect(add("5,10,15")).toBe(30);
   });

   test("should handle new lines and commas", () => {
      expect(add("1\n2,3")).toBe(6);
      expect(add("4\n5\n6")).toBe(15);
   });
   test("should handle custom delimiters", () => {
      expect(add("//;\n1;2;3")).toBe(6);
      expect(add("//;\n1;2")).toBe(3);
      expect(add("//;\n1;")).toBe(1);
      expect(add("//|\n4|5|6")).toBe(15);
   });

   test("should throw error for negative numbers", () => {
      expect(() => add("-1,2")).toThrow("negative numbers not allowed -1");
      expect(() => add("5,-10,15")).toThrow("negative numbers not allowed -10");
      expect(() => add("-5")).toThrow("negative numbers not allowed -5");
      expect(() => add("1\n-2,3")).toThrow("negative numbers not allowed -2");
      expect(() => add("//;\n1;-2;3")).toThrow("negative numbers not allowed -2");
      expect(() => add("-1,-2,-3")).toThrow("negative numbers not allowed -1,-2,-3");
   });
});
