import React from "react";
import { formStyles } from "./styles";

const Form = () => {
   const { container, formBox, heading, subheading, inputGroup, label, input, button } = formStyles;

   return (
      <div style={container}>
         <div style={formBox}>
            <h2 style={heading}>String Calculator</h2>
            <p style={subheading}>Enter a string of numbers to calculate their sum</p>

            <form style={{ marginTop: "25px" }}>
               <div style={inputGroup}>
                  <label htmlFor="inputString" style={label}>
                     Enter numbers string:
                  </label>
                  <input
                     type="text"
                     id="inputString"
                     style={input}
                     placeholder='e.g., "1,2,3" or "//;\n1;2" or "1\n2,3"'
                  />
               </div>
               <button type="submit" style={button}>
                  Calculate
               </button>
            </form>
         </div>
      </div>
   );
};

export default Form;
