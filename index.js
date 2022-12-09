import express from "express"
import winston from "winston"
import cors from "cors"
import clientRouter from "./routers/client.router.js"
import productRouter from "./routers/product.router.js"
import saleRouter from "./routers/sale.router.js"
import supplierRouter from "./routers/supplier.router.js"

const {combine, timestamp, label, printf} = winston.format;
const myFormat = printf(({level, message, label, timestamp}) => {
    return `${timestamp} [${label}] ${level} ${message}`;
});

global.logger = winston.createLogger({
    level: "silly",
    transports:[
        new (winston.transports.Console)(),
        new (winston.transports.File)({filename: "store api.log"})
    ],
    format: combine(
        label({label:"store-api"}),
        timestamp(),
        myFormat
    )
});

const app = express();
app.use(express.json());
app.use(cors);
app.use("/client", clientRouter);
app.use("/product", productRouter);
app.use("/sale", saleRouter);
app.use("/supplier", supplierRouter);



app.listen(3000,()=>console.log("API Started!"));