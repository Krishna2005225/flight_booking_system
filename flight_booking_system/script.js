// ===== SAMPLE FLIGHT DATA =====
const flightsData = [
  { id: 'FL001', airline: 'SkyWings Airlines', logo: 'fa-plane', flightNo: 'SW-203', from: 'JFK', fromName: 'New York (JFK)', to: 'DXB', toName: 'Dubai (DXB)', depTime: '08:30', arrTime: '19:45', duration: '12h 15m', stops: 0, price: 549, seats: 24, aircraft: 'Boeing 787-9', terminal: 'Terminal 4', gate: 'B12', baggage: '30kg', meal: true, wifi: true, travelClass: 'Economy' },
  { id: 'FL002', airline: 'Global Air', logo: 'fa-globe', flightNo: 'GA-105', from: 'LHR', fromName: 'London (LHR)', to: 'SIN', toName: 'Singapore (SIN)', depTime: '10:15', arrTime: '06:30', duration: '13h 15m', stops: 1, price: 429, seats: 15, aircraft: 'Airbus A350-900', terminal: 'Terminal 2', gate: 'C7', baggage: '25kg', meal: true, wifi: true, travelClass: 'Economy' },
  { id: 'FL003', airline: 'Oceanic Airways', logo: 'fa-water', flightNo: 'OA-457', from: 'CDG', fromName: 'Paris (CDG)', to: 'NRT', toName: 'Tokyo (NRT)', depTime: '14:00', arrTime: '09:30', duration: '11h 30m', stops: 0, price: 689, seats: 8, aircraft: 'Boeing 777-300ER', terminal: 'Terminal 1', gate: 'A3', baggage: '30kg', meal: true, wifi: true, travelClass: 'Premium Economy' },
  { id: 'FL004', airline: 'MetroJet', logo: 'fa-train', flightNo: 'MJ-892', from: 'SYD', fromName: 'Sydney (SYD)', to: 'LAX', toName: 'Los Angeles (LAX)', depTime: '11:45', arrTime: '07:20', duration: '14h 35m', stops: 0, price: 799, seats: 12, aircraft: 'Airbus A380', terminal: 'Terminal 3', gate: 'D15', baggage: '35kg', meal: true, wifi: true, travelClass: 'Business' },
  { id: 'FL005', airline: 'Sunrise Airlines', logo: 'fa-sun', flightNo: 'SR-671', from: 'BKK', fromName: 'Bangkok (BKK)', to: 'CDG', toName: 'Paris (CDG)', depTime: '23:50', arrTime: '07:15', duration: '12h 25m', stops: 0, price: 399, seats: 32, aircraft: 'Boeing 787-9', terminal: 'Terminal 2', gate: 'E8', baggage: '25kg', meal: true, wifi: false, travelClass: 'Economy' },
  { id: 'FL006', airline: 'SilverBird', logo: 'fa-dove', flightNo: 'SB-334', from: 'DXB', fromName: 'Dubai (DXB)', to: 'LHR', toName: 'London (LHR)', depTime: '07:00', arrTime: '11:45', duration: '7h 45m', stops: 0, price: 459, seats: 19, aircraft: 'Airbus A350-1000', terminal: 'Terminal 1', gate: 'F5', baggage: '30kg', meal: true, wifi: true, travelClass: 'Economy' },
  { id: 'FL007', airline: 'TransPac Airways', logo: 'fa-ship', flightNo: 'TP-128', from: 'JFK', fromName: 'New York (JFK)', to: 'CDG', toName: 'Paris (CDG)', depTime: '18:00', arrTime: '07:30', duration: '7h 30m', stops: 0, price: 329, seats: 42, aircraft: 'Boeing 767-300ER', terminal: 'Terminal 1', gate: 'A10', baggage: '23kg', meal: true, wifi: true, travelClass: 'Economy' },
  { id: 'FL008', airline: 'Golden Wings', logo: 'fa-crown', flightNo: 'GW-555', from: 'SIN', fromName: 'Singapore (SIN)', to: 'SYD', toName: 'Sydney (SYD)', depTime: '22:15', arrTime: '07:45', duration: '7h 30m', stops: 0, price: 559, seats: 6, aircraft: 'Airbus A350-900', terminal: 'Terminal 3', gate: 'G12', baggage: '35kg', meal: true, wifi: true, travelClass: 'Business' },
  { id: 'FL009', airline: 'Polar Express', logo: 'fa-snowflake', flightNo: 'PE-777', from: 'NRT', fromName: 'Tokyo (NRT)', to: 'LHR', toName: 'London (LHR)', depTime: '12:30', arrTime: '16:45', duration: '12h 15m', stops: 1, price: 379, seats: 28, aircraft: 'Boeing 787-8', terminal: 'Terminal 2', gate: 'H3', baggage: '25kg', meal: true, wifi: true, travelClass: 'Economy' },
  { id: 'FL010', airline: 'Desert Falcon', logo: 'fa-feather', flightNo: 'DF-990', from: 'DXB', fromName: 'Dubai (DXB)', to: 'JFK', toName: 'New York (JFK)', depTime: '02:00', arrTime: '08:30', duration: '14h 30m', stops: 0, price: 699, seats: 11, aircraft: 'Airbus A380', terminal: 'Terminal 4', gate: 'B22', baggage: '35kg', meal: true, wifi: true, travelClass: 'First Class' },
  { id: 'FL011', airline: 'Coastal Air', logo: 'fa-umbrella', flightNo: 'CA-241', from: 'LAX', fromName: 'Los Angeles (LAX)', to: 'BKK', toName: 'Bangkok (BKK)', depTime: '01:30', arrTime: '05:45', duration: '18h 15m', stops: 1, price: 469, seats: 22, aircraft: 'Boeing 777-200ER', terminal: 'Terminal 5', gate: 'J9', baggage: '25kg', meal: true, wifi: false, travelClass: 'Economy' },
  { id: 'FL012', airline: 'Royal Sky', logo: 'fa-star', flightNo: 'RS-420', from: 'LHR', fromName: 'London (LHR)', to: 'DXB', toName: 'Dubai (DXB)', depTime: '15:45', arrTime: '01:00', duration: '6h 15m', stops: 0, price: 389, seats: 35, aircraft: 'Boeing 787-9', terminal: 'Terminal 3', gate: 'K5', baggage: '30kg', meal: true, wifi: true, travelClass: 'Economy' },
];

