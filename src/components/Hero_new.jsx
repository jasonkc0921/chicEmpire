import styled from 'styled-components'
import Running_text from './Running_text'

const Hero_new = () => {




  return (
    <HeroContainer>
    <section className='hero-container'>


          <article className='hero'>
            <img src="../images/luxury_items.png" alt="dining1" className="hero-img" />
            <div className='title'>
              <p className='fancy-text'>Unlock the World of Luxury</p>
              {/* <p className='sub-text'>Elevate Your Portfolio with Investment  </p>
              <p className='sub-text'> into luxury items by shares</p> */}
              <Running_text />
              </div>
          </article>


    </section>
    </HeroContainer>
  );
};

const HeroContainer = styled.nav`

.title {

  position: absolute;
  text-align: center;
  font-size: 60px;
  font-weight: 700;
  text-transform: uppercase;
  color: white;
  opacity: 100%;
  margin-bottom: 0.75rem;
  top: 20%;
  // left: 15%;
  line-height: 1;
  margin-left: 20%;
}

.sub-text {
  font-size: 25px;
  text-transform: capitalize;
  font-weight: 100;

}

 .hero-container {
   height: 100vh;
   width: 100%;
   top: 0;
   left: 0;
   z-index: 67;
}

.hero {
  width: 100%;
  height: 100%;
}

.hero-img {
  width: 100%;
  height: 100%;
  /* border-radius: 50%; */
  margin-bottom: 1rem;
  object-fit: fill;
  /* border: 4px solid var(--primary-200); */
  /* box-shadow: var(--shadow-3); */
}

@media (max-width: 900px) {
  .title {

    position: absolute;
    text-align: left;
    font-size: 40px;
    font-weight: 700;
    text-transform: uppercase;
    color: white;
    opacity: 100%;
    margin-bottom: 0.75rem;
    top: 10%;
    // left: 15%;
    line-height: 1.5;
  }
  .hero-img {
    object-fit: cover;
  }
}

  @media (max-width: 550px) {
    .title {
  
      position: absolute;
      text-align: left;
      font-size: 30px;
      font-weight: 700;
      text-transform: uppercase;
      color: white;
      opacity: 100%;
      margin-bottom: 0.75rem;
      top: 10%;
      // left: 15%;
      line-height: 1.5;
    }

    .hero-img {
      object-fit: cover;
    }
  }

}

`
export default Hero_new;