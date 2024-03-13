import './BlackAndWhite.css';
import {  useNavigate} from 'react-router-dom';
import React, { useEffect } from 'react'; 
import menInLineImage from '../images/men-in-line.jpg';



export const BlackAndWhite = () => {
    const navigate = useNavigate();
    

    const images = [
        {id: 1, src: menInLineImage, alt:'Men in Line'},
        {id: 2, src:'/images/pairs.jpg', alt:'Pairs'},
        {id: 3, src:'/images/silhouette.jpg', alt:'Silhouette'},
        {id: 4, src:'/images/lake-merrit-in-fog.jpg', alt:'Lake Merrit'},
        {id: 5, src:'/images/reflection.jpg', alt:'Reflection'},
        {id: 6, src:'/images/cyclist.jpg', alt:'Cyclist'},
        {id: 7, src:'/images/walking-man.jpg', alt:'Walking Man'},
        {id: 8, src:'/images/cyclist-pan.jpg', alt:'Cyclist Pan'},
        {id: 9, src:'/images/golden-gate-bridge.jpg', alt:'Golden Gate Bridge'},
        {id: 10, src:'/images/people-in-ferry.jpg', alt:'People in Ferry'},
        {id: 11, src:'/images/cable-car.jpg', alt:'Cable Car'},
        {id: 12, src:'/images/sf-skyline.jpg', alt:'San Francisco Skyline'},        
    ];
    
    const goToImage = (image) => {        
        navigate(`/details/${image.id}`, {state: {image}});
    } 
    
    useEffect(() => {
        const disableRightClick = (event) => {
            event.preventDefault();
        };

        const images = document.querySelectorAll('.img');
        images.forEach(image => {
            image.addEventListener('contextmenu', disableRightClick);
        });

        return () => {
            images.forEach(image => {
                image.removeEventListener('contextmenu', disableRightClick);
            });
        };
    }, []);

    return (
    <div className="page">
        <div className="container d-flex flex-wrap">
            {images.map((image) =>(
            <div className="image-wrapper" key={image.id} >                
                <img className='img' onClick={() => goToImage(image)} src={image.src} alt={image.alt}></img>                
                <p className='image-name'>{image.alt}</p>
            </div>
            ))}
        </div>
    </div>
    )
}