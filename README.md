<script src="https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js"></script>
<!-- NAVBAR STARTING POINT -->

<header id="header">
  <nav id="navbar">
    <span id="terminal">C:\User\Breekee></span>
    <span id="blink">█</span>
    <span id="space"></span>
    <!--TODO: FIX LINKS -->

    <a href="#welcome-section" target="_blank" id="item1" class="nav-link">Home</a>
    <a href="#projects" id="item2" class="nav-link">Portfolio</a>
    <a href="#about" id="item3" class="nav-link">About</a>
  </nav>

</header>

<!-- NAVBAR ENDING POINT -->

<main>

  <!-- WELCOME SECTION STARTING POINT DONE:-->

  <section id="welcome-section">
    <img src="https://p7.hiclipart.com/preview/212/86/524/anonymous-logo-t-shirt-million-mask-march-anonymous.jpg" alt="Avatar">
    <h2>We do not forgive. We do not Forget</h2>
    <h1>We are Anonymous</h1>

  </section>
  <!-- WELCOME SECTION ENDING POINT -->

  <!-- PROJECT SECTION STARTING POINT TODO:-->
  <div class="divider">
    <hr class="dotted">
    <h2>Famous Hacks</h2>
    <hr class="dotted">
  </div>
  <section id="projects">
    <div class="project-tile">
      <a href="https://github.com/breekee" id="profile-link" target="_blank"><img src="https://picsum.photos/258">
        <img class="top" src="https://tankerconsultingservices.com/wp-content/uploads/2019/01/hacked-2127635_1920.png"></a>
      <h3>Gael Website Attack</h3>
      <h4>Date: February 25, 2011 </h4>
    </div>
    <div class="project-tile">
      <a href="https://github.com/breekee"><img src="https://picsum.photos/259">
        <img class="top" src="https://tankerconsultingservices.com/wp-content/uploads/2019/01/hacked-2127635_1920.png"></a>
      <h3>Operation Didgeridie</h3>
      <h4>Date: September 9, 2009</h4>
    </div>
    <div class="project-tile">
      <img src="https://picsum.photos/260">
      <img class="top" src="https://tankerconsultingservices.com/wp-content/uploads/2019/01/hacked-2127635_1920.png">
      <h3>Operation Titstorm</h3>
      <h4>Date: February 10, 2010</h4>
    </div>

    <div class="project-tile">
      <img src="https://picsum.photos/262">
      <img class="top" src="https://tankerconsultingservices.com/wp-content/uploads/2019/01/hacked-2127635_1920.png">
      <h3>Anonymous Tags SOHH</h3>
      <h4>Date: June 2008</h4>
    </div>

    <div class="project-tile">
      <img src="https://picsum.photos/251">
      <img class="top" src="https://tankerconsultingservices.com/wp-content/uploads/2019/01/hacked-2127635_1920.png">
      <h3>Operation Tunisia</h3>
      <h4>Date: January 2011 </h4>
    </div>

    <div class="project-tile">
      <img src="https://picsum.photos/252">
      <img class="top" src="https://tankerconsultingservices.com/wp-content/uploads/2019/01/hacked-2127635_1920.png">
      <h3>YouTube Porn Day</h3>
      <h4>Date: January 6, 2010 </h4>
    </div>

    <div class="project-tile">
      <img src="https://picsum.photos/253">
      <img class="top" src="https://tankerconsultingservices.com/wp-content/uploads/2019/01/hacked-2127635_1920.png">
      <h3>HBGary Barr</h3>
      <h4>Date: February 6-11, 2011 </h4>
    </div>

    <div class="project-tile">
      <img src="https://picsum.photos/254">
      <img class="top" src="https://tankerconsultingservices.com/wp-content/uploads/2019/01/hacked-2127635_1920.png">
      <h3>Operation Payback</h3>
      <h4>Date: December 2010</h4>
    </div>

    <div class="project-tile">
      <img src="https://picsum.photos/255">
      <img class="top" src="https://tankerconsultingservices.com/wp-content/uploads/2019/01/hacked-2127635_1920.png">
      <h3>BoA E-Mail Drop</h3>
      <h4>Date: March 14, 2011 </h4>
    </div>

    <div class="project-tile">
      <img src="https://picsum.photos/256">
      <img class="top" src="https://tankerconsultingservices.com/wp-content/uploads/2019/01/hacked-2127635_1920.png">
      <h3>Operation Sony</h3>
      <h4>Date: April 2, 2011 </h4>
    </div>

  </section>

  <!-- PROJECT SECTION ENDING POINT -->

</main>

<!--TODO: Social links ,1) id="profile-link" github or FCC-->

<footer id="footer">
  <h4>Made with 🧠 by Breekee</h4>
