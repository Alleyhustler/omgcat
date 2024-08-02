window.onload = function() {
    var modal = document.getElementById("popup-modal");
    var menu = document.getElementById("menu");
    var span = document.getElementsByClassName("close-button")[0];

    // Function to show the modal with animation
    function showModal() {
        modal.classList.add("show");
        setTimeout(function() {
            menu.style.display = 'flex'; // Show menu after a delay
        }, 500); // Delay should match the modal animation duration
    }

    // Function to hide the modal with animation
    function hideModal() {
        modal.classList.remove("show");
        menu.style.display = 'none'; // Hide menu
    }

    // Show the modal when the page loads
    showModal();

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        hideModal();
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
            hideModal();
        }
    }
}
