const BLACKLISTED_KEY_CODES = [ 38 ];
const COMMANDS = {
  enter:
    'Supported commands: <span class="code">about</span>, <span class="code">experience</span>, <span class="code">education</span>, <span class="code">skills</span>, <span class="code">certifications</span>, <span class="code">contact</span>',
  about:
    "Cyber Security practitioner capable of strategizing, architecting, building and maturing cyber security initiatives. Passionate about analyzing cyber security risks and translating them to actionable countermeasures. Currently doing Masters degree in Masters in Computer Application from Jagran Institute of Management (Kanpur Uttar Pradesh) .",
  skills:
    "Networking | Ethical Hacking | Penetration Testing| Threat Hunting & Intelligence Analyst ",
  education:
    "MCA - Master of Computer Applications Pursuing <br> BCA -  Bachelor of Computer Applications Specialization in Computer Applications",
  experience:'<span class="code">Total Experience:</span><br>Done Cyber Security Industry Internship in Association with VPKBIET BARAMATI INDIA ',
  certifications: 
    "NSE2 - Network Security Associate <br> NSE1 - Network Security Associate <br> Certified Microsoft Azure <br> CAP - Certified AppSEC Practitioner",
  contact:
    "You can contact me on Linkedin and or via the mail:<br><a href='https://www.linkedin.com/in/sachin-shirish-92709a1b9/' class='success link'>Linkedin</a>, <a href='mailto:sachinshirish12@gmail.com' class='success link'>Email</a>,"
};
let userInput, terminalOutput;

const app = () => {
  userInput = document.getElementById("userInput");
  terminalOutput = document.getElementById("terminalOutput");
  document.getElementById("dummyKeyboard").focus();
  console.log("Application loaded");
};

const execute = function executeCommand(input) {
  let output;
  input = input.toLowerCase();
  if (input.length === 0) {
    return;
  }
  output = `<div class="terminal-line"><span class="success">➜</span> <span class="directory">~</span> ${input}</div>`;
  if (!COMMANDS.hasOwnProperty(input)) {
    output += `<div class="terminal-line">no such command: ${input}</div>`;
    console.log("Oops! no such command");
  } else {
    output += COMMANDS[input];
  }

  terminalOutput.innerHTML = `${
    terminalOutput.innerHTML
  }<div class="terminal-line">${output}</div>`;
  terminalOutput.scrollTop = terminalOutput.scrollHeight;
};

const key = function keyEvent(e) {
  const input = userInput.innerHTML;

  if (BLACKLISTED_KEY_CODES.includes(e.keyCode)) {
    return;
  }

  if (e.key === "Enter") {
    execute(input);
    userInput.innerHTML = "";
    return;
  }

  userInput.innerHTML = input + e.key;
};

const backspace = function backSpaceKeyEvent(e) {
  if (e.keyCode !== 8 && e.keyCode !== 46) {
    return;
  }
  userInput.innerHTML = userInput.innerHTML.slice(
    0,
    userInput.innerHTML.length - 1
  );
};

document.addEventListener("keydown", backspace);
document.addEventListener("keypress", key);
document.addEventListener("DOMContentLoaded", app);