// ===== DESTINATIONS DATA =====
const destinations = [
  { name: 'Dubai', country: 'UAE', price: '$549', image: 'assets/images/destinations/dubai.svg' },
  { name: 'Singapore', country: 'Singapore', price: '$429', image: 'assets/images/destinations/singapore.svg' },
  { name: 'London', country: 'United Kingdom', price: '$329', image: 'assets/images/destinations/london.svg' },
  { name: 'Paris', country: 'France', price: '$399', image: 'assets/images/destinations/paris.svg' },
  { name: 'New York', country: 'USA', price: '$329', image: 'assets/images/destinations/newyork.svg' },
  { name: 'Tokyo', country: 'Japan', price: '$689', image: 'assets/images/destinations/tokyo.svg' },
  { name: 'Bangkok', country: 'Thailand', price: '$469', image: 'assets/images/destinations/bangkok.svg' },
  { name: 'Sydney', country: 'Australia', price: '$559', image: 'assets/images/destinations/sydney.svg' },
];

// ===== REVIEWS DATA =====
const reviewsData = [
  { name: 'Sarah Johnson', title: 'Frequent Flyer', rating: 5, text: 'Amazing booking experience! Found great deals and the seat selection feature was incredibly user-friendly. Will definitely use again.', img: 'assets/images/icons/avatar1.svg' },
  { name: 'Michael Chen', title: 'Business Traveler', rating: 4, text: 'Excellent flight search and filtering options. The fare calculator helped me stay within budget. Highly recommended for business trips.', img: 'assets/images/icons/avatar2.svg' },
  { name: 'Emma Williams', title: 'Vacation Planner', rating: 5, text: 'Booked a family vacation through this site. The process was smooth, and I loved the destination guides. Made planning so easy!', img: 'assets/images/icons/avatar3.svg' },
  { name: 'David Kumar', title: 'Travel Blogger', rating: 4, text: 'The dark mode and responsive design are great. Flight schedules are accurate and the booking confirmation was instant.', img: 'assets/images/icons/avatar4.svg' },
];

