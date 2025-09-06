// Simple function to redirect to Easebuzz checkout
function buyNow(link) {
  window.location.href = link;
}


let currentLink = "";

// Open checkout modal
function openForm(link) {
  currentLink = link;
  document.getElementById("checkoutModal").style.display = "flex";
}

// Close checkout modal
function closeForm() {
  document.getElementById("checkoutModal").style.display = "none";
}

// Continue to Easebuzz payment
function proceedPayment() {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();

  if (!name || !email) {
    alert("Please enter your name and email.");
    return;
  }

  // Save details in localStorage (optional)
  localStorage.setItem("customerName", name);
  localStorage.setItem("customerEmail", email);

  // Redirect to Easebuzz checkout link
  window.location.href = currentLink;
}

