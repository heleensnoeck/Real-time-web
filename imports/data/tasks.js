import { Mongo } from 'meteor/mongo';


//To create the collection, we define a new todos module that creates a Mongo collection and exports it:
export const Tasks = new Mongo.Collection('tasks');