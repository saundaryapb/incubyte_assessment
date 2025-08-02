export const add = (numbers) => {
   // TDD Step for: Empty string returns 0
   if (!numbers || numbers === "") {
      return 0;
   }

   // TDD Step for: Single number returns the number itself
   if (!numbers.includes(",")) {
      const num = parseInt(numbers);
      if (isNaN(num)) {
         throw new Error("Invalid input: not a valid number");
      }
      return num;
   }

   // TDD Step for: Two or more comma-separated numbers return their sum
   if (numbers.includes(",")) {
      const numbersArray = numbers.split(",");
      let sum = 0;
      for (let numStr of numbersArray) {
         const num = parseInt(numStr);
         if (isNaN(num)) {
            throw new Error(`Invalid input: "${numStr}" is not a valid number`);
         }
         sum += num;
      }
      return sum;
   }

   // TODO: Add more functionality step by step following TDD
   throw new Error("Not implemented yet");
};
