const defaultName = "John Doe";
const defaultDescription = "Web Developer";
const defaultBackgroundColor = "bg-light";
const defaultPicture = "";

const profileName = document.getElementById("profile-name");
const profileDescription = document.getElementById("profile-description");
const profilePic = document.getElementById("profile-pic");
const inputField = document.getElementById("input-field");
const profileCard = document.getElementById("profile-card");

const pictureLinks = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgB730p0ChSl_CNr5N6n05AGzEtEAhFypOFg&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTN5XaPknTWTxdBcdC3r0_9blSi_8n3rD_2Xg&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3Z9rMHYtAHW14fQYWqzPoARdimFbyhm0Crw&s",
    "https://www.svgrepo.com/show/384674/account-avatar-profile-user-11.svg",
];

let currentPictureIndex = 0;
const backgroundColors = ["bg-light", "bg-primary", "bg-secondary", "bg-success", "bg-danger", "bg-warning", "bg-info"];
let currentBgIndex = 0;

document.getElementById("change-name").addEventListener("click", function() {
    const nameInput = inputField.value;
    if (nameInput) {
        profileName.textContent = nameInput;
    }
});

document.getElementById("change-description").addEventListener("click", function() {
    const descInput = inputField.value;
    if (descInput) {
        profileDescription.textContent = descInput;
    }
});

document.getElementById("change-picture").addEventListener("click", function() {
    currentPictureIndex = (currentPictureIndex + 1) % pictureLinks.length;
    profilePic.style.backgroundImage = `url(${pictureLinks[currentPictureIndex]})`;
});

document.getElementById("change-background").addEventListener("click", function() {
    profileCard.classList.remove(...backgroundColors); 
    currentBgIndex = (currentBgIndex + 1) % backgroundColors.length;
    profileCard.classList.add(backgroundColors[currentBgIndex]); 
});

document.getElementById("reset-profile").addEventListener("click", function() {
    profileName.textContent = defaultName;
    profileDescription.textContent = defaultDescription;
    profilePic.style.backgroundImage = defaultPicture;
    profileCard.className = `profile-card ${defaultBackgroundColor}`;
});
