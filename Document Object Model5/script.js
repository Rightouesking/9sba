let posts = JSON.parse(localStorage.getItem("posts")) || [];
let editingPostId = null;

// DOM Elements
const form = document.getElementById("postForm");
const titleInput = document.getElementById("title");
const contentInput = document.getElementById("content");
const titleError = document.getElementById("titleError");
const contentError = document.getElementById("contentError");
const postsContainer = document.getElementById("posts");

function renderPosts() {
  postsContainer.innerHTML = "";
  posts.forEach(post => {
    const postCard = document.createElement("div");
    postCard.className = "col-md-6";
    postCard.innerHTML = `
      <div class="card post">
        <div class="card-body">
          <h5 class="card-title">${post.title}</h5>
          <p class="card-text">${post.content}</p>
          <button class="btn btn-sm btn-warning me-2" onclick="editPost('${post.id}')">Edit</button>
          <button class="btn btn-sm btn-danger" onclick="deletePost('${post.id}')">Delete</button>
        </div>
      </div>
    `;
    postsContainer.appendChild(postCard);
  });
}

function savePosts() {
  localStorage.setItem("posts", JSON.stringify(posts));
}

function clearForm() {
  form.reset();
  editingPostId = null;
  titleError.textContent = "";
  contentError.textContent = "";
}

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const title = titleInput.value.trim();
  const content = contentInput.value.trim();
  let valid = true;

  titleError.textContent = "";
  contentError.textContent = "";

  if (!title) {
    titleError.textContent = "Title is required.";
    valid = false;
  }

  if (!content) {
    contentError.textContent = "Content is required.";
    valid = false;
  }

  if (!valid) return;

  if (editingPostId) {
    const post = posts.find(p => p.id === editingPostId);
    post.title = title;
    post.content = content;
  } else {
    const newPost = {
      id: Date.now().toString(),
      title,
      content,
      timestamp: new Date().toISOString()
    };
    posts.unshift(newPost);
  }

  savePosts();
  renderPosts();
  clearForm();
});

function deletePost(id) {
  posts = posts.filter(p => p.id !== id);
  savePosts();
  renderPosts();
}

function editPost(id) {
  const post = posts.find(p => p.id === id);
  if (post) {
    titleInput.value = post.title;
    contentInput.value = post.content;
    editingPostId = id;
  }
}

// On load
renderPosts();