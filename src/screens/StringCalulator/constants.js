export const examples = [
  {
    input: "",
    output: "0",
    title: "Empty string"
  },
  {
    input: "1",
    output: "1",
    title: "Single number"
  },
  {
    input: "1,5",
    output: "6",
    title: "Two numbers"
  },
  {
    input: "1,2,3,4,5",
    output: "15",
    title: "Multiple numbers"
  },
  {
    input: "1\\n2,3",
    output: "6",
    title: "New lines and commas"
  },
  {
    input: "//;\\n1;2",
    output: "3",
    title: "Custom delimiter"
  },
  {
    input: "-1,2",
    output: "Error: negative numbers not allowed: -1",
    title: "Negative numbers"
  }
];
