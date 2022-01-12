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
document.getElementById("user_name").innerHTML = "WELCOME  "+ user_name + "!";



function addRoom()
{
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });

      localStorage.setItem("room_name", room_name);

      window.location = "kwitter_page.html";
}





function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+Room_names +"</div><hr>"
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function redirectToRoomName(Name)
{
      console.log(Name);
      localStorage.setItem("room_name", Name);
        window.location = "kwitter_page.html";
}

function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
          window.location = "index.html";
}

