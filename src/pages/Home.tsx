import React from 'react';
// import { Link } from 'react-router-dom';

const Home = () => {
  const posts = [
    {
      id: 1,
      title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
      desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!',
      img: 'https://images.pexels.com/photos/2662086/pexels-photo-2662086.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      id: 2,
      title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
      desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!',
      img: 'https://images.pexels.com/photos/3264723/pexels-photo-3264723.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      id: 3,
      title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
      desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!',
      img: 'https://images.pexels.com/photos/3307194/pexels-photo-3307194.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      id: 4,
      title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
      desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!',
      img: 'https://images.pexels.com/photos/13971537/pexels-photo-13971537.jpeg',
    }
  ];

  return (
    <div>Home</div>
    // <div className='home'>
    //   <div className="posts">
    //     {posts.map(post => (
    //       <div className="post" key={post.id}>
    //         <div className='img'>
    //           <img src={post.img} alt="post" />
    //         </div>
    //         <div className="content">
    //           <Link className='link' to={`/post/:${post.id}`}>
    //             <h1>{post.title}</h1>
    //           </Link>
    //             <p>{post.desc}</p>
    //             <button>Read more</button>
    //         </div>
    //       </div>
    //     ))}
    //   </div>
    // </div>
  );
};

export default Home;
