import React, { useEffect, useState } from 'react';
import Products from '../../Products/Products';
import Navigation from '../../Shared/Navigaiton/Navigation';
import Featured from '../Featured/Featured';
import Header from '../Header/Header';
import ShowReview from '../ShowReview/ShowReview';


const Home = () => {
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch('https://sheltered-gorge-39495.herokuapp.com/review')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])

    return (
        <div>
           <Navigation></Navigation>
           <Header></Header>
           <Products></Products>
           <Featured></Featured>
           
           <h1 sx={{color:'warning.main'}}>Client Review</h1>
            {
                reviews.map(review => <ShowReview
                    key={review._id}
                    review={review}
                >

                </ShowReview> )
            }
           
           
        </div>
    );
};

export default Home;