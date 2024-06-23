// Summary.jsx

import React from 'react';

const Summary = ({ formData, additionalQuestions, additionalAnswers }) => {
  const handleReload = () => {
    window.location.reload(); // Reloads the page
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-custom-pink">
      <div className="bg-white p-6 shadow-md rounded-md w-2/3 h-full m-4 overflow-y-auto">
        <h1 className="text-3xl font-bold mb-8 text-center text-gray-900">Summary</h1>
        <div className="space-y-6">
          <div className="mb-8 mx-4">
            <h2 className="text-lg text-start font-bold text-gray-700">Main Form Data</h2>
            <div className="grid grid-cols-2 gap-4 mt-4 ">
              <div className="flex items-center">
                <label className="text-sm font-medium text-gray-700">Full Name:</label>
                <p className="ml-2">{formData.fullName}</p>
              </div>
              <div className="flex items-center">
                <label className="text-sm font-medium text-gray-700">Email:</label>
                <p className="ml-2">{formData.email}</p>
              </div>
              <div className="flex items-center">
                <label className="text-sm font-medium text-gray-700">Survey Topic:</label>
                <p className="ml-2">{formData.surveyTopic}</p>
              </div>
              {formData.surveyTopic === 'Technology' && (
                <>
                  <div className="flex items-center">
                    <label className="text-sm font-medium text-gray-700">Favorite Language:</label>
                    <p className="ml-2">{formData.favoriteLanguage}</p>
                  </div>
                  <div className="flex items-center">
                    <label className="text-sm font-medium text-gray-700">Years of Experience:</label>
                    <p className="ml-2">{formData.yearsOfExperience}</p>
                  </div>
                </>
              )}
              {formData.surveyTopic === 'Health' && (
                <>
                  <div className="flex items-center">
                    <label className="text-sm font-medium text-gray-700">Exercise Frequency:</label>
                    <p className="ml-2">{formData.exerciseFrequency}</p>
                  </div>
                  <div className="flex items-center">
                    <label className="text-sm font-medium text-gray-700">Diet Preference:</label>
                    <p className="ml-2">{formData.dietPreference}</p>
                  </div>
                </>
              )}
              {formData.surveyTopic === 'Education' && (
                <>
                  <div className="flex items-center">
                    <label className="text-sm font-medium text-gray-700">Highest Qualification:</label>
                    <p className="ml-2">{formData.highestQualification}</p>
                  </div>
                  <div className="flex items-center">
                    <label className="text-sm font-medium text-gray-700">Field of Study:</label>
                    <p className="ml-2">{formData.fieldOfStudy}</p>
                  </div>
                </>
              )}
              <div className="col-span-2 flex flex-col items-start">
                <label className="text-sm font-medium text-gray-700">Feedback:</label>
                <p className="ml-2 text-start">{formData.feedback}</p>
              </div>
            </div>
          </div>
          {additionalQuestions.length > 0 && (
            <div className="mb-8 mx-4">
              <h2 className="text-start font-bold text-lg  text-gray-700">Additional Questions</h2>
              <div className="mt-4">
                {additionalQuestions.map((question, index) => (
                  <div key={index} className="mb-4">
                    <label className="block text-start text-sm font-medium text-gray-700">{question.question}</label>
                    <p className="ml-2 text-start">{additionalAnswers[question.id]}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
          <div className="flex justify-center mt-8">
            <button
              onClick={handleReload}
              className="bg-pink-600 hover:bg-pink-400 w-full text-white py-2 px-4 rounded focus:bg-pink-400 outline-none focus:shadow-outline"
            >
              Submit Another Response
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Summary;
