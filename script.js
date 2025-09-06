const products = [
  {
    name: "Viral Instagram Reels Pack",
    description: "50+ trending reels templates to go viral fast!",
    price: "₹999",
    image: "https://via.placeholder.com/400x250?text=Reels+Pack",
    checkoutLink: "https://pay.easebuzz.in/link/your-easebuzz-link-1"
  },
  {
    name: "ChatGPT Prompt Pack",
    description: "100+ powerful prompts for AI productivity.",
    price: "₹799",
    image: "https://via.placeholder.com/400x250?text=Prompt+Pack",
    checkoutLink: "https://pay.easebuzz.in/link/your-easebuzz-link-2"
  },
  {
    name: "Notion Productivity Template",
    description: "Organize your work & life seamlessly with Notion.",
    price: "₹1200",
    image: "https://via.placeholder.com/400x250?text=Notion+Template",
    checkoutLink: "https://pay.easebuzz.in/link/your-easebuzz-link-3"
  },
  {
    name: "AI Art Bundle",
    description: "100+ unique AI-generated artworks.",
    price: "₹1500",
    image: "https://via.placeholder.com/400x250?text=AI+Art+Bundle",
    checkoutLink: "https://pay.easebuzz.in/link/your-easebuzz-link-4"
  }
];

const productList = document.getElementById("product-list");

products.forEach(product => {
  const div = document.createElement("div");
  div.className = "product";

  div.innerHTML = `
    <img src="${product.image}" alt="${product.name}">
    <h3>${product.name}</h3>
    <p>${product.description}</p>
    <p><strong>${product.price}</strong></p>
    <button onclick="window.location.href='${product.checkoutLink}'">Buy Now</button>
  `;

  productList.appendChild(div);
});
