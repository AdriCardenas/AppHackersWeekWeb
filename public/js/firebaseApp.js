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
      
      var rootRef = firebase.database().ref();
      var columna = "";
      var j = 0;
       
      // TODO Utiliza función on en vez de once
      rootRef.once('value').then(function(snapshot) {
        console.log(snapshot.exists());
        console.log(snapshot);
        var bbdd = snapshot.exportVal();
        console.log(bbdd)
        console.log(snapshot.numChildren());
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

