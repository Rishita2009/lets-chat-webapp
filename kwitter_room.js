var firebaseConfig = {
    apiKey: "AIzaSyDj28d8ydSPmqjMlGGthjWXiOEV0dfIN50",
    authDomain: "let-chat-webapp.firebaseapp.com",
    projectId: "let-chat-webapp",
    storageBucket: "let-chat-webapp.appspot.com",
    messagingSenderId: "514782019928",
    appId: "1:514782019928:web:59805581e7dba004aca52d",
    measurementId: "G-R3833L7C6H"
  };
  
  // Initialize Firebase
   firebase.initializeApp(firebaseConfig);

user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome "  +  user_name;

function addRoom()
{
  room_name=document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
purpose :"adding Room Name "
  });
  localStorage.setItem("room_name",room_name);
  window.location = "kwitter_page.html";
}




function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
       //Start code
console.log ("Room Name -" +   Room_names);
row="<div class=' room_name ' id =" + Room_names +" onclick'redirectedToRoomName(this.id)>#"+ Room_names +"</div><hr>";
document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function redirectedToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location = "kwitter_page.html";
}

