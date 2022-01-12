var firebaseConfig = {
      apiKey: "AIzaSyADlKO3KkOk2uDsuxnRuWb6MHr_3rCRfEw",
      authDomain: "lets-chat-app-91245.firebaseapp.com",
      databaseURL: "https://lets-chat-app-91245-default-rtdb.firebaseio.com",
      projectId: "lets-chat-app-91245",
      storageBucket: "lets-chat-app-91245.appspot.com",
      messagingSenderId: "585527349091",
      appId: "1:585527349091:web:068d10b749095cb00b4d56"
    };
    
     firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");

function send()
{
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            Name:user_name,
            message:msg,
            like:0
       });

      document.getElementById("msg").value = "";
}
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();

function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
          window.location = "index.html";
}