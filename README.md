﻿# Password Generator

This repository contains a password generator application built using React. It allows users to generate secure and customizable passwords with options to include numbers and special characters. The application features an interactive user interface and utilizes React's state management and hooks for functionality.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Components](#components)
- [Styling](#styling)
- [ Variables Used](variables-Used)
- [Customization](#customization)
- [Contributing](#contributing)

## Installation

To set up the project locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone  https://github.com/zamanmughal98/react-password-generator.git
   ```

2. Navigate to the project directory:

   ```bash
   cd password-generator

   ```

3. Install the dependencies:

   ```bash
   npm install

   ```

4. Start the application:

   ```bash
   npm run start

   ```

   The server will run on http://localhost:3000 by default.

## Usage

Once the app is running, you can use the password generator to create secure passwords of varying lengths. The interface provides sliders to adjust password length and checkboxes to include numbers and special characters in the generated password. Users can copy the generated password to their clipboard with a single click.nt.

## Components

### PasswordGenerator

The main component that handles the generation of passwords. It includes options to customize the password length and the inclusion of numbers and special characters.

### Slider

A reusable component that allows users to select the desired password length using a slider.

### Checkbox

A custom checkbox component used to toggle the inclusion of numbers and special characters in the password.

## Styling

The application uses custom CSS to style the components, with a focus on a modern and accessible design. The primary color theme is based on blueviolet for interactive elements.

Key styles include:

- **.passwordSection:** The main container for the password generator, styled with padding, border-radius, and a border to highlight the section.

- **.passwordField:** A styled input field displaying the generated password, with custom fonts, colors, and padding.

- **.copyMe:** A button to copy the generated password, featuring hover and active states with smooth transitions and scale effects.

- **.generateButton:** A button for re-generating passwords, with similar hover and active states.

The CSS file ensures that the application is visually appealing and maintains a consistent layout and design.

## Variables Used

- `--background-Color`: Defines the background color for various elements.
- `--primary-color`: Used for borders, buttons, and other interactive elements.
- `--font-color`: Specifies the font color for text elements.

## Customization

You can customize the appearance of the password generator by modifying the CSS classes or overriding the styles directly in the components.

#### Example customization:

```css
.copyMe {
  background-color: #6c2db6; /* Custom background color */
  border-radius: 12px; /* Custom border radius */
}
```

## Contributing

Feel free to fork this repository and contribute by submitting a pull request. Any contributions, whether it be bug fixes, new features, or improvements, are welcome.
