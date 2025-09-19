import React, { useState } from "react";
import "./home.css";

export default function Home() {
  const [showGift, setShowGift] = useState(false);

  return (
    <div className="page">
      <div className="container">
        <div className="card">
          <h1 className="title">❤️ Tillykke med fødselsdagen Sophia❤️</h1>
          <p className="message">
            Jeg er så taknemmelig for dig, og jeg elsker dig højere end ord kan
            sige. Du betyder rigtig meget for mig, fordi du er smuk, 
            stærk og en god person! Samt er du også en rigtig klog ung pige. 
            Du fortjener rigitg meget kærlighed og lykke i dit liv,
            og det vil jeg stræbe efter at være med til at give dig.
            <br />
            <br />💖💖💖
          </p>
          <p className="surprise">Her er en lille ekstra gave 🎁</p>

          <button className="giftButton" onClick={() => setShowGift(!showGift)}>
            {showGift ? "Skjul 💌" : "Klik mig 💌"}
          </button>

          {showGift && (
            <div className="giftMessage">
              En tur på <span className="highlight">Running sushi</span>  
              <br /> 
              Og forkælelse hele dagen! <br />
              <div className="sushi">🍣 🍤 🥢 🍣 🍱</div>
            </div>
          )}

          <div className="hearts">
            <span>💝</span>
            <span>💕</span>
            <span>💞</span>
            <span>💓</span>
            <span>💗</span>
          </div>
        </div>
      </div>

      {/* Flyttet udenfor container */}
      <footer className="footer">
        Sophia Mølenberg Incorparte™
      </footer>
    </div>
  );
}
