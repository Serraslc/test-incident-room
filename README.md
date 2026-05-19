# Test Incident Room v4.0

Test Incident Room is an interactive educational web game designed around the ISO/IEC/IEEE 29119-2 Software Testing Standard. Players take the role of a test manager during release day and must resolve testing incidents under time pressure by making correct process-based decisions.

The project focuses mainly on ISO 29119-2 Test Processes, incident management, dynamic testing concepts, regression testing, risk-based testing, and software testing terminology.

---
## Live Demo

Play the game here: https://serraslc.github.io/test-incident-room/

## Features

- Firebase Authentication system
- User registration and login
- Realtime Firebase leaderboard
- Randomized incident/question selection
- 3 difficulty levels (Easy / Medium / Hard)
- Speed bonus scoring system
- Health and streak mechanics
- Responsive mobile-friendly design
- Animated glassmorphism UI
- Educational explanations after each decision
- 100+ ISO 29119-2 aligned questions
- Cloud-based score storage
- Session persistence

---

## Technologies Used

- HTML5
- CSS3
- Vanilla JavaScript
- Firebase Authentication
- Firebase Firestore
- GitHub Pages

---

## Gameplay

Players are presented with testing incidents and must choose the most appropriate action according to ISO 29119-2 testing processes.

The game evaluates:
- Decision accuracy
- Response speed
- Incident management performance
- Risk awareness

Each difficulty level changes:
- Time per incident
- Timeout penalties
- Overall challenge level

---

## Difficulty Levels

| Difficulty | Time per Incident | Timeout Penalty |
|------------|------------------|----------------|
| Easy | 60 sec | -30 pts |
| Medium | 35 sec | -60 pts |
| Hard | 18 sec | -100 pts |

---

## ISO 29119-2 Topics Covered

- Test Planning
- Test Monitoring and Control
- Test Analysis
- Test Design
- Test Execution
- Test Completion
- Regression Testing
- Retesting
- Incident Reporting
- Test Environment
- Test Data
- Risk-Based Testing
- Static vs Dynamic Testing
- Entry and Exit Criteria
- Traceability
- Metrics and Reporting

---

## Project Structure

/
├── index.html  
├── style.css  
├── game.js  
├── easy.js  
├── medium.js  
├── hard.js  
└── README.md  


## Firebase Setup

The project uses Firebase for:
- Authentication
- Realtime leaderboard storage

To configure Firebase:

1. Create a Firebase project
2. Enable Authentication → Email/Password
3. Enable Firestore Database
4. Replace Firebase configuration inside `index.html`

---

## Deployment

This project is deployed using GitHub Pages.

---

## Educational Purpose

This project was developed for educational purposes as part of a International Standards on Software Quality and Test course.

The main goal is to help students better understand ISO 29119-2 Testing Processes through interactive gameplay and scenario-based learning.

---

## Authors

Serra Selci
Gizem Fatma Kılıç
Ecem Tüysüz

---

## License

This project was created for educational purposes.
