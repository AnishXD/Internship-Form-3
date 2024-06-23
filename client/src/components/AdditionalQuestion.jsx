// AdditionalQuestions.jsx

import React, { useState } from 'react';

const AdditionalQuestions = ({ additionalQuestions, onSubmit }) => {
  const [answers, setAnswers] = useState({});

  const handleAnswerChange = (e, questionId) => {
    const { value } = e.target;
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [questionId]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can validate answers if needed
    onSubmit(answers); // Pass answers back to parent component
  };

  return (
    <div className="flex items-center justify-center w-screen min-h-screen bg-custom-pink">
      <div className="bg-white p-6 shadow-md rounded-md w-2/3 h-full overflow-y-auto">
        <h1 className="text-3xl font-bold mb-8 text-center text-gray-900">Additional Questions</h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          {additionalQuestions.map((question, index) => (
            <div key={question.id} className="mb-4 flex flex-col items-start">
              <label className="block text-sm font-medium text-gray-700">{question.question}</label>
              <input
                type="text"
                name={`question_${index}`}
                value={answers[question.id] || ''}
                onChange={(e) => handleAnswerChange(e, question.id)}
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
          ))}
          <button
            type="submit"
            className="w-full bg-pink-600 text-white py-3 px-4 rounded-md hover:bg-pink-400 focus:outline-none focus:bg-pink-400 transition duration-300 ease-in-out"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdditionalQuestions;
