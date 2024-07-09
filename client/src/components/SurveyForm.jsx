
import React, { useState } from 'react';
import useForm from '../Hooks/useForm';
import useValidation from '../Hooks/useValidation';
import AdditionalQuestions from './AdditionalQuestion';
import Summary from './Summary';

const SurveyForm = () => {
  const [formData, handleChange] = useForm({
    fullName: '',
    email: '',
    surveyTopic: '',
    favoriteLanguage: '',
    yearsOfExperience: '',
    exerciseFrequency: '',
    dietPreference: '',
    highestQualification: '',
    fieldOfStudy: '',
    feedback: '',
  });

  const [errors, validate] = useValidation();
  const [submitted, setSubmitted] = useState(false);
  const [showAdditionalQuestions, setShowAdditionalQuestions] = useState(false);
  const [additionalQuestions, setAdditionalQuestions] = useState([]);
  const [additionalAnswers, setAdditionalAnswers] = useState({}); 
  const handleAdditionalQuestionsSubmit = (answers) => {
    const formDataWithAnswers = {
      ...formData,
      ...answers, 
    };
    setSubmitted(true); 
    setAdditionalAnswers(answers); 
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate(formData)) {
      try {
        const response = await fetch(`https://internship-form-3.vercel.app/api/questions/${formData.surveyTopic}`);
        if (!response.ok) {
          throw new Error('Failed to fetch questions');
        }
        const data = await response.json();
        setAdditionalQuestions(data.questions);
        setShowAdditionalQuestions(true); 
      } catch (error) {
        console.error('Error fetching questions:', error.message);
      }
    }
  };

  if (submitted) {
    return <Summary formData={formData} additionalQuestions={additionalQuestions} additionalAnswers={additionalAnswers} />;
  }

  if (showAdditionalQuestions) {
    return (
      <AdditionalQuestions
        additionalQuestions={additionalQuestions}
        onSubmit={handleAdditionalQuestionsSubmit} // Pass handleAdditionalQuestionsSubmit as onSubmit prop
      />
    );
  }

  return (
    <div className="flex items-center justify-center w-screen min-h-screen bg-custom-pink">
      <div className="bg-white p-6 shadow-md rounded-md w-2/3 h-full overflow-y-auto">
        <h1 className="text-3xl font-bold mb-8 text-center text-gray-900">Survey Form</h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 gap-6">
            <div className="mb-4 flex flex-col items-start">
              <label className="block text-sm font-medium text-gray-700">Full Name</label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
              {errors.fullName && <span className="text-red-500 text-xs">{errors.fullName}</span>}
            </div>
            <div className="mb-4 flex flex-col items-start">
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
              {errors.email && <span className="text-red-500 text-xs">{errors.email}</span>}
            </div>
          </div>
          <div className="mb-4 flex flex-col items-start">
            <label className="block text-sm font-medium text-gray-700">Survey Topic</label>
            <select
              name="surveyTopic"
              value={formData.surveyTopic}
              onChange={handleChange}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            >
              <option value="">Select Topic</option>
              <option value="Technology">Technology</option>
              <option value="Health">Health</option>
              <option value="Education">Education</option>
            </select>
            {errors.surveyTopic && <span className="text-red-500 text-xs">{errors.surveyTopic}</span>}
          </div>
          {formData.surveyTopic === 'Technology' && (
            <>
              <div className="mb-4 flex flex-col items-start">
                <label className="block text-sm font-medium text-gray-700">Favorite Programming Language</label>
                <select
                  name="favoriteLanguage"
                  value={formData.favoriteLanguage}
                  onChange={handleChange}
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                >
                  <option value="">Select Language</option>
                  <option value="JavaScript">JavaScript</option>
                  <option value="Python">Python</option>
                  <option value="Java">Java</option>
                  <option value="C#">C#</option>
                </select>
                {errors.favoriteLanguage && <span className="text-red-500 text-xs">{errors.favoriteLanguage}</span>}
              </div>
              <div className="mb-4 flex flex-col items-start">
                <label className="block text-sm font-medium text-gray-700">Years of Experience</label>
                <input
                  type="number"
                  name="yearsOfExperience"
                  value={formData.yearsOfExperience}
                  onChange={handleChange}
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                />
                {errors.yearsOfExperience && <span className="text-red-500 text-xs">{errors.yearsOfExperience}</span>}
              </div>
            </>
          )}
          {formData.surveyTopic === 'Health' && (
            <>
              <div className="mb-4 flex flex-col items-start">
                <label className="block text-sm font-medium text-gray-700">Exercise Frequency</label>
                <select
                  name="exerciseFrequency"
                  value={formData.exerciseFrequency}
                  onChange={handleChange}
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                >
                  <option value="">Select Frequency</option>
                  <option value="Daily">Daily</option>
                  <option value="Weekly">Weekly</option>
                  <option value="Monthly">Monthly</option>
                  <option value="Rarely">Rarely</option>
                </select>
                {errors.exerciseFrequency && <span className="text-red-500 text-xs">{errors.exerciseFrequency}</span>}
              </div>
              <div className="mb-4 flex flex-col items-start">
                <label className="block text-sm font-medium text-gray-700">Diet Preference</label>
                <select
                  name="dietPreference"
                  value={formData.dietPreference}
                  onChange={handleChange}
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                >
                  <option value="">Select Preference</option>
                  <option value="Vegetarian">Vegetarian</option>
                  <option value="Vegan">Vegan</option>
                  <option value="Non-Vegetarian">Non-Vegetarian</option>
                </select>
                {errors.dietPreference && <span className="text-red-500 text-xs">{errors.dietPreference}</span>}
              </div>
            </>
          )}
          {formData.surveyTopic === 'Education' && (
            <>
              <div className="mb-4 flex flex-col items-start">
                <label className="block text-sm font-medium text-gray-700">Highest Qualification</label>
                <select
                  name="highestQualification"
                  value={formData.highestQualification}
                  onChange={handleChange}
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                >
                  <option value="">Select Qualification</option>
                  <option value="High School">High School</option>
                  <option value="Bachelor's">Bachelor's</option>
                  <option value="Master's">Master's</option>
                  <option value="PhD">PhD</option>
                </select>
                {errors.highestQualification && <span className="text-red-500 text-xs">{errors.highestQualification}</span>}
              </div>
              <div className="mb-4 flex flex-col items-start">
                <label className="block text-sm font-medium text-gray-700">Field of Study</label>
                <input
                  type="text"
                  name="fieldOfStudy"
                  value={formData.fieldOfStudy}
                  onChange={handleChange}
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                />
                {errors.fieldOfStudy && <span className="text-red-500 text-xs">{errors.fieldOfStudy}</span>}
              </div>
            </>
          )}
          <div className="mb-4 flex flex-col items-start">
            <label className="block text-sm font-medium text-gray-700">Feedback</label>
            <textarea
              name="feedback"
              value={formData.feedback}
              onChange={handleChange}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
            {errors.feedback && <span className="text-red-500 text-xs">{errors.feedback}</span>}
          </div>
          {/* Next button for navigating to additional questions */}
          <button
            type="button"
            onClick={handleSubmit}
            className={`w-full bg-pink-600 text-white py-3 px-4 rounded-md hover:bg-pink-400 focus:outline-none focus:bg-pink-400 transition duration-300 ease-in-out ${!(formData.fullName && formData.email && formData.surveyTopic) ? 'opacity-50 cursor-not-allowed' : ''}`}
            disabled={!(formData.fullName && formData.email && formData.surveyTopic)}
          >
            Next
          </button>
        </form>
      </div>
    </div>
  );
};

export default SurveyForm;
