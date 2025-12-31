let calculation=JSON.parse(localStorage.getItem('calculation'))|| '';
        function updateCalculation(value){
            calculation+=value;
            document.querySelector('.display').innerHTML=`${calculation}`;  
            const savedCalculation = JSON.stringify(calculation);
            localStorage.setItem('calculation',savedCalculation);                   
        }
