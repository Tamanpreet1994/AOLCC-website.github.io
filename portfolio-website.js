
<!DOCTYPE html>
<html>
    
    <!-- Head -->
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width" />
        <title>TAMANPREET KAUR</title>
        <link rel="shortcut icon" type="img/jpg" href="images/coding_icon.png">
        <link rel="stylesheet" type="text/css" href="stylesheet/sample_portfolio.css">
    </head>

    <!-- Body -->
    <body class="Background">   

        <!-- Navbar -->
        <div class="Navbar">
            <a class="active" href="#Home">Home</a>
            <!-- New section added -->
            <a href="#Slideshow">Slideshow</a>
            <a href="#About">About</a>
            <a href="#GitHub">GitHub</a>
            <!-- Onclick and ondblclick functions added to open and close the contact form -->
            <a onclick="openForm()" ondblclick="closeForm()" class="contact">Contact</a>
        </div>

        <!-- Background video -->
        <div id="Home">
            <video autoplay muted loop id="Typing_Video">
                <source src="images/video/Typing.mp4" type="video/mp4">
                <!-- Display message if video fails to run -->
                Your browser does not support HTML5 video.
            </video>
        </div>

        <!-- Video text -->
        <div class="Video_Text">
            <h1 class="white-text">Your Name's Portfolio</h1>
            <strong>
                <p class="center quote">
                    <q>The computer programmer is a creator of universes for which he alone is the lawgiver.
                        <br>No playwright, no stage director, no emperor, however powerful, has ever exercised such absolute authority to arrange a stage or
                        <br>field of battle and to command such unswervingly dutiful actors or troops.
                    </q>
                    <br> -Joseph Weizenbaum<br>
                    <br>
                    My name is ____. Welcome to my portfolio website. On it, I will tell you about my background and experience.
                    <br>
                    <br>Thank you for stopping by and enjoy! 
                </p>
            </strong>
        </div>

        <!-- Slideshow section added -->
        <div id="Slideshow">
            <div id="Slideshow_Background"> 
                <div id="Slideshow_Container">
                    <!-- Slide 1 of 6 -->
                    <div class="mySlides fade">
                        <img class="Slideshow_Images" src="images/Picture_of_You.jpg">
                        <div class="text">I'm available to assist you on your project!</div>
                    </div>
                    <!-- Slide 2 of 6 -->
                    <div class="mySlides fade">
                        <img class="Slideshow_Images" src="images/HTML_CSS_and_JavaScript.jpeg"> 
                        <div class="text">I am a full-stack software developer,<br> trained in:<br>HTML, CSS, JavaScript,</div>
                    </div>
                    <!-- Slide 3 of 6 -->
                    <div class="mySlides fade">
                        <img class="Slideshow_Images" src="images/Python.png">
                        <div class="text">the popular programming language Python,</div>
                    </div>
                    <!-- Slide 4 of 6 -->
                    <div class="mySlides fade">
                        <img class="Slideshow_Images" src="images/C_Sharp_and_Dot_NET.png">
                        <div class="text">C#, .NET Framework, ASP.NET, MVC, </div>
                    </div>
                    <!-- Slide 5 of 6 -->
                    <div class="mySlides fade">
                        <img class="Slideshow_Images" src="images/SQL_and_Database.jpg"> 
                        <div class="text">back end development, databases and SQL.</div>
                    </div>
                    <!-- Slide 6 of 6 -->
                    <div class="mySlides fade">
                        <img class="Slideshow_Images" src="images/Coding_1.jpg"> 
                        <div class="text"><a class="white-text contact" onclick="openForm()">Contact me now!</a></div> 
                    </div>
                    <!-- Previous and next buttons -->
                    <a class="Previous" onclick="plusSlides(-1)">&#10094;</a>
                    <a class="Next" onclick="plusSlides(1)">&#10095;</a>
                </div>
                <br> <!-- Adds a space between the slideshow images and the dots -->

                <!-- Slideshow dots (these are another way for users to navigate through the slideshow) -->
                <div style="text-align: center">
                    <span class="dot" onclick="currentSlide(1)"></span>
                    <span class="dot" onclick="currentSlide(2)"></span>
                    <span class="dot" onclick="currentSlide(3)"></span> 
                    <span class="dot" onclick="currentSlide(4)"></span> 
                    <span class="dot" onclick="currentSlide(5)"></span> 
                    <span class="dot" onclick="currentSlide(6)"></span> 
                </div>
            </div>
        </div>

        <!-- About section -->
        <div class="Row" id="About">
            <!-- Left column -->
            <div class="Column_2">
                <img src="images/Development.jpg" alt="Laptop">
            </div>
            <!-- Right column -->
            <div class="Column_1">
                <h1>About</h1>
                <p>
                    I am a software developer who loves to code! As a father of two, I enjoy time with my family and traveling. 
                    <br>
                    <br>I am a graduate of <a href="https://www.learncodinganywhere.com" target="_blank">The Tech Academy</a>’s Software Developer Boot Camp, and trained and experienced in the following web and programming languages: HTML, CSS, JavaScript, SQL, Python, C# and more. 
                    <br>
                    <br>I am a full-stack developer and would love to work with you on your project. <a onclick="openForm()" class="contact">Contact</a> me below!
                </p>
            </div>
        </div>

        <!-- GitHub section -->
        <div class="Row" id="GitHub">
            <!-- Left column -->
            <div class="Column_1">
                <h1>GitHub</h1>
                <p>You can view my coding projects on my GitHub profile here:
                    <br>
                    <p class="center"><a href="https://github.com/the-tech-academy" target="_blank">The Tech Academy Github</a></p>
                </p>
            </div>
            <!-- Right column -->
            <div class="Column_2">
                <a href="https://github.com/the-tech-academy" target="_blank"><img src="images/GitHub.png"></a>
            </div>
        </div>

        <!-- Contact form -->
        <div id="Contact">
           <button onclick="openForm()" class="Pop_Up_Button">CONTACT</button>
           <div class="form-popup" id="myForm" ondblclick="closeForm()">
                <form action="https://formspree.io/info@learncodinganywhere.com" method="POST" class="form-container"> <!-- Here we are using a free online service from https://formspree.io/ to send our contact form to an email address of our choosing - note: it will not run unless live on the internet, you have to push it to your online website first -->
                    <h1>Contact</h1>
                    <label for="name"><b>Name</b></label>
                      <input type="text" placeholder="Type your name here" name="name" required>
                    <label for="phone"><b>Phone</b></label>
                      <input type="text" placeholder="Type your phone number here" name="phone">
                    <label for="email"><b>Email</b></label>		
                      <input type="text" placeholder="Type your email address here" name="email" required>
                    <label for="message"><b>Message</b></label>
                      <input type="text" placeholder="Type your message here" name="message">
         
                    <button type="submit" class="btn">SUBMIT</button>
                    <button type="button" class="btn cancel" onclick="closeForm()">CLOSE</button>
                </form>
           </div>
        </div>
        
        <!-- Footer section -->
        <footer>
                <p class="center">&copy Prosper Consulting Inc., <a href="https://www.learncodinganywhere.com/" target="_blank">The Tech Academy</a></p><br>
        </footer>
        <script src="js/sample_portfolio.js"></script>
    </body>
<script>'undefined'=== typeof _trfq || (window._trfq = []);'undefined'=== typeof _trfd && (window._trfd=[]),_trfd.push({'tccl.baseHost':'secureserver.net'},{'ap':'cpsh-oh'},{'server':'p3plzcpnl507399'},{'dcenter':'p3'},{'cp_id':'5821630'},{'cp_cl':'8'}) // Monitoring performance to make your website faster. If you want to opt-out, please contact web hosting support.</script><script src='https://img1.wsimg.com/traffic-assets/js/tccl.min.js'></script></html>