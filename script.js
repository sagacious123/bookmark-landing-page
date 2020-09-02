var tabLink1 = document.querySelector(".tab-link1");
var tabLink2 = document.querySelector(".tab-link2");
var tabLink3 = document.querySelector(".tab-link3");
var tab1 = document.querySelector(".tab1");
var tab2 = document.querySelector(".tab2");
var tab3 = document.querySelector(".tab3");
var tabContent = document.getElementsByClassName("tab-content");


      tab1.style.display = "flex";
      tabLink1.classList.add("active");
      tab2.style.display = "none";
      tabLink2.classList.remove("active");
      tab3.style.display = "none";
      tabLink3.classList.remove("active");



tabLink1.addEventListener("click", function() {
  if (tab1.style.display = "none") {
      // tabLink[i].className = tablinks[i].className.replace(" active", "");
      tab1.style.display = "flex";
      tabLink1.classList.add("active");
      tab2.style.display = "none";
      tabLink2.classList.remove("active");
      tab3.style.display = "none";
      tabLink3.classList.remove("active");
  } else {
    tab1.style.display = "none";
    tabLink1.classList.remove("active");
  }

})

tabLink2.addEventListener("click", function() {
  if (tab2.style.display = "none") {
      // tabLink[i].className = tablinks[i].className.replace(" active", "");
      tab2.style.display = "flex";
      tabLink2.classList.add("active");
      tab1.style.display = "none";
      tabLink1.classList.remove("active");
      tab3.style.display = "none";
      tabLink3.classList.remove("active");
  } else {
    tab2.style.display = "none";
    tabLink2.classList.remove("active");
  }

})

tabLink3.addEventListener("click", function() {
  if (tab3.style.display = "none") {
      // tabLink[i].className = tablinks[i].className.replace(" active", "");
      tab3.style.display = "flex";
      tabLink3.classList.add("active");
      tab1.style.display = "none";
      tabLink1.classList.remove("active");
      tab2.style.display = "none";
      tabLink2.classList.remove("active");
  } else {
    tab3.style.display = "none";
    tabLink3.classList.remove("active");
  }

})



//===---=== ACCORDION JS ===---===//

const accButton = document.getElementsByClassName("acc-button");
var i

for (i = 0; i < accButton.length; i++) {
  accButton[i].addEventListener("click", function() {
    this.classList.toggle("clicked");
    
    const content = this.nextElementSibling;

    if(content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  })
}

const icon = document.getElementById("icon");

// icon.addEventListener("click", function () {
//   navBar.classList.toggle("responsive");

//   // const navItems = document.querySelector(".nav-items");
  
//   //   if(navItems.style.maxHeight) {
//   //     navItems.style.maxHeight = null;
//   //   } else {
//   //     navItems.style.maxHeight = navItems.scrollHeight + "px";
//   //   }
    
//  })



//===---=== NAVBAR JS ===---===//

 const navToggler = document.querySelector(".nav-toggler");
 const navBar = document.getElementById("navbar");

 navToggler.addEventListener("click", function() {
    navBar.classList.toggle("responsive");
    this.classList.toggle("change");
 })

const bt = document.querySelector(".bt");
const modal = document.querySelector(".modal");
const close = document.querySelector(".close");

bt.addEventListener("click", function() {
  modal.style.display = "block"
})

close.addEventListener("click", function() {
  modal.style.display = "none"
})

window.addEventListener("click", function(e) {
  if(e.target == modal) {
    modal.style.display = "none";
  }
})


