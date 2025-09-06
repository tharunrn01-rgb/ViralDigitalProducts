const products = [
  {
    name: "Viral Instagram Reels Pack",
    description: "50+ trending reels templates",
    price: "$12",
    checkoutLink: "https://buy.stripe.com/test_xxx1" // replace with your real Stripe link
  },
  {
    name: "ChatGPT Prompt Pack",
    description: "Best prompts for AI productivity",
    price: "$10",
    checkoutLink: "https://buy.stripe.com/test_xxx2"
  },
  {
    name: "Notion Productivity Template",
    description: "Organize your life with Notion",
    price: "$15",
    checkoutLink: "https://buy.stripe.com/test_xxx3"
  },
  {
    name: "AI Art Bundle",
    description: "100+ AI generated artworks",
    price: "$18",
    checkoutLink: "https://buy.stripe.com/test_xxx4"
  },
  {
    name: "Ultimate E-book Guide",
    description: "Top strategies for online growth",
    price: "$11",
    checkoutLink: "https://buy.stripe.com/test_xxx5"
  }
];

const productList = document.getElementById("product-list");

products.forEach(product => {
  const div = document.createElement("div");
  div.className = "product";

  div.innerHTML = `
    <h3>${product.name}</h3>
    <p>${product.description}</p>
    <p><strong>${product.price}</strong></p>
    <button onclick="window.location.href='${product.checkoutLink}'">Buy Now</button>
  `;

  productList.appendChild(div);
});

