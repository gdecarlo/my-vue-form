<template>
    <div>
        <h2>Nivel de satisfacción</h2>
        <SurveyComponent :model="survey" />
    </div>
</template>

<script setup lang='ts'>
import { Model } from 'survey-core';
const json = {
  "showPreviewBeforeComplete": "showAnsweredQuestions",
  "elements": [
  {
          "type": "rating",
          "name": "satisfaction-smileys-colored",
          "title": "How satisfied are you with our product?",
          "description": "Smiley rating with colored scale",
          "rateType": "smileys",
          "scaleColorMode": "colored",
          "rateCount": 5,
          "rateMax": 5,
          "displayMode": "buttons"
        },
        {
          "type": "rating",
          "name": "satisfaction-numeric",
          "title": "How satisfied are you with our product?",
          "description": "Numeric rating scale",
          "autoGenerate": false,
          "rateCount": 10,
          "rateValues": [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ],
          "displayMode": "buttons"
        },
        {
          "type": "rating",
          "name": "satisfaction-stars",
          "title": "How satisfied are you with our product?",
          "description": "Star rating scale",
          "rateType": "stars",
          "rateCount": 10,
          "rateMax": 10,
          "displayMode": "buttons"
        }
  ],
  "showQuestionNumbers": false,
  "questionsOnPageMode": "questionPerPage"
};

const survey = new Model(json);
    survey.onComplete.add((sender, options) => {
        console.log(JSON.stringify(sender.data, null, 3));
    });
</script>