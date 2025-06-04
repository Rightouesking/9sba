const apiKey = 'at_3cOppiojq9l6H3cTQzocrnPIYCqhw';
const ipDisplay = document.getElementById('ip');
const locationDisplay = document.getElementById('location');
const timezoneDisplay = document.getElementById('timezone');
const ispDisplay = document.getElementById('isp');
const ipForm = document.getElementById('ip-form');
const ipInput = document.getElementById('ip-input');

let map;
let marker;

// Fetch IP data and update UI
async function fetchIPData(ipOrDomain = '') {
  try {
    const url = `https://geo.ipify.org/api/v2/country,city?apiKey=${apiKey}&${
      ipOrDomain ? (validateIP(ipOrDomain) ? `ipAddress=${ipOrDomain}` : `domain=${ipOrDomain}`) : ''
    }`;
    
    const response = await fetch(url);
    if (!response.ok) throw new Error('Failed to fetch IP data');

    const data = await response.json();
    const { ip, isp, location } = data;

    ipDisplay.textContent = ip;
    locationDisplay.textContent = `${location.city}, ${location.region}, ${location.country}`;
    timezoneDisplay.textContent = `UTC ${location.timezone}`;
    ispDisplay.textContent = isp;

    updateMap(location.lat, location.lng);
  } catch (err) {
    alert('Invalid IP address or domain. Please try again.');
    console.error(err);
  }
}

// Validate if input is an IP
function validateIP(str) {
  const regex = /^(25[0-5]|2[0-4][0-9]|1?[0-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|1?[0-9][0-9]?)){3}$/;
  return regex.test(str);
}

// Initialize Leaflet map
function initMap() {
  map = L.map('map').setView([0, 0], 13); // Initial dummy view
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors',
  }).addTo(map);

  marker = L.marker([0, 0]).addTo(map);
}

// Update map position
function updateMap(lat, lng) {
  map.setView([lat, lng], 13);
  marker.setLatLng([lat, lng]);
}

// Form handler
ipForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const query = ipInput.value.trim();
  if (query) {
    fetchIPData(query);
  }
});

// Init on load
window.addEventListener('load', () => {
  initMap();
  fetchIPData(); // Fetch user's IP by default
});
window.addEventListener('resize', () => {
  map.invalidateSize();
});
