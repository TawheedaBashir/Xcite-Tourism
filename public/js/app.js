// const contactForm = document.querySelector('.contact-form');
// let name = document.getElementById('Name');
// let email = document.getElementById('email');
// let message = document.getElementById('message');
// contactForm.addEventListener('submit',(e) =>{
//    e.preventDefault();
// let formData = {
//     name: Name.value,
//     email: email.value,
//     message: message.value

// }
// let xhr = new XMLHttpRequest();
//   xhr.open ('POST','/');
//   xhr.setRequestHeader('content-type', 'application/json');
//   xhr.onload = function()
//   {
// console.log(xhr.responseText);
// if (xhr.responseText == 'success'){
//     alert('Thank you for contacting us!');
//     Name.value = '';
//     email.value = '';
//     message.value = '';

// } else
// {
//     alert('something went wrong!')
// }
//   }
//   xhr.send(JSON.stringify(formData));


// })

const form = document.getElementById('form');


form.addEventListener('submit', function(e) {
  e.preventDefault();
  const formData = new FormData(form);
  const object = Object.fromEntries(formData);
  const json = JSON.stringify(object);
  

    fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: json
        })
        .then(async (response) => {
            let json = await response.json();
            if (response.status == 200) {
              alert('Thank you for contacting us!');
            } else {
                console.log(response);
                result.innerHTML = json.message;
            }
        })
        .catch(error => {
            console.log(error);
            result.innerHTML = "Something went wrong!";
        })
        .then(function() {
            form.reset();
            setTimeout(() => {
                result.style.display = "none";
            }, 3000);
        });
});
