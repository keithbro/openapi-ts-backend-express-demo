import express from "express";
import { api } from "./api";
import { connect } from "./filter-query";

const app = express();

app.use(express.json());
app.use(connect(api));

app.listen(3000, () => console.log("Listening on 3000..."));
