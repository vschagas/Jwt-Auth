import express from 'express';
import 'express-async-errors';
// import httpErrorMiddleware from './middleware/http.error.middleware';
// import router from './routes/router';

const app = express();

app.use(express.json());

// app.use(router);
// app.use(httpErrorMiddleware);

export default app;
