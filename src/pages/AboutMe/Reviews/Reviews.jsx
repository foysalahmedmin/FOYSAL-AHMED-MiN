import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import Review_card from './Review_Card';
import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle";

const Reviews = () => {
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch('https://edu-fun-emporium-server.vercel.app/eduFunReviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    const settings = {
        dots: true,
        arrows: false,
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "10px",
        slidesToShow: 3,
        speed: 500,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 1
                }
            }
        ]
    };
    return (
        <section className="lg:max-w-[calc(100vw-20rem)] mx-auto my-5">
            <SectionTitle title={'Testimonials'} />
            <div>
                <Slider {...settings}>
                    {
                        reviews.map(review => <Review_card review_data={review} key={review._id}></Review_card>)
                    }
                </Slider>
            </div>
        </section>
    );
};

export default Reviews;