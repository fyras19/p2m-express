import { app } from "./index.js";
import mongoose from "mongoose";

const PORT = process.env.PORT || 8000;

mongoose.connect('mongodb://firasmongodb:qvSn6fxoXoYGRgpSDlINwiVMLINnFHleKcwB6gqYTHnShKXt5Pf7lgk7yAoN9rf3r34lpTQUaRFC4GyQpNQozA==@firasmongodb.mongo.cosmos.azure.com:10255/?ssl=true&retrywrites=false&maxIdleTimeMS=120000&appName=@firasmongodb@/p2m?authSource=admin')
    .then(() => app.listen(PORT, () => console.log(`Server running on port ${PORT}`)))
    .catch((error) => console.log(error));