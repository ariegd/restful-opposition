# restful-opposition
Creando App RESTful-API en Node.js y Mondodb, ayuda de Github Copilet en VSCode

## Example API Endpoints

- **GET /api/users** - Retrieve all users.
- **POST /api/users** - Create a new user.
- **GET /api/questions/materia/:materia** - Retrieve questions by `materia`.

This structure is modular and scalable, making it easy to add more resources in the future.

### Usage Example

To query questions by `materia`, send a GET request to the following endpoint:

```
GET /api/questions/materia/sql
```

Replace `sql` with the desired `materia` value. This will return all questions where the `materia` field matches the value.