</footer>
@import url("https://fonts.googleapis.com/css2?family=Source+Code+Pro:wght@300;400&display=swap");
@import url("https://fonts.googleapis.com/css2?family=VT323&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Baloo+Tamma+2&display=swap");
@font-face {
  font-family: "arcaderegular";
  src: url("arcade-webfont.woff2") format("woff2"),
    url("arcade-webfont.woff") format("woff");
  font-weight: normal;
  font-style: normal;
}
body {
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  padding: 0;
  margin: 0;
  align-items: center;
  background: #000102;
  background: -moz-linear-gradient(top, #000102 0%, #62737f 100%, #75716d 100%);
  background: -webkit-linear-gradient(
    top,
    #000102 0%,
    #62737f 100%,
    #75716d 100%
  );
  background: linear-gradient(
    to bottom,
    #000102 0%,
    #62737f 100%,
    #75716d 100%
  );
}

header,
footer {
  margin: auto;
  width: 100%;
  text-align: center;
  flex: 0 0 50px;
}
header {
  position: fixed;
  z-index: 1;
}

nav {
  display: flex;
  height: 50px;
  flex-direction: row;
  justify-content: space-around;
  background-color: #000;
}

nav a {
  text-decoration: none;
  font-family: "Baloo Tamma 2";
  font-size: 1.1rem;
  align-self: center;
  background-color: #0c0c0c;
  color: #fff;
  text-decoration: none;
  margin: 5px;
  padding: 1px 0px;
  -moz-border-radius: 7px;
  -webkit-border-radius: 7px;
  border-radius: 7px;
  flex-wrap: nowrap;
}

nav a:hover {
  color: transparent;
  text-shadow: -4px 4px hsla(0, 0%, 90%, 0.4), -3px 3px hsla(0, 0%, 60%, 0.2),
    -2px 2px hsla(0, 0%, 70%, 0.2), -1px 1px hsla(0, 0%, 70%, 0.2),
    0px 0px hsla(0, 0%, 50%, 0.5), 1px -1px hsla(0, 0%, 30%, 0.6),
    2px -2px hsla(0, 0%, 30%, 0.7), 3px -3px hsla(0, 0%, 32%, 0.8),
    4px -4px hsla(0, 0%, 30%, 0.9), 5px -5px hsla(0, 0%, 30%, 1);
}

#terminal {
  order: 1;
  font-family: VT323;
  font-size: 20px;
  max-width: 100%;
  line-height: 2rem;
  padding-left: 10px;
  margin: auto;
  justify-self: center;
  color: white;
  letter-spacing: 4px;
}

#blink {
  order: 2;
  font-family: VT323;
  font-size: 1rem;
  max-width: 100%;
  line-height: 1rem;
  margin: auto;
  justify-self: middle;
  animation: blinkingText 1.1s infinite;
  color: white;
  align-self: center;
}

@keyframes blinkingText {
  0% {
    color: #ffffff;
  }
  49% {
    color: #ffffff;
  }
  60% {
    color: transparent;
  }
  99% {
    color: transparent;
  }
}
#space {
  order: 3;
  flex: 10;
}

nav a#item1 {
  order: 4;
  flex: 1;
  flex-wrap: nowrap;
}
nav a#item2 {
  order: 5;
  flex: 1;
  flex-wrap: nowrap;
}
nav a#item3 {
  order: 6;
  flex: 1;
  margin-right: 10px;
  flex-wrap: nowrap;
}

main {
  margin-top: 50px;
}

#welcome-section {
  margin-top: 80px;
  text-align: center;
  height: 100vh;
}

#welcome-section img {
  opacity: 70%;
  width: 20%;
  border-radius: 50%;
}

#welcome-section h1 {
  color: white;
  text-align: center;
  font-family: "arcaderegular", monospace;
  font-size: 5em;
  font-weight: 500;
  padding: 0;
  margin: 50px 0px 0px 0px;
}

#welcome-section h2 {
  color: white;
  text-align: center;
  font-family: "arcaderegular", monospace;
  font-weight: 400;
  font-size: 1.5rem;
  /*'Baloo Tamma 2';*/
}

hr.dotted {
  width: 10%;
  margin-top: 30px;
}
.divider h2 {
  font-family: VT323;
  color: #fff;
  font-size: 2em;
  font-weight: 300;
  text-align: center;
}

#projects {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 5px;
  justify-content: center;
}
.project-tile img {
  padding: 0;
  margin: 20px 5px 5px 5px;
  width: 250px;
  height: 250px;
}

.project-tile h3,
.project-tile h4 {
  padding: 0;
  margin: 1px 0px 0px 5px;
  background-color: black;
  color: white;
  text-align: center;
  font-family: "Source Code Pro", monospace;
  font-weight: 400;
  width: 250px;
