import "./App.css";

function App() {
  return (
    <div className="landing-page">
      <video autoPlay loop muted className="background-video">
        <source
          src="/Landingpage-Vacation/public/background.mp4"
          type="video/mp4"
        />
      </video>
      <div className="content">
        <h1>DISCOVER</h1>
        <h2>THE WORLD</h2>
        <p>Find your dream vacation</p>
        <button>Get Started</button>
      </div>
    </div>
  );
}

export default App;
