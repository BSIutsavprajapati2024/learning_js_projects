# Projects

## project link
[Click Here for Project](https://www.w3schools.com/js/js_graphics_canvas.asp)

# Solution code
## project1

```javascript
const buttons = document.querySelectorAll(".button");
const body = document.querySelector("body");

buttons.forEach( function (button){
    console.log(button);
    button.addEventListener('click', function(e){
        console.log(e);
        console.log(e.target);
        if (e.target.id === "green"){
            body.style.backgroundColor = e.target.id;
        }
        if (e.target.id === "blue"){
            body.style.backgroundColor = e.target.id;
        }
        if (e.target.id === "red"){
            body.style.backgroundColor = e.target.id;
        }
        if (e.target.id === "yellow"){
            body.style.backgroundColor = e.target.id;
        }
    });
});

```

## project2

```javascript
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
});


```

## project3

```javascript
const clock = document.getElementById("clock")

// // dyamic time every 1 second
// setInterval(function(){
//     let date = new Date()
//     clock.innerText = date.toLocaleTimeString();
// },1000)

// static time
let date = new Date()
clock.innerHTML = date.toLocaleTimeString();