import React from "react";
import { Form, Result } from "../containers";
import { stringCalculatorStyles } from "./styles";

const StringCalculator = () => {
   const { container, card, header, title, subtitle, content } = stringCalculatorStyles;

   return (
      <div style={container}>
         <div style={card}>
            <div style={header}>
               <h2 style={title}>String Calculator - TDD Kata</h2>
               <h3 style={subtitle}>Incubyte Assessment by Saundarya Prakash</h3>
            </div>
            <div style={content}>
               <Form />
               <Result />
            </div>
         </div>
      </div>
   );
};

export default StringCalculator;
