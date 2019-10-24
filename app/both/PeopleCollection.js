import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';

const peopleSchema = new SimpleSchema(
    {
      first: String,
      last: String,
      age: SimpleSchema.Integer,
      city: String
    }
);

export const people = new Mongo.Collection('People');

people.attachSchema(peopleSchema);
