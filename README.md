# FastAPI and React Data Validation

This project demonstrates data validation in a full-stack application using **FastAPI** with **Pydantic** on the backend and **Zod** on the frontend with React. The goal is to ensure data integrity and prevent invalid inputs from reaching the server.

## Features

- **FastAPI with Pydantic** for backend data validation
- **Zod with React** for frontend schema validation
- **Structured API responses with JSON**
- **Type safety and runtime validation** using TypeScript
- **Middleware integration** for enhanced request handling

## Technologies Used

- **Backend:** FastAPI, Pydantic, Uvicorn
- **Frontend:** React, TypeScript, Zod

## Installation

### Backend Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/MosTafa2K/fastapi_zod.git
   cd fastapi_zod
   ```
2. Create and activate a virtual environment:
   ```bash
   python -m venv env
   source .venv/bin/activate  # On Windows use `.venv\Scripts\activate`
   ```
3. Install dependencies:
   ```bash
   pip install "fastapi[standard]"
   ```
4. Run the FastAPI server:
   ```bash
   uvicorn main:app --reload  # Or fastapi dev [Recommended]
   ```

### Frontend Setup

1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the React development server:
   ```bash
   npm run dev
   ```

## API Endpoints
### `GET /books`
- **Description:** Retrieves a list of books
- **Response:**
  ```json
  [
    {
        "id": 1,
        "title": "book title",
        "year": 1984,
        "edition": 1,
        "author": {
            "id": 1,
            "name": "author name",
            "bio": "author bio",
        },
    },
  ]
  ```

## Frontend Validation with Zod

The frontend uses **Zod** to validate inputs data then submitting data to the API. Example schema:

```typescript
import { z } from 'zod';


export const AuthorSchema = z.object({
    id: z.number(),
    name: z.string(),
    bio: z.string().nullable()
})


export const BookSchema = z.object({
    id: z.number(),
    title: z.string(),
    year: z.number(),
    edition: z.number().min(1).default(1),
    author: AuthorSchema
})
```

## Contribution

Contributions are welcome! Feel free to open issues or submit pull requests.

## License

This project is licensed under the MIT License.
