import express  from "express";
import morgan from "morgan";
import pkg from "../package.json";
import { createRol } from "./libs/initalSetup";
import productRouter from "./routes/product.routes";
import userRouter from "./routes/auth.routes";
import usersRole from "./routes/user.routes";

const app = express();
createRol();
app.use(morgan('dev'));
app.use(express.json());
app.set('pkg', pkg)// se usa como variables globales

app.get('/', (req, res) => {
    res.json({
        Autor: app.get('pkg').author,
        Description: app.get('pkg').description,
        Version: app.get('pkg').version
    })

})
app.use('/api/products', productRouter);
app.use('/api', userRouter);
app.use('/api/users', usersRole);
export default app;