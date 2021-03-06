new Vue({
    el: "#app",
    data: {
        playerHealth: 100,
        monsterHealth: 100,
        gameIsRunning: false,
        turns: []
    },
    methods: {
        
        startGame: function(){
            console.log("running")
            this.gameIsRunning = true;
            this.playerHealth = 100;
            this.monsterHealth = 100;
            this.turns = [];
        },
        attack: function() {
            console.log('running')
            var damage = this.calculateDamage(3,10)
            this.monsterHealth -= damage;
            this.turns.unshift({isPlayer: true, text: `Player hists monster for ${damage} damage!`})

            if(this.checkWin()){
                return;
            }

            this.monsterAttacks()

        },
        specialAttack: function(){
            var damage = this.calculateDamage(10,20)
            this.monsterHealth -= damage;
            this.turns.unshift({isPlayer: true, text: `Player hists monster for ${damage} damage!`})
            if(this.checkWin()){
                return;
            }
            this.monsterAttacks()
        },
        heal: function(){
            if(this.playerHealth <= 90){
                this.playerHealth += 10;
            }else {
                this.playerHealth = 100;
            }
            this.turns.unshift({isPlayer: true, text: `Player heals for 10 HP!`})
            this.monsterAttacks();
        },
        giveUp: function(){
            this.gameIsRunning = false;
        },
        monsterAttacks: function(){
            var damage = this.calculateDamage(2,12);
            this.playerHealth -=  damage
            this.checkWin()
            this.turns.unshift({isPlayer: false, text: `Monsters hits player for ${damage} damage!`})
        },
        calculateDamage: function(min, max){
            return Math.max(Math.floor(Math.random() * max + 1, min));
        },
        checkWin: function(){
            if(this.monsterHealth <= 0){
                if(confirm("you won! new game?")){
                    this.startGame()
                }else {
                    this.gameIsRunning = false;
                }
                return true;
            }else if(this.playerHealth <= 0){
                if(confirm("you lost! new game?")){
                    this.startGame()
                }else {
                    this.gameIsRunning = false;
                }
                return true;
            }
            return false
        },
        printSvg(){
                axios.post("localhost:1337/svgToPdf")
                .then(res => {
                    console.log(res)
                })
            }
    }
})