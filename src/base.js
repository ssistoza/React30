import Rebase from 're-base';
import firebase from 'firebase/app';
import 'firebase/firestore';

const app = firebase.initializeApp({
  apiKey: 'AIzaSyDJB5wk6C9_g9Y2DTHJNCyalf68TOkqo80',
  authDomain: 'react30-50319.firebaseapp.com',
  projectId: 'react30-50319',
  databaseURL: 'https://react30-50319.firebaseio.com',
});

var db = firebase.firestore(app);
const settings = { timestampsInSnapshots: true };
db.settings(settings);

var base = Rebase.createClass(db);

// Nameed export.
export { db };

// default export.
export default base;
