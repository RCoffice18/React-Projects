import React from 'react';
import { BsCurrencyDollar } from 'react-icons/bs';
import { Header } from '../components';
import avatar3 from '../data/avatar3.png';
import { sessionModeData } from '../data/dummy';

const TrainersDetails = () => (
  <div className="p-5">
    <Header category="Page" title="Trainer Details" />
    <div className="">
      <div className="flex gap-5">
        <div className="my-auto w-1/3">
          <img
            className="rounded-full mx-auto w-60 h-60 border-slate-200 dark:border-black border-4"
            src={avatar3}
            alt="emp"
          />
        </div>
        <div className="w-6/12 p-8 mx-auto dark:text-white bg-slate-200 dark:bg-white dark:bg-opacity-10 rounded-3xl">
          <div className="flex justify-between text-lg font-semibold dark:text-blue-500">
            EmployeeID: <p className="font-normal dark:text-white">165425</p>
          </div>
          <div className="flex justify-between text-lg font-semibold dark:text-blue-500">
            Name: <p className="font-normal dark:text-white">KaaliDasan</p>
          </div>
          <div className="flex justify-between text-lg font-semibold dark:text-blue-500">
            Designation:{' '}
            <p className="font-normal dark:text-white">Cyber Security</p>
          </div>
          <div className="flex justify-between text-lg font-semibold dark:text-blue-500">
            Courses:{' '}
            <p className="font-normal dark:text-white">Cloud Computing</p>
          </div>
          <div className="flex justify-between text-lg font-semibold dark:text-blue-500">
            HiredDate: <p className="font-normal dark:text-white">2023-07-03</p>
          </div>
          <div className="flex justify-between text-lg font-semibold dark:text-blue-500">
            Reports to:{' '}
            <p className="font-normal dark:text-white">Shahul Hameed</p>
          </div>
          <div className="flex justify-between text-lg font-semibold dark:text-blue-500">
            Contact No:{' '}
            <p className="font-normal dark:text-white">+91 95555 66664</p>
          </div>
          <div className="flex justify-between text-lg font-semibold dark:text-blue-500">
            Location: <p className="font-normal dark:text-white">Madurai</p>
          </div>
          <div />
        </div>
      </div>
    </div>
    <div className="m-8 flex gap-5">
      <div className="dark:text-gray-200 bg-slate-200 dark:bg-white dark:bg-opacity-10 h-44 rounded-xl w-full lg:w-80 p-8 m-3">
        <div className="flex justify-between mb-3 items-center dark:bg-transparent">
          <div>
            <p className="font-semibold text-gray-400">Payslip</p>
            <p className="text-2xl">$63,448.78</p>
          </div>
          <button
            type="button"
            className="text-2xl opacity-0.9 bg-blue-500 text-white hover:drop-shadow-xl rounded-full p-4"
          >
            <BsCurrencyDollar />
          </button>
        </div>
        <div className="flex justify-between mb-3 items-center dark:bg-transparent">
          <div>
            <p className="font-semibold text-gray-400">Monthly Salary</p>
            <p className="text-2xl">$3,448.78</p>
          </div>
          <button
            type="button"
            className="text-2xl opacity-0.9 bg-green-500 text-white hover:drop-shadow-xl rounded-full p-4"
          >
            <BsCurrencyDollar />
          </button>
        </div>
      </div>
      {sessionModeData.map((time) => (
        <div
          key={time.title}
          className="dark:text-gray-200 bg-slate-200 dark:bg-white dark:bg-opacity-10 h-44 rounded-xl w-full lg:w-80 p-8 m-3"
        >
          <p className="mt-1">
            <span className="text-lg font-semibold">{time.time1}</span>
          </p>
          <p className="mt-3">
            <span className="text-lg font-semibold">{time.time2}</span>
          </p>
          <p className="text-sm text-right text-gray-400 mt-6">{time.title}</p>
        </div>
      ))}
      <div className="dark:text-gray-200 bg-slate-200 dark:bg-white dark:bg-opacity-10 h-44 rounded-xl w-full lg:w-80 p-8 m-3">
        Hello
      </div>
    </div>
    <div className="md:m-5 w-11/12 mx-auto p-2 md:p-10 bg-slate-200 dark:bg-white dark:bg-opacity-10 rounded-3xl">
      Hello
    </div>
  </div>
);

export default TrainersDetails;
