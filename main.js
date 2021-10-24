const linksSocialMedia = {
  github: "casa-henrique",
  facebook: "",
  youtube: "",
  instagram: "casa.henrique",
  twitter: "kzzaoo",
};

function changeSocialMedia() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute("class");
    console.log(social);
    li.children[0].href = `https://${social}.com/${linksSocialMedia[social]}`;
  }
}
changeSocialMedia();

function getGitHubProfileInfos() {
  const urlGitHubApi = `https://api.github.com/users/${linksSocialMedia.github}`;
  fetch(urlGitHubApi)
    .then((response) => response.json())
    .then((data) => {
      const name = (userName.textContent = data.name);
      const gitUserLink = (gitLogin.href = data.html_url);
      const gitUserName = (userLogin.textContent = data.login);
      const gitProfileImage = (profileImage.src = data.avatar_url);
      const gitBio = (bio.textContent = data.bio);
    });
}
getGitHubProfileInfos();
