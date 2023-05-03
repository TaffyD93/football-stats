import React from 'react'
import item1 from '../Images/arsenal-team.png';
import item2 from '../Images/liverpool-team.jpeg';
import item3 from '../Images/man-city-team.jpeg';

const slideshowImages = [item1, item2, item3];
const delay = 2500;

function Slideshow () {
    const [index, setIndex] = React.useState(0);

    React.useEffect(() => {
        setTimeout(
          () =>
            setIndex((prevIndex) =>
              prevIndex === slideshowImages.length -1 ? 0 : prevIndex + 1
            ),
          delay
        );
    
        return () => {};
      }, [index]);

    return(
        <div className="slideshow">
            <div className="slideshowSlider"
            style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}>
                
                {slideshowImages.map((each, key)=>{
                    return(
                        <img className="slideImage" src={each} alt="Slideshow" />
                    )
                })}
            </div>
            <div className="slideshowDots">
                {slideshowImages.map((_, idx) => (
                <div key={idx} className="slideshowDot" />
                ))}
            </div>
        </div>
    );
}

export default Slideshow;