let panels = document.querySelectorAll(`.panel`);
function upd(){
   this.classList.toggle(`open`)
}
function toggleActive(e) {
    console.log(e.propertyName);
    if (e.propertyName.includes('flex')) {
      this.classList.toggle('openactive');
    }
  }
panels.forEach(ele => ele.addEventListener(`click`,upd))
panels.forEach(ele => ele.addEventListener("transitionend",toggleActive))