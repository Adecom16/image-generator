import express, { Router, Request, Response } from 'express';
import { config } from 'dotenv';
import colors from "colors";
import router from "./routes/Rapid";


// load all env
config()

const app = express();
app.use(express.json());

app.get('/hello', (req: Request, res: Response) => {
    res.send('School portal app');
  });


  app.use('./rapid', router)
  

const PORT = process.env.PORT || 5000
const server = app.listen(PORT, () => {
    console.log(colors.yellow.bold(`Server running on port ${PORT} in ${process.env.NODE_ENV || 'Development'} mode`));
  });
  