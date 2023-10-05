/*buttons*/
var login_btn = document.getElementById('login-btn');
var signup_btn = document.getElementById('sign-btn');
/*headigns*/
var login_heading = document.getElementById('login-heading');
var signup_heading = document.getElementById('signup-heading');
/*forms*/
var login_form = document.getElementById('login-form');
var signup_form = document.getElementById('signup-form');


function login_click() {
    login_btn.style.backgroundColor = '#ffffff';
    login_btn.style.opacity = '1';
    signup_btn.style.backgroundColor = '#d9d9d9';
    signup_btn.style.opacity = '0.5';
    login_heading.style.display = 'flex';
    signup_heading.style.display = 'none';
    login_form.style.display = 'block';
    signup_form.style.display = 'none';
  }
  
  function signup_click() {
    login_btn.style.backgroundColor = '#d9d9d9';
    login_btn.style.opacity = '0.5';
    signup_btn.style.backgroundColor = '#ffffff';
    signup_btn.style.opacity = '1';
    login_heading.style.display = 'none';
    signup_heading.style.display = 'flex';
    login_form.style.display = 'none';
    signup_form.style.display = 'block';
  }