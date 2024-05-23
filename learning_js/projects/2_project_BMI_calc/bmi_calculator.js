const form = document.querySelector("form");
// console.log(form);
form.addEventListener('submit', function(e){
    e.preventDefault()
    const height_value = parseInt(document.querySelector('#height').value)
    const weight_value = parseInt(document.querySelector('#weight').value)
    const result_value = document.querySelector('#result')
    
    // console.log(height_value.weight_value,result_value);

    if(height_value === '' || height_value <0 || isNaN(height_value)){
        result_value.innerHTML = `Please give a valid height ${height_value}`
    } else if(weight_value === '' || weight_value <0 || isNaN(weight_value)){
        result_value.innerHTML = `Please give a valid weight ${weight_value}`
    } else {
        const bmi = (weight_value / ((height_value *height_value)/10000)).toFixed(2);
        let val = ''
        if (bmi < 18.6){
            val = "Under weight"
            result_value.style.color = "red"
        } else if(18.6 <= bmi && bmi <= 24.9) {
            val = "Normal range"
            result_value.style.color = "green"
        } else{
            val = "Overweight"
            result_value.style.color = "red"
        }
        console.log(bmi,val);
        // show the resut 
        result_value.innerHTML = `<br/><span>${bmi}</span> with <span>${val}</span>`
    }
})