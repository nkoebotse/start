import clientDatabiz from '../assets/clientDatabiz.svg';
import clientAudiophile from '../assets/clientAudiophile.svg';
import clientMeet from '../assets/clientMeet.svg';
import clientMaker from '../assets/clientMaker.svg';
import heroDesktop from '../assets/imageHeroDesktop.png';
import heroMobile from '../assets/image-hero-mobile.png';

export const Hero = () => {
  return (
    <main className="hero">
      <div className="hero__content-grid">
        {/* Information container section */}
        <div className="hero__info">
          <h1 className="hero__main-text">Make remote work</h1>

          <p className="hero__sub-text">
            Get your team in sync, no matter your location. Streamline
            processes, create team rituals, and watch productivity soar.
          </p>

          <button className="hero__learn-btn">Learn more</button>

          <div className="hero__client-grid">
            <img src={clientDatabiz} alt="Databiz client" />
            <img src={clientAudiophile} alt="Audiophile client" />
            <img src={clientMeet} alt="Meet client" />
            <img src={clientMaker} alt="Maker client" />
          </div>
        </div>

        {/* Image container section */}
        <div className="hero__img-container">
          <picture>
            <source
              media="(min-width: 40em)"
              srcSet={heroDesktop}
            />
            <source srcSet={heroMobile} />
            <img src={heroDesktop} alt="hero image" />
          </picture>
        </div>
      </div>
    </main>
  );
};
