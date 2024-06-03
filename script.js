let inning = '';
let inning1='';

        function tossAcoin(call) {
            const outcome = Math.random() < 0.5 ? 'heads' : 'tails';
            const result = (call === outcome) 
                ? `It's ${outcome}. You Won the Toss!` 
                : `It's ${outcome}. You Lost the Toss.`;
            document.getElementById('toss-display').innerHTML = `<h1>${result}</h1>`;
            if(result===`It's ${outcome}. You Lost the Toss.`){
                document.getElementById('heads').style.display = 'none';
                    document.getElementById('tails').style.display='none';
            }
            if (call === outcome) {
                document.getElementById('heads').innerHTML = "Batting";
                document.getElementById('tails').innerHTML = "Bowling";
                document.getElementById('heads').setAttribute("onclick", "chooseInning('bat')");
                document.getElementById('tails').setAttribute("onclick", "chooseInning('bowl')");
            } else {
                inning1 = Math.random() < 0.5 ? 'bat' : 'bowl';
                setTimeout(() => {
                    document.getElementById('toss-display').innerHTML = `<h1>Computer chooses to ${inning1} first</h1>`;
                    document.getElementById('heads').style.display = 'none';
                    document.getElementById('tails').style.display='none';
                    document.getElementById('start-game').style.display='block';
                }, 2000);
            }
        }

        function chooseInning(choice) {
            inning = choice;
            document.getElementById('toss-display').innerHTML = `<h1>You chose to ${inning} first</h1>`;
            document.getElementById('heads').style.display = 'none';
            document.getElementById('tails').style.display='none';
            document.getElementById('start-game').style.display='block';
            
        }
        function startGame() {
            localStorage.setItem('inning', inning);
            localStorage.setItem('inning1', inning1);

            window.location.href = '2nd.html';
        }
           

       
