<template>
    <div>
        <h2>Calcular en base a inputs</h2>
        <SurveyComponent :model="survey" />
    </div>
</template>

<script setup lang='ts'>
import axios from 'axios';


import { Model } from 'survey-core';
const json = {
  "elements": [
    {
      "type": "panel",
      "name": "neapolitan",
      "elements": [
        {
          "type": "expression",
          "name": "price_n",
          "minWidth": "220px",
          "title": "Pizza Neapolitan",
          "description": "tomato sauce, mozzarella, anchovies, bazil",
          "expression": "5 + {size_n}",
          "displayStyle": "currency"
        },
        {
          "type": "image",
          "name": "pic_n",
          "width": "180px",
          "minWidth": "180px",
          "maxWidth": "180px",
          "startWithNewLine": false,
          "imageLink": "",
          "contentMode": "image",
          "imageFit": "cover",
          "imageHeight": 80,
          "imageWidth": 180
        },
        {
          "type": "dropdown",
          "name": "size_n",
          "minWidth": "220px",
          "title": "Size",
          "titleLocation": "left",
          "defaultValue": 1,
          "choices": [
            { "value": 0, "text": "Small" },
            { "value": 1, "text": "Medium" },
            { "value": 2, "text": "Large" }
          ],
          "allowClear": false
        },
        {
          "type": "dropdown",
          "name": "qty_n",
          "minWidth": "220px",
          "startWithNewLine": false,
          "title": "Qty",
          "titleLocation": "left",
          "choices": [ 1, 2, 3, 4, 5 ]
        }
      ]
    },
    {
      "type": "panel",
      "name": "pepperoni",
      "elements": [
        {
          "type": "expression",
          "name": "price_p",
          "title": "Pepperoni",
          "description": "tomato sauce, pepperoni, red peppers, onion",
          "expression": "5 + {size_p}",
          "displayStyle": "currency"
        },
        {
          "type": "image",
          "name": "pic_p",
          "width": "180px",
          "minWidth": "180px",
          "maxWidth": "180px",
          "startWithNewLine": false,
          "imageLink": "",
          "contentMode": "image",
          "imageFit": "cover",
          "imageHeight": 80,
          "imageWidth": 180
        },
        {
          "type": "dropdown",
          "name": "size_p",
          "minWidth": "220px",
          "title": "Size",
          "titleLocation": "left",
          "defaultValue": 1,
          "choicesFromQuestion": "size_n",
          "allowClear": false
        },
        {
          "type": "dropdown",
          "name": "qty_p",
          "minWidth": "220px",
          "startWithNewLine": false,
          "title": "Qty",
          "titleLocation": "left",
          "choicesFromQuestion": "qty_n"
        }
      ]
    },
  
    {
      "type": "expression",
      "name": "total",
      "title": "Total",
      "expression": "{price_n} * {qty_n} + {price_m} * {qty_m} + {price_p} * {qty_p}",
      "displayStyle": "currency"
    }
  ],
  "showQuestionNumbers": "off",
  "questionErrorLocation": "bottom"
}

const survey = new Model(json);
    survey.onComplete.add((sender, options) => {
        console.log(JSON.stringify(sender.data, null, 3));
    });
</script>