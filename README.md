# task-manager-board

## Task Board

A dynamic and interactive Kanban-style task management application designed to help users efficiently organize and prioritize their tasks. This app allows users to create tasks, set deadlines, and move tasks between different stages of progress. Tasks are stored locally to ensure that data is preserved across sessions.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Concepts Covered](#concepts-covered)
- [Learning Objectives](#learning-objectives)
- [Future Improvements](#future-improvements)
- [Summary](#summary)

## Overview

Task Board is a web-based application that offers a clean and intuitive interface for managing tasks in a visual way. Inspired by the Kanban method, it provides a simple drag-and-drop functionality for moving tasks between columns such as "To Do," "In Progress," and "Done." The app dynamically updates the task board, and each task is color-coded based on its deadline status to help users stay on track.

## Features

- **Add Tasks**: Use the modal form to input task details, including the title, description, and deadline.
- **Drag-and-Drop Functionality**: Move tasks between different columns ("To Do," "In Progress," and "Done") using a smooth drag-and-drop interface.
- **Deadline Styling**: Tasks are color-coded (red, yellow, green) based on their proximity to their deadlines.
- **Persistent Storage**: Tasks and IDs are saved in local storage, ensuring data is retained across browser sessions.
- **Delete Tasks**: Remove tasks easily using the delete button on each task card.
- **Responsive Design**: Utilizes Bootstrap for a mobile-friendly and responsive user interface.

## Technologies Used

- **JavaScript**: Core scripting language for dynamic functionality.
- **jQuery & jQuery UI**: Provides a simplified API for JavaScript and enables drag-and-drop and date picker functionality.
- **Bootstrap**: Used for styling, modals, and responsive design.
- **HTML5/CSS3**: Markup and styles for the overall layout and design.
- **LocalStorage**: Browser-based storage to persist tasks across sessions.

## Concepts Covered

- **JavaScript DOM Manipulation**: Dynamically updating the DOM to reflect task states and changes.
- **Event Handling with jQuery**: Implementing drag-and-drop interactions and form handling.
- **Responsive UI Design**: Creating a mobile-friendly interface using Bootstrap components.
- **Data Persistence**: Utilizing local storage to maintain data across sessions.
- **CSS Styling for Dynamic Content**: Applying styles dynamically based on real-time data like task deadlines.

## Learning Objectives

1. Understand how to dynamically manipulate the DOM using JavaScript and jQuery.
2. Learn how to implement drag-and-drop functionality using jQuery UI.
3. Gain experience with using Bootstrap for responsive and accessible design.
4. Explore methods for storing and retrieving data from localStorage.
5. Practice creating dynamic styles with CSS based on real-time data.

## Future Improvements

- **User Authentication**: Enable multiple users to maintain their own task boards.
- **Task Editing**: Allow users to edit existing tasks instead of only deleting them.
- **Due Date Notifications**: Implement reminders or notifications for approaching deadlines.
- **Dark Mode**: Add a dark mode option for better usability in low-light environments.

## Summary

Task Manager Board is a dynamic browser-based application for project teams to organize and track tasks. Built with HTML, CSS, JavaScript, and jQuery, it features task creation, progress tracking, drag-and-drop management, and data persistence using Day.js and localStorage

https://brockaltug.github.io/task-manager-board/
