# restful-opposition
Creando App RESTful-API en Node.js y Mondodb, ayuda de Github Copilet en VSCode

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
