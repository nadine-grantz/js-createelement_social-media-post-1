console.clear();

function handleLikeButtonClick(event) {
  const buttonElement = event.target;
  buttonElement.classList.toggle("post__button--liked");
}

const likeButton = document.querySelector('[data-js="like-button"]');
likeButton.addEventListener("click", handleLikeButtonClick);

// Exercise:
// Use document.createElement() and append another social media post to the body.

const neuerSocialMediaPost = document.createElement("article");
neuerSocialMediaPost.classList.add("post");

const neuerText = document.createElement("p");
neuerText.classList.add("post__content");
neuerText.textContent = "Hallo, ich bin ein neuer SocialMediaPost";
neuerSocialMediaPost.append(neuerText);

const neuerUserName = document.createElement("footer");
neuerUserName.classList.add("post__username");
neuerUserName.textContent = "@Nadine";
neuerSocialMediaPost.append(neuerUserName);

const neuerButton = document.createElement("button");
neuerButton.classList.add("post__button");
neuerButton.textContent = "  ♥ Like";
neuerSocialMediaPost.append(neuerButton);

document.body.append(neuerSocialMediaPost); // elternElement.append(kindElement)

neuerButton.addEventListener("click", handleLikeButtonClick);

console.log(neuerSocialMediaPost);
