window.alert("Welcome to my Portfolio. It gives me great pleasure to show you my work.");


document.querySelectorAll('.cards-container .card').forEach(card => {
    const img  = card.querySelector('img');
    const link = card.querySelector('a');
    const originalText = link.textContent;

    
    card.addEventListener('mouseover', () => {
    
      img.style.filter = 'brightness(40%) saturate(200%)';
      link.textContent = 'Click to explore more';
    });

    
    card.addEventListener('mouseout', () => {
      img.style.filter = '';
      link.textContent = originalText;
    });
  });


  
  const form         = document.getElementById('contact-form');
  const statusBox    = document.getElementById('status-box');
  const statusIcon   = document.getElementById('status-icon');
  const statusText   = document.getElementById('status-text');
  const nameInput    = document.getElementById('full-name');
  const emailInput   = document.getElementById('email');
  const messageInput = document.getElementById('message');
  const submitBtn    = form.querySelector('button[type="submit"]');
  const allFields    = document.querySelectorAll('.contact-form input, .contact-form textarea');

  
  const hint = document.createElement('p');
  hint.id = 'hint-text';
  hint.textContent = '✏️ Please fill in all fields before submitting.';
  form.prepend(hint);

  
  messageInput.addEventListener('keyup', function onKeyUp(e) {
    hint.textContent = `Characters typed: ${this.value.length}`;
  });

 
  allFields.forEach(field => {
    field.addEventListener('mouseover', ()  => field.classList.add('hover'));
    field.addEventListener('mouseout',  ()  => field.classList.remove('hover'));
  });

  
  submitBtn.addEventListener('click', () => {
    console.log('Submit button was clicked');
  });

  
  function showStatus(message, success) {
    statusIcon.textContent = success ? '✅' : '❌';
    statusText.textContent = message;

    
    statusBox.classList.toggle('success', success);
    statusBox.classList.toggle('error', !success);

    
    const firstChild = statusBox.firstElementChild;          
    firstChild.parentElement.style.borderColor = success
      ? 'green'
      : 'red';
  }

  
  form.addEventListener('submit', function onSubmit(e) {
    e.preventDefault(); 

   
    if (nameInput.value && emailInput.value && messageInput.value) {
      showStatus('Your message has been sent!', true);
    } else {
      showStatus('Oops—please fill in every field.', false);
    }
  });