// Your existing JavaScript code

// Function to add a new blog post
function addBlogPost(title, imageSrc, content) {
    const blogPostsDiv = document.getElementById("blog-posts");
  
    const blogPostDiv = document.createElement("div");
    blogPostDiv.classList.add("blog-post");
  
    const titleElement = document.createElement("h2");
    titleElement.textContent = title;
  
    const imageElement = document.createElement("img");
    imageElement.src = imageSrc;
  
    const contentElement = document.createElement("p");
    contentElement.textContent = content;
  
    blogPostDiv.appendChild(titleElement);
    blogPostDiv.appendChild(imageElement);
    blogPostDiv.appendChild(contentElement);
  
    blogPostsDiv.appendChild(blogPostDiv);
  }
  
  // Event listener for the blog form submission
  const blogForm = document.getElementById("blog-form");
  blogForm.addEventListener("submit", function (event) {
    event.preventDefault();
  
    const title = document.getElementById("title").value;
    const imageFile = document.getElementById("image").files[0];
    const content = document.getElementById("content").value;
  
    if (title && imageFile && content) {
      const reader = new FileReader();
      reader.onload = function (event) {
        const imageSrc = event.target.result;
        addBlogPost(title, imageSrc, content);
      };
      reader.readAsDataURL(imageFile);
  
      // Clear the form after submission
      blogForm.reset();
    } else {
      alert("Please fill in all fields.");
    }
  });
  