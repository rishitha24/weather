var firebaseConfig = {
    apiKey: "AIzaSyBTMQdySZWAU_NmqAqrhhoCOP-aqgLxXD8",
    authDomain: "iotweather-206cf.firebaseapp.com",
    projectId: "iotweather-206cf",
    storageBucket: "iotweather-206cf.appspot.com",
    messagingSenderId: "593826630200",
    appId: "1:593826630200:web:54b81c950ed8b59bf6b4cd"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var dbRef = firebase.database().ref().child('UserName');

var name;

function Ready(){
    name = document.getElementById('name').value;
}

document.getElementById('insert').onclick = function(){
    Ready();
    firebase.database().ref('user/'+name).set({
        UserName: name,
    });
}