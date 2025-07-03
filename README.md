# restful-opposition
Creando App RESTful-API en Node.js y Mondodb, ayuda de Github Copilet en VSCode

## API Endpoints from Books
- **GET /api/books** - Retrieve all books.

## Example API Endpoints

- **GET /api/users** - Retrieve all users.
- **POST /api/users** - Create a new user.
- **GET /api/questions/materia/:materia** - Retrieve questions by `materia`.
- **GET /api/questions/programa/:programa** - Retrieve questions by `programa`.
- **GET /api/questions/examen/:examen** - Retrieve questions by `examen`.

This structure is modular and scalable, making it easy to add more resources in the future.

### Usage Example

To query questions by `materia`, send a GET request to the following endpoint:

```
GET /api/questions/materia/sql?limit=5
```

Replace `sql` with the desired `materia` value. The optional `limit` query parameter specifies the maximum number of questions to return. For example, `limit=5` will return up to 5 questions.

To retrieve random questions by `materia`, use the `random=true` query parameter:

```
GET /api/questions/materia/sql?random=true&limit=5
```

This will return up to 5 random questions where the `materia` field matches the value `sql`.

## Access-Control-Allow-Origin (CORS)

The error indicates that the browser is blocking the request due to the server not allowing Cross-Origin Resource Sharing (CORS). To fix this, you need to enable CORS on your server.

### Steps to Fix:
1. Install the `cors` middleware in your Node.js application.
2. Configure the server to allow requests from the desired origin(s).

### [app.js](file:///home/zodd/Documentos/%40Documentos/Master2024/curso%202024/2595_MEAN_ALUMNOS/MEAN/05_MEAN/04_Oposicion/restful-opposition/app.js)

Add and configure the `cors` middleware.

```javascript
require('dotenv').config(); // Ensure this line is at the top of the file
const express = require('express');
const cors = require('cors'); // Import the CORS middleware
const mongoose = require('mongoose');
const dbConfig = require('./src/config/db');
const userRoutes = require('./src/routes/userRoutes');
const questionRoutes = require('./src/routes/questionRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors()); // Enable CORS for all origins
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Connect to MongoDB
dbConfig();

// Set up routes
app.use('/api', userRoutes);
app.use('/api', questionRoutes); // Add question routes

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
```

### Explanation:
- **`cors` Middleware**: The `cors` middleware automatically adds the `Access-Control-Allow-Origin` header to your responses, allowing cross-origin requests.
- **Default Configuration**: By default, `app.use(cors())` allows requests from any origin. You can restrict it to specific origins if needed.

### Install `cors`:
Run the following command in your project directory to install the `cors` package:
```bash
npm install cors
```

### Optional: Restrict CORS to Specific Origins
If you want to allow only specific origins (e.g., `http://127.0.0.1:5500`), configure `cors` like this:
```javascript
app.use(cors({
    origin: 'http://127.0.0.1:5500'
}));
```

After making these changes, restart your server, and the CORS error should be resolved.

Made changes.
