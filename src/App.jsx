import React, { useState, useEffect } from 'react'
import './App.css'
import RoseGarden from './RoseGarden'

function App() {
  const [yourName, setYourName] = useState('')
  const [theirName, setTheirName] = useState('')
  const [customMessage, setCustomMessage] = useState('')
  const [showCustomInput, setShowCustomInput] = useState(false)
  const [linkCreated, setLinkCreated] = useState(false)
  const [generatedLink, setGeneratedLink] = useState('')
  const [showGarden, setShowGarden] = useState(false)
  const [linkData, setLinkData] = useState(null)

  useEffect(() => {
    // Check if URL contains a special link
    const urlPath = window.location.pathname
    if (urlPath.includes('/special/')) {
      const linkId = urlPath.split('/special/')[1]
      if (linkId) {
        // Simulate fetching link data (in real app, this would be from a database)
        const storedData = localStorage.getItem(`rose_link_${linkId}`)
        if (storedData) {
          const data = JSON.parse(storedData)
          setLinkData(data)
          setShowGarden(true)
        } else {
          // Default data if link not found
          setLinkData({ senderName: 'Someone Special', receiverName: 'You', customMessage: '' })
          setShowGarden(true)
        }
      }
    }
  }, [])

  const handleSubmit = () => {
    if (yourName && theirName) {
      const randomId = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 8)
      const timestamp = Date.now().toString(36)
      const linkId = `${randomId}${timestamp}`
      const newLink = `${window.location.origin}/special/${linkId}`
      
      // Store link data in localStorage (in real app, this would be saved to a database)
      const linkData = {
        senderName: yourName,
        receiverName: theirName,
        customMessage: customMessage,
        createdAt: new Date().toISOString()
      }
      localStorage.setItem(`rose_link_${linkId}`, JSON.stringify(linkData))
      
      setGeneratedLink(newLink)
      setLinkCreated(true)
    }
  }

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generatedLink)
    alert('Link copied to clipboard!')
  }

  const createAnother = () => {
    setLinkCreated(false)
    setYourName('')
    setTheirName('')
    setCustomMessage('')
    setShowCustomInput(false)
  }

  if (showGarden) {
    return (
      <RoseGarden 
        senderName={linkData?.senderName}
        receiverName={linkData?.receiverName}
        customMessage={linkData?.customMessage}
      />
    )
  }

  return (
    <div className="app">
      {!linkCreated ? (
        /* Login Form */
        <div className="main-content">
          <h1 className="title">Rose Day Special</h1>
          <p className="subtitle">Pick a special rose for someone you love</p>

          <div className="input-section">
            <div className="input-group">
              <label>Your Name</label>
              <input 
                type="text" 
                placeholder="Enter your name"
                value={yourName}
                onChange={(e) => setYourName(e.target.value)}
              />
            </div>

            <div className="input-group">
              <label>Your (GF/BF/Crush) Name</label>
              <input 
                type="text" 
                placeholder="Enter their name"
                value={theirName}
                onChange={(e) => setTheirName(e.target.value)}
              />
            </div>

            <button 
              className="customize-btn"
              onClick={() => setShowCustomInput(!showCustomInput)}
            >
              {showCustomInput ? '✕ Remove Custom Message' : '+ Customize Message'}
            </button>

            {showCustomInput && (
              <div className="input-group">
                <input 
                  type="text" 
                  placeholder="Your special message..."
                  value={customMessage}
                  onChange={(e) => setCustomMessage(e.target.value)}
                />
              </div>
            )}
          </div>
          
          <button className="create-link-btn" onClick={handleSubmit}>
            CREATE LINK
          </button>

          <p className="bottom-text">Every rose has a special message waiting for you! 🌹</p>
        </div>
      ) : (
        /* Link Created Page */
        <div className="link-created-page">
          <div className="sparkles">✨</div>
          <h1 className="success-title">Link Created!</h1>
          <p className="success-subtitle">Share this special link with {theirName}</p>
          
          <div className="link-container">
            <div className="generated-link">{generatedLink}</div>
          </div>
          
          <button className="copy-btn" onClick={copyToClipboard}>
            <span className="play-icon">▶</span>
            COPY LINK
          </button>
          
          <button className="create-another-btn" onClick={createAnother}>
            CREATE ANOTHER
          </button>
          
          <p className="bottom-info">After they open the link, they'll see the garden directly!</p>
        </div>
      )}
    </div>
  )
}

export default App