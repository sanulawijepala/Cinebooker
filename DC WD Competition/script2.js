document.getElementById("submitBtn").addEventListener("click", function () {
    // Get selected movie and price
    const movieSelect = document.getElementById("movie");
    const movieName = movieSelect.options[movieSelect.selectedIndex].text;
    const moviePrice = movieSelect.value;

    // Get selected seats
    const selectedSeats = document.querySelectorAll(".seat.selected");
    let seatNumbers = [];
    selectedSeats.forEach(function (seat, index) {
        seatNumbers.push(index + 1);
    });

    const totalSeats = selectedSeats.length;
    const totalPrice = totalSeats * moviePrice;

    // Display ticket information
    document.getElementById("ticketMovie").textContent = movieName;
    document.getElementById("ticketSeats").textContent = seatNumbers.join(", ");
    document.getElementById("ticketTotal").textContent = totalPrice;

    // Show the ticket
    document.getElementById("ticket").style.display = "block";
});