// ===== DOM READY =====
document.addEventListener('DOMContentLoaded', () => {

  // --- Preloader ---
  const preloader = document.getElementById('preloader');
  if (preloader) {
    setTimeout(() => preloader.classList.add('hidden'), 800);
  }

  // --- Initialize Components ---
  initNavigation();
  initTheme();
  initDestinations();
  initFlights();
  initFaq();
  initBackToTop();
  initScrollAnimations();
  initSearchForm();
  initCountdown();
  initReviews();
  initContactForm();
  initBookingHistory();
  initReturnDateValidation();

  // Load stored favorites
  loadFavorites();

  // --- Toast container ---
  if (!document.querySelector('.toast-container')) {
    const tc = document.createElement('div');
    tc.className = 'toast-container';
    document.body.appendChild(tc);
  }

  // --- Passenger form modal logic ---
  setupBookingFlow();

  // --- Handle URL booking param ---
  const urlParams = new URLSearchParams(window.location.search);
  const bookId = urlParams.get('book');
  if (bookId) {
    setTimeout(() => openBooking(bookId), 500);
  }
});

// ===== NAVIGATION =====
function initNavigation() {
  const navbar = document.querySelector('.navbar');
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');
  const links = document.querySelectorAll('.nav-links a');

  // Sticky nav shadow
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) navbar.classList.add('scrolled');
    else navbar.classList.remove('scrolled');
  });

  // Hamburger
  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      navLinks.classList.toggle('open');
    });
    links.forEach(l => l.addEventListener('click', () => {
      hamburger.classList.remove('active');
      navLinks.classList.remove('open');
    }));
  }

  // Active link based on scroll
  const sections = document.querySelectorAll('section[id]');
  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(sec => {
      const top = window.scrollY;
      const offset = sec.offsetTop - 120;
      const height = sec.offsetHeight;
      if (top >= offset && top < offset + height) current = sec.id;
    });
    links.forEach(a => {
      a.classList.remove('active');
      if (a.getAttribute('href') === '#' + current) a.classList.add('active');
    });
  });
}

// ===== THEME =====
function initTheme() {
  const toggle = document.querySelector('.theme-toggle');
  const saved = localStorage.getItem('flightTheme');
  if (saved === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark');
    if (toggle) toggle.innerHTML = '<i class="fas fa-sun"></i>';
  }
  if (toggle) {
    toggle.addEventListener('click', () => {
      const html = document.documentElement;
      const isDark = html.getAttribute('data-theme') === 'dark';
      if (isDark) {
        html.removeAttribute('data-theme');
        toggle.innerHTML = '<i class="fas fa-moon"></i>';
      } else {
        html.setAttribute('data-theme', 'dark');
        toggle.innerHTML = '<i class="fas fa-sun"></i>';
      }
      localStorage.setItem('flightTheme', isDark ? 'light' : 'dark');
      showToast(isDark ? '☀️ Light mode enabled' : '🌙 Dark mode enabled', 'success');
    });
  }
}

// ===== DESTINATIONS =====
function initDestinations() {
  const grid = document.getElementById('destinationsGrid');
  if (!grid) return;
  destinations.forEach((d, i) => {
    const card = document.createElement('div');
    card.className = 'destination-card';
    card.style.transitionDelay = `${i * 0.1}s`;
    card.innerHTML = `
      <div class="card-img">
        <img src="${d.image}" alt="${d.name}" loading="lazy">
        <div class="price-tag">From ${d.price}</div>
      </div>
      <div class="card-body">
        <h3>${d.name}</h3>
        <p>${d.country}</p>
        <button class="dest-btn" onclick="searchDestination('${d.name}')">Explore →</button>
      </div>
    `;
    grid.appendChild(card);
  });
}

function searchDestination(name) {
  const from = document.getElementById('from');
  const to = document.getElementById('to');
  if (from && to) {
    to.value = name;
    document.getElementById('flightsSection')?.scrollIntoView({ behavior: 'smooth' });
    performSearch();
  }
}

// ===== FLIGHTS =====
function initFlights() {
  renderFlights(flightsData);
}

