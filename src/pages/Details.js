import React, { useEffect, useState } from 'react';
import { useLocation } from "react-router-dom";
import './Details.css';
import PaypalCheckoutButton from './PaypalCheckoutButton';

export const Details = () => {
    const [selectedSize, setSelectedSize] = useState("");

    const location = useLocation();
    const { image } = location.state || {};

    const handleSizeChange = (event) => {
        setSelectedSize(event.target.value);
    }

    useEffect(() => {
        const disableRightClick = (event) => {
            event.preventDefault();
        };        
        document.addEventListener('contextmenu', disableRightClick);
       
        return () => {
            document.removeEventListener('contextmenu', disableRightClick);
        };
    }, []);

    if (!image) {
        return <div>Image not found</div>;
    }

    return (
        <div className="all-page">
            <div className="items-container d-flex flex-column mt-5 mx-auto">
                <div className="image-col">
                    <img className='img-details' id='img' src={image.src} alt={image.alt} />
                </div>
                <div className='pay-description d-flex align-content-center mx-auto mt-3'>
                    <div className="description-col text-wrap text-start ">
                        <p className="description" >
                            Each size is printed on 100% cotton rt archival paper with approximately a 1/2" to 3" paper border to accommodate any framing preference. It offers a fingerprint-resistant finish that delivers rich lacks and soft whites to retain a natural film grain feel. Prints are signed and numbered by the artist on the back.

                            <p></p><h6>Three editions are available for each following size: </h6>
                            <h6>11 inch  x  19 inch</h6>
                            <h6>20 inch  x  30 inch</h6>
                            <h6>35 inch  x  60 inch</h6>

                            As the editions run low, pricing will increase due to the limited nature of the print.</p>
                        <h5 className="description2 " >100% Guarantee</h5>
                        <p className="description3 " >All images include a 100% No-Risk Guarantee. If you're not satisfied with the art upon receipt, you are welcome to get your money-back with paid return shipping. </p>
                    </div>
                </div>
                <div className="paypal-button-container mt-3">
                    <select className='form-select mb-3 ' aria-label="Default select example" value={selectedSize} onChange={handleSizeChange}>
                        <option value="">Select a size</option>
                        <option value="25">11" x 19" - $25.00 USD</option>
                        <option value="45">20" x 30" - $45.00 USD</option>
                        <option value="65">35" x 60" - $65.00 USD</option>
                    </select>
                    <PaypalCheckoutButton selectedSize={selectedSize} />
                </div>
            </div>
            <footer className="footer py-1 bg-light ">
                <div className="container">
                    <h6 className="text-muted mx-auto"><span >Cem Bazarbasi ©  All rights reserved.</span></h6>
                </div>
            </footer>
        </div>
    );
}
