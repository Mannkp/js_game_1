// let box = document.querySelector(".box");
        // let box = document.getElementsByClassName("box");
        let box2 = document.querySelector(".result");
        function check(){
            let input = document.querySelector('input[name="ans"]').value;
            // document.write(input);
            if(parseInt(input) === 2){
                // box.innerHTML = '<img src="pointing-that-is-correct.gif" />';
                box2.innerHTML = '<img src="pointing-that-is-correct.gif" style="heigth:80%; width:80%;" />';
                // box.innerHTML = '<p>hi there! my name is Mann : )</p>';
            }
            else{
                box2.innerHTML = '<img src="answer-chicken.gif" style="heigth:80%; width:80%;" />';
            }
        }