function renderFlights(flights) {
  const container = document.getElementById('flightsContainer');
  if (!container) return;
  container.innerHTML = '';
  if (flights.length === 0) {
    container.innerHTML = '<div class="no-results"><i class="fas fa-plane-slash"></i><p>No flights found matching your criteria.</p></div>';
    return;
  }
  flights.forEach((f, i) => {
    const card = document.createElement('div');
    card.className = 'flight-card';
    card.style.transitionDelay = `${i * 0.08}s`;
    const stopsText = f.stops === 0 ? 'Nonstop' : f.stops === 1 ? '1 Stop' : `${f.stops} Stops`;
    card.innerHTML = `
      <div class="airline-info">
        <div class="al-logo"><i class="fas ${f.logo}"></i></div>
        <div class="al-details">
          <h4>${f.airline}</h4>
          <span>${f.flightNo}</span>
        </div>
      </div>
      <div class="flight-time">
        <div class="time">
          <div class="hr">${f.depTime}</div>
          <div class="airport">${f.from}</div>
        </div>
        <div class="duration">
          <span>${f.duration}</span>
          <div class="line"></div>
          <span class="stops">${stopsText}</span>
        </div>
        <div class="time">
          <div class="hr">${f.arrTime}</div>
          <div class="airport">${f.to}</div>
        </div>
      </div>
      <div class="flight-price">
        <div class="amount">$${f.price}</div>
        <div class="per">per person</div>
        <small style="color:var(--text-secondary)">${f.seats} seats left</small>
      </div>
      <div style="display:flex;flex-direction:column;gap:8px;align-items:center">
        <button class="fav-btn" onclick="toggleFav('${f.id}')" id="fav-${f.id}"><i class="fas fa-heart"></i></button>
        <button class="book-btn" onclick="openDetails('${f.id}')">Book Now</button>
      </div>
    `;
    container.appendChild(card);
    // check if favorited
    const favs = JSON.parse(localStorage.getItem('flightFavorites') || '[]');
    if (favs.includes(f.id)) document.getElementById(`fav-${f.id}`)?.classList.add('saved');
  });
  // trigger scroll animation
  setTimeout(() => {
    document.querySelectorAll('.flight-card').forEach(el => el.classList.add('visible'));
  }, 100);
}

// ===== FLIGHT DETAILS MODAL =====
function openDetails(id) {
  const flight = flightsData.find(f => f.id === id);
  if (!flight) return;
  const modal = document.getElementById('flightModal');
  if (!modal) return;
  document.getElementById('modalAirline').textContent = flight.airline;
  document.getElementById('modalFlightNo').textContent = flight.flightNo;
  document.getElementById('modalAircraft').textContent = flight.aircraft;
  document.getElementById('modalDeparture').textContent = `${flight.fromName} at ${flight.depTime}`;
  document.getElementById('modalArrival').textContent = `${flight.toName} at ${flight.arrTime}`;
  document.getElementById('modalTerminal').textContent = flight.terminal;
  document.getElementById('modalGate').textContent = flight.gate;
  document.getElementById('modalDuration').textContent = flight.duration;
  document.getElementById('modalBaggage').textContent = flight.baggage;
  document.getElementById('modalMeal').textContent = flight.meal ? 'Available ✓' : 'Not Available ✗';
  document.getElementById('modalWifi').textContent = flight.wifi ? 'Available ✓' : 'Not Available ✗';
  modal.classList.add('active');
  document.getElementById('modalBookBtn').onclick = () => { modal.classList.remove('active'); openBooking(id); };
  document.getElementById('modalClose').onclick = () => modal.classList.remove('active');
  modal.addEventListener('click', (e) => { if (e.target === modal) modal.classList.remove('active'); });
}

// ===== BOOKING FLOW =====
function setupBookingFlow() {
  const fp = document.getElementById('flightSelectPassengers');
  const fc = document.getElementById('flightSelectClass');
  if (fp && fc) {
    // populate class options
    ['Economy', 'Premium Economy', 'Business', 'First Class'].forEach(c => {
      const opt = document.createElement('option');
      opt.value = c; opt.textContent = c;
      fc.appendChild(opt);
    });
  }
  const bookBtn = document.getElementById('proceedBooking');
  if (bookBtn) bookBtn.addEventListener('click', proceedBooking);

  setupSeatMap();
  updateFareSummary();
  document.getElementById('passengerForm')?.addEventListener('input', updateFareSummary);
}

let bookingFlightId = null;
let selectedSeats = [];

function openBooking(id) {
  bookingFlightId = id;
  selectedSeats = [];
  const flight = flightsData.find(f => f.id === id);
  if (!flight) return;
  const bs = document.getElementById('bookingSection');
  if (bs) {
    bs.scrollIntoView({ behavior: 'smooth' });
    bs.style.display = 'block';
    document.getElementById('bookingFlightName').textContent = `${flight.airline} - ${flight.flightNo}`;
    document.getElementById('bookingRoute').textContent = `${flight.fromName} → ${flight.toName}`;
    document.getElementById('bookingTime').textContent = `${flight.depTime} - ${flight.arrTime} | ${flight.duration}`;
    document.getElementById('bookingPrice').textContent = `$${flight.price}`;
    document.getElementById('bookingClass').textContent = flight.travelClass;
    updateFareSummary();
  } else {
    // Redirect to main page with booking section
    window.location.href = `../index.html?book=${id}`;
  }
}

