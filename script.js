function loadScreen() {
    const loader = document.querySelector(".loader");
    loader.className += " hidden";
    console.log("loading....");
}

window.onload = () => {
  // Removes the Loading Screen
  setTimeout(() => {
    loadScreen();
  }, 500);

};