import React from 'react'

const Hero = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage:
          "url(https://st.depositphotos.com/1010683/3546/i/450/depositphotos_35463597-stock-photo-hong-kong-city-at-night.jpg)",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md flex flex-col  gap-2 items-center">
          <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
          <p className="mb-5 font-mono leading-snug-2 font-medium w-[700px] flex items-center text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Congue
            quisque egestas diam in arcu cursus. Rutrum quisque non tellus orci
            ac auctor augue mauris. Scelerisque viverra mauris in aliquam sem.
            Curabitur gravida arcu ac tortor dignissim convallis aenean et.
            Vitae suscipit tellus mauris a diam maecenas sed enim ut. Quis
            auctor elit sed vulputate mi sit amet mauris. Egestas purus viverra
            accumsan in nisl nisi scelerisque eu ultrices.
          </p>
          <button className="btn btn-ghost bg-yellow">Get In Touch</button>
        </div>
      </div>
    </div>
  );
}

export default Hero
