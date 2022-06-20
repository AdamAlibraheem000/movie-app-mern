import express from 'express';
import cors from 'cors';
import movies from './api/movies_routes.js';

const app = express();


// Cors & express middleware
app.use(cors()); //Allows browsers to communicate with REST API
app.use(express.json()); //Read & accept JSON from body parameter


// inital routes
app.use("/api/v1/movies", movies);

// Catch all for routes that don't exist
app.use('*', (req,res) => {
    res.status(404).json({error: "not found"});
})

export default app;