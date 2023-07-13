import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Header } from "../components";
import { MdOutlineSupervisorAccount } from "react-icons/md";
import { IoIosMore } from "react-icons/io";
import { medicalproBranding } from "../data/dummy";

function CourseInformation() {
  const [subcourse, setSubcourse] = useState([]);
  const [trainers, setTrainers] = useState([]);
  const [selectedTrainer, setSelectedTrainer] = useState(null);
  const location = useLocation();
  const { pathname } = location;
  const encodedCoursename = pathname.split("/").pop();
  const coursename = decodeURIComponent(encodedCoursename);

  const handleTrainerSelection = (EmployeeID) => {
    setSelectedTrainer((prevSelectedTrainer) =>
      prevSelectedTrainer === EmployeeID ? null : EmployeeID
    );
    console.log("Selected Trainer:", EmployeeID);
  };

  const fetchSubcourse = async () => {
    try {
      const response = await fetch("/Subcourse");
      const data = await response.json();
      console.log("datasubcourses =", data);
      setSubcourse(data);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchTrainers = async () => {
    try {
      const response = await fetch("/trainers");
      const data = await response.json();
      console.log("datatrainers =", data);
      setTrainers(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchSubcourse();
    fetchTrainers();
  }, []);

  const matchingCourseContent = subcourse.find(
    (course) => String(coursename) === String(course.subcoursename)
  );

  const matchingTrainerDetails = trainers.find(
    (trainer) => String(trainer.EmployeeID) === String(selectedTrainer)
  );

  return (
    <div>
      {matchingCourseContent && (
        <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-slate-200 dark:bg-secondary-dark-bg rounded-3xl">
          <Header
            category="Course Information"
            title={matchingCourseContent.subcoursename}
          />
          <div className="grid gap-5 grid-cols-3">
            <div className="rounded-xl h-48">
              <img
                className="rounded-xl w-96"
                src={matchingCourseContent.image}
                alt={matchingCourseContent.subcoursename}
              />
            </div>
            <div className="h-48 dark:text-gray-200 bg-white dark:bg-white dark:bg-opacity-10 lg:w-80 md:w-56 p-4 pt-9 rounded-2xl">
              Hello
            </div>
            <div
              key="Trainer"
              className="h-fit dark:text-gray-200 bg-white dark:bg-white dark:bg-opacity-10 lg:w-64 lg:ml-3 md:w-56 p-4 pt-9 rounded-2xl"
            >
              <div className="flex gap-5">
                <button
                  type="button"
                  style={{ color: "#03C9D7", backgroundColor: "#E5FAFB" }}
                  className="text-4xl opacity-0.9 rounded-full p-4 hover:drop-shadow-xl"
                >
                  <MdOutlineSupervisorAccount />
                </button>
                <div className="bg-yellow-500 text-white text-sm my-auto px-2 py-1 rounded-xl">
                  {matchingCourseContent.Status}
                </div>
              </div>
              <p className="mt-4">
                <span className="text-lg font-semibold">
                  {matchingCourseContent.Trainer}
                </span>
                <span className="text-sm text-red-600 ml-2">8.30AM</span>
              </p>
              <p className="text-sm text-gray-400 pt-2">Trainer</p>
            </div>
            <div className="w-400 dark:text-gray-200 bg-white dark:bg-white dark:bg-opacity-10 rounded-2xl p-6">
              <div className="flex justify-between">
                <p className="text-xl font-semibold">Modify</p>
                <button
                  type="button"
                  className="text-xl font-semibold text-gray-400"
                >
                  <IoIosMore />
                </button>
              </div>
              <div>
                <p className="text-md mt-2 font-semibold mb-2">Leaders</p>
                <div className="flex gap-4">
                  {trainers.map((trainer) => (
                    <button
                      key={trainer.EmployeeID}
                      className={`${
                        selectedTrainer === trainer.EmployeeID
                          ? "border-blue-600 rounded-full border-4"
                          : ""
                      }`}
                      onClick={() => handleTrainerSelection(trainer.EmployeeID)}
                    >
                      <img
                        className="rounded-full w-12 h-12"
                        src={matchingTrainerDetails?.image}
                        alt={trainer.EmployeeID}
                      />
                    </button>
                  ))}
                </div>
              </div>
              <p className="text-xs cursor-pointer hover:drop-shadow-xl font-semibold rounded-lg w-24 bg-orange-400 py-0.5 px-2 text-gray-200 mt-5">
                16 APR, 2021
              </p>
              <div className="border-b-1 border-color pb-4 mt-2">
                <p className="text-md font-semibold mb-2">Teams</p>
                <div className="flex gap-4">
                  {/* Replace 'medicalproBranding' with your actual data */}
                  {medicalproBranding.data.map((item) => (
                    <p
                      key={item.name}
                      style={{ background: item.color }}
                      className="cursor-pointer hover:drop-shadow-xl text-white py-0.5 px-3 rounded-lg text-xs"
                    >
                      {item.name}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default CourseInformation;
