const products = [
  {
    name: "Viral Instagram Reels Pack",
    description: "50+ trending reels templates to go viral fast!",
    price: "₹19",
    image: "https://via.placeholder.com/400x250?text=Reels+Pack"
  },
  {
    name: "ChatGPT Prompt Pack",
    description: "100+ powerful prompts for AI productivity.",
    price: "₹29",
    image: "https://via.placeholder.com/400x250?text=Prompt+Pack"
  },
  {
    name: "Notion Productivity Template",
    description: "Organize your work & life seamlessly with Notion.",
    price: "₹9",
    image: "https://via.placeholder.com/400x250?text=Notion+Template"
  },
  {
    name: "AI Art Bundle",
    description: "100+ unique AI-generated artworks.",
    price: "₹15",
    image: "https://via.placeholder.com/400x250?text=AI+Art+Bundle"
  }
];

const productList = document.getElementById("product-list");
const upiId = "tharunrn@ybl";   // ✅ your real UPI ID
const payeeName = "Tharun R N"; // ✅ your name

products.forEach(product => {
  const div = document.createElement("div");
  div.className = "product";

  div.innerHTML = `
    <img src="${product.image}" alt="${product.name}">
    <h3>${product.name}</h3>
    <p>${product.description}</p>
    <p><strong>${product.price}</strong></p>
    <button class="buy-btn">Buy Now</button>
  `;

  const button = div.querySelector(".buy-btn");

  button.addEventListener("click", () => {
    // Extract numeric value from price (remove ₹)
    const amount = product.price.replace("₹", "").trim();

    // Build UPI payment link dynamically
    const upiLink = upi://pay?pa=${upiId}&pn=${encodeURIComponent(payeeName)}&am=${amount}&cu=INR;

    // Redirect to UPI app
    window.location.href = upiLink;
  });

  productList.appendChild(div);
});
