# test-incident-room


This project was developed as part of the course:
International Standards on Software Quality and Test

It aims to provide an interactive learning experience aligned with the principles of:
ISO/IEC 29119-2 – Test Processe

Authors:
  Serra Selci
  Gizem Fatma Kılıç
  Ecem Tüysüz
 
  Overview

Test Incident Room is a web-based simulation game designed to teach ISO/IEC 29119-2 Test Processes through interactive, scenario-based decision making.

The game simulates a software release day under pressure, where multiple incidents occur simultaneously. Players take on the role of a Test Manager and must respond to incidents within limited time.

Each decision affects:
	•	Project Health
	•	System Stability
	•	Final Score

⸻

  Learning Objectives

This game helps students:
	•	Apply ISO 29119-2 processes in realistic scenarios
	•	Understand key process areas:
	•	Incident Management
	•	Test Planning
	•	Test Monitoring & Control
	•	Test Execution
	•	Recognize common mistakes:
	•	Skipping documentation
	•	Misinterpreting severity
	•	Acting without analysis
	•	Develop decision-making skills under time pressure
	•	Understand the impact of decisions on release readiness

⸻

  Game Features
	•	 Web-based (mobile-friendly)
	•	 Multi-user classroom gameplay
	•	 User registration & login system
	•	 Time-limited decision making
	•	 Score, health, and streak system
	•	 Activity log for each session
	•	 Leaderboard (local storage based)
	•	 QR-based access for easy participation

⸻

  Game Flow
	1.	User logs in or creates an account
	2.	Selects difficulty level:
	•	Easy (60s)
	•	Medium (35s)
	•	Hard (18s)
	3.	Handles 12 real-world testing incidents
	4.	Makes decisions under time pressure
	5.	Receives instant feedback
	6.	Views final score and performance grade

⸻

  Technologies Used
	•	HTML5
	•	CSS3
	•	Vanilla JavaScript
	•	LocalStorage (for user data & leaderboard)

⸻
  Project Structure
    ├── index.html   # Main UI and screens
    ├── style.css    # Styling
    ├── game.js      # Game logic
    ├── data.js      # Incident scenarios
    └── README.md