function setupSeatMap() {
  const seatMap = document.getElementById('seatMap');
  if (!seatMap) return;
  seatMap.innerHTML = '';
  const rows = 12;
  const cols = 6;
  const reserved = ['3A','3F','5B','5E','7C','7D','9A','9F','11C','11D','12A','12B','12E','12F'];

  const legend = document.querySelector('.seat-type-label');
  if (legend) {
    legend.innerHTML = `
      <div class="label-item"><div class="swatch" style="background:var(--gray-200);border:1px solid var(--gray-300)"></div> Available</div>
      <div class="label-item"><div class="swatch" style="background:var(--primary)"></div> Selected</div>
      <div class="label-item"><div class="swatch" style="background:var(--danger);opacity:0.6"></div> Reserved</div>
      <div class="label-item"><div class="swatch" style="background:var(--warning)"></div> Exit Row</div>
    `;
  }

  // cockpit
  const cockpit = document.createElement('div');
  cockpit.style.cssText = 'width:60%;height:30px;background:var(--gray-300);border-radius:50% 50% 10px 10px;margin:0 auto 15px;display:flex;align-items:center;justify-content:center;font-size:0.7rem;color:var(--text-secondary)';
  cockpit.textContent = 'COCKPIT';
  seatMap.appendChild(cockpit);

  const letters = ['A','B','C','D','E','F'];
  for (let r = 0; r < rows; r++) {
    const rowNum = r + 1;
    const row = document.createElement('div');
    row.className = 'seat-row';

    const label = document.createElement('div');
    label.className = 'row-label';
    label.textContent = rowNum;
    row.appendChild(label);

    for (let c = 0; c < cols; c++) {
      const seat = document.createElement('div');
      const seatId = `${rowNum}${letters[c]}`;
      seat.className = 'seat';
      seat.dataset.seatId = seatId;

      if (reserved.includes(seatId)) {
        seat.classList.add('reserved');
      } else {
        seat.classList.add('available');
        // exit rows
        if (rowNum === 3 || rowNum === 9) seat.classList.add('exit');
        // window seats
        if (c === 0 || c === 5) seat.classList.add('window');
        if (c === 2 || c === 3) seat.classList.add('aisle');
      }

      seat.textContent = seatId;
      seat.addEventListener('click', () => toggleSeat(seatId));
      row.appendChild(seat);

      // aisle gap
      if (c === 2) {
        const gap = document.createElement('div');
        gap.style.width = '15px';
        row.appendChild(gap);
      }
    }
    seatMap.appendChild(row);
  }
}

function toggleSeat(seatId) {
  const seat = document.querySelector(`.seat[data-seat-id="${seatId}"]`);
  if (!seat || seat.classList.contains('reserved')) return;

  if (seat.classList.contains('selected')) {
    seat.classList.remove('selected');
    selectedSeats = selectedSeats.filter(s => s !== seatId);
    showToast(`Seat ${seatId} unselected`, 'warning');
  } else {
    seat.classList.add('selected');
    selectedSeats.push(seatId);
    showToast(`Seat ${seatId} selected ✓`, 'success');
  }
  document.getElementById('selectedSeatsDisplay').textContent = selectedSeats.length ? selectedSeats.join(', ') : 'None';
  updateFareSummary();
}

function updateFareSummary() {
  const flight = flightsData.find(f => f.id === bookingFlightId);
  if (!flight) return;
  const baseFare = flight.price;
  const taxRate = 0.12;
  const taxes = Math.round(baseFare * taxRate);
  const convenienceFee = 25;
  const seatCharges = selectedSeats.length * 15;
  const baggageCharges = 0;
  const discount = baseFare > 500 ? Math.round(baseFare * 0.1) : 0;
  const total = baseFare + taxes + convenienceFee + seatCharges + baggageCharges - discount;

  document.getElementById('fareBase').textContent = `$${baseFare}`;
  document.getElementById('fareTax').textContent = `$${taxes}`;
  document.getElementById('fareConvenience').textContent = `$${convenienceFee}`;
  document.getElementById('fareBaggage').textContent = `$${baggageCharges}`;
  document.getElementById('fareSeat').textContent = `$${seatCharges}`;
  document.getElementById('fareDiscount').textContent = discount > 0 ? `-$${discount}` : `$${discount}`;
  document.getElementById('fareTotal').textContent = `$${total}`;
}

