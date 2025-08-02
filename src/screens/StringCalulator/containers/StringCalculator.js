import React, { useState, useCallback } from "react";
import { StringCalculatorComponent } from "../components";
import { add } from "../helper";

const StringCalculator = () => {
   const [value, setValue] = useState("");
   const [result, setResult] = useState(0);
   const [error, setError] = useState("");

   const handleSubmit = useCallback(
      (event) => {
         event.preventDefault();
         setError("");

         try {
            const calculatedResult = add(value);
            setResult(calculatedResult);
         } catch (err) {
            setError(err.message);
         }
      },
      [value]
   );

   const handleChange = useCallback((value) => {
      setValue(value);
   }, []);

   return (
      <StringCalculatorComponent
         value={value}
         result={result}
         error={error}
         handleSubmit={handleSubmit}
         handleChange={handleChange}
      />
   );
};

export default StringCalculator;
