import express from 'express';
import HelloController from "./controllers/hello-controller.js";
import UserController from "./controllers/users/users-controller.js";   // import controller make sure to include the extension


const app = express();
app.use(express.json());
HelloController(app);
UserController(app);                                 // pass it app
app.listen(4000);