// menu-open
let menuToggler = document.querySelector(".menu-open");
menuToggler.addEventListener("click", function (event) {
  event.preventDefault();

  let mobileMenu = document.querySelector(".mobile-menu__outer");
  mobileMenu.classList.toggle("active");
  let inI = this.querySelector("i");
  inI.classList.toggle("fa-bars");
  inI.classList.toggle("fa-times");
});

// data-collapse
let collapseToggler = document.querySelectorAll("[data-collapse]");
collapseToggler.forEach((toggler) => {
  toggler.addEventListener("click", function (event) {
    event.preventDefault();
    let thisIs = this;
    if (!toggler.classList.contains("active")) {
      expand(thisIs);
    } else {
      collapse(thisIs);
    }
  });
  function expand(thisIs) {
    let target = document.querySelectorAll(
      thisIs.getAttribute("data-collapse")
    );
    target.forEach((eachTarget) => {
      eachTarget.classList.add("active");
    });
    thisIs.classList.add("active");

    let parent = target[0].getAttribute("collapse-parent");
    let others = document.querySelectorAll(parent + " [data-collapse]");
    others.forEach((eachOther) => {
      if (eachOther !== thisIs) {
        collapse(eachOther);
      }
    });
  }
  function collapse(thisIs) {
    let target = document.querySelectorAll(
      thisIs.getAttribute("data-collapse")
    );
    target.forEach((eachTarget) => {
      eachTarget.classList.remove("active");
    });
    thisIs.classList.remove("active");
  }
});
