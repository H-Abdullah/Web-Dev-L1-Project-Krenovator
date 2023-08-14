function sideBarToggle() {
  const sideBar = document.getElementById('side-bar');
  if (!sideBar.classList.contains('isVisible')) {
    sideBar.classList.add('isVisible');
    sideBar.classList.remove('isHidden');
  } else {
    sideBar.classList.remove('isVisible');
    sideBar.classList.add('isHidden');
  }
}