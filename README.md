<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Portfolio</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <header>
        <div class="container">
            <h1>My Portfolio</h1>
            <nav>
                <ul>
                    <li><a href="#about">About</a></li>
                    <li><a href="#skills">Skills</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
        </div>
    </header>
    <main>
        <section id="about">
            <div class="container">
                <h2>About Me</h2>
                <p>Write a brief introduction about yourself here.</p>
            </div>
        </section>
        <section id="skills">
            <div class="container">
                <h2>Skills</h2>
                <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>Bootstrap</li>
                    <li>React</li>
                </ul>
            </div>
        </section>
        <section id="projects">
            <div class="container">
                <h2>Projects</h2>
                <div class="project">
                    <h3>Project Title</h3>
                    <p>Project description goes here.</p>
                    <a href="#">View Project</a>
                </div>
                <div class="project">
                    <h3>Project Title</h3>
                    <p>Project description goes here.</p>
                    <a href="#">View Project</a>
                </div>
            </div>
        </section>
        <section id="contact">
            <div class="container">
                <h2>Contact Me</h2>
                <form>
                    <label for="name">Name</label>
                    <input type="text" id="name" name="name">
                    <label for="email">Email</label>
                    <input type="email" id="email" name="email">
                    <label for="message">Message</label>
                    <textarea id="message" name="message"></textarea>
                    <input type="submit" value="Send">
                </form>
            </div>
        </section>
    </main>
    <footer>
        <div class="container">
            <p>&copy; 2023 My Portfolio. All rights reserved.</p>
        </div>
    </footer>
    <script src="script.js"></script>
</body>
</html>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: Arial, sans-serif;
    font-size: 16px;
    line-height: 1.6;
}

.container {
    max-width: 960px;
    margin: 0 auto;
    padding: 0 20px;
}

header {
    background-color: #333;
    color: #fff;
    padding: 20px 0;

   
