document.getElementById("bookingForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    // Simple validation
    let name = document.getElementById("name").value;
    let age = document.getElementById("age").value;
    let problem = document.getElementById("problem").value;
    let timeslot = document.getElementById("timeslot").value;
    let date = document.getElementById("date").value;

    if (name === "" || age === "" || problem === "" || timeslot === "" || date === "") {
        alert("Please fill in all the fields.");
    } else {
        alert("Appointment booked successfully!");
        // Here you can also send the data to a backend server for processing
        // Example: use Fetch API or an AJAX request to send the data to a server
    }
});