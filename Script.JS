let display=
document.getElementById('display');

        function appendValue(value) {
            display.value += value;
        }
    
        function clearDisplay() {
            display.value='';


        }
        function sqrt(){
            try{
                Math.sqrt(eval(display.value));

            } catch(err){
                display.value="error";
            }
        }
        function Calculator() {
            try{
                let expression=
                document.getElementById("display"). value;
                expression=expression.replace(/%/g,"/100");
                document.getElementById("display").value=eval(expression);
            } catch(err){
                document.getElementById("display").value="Error";
                        }
    }

            
