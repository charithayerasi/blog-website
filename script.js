const posts = [
  {
    title: "How to Build a Blog",
    author: "Admin",
    date: "June 1, 2025",
    content: "This is a sample post about building a blog.",
    category: "Web Development"
  },
  {
    title: "5 Tips for Learning JavaScript",
    author: "Jane Doe",
    date: "May 20, 2025",
    content: "Learning JavaScript can be fun and rewarding!",
    category: "Programming"
  }
];

const container = document.getElementById("posts-container");
if (container) {
  posts.forEach(post => {
    const div = document.createElement("div");
    div.className = "post-preview";
    div.innerHTML = `
      <h2>${post.title}</h2>
      <p class="meta">By ${post.author} on ${post.date}</p>
      <p>${post.content.substring(0, 100)}...</p>
      <a href="post.html">Read More</a>
    `;
    container.appendChild(div);
  });
}
