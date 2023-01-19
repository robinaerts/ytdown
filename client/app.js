const downBtn = document.getElementById("download");
const url = document.getElementById("url");

downBtn.addEventListener("click", () => {
  const myUrl = url.value;
  if (myUrl) {
    window.location.href = `http://localhost:5000/download?url=${myUrl}`;
  }
});
