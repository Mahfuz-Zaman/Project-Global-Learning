import './Blog.css'
import React from 'react';
import { Col, FormControl, InputGroup, Row, Button, Container } from 'react-bootstrap';

const Blog = () => {
    return (
        <div>

            <InputGroup className="my-5 w-50 mx-auto">
                <FormControl
                    placeholder="Search article"

                />
                <Button variant="secondary" >
                    Search
                </Button>
            </InputGroup>
            <Container>
                <Row xs={1} md={2} className="py-5"  >
                    <Col>
                        <div>
                            <h4>CATEGORIES</h4>
                            <ul>
                                <li>Blog</li>
                                <li>Business</li>
                                <li>Design/Branding</li>
                                <li>Uncatagorized</li>
                            </ul>
                        </div>
                        <div>
                            <div><img className="blog-img py-3" src="https://eduma.thimpress.com/demo-university-2/wp-content/uploads/sites/23/2016/01/blog-7.jpg" alt="" /></div>
                            <div>
                                <h1>Why You Should Read Every Day?</h1>
                                <p>Practicing ‘relaxation’ is paramount to managing stress.When we relax, the flow of blood increases around our body giving us more energy.It helps us to have a calmer and clearer mind which aids positive thinking, concentration, memory and decision making.Relaxation slows our heart rate, reduces our blood pressure and relieves tension.It also aids digestion as we absorb essential nutrients more efficiently when relaxed, which helps to fight off disease and infection.</p>
                                <br />
                                <button className="btn btn-warning">Read More</button>
                            </div>
                            <div><img className="blog-img py-3" src="https://eduma.thimpress.com/demo-university-2/wp-content/uploads/sites/23/2016/01/blog-9.jpg" alt="" /></div>
                            <div>
                                <h1>Relaxing after work</h1>
                                <p>It helps us to have a calmer and clearer mind which aids positive thinking, concentration, memory and decision making.Relaxation slows our heart rate, reduces our blood pressure and relieves tension.Practicing ‘relaxation’ is paramount to managing stress.When we relax, the flow of blood increases around our body giving us more energy.It also aids digestion as we absorb essential nutrients more efficiently when relaxed, which helps to fight off disease and infection.</p>
                                <br />
                                <button className="btn btn-warning">Read More</button>
                            </div>
                            <div><img className="blog-img py-3" src="https://eduma.thimpress.com/demo-university-2/wp-content/uploads/sites/23/2016/01/blog-8.jpg" alt="" /></div>
                            <div>
                                <h1>Online Learning Glossary</h1>
                                <p> When considering the role of a team, it’s important to understand the various processes that teams will carry out over time.At the beginning of a team set up (or when redirecting the efforts of a team), a transitional process is carried out.Once the team has set strategic goals, they can begin progressing towards the completion of those goals operationally.The final team process is one of interpersonal efficiency, or refining the team dynamic for efficiency and success.</p>
                                <br />
                                <button className="btn btn-warning">Read More</button>
                            </div>

                        </div>
                    </Col>
                    <Col>
                        <div>
                            <h4>LATEST POSTS</h4>
                            <ol>
                                <li>Online Learning Glossary</li>
                                <li>Tips to Succeed in an Online Course</li>
                                <li>Introducing: Dr.Deniz Zeynep</li>
                                <li>Becoming a better designer</li>
                            </ol>
                        </div>
                        <div>
                            <div><img className="blog-img py-3" src="https://eduma.thimpress.com/demo-university-2/wp-content/uploads/sites/23/2016/01/blog-5.jpg" alt="" /></div>
                            <div>
                                <h1>Tips to Succeed in an Online Course</h1>
                                <p>Organizations typically have many teams, and an individual is frequently a member of more than one team.Some teams are permanent and are responsible for ongoing activities.For instance, a team of nurses in a maternity ward provides medical services to new mothers.While patients come and go, the tasks involved in providing care remain stable.In other cases a team is formed for a temporary purpose: these are called project teams and have a defined beginning and end point linked</p>
                                <br />
                                <button className="btn btn-warning">Read More</button>
                            </div>
                            <div><img className="blog-img py-3" src="https://eduma.thimpress.com/demo-university-2/wp-content/uploads/sites/23/2015/10/blog-4.jpg" alt="" /></div>
                            <div>
                                <h1>Admin earns scholarship</h1>
                                <p>Organizations form teams to accomplish tasks that are too large or complex for an individual to complete.Teams are also effective for work that requires different types of skills and expertise.For example, the development of new products involves understanding customer needs as well as how to design and build a product that will meet these needs.Accordingly, a new product-development team would include people with customer knowledge as well as designers and engineers.</p>
                                <br />
                                <button className="btn btn-warning">Read More</button>
                            </div>
                            <div><img className="blog-img py-3" src="https://eduma.thimpress.com/demo-university-2/wp-content/uploads/sites/23/2015/10/blog-1.jpg" alt="" /></div>
                            <div>
                                <h1>Forensic team earns several</h1>
                                <p>The primary role of a team is to combine resources, competencies, skills, and bandwidth to achieve organizational objectives.The underlying assumption of a well-functioning team is one of synergy, which is to say that the output of a team will be greater than the sum of each individual’s contribution without a team architecture in place.As a result, teams are usually highly focused groups of employees, with the role of achieving specific tasks to support organizational success.</p>
                                <br />
                                <button className="btn btn-warning">Read More</button>
                            </div>

                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Blog;