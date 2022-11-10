import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const TripData = require('../db-en.json');

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.get("/trips", (req, res) => { 
  const { keyword } = req.query; //set up keyword query
  const { trips: Trips } = TripData;
  const keys = ["title", "description", "tags"]; //keys to be searched through
  
  const searchKeys = (data) => {
    return data
      .filter((item) => //both to lowercase so that the search is not case sensitive
      keys.some((key) => item[key].toString().toLowerCase().includes(keyword.toLowerCase()))
    );
  };

  keyword ? res.status(200).json(searchKeys(Trips)) : res.status(200).json(Trips); //return all data if no keyword is entered
  
  console.log("GET /api/trips?keyword=" + keyword); //logging query in CloudWatch
});

export default app;
