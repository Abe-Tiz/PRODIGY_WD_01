import React from 'react'

const Card = ({image}) => {
  return (
    <div className="card lg:card-side bg-base-100 shadow-xl">
      <figure>
              <img
                  className='w-[200px]'
          src={image}
          alt="Album"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">New album is released!</h2>
        <p>Click the button to listen on Spotiwhy app.</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Listen</button>
        </div>
      </div>
    </div>
  );
}

export default Card
