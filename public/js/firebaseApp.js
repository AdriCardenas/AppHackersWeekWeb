var primary = "";
var sizeBBDD = "";

(function () {

    // Initialize Firebase
    var config = {
      apiKey: "AIzaSyBg4jdP_xsVHcQpP54dS109gOv0ruT9IcI",
      authDomain: "apphackersweek.firebaseapp.com",
      databaseURL: "https://apphackersweek.firebaseio.com",
      projectId: "apphackersweek",
      storageBucket: "apphackersweek.appspot.com",
      messagingSenderId: "836215832085"
    };
    
  
  primary = firebase.initializeApp(config);

       //Get elements
      var columna1 = document.getElementById('columna1');
      var columna2 = document.getElementById('columna2');
      var columna3 = document.getElementById('columna3');
      var columna = "";
      var rootRef = firebase.database().ref();
      
      var j = 0;
       
      
    rootRef.on('value',function(snapshot) {   
        console.log("Exist? -> "+snapshot.exists());
        console.log("Snapshot -> ");
        console.log(snapshot);
        console.log("Database -> ");
        console.log(snapshot.exportVal());
        console.log("Registros -> "+snapshot.numChildren());
        columna1.innerHTML = "";columna2.innerHTML = "";columna3.innerHTML = "";
        snapshot.forEach(function(gifsSnapshot){
            columna = '<img src="'+gifsSnapshot.val().url+'" style="width:100%">'; 
            if((j+1) % 3 == 2)
            {
                columna1.innerHTML += columna;
            } else if((j+1) % 3 == 1)
            {
                columna2.innerHTML += columna;
            } else if((j+1) % 3 == 0)
            {
                columna3.innerHTML += columna;
            }
            j++;

        });
        
      }); 
    
    }()
);

