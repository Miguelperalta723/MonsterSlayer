new Vue({
    el: "#app",
    data: {
        playerHealth: 100,
        monsterHealth: 100,
        gameIsRunning: false
    },
    methods: {
        
        startGame: function(){
            console.log("running")
            this.gameIsRunning = true;
            this.playerHealth = 100;
            this.monsterHealth = 100;
        },
        attack: function() {
            console.log('running')
            var max = 10;
            var min = 3;
            var damage = Math.max(Math.floor(Math.random() * max + 1, min));
            this.monsterHealth -= damage;

            if(this.monsterHealth <= 0){
                alert("you won!!");
                this.gameIsRunning = false;
                return;
            }

            max = 12;
            min = 3;
            damage = Math.max(Math.floor(Math.random() * max + 1, min));
            this.playerHealth -= damage;

            if(this.playerHealth <= 0){
                alert("you lose!!");
                this.gameIsRunning = false;
                return;
            }

        },
        specialAttack: function(){

        },
        heal: function(){

        },
        giveUp: function(){

        }
    }
})