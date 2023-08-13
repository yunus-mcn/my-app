import React, { useState, useEffect,useRouter } from 'react';
import './style.css'

const App = () => {
  const router = useRouter();

  if (!router.isLoggedIn) {
    router.push("/login");
  }

  return (
    <div>
      <h1>Ana Sayfa</h1>
    </div>
  );
};

export default function Home(){
  const url = 'https://dog.ceo/api/breeds/image/random';
  const [dog, setDog] = useState();
  const [isFadeIn, setIsFadeIn] = useState(false);
  function generateDog(){
    fetch(url).then((res)=> res.json()).then((data) => {setDog(data['message'])})
  }
  const handeClick = (e) => {
    generateDog();
    setIsFadeIn(!isFadeIn);
  }  
  return(
    <div className="container">
      <img src={ dog? dog:"https://images.dog.ceo/breeds/husky/n02110185_7762.jpg"} width="250" height="250" style={{ opacity: isFadeIn ? 1 :0.5 }} />
      <button onClick={handeClick}>Random
      </button>
    </div>
  )
}