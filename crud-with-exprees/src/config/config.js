// config.js
import { fileURLToPath } from 'url';
import express from 'express';
import path from 'path';


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


const app = express();

app.use(express.static(path.join(__dirname, '../public')));

export default app;