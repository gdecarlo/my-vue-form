<template>
  <h1>Template Vue 3.4</h1>
  <SurveyComponent :model="survey" />
</template>


<script setup lang="ts">
import 'survey-core/defaultV2.min.css';
import { Model } from 'survey-core';

const surveyJson = {
  pages: [{
    name: "PersonalDetails",
    elements: [{
      type: "text",
      name: "FirstName",
      title: "Enter your first name:"
    },
    {
      "name": "range",
      "type": "text",
      "title": "Select a value",
      "inputType": "range",
      "min": 0,
      "max": 5,
      "step": 1,
      "defaultValue": 2
    },
    {
      "type": "dropdown",
      "name": "car",
      "title": "Which is the brand of your car?",
      "isRequired": false,
      "showNoneItem": true,
      "showOtherItem": true,
      "choices": [ "Ford", "Vauxhall", "Volkswagen"],
      otherText: "Otro"
    },
    {
      type: "text",
      name: "LastName",
      title: "Enter your last name:"
    }, {
      type: "panel",
      name: "Contacts",
      state: "collapsed",
      title: "Contacts (optional)",
      elements: [{
        type: "text",
        name: "Telegram",
        title: "Telegram:"
      }, {
        type: "text",
        name: "GitHub",
        title: "GitHub username:"
      }]
    }]
  }],
  "showQuestionNumbers": false,
  "fitToContainer": true
};




const SURVEY_ID = 1;

const surveyComplete = (survey: any) => {
  const userId = 10
  survey.setValue("userId", userId);

  saveSurveyResultsMock(
    "https://your-web-service.com/" + SURVEY_ID,
    survey.data
  )
}

const survey = new Model(surveyJson);
survey.onComplete.add(surveyComplete);



function saveSurveyResults(url: string | URL, json: object) {
  fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=UTF-8'
    },
    body: JSON.stringify(json)
  })
    .then(response => {
      if (response.ok) {
        // Handle success
      } else {
        // Handle error
      }
    })
    .catch(error => {
      // Handle error
    });
}

function saveSurveyResultsMock(url: string | URL, json: object) {
  console.log('Saving survey results:', json);
}
</script>


<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
