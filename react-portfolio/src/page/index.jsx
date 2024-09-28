import React from 'react';

function Index() {
    return (
        <div>
            {/* Nav/Task Bar Section */}
            <div className="super-nav">
                <nav>
                    <div className="nav-rect">
                        <ul>
                            <a href="https://github.com/Biranavan-Sritharan" className="nav-bar-links">
                                <div className="pill-1">
                                    <li>GitHub</li>
                                </div>
                            </a>
                            <a href="https://linkedin.com/in/biranavans" className="nav-bar-links">
                                <div className="pill-2">
                                    <li>LinkedIn</li>
                                </div>
                            </a>
                            <div className="circle">
                                <li>
                                    <a href="#title-jump">
                                        <img src= "/assets/images/home2_logo.png" alt="Home" width="" height="" /> 
                                    </a>
                                </li>
                            </div>
                            <a href="" className="nav-bar-links">
                                <div className="pill-3">
                                    <li>CV</li>
                                </div>
                            </a>
                            <a href="mailto:biranavan07@gmail.com" className="nav-bar-links">
                                <div className="pill-4">
                                    <li>Email</li>
                                </div>
                            </a>
                        </ul>
                    </div>
                </nav>
            </div>

            {/* Title/Intro Section */}
            <div className="title" id="title-jump">
                <div className="text-container">
                    <h1>
                        Hi, I'm <span className = "span-biranavan">Biranavan Sritharan</span>
                    </h1>
                    <h2>Software Engineer</h2>
                </div>

                <div className="blob">
                    <div className="blob-minor">
                        <img className="blob-img" src="/assets/images/blob.svg" alt="blob" />
                        <div className="eye">
                            <div className="pupil"></div>
                        </div>
                        <div className="eye">
                            <div className="pupil"></div>
                        </div>
                    </div>
                </div>
            </div>

            {/* About Me Section */}
            <div className="about-me">
                <p className="about-text">
                    Starting in forensic science, I picked up computer science from where I left off in secondary
                    school and have made significant contributions to real world problems with programming
                </p>
            </div>

            {/* Projects Section */}
            <div className="projects-title">
                <h1 className="temp-title">Projects</h1>
            </div>

            <div className="projects">
                <div className="proj-1">
                    <img
                        src="assets/images/project_1.png"
                        className="project-image1"
                        alt="Disease Prediction, Working together"
                    />
                    <h2 className="projbox-title">Machine Learning Disease Predictor</h2>
                    <ul className="proj-list">
                        <li className="proj-list-element">
                            Uses machine learning to give probability of having a certain disease
                        </li>
                        <li className="proj-list-element">
                            Uses data mining to look through large datasets and extract key values (also worked with
                            pandas library)
                        </li>
                        <li className="proj-list-element">
                            Results entered on and displayed on a user-friendly and aesthetic webpage
                        </li>
                        <li className="proj-list-element white-out-text">
                            Results entered is displayed on a user-friendly
                        </li>
                    </ul>

                    <div className="skills-container">
                        <div className="skills-rect1">JavaScript</div>
                        <div className="skills-rect2">Python</div>
                        <div className="skills-rect3">HTML</div>
                        <div className="skills-rect4">CSS</div>
                    </div>

                    <div className="links-container">
                        <a
                            className="links-box"
                            href="https://github.com/Biranavan-Sritharan/Biranavan-Sritharan.github.io"
                        >
                            <div className="Git-Link">
                                <img
                                    src="/assets/images/github2_logo.png"
                                    className="git-image"
                                    alt="GitHub Link Image"
                                />
                                <p className="link-text">GitHub</p>
                            </div>
                        </a>
                        <a className="links-box" href="https://biranavan-sritharan.github.io/">
                            <div className="Web-Link">
                                <img src="/assets/images/website_icon.png" className="web-image" alt="Website Link Image" />
                                <p className="link-text">Website</p>
                            </div>
                        </a>
                    </div>
                </div>

                <div className="proj-2">
                    <img src="/assets/images/project_2.png" className="project-image2" alt="Encryption and Decryption :)" />
                    <h2 className="projbox-title">Encryption & Decryption Programs</h2>
                    <ul className="proj-list">
                        <li className="proj-list-element">
                            Using Python to create different encryption programs, libraries like NumPy will also be
                            used in later projects
                        </li>
                        <li className="proj-list-element">
                            And then being able to decrypt the same data and also providing code-breaking aids such as
                            frequency analysis on data
                        </li>
                        <li className="proj-list-element">
                            Ranging from complex ciphers like RSA to less complex such as Vignere
                        </li>
                    </ul>

                    <div className="skills-container">
                        <div className="skills-rect1">Python</div>
                        <div className="skills-rect2">NumPy</div>
                        <div className="skills-rect3" id="rect3"></div>
                        <div className="skills-rect4" id="rect4"></div>
                    </div>

                    <div className="links-container">
                        <a
                            className="links-box"
                            href="https://github.com/Biranavan-Sritharan/Encryption-Decryption-Programs"
                        >
                            <div className="Git-Link">
                                <img
                                    src="/assets/images/github2_logo.png"
                                    className="git-image"
                                    alt="GitHub Link Image"
                                />
                                <p className="link-text">GitHub</p>
                            </div>
                        </a>
                        <div className="Web-Link" id="Web-Link-over-ride">
                            <img src="/assets/images/website_icon.p" className="web-image" alt="" />
                            <p className="link-text"></p>
                        </div>
                    </div>
                </div>

                <div className="proj-3">
                    <img
                        src="/assets/images/project_3.png"
                        className="project-image3"
                        alt="Disease Prediction, Working together"
                    />
                    <h2 className="projbox-title">Python Game Development</h2>
                    <ul className="proj-list">
                        <li className="proj-list-element">
                            Using both functional and Object-Oriented Programming to create games
                        </li>
                        <li className="proj-list-element">
                            Creating these as a hobby but also seeing how physics can be simulated virtually at a low
                            level rather than using a Game Engine
                        </li>
                        <li className="proj-list-element">
                            Future ideas of transitioning to GoDot and exploring C++ more thoroughly
                        </li>
                        <li className="proj-list-element white-out-text">
                            
                        </li>
                    </ul>

                    <div className="skills-container">
                        <div className="skills-rect1">Python</div>
                        <div className="skills-rect2">Pygame</div>
                        <div className="skills-rect3">Seaborn</div>
                        <div className="skills-rect4" id="rect4"></div>
                    </div>

                    <div className="links-container">
                        <a className="links-box" href="https://github.com/Biranavan-Sritharan/PyGame-Projects">
                            <div className="Git-Link">
                                <img
                                    src="/assets/images/github2_logo.png"
                                    className="git-image"
                                    alt="GitHub Link Image"
                                />
                                <p className="link-text">GitHub</p>
                            </div>
                        </a>
                        <div className="Web-Link" id="Web-Link-over-ride">
                            <img src="/assets/images/website_icon" className="web-image" alt="" />
                            <p className="link-text"></p>
                        </div>
                    </div>
                </div>
            </div>

            {/* More Information Section */}
            <div className="more">
                <h1 className="temp-title">More Information</h1>
            </div>

            <div className="more-info">
                <div className="bento-grid">
                    <div className="col-1">
                        <div className="bento-1">
                            <h3 className="bento-h3">Work Experience</h3>
                            <ul className="bento-ul">
                                <li className="bento-li">
                                    Back of the House Team Member, Wetherspoons 
                                    <p className="work-date">July 2023 - September 2023</p>
                                </li>
                                <li className="bento-li">
                                    Casino Associate Team Member, Merkur Casino 
                                    <p className="work-date">December 2022 - July 2023</p>
                                </li>
                                <li className="bento-li">
                                    Front of House Team Member, Joe's Coffee House 
                                    <p className="work-date">July 2022 - December 2022</p>
                                </li>
                            </ul>
                        </div>
                        <div className="bento-2">
                            <h3 className="bento-h3">Certifications</h3>
                            <div className="cert-ul">
                                <p className="cert-p">
                                    <span className="cert-span">Codecademy Certifications:</span>
                                    <br />
                                    HTML, PHP, SQL & CSS <br />
                                    (certifications available on LinkedIn)
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="col-2">
                        <div className="bento-3">
                            <h3 className="bento-h3">Education</h3>
                            <div className="education-box">
                                <p className="education-p">
                                    <span className="span-kent">University of Kent</span>
                                    <br />
                                    <span className="span-school">2023 - 2024 Master's in Computer Science</span>
                                    <br />
                                    Related Modules: Software Engineering and Advanced Object-Oriented Programming
                                    <br /><br />
                                    <span className="span-school">2020 - 2023 Bachelor's Degree in Forensic Science (Hons) | 2:1</span>
                                    <br />
                                    Including a module in Digital Forensics (MATLAB) and Law of Evidence, which included law pertaining to computer science.
                                </p>
                            </div>
                        </div>
                        <div className="bento-4">
                            <h3 className="bento-h3">Skills</h3>
                            <div className="centering-skills">
                                <div className="bento-skills-container">
                                    <div className="bento-skills skill1">Python</div>
                                    <div className="bento-skills skill2">Java</div>
                                    <div className="bento-skills skill3">JavaScript</div>
                                    <div className="bento-skills skill4">TypeScript</div>
                                    <div className="bento-skills skill5">React</div>
                                    <div className="bento-skills skill6">HTML</div>
                                    <div className="bento-skills skill7">CSS</div>
                                </div>
                                <div className="bento-skills-container2">
                                    <div className="bento-skills-minor minor1">Docker</div>
                                    <div className="bento-skills-minor minor2">SQL</div>
                                    <div className="bento-skills-minor minor3">Redis</div>
                                    <div className="bento-skills-minor minor4">PHP</div>
                                    <div className="bento-skills-minor minor5">MATLAB</div>
                                    <div className="bento-skills-minor minor6">TensorFlow</div>
                                    <div className="bento-skills-minor minor7">Scikit Learn</div>
                                    <div className="bento-skills-minor minor8">PyTorch</div>
                                    <div className="bento-skills-minor minor9">Pandas</div>
                                    <div className="bento-skills-minor minor10">NumPy</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Index;
