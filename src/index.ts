import * as dotenv from "dotenv";

dotenv.config();

console.log(`Hello ${process.env.PRENAME} ${process.env.SURNAME}!`);
