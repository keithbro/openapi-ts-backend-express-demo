import OpenAPIBackend, { Request } from 'openapi-backend';
import express from "express";

const api = new OpenAPIBackend({ definition: './openapi.yaml' });

const listPets = (req) => {
  
}

api.register({
  listPets,
})

const app = express();
app.use(express.json());
app.use((req, res) => api.handleRequest(req as Request, req, res));
app.listen(9000);
