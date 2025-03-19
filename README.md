# Note-ify

Note-ify is a simple note-making web application designed to practice the integration of a React frontend with a Django backend. The application allows users to register, log in, and perform basic CRUD (Create, Read, Update, Delete) operations on notes unique to each user.

## Features

- **User Registration**: New users can create an account by providing a username and password.
- **User Login**: Registered users can log in with their credentials.
- **CRUD Operations**: Users can create, read, update, and delete notes that are unique to them.
- **Persistent Notes**: Notes are stored in a database, allowing users to view and manage their notes even after logging out.

## Tech Stack

- **Frontend**: React.js
- **Backend**: Django (with Django REST Framework)
- **Database**: SQLite (for simplicity, can be switched to PostgreSQL in production)
