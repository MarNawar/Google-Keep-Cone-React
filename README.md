# Keep Clone

This is a simple application built with React to mimic the functionality of note-taking apps like Google Keep.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Setup](#setup)
- [Usage](#usage)
- [File Structure](#file-structure)
- [Contributing](#contributing)
- [License](#license)

## Overview

The Keep Clone app allows users to create, manage, and organize notes. It provides functionalities to add, edit, delete notes, change layouts, toggle color schemes, and search notes.

## Features

- Create and manage notes
- Edit and delete notes
- Toggle between grid and list layouts
- Search notes by title or content
- Customizable note color


## Prerequisites

List any prerequisites or dependencies that need to be installed before running the application. Include links or instructions for where to obtain these dependencies.

## Installation

Step-by-step instructions on how to install and set up the project locally. Include commands or configuration needed to get the application running.

- **Clone the repository**: git clone https://github.com/MarNawar/Google-Keep-Cone-React/tree/main/src

- **Change to the project directory**: cd '.\Google Keep Clone\'

- **Install dependencies**: npm install

- **Run Locally in Browser**: npm run dev

## Setup

### Global Context and State Management
- **GlobalContext.js**: Implemented a global context using React's Context API to manage shared state across components. The context (`NoteContext`) provides access to the `notesState`, `notesDispatch`, `uiState`, `uiDispatch`, `addNote`, `updateNote`, `deleteNote`, and `filterBySearchQuery` methods. 
- **GlobalReducers.js**: Contains reducers (`NoteReducer` and `uiReducer`) for managing state updates based on actions dispatched in the context.

### Components

- **App.js**: Organizes the main structure of the app by rendering essential components (`Nav`, `Sidebar`, `Input`, `Notes`) using a fragment (`<>...</>`). Improves readability by using explicit component names.
- **Nav.js**: Represents the navigation bar at the top of the application. Includes buttons for toggling the sidebar, a search input for filtering notes, and a button to change the layout (grid or list view).
- **Sidebar.js**: Renders a sidebar menu displaying different note-related options such as Notes, Reminder, Archive, and Trash. It adjusts its appearance based on the sidebar state (`full` or `half`).
- **Notes.js**: Displays notes either in a grid or list layout based on the `uiState.layout` value. Filters and displays notes based on the search query provided in the `NotesContext`.
- **Input.js**: Renders a form to input new note details, allowing users to set a title, note content, and choose a color. Includes a button to toggle the color picker.

### Custom Hook

- **useLocalStorage.js**: Provides a custom hook `useLocalStorage` to handle state persistence in `localStorage`. It takes a key and initial value and returns a stateful value and a function to update the value in `localStorage`.

### Improvements in Readability

- **Comments**: Added comments in each file to describe the purpose of components, their functionalities, and the flow of data between them. These comments help developers understand the code's structure and intention quickly.
- **Component Segregation**: Separated different functionalities into discrete components, making the code modular and easy to manage.
- **Consistent Naming Conventions**: Used consistent and meaningful names for components, variables, and functions to maintain code clarity and readability.

