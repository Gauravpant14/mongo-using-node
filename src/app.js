const mongoose = require("mongoose");

//connection creation and creation of a new db
mongoose
  .connect("mongodb://localhost:27017/mongoEx", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("connection successfull"))
  .catch((err) => console.log(err));

//schema => schema defines the structure
//of the document, default values, validators etc...

const schemaEx = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: Number,
    required: true,
  },
  address: String,
  phone: Number,
  gender: String,
  country: String,
  state: String,
});

// Mongoose Model => is a wrapper on the mongooes schema.
// schema defines the structure of the document,
// default values, valditaors, whereas a mongooes model provides an interface to the
//db for creating, querying, updating, deleting record, etc.

//model creation  means to create a collections
// ModelEx is a class here we are creating collection
//in second parameter we are passing schema.
const ModelEx = new mongoose.model("ModelEx", schemaEx);

//create a document or insert into collection

const createDocument = async () => {
  try {
    const docList = new ModelEx({
      name: "jack",
      email: "jack@gmail.com",
      password: 123456,
      address: "uttarakhand",
      phone: 9045031412,
      gender: "MALE",
      country: "INDIA",
      state: "Uttarakhand",
    });
    const docList1 = new ModelEx({
      name: "Saurav Pant",
      email: "Saurav@gmail.com",
      password: 123456,
      address: "uttarakhand",
      phone: 9845031412,
      gender: "MALE",
      country: "INDIA",
      state: "Uttarakhand",
    });

    // const result = await docList.save();
    const result = await ModelEx.insertMany([docList, docList1]);
    console.log(result);
  } catch (err) {
    console.log(err);
  }
};

createDocument();
