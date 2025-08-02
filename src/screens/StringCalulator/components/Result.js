import React from "react";
import { resultStyles } from "./styles";
import { examples } from "../constants";

const Result = ({ result = 0 }) => {
   const {
      container,
      resultBox,
      resultHeading,
      resultValue,
      examplesBox,
      examplesTitle,
      exampleItem,
      exampleDescription,
   } = resultStyles;

   return (
      <div style={container}>
         <div style={resultBox}>
            <h3 style={resultHeading}>Calculation Result</h3>
            <p style={resultValue}>{result}</p>
         </div>

         <div style={examplesBox}>
            <h4 style={examplesTitle}>Examples</h4>
            {examples.map((example, index) => (
               <div key={index} style={exampleItem}>
                  Input: "{example.input}" → Output: {example.output}{" "}
                  <span style={exampleDescription}>{example.title}</span>
               </div>
            ))}
         </div>
      </div>
   );
};

export default Result;
