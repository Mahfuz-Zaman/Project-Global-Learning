import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Carousel, Container, Row } from 'react-bootstrap';
import Subjects from '../Subjects/Subjects';
import './Home.css'

const Home = () => {
    const [services, setServices] = useState([])

    useEffect(() => {
        fetch("./fakeData.json")
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <div>
            <div className="mb-5">
                <Carousel variant="dark">
                    <Carousel.Item>
                        <img
                            className="d-block w-100 banner-img"
                            src="https://daffodilvarsity.edu.bd/photos/shares/other/newground20.png"
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3 className="text-color">Main Ground</h3>
                            <p className="text-color-p fw-bold">Our 150 Acre campus is full of life and positive energy, fostering education and innovation for more than 20000 students. Here, students are encouraged to ask questions and think, debate and collaborate with professors to take ownership of their learning.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100 banner-img"
                            src="http://campuslife.daffodil.university/gallery/september-2020/8b65f6e85365d8e6ba2f9013842b67ad.jpg"
                            alt="Second slide"
                        />
                        <Carousel.Caption>
                            <h3 className="text-color">Foundation Day</h3>
                            <p className="text-color-p fw-bold" >We have students coming from different backgrounds, cultures, and nationalities as well. More than 500 international students are enrolled in various programs.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100 banner-img"
                            src="http://campuslife.daffodil.university/gallery/november-2020/d4a776cc514d8619980fb5138b197098.jpg"
                            alt="Third slide"
                        />
                        <Carousel.Caption>
                            <h3 className="text-color">Convocation</h3>
                            <p className="text-color-p fw-bold">We make sure all our students get the help they need to complete the degree. Scholarships are available for students with excellent academic results as well as for the students who are struggling financially.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>

            <div className="text-center px-5 py-5">
                <h1 className="text-center  px-5"><i className="fas fa-graduation-cap"></i>INTRODUCTION</h1>
                <i>Global Learning offers bachelor degrees in the different spectrum of disciplines and provides the country's highly supported programs in many fields, including in IT, Telecommunications, Engineering and Business. Particularly strong programs can be found in the faculty of Business, Information Technology and Engineering and English Language.

                    Research is the means through which new knowledge is created and new information is developed. As such, research at Daffodil International University is an essential link in its three-prong mission of instruction, research and outreach. Successes among the varied research activities within each of its students and faculties continue to bolster Daffodil among the nation's top universities. Additionally, major efforts to increase the protection and commercialization of intellectual properties are central to Institution's continual drive for improvements in its committed mission.

                    These efforts mesh to create a teaching environment that enhances the country's economic, cultural, social and intellectual development and, at the same time, undergrads the university's undergraduate, masters and outreach programs. DIU emphasizes and encourages females to enroll for higher education. Our faculties present cutting-edge instruction in a personable setting, taking into account the many career challenges that women face in today's society. Female graduates of Daffodil International University are to be prepared for leadership roles in an ever-changing world.

                    This is a noticeable encouragement for the university observing the rapid growth of the university. The university has been started with 67 students registering in the first batch and more than 15,000 students have been enrolled till date. DIU is committed to provide standard education with all sorts of facilities to the students. Since the inception, the university is maintaining the commitment and it creates inspiration to the students and this is the key of the continuous increasing of the number of students.</i><br />
                <button className="btn btn-success">See More</button>
            </div>

            <div>
                <div >
                    <h1 className="text-center "><i className="fas fa-book-open"></i>Our Programs</h1>
                    <Container>
                        <Row xs={1} md={2} className="g-4">
                            {
                                services.slice(3, 9).map(service => <Subjects
                                    key={service.id}
                                    service={service}
                                ></Subjects>)
                            }
                        </Row>

                    </Container>
                </div>

            </div>
        </div>
    );
};

export default Home;