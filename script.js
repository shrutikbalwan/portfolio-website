document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById('contactForm');

    if (form) {
        form.addEventListener('submit', function (event) {
            event.preventDefault();

            const name = document.getElementById('name').value.trim();
            alert(`Thank you, ${name || 'there'}! Your message has been received.`);
            form.reset();
        });
    }
});
