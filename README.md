<!DOCTYPE html>
<html lang="en" >
<head>
  <meta charset="UTF-8">
  <title>Sachin Shirish</title>
  <link rel="shortcut icon" type="image/png" href="favicon.png"/>
  <meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1"><link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.4/css/bulma.min.css'><link rel="stylesheet" href="./style.css">
</head>
<body>
<section class="hero is-fullheight">
  <div class="hero-body">
    <div class="container">
      <div class="columns">
        <div class="column is-3 is-flex">
          <div class="column-child sidebar shadow">
            <div class="sidebar-header has-text-centered">
              <img
                src="d.jpg" alt="Avatar"
                class="sidebar-image">
              <h2 class="header-name">Sachin Shirish</h2>
              <h5>Cyber Security Professional <br><br> Ethical Hacker  | Penetration Tester | Threat Hunter | Bug Hunter <br><br></h5>
              <div class="social-icons">
                <a href="https://www.linkedin.com/in/sachin-shirish-92709a1b9/"><i class="fab fa-linkedin icon"></i></a>
              </div>
            </div>
          </div>
        </div>
        <div class="column is-flex">
          <div class="column-child terminal shadow">
            <div class="terminal-bar dark-mode">
              <div class="icon-btn close"></div>
              <div class="icon-btn min"></div>
              <div class="icon-btn max"></div>
              <div class="terminal-bar-text is-hidden-mobile dark-mode-text">Sachin Shirish Portfolio:~$</div>
            </div>
            <div class="terminal-window primary-bg" onclick="document.getElementById('dummyKeyboard').focus();">
              <div class="terminal-output" id="terminalOutput">
                <div class="terminal-line">
                  <span class="help-msg">Welcome to Sachin Shirish portfolio — Type <span class="code">enter</span>
                    for a list of supported commands.</span>
                </div>
              </div>
              <div class="terminal-line">
                <span class="success">➜</span> <span class="directory">~</span> <span class="user-input"
                  id="userInput"></span>
                <input type="text" id="dummyKeyboard" class="dummy-keyboard">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

  <script src='https://use.fontawesome.com/releases/v5.3.1/js/all.js'></script><script  src="./script.js"></script>
</body>
</html>
