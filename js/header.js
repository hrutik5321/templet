class HeaderBar extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = ` 
    <section class="header">
    <div class="header-menue">
      <i class="fal fa-bars" onClick="myClick(); header()"></i>
    </div>
    <div class="header-logo">
      <img src="img/Main Header.png" alt="">
    </div>
    <div class="header-profile">
      <div class="profile-logo">
        <i class="fal fa-question-circle"></i>
        <span class="logo-span">Help</span>
      </div>
      <div class="profile-logo">
        <i class="fal fa-bell"></i>
        <span class="logo-span">Notification</span>
      </div>
      <div class="profile-logo">
        <img src="img/Ellipse 50.png" alt="header profile">
        <span class="img-name">Kanesh</span>
      </div>
    </div>
  </section>`;
  }
}

window.customElements.define("head-section", HeaderBar);
