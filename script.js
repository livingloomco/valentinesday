document.getElementById('openButton').addEventListener('click', function() {
    const modalContainer = document.getElementById('modalContainer');
    const modal = document.getElementById('myModal');
    const body = document.body;

    modalContainer.style.display = 'flex';

    // Trigger the background color fade for the body
    setTimeout(() => {
        body.style.backgroundColor = 'rgba(255, 214, 226, 0.5)'; // Set the final background color for the body
    }, 10);

    // Trigger the animation by adding the 'show' class
    setTimeout(() => {
        modal.classList.add('show');
    }, 10);
});

document.getElementById('closeModal').addEventListener('click', function() {
    const modalContainer = document.getElementById('modalContainer');
    const modal = document.getElementById('myModal');
    const body = document.body;

    modal.classList.remove('show');

    // Hide the modal container after the animation is complete
    setTimeout(() => {
        modalContainer.style.display = 'none';
        body.style.backgroundColor = 'white'; // Set the initial background color for the body
    }, 300);
});

document.getElementById('modalButton').addEventListener('click', function() {
    const modalContainer = document.getElementById('modalContainer');
    const modal = document.getElementById('myModal');
    const body = document.body;

    modal.classList.remove('show');

    // Hide the modal container after the animation is complete
    setTimeout(() => {
        modalContainer.style.display = 'none';
        body.style.backgroundColor = 'white'; // Set the initial background color for the body
    }, 300);
});
