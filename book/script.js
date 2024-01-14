// script.js
document.addEventListener("DOMContentLoaded", function() {
    const dateInput = document.getElementById("appointment_date");
    const timeSelect = document.getElementById("appointment_time");

    dateInput.addEventListener("change", function() {
        // Fetch available time slots based on the selected date (you'll need to implement this)
        const availableTimeSlots = getAvailableTimeSlots(this.value);

        // Clear existing options
        timeSelect.innerHTML = "";

        // Populate time slots in the dropdown
        availableTimeSlots.forEach(function(time) {
            const option = document.createElement("option");
            option.value = time;
            option.textContent = time;
            timeSelect.appendChild(option);
        });
    });
});

// Function to fetch available time slots (you need to implement this on the server side)
function getAvailableTimeSlots(selectedDate) {
    // Implement logic to fetch available time slots from the server based on the selected date
    // This can involve querying the database or using any other method to determine available times
    // Return an array of available time slots
    // For example:
    const mockAvailableTimeSlots = ["09:00 AM", "10:00 AM", "02:00 PM", "03:00 PM"];
    return mockAvailableTimeSlots;
}
