document.addEventListener('DOMContentLoaded', function() {
  // Movie data with all 20 movies from the reference
  const movies = {
      "John Wick: Chapter 4 (Rs.2000)": {
          poster: "johnwick.jpg",
          rating: "4.5",
          duration: "2h 49m",
          genre: "Action, Thriller",
          synopsis: "John Wick uncovers a path to defeating The High Table. But before he can earn his freedom, Wick must face off against a new enemy with powerful alliances across the globe."
      },
      "Avatar: The Way of Water (Rs.1500)": {
          poster: "avatar1.jpg",
          rating: "4.3",
          duration: "3h 12m",
          genre: "Sci-Fi, Adventure",
          synopsis: "Jake Sully lives with his newfound family formed on the planet of Pandora. When a familiar threat returns, Jake must work with Neytiri to protect their home."
      },
      "Black Panther: Wakanda Forever (Rs.1800)": {
          poster: "blackpanter.jpg",
          rating: "4.1",
          duration: "2h 41m",
          genre: "Action, Adventure",
          synopsis: "The people of Wakanda fight to protect their home from intervening world powers as they mourn the death of King T'Challa."
      },
      "The Batman (Rs.1900)": {
          poster: "The batman.jpg",
          rating: "4.2",
          duration: "2h 56m",
          genre: "Action, Crime",
          synopsis: "When a sadistic serial killer begins murdering key political figures in Gotham, Batman is forced to investigate the city's hidden corruption."
      },
      "Jurassic World Dominion (Rs.1700)": {
          poster: "jurasic.jpg",
          rating: "3.9",
          duration: "2h 27m",
          genre: "Adventure, Sci-Fi",
          synopsis: "Four years after the destruction of Isla Nublar, dinosaurs now live and hunt alongside humans all over the world."
      },
      "Top Gun: Maverick (Rs.2200)": {
          poster: "topgun.jpg",
          rating: "4.7",
          duration: "2h 11m",
          genre: "Action, Drama",
          synopsis: "After more than thirty years of service as one of the Navy's top aviators, Pete Mitchell is where he belongs, pushing the envelope as a courageous test pilot."
      },
      "Doctor Strange 2 (Rs.2000)": {
          poster: "strange.jpg",
          rating: "4.0",
          duration: "2h 6m",
          genre: "Fantasy, Action",
          synopsis: "Doctor Strange teams up with a mysterious teenage girl from his dreams who can travel across multiverses, to battle multiple threats."
      },
      "The Northman (Rs.1600)": {
          poster: "thenorthman.jpeg",
          rating: "4.1",
          duration: "2h 17m",
          genre: "Action, Drama",
          synopsis: "A young Viking prince is on a quest to avenge his father's murder when he's suddenly captured by slavers and taken to Iceland."
      },
      "Everything Everywhere All at Once (Rs.1800)": {
          poster: "everything.jpg",
          rating: "4.8",
          duration: "2h 19m",
          genre: "Sci-Fi, Comedy",
          synopsis: "A middle-aged Chinese immigrant is swept up into an insane adventure in which she alone can save existence by exploring other universes connecting with the lives she could have led."
      },
      "Avengers (Rs.1900)": {
          poster: "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
          rating: "5.0",
          duration: "2h 23m",
          genre: "Action, Sci-Fi",
          synopsis: "Avengers unites Earth's heroes to battle a formidable enemy. Differences fade as they join forces, showcasing teamwork and courage to save humanity."
      },
      "Spider Man: Across the Spider Verse (Rs.1700)": {
          poster: "https://m.media-amazon.com/images/M/MV5BNzQ1ODUzYjktMzRiMS00ODNiLWI4NzQtOTRiN2VlNTNmODFjXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg",
          rating: "3.9",
          duration: "2h 20m",
          genre: "Fantasy, Adventure",
          synopsis: "Across the Spider-Verse follows Miles Morales as he embarks on an interdimensional journey. Encountering new Spider-People, he confronts dangerous threats and discovers his true potential as a hero."
      },
      "M3GAN (Rs.2200)": {
          poster: "https://m.media-amazon.com/images/M/MV5BMDk4MTdhYzEtODk3OS00ZDBjLWFhNTQtMDI2ODdjNzQzZTA3XkEyXkFqcGdeQXVyMjMxOTE0ODA@._V1_.jpg",
          rating: "4.7",
          duration: "1h 42m",
          genre: "Sci-fi, Horror",
          synopsis: "M3GAN is a sci‑fi horror thriller where an advanced AI doll, created as a child's companion, becomes dangerously self‑aware—leading to chilling and unpredictable consequences."
      },
      "Oppenheimer (Rs.2000)": {
          poster: "Oppenheimer_(film).jpg",
          rating: "4.0",
          duration: "3h 0m",
          genre: "Biography, Drama",
          synopsis: "Oppenheimer is an intense biographical drama chronicling J. Robert Oppenheimer's journey as the 'father of the atomic bomb,' exploring his moral dilemmas and the impact of scientific breakthroughs."
      },
      "The Bullet Train (Rs.1600)": {
          poster: "Bullet_Train_(poster).jpeg",
          rating: "4.1",
          duration: "2h 7m",
          genre: "Action, Thriller",
          synopsis: "An action-packed thriller set aboard a high-speed train, where multiple assassins' intersecting paths create a fast-paced, unpredictable adventure."
      },
      "Dune: Part Two (Rs.1800)": {
          poster: "dune.jpg",
          rating: "4.8",
          duration: "2h 46m",
          genre: "Sci-Fi, Adventure",
          synopsis: "An epic continuation of Paul Atreides' journey, blending political intrigue and breathtaking visuals as the struggle for control of Arrakis intensifies."
      },
      "Harry Potter (Rs.2000)": {
          poster: "harrysorcerer.jpg",
          rating: "4.1",
          duration: "2h 32m",
          genre: "Fantasy, Adventure",
          synopsis: "The Harry Potter series follows a young wizard's journey at Hogwarts as he uncovers magical secrets, forms lasting friendships, and confronts dark forces threatening his world."
      },
      "Percy Jackson: Lightning Thief (Rs.1500)": {
          poster: "percyjacka.jpg",
          rating: "3.9",
          duration: "1h 58m",
          genre: "Fantasy, Adventure",
          synopsis: "Percy Jackson, the son of Poseidon, must retrieve Zeus' stolen lightning bolt to prevent war. With his friends Annabeth and Grover, he battles mythical creatures and uncovers his destiny."
      },
      "Pirates of the Caribbean: The Curse of the Black Perl (Rs.1500)": {
          poster: "piratesofcar.jpg",
          rating: "4.3",
          duration: "2h 23m",
          genre: "Adventure, Fantasy",
          synopsis: "Captain Jack Sparrow and Will Turner team up to rescue Elizabeth Swann from cursed pirates led by Barbossa, who seek to break an ancient curse turning them into undead."
      },
      "Bagman (Rs.2000)": {
          poster: "bagman.jpg",
          rating: "4.5",
          duration: "1h 45m",
          genre: "Horror, Thriller",
          synopsis: "A man confronts his childhood fears when the mythical Bagman returns, threatening his family in this suspenseful horror thriller."
      },
      "Lord of Rings (Rs.1700)": {
          poster: "lord of ring.jpg",
          rating: "4.7",
          duration: "2h 58m",
          genre: "Adventure, Fantasy",
          synopsis: "Frodo Baggins, a young hobbit, embarks on a perilous journey to destroy the One Ring and defeat the dark lord Sauron. Joined by a fellowship of allies, he must navigate treacherous lands, battle evil forces, and resist the Ring's corrupting power."
      }
  };

  // DOM Elements
  const movieSelect = document.getElementById('movie');
  const selectedMoviePoster = document.getElementById('selectedMoviePoster');
  const selectedMovieTitle = document.getElementById('selectedMovieTitle');
  const movieRating = document.getElementById('movieRating');
  const movieDuration = document.getElementById('movieDuration');
  const movieGenre = document.getElementById('movieGenre');
  const moviePrice = document.getElementById('moviePrice');
  const movieSynopsis = document.getElementById('movieSynopsis');
  const seatMap = document.getElementById('seatMap');
  const proceedBtn = document.getElementById('proceedBtn');
  const modal = document.getElementById('ticketModal');
  const closeModal = document.querySelector('.close-modal');
  const summaryMovie = document.getElementById('summaryMovie');
  const summaryDate = document.getElementById('summaryDate');
  const summaryTime = document.getElementById('summaryTime');
  const summarySeats = document.getElementById('summarySeats');
  const summaryBasePrice = document.getElementById('summaryBasePrice');
  const summaryVipPrice = document.getElementById('summaryVipPrice');
  const summaryTotal = document.getElementById('summaryTotal');
  const ticketMovie = document.getElementById('ticketMovie');
  const ticketDate = document.getElementById('ticketDate');
  const ticketTime = document.getElementById('ticketTime');
  const ticketSeats = document.getElementById('ticketSeats');
  const ticketTotal = document.getElementById('ticketTotal');
  const ticketNumber = document.getElementById('ticketNumber');
  const vipRibbon = document.getElementById('vipRibbon');

  // Current date and time
  const now = new Date();
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const currentDate = now.toLocaleDateString('en-US', options);
  const currentTime = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });

  // Initialize
  let ticketPrice = +movieSelect.value;
  let vipSeats = 0;
  let normalSeats = 0;

  // Update movie details when selection changes
  movieSelect.addEventListener('change', function() {
      const selectedOption = movieSelect.options[movieSelect.selectedIndex].text;
      const movieData = movies[selectedOption];
      
      if (movieData) {
          selectedMoviePoster.querySelector('img').src = movieData.poster;
          selectedMovieTitle.textContent = selectedOption.split(' (')[0];
          movieRating.textContent = movieData.rating;
          movieDuration.textContent = movieData.duration;
          movieGenre.textContent = movieData.genre;
          moviePrice.textContent = "Rs. " + this.value;
          movieSynopsis.textContent = movieData.synopsis;
      }
      
      ticketPrice = +this.value;
      updateSelectedCount();
  });

  // Generate seats
  function generateSeats() {
      seatMap.innerHTML = '';
      
      // Create 6 rows with 8 seats each
      for (let i = 0; i < 6; i++) {
          const row = document.createElement('div');
          row.className = 'seat-row';
          
          for (let j = 0; j < 8; j++) {
              const seat = document.createElement('div');
              seat.className = 'seat';
              
              // Randomly assign some seats as occupied (for demo)
              if (Math.random() < 0.2) {
                  seat.classList.add('occupied');
              }
              
              // Make some seats VIP (first row and some random ones)
              if (i === 0 || (i === 2 && j === 3) || (i === 4 && j === 6)) {
                  seat.classList.add('vip');
              }
              
              seat.dataset.seat = `${String.fromCharCode(65 + i)}${j + 1}`;
              
              seat.addEventListener('click', function() {
                  if (!this.classList.contains('occupied')) {
                      this.classList.toggle('selected');
                      updateSelectedCount();
                  }
              });
              
              row.appendChild(seat);
          }
          
          seatMap.appendChild(row);
      }
  }

  // Update selected seats count and total
  function updateSelectedCount() {
      const selectedSeats = document.querySelectorAll('.seat.selected');
      vipSeats = document.querySelectorAll('.seat.selected.vip').length;
      normalSeats = selectedSeats.length - vipSeats;
      
      const basePrice = normalSeats * ticketPrice;
      const vipPrice = vipSeats * (ticketPrice + 500);
      const total = basePrice + vipPrice;
      
      // Update summary
      summaryMovie.textContent = movieSelect.options[movieSelect.selectedIndex].text.split(' (')[0];
      summaryDate.textContent = currentDate;
      summaryTime.textContent = currentTime;
      summarySeats.textContent = Array.from(selectedSeats).map(seat => seat.dataset.seat).join(', ');
      summaryBasePrice.textContent = `Rs. ${basePrice}`;
      summaryVipPrice.textContent = `Rs. ${vipPrice}`;
      summaryTotal.textContent = `Rs. ${total}`;
      
      // Enable/disable proceed button
      proceedBtn.disabled = selectedSeats.length === 0;
  }

  // Proceed to ticket
  proceedBtn.addEventListener('click', function() {
      const selectedSeats = document.querySelectorAll('.seat.selected');
      
      if (selectedSeats.length > 0) {
          // Calculate prices
          const basePrice = normalSeats * ticketPrice;
          const vipPrice = vipSeats * (ticketPrice + 500);
          const total = basePrice + vipPrice;
          
          // Update ticket details
          ticketMovie.textContent = movieSelect.options[movieSelect.selectedIndex].text.split(' (')[0];
          ticketDate.textContent = currentDate;
          ticketTime.textContent = currentTime;
          ticketSeats.textContent = Array.from(selectedSeats).map(seat => seat.dataset.seat).join(', ');
          ticketTotal.textContent = `Rs. ${total}`;
          
          // Show/hide VIP ribbon
          vipRibbon.style.display = vipSeats > 0 ? 'block' : 'none';
          
          // Generate random ticket number
          const randomNum = Math.floor(100000 + Math.random() * 900000);
          ticketNumber.textContent = randomNum;
          
          // Generate barcode
          JsBarcode("#barcode", randomNum.toString(), {
              format: "CODE128",
              lineColor: "#000",
              width: 2,
              height: 50,
              displayValue: false
          });
          
          // Show modal
          modal.style.display = 'block';
          document.body.style.overflow = 'hidden';
      }
  });

  // Close modal
  closeModal.addEventListener('click', function() {
      modal.style.display = 'none';
      document.body.style.overflow = 'auto';
  });

  // Close modal when clicking outside
  window.addEventListener('click', function(event) {
      if (event.target === modal) {
          modal.style.display = 'none';
          document.body.style.overflow = 'auto';
      }
  });

  // Initialize
  generateSeats();
  movieSelect.dispatchEvent(new Event('change'));
});