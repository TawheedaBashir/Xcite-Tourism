const contactForm = document.querySelector('.contact-form');
let name = document.getElementById('Name');
let email = document.getElementById('email');
let message = document.getElementById('message');
contactForm.addEventListener('submit',(e) =>{
   e.preventDefault();
let formData = {
    name: Name.value,
    email: email.value,
    message: message.value

}
let xhr = new XMLHttpRequest();
  xhr.open ('POST','/');
  xhr.setRequestHeader('content-type', 'application/json');
  xhr.onload = function()
  {
console.log(xhr.responseText);
if (xhr.responseText == 'success'){
    alert('Thank you for contacting us!');
    Name.value = '';
    email.value = '';
    message.value = '';

} else
{
    alert('something went wrong!')
}
  }
  xhr.send(JSON.stringify(formData));


})