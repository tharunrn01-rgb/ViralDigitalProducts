// Simple function to redirect to Easebuzz checkout
function buyNow(link) {
  window.location.href = link;
}

let currentLink = "";

function openForm(link) {
  currentLink = link;
  const modal = document.getElementById("checkoutModal");
  modal.style.display = "flex";

  document.getElementById("checkoutForm").onsubmit = function(e) {
    e.preventDefault();
    const name = document.getElementById("custName").value.trim();
    const email = document.getElementById("custEmail").value.trim();
    if (!name || !email) {
      alert("Please fill out your name and email.");
      return;
    }
    // Save details for thankyou page
    localStorage.setItem("customerName", name);
    localStorage.setItem("customerEmail", email);
    // Redirect to Easebuzz
    window.location.href = currentLink;
  };
}

window.onclick = function(e) {
  if (e.target.classList.contains("modal")) {
    e.target.style.display = "none";
  }
};



