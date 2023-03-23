import express from 'express';
import cors from 'cors';        // import the new cors library
import HelloController from "./controllers/hello-controller.js";
import UserController from "./controllers/users/users-controller.js";   // import controller make sure to include the extension
import TuitsController from "./controllers/tuits/tuits-controller.js";

const app = express();
app.use(cors())
app.use(express.json());
TuitsController(app);
HelloController(app);
UserController(app);                                 // pass it app
app.listen(process.env.PORT || 4000);