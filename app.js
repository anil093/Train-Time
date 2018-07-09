var config = {
    apiKey: "AIzaSyDZj0jc50JSya0wXYXb4UVYieuTi3ivwF8",
    authDomain: "anil-s-db.firebaseapp.com",
    databaseURL: "https://anil-s-db.firebaseio.com",
    projectId: "anil-s-db",
    storageBucket: "anil-s-db.appspot.com",
    messagingSenderId: "339399134349"
  };
  firebase.initializeApp(config);

  var database = firebase.database();
 // var currenttime = moment();




  $("#addTrainBtn").on("click",function(){
    var train = $("#train-input").val().trim();
    var destination = $("#Destination-input").val().trim();
    var frequency = $("#Frequency-input").val().trim();
    var nextArrival = $("#Arrival-input").val().trim();
    var minutesAway = $("#Minutes-input").val().trim();


    firebase.database().ref().push({
      train:train,
      destination:destination,
      frequency:frequency,
      nextArrival:nextArrival,
      minutesAway:minutesAway
    });

    console.log(train);
    console.log(destination);
    console.log(frequency);
    console.log(nextArrival);
    console.log(minutesAway);
    
    
    return false;
  })








    firebase.database().ref().on("child_added", function(childSnap) {

  //  $("#trainName").append(snapshot.val().train);
  //  $("#destination").append(snapshot.val().destination);
  //  $("#frequency").append(snapshot.val().frequency);
  //  $("#nextArrival").append(snapshot.val().nextArrival);
  //  $("#minutesAway").append(snapshot.val().minutesAway);


   //var markup = "<tr><td><input type='checkbox' name='record'></td><td>" + train + "</td><td>" + destination + "</td><td>"+frequency + "</td><td>"+nextArrival+"</td><td>"+minutesAway+"</tr>";
    

    var name = childSnap.val().train;
    var destination = childSnap.val().destination;
    var frequency = childSnap.val().frequency;
    var nextArrival = childSnap.val().nextArrival;
    var minutesAway = childSnap.val().minutesAway;
    var markup = "<tr><td>" + name + "</td><td>" + destination + "</td><td>"+frequency + "</td><td>"+nextArrival+"</td><td>"+minutesAway+"</tr>";
    $(".table").prepend(markup);
    //$("#trainTable > tbody").append("<tr><td>" + name + "</td><td>" + destination + "</td><td>" + frequency + "</td><td>" + next + "</td><td>" + min + "</td></tr>");
});