// ===== PROCEED BOOKING =====
function proceedBooking() {
  const form = document.getElementById('passengerForm');
  const inputs = form.querySelectorAll('input, select');
  let valid = true;

  inputs.forEach(inp => {
    const err = inp.parentElement.querySelector('.error-msg');
    if (!inp.value.trim() && inp.hasAttribute('required')) {
      inp.classList.add('error');
      if (err) err.classList.add('show');
      valid = false;
    } else {
      inp.classList.remove('error');
      if (err) err.classList.remove('show');
    }
    // email validation
    if (inp.type === 'email' && inp.value) {
      const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!re.test(inp.value)) {
        inp.classList.add('error');
        if (err) { err.textContent = 'Please enter a valid email'; err.classList.add('show'); }
        valid = false;
      }
    }
    // phone validation
    if (inp.id === 'phone' && inp.value) {
      const re = /^[\d\s\+\-\(\)]{7,20}$/;
      if (!re.test(inp.value)) {
        inp.classList.add('error');
        if (err) { err.textContent = 'Please enter a valid phone number'; err.classList.add('show'); }
        valid = false;
      }
    }
    // passport validation
    if (inp.id === 'passport' && inp.value) {
      if (inp.value.length < 5) {
        inp.classList.add('error');
        if (err) { err.textContent = 'Passport number too short'; err.classList.add('show'); }
        valid = false;
      }
    }
  });

  if (!valid) {
    showToast('Please fill all required fields correctly', 'error');
    return;
  }

  showBookingConfirmation();
}

function showBookingConfirmation() {
  const flight = flightsData.find(f => f.id === bookingFlightId);
  if (!flight) return;
  const bookingId = 'BK' + Date.now().toString(36).toUpperCase() + Math.random().toString(36).substr(2,4).toUpperCase();
  const popup = document.getElementById('bookingPopup');
  if (!popup) return;
  document.getElementById('confirmBookingId').textContent = bookingId;
  document.getElementById('confirmName').textContent = document.getElementById('fullName')?.value || 'Passenger';
  document.getElementById('confirmFlight').textContent = `${flight.airline} (${flight.flightNo})`;
  document.getElementById('confirmRoute').textContent = `${flight.fromName} → ${flight.toName}`;
  document.getElementById('confirmDateTime').textContent = `${flight.depTime} - ${flight.arrTime} | ${flight.duration}`;
  document.getElementById('confirmSeats').textContent = selectedSeats.length ? selectedSeats.join(', ') : 'Auto-assigned';
  document.getElementById('confirmTotal').textContent = document.getElementById('fareTotal')?.textContent || `$${flight.price}`;
  popup.classList.add('active');
  showToast('✅ Booking confirmed successfully!', 'success');

  // Save to localStorage
  saveBooking(bookingId, flight);

  document.getElementById('popupClose').onclick = () => popup.classList.remove('active');
  popup.addEventListener('click', (e) => { if (e.target === popup) popup.classList.remove('active'); });
}

function saveBooking(bookingId, flight) {
  const bookings = JSON.parse(localStorage.getItem('flightBookings') || '[]');
  bookings.unshift({
    id: bookingId,
    flightNo: flight.flightNo,
    airline: flight.airline,
    from: flight.fromName,
    to: flight.toName,
    depTime: flight.depTime,
    arrTime: flight.arrTime,
    duration: flight.duration,
    price: flight.price,
    seats: selectedSeats.join(', '),
    passenger: document.getElementById('fullName')?.value || 'Passenger',
    date: new Date().toISOString(),
    status: 'Confirmed'
  });
  localStorage.setItem('flightBookings', JSON.stringify(bookings));
}

// ===== SEARCH & FILTER =====
function initSearchForm() {
  document.getElementById('searchForm')?.addEventListener('submit', (e) => {
    e.preventDefault();
    performSearch();
  });
  // Toggle return date
  document.querySelectorAll('input[name="tripType"]').forEach(r => {
    r.addEventListener('change', () => {
      const ret = document.getElementById('returnDate');
      if (ret) ret.disabled = r.value === 'oneWay';
    });
  });
}

