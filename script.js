const products = [
  {
    name: "Viral Instagram Reels Pack",
    description: "50+ trending reels templates to go viral fast!",
    price: "₹19",
    image: "https://via.placeholder.com/400x250?text=Reels+Pack"
   checkoutLink: "upi://pay?pa=tharunrn@ybl&pn=Tharun R N&am=100&cu=INR"
  
    },
  {
    name: "ChatGPT Prompt Pack",
    description: "100+ powerful prompts for AI productivity.",
    price: "₹29",
    image: "https://via.placeholder.com/400x250?text=Prompt+Pack",
    checkoutLink: "https://pay.easebuzz.in/link/your-easebuzz-link-2"
  },
  {
    name: "Notion Productivity Template",
    description: "Organize your work & life seamlessly with Notion.",
    price: "₹9",
    image: "https://via.placeholder.com/400x250?text=Notion+Template",
    checkoutLink: "https://pay.easebuzz.in/link/your-easebuzz-link-3"
  },
  {
    name: "AI Art Bundle",
    description: "100+ unique AI-generated artworks.",
    price: "₹15",
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
    <button onclick="<a href="upi://pay?pa=tharunrn@ybl&pn=Tharun R N&am=100&cu=INR" target="_blank">
  <button>Buy Now</button>
</a>"
  `;

  productList.appendChild(div);
});





