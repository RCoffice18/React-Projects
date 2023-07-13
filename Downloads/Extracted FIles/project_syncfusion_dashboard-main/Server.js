const express = require('express');
const dbOperation = require('./src/dbFiles/dbOperation');
const cors = require('cors');
const multer = require('multer');
const upload = multer(); // Create a multer instance
const app = express();
// Use multer middleware to parse multipart/form-data
app.use(upload.none());
const builder = require('xmlbuilder');

const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json()); // Add this line to parse JSON in the request body

app.get('/', (req, res) => {
  res.send('Hello, this is the root URL!');
});

// ------------------------------------ Sub Course --------------------------------
app.get('/Subcourse', async (req, res) => {
  try {
    const Subcourses = await dbOperation.GetSubcourses();
    res.json(Subcourses);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Internal server error for Subcourses' });
  }
});

// ------------------------------------ TRAINERS --------------------------------
app.get('/trainers', async (req, res) => {
  try {
    const Trainers = await dbOperation.GetTrainers();
    res.json(Trainers);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Internal server error for Trainers' });
  }
});

// ------------------------------------ LEARNERS --------------------------------
app.get('/learners', async (req, res) => {
  try {
    const Learners = await dbOperation.GetLearners();
    res.json(Learners);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Internal server error for Learners' });
  }
});

// ------------------------------------ Main Menu --------------------------------
app.get("/main-menu", async (req, res) => {
  try {
    const mainMenuName = await dbOperation.getMainMenu();
    res.json(mainMenuName);
    // console.log('loajsasijdidjws servermain',mainMenuName);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server error for mainmenuname" });
  }
});

// ------------------------------------ SAVE >> Main Course --------------------------------
app.post('/save-mainmenu', async (req, res) => {
  const { mainmenuid, mainmenuname, category, tagheading, tagtext, status } = req.body;
  try {
    console.log("Received Data:", req.body);
    console.log("mainmenuid:", mainmenuid);
    console.log("mainmenuname:", mainmenuname);
    console.log("category:", category);
    console.log("tagheading:", tagheading);
    console.log("tagtext:", tagtext);
    console.log("status:", status);
    await dbOperation.savemainmenucourse(mainmenuid, mainmenuname, category, tagheading, tagtext, status);
    res.status(200).json({ message: 'Maincourse saved successfully' });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Failed to save mainmenu' });
  }
});

// ------------------------------------ SAVE >> Sub Course --------------------------------
app.post('/save-subcourse', async (req, res) => {
  const { mainmenuid,
    subcourseid,
    subcoursename,
    image,
    enrolledcustomers,
    sessionmodecategory,
    classmodecategory,
    batchstartdate,
    syllabus,
    coursecompletionrate,
    category
  } = req.body;
  try {
    console.log("Received Data:", req.body);
    console.log("mainmenuid:", mainmenuid);
    console.log("subcourseid :", subcourseid);
    console.log("subcoursename:", subcoursename);
    console.log("image:", image);
    console.log("enrolledcustomers:", enrolledcustomers);
    console.log("sessionmodecategory:", sessionmodecategory);
    console.log("classmodecategory:", classmodecategory);
    console.log("batchstartdate:", batchstartdate);
    console.log("syllabus:", syllabus);
    console.log("coursecompletionrate:", coursecompletionrate);
    console.log("category", category);
    await dbOperation.savesubcourse(mainmenuid,
      subcourseid,
      subcoursename,
      image,
      enrolledcustomers,
      sessionmodecategory,
      classmodecategory,
      batchstartdate,
      syllabus,
      coursecompletionrate,
      category);
    res.status(200).json({ message: 'Subcourse saved successfully' });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Failed to save subcourse' });
  }
});

// ------------------------------------ SAVE >> Master Course --------------------------------
app.post("/save-mastercourse", async (req, res) => {
  const {
    mainmenuid,
    mastercourseid,
    mastercoursename,
    Reviews,
    numberofcourses,
    coursehours,
    numberoflearners,
    minicoursesyllabus,
    category,
  } = req.body;
  try {
    console.log("Received Data:", req.body);
    // Log the individual values to the console
    console.log("mainmenuid:", mainmenuid);
    console.log("mastercourseid :", mastercourseid);
    console.log("mastercoursename:", mastercoursename);
    console.log("reviews:", Reviews);
    console.log(" numberofcourses:", numberofcourses);
    console.log("coursehours:", coursehours);
    console.log("numberoflearners:", numberoflearners);
    console.log("minicoursesyllabus:", minicoursesyllabus);
    console.log("category", category);
    await dbOperation.savemastercourse(
      mainmenuid,
      mastercourseid,
      mastercoursename,
      Reviews,
      numberofcourses,
      coursehours,
      numberoflearners,
      minicoursesyllabus,
      category
    );
    res.status(200).json({ message: "Mastercourse saved successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Failed to save Mastercourse" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
