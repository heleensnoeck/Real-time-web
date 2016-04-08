import { Template } from 'meteor/templating';

import { Tasks } from '../data/tasks.js';
 
import './body.html';

//Also, the body section can be referenced in your JavaScript with Template.body. 
//Think of it as a special "parent" template, that can include the other child templates.
 
Template.body.helpers({
  tasks() {
     return Tasks.find({}, { sort: { createdAt: -1 } }); // loopt anderom daarom komt de nieuwe taak boven te staan
  },
});

Template.body.events({ // geef hem een event mee 
  'submit .new-task'(event) { // luister naar het event submit .new-task
    // Prevent default browser form submit
    event.preventDefault();
 
    // Get value from form element
    const target = event.target;
    const text = target.text.value;
 
    // Insert a task into the collection
    Tasks.insert({
      text,
      createdAt: new Date(), // current time
    });
 
    // Clear form
    target.text.value = '';
  },
});