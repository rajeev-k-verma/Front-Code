# Front Code

Front Code is a code editor built using React and the `react-codemirror2` library. The editor allows users to write and edit HTML, CSS, and JavaScript code, and see the results of their code in real-time.

## Features

- Three separate editors for HTML, CSS, and JavaScript
- Live preview of the output
- Code is saved in local storage so that users can continue where they left off
- Customizable header with a logo and app name

## Components

The project consists of several components:

- `App.js`: The main component that renders the three editors and the live preview.
- `Editor.js`: A component that uses the `ControlledEditor` component from the `react-codemirror2` library to create an editor for editing code.
- `Header.js`: A component that displays a header with a logo and app name.
- `useLocalStorage.js`: A custom hook for getting and setting values in local storage.

## Usage

To use Front Code, simply type your HTML, CSS, and JavaScript code into the corresponding editors. The live preview will update automatically as you type.

You can also customize the header by changing the logo and app name. To do this, open the `Header.js` file and replace the `img` element with your own logo image, and update the content of the `span` element with the class `app-name` with your desired app name.

## Installation

To install Front Code, follow these steps:

1. Clone or download the repository to your local machine.
2. Navigate to the project directory and run `npm install` to install the dependencies.
3. Run `npm start` to start the development server.
4. Open your browser and navigate to `http://localhost:3000` to view Front Code.
