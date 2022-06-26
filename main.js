let Accordion = document.getElementsByClassName("Accordion");
for (let i = 0; i < Accordion.length; i++) {
  Accordion[i].addEventListener("click", function () {
    let desc = this.nextElementSibling;
    this.classList.toggle('active');
    console.log(desc.scrollHeight)
    if (desc.style.maxHeight){
      desc.style.maxHeight = null;
    } else {
      desc.style.maxHeight = desc.scrollHeight+"px";
    }
  });
}
