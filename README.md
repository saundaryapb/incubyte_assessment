# Incubyte TDD Assessment - String Calculator

This repository contains my implementation of the String Calculator Kata using Test-Driven Development (TDD) for the Incubyte Software Craftsperson - React (3+) role assessment.

## About the Assessment

The assessment requires implementing a String Calculator following TDD principles. The calculator should handle:

1. Empty strings
2. Single numbers
3. Two numbers separated by commas
4. Any amount of numbers
5. New lines between numbers (instead of commas)
6. Different delimiters
7. Negative number validation

## Project Structure

```
src/
├── App.css                         # Global styling and Inter font imports
├── App.js                          # Main app component
├── index.js                        # Entry point
├── setupTests.js                   # Test setup configuration
└── screens/
    ├── index.js                    # Screen exports
    └── StringCalulator/
        ├── index.js                # String Calculator screen export
        ├── helper.js               # Pure business logic functions for TDD
        ├── styles.js               # Centralized styling definitions
        ├── constants.js            # Static data and examples
        ├── __tests__/
        │   └── stringCalculator.test.js # TDD test suite
        ├── components/             # Presentational components
        │   ├── index.js            # Component exports
        │   ├── Form.js             # Input form UI component
        │   ├── Result.js           # Result display UI component
        │   ├── StringCalculator.js # Main calculator UI component
        │   └── styles.js           # Component-specific styles
        └── containers/             # Smart components with business logic
            ├── index.js            # Container exports
            ├── Form.js             # Form container with state logic
            ├── Result.js           # Result container logic
            └── StringCalculator.js # Main calculator container
            ├── Form.js          # Form container logic
            ├── Result.js        # Result container logic
            └── StringCalculator.js # Calculator container
```

## TDD Approach

This project follows strict TDD principles:
- **Red**: Write a failing test
- **Green**: Write minimum code to make the test pass
- **Refactor**: Improve the code while keeping tests green

Each commit represents a step in the TDD cycle, showing the evolution of the code.

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd incubyte-tdd-string-calculator
```

2. Install dependencies:
```bash
npm install
```

3. Run tests:
```bash
npm test
```

4. Run the application:
```bash
npm start
```

### Running Tests

- **Run all tests**: `npm test`
- **Run tests with coverage**: `npm run test:coverage`
- **Run tests in watch mode**: `npm run test:watch`

## Implementation Progress

- [x] **Step 1a**: Handle empty string (returns 0)
- [x] **Step 1b**: Handle single number (returns the number itself)
- [x] **Step 1c**: Handle two comma-separated numbers
- [x] **Step 2**: Handle any amount of numbers
- [x] **Step 3**: Handle new lines between numbers
- [x] **Step 4**: Support different delimiters
- [x] **Step 5**: Negative number validation

### Current TDD Status
**🎉 COMPLETED!** All requirements implemented following strict TDD principles:
- ✅ **All Tests Passing**: 6/6 tests pass
- ✅ **Full Coverage**: Empty strings, single/multiple numbers, newlines, custom delimiters, negative validation
- ✅ **UI Compatible**: Handles both actual newlines (tests) and literal `\n` strings (UI input)
- ✅ **Error Handling**: Comprehensive validation and user-friendly error messages

## Key Features

- **Pure TDD Implementation**: Every feature is test-driven
- **React UI**: Interactive interface to test the calculator
- **Comprehensive Test Coverage**: All edge cases covered
- **Clean Code**: Following software craftsmanship principles
- **Git History**: Each commit shows TDD progression

## Test Cases Covered

- Empty string returns 0
- Single number returns the number itself
- Two comma-separated numbers return their sum
- Multiple numbers return their sum
- Numbers separated by newlines
- Custom delimiters
- Negative number validation with descriptive error messages
- Multiple negative numbers handling

## Technologies Used

- **React**: Frontend framework
- **Jest**: Testing framework
- **React Testing Library**: Component testing utilities
- **ES6+**: Modern JavaScript features

## Author

**Saundarya Prakash**
- Applied for: Software Craftsperson - React (3+) at Incubyte
- Focus: TDD, Clean Code, Software Craftsmanship

## License

MIT License - see LICENSE file for details

---

*This project demonstrates my commitment to Test-Driven Development and software craftsmanship principles valued at Incubyte.*
