
        
        
        //calculer score
        let score = JSON.parse(localStorage.getItem('score'));
        let socor = document.getElementById("js-score");
        
       

    console.log("heyy");


    console.log("git test");

    console.log("push v2");


    console.log("pushv3")
        if(score === null)
                {
                    score = {
                        wins : 0,
                        losses: 0,
                        Ties: 0
                    };
                }




        function resetGame(){
            score.wins = 0;
            score.losses = 0;
            score.Ties = 0;

            localStorage.removeItem('score');
            
        }

 

        //playgame = playermove vs computermove 
        function playGame(playerMove){
            const computerMove = picKComputerMove();
             
            let result = '';

            if (playerMove === 'scissors') {
                if (computerMove === 'rock') {
                    result = 'You lose.';
                } else if (computerMove === 'paper') {
                    result = 'You win.';
                } else if (computerMove === 'scissors') {
                    result = 'Tie.';
          }

        } else if (playerMove === 'paper') {
                if (computerMove === 'rock') {
                    result = 'You win.';
                } else if (computerMove === 'paper') {
                    result = 'Tie.';
                } else if (computerMove === 'scissors') {
                    result = 'You lose.';
                }
          
        } else if (playerMove === 'rock') {
                if (computerMove === 'rock') {
                    result = 'Tie.';
                } else if (computerMove === 'paper') {
                    result = 'You lose.';
                } else if (computerMove === 'scissors') {
                    result = 'You win.';
                }
        }

        // calculer score + result
        if( result ==='You win.'){
            score.wins += 1 ;
        } else if(result === 'You lose.'){
            score.losses += 1 ;
        } else{
            score.Ties += 1 ;
        }


      //update score in the html page 

      document.getElementById('js-move')
                .innerHTML = `You <img src="${playerMove}-emogie.png" alt="" class="imgs">  Computer <img src="${computerMove}-emogie.png" alt="" class="imgs">` ;

            document.getElementById("js-result")
                .innerHTML = result;
        }
        localStorage.setItem('score', JSON.stringify(score));
       

        function updcode(){
             document.getElementById('js-score')
                .innerHTML =  `Wins: ${score.wins}, Loses: ${score.losses}, Ties: ${score.Ties}`;
        }

        let isAutoplaying = false;
        let intervalId;

        function autoPlay(){
            if(!isAutoplaying){
                intervalId =  setInterval(function(){
                const playerMove = picKComputerMove();
                playGame(playerMove);
              }, 2000);
              isAutoplaying = true;
            }else{
                clearInterval(intervalId);
                isAutoplaying = false;
            }
        }
  
      

      

        //computer move
        function picKComputerMove(){  
            const randomNumber = Math.random();

            let computerMove ='';

            
            if (randomNumber >= 0 && randomNumber < 1 / 3) {
            computerMove = 'rock';
            } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
            computerMove = 'paper';
            } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
            computerMove = 'scissors';
            }

            return computerMove;
        }