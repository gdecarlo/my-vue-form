import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { surveyPlugin } from 'survey-vue3-ui'

createApp(App).use(surveyPlugin).mount('#app')
