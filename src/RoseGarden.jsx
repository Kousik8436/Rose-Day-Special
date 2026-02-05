import React, { useState } from 'react'
import './RoseGarden.css'

function RoseGarden({ senderName, receiverName, customMessage }) {
  const [selectedRose, setSelectedRose] = useState(null)
  const [showMessage, setShowMessage] = useState(false)

  const roses = [
    { id: 1, message: "আজ রোজ ডে, কিন্তু সত্যিটা হলো—তুমি নিজেই একটা গোলাপ। আমি শুধু ভাগ্যবান যে তোমার যত্ন নেওয়ার সুযোগ পাই। ☀️", position: { top: '15%', left: '20%' } },
    { id: 2, message: "গোলাপের কাঁটা আছে, আর তোমার আছে রাগ—দুটোই মেনে নেওয়া যায়, কারণ দুটোর সৌন্দর্যই আসল। 💕", position: { top: '25%', right: '15%' } },
    { id: 3, message: "রোজ ডে শুধু অজুহাত। আসলে আমি প্রতিদিনই তোমাকে বেছে নিই। 😊", position: { top: '35%', left: '10%' } },
    { id: 4, message: "অনেকে গোলাপ দেয় ভালোবাসা দেখাতে, আর আমি তোমাকে সময় দিই—কারণ সেটাই সবচেয়ে দামী। 💓", position: { top: '45%', right: '25%' } },
    { id: 5, message: "তুমি থাকলে গোলাপের দরকার পড়ে না, তবু আজ একটা পাঠালাম—কারণ আজকে একটু বেশি করে ভালোবাসি। 🌹", position: { top: '55%', left: '30%' } },
    { id: 6, message: "রোজ ডে বলে কথা, কিন্তু আমার কাছে তুমি শুধু আজকের না—তুমি আমার আগামী। 💖", position: { top: '65%', right: '10%' } },
    { id: 7, message: customMessage || "এই গোলাপটা তোমার জন্য না, এটা আমার জন্য—কারণ তোমাকে পেয়ে আমিই বেশি সুন্দর হয়ে গেছি। 🌹", position: { top: '75%', left: '15%' } },
    { id: 8, message: "এই গোলাপটা হাতে নাও, কিন্তু মনে রেখো—আমার মনটা আগেই তোমার কাছে। 🌹", position: { top: '20%', left: '50%' } },
  ]

  const handleRoseClick = (rose) => {
    setSelectedRose(rose)
    setShowMessage(true)
  }

  return (
    <div className="rose-garden">
      <div className="garden-header">
        <h1 className="garden-title">Rose Garden</h1>
        <p className="garden-subtitle">Tap a floating rose to reveal its secret... 🌹</p>
      </div>

      <div className="garden-container">
        <div className="puppy-container">
          <img src="https://imgproxy.attic.sh/insecure/f:webp/q:90/w:384/plain/https://attic.sh/tsq0buy4lrey4n77lzh8htonc2qk" alt="Cute cat" className="puppy" />
        </div>

        {roses.map((rose) => (
          <div
            key={rose.id}
            className="floating-rose"
            style={rose.position}
            onClick={() => handleRoseClick(rose)}
          >
            <img src="https://www.clipartmax.com/png/middle/336-3369551_rose-graphics-free-flowers-vector-graphics-pixabay-roses-clipart.png" alt="Rose" className="rose-image" />
          </div>
        ))}

        <div className="sparkles-bg">
          <div className="sparkle">✨</div>
          <div className="sparkle">💫</div>
          <div className="sparkle">⭐</div>
        </div>
      </div>

      <div className="garden-tip">
        💡 Tip: Pick any rose, each has a unique charm!
      </div>

      {showMessage && selectedRose && (
        <div className="message-modal" onClick={() => setShowMessage(false)}>
          <div className="message-content">
            <div className="message-rose">🌹</div>
            <h3>From: {senderName || 'Someone Special'}</h3>
            <h4>To: {receiverName || 'You'}</h4>
            <p className="rose-message">{selectedRose.message}</p>
            <small>Tap anywhere to close</small>
          </div>
        </div>
      )}
    </div>
  )
}

export default RoseGarden