<!doctype html>
<html lang="en">

    <head>
        <!-- Required meta tags -->
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

        <!-- Bootstrap CSS -->
        <!-- <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous"> -->

        <!-- Custom CSS -->
        <link rel="stylesheet" type="text/css" href="main.css">

        <!-- Font Awesome -->
        <script src="https://kit.fontawesome.com/f0798ec3ce.js" crossorigin="anonymous"></script>

        <!-- Font -->
        <link href="https://fonts.googleapis.com/css2?family=Satisfy&display=swap" rel="stylesheet">

        <!-- Animate on Scroll -->
        <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />

        <title>
            April Castañeda | Software Engineer Portfolio Site
        </title>
    </head>

    <body>

        <header>
            <div class="menu-toggler">
                <div class="bar half start"></div>
                <div class="bar"></div>
                <div class="bar half end"></div>
            </div>

            <!-- Navbar -->
            <nav class="top-nav">
                <ul class="nav-list">
                    <li>
                        <a href="index.html" class="nav-link">Home</a>
                    </li>
                    <li>
                        <a href="#about" class="nav-link">About</a>
                    </li>
                    <li>
                        <a href="#portfolio" class="nav-link">Portfolio</a>
                    </li>
                    <li>
                        <a href="#experience" class="nav-link">Experience</a>
                    </li>
                    <li>
                        <a href="#contact" class="nav-link">Contact</a>
                    </li>
                    <li>
                        <a href="documents/resume.pdf" class="nav-link">Resume</a>
                    </li>
                </ul>
            </nav>

            <!-- Home landing text -->
            <div class="landing-text">
                <h1>April Castañeda</h1>
                <h6>Game Developer | Software Engineer</h6>
            </div>
        </header>

        <!-- About section -->
        <section class="about" id="about">
            <div class="container">
                <div class="profile-img" data-aos="fade-right" data-aos-delay="300">
                    <img src="images/profile.jpg" alt="">
                </div>
                <div class="about-details" data-aos="fade-left" data-aos-delay="600">
                    <div class="about-heading">
                        <h1>About</h1>
                        <h6>Myself</h6>
                    </div>
                    <p>Hi, my name is April.</p>
                    <p>
                        I'm working on my Postbacc BS Computer Science degree at Oregon State University. I'm expecting to graduate in March 2021 and I'm hoping to work with you!
                    </p>
                    <p> 
                        I'm interested in Software Engineering, Augmented Reality, and Game Development. I like
                        learning new languages and using these as tools to solve puzzles in programming.
                    </p>
                    <p>
                        At OSU, I worked as a Teaching Assistant for the Intro to CS class with the EECS Ecampus department. The language we taught at first was C++ and then halfway through the year, we transitioned into Python.
                    </p>
                    <p>
                        In what I like to call my 'first life', I graduated with a Film degree from the University of Nevada, Las Vegas and went on to work in the Film industry in Los Angeles for 14 years. I worked in the Production department, first as a Production Coordinator, then as a Production Supervisor where I managed personnel and handled logistics for the TV commercial production industry.
                    </p>
                    <p>
                        In my spare time, I like to read fiction, play games, and hang out with my cat Keane. I also like to surf although I'm currently landlocked. So trips to the ocean are always welcome! 
                    </p>
                    <div class="social-media">
                        <ul class="nav-list">
                            <li>
                                <a href="https://www.linkedin.com/in/castaneda-april" class="icon-link">
                                    <i class="fab fa-linkedin"></i>
                                </a>
                            </li>
                            <li>
                                <a href="https://twitter.com/ape_cast" class="icon-link">
                                    <i class="fab fa-twitter-square"></i>
                                </a>
                            </li>
                            <li>
                                <a href="mailto:castaneda.april@gmail.com" class="icon-link">
                                    <i class="fas fa-envelope-square"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>

        <!-- Porfolio section -->
        <section class="portfolio" id="portfolio">
            <div class="container">
                <div class="section-heading">
                    <h1>Portfolio</h1>
                    <button class="portSelect" id="app" onclick="appFunction()">Apps</button>
                    <button class="portSelect" id="games" onclick="gamesFunction()" disabled>Games</button>
                    <button class="portSelect" id="web" onclick="webFunction()">Web</button>
                </div>
                <div class="appSection" id="appSection">
                    <!-- Macro Proc -->
                    <div class="portfolio-item">
                        <div class="portfolio-img has-margin-right" data-aos="fade-right" data-aos-delay="300">
                            <a href="https://github.com/AprilCastaneda/MASM_Macro_Proc">
                                <img src="images/macroProc.png">
                            </a>
                        </div>
                        <div class="portfolio-description" data-aos="fade-left" data-aos-delay="1800">
                            <h6>App Development</h6>
                            <h1>Macro Proc</h1>
                            <p>
                                Low-level I/O web app. Developed with MASM x86 Assembly.
                            </p>
                            <p>
                                This program implements low-level I/O procedures and macros. It reads signed integers from the user, displays the integers, their sum, and their average.
                            </p>
                            <a href="https://github.com/AprilCastaneda/MASM_Macro_Proc" class="cta">Github</a>
                        </div>
                    </div>
                    <!-- Langton's Ant -->
                    <div class="portfolio-item">
                        <div class="portfolio-description has-margin-right" data-aos="fade-right" data-aos-delay="300">
                            <h6>App Development</h6>
                            <h1>Langton's Ant</h1>
                            <p>
                                Turing machine console app. Developed with C++.
                            </p>
                            <p>
                                This program simulates the movement of 
                                <a href="https://en.wikipedia.org/wiki/Langton%27s_ant">
                                    Langton's Ant
                                </a>
                                , a two-dimensional universal Turing machine with a very simple set of rules. The rules are:
                            </p>
                            <p>
                                - If the ant is on a white space, it turns right 90 degrees and changes the space to black.
                            </p> 
                            <p>
                                - If the ant is on a black space, it turns left 90 degrees and changes the space to white.
                            </p>
                            <p>
                                The simulation runs within user set variables of board size and steps. The simulation runs up to 15,000 steps, where the emergent order of the ant building a recurrent "highway" patterns starts at around 10,000 steps.
                            </p>
                            <a href="https://repl.it/@AprilCastaneda/Langtons-Ant" class="cta">Repl.it</a>
                             | 
                            <a href="https://github.com/AprilCastaneda/Langtons_Ant" class="cta">Github</a>
                        </div>
                        <div class="portfolio-img" data-aos="fade-left" data-aos-delay="600">
                            <a href="https://repl.it/@AprilCastaneda/Langtons-Ant">
                                <img src="images/langtonsAnt.png">
                            </a>
                        </div>
                    </div>
                </div>
                <div class="gamesSection" id="gamesSection">
                    <!-- Welcome to Hell II -->
                    <div class="portfolio-item">
                        <div class="portfolio-description has-margin-right" data-aos="fade-right" data-aos-delay="300">
                            <h6>Game Development</h6>
                            <h1>Welcome to Hell II (WIP)</h1>
                            <p>
                                WebGL 2D Action/Adventure platformer game. Developed with C#/Unity.
                            </p>
                            <p>
                                Our hero Vicki is given 24 hours to leave Hell or else risk staying forever. What Vicki doesn't know at first, and will soon find out, is that Hell consists of reliving the worst days of her life. And in order to escape, she must defeat them.
                            </p>
                            <a href="https://bit.ly/3cSfIqB" class="cta">WIP Demo</a>
                        </div>
                        <div class="portfolio-img" data-aos="fade-left" data-aos-delay="600">
                            <a href="https://bit.ly/3cSfIqB">
                                <img src="images/welcomeToHell2.jpg">
                            </a>
                        </div>
                    </div>
                    <!-- Timeline -->
                    <div class="portfolio-item">
                        <div class="portfolio-img has-margin-right" data-aos="fade-right" data-aos-delay="900">
                            <a href="https://devpost.com/software/timeline-card-game">
                                <img src="images/timeline.png">
                            </a>
                        </div>
                        <div class="portfolio-description" data-aos="fade-left" data-aos-delay="1200">
                            <h6>Game Development</h6>
                            <h1>Timeline</h1>
                            <p>
                                Console card game. Developed with C++ with two other team members for the Beaverhacks 2019 Summer Hackathon. Won Third place overall, Best console app, and the Public vote.
                            </p>
                            <p>
                                In this game, the player must place event cards on a timeline in the correct chronological order that they occur in history before time runs out. The game includes five different categories: Historical Events, Inventions, Pop Culture, Computer Science History, and Video Games. 
                            </p>
                            <a href="https://devpost.com/software/timeline-card-game" class="cta">Hackathon page</a>
                             | 
                            <a href="https://www.onlinegdb.com/By_MyS6Jr" class="cta">Onlinegdb</a>
                             | 
                            <a href="https://github.com/stuttskl/group-27" class="cta">Github</a>
                        </div>
                    </div>
                    <!-- Glitch Garden -->
                    <div class="portfolio-item">
                        <div class="portfolio-description has-margin-right" data-aos="fade-right" data-aos-delay="1500">
                            <h6>Game Development</h6>
                            <h1>Glitch Garden</h1>
                            <p>
                                WebGL 2D Plants vs Zombies type game. Developed with C#/Unity.
                            </p>
                            <p>
                                The player has to manage their resources in order to be able to purchase defending Monsters against an onslaught of Attackers.
                            </p>
                            <a href="https://sharemygame.com/@ape_cast/glitch-garden" class="cta">Glitch Garden</a>
                        </div>
                        <div class="portfolio-img" data-aos="fade-left" data-aos-delay="1800">
                            <a href="https://sharemygame.com/@ape_cast/glitch-garden">
                                <img src="images/glitchGarden.jpg">
                            </a>
                        </div>
                    </div>
                    <!-- Laser Defender -->
                    <div class="portfolio-item">
                        <div class="portfolio-img has-margin-right" data-aos="fade-right" data-aos-delay="2100">
                            <a href="https://sharemygame.com/@ape_cast/laser-defender">
                                <img src="images/laserDefender.png">
                            </a>
                        </div>
                        <div class="portfolio-description" data-aos="fade-left" data-aos-delay="2400">
                            <h6>Game Development</h6>
                            <h1>Laser Defender</h1>
                            <p>
                                WebGL 2D scrolling, shooter game. Developed with C#/Unity.
                            </p>
                            <p>
                                The player is a fighter plane that has to shoot their way out of waves of alien invaders.
                            </p>
                            <a href="https://sharemygame.com/@ape_cast/laser-defender" class="cta">Laser Defender</a>
                        </div>
                    </div>
                    <!-- Block Breaker -->
                    <div class="portfolio-item">
                        <div class="portfolio-description has-margin-right" data-aos="fade-right" data-aos-delay="2700">
                            <h6>Game Development</h6>
                            <h1>Block Breaker</h1>
                            <p>
                                WebGL 2D Game. Developed with C#/Unity.
                            </p>
                            <p>
                                Armed with only a paddle and a ball, break through blocks of increasing difficulty to move on to the next level.
                            </p>
                            <a href="https://sharemygame.com/@ape_cast/block-breaker" class="cta">Block Breaker</a>
                        </div>
                        <div class="portfolio-img" data-aos="fade-left" data-aos-delay="3000">
                            <a href="https://sharemygame.com/@ape_cast/block-breaker">
                                <img src="images/blockBreaker.jpg">
                            </a>
                        </div>
                    </div>
                    <!-- Welcome to Hell I -->
                    <div class="portfolio-item">
                        <div class="portfolio-img has-margin-right" data-aos="fade-right" data-aos-delay="3300">
                            <a href="https://repl.it/@AprilCastaneda/Welcome-to-Hell">
                                <img src="images/welcomeToHell1.png">
                            </a>
                        </div>
                        <div class="portfolio-description" data-aos="fade-left" data-aos-delay="3600">
                            <h6>Game Development</h6>
                            <h1>Welcome to Hell</h1>
                            <p>
                                Text adventure console game. Developed with C++.
                            </p>
                            <p>
                                The player is given 24 hours to esape hell, wherein hell consists of the worst days of your life, and to leave, you must defeat them.
                            </p>
                            <a href="https://repl.it/@AprilCastaneda/Welcome-to-Hell" class="cta">Repl.it</a>
                             | 
                            <a href="https://github.com/AprilCastaneda/Welcome_to_Hell" class="cta">Github</a>
                        </div>
                    </div>
                </div>
                <div class="webSection" id="webSection">
                    <!-- Rotten Guavas -->
                    <div class="portfolio-item">
                        <div class="portfolio-img has-margin-right" data-aos="fade-right" data-aos-delay="300">
                            <a href="https://bit.ly/30nDfgr">
                                <img src="images/rottenGuavas.jpg">
                            </a>
                        </div>
                        <div class="portfolio-description" data-aos="fade-left" data-aos-delay="600">
                            <h6>Web Development</h6>
                            <h1>Rotten Guavas</h1>
                            <p>
                                Video game reviews web app. Developed with HTML/CSS/Node.js/Express/MySQL with one other team member. Hosted on Heroku using JawsDB.
                            </p>
                            <p>
                                In this site, users can view the reviews for videogames on nine consoles. Reviews can be sorted by top games, by console, or by genre. Users can search for games by game name and view info and reviews for that game. Users can also register to have an account and be able to write their own reviews.
                            </p>
                            <a href="https://bit.ly/30nDfgr" class="cta">Website</a>
                             | 
                            <a href="https://github.com/validus00/RottenGuavas" class="cta">Github</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Experience -->
        <section class="experience" id="experience">
            <div class="container">
                <div class="section-heading">
                    <h1>Work Experience</h1>
                    <h6>Past and current jobs</h6>
                </div>
                <div class="timeline" data-aos="fade-down" data-aos-delay="300">
                    <ul>
                        <li class="date" data-date="Jun '20 - current">
                            <h1>Software Development Engineer Intern @ Amazon (AWS)</h1>
                            <p>
                                - Incoming Intern
                            </p>
                        </li>
                        <li class="date" data-date="Apr '19 - Mar '20">
                            <h1>Teaching Assistant @ Oregon State University (EECS Department Ecampus - Intro to CS)</h1>
                            <p> 
                                - Conducted weekly office hours on Slack for a class of 400 students to answer questions about coursework and class concepts. 
                            </p>
                            <p> 
                                - Organized and guided a section of 30 students on Canvas, answered e-mails, analyzed and debugged code, and graded coding assignments and essays.
                            </p>
                            <p>
                                - Consulted with fellow TAs regarding best practices in programming, teaching, and different approaches to evaluating students’ code.
                            </p>
                            <p> 
                                - Assisted with testing and transitioning a curriculum in C++ to Python
                            </p>
                        </li>
                        <li class="date" data-date="2007 - 2018">
                            <h1>Production Supervisor & Assistant Supervisor @ Freelance TV Commercial Production</h1>
                            <p> 
                                - Supervised production of over a hundred national TV commercials, promos, and music videos.
                            </p>
                            <p>  
                                - Interacted with and supported a diverse group of personnel with particular talents and capabilities.
                            </p>
                            <p>
                                - Ensured cohesiveness, efficiency, and adherence to schedules and budgetary guidelines.
                            </p>
                            <p>    
                                - Mentored dozens of coordinators and PAs for over 10 years and networked and communicated remotely with freelancers in various cities.
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
        </section>

        <!-- Contact -->
        <section class="contact" id="contact">
            <div class="container">
                <div class="section-heading">
                    <h1>Contact</h1>
                    <h6>Let's work together!</h6>
                </div>
                <form method="post" action="https://formspree.io/xoqkwddp" data-aos="fade-up" data-aos-delay="300">
                    <label for="name">Name:</label>
                    <input type="text" id="name" name="name" placeholder="Enter your name..." required>
                    <label for="email">Email:</label>
                    <input type="email" id="email" name="email" placeholder="Enter your email..." required>
                    <label for="message">Message:</label>
                    <textarea name="message" id="message" name="message" rows="10" cols="10"></textarea>
                    <input type="submit" value="Submit">
                </form>
            </div>
        </section>

        <!-- Footer -->
        <footer class="copyright">
            <div class="up" id="up">
                <i class="fas fa-chevron-up"></i>
            </div>
            <p>&copy; 2020 April Castañeda</p>    
        </footer>

        <!-- Optional JavaScript -->
        <!-- jQuery first, then Popper.js, then Bootstrap JS -->
        <script src="https://code.jquery.com/jquery-3.5.1.js" integrity="sha256-QWo7LDvxbWT2tbbQ97B53yJnYU3WhH/C8ycbRAkjPDc=" crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous">
        </script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js" integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI" crossorigin="anonymous">
        </script>

        <script src="main.js"></script>

        <!-- Animate on Scroll -->
        <script src="https://unpkg.com/aos@next/dist/aos.js"></script>
        <script>
            AOS.init();
        </script>

    </body>

</html>