function performSearch() {
  const from = (document.getElementById('from')?.value || '').toLowerCase();
  const to = (document.getElementById('to')?.value || '').toLowerCase();
  const depDate = document.getElementById('departDate')?.value;
  const passengers = parseInt(document.getElementById('passengers')?.value || '1');
  const travelClass = document.getElementById('travelClass')?.value || 'Economy';

  // validation
  if (!from || !to) {
    showToast('Please enter departure and destination cities', 'error');
    return;
  }
  if (from === to) {
    showToast('Departure and destination cannot be the same', 'error');
    return;
  }
  if (depDate) {
    const d = new Date(depDate);
    const today = new Date();
    today.setHours(0,0,0,0);
    if (d < today) {
      showToast('Departure date cannot be in the past', 'error');
      document.getElementById('departDate')?.classList.add('error');
      return;
    }
    document.getElementById('departDate')?.classList.remove('error');
  }

  // Show loading
  const loader = document.getElementById('searchLoader');
  if (loader) loader.classList.add('active');

  setTimeout(() => {
    if (loader) loader.classList.remove('active');
    let results = flightsData.filter(f =>
      (f.fromName.toLowerCase().includes(from) || f.from.toLowerCase().includes(from)) &&
      (f.toName.toLowerCase().includes(to) || f.to.toLowerCase().includes(to))
    );
    // Filter by class
    if (travelClass !== 'all') {
      results = results.filter(f => f.travelClass === travelClass);
    }
    renderFlights(results);
    document.getElementById('flightsSection')?.scrollIntoView({ behavior: 'smooth' });

    // Save recent search
    const searches = JSON.parse(localStorage.getItem('flightRecentSearches') || '[]');
    searches.unshift({ from, to, depDate, passengers, travelClass, time: Date.now() });
    if (searches.length > 10) searches.length = 10;
    localStorage.setItem('flightRecentSearches', JSON.stringify(searches));
  }, 600);
}

// ===== FILTERS =====
function applyFilters() {
  const priceMax = parseInt(document.getElementById('filterPrice')?.value || '9999');
  const airline = (document.getElementById('filterAirline')?.value || '').toLowerCase();
  const stops = document.getElementById('filterStops')?.value || 'all';

  let filtered = flightsData.filter(f => f.price <= priceMax);
  if (airline) filtered = filtered.filter(f => f.airline.toLowerCase().includes(airline));
  if (stops === 'nonstop') filtered = filtered.filter(f => f.stops === 0);
  else if (stops === '1stop') filtered = filtered.filter(f => f.stops === 1);
  else if (stops === '2plus') filtered = filtered.filter(f => f.stops >= 2);

  renderFlights(filtered);
  showToast(`Showing ${filtered.length} flights`, 'success');
}

// ===== RETURN DATE VALIDATION =====
function initReturnDateValidation() {
  const dep = document.getElementById('departDate');
  const ret = document.getElementById('returnDate');
  if (dep && ret) {
    dep.addEventListener('change', () => {
      if (dep.value && ret.value && new Date(ret.value) < new Date(dep.value)) {
        showToast('Return date must be after departure date', 'error');
        ret.value = '';
      }
      ret.min = dep.value;
    });
    ret.addEventListener('change', () => {
      if (dep.value && ret.value && new Date(ret.value) < new Date(dep.value)) {
        showToast('Return date must be after departure date', 'error');
        ret.value = '';
      }
    });
  }
}

// ===== FAQ =====
function initFaq() {
  document.querySelectorAll('.faq-question').forEach(q => {
    q.addEventListener('click', () => {
      const item = q.parentElement;
      const isActive = item.classList.contains('active');
      // close all
      document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('active'));
      if (!isActive) item.classList.add('active');
    });
  });
}

// ===== BACK TO TOP =====
function initBackToTop() {
  const btn = document.querySelector('.back-to-top');
  if (!btn) return;
  window.addEventListener('scroll', () => {
    btn.classList.toggle('visible', window.scrollY > 400);
  });
  btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

// ===== SCROLL ANIMATIONS =====
function initScrollAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.fade-in, .slide-up, .zoom-in, .destination-card, .flight-card, .offer-card, .review-card').forEach(el => {
    observer.observe(el);
  });
}

