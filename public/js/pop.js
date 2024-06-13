document.addEventListener('DOMContentLoaded', function () {
    // Add click event listeners to buttons to show the popup
    let buttons = document.querySelectorAll(".btn");
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener("click", function () {
            document.querySelector(".popup").classList.add("active");
            console.log(buttons);
        });
    }

    // Add click event listener to the close button to hide the popup
    document.querySelector(".close-btn").addEventListener("click", function () {
        document.querySelector(".popup").classList.remove("active");
    });

    // Real-time validation for phone number input
    
    

    // Handle form submission
    document.getElementById('booking-form').addEventListener('submit', function (event) {
        event.preventDefault();

        const formData = new FormData(this);
        const package = formData.get('package');
        const name = formData.get('name');
        const email = formData.get('email');
        const phone = formData.get('phone');
        const errorMessage = document.getElementById('errorMessage');

      

        const whatsappMessage = `Package: ${package}%0AName: ${name}%0AEmail: ${email}%0APhone: ${phone}`;
        const whatsappUrl = `https://wa.me/7889703023?text=${whatsappMessage}`;

        window.open(whatsappUrl, '_blank');
        console.log("Form submitted");

        errorMessage.textContent = ''; // Clear any previous error message
    });
});