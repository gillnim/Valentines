import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import "./App.css"; // Import custom CSS for styling
import img1 from './assets/images/keroppiheart.png'
import img2 from './assets/images/keroppilove3.png'

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="container home">
      <img className="gif" src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExMDRkNHF6ZWFiZG5yamd4Mm9zMnZ6am13OWZma2txNWZrb3h1bjhvbSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/19CU3F5v6fq4LawRGu/giphy.gif" alt="gif" />
      <h1 className="title">Will you be my Valentine? <img src={img1} alt="keroppi" /></h1>
      <div className="button-group">
        <button onClick={() => navigate("/love-loop")} className="valentine-button">Yes!</button>
        <button onClick={() => navigate("/love-loop")} className="valentine-button">Definitely Yes!!!</button>
      </div>
    </div>
  );
};

const LoveLoop = () => {
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowMessage(true);
    }, 500); // Small delay before the animation starts
  }, []);

  return (
    <div className="container love-loop">
      {showMessage && <h2 className="love-message">Stuck in a while loop of loving you <img src={img2} alt="keroppi" /></h2>}
      <pre className="code-block">
        {`def my_valentine():\n  loving_you = True\n  while loving_you:\n    print("I Love You!")\n\nmy_valentine()`}
      </pre>
      <img
        src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExaGRyaDZyc3BzZmh0NW40bnEzeTY0aXNqbWlieG4ydThtcjNzZnJkcCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/4hYa2g7p3Xfb9guylU/giphy.gif"
        alt="Pixel couple"
        className="love-gif"
      />
    </div>
  );
};

const FloatingHearts = () => {
  return (
    <div className="heart-container">
      {Array.from({ length: 10 }).map((_, index) => (
        <div key={index} className="heart">❤️</div>
      ))}
    </div>
  );
};

const App = () => {
  return (
    <div>
      <FloatingHearts /> 
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/love-loop" element={<LoveLoop />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;