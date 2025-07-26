import hand_icon from '../Assets/hand_icon.png';
import hero_image from '../Assets/hero_image.png';
import './Hero.css';
const Hero = () => {
  return (
    <div className='hero'>
      <div className="hero-left">
        <h2>NEW ARRIVALS</h2>
        <div className='hero-hand-icon'>
          <p>New</p>
          <img src={hand_icon} alt="hand icon not found" />
        </div>
        <p>Collections</p>
        <p>for everyone</p>
        <div className='hero-latest-btn'>
          <div>Latest Collection</div>
          {/* <img src={arrow_icon} alt="arrow icon not found" /> */}
        </div>
      </div>

      <div className="hero-right">
        <img src={hero_image} alt="hero image not found" />
      </div>
    </div>
  )
}

export default Hero
