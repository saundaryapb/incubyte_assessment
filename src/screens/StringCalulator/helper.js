// Helper function to check for negative numbers
const checkForNegatives = (numbersArray) => {
   const negatives = numbersArray
      .filter((numStr) => {
         const trimmed = numStr.trim();
         return trimmed !== "" && parseInt(trimmed) < 0;
      })
      .map((numStr) => numStr.trim());

   if (negatives.length > 0) {
      throw new Error(`negative numbers not allowed ${negatives.join(",")}`);
   }
};

export const add = (numbers) => {
   // TDD Step for: Empty string returns 0
   if (!numbers || numbers === "") {
      return 0;
   }

   // TDD Step for: Handle custom delimiters
   if (numbers.startsWith("//")) {
      const delimiter = numbers.charAt(2);
      let newlineIndex = numbers.indexOf("\n");
      if (newlineIndex === -1) {
         newlineIndex = numbers.indexOf("\\n");
         if (newlineIndex === -1) {
            throw new Error("Invalid custom delimiter format");
         }

         const numbersString = numbers.substring(newlineIndex + 2);
         const numbersArray = numbersString.split(delimiter);

         // Check for negative numbers
         checkForNegatives(numbersArray);

         let sum = 0;
         for (let numStr of numbersArray) {
            if (numStr.trim() === "") continue; // Skip empty strings
            const num = parseInt(numStr.trim());
            if (isNaN(num)) {
               throw new Error(`Invalid input: "${numStr.trim()}" is not a valid number`);
            }
            sum += num;
         }
         return sum;
      } else {
         const numbersString = numbers.substring(newlineIndex + 1);
         const numbersArray = numbersString.split(delimiter);

         // Check for negative numbers
         checkForNegatives(numbersArray);

         let sum = 0;
         for (let numStr of numbersArray) {
            if (numStr.trim() === "") continue; // Skip empty strings
            const num = parseInt(numStr.trim());
            if (isNaN(num)) {
               throw new Error(`Invalid input: "${numStr.trim()}" is not a valid number`);
            }
            sum += num;
         }
         return sum;
      }
   }

   // TDD Step for: Handle new lines and commas (handle both \n and \\n)
   if (numbers.includes("\n") || numbers.includes(",") || numbers.includes("\\n")) {
      // Replace literal \\n with actual newlines first
      const normalizedNumbers = numbers.replace(/\\n/g, "\n");
      const numbersArray = normalizedNumbers.split(/[\n,]+/);

      // Check for negative numbers
      checkForNegatives(numbersArray);

      let sum = 0;
      for (let numStr of numbersArray) {
         if (numStr.trim() === "") continue; // Skip empty strings
         const num = parseInt(numStr.trim());
         if (isNaN(num)) {
            throw new Error(`Invalid input: "${numStr}" is not a valid number`);
         }
         sum += num;
      }
      return sum;
   }

   // TDD Step for: Single number returns the number itself
   const num = parseInt(numbers);
   if (isNaN(num)) {
      throw new Error("Invalid input: not a valid number");
   }

   // Check for negative single number
   if (num < 0) {
      throw new Error(`negative numbers not allowed ${num}`);
   }

   return num;
};
