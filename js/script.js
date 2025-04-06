document.addEventListener('DOMContentLoaded', function() {
    console.log("ScrapUncle website loaded.");
  
    // --- Login Form Handler ---
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
      loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        // Replace with API call logic as needed
        alert('Login form submitted.');
      });
    }
  
    // --- Registration Form Handler ---
    const registerForm = document.getElementById('registerForm');
    if (registerForm) {
      registerForm.addEventListener('submit', function(e) {
        e.preventDefault();
        // Validate password matching
        const password = document.getElementById('registerPassword').value;
        const confirmPassword = document.getElementById('registerConfirmPassword').value;
        if (password !== confirmPassword) {
          alert('Passwords do not match.');
          return;
        }
        // Replace with API call logic as needed
        alert('Registration form submitted.');
      });
    }
  
    // --- Pickup Form Handler ---
    const pickupForm = document.getElementById('pickupForm');
    if (pickupForm) {
      pickupForm.addEventListener('submit', function(e) {
        e.preventDefault();
        // Replace with API call logic as needed
        alert('Pickup scheduled successfully!');
      });
    }
  
    // --- Admin Page: Simulate Data Fetching ---
    const adminPickupTable = document.getElementById('adminPickupTable');
    if (adminPickupTable) {
      // Simulated data. In a real application, fetch data from your backend.
      const pickups = [
        { name: 'John Doe', mobile: '+91 9876543210', address: '123 Main St', items: 'Paper, Plastic', requestedAt: '2025-04-05 10:30 AM' },
        { name: 'Jane Smith', mobile: '+91 9123456780', address: '456 Elm St', items: 'Metal, Electronics', requestedAt: '2025-04-05 11:00 AM' }
      ];
      pickups.forEach(pickup => {
        const row = document.createElement('tr');
        row.innerHTML = `<td>${pickup.name}</td>
                         <td>${pickup.mobile}</td>
                         <td>${pickup.address}</td>
                         <td>${pickup.items}</td>
                         <td>${pickup.requestedAt}</td>`;
        adminPickupTable.appendChild(row);
      });
    }
  });
  