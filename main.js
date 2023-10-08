const section1 = document.getElementById('s1');
const pass1 = document.getElementById('p1');
const error = document.getElementById('error-message');
const uploadButton = document.querySelector('#up');
const uploadedFile = document.querySelector('#fileid');


const section2 = document.getElementById('s2');
const pass2 = document.getElementById('p2');
const downloadButton = document.querySelector('#dd');



uploadButton.addEventListener('click', (event) => {
  event.preventDefault();
  section1.style.display = 'none';
  section2.style.display = 'block';
});

downloadButton.addEventListener('click', (event) => {
  event.preventDefault();

  if (pass1.value === pass2.value) {
    console.log('yes');

    location.reload();
  } else {
    console.log('No');
    $('.error-message').text('Password is not correct*');
  }
});