import { useState } from 'react';

const useValidation = () => {
  const [errors, setErrors] = useState({});

  const validate = (formData) => {
    const newErrors = {};

    if (!formData.fullName) newErrors.fullName = 'Full Name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    if (!formData.email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/))
      newErrors.email = 'Email format is invalid';
    if (!formData.surveyTopic) newErrors.surveyTopic = 'Survey Topic is required';

    if (formData.surveyTopic === 'Technology') {
      if (!formData.favoriteLanguage) newErrors.favoriteLanguage = 'Favorite Language is required';
      if (!formData.yearsOfExperience) newErrors.yearsOfExperience = 'Years of Experience is required';
    }

    if (formData.surveyTopic === 'Health') {
      if (!formData.exerciseFrequency) newErrors.exerciseFrequency = 'Exercise Frequency is required';
      if (!formData.dietPreference) newErrors.dietPreference = 'Diet Preference is required';
    }

    if (formData.surveyTopic === 'Education') {
      if (!formData.highestQualification) newErrors.highestQualification = 'Highest Qualification is required';
      if (!formData.fieldOfStudy) newErrors.fieldOfStudy = 'Field of Study is required';
    }

    if (!formData.feedback || formData.feedback.length < 50)
      newErrors.feedback = 'Feedback must be at least 50 characters';

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  return [errors, validate];
};

export default useValidation;
