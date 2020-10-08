import React from "react"
import Navbar from "../navbar"
function Parallax() {
    return (

        <>

            <div id="index-banner" className="parallax-container">
                <div className="section no-pad-bot">
                    <div className="container">
                        <br><br>
                            <h1 className="header center blue-grey-text text-darken-4">Christian Allred</h1>
                            <div className="row center transparent-background">
                                <h3 className="header white-text text-lighten">let me work on your website</h3>
                            </div>
                            <div className="row center">
                                <a href="mailto:all.red.youbecha@gmail.com" id="button" className="btn-large waves-effect waves-light indigo lighten-1">Send Me An Email</a>
                            </div>
                        </br></br>
                        <div className="parallax"><img id="jumbotron" src="assets/images/dog-painting.jpg" alt=""/>
                        </div>
                    </div>
                </div>

                <div className="container">
                    <h4 className="center">Web Development</h4>
                    <div className="section">


                        <div className="row">
                            <div className="col s12 m4">
                                <div className="icon-block">
                                    <h2 className="center brown-text "><i className="material-icons">flash_on</i></h2>
                                    <h5 className="center">About Me</h5>

                                    <p className="light">I am a young developer, currently taking a full stack development course. In addition to being an aspiring developer I'm an artist, author/poet, animator, gardener, dungeon master, curry chef, crossword fan,
            cartoon fan, philosiphy fan and bird fan.</p>
                                </div>
                            </div>



                            <div className="col s12 m4">
                                <div className="icon-block">
                                    <h2 className="center brown-text"><i className="material-icons">group</i></h2>
                                    <h5 className="center">User Experience Focused</h5>

                                    <p className="light"></p>
                                </div>
                            </div>

                            <div className="col s12 m4">
                                <div className="icon-block">
                                    <h2 className="center brown-text"><i className="material-icons">settings</i></h2>
                                    <h5 className="center">Easy to work with</h5>

                                    <p className="light">We have provided detailed documentation as well as specific code examples to help new users get started. We are also always open to feedback and can answer any questions a user may have about Materialize.</p>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>


                <div className="parallax-container valign-wrapper">
                    <div className="section no-pad-bot">
                        <div className="container">
                            <div className="row center">
                                <h5 className="header col s12 light">A modern responsive front-end framework based on Material Design</h5>
                            </div>
                        </div>
                    </div>
                    <div className="parallax"><img src="background2.jpg" alt="Unsplashed background img 2" /></div>
                </div>

                <div className="container">
                    <div className="section">

                        <div className="row">
                            <div className="col s12 center">
                                <h3><i className="mdi-content-send brown-text"></i></h3>
                                <h4>Contact Us</h4>
                                <p className="left-align light">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam scelerisque id nunc nec volutpat. Etiam pellentesque tristique arcu, non consequat magna fermentum ac. Cras ut ultricies eros. Maecenas eros justo, ullamcorper a sapien id, viverra ultrices eros. Morbi sem neque, posuere et pretium eget, bibendum sollicitudin lacus. Aliquam eleifend sollicitudin diam, eu mattis nisl maximus sed. Nulla imperdiet semper molestie. Morbi massa odio, condimentum sed ipsum ac, gravida ultrices erat. Nullam eget dignissim mauris, non tristique erat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;</p>
                            </div>
                        </div>

                    </div>
                </div>


                <div className="parallax-container valign-wrapper">
                    <div className="section no-pad-bot">
                        <div className="container">
                            <div className="row center">
                                <h5 className="header col s12 light">A modern responsive front-end framework based on Material Design</h5>
                            </div>
                        </div>
                    </div>
                    <div className="parallax"><img src="/assets/images/background3.jpg" alt="Unsplashed background img 3" /></div>
                </div>
            </div>
        </>


    )
}

export default Parallax