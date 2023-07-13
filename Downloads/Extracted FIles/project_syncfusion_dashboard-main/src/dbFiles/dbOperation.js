const sql = require('mssql');
const config = require('./dbConfig');

// ------------------------------- SQL Query Sections -------------------------------
const mainMenusQuery = "SELECT * FROM MainMenu";
// -----------------------------------------------------------------------------------

const GetSubcourses = async () => {
  try {
    const pool = await sql.connect(config);
    const result = await pool.request().query('SELECT * FROM Subcourse');
    return result.recordset;
  } catch (error) {
    console.log(error);
    throw new Error('Failed to get Subcourses');
  }
};

const GetTrainers = async () => {
  try {
    const pool = await sql.connect(config);
    const result = await pool.request().query('SELECT * FROM Trainer');
    return result.recordset;
  } catch (error) {
    console.log(error);
    throw new Error('Failed to get Trainer');
  }
};

const GetLearners = async () => {
  try {
    const pool = await sql.connect(config);
    const result = await pool.request().query('SELECT * FROM Learners');
    return result.recordset;
  } catch (error) {
    console.log(error);
    throw new Error('Failed to get Learners');
  }
};

// ----------------------------------- Main menu --------------------------------
const getMainMenu = async () => {
  try {
    let pool = await sql.connect(config);
    const result = await pool
      .request()
      .query(mainMenusQuery);
    return result;
  } catch (error) {
    //console.log(error);
    throw new Error('Failed to get Main Menu');
  }
};

// ----------------------------------- SAVE >> Main Course --------------------------------
const savemainmenucourse = async (
  mainmenuid,
  mainmenuname,
  category,
  tagheading,
  tagtext,
  status
) => {
  try {
    let pool = await sql.connect(config);
    await pool
      .request()
      .input("mainmenuid", sql.INT, mainmenuid)
      .input("mainmenuname", sql.VARCHAR(256), mainmenuname)
      .input("category", sql.CHAR(3), category)
      .input("tagheading", sql.VARCHAR(sql.MAX), tagheading)
      .input("tagtext", sql.VARCHAR(sql.MAX), tagtext)
      .input("status", sql.VARCHAR(20), status)
      .execute("InsertMainMenu");
    //console.log("Main Menu Inserted successfully");
  } catch (error) {
    //console.log(error);
    throw new Error("Failed to save mainmenu");
  }
};
// ----------------------------------- SAVE >> Sub Course --------------------------------
const savesubcourse = async (
  mainmenuid,
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
) => {
  try {
    let pool = await sql.connect(config);
    await pool
      .request()
      .input("mainmenuid", sql.INT, mainmenuid)
      .input("subcourseid", sql.INT, subcourseid)
      .input("subcoursename", sql.VARCHAR(256), subcoursename)
      .input("image", sql.VARCHAR(sql.MAX), image)
      .input("enrolledcustomers", sql.VARCHAR(256), enrolledcustomers)
      .input("sessionmodecategory", sql.VARCHAR(256), sessionmodecategory)
      .input("classmodecategory", sql.VARCHAR(256), classmodecategory)
      .input("batchstartdate", sql.DateTime, batchstartdate)
      .input("syllabus", sql.VARCHAR(sql.MAX), syllabus)
      .input("coursecompletionrate", sql.INT, coursecompletionrate)
      .input("category", sql.CHAR(3), category)
      .execute("InsertSubcourse");
    //console.log("subcourse Inserted successfully");
  } catch (error) {
    //console.log(error);
    throw new Error("Failed to save subcourse");
  }
}
// ----------------------------------- SAVE >> Master Course --------------------------------
const savemastercourse = async (
  mainmenuid,
  mastercourseid,
  mastercoursename,
  Reviews,
  numberofcourses,
  coursehours,
  numberoflearners,
  minicoursesyllabus,
  category,
) => {
  try {
    let pool = await sql.connect(config);
    await pool
      .request()
      .input("mainmenuid", sql.INT, mainmenuid)
      .input("mastercourseid", sql.INT, mastercourseid)
      .input("mastercoursename", sql.VARCHAR(255), mastercoursename)
      .input("reviews", sql.VARCHAR(255), Reviews)
      .input("numberofcourses", sql.INT, numberofcourses)
      .input("coursehours", sql.INT, coursehours)
      .input("numberoflearners", sql.INT, numberoflearners)
      .input("minicoursesyllabus", sql.VARCHAR(sql.MAX), minicoursesyllabus)
      .input("category", sql.CHAR(3), category)
      .execute("InsertMasterCourse");
    console.log("MasterCourse Inserted successfully");
  } catch (error) {
    console.log(error);
    throw new Error("Failed to save MasterCourse");
  }
}

module.exports = {
  sql,
  GetSubcourses,
  GetTrainers,
  GetLearners,
  getMainMenu,
  savemainmenucourse,
  savesubcourse,
  savemastercourse,
};
