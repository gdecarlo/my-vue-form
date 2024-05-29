import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import { surveyLocalization } from "survey-core";
import "survey-core/survey.i18n";
import { surveyPlugin } from 'survey-vue3-ui'
import 'survey-core/defaultV2.min.css';

import { createRouter,createWebHistory } from 'vue-router'

surveyLocalization.defaultLocale = "es";
//Componentes
import Home from './components/Home.vue'
import Survey1 from './components/surveys/Survey1.vue'
import Survey2 from './components/surveys/Survey2.vue'
import SurveySatisfaccion from './components/surveys/SurveySatisfaccion.vue'
import SurveyExpresion from './components/surveys/SurveyExpresion.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: Home },
        { path: '/survey-1', component: Survey1 },
        { path: '/survey-2', component: Survey2 },
        { path: '/survey-satisfaccion', component: SurveySatisfaccion },
        { path: '/survey-expresion', component: SurveyExpresion },
    ],
    
})

createApp(App)
.use(router)
.use(surveyPlugin).mount('#app')
