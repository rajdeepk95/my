import React, { useState } from "react";

export default function App() {
  const [exams, setExams] = useState([
    {
      examName: "Exam 1",
      maximumMarks: 100,
      action: "Edit",
    },
    // other exams...
  ]);

  const handleAddExam = () => {
    setExams([...exams, { examName: "", maximumMarks: "", action: "Edit" }]);
  };

  const handleExamNameChange = (index, event) => {
    const newExams = [...exams];
    newExams[index].examName = event.target.value;
    setExams(newExams);
  };

  function handleMaximumMarksChange(index, event) {
    const newValue = event.target.value;
    // Check if the entered value is a valid number
    if (!isNaN(newValue)) {
      const newExams = [...exams];
      newExams[index].maximumMarks = newValue;
      setExams(newExams);
    }
  }

  const handleActionChange = (index, event) => {
    const newExams = [...exams];
    newExams[index].action = event.target.value;
    setExams(newExams);
  };

  const handleDeleteExam = (index) => {
    if (exams[index].action === "Delete") {
      const newExams = [...exams];
      newExams.splice(index, 1);
      setExams(newExams);
    }
  };

  return (
    <div className="define-report-card-type p-6">
      <h1 className="text-3xl font-bold mb-4">Define Report Card Type</h1>
      <div className="flex flex-wrap">
        <button className="bg-zinc-300 hover:bg-blue-200 text-blue-700 font-semi-bold py-2 px-4  border border-1 border-zinc-500">
          Create Exam
        </button>
        <button className="bg-zinc-300 hover:bg-green-700 text-black  py-2 px-4 border border-1 border-zinc-500">
          Create Block
        </button>
        <button className="bg-zinc-300 hover:bg-yellow-700 text-black py-2 px-4 border border-1 border-zinc-500">
          Define Report Card Type
        </button>
      </div>

      <div className="rounded border border-zinc-500 border-1 p-4">
        <table className="w-full border-collapse border">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-gray-400 px-4 py-2">Exam Name</th>
              <th className="border border-gray-400 px-4 py-2">Maximum Marks</th>
              <th className="border border-gray-400 px-4 py-2">Action</th>
              <th className="border border-gray-400 px-4 py-2">Delete</th>
            </tr>
          </thead>
          <tbody>
            {exams.map((exam, index) => (
              <tr key={index}>
                <td className="border border-gray-400 px-4 py-2">
                  <input
                    type="text" border border-black
                    value={exam.examName}
                    onChange={(event) => handleExamNameChange(index, event)}
                    className="w-full"
                  />
                </td>
                <td className="border border-gray-400 px-4 py-2">
                  <input
                    type="number"
                    value={exam.maximumMarks}
                    onChange={(event) =>
                      handleMaximumMarksChange(index, event)
                    }
                    className="w-full"
                  />
                </td>
                <td className="border border-gray-400 px-4 py-2">
                  <select
                    value={exam.action}
                    onChange={(event) => handleActionChange(index, event)}
                    className="w-full"
                  >
                    <option value="Edit">Edit</option>
                    <option value="Delete">Delete</option>
                  </select>
                </td>
                <td className="border border-gray-400 px-4 py-2">
                  <button
                    onClick={() => handleDeleteExam(index)}
                    className="bg-red-500 text-white px-4 py-2 rounded-md"
                    disabled={exam.action !== "Delete"}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <button
          onClick={handleAddExam}
          className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md"
        >
          + Create New Exam
        </button>
      </div>
    </div>
  );
}