// ===== COUNTDOWN TIMER =====
function initCountdown() {
  const el = document.getElementById('countdownTimer');
  if (!el) return;
  const end = new Date();
  end.setHours(end.getHours() + 8);
  end.setMinutes(end.getMinutes() + 45);

  function update() {
    const diff = end - new Date();
    if (diff <= 0) { el.innerHTML = '<span>Offer expired</span>'; return; }
    const h = Math.floor(diff / 3600000);
    const m = Math.floor((diff % 3600000) / 60000);
    const s = Math.floor((diff % 60000) / 1000);
    document.getElementById('cdHours').textContent = String(h).padStart(2,'0');
    document.getElementById('cdMins').textContent = String(m).padStart(2,'0');
    document.getElementById('cdSecs').textContent = String(s).padStart(2,'0');
  }
  update();
  setInterval(update, 1000);
}

// ===== REVIEWS =====
function initReviews() {
  const grid = document.getElementById('reviewsGrid');
  if (!grid) return;
  reviewsData.forEach((r, i) => {
    const card = document.createElement('div');
    card.className = 'review-card';
    card.style.transitionDelay = `${i * 0.15}s`;
    const stars = '★'.repeat(r.rating) + '☆'.repeat(5 - r.rating);
    card.innerHTML = `
      <div class="reviewer">
        <img src="${r.img}" alt="${r.name}" loading="lazy">
        <div class="info">
          <h4>${r.name}</h4>
          <span>${r.title}</span>
        </div>
      </div>
      <div class="stars">${stars}</div>
      <p>"${r.text}"</p>
    `;
    grid.appendChild(card);
  });
}

// ===== CONTACT FORM =====
function initContactForm() {
  const form = document.getElementById('contactForm');
  if (!form) return;
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('contactName')?.value;
    const email = document.getElementById('contactEmail')?.value;
    if (!name || !email) {
      showToast('Please fill in required fields', 'error');
      return;
    }
    showToast('✅ Message sent successfully! We will get back to you soon.', 'success');
    form.reset();
  });
}

// ===== BOOKING HISTORY =====
function initBookingHistory() {
  const container = document.getElementById('bookingHistory');
  if (!container) return;
  const bookings = JSON.parse(localStorage.getItem('flightBookings') || '[]');
  if (bookings.length === 0) {
    container.innerHTML = '<div class="no-results"><i class="fas fa-ticket-alt"></i><p>No bookings yet. Start by booking a flight!</p></div>';
    return;
  }
  bookings.forEach(b => {
    const card = document.createElement('div');
    card.className = 'booking-card';
    card.innerHTML = `
      <div class="booking-header">
        <div>
          <h4>Booking ID</h4>
          <div class="booking-id-text">${b.id}</div>
        </div>
        <div style="text-align:right">
          <h4>Status</h4>
          <div class="status-badge on-time">${b.status}</div>
        </div>
      </div>
      <p><strong>${b.airline}</strong> (${b.flightNo})</p>
      <p>${b.from} → ${b.to}</p>
      <p>${b.depTime} - ${b.arrTime} | ${b.duration}</p>
      <p>Seats: ${b.seats} | Total: $${b.price} | Passenger: ${b.passenger}</p>
    `;
    container.appendChild(card);
  });
}

// ===== FAVORITES =====
function toggleFav(id) {
  const btn = document.getElementById(`fav-${id}`);
  let favs = JSON.parse(localStorage.getItem('flightFavorites') || '[]');
  if (favs.includes(id)) {
    favs = favs.filter(f => f !== id);
    btn?.classList.remove('saved');
    showToast('Removed from favorites', 'warning');
  } else {
    favs.push(id);
    btn?.classList.add('saved');
    showToast('Added to favorites ❤️', 'success');
  }
  localStorage.setItem('flightFavorites', JSON.stringify(favs));
}

function loadFavorites() {
  const favs = JSON.parse(localStorage.getItem('flightFavorites') || '[]');
  favs.forEach(id => {
    document.getElementById(`fav-${id}`)?.classList.add('saved');
  });
}

// ===== TOAST NOTIFICATIONS =====
function showToast(message, type = 'success') {
  const container = document.querySelector('.toast-container');
  if (!container) return;
  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  const icons = { success: 'fa-check-circle', error: 'fa-exclamation-circle', warning: 'fa-exclamation-triangle' };
  toast.innerHTML = `<i class="fas ${icons[type] || icons.success}"></i> ${message}`;
  container.appendChild(toast);
  setTimeout(() => {
    toast.classList.add('removing');
    setTimeout(() => toast.remove(), 400);
  }, 3000);
}

// ===== EXPOSE GLOBALLY =====
window.openDetails = openDetails;
window.toggleFav = toggleFav;
window.searchDestination = searchDestination;
window.applyFilters = applyFilters;
window.toggleSeat = toggleSeat;
