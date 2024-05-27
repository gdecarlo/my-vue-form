<script setup>
import 'survey-core/defaultV2.min.css';
import { Model } from 'survey-core';

const surveyJson = {
  elements: [{
    name: "Nombre",
    title: "Ingrese su nombre",
    type: "text"
  }, {
    name: "Apellido",
    title: "Ingrese su apellido",
    type: "text"
  }]
};

const survey = new Model(surveyJson);
</script>


<template>
  <h1>Template Vue 3.4</h1>
  <SurveyComponent :model="survey" />
</template>

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
