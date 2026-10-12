"use client";

import React, { useState, useEffect } from "react";

const phrases = [
  "ESTABLISHING SECURE SATELLITE UPLINK...",
  "LOCATING THE ONE GUY WHO SKIPPED THE BRIEFING...",
  "CALIBRATING WEAPON SYSTEMS...",
  "APOLOGIZING TO THE LAST SQUAD WE SENT...",
  "ENCRYPTING COMMUNICATION CHANNELS...",
  "FORGETTING THE ENCRYPTION PASSWORD...",
  "DEPLOYING RECON DRONES...",
  "RETRIEVING RECON DRONES FROM A TREE...",
  "TRACKING HIGH VALUE TARGET...",
  "TARGET HAS STOPPED FOR CHICKEN NUGGETS...",
  "CHECKING AMMUNITION LEVELS...",
  "SOMEONE LEFT THE SAFETY ON...",
  "UPLINKING TO COMMAND...",
  "COMMAND IS CURRENTLY IN A MEETING...",
  "SCANNING FOR HOSTILE ACTIVITY...",
  "FOUND MOSTLY BAD WIFI...",
  "VERIFYING OPERATOR CREDENTIALS...",
  "USERNAME ACCEPTED. EGO REJECTED...",
  "CONSULTING SATELLITE IMAGERY...",
  "SATELLITE JUDGES YOUR LOADOUT...",
  "ACTIVATING THREAT DETECTION SYSTEMS...",
  "THREAT DETECTED: MONDAY MORNING...",
  "LOADING TACTICAL MAP DATA...",
  "MAP LAST UPDATED IN 2007...",
  "PREPARING AIR SUPPORT...",
  "PILOT IS WATCHING CAT VIDEOS...",
  "CONFIRMING EXTRACTION ROUTE...",
  "EXTRACTION ROUTE CONFIRMEDLY QUESTIONABLE...",
  "INITIALIZING TARGET ACQUISITION...",
  "TARGET ACQUIRED. AIM NOT INCLUDED...",
  "SYNCHRONIZING TEAM MEMBERS...",
  "ONE TEAM MEMBER IS STILL AFK...",
  "RECOVERING LOST INTELLIGENCE...",
  "IT WAS IN THE RECYCLING BIN...",
  "ANALYZING ENEMY POSITION...",
  "ENEMY APPEARS TO BE CAMPING...",
  "LOADING CLASSIFIED DOCUMENTS...",
  "CLASSIFICATION: OOPS...",
  "DEPLOYING SPECIAL OPERATIONS UNIT...",
  "SOME ASSEMBLY REQUIRED...",
  "VERIFYING NETWORK STABILITY...",
  "BLAMING LAG PREEMPTIVELY...",
  "CHECKING MISSION PARAMETERS...",
  "MISSION PARAMETERS CHECKING YOU...",
  "CONSULTING THE TACTICAL AI...",
  "TACTICAL AI SUGGESTS A NAP...",
  "CALCULATING WIN PROBABILITY...",
  "RESULTS HAVE BEEN REDACTED...",
  "SEARCHING FOR THE MISSING SEMICOLON...",
  "MISSION DELAYED DUE TO JAVASCRIPT...",
  "AUTHENTICATING OPERATOR...",
  "YOU LOOK DIFFERENT WITHOUT A HELMET...",
  "PREPARING BATTLEFIELD...",
  "SOME ENEMIES MAY BE ASSEMBLED UPSIDE DOWN...",
  "LOADING...",
  "ALMOST THERE...",
  "NO REALLY, THIS TIME...",
];

export default function Home() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % phrases.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container">
      <div className="overlay" />

      <div className="hud">
        <div className="header">TASK FORCE : CrossFire // SECURE NETWORK</div>

        <div className="divider" />

        <div className="loadingBox">
          <div className="spinner" />

          <div className="status">
            {phrases[index]}
            <span className="cursor">_</span>
          </div>
        </div>

        <div className="progress">
          <div className="progressBar" />
        </div>

        <div className="footer">CLASSIFICATION: TOP SECRET</div>
      </div>

      <style jsx>{`
        .container {
          height: 100vh;
          width: 100vw;
          background: #0a0f14;
          color: #7fff7f;
          font-family: "Courier New", monospace;
          display: flex;
          justify-content: center;
          align-items: center;
          overflow: hidden;
          position: relative;
        }

        .overlay {
          position: absolute;
          inset: 0;
          background: repeating-linear-gradient(
            to bottom,
            rgba(255, 255, 255, 0.02),
            rgba(255, 255, 255, 0.02) 1px,
            transparent 1px,
            transparent 3px
          );
          pointer-events: none;
        }

        .hud {
          width: 700px;
          padding: 30px;
          border: 1px solid rgba(127, 255, 127, 0.3);
          background: rgba(0, 0, 0, 0.6);
          box-shadow: 0 0 30px rgba(0, 255, 100, 0.15);
        }

        .header {
          color: #9cff9c;
          font-size: 14px;
          letter-spacing: 3px;
          margin-bottom: 10px;
        }

        .divider {
          height: 1px;
          background: rgba(127, 255, 127, 0.4);
          margin-bottom: 30px;
        }

        .loadingBox {
          display: flex;
          align-items: center;
          gap: 20px;
          min-height: 80px;
        }

        .spinner {
          width: 40px;
          height: 40px;
          border: 3px solid rgba(127, 255, 127, 0.2);
          border-top-color: #7fff7f;
          border-radius: 50%;
          animation: spin 1s linear infinite;
        }

        .status {
          font-size: 18px;
          letter-spacing: 2px;
          text-shadow: 0 0 10px rgba(127, 255, 127, 0.7);
        }

        .cursor {
          animation: blink 1s infinite;
        }

        .progress {
          margin-top: 25px;
          height: 8px;
          border: 1px solid rgba(127, 255, 127, 0.3);
          overflow: hidden;
        }

        .progressBar {
          height: 100%;
          width: 40%;
          background: #7fff7f;
          animation: loading 2s ease-in-out infinite;
        }

        .footer {
          margin-top: 25px;
          color: rgba(127, 255, 127, 0.7);
          font-size: 12px;
          letter-spacing: 2px;
        }

        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes blink {
          50% {
            opacity: 0;
          }
        }

        @keyframes loading {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(250%);
          }
        }
      `}</style>
    </div>
  );
}
