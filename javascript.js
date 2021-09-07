
        var digits = '';
        var generatedPin;
        var tryLeft = 3;
        function generatePin(){
            document.getElementById('error').style.display = 'none';
            document.getElementById('right').style.display = 'none';
            var val = Math.floor(1000 + Math.random() * 9000);
            document.getElementById("pin").value = val;
            generatedPin = val;
        }
        function addDigit(paramdigit){
            digits = digits + paramdigit;
            if(digits.length == 5){
                alert("Your input should be 4 digits!");
                cleanField();
            }
            else {
                document.getElementById('pinDigit').value=digits;
            }
        }
        function cleanField(){
            digits = '';
            document.getElementById('pinDigit').value=digits;
        }
        function backStep(){
            digits = digits.substring(0, digits.length - 1);
            document.getElementById('pinDigit').value=digits;
        }
        function submit(){
            if(digits == generatedPin){
                document.getElementById('right').style.display = 'block';
                document.getElementById('right').style.backgroundColor = 'green';
                document.getElementById('error').style.display = 'none';
                window.setTimeout(function(){document.getElementById('right').style.backgroundColor = '#222436'}, 5000);
                cleanField();
            }
                else {
                    tryLeft = tryLeft - 1;
                    document.getElementById('left').innerHTML= tryLeft+' try left';
                    document.getElementById('right').style.display = 'none';
                    document.getElementById('error').style.display = 'block';
                    document.getElementById('error').style.backgroundColor = 'red';
                    if(tryLeft == 0){
                        document.getElementById("btn-sub").disabled = true;
                        document.getElementById('left').innerHTML= 'No try left! Please try later!';
                    }
                    cleanField();
                }
            }