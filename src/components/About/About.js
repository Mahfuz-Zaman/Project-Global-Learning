import './About.css'
import React from 'react';
import { Container } from 'react-bootstrap';

const About = () => {
    return (

        <Container >
            <h1 className="text-center">About Us</h1>
            <div  >
                <img className="about-img" src={"https://daffodilvarsity.edu.bd/photos/shares/policy.jpg"} alt="" />
            </div>


            <div className="d-flex ">
                <div>
                    <h1>AT A GLANCE</h1>
                    <ul>
                        <h3>Faculties: </h3>
                        <li>Faculty of Science and Information Technology</li>
                        <li>Faculty of Engineering</li>
                        <li>Faculty of Business & Entrepreneurship</li>
                        <li>Faculty of Humanities and Social Science</li>
                        <li>Faculty of Allied Health Science</li>
                    </ul>

                    <ul>
                        <h3>Departments : </h3>
                        <li>Business Administration</li>
                        <li>Business Studies</li>
                        <li>Tourism & Hospitality Management</li>
                        <li> Computer Science & Engineering</li>
                        <li>Software Engineering</li>
                    </ul>
                    <ul>
                        <h3>Institute : </h3>
                        <li>Institutional Quality Assurance Cell (IQAC)</li>
                        <li>Human Resource Development Institute (HRD Institute)</li>
                        <li>Global Institute of Social Sciences (GISS)</li>

                    </ul>



                </div>

                <div className="ms-5">
                    <h2>VISION</h2>
                    <p>To be a global leader in providing tertiary level education that produces graduates with high self-esteem who are able to accept and overcome challenges in a fast-changing environment.</p>

                    <h2>MISSION</h2>
                    <p>
                        To positively influence and enhance the lives of people by promoting research that is aligned with national development agenda, Millennium Development Goals (MDGs), Sustainable Development Goals (SDGs), innovation and entrepreneurship.
                    </p>
                    <h2>VALUES</h2>
                    <ul>
                        <li>
                            <h4>ETHICS</h4>
                            <p>We value ethics and are committed to being ethical in our practices and services. No way it will ever compromise with ethical values and always nourish ethical values among its staffs, teachers, and students.</p>

                        </li>
                        <li>
                            <h4>QUALITY</h4>
                            <p>
                                We strive to ensure excellence in what we do and the way we serve people. DIU believes in continuously looking for and making use of opportunities to improve further.
                            </p>
                        </li>
                        <li>
                            <h4>LEADERSHIP</h4>
                            <p>
                                We believe in leadership as we through our prompt and agile work process set up examples for others to follow.
                            </p>
                        </li>
                        <li>
                            <h4>INNOVATION</h4>
                            <p>
                                We empower individuals to think innovatively, remain curious, and value new ideas.
                            </p>
                        </li>
                        <li>
                            <h4>DIVERSITY</h4>
                            <p>
                                We value opinions and ideas from different people of different groups no matter what their race, nationality, age, religion, and position is.
                            </p>
                        </li>
                        <li>
                            <h4>CONTINUOUS LEARNING</h4>
                            <p>
                                We influence people to be lifelong learners so that they remain committed to update and upgrade themselves.
                            </p>
                        </li>
                    </ul>

                </div>
            </div>




        </Container>
    );
};

export default About;