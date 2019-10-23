import { people } from '../both/PeopleCollection.js';

if (people.find().count() === 0) {
  people.insert({ first: 'Philip', last: 'Johnson', age: 60, city: 'Kailua' });
  people.insert({ first: 'Joanne', last: 'Amberg', age: 58, city: 'Kailua' });
  people.insert({ first: 'Jenna', last: 'Corin', age: 31, city: 'Boulder Creek' });
  people.insert({ first: 'Katie', last: 'Kai', age: 25, city: 'Palo Alto' });
  people.insert({ first: 'Doris', last: 'Johnson', age: 93, city: 'Naples' });
}
