angular
    .module('guacamoleApp')
    .controller('GuacamoleController', GuacamoleController);

    function GuacamoleController(){
        var self = this;

        self.score = 0;
        self.holesList = [
            {moleIshere: false},
            {moleIshere: false},
            {moleIshere: false},
            {moleIshere: false},
            {moleIshere: false},
            {moleIshere: false},
            {moleIshere: false},
            {moleIshere: false},
            {moleIshere: true}
        ]
        self.whackMole = whackMole;
 

        // 3 - You might need a variable called self.score that starts at 0

        // 4 - You might also need an array called self.holes, which contains 9 hole objects. Each hole object could have a property that says if it contains the mole or not.

        // 7 - You could then write a whackMole function, that runs whenever a hole is clicked (but only if that hole contains the mole!). Remember to write the function and then link it to your controller using self.whackMole = whackMole;
        //     a) The whackMole function should increment the score
        //     b) ...and make the mole pop up in another random hole (you can use Math.random() just like in the plain JS version of this app)
    
    // function holesID(){
    //     return Math.floor(Math.random() * holes.length);
    // }
    function whackMole($index){
        alert($index);
        
        if (self.holesList[$index].moleIshere == true){
          alert("You hit a mole!");
          self.score++;
        } else if (self.holesList[$index].moleIshere == false){
            alert("Nothing is there!");
        }

    }

    }