document.addEventListener("DOMContentLoaded", () => {
  console.log("LSSEMS Frontend Loaded");

  
  const serviceProviders = [
    { name: "Rahim", service: "Plumber", location: "Dhaka", phone: "+880111111111", skills: "Pipe fixing, Leak repair", experience: 5, rating: 4.5, availability: "Available" },
    { name: "Karim", service: "Plumber", location: "Chittagong", phone: "+880222222222", skills: "Water line setup", experience: 7, rating: 4.0, availability: "Busy" },
    { name: "John Doe", service: "Electrician", location: "Dhaka", phone: "+880333333333", skills: "Wiring, Fan/Light Installation", experience: 4, rating: 5.0, availability: "Available" },
    { name: "Ali", service: "Electrician", location: "Sylhet", phone: "+880444444444", skills: "AC repair, Fuse fixing", experience: 6, rating: 4.2, availability: "Available" },
    { name: "Mina", service: "Cleaner", location: "Chittagong", phone: "+880555555555", skills: "Home/Office Cleaning", experience: 3, rating: 4.8, availability: "Available" },
    { name: "Shila", service: "Cleaner", location: "Dhaka", phone: "+880666666666", skills: "Deep Cleaning, Laundry", experience: 2, rating: 4.3, availability: "Busy" },
    { name: "Babul", service: "Carpenter", location: "Sylhet", phone: "+880777777777", skills: "Furniture Making, Woodwork", experience: 8, rating: 4.9, availability: "Available" },
    { name: "Sumon", service: "Carpenter", location: "Dhaka", phone: "+880888888888", skills: "Door/Window repair", experience: 5, rating: 4.0, availability: "Busy" },
    { name: "Raju", service: "Painter", location: "Dhaka", phone: "+880999999999", skills: "Wall painting, Polishing", experience: 6, rating: 4.7, availability: "Available" },
    { name: "Hasan", service: "Mechanic", location: "Chittagong", phone: "+880101010101", skills: "Car engine repair, Oil change", experience: 10, rating: 4.6, availability: "Available" },
    { name: "Priya", service: "Tutor", location: "Dhaka", phone: "+880121212121", skills: "Math, Physics", experience: 4, rating: 4.8, availability: "Available" },
    { name: "Kabir", service: "Gardener", location: "Sylhet", phone: "+880131313131", skills: "Lawn care, Planting", experience: 9, rating: 4.4, availability: "Busy" },
    { name: "Arif", service: "IT Support", location: "Dhaka", phone: "+880141414141", skills: "Computer repair, Networking", experience: 5, rating: 4.9, availability: "Available" }
  ];

  // Search Results Page
  const resultsDiv = document.getElementById("results");
  if (resultsDiv) {
    const params = new URLSearchParams(window.location.search);
    const category = params.get("category");
    const location = params.get("location");

    let filtered = serviceProviders;

    if (category) {
      filtered = filtered.filter(p =>
        p.service.toLowerCase().includes(category.toLowerCase())
      );
    }

    if (location) {
      filtered = filtered.filter(p =>
        p.location.toLowerCase().includes(location.toLowerCase())
      );
    }

    if (filtered.length > 0) {
      resultsDiv.innerHTML = filtered.map(p => `
        <div class="person-detail">
          <h3>${p.name}</h3>
          <p><strong>Service:</strong> ${p.service}</p>
          <p><strong>Location:</strong> ${p.location}</p>
          <p><strong>Skills:</strong> ${p.skills}</p>
          <p><strong>Experience:</strong> ${p.experience} years</p>
          <p><strong>Rating:</strong> ⭐ ${p.rating}</p>
          <p><strong>Availability:</strong> ${p.availability}</p>
          <a href="single-person-detail.html?name=${encodeURIComponent(p.name)}">View Details</a>
        </div>
      `).join("");
    } else {
      resultsDiv.innerHTML = `<p>No providers found for <strong>${category || "Any"}</strong> in <strong>${location || "Any"}</strong>.</p>`;
    }
  }

  //Single Person Detail Page
  const personDiv = document.getElementById("person-detail");
  if (personDiv) {
    const params = new URLSearchParams(window.location.search);
    const name = params.get("name");

    const person = serviceProviders.find(p => p.name.toLowerCase() === name?.toLowerCase());

    if (person) {
      personDiv.innerHTML = `
        <h2>${person.name}</h2>
        <p><strong>Service:</strong> ${person.service}</p>
        <p><strong>Location:</strong> ${person.location}</p>
        <p><strong>Phone:</strong> ${person.phone}</p>
        <p><strong>Skills:</strong> ${person.skills}</p>
        <p><strong>Experience:</strong> ${person.experience} years</p>
        <p><strong>Rating:</strong> ⭐ ${person.rating}</p>
        <p><strong>Availability:</strong> ${person.availability}</p>
      `;
    } else {
      personDiv.innerHTML = `<p>Serviceman not found.</p>`;
    }
  }
});
