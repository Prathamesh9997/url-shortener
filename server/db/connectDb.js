const mongoose = require("mongoose");
const DBPass = process.env.DBPASSWORD;
const DATABASE_URL = `mongodb+srv://prathamesh9997:${DBPass}@cluster0.biui0.mongodb.net/urlShortenerApp?retryWrites=true&w=majority`;
mongoose
  .connect(DATABASE_URL, {
    useNewUrlParser: true,
    useFindAndModify: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => {
    console.log("DB connection established.");
  })
  .catch((err) => {
    console.log("DB connection error: ", err);
  });
