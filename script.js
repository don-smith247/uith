
let navbar = document.querySelector(".navbar");
let searchBox = document.querySelector(".search-box .bx-search");


searchBox.addEventListener("click", ()=>{
  navbar.classList.toggle("showInput");
  if(navbar.classList.contains("showInput")){
    searchBox.classList.replace("bx-search" ,"bx-x");
  }else {
    searchBox.classList.replace("bx-x" ,"bx-search");
  }
});


let navLinks = document.querySelector(".nav-links");
let menuOpenBtn = document.querySelector(".navbar .bx-menu");
let menuCloseBtn = document.querySelector(".nav-links .bx-x");
menuOpenBtn.onclick = function() {
navLinks.style.left = "0";
}
menuCloseBtn.onclick = function() {
navLinks.style.left = "-100%";
}


let htmlcssArrow = document.querySelector(".htmlcss-arrow");
htmlcssArrow.onclick = function() {
 navLinks.classList.toggle("show1");
}
let moreArrow = document.querySelector(".more-arrow");
moreArrow.onclick = function() {
 navLinks.classList.toggle("show2");
}
let jsArrow = document.querySelector(".js-arrow");
jsArrow.onclick = function() {
 navLinks.classList.toggle("show3");
}

function calculateBMI() {
  const weight = parseFloat(document.getElementById('bmi-weight').value);
  const height = parseFloat(document.getElementById('bmi-height').value) / 100; // convert height to meters

  if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
      alert('Please enter valid values for both weight and height.');
      return;
  }

  const bmi = weight / (height * height);
  const result = `Your BMI is: ${bmi.toFixed(2)}`;

  let category = '';
  if (bmi < 18.5) {
      category = 'Underweight';
  } else if (bmi >= 18.5 && bmi < 24.9) {
      category = 'Normal weight';
  } else if (bmi >= 25 && bmi < 29.9) {
      category = 'Overweight';
  } else {
      category = 'Obesity';
  }

  document.getElementById('bmi-result').innerHTML = `${result} (${category})`;
}


function calculatePregnancy() {
  const lastPeriodDate = new Date(document.getElementById('last-period').value);

  if (isNaN(lastPeriodDate)) {
      alert('Please enter a valid date.');
      return;
  }

  const dueDate = new Date(lastPeriodDate);
  dueDate.setDate(dueDate.getDate() + 280);

  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  const result = `Your estimated due date is: ${dueDate.toLocaleDateString('en-US', options)}`;

  document.getElementById('pregnancy-result').innerHTML = result;
}
