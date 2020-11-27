class Navbar extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = `
  
      <section id="sidebar">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a href="#" class="nav-link"
              ><i class="far fa-wave-square nav-icon"></i
              ><span class="icon-text">Dashbord</span></a
            >
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link"
              ><i class="far fa-desktop nav-icon"></i
              ><span class="icon-text">Classroom</span></a
            >
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link"
              ><i class="fal fa-book-open nav-icon fc"></i
              ><span class="icon-text">Syllabus</span></a
            >
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link"
              ><i class="fal fa-folder nav-icon fc"></i
              ><span class="icon-text">Courses</span></a
            >
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link"
              ><i class="fal fa-file-alt nav-icon"></i
              ><span class="icon-text">Assignment</span></a
            >
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link"
              ><i class="fal fa-file-certificate nav-icon ce"></i
              ><span class="icon-text">Certificate</span></a
            >
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link"
              ><i class="fal fa-clipboard nav-icon"></i
              ><span class="icon-text">Exam</span></a
            >
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link"
              ><i class="fal fa-layer-group nav-icon"></i
              ><span class="icon-text">Form</span></a
            >
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link"
              ><i class="fal fa-book-open nav-icon"></i
              ><span class="icon-text">Lesson</span></a
            >
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link"
              ><i class="fal fa-clock nav-icon"></i
              ><span class="icon-text">Poll</span></a
            >
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link"
              ><i class="fas fa-align-left nav-icon"></i
              ><span class="icon-text">Qestions</span></a
            >
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link"
              ><i class="fal fa-star nav-icon"></i
              ><span class="icon-text">Skill</span></a
            >
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link"
              ><i class="far fa-check-circle nav-icon"></i
              ><span class="icon-text">Qestions</span></a
            >
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link"
              ><i class="fal fa-calendar nav-icon"></i
              ><span class="icon-text">Timetable</span></a
            >
          </li>
          <li class="nav-item st">
            <a href="#" class="nav-link"
              ><i class="fal fa-cog nav-icon"></i
              ><span class="icon-text">Settings</span></a
            >
          </li>
        </ul>
      </section>
     
   
`;
  }
}

window.customElements.define("nav-bar", Navbar);


// function myClick() {
//   var elem = document.getElementById("sidebar");
//   elem.classList.toggle("back");

//   var back = document.getElementsByClassName("back")
//     section()
//   // var header = document.getElementById("pixel").style.marginLeft = "19.9rem";
//   function section() {
    // document.getElementById("pixel").style.marginLeft = "19.9rem"
    // document.getElementById("class-list").style.marginLeft = "17.8rem"
    // document.getElementById("class-subjects").style.marginLeft = "22rem"
    // document.getElementById("drop-head").style.marginLeft = "19.6rem"
//   }
// }

function myClick() {
  var x = document.getElementById("sidebar");
  var classHead = document.getElementById("class-head")
  var classList = document.getElementById("class-list")
  var classSubjects = document.getElementById("class-subjects")
  // var dropHead = document.getElementById("drop-head")
  if(x.style.display === "none") {
    x.style.display = "block"
    classHead.style.marginLeft = "5.8rem"
    classList.style.marginLeft = "5.8rem"
    classSubjects.style.marginLeft = "10rem"
    document.getElementById("drop-head").style.marginLeft = "5.6rem"
  } else {
    x.style.display = "none"
    classHead.style.marginLeft = "19.9rem"
    classList.style.marginLeft = "17.8rem"
    classSubjects.style.marginLeft = "22rem"
    document.getElementById("drop-head").style.marginLeft = "19.6rem"
  }
}



