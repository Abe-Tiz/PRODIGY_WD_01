import React from 'react'
import Card from '../components/Card';
import Hero from '../components/Hero';

const Home = () => {

  return (
    <div className="bg-base-100 py-16">
      <div className="max-w-screen-xl mx-auto px-4">
        <div>
          <Hero />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          <Card image="https://www.billboard.com/wp-content/uploads/2023/08/Best-Album-Covers-of-All-Time-billboard-1548.jpg?w=875&h=583&crop=1" />
          <Card image="https://upload.wikimedia.org/wikipedia/commons/1/1f/Compact_disc_album.jpg" />
          <Card image="https://media.istockphoto.com/id/1499754442/photo/portable-radio-receiver-tape-cassette-recorder-on-wooden-table-in-front-of-white-brick-wall.webp?b=1&s=170667a&w=0&k=20&c=QX0B2puVJSprQongzm8pP0JTFZDLZQfMgOct8zg8u8w=" />
          <Card image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1IcauyNF0Sbr-jysFp311U5wwgXOTkLTudw&usqp=CAU" />
       
        </div>
      </div>
    </div>
  );
};

export default Home
