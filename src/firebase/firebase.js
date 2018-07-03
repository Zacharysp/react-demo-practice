import * as firebase from 'firebase';

const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};

firebase.initializeApp(config);

const database = firebase.database();

export { firebase, database as default };

// database.ref('expense').on('child_removed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });
// database.ref('expense').on('child_changed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// database.ref('expense').once('value').then((snapshot) => {
//     const expenses = []
//     snapshot.forEach(function (childSnapshot) {
//         expenses.push({
//             id: childSnapshot.key,
//             ...childSnapshot.val()
//         })
//     });
//     console.log(expenses);
// })

// const onExpensesChange = database.ref('expense').on('value', (snapshot) => {
//     const expenses = []
//     snapshot.forEach(function (childSnapshot) {
//         expenses.push({
//             id: childSnapshot.key,
//             ...childSnapshot.val()
//         })
//     });
//     console.log(expenses);
// }, (e) => {
//     console.log('This failed,', e);
// });

// database.ref('expense').push({
//     description: 'Gum',
//     note: '',
//     amount: 195,
//     createdAt: 0
// });


// database.ref('expense').push({
//     description: 'Rent',
//     note: '',
//     amount: 109500,
//     createdAt: moment(0).subtract(4, 'day').valueOf()
// });

// database.ref('expense').push({
//     description: 'Credit Card',
//     note: '',
//     amount: 4500,
//     createdAt: moment(0).add(4, 'day').valueOf()
// });

// database.ref().set({
//     name: 'Zach',
//     age: 26,
//     isSingle: false,
//     location: {
//         city: 'Union City',
//         state: 'CA'
//     }
// }).then(() => {
//     console.log('Data is saved');
// }).catch((e) => {
//     console.log('This failed,', e);
// });

// const onValueChange = database.ref().on('value', (snapshot) => {
//     console.log(snapshot.val());
// }, (e) => {
//     console.log('This failed,', e);
// });
// // database.ref('isSingle')
// //     .remove()
// //     .then(() => {
// //         console.log('Data is removed');
// //     }).catch((e) => {
// //         console.log('This failed,', e);
// //     });

// database.ref()
//     .update({
//         name: 'Tom',
//         age: 30,
//         job: 'Software developer',
//         'location/city': 'Fremont'
//     }).then(() => {
//         console.log('updated');
//     }).catch((e) => {
//         console.log('This failed,', e);
//     });

// database.ref().off(onValueChange);