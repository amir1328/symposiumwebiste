  
document.querySelector('.mobile-nav-toggle').addEventListener('click', function() {
    document.querySelector('.nav-links').classList.toggle('active');
    this.querySelector('i').classList.toggle('fa-bars');
    this.querySelector('i').classList.toggle('fa-times');
});

function updateCountdown() {
    const now = new Date();
    let targetDate = new Date(now.getFullYear(), 2, 28, 0, 0, 0); 
    if (now > targetDate) {
targetDate = new Date(now.getFullYear() + 1, 2, 28, 0, 0, 0);
    }
    
    const diff = targetDate - now;
    
    // If countdown is finished
    if (diff <= 0) {
document.getElementById('days').textContent = '00';
document.getElementById('hours').textContent = '00';
document.getElementById('minutes').textContent = '00';
document.getElementById('seconds').textContent = '00';
return;
    }
    
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);
    
    document.getElementById('days').textContent = days.toString().padStart(2, '0');
    document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
    document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
    document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');
    
    setTimeout(updateCountdown, 1000);
}

updateCountdown();

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
e.preventDefault();

document.querySelector(this.getAttribute('href')).scrollIntoView({
    behavior: 'smooth'
});

document.querySelector('.nav-links').classList.remove('active');
document.querySelector('.mobile-nav-toggle i').classList.add('fa-bars');
document.querySelector('.mobile-nav-toggle i').classList.remove('fa-times');
    });
});
const eventRules = {
    codeinthedark: {
title: "CODE IN THE DARK - Rules & Regulations",
rules: [
    "The event will consist of two rounds: a preliminary coding challenge and a final 'no preview' coding round.",
    "Participants must compete in teams of two members.",
    "Internet access is strictly prohibited during the competition.",
    "In the final round, participants will code without seeing the live preview of their work.",
    "Time limit for each round will be strictly enforced.",
    "Use of pre-written code or templates is not allowed.",
    "Judges' decision will be final and binding.",
    "Use only c /c++ programming language."
]
    },
    neuroverse: {
title: "NEUROVERSE - Rules & Regulations",
rules: [
    "This is a event focused on exploring AI tools and applications with team size of 2 members.",
    "Participants will be given specific AI-related tasks to complete within the time limit.",
    "Basic knowledge of AI concepts and tools is expected.",
    "Use of provided resources and tools only is permitted during the competition.",
    "Tasks may include prompt engineering, model evaluation, or solution development.",
    "Participants will be judged on creativity, efficiency, and understanding of AI concepts.",
    "Specified AI tools will be provided for use during the event."
]
    },
    startuparena: {
title: "STARTUP ARENA - Rules & Regulations",
rules: [
    "This is an event to showcase entrepreneurship skills.",
    "Teams must consist of 3 to 4 members only.",
    "The presentation should have 6 slides or fewer.",
    "Each team has 5 minutes to present their idea.",
    "Question will be asked after each presentation.",
    "The presentation should focus on a innovative startup idea.",
    "Participants must submit the abstract (hardcopy)before the presentation.",
    "Judges will evaluate based on feasibility, market potential,and presentation skills."
]
    },
    crisisconqueror: {
title: "CRISIS CONQUEROR - Rules & Regulations",
rules: [
    "Participants will be presented with real-world problem scenarios to solve.",
    "This is an real-time problem-solving competition with team size 0f 2 members.",
    "Time limit of 60 minutes for analyzing and presenting solutions.",
    "Solutions will be judged on creativity, practicality, and completeness.",
    "Participants must explain their reasoning and approach.",
    "Use of internet for research is permitted during the preparation phase only.",
    "Multiple rounds may be conducted based on the number of participants."
]
    },
    rememberme: {
title: "REMEMBER ME - Rules & Regulations",
rules: [
    "Each team consists of 2 participants.",
    "Direct communication between the participants of the same team is prohibited during the object viewing period.",
    "If any participant communicates directly with their teammate, the team will be disqualified",
    "Multiple rounds will be conducted to increase the difficulty level of the challenge",
    "Participants are not allowed to take notes during the viewing period.",
    "Points will be awarded based on the accuracy and completeness of each participant’s recall.",
    " In the event of a tie, a sudden-death memory challenge will determine the winner."
]
    },
    treasurehunt: {
title: "TREASURE HUNT - Rules & Regulations",
rules: [
    "Teams must consist of 3-4 members.",
    "All clues must be solved in sequential order.",
    "Teams are not allowed to damage or alter any clues or property.",
    "Use of mobile phones is restricted except for emergency purposes.",
    "Time limit of 75 minutes for the entire hunt.",
    "Teams must stay together throughout the event.",
    "Interfering with other teams' progress is strictly prohibited.",
    "First team to find the final treasure and return to the starting point wins."
]
    },
    lawyergame: {
title: "LAWYER GAME - Rules & Regulations",
rules: [
    "Teams of 3-4 members will participate in mock debate scenarios.",
    "Each team will be assigned a position to defend, regardless of personal views.",
    "Preparation time of 15 minutes will be given before each round.",
    "Debates will follow a structured format with timed segments.",
    "Participants must maintain professional decorum during debates.",
    "Judging will be based on argument quality, evidence use, and persuasiveness.",
    "Teams must be prepared to defend both sides of an issue if required."
]
    },
    reversecharads: {
title: "REVERSE CHARADS - Rules & Regulations",
rules: [
    "Gather at least 4 players: 1 artist, 3+ listeners, 1 final artist.",
    "Players sit in a line, facing forward.",
    "The first artist draws the image on the next person’s back.",
    "Each player replicates what they feel on the next person’s back.",
    "The final artist draws on an A4 sheet what they felt.",
    "No peeking at the original image.",
    "This game has 3 rounds with different images each round.",
    "Compare the final drawing with the original and score based on accuracy or vote for the funniest drawing."
]
    },
    funzone: {
title: "FUN ZONE - Rules & Regulations",
rules: [
    "Open to all registered participants throughout the event day.",
    "Various game stations will be available with different activities.",
    "Participants must follow specific rules for each game station.",
    "Some activities may require registration at the venue.",
    "Prizes will be awarded for high scores in selected games.",
    "Participants must handle all equipment with care.",
    "Any disputes will be resolved by the event coordinators."
]
    },
    fitzone: {
title: "FIT ZONE - Rules & Regulations",
rules: [
    "Participation is open to all registered attendees.",
    "Physical challenges include arm wrestling, push-ups, and endurance tests.",
    "Participants must sign a fitness declaration before participating.",
    "Proper sports attire is recommended for all activities.",
    "Each challenge has specific rules that will be explained on-site.",
    "Winners will be determined based on performance metrics for each activity.",
    "Participants are encouraged to know their physical limits.",
    "Medical staff will be available throughout the event."
]
    }
};

// Function to open rules modal
function openRulesModal(eventId) {
    const modal = document.getElementById('rulesModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalBody = document.getElementById('modalBody');
    
    if (eventRules[eventId]) {
modalTitle.textContent = eventRules[eventId].title;

// Create rules list
let rulesList = document.createElement('ul');
rulesList.className = 'rules-list';

eventRules[eventId].rules.forEach(rule => {
    let listItem = document.createElement('li');
    listItem.textContent = rule;
    rulesList.appendChild(listItem);
});

modalBody.innerHTML = '';
modalBody.appendChild(rulesList);

modal.classList.add('show');
document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
    }
}

// Function to close rules modal
function closeRulesModal() {
    const modal = document.getElementById('rulesModal');
    modal.classList.remove('show');
    document.body.style.overflow = ''; // Re-enable scrolling
}

// Close modal when clicking outside the modal content
window.onclick = function(event) {
    const modal = document.getElementById('rulesModal');
    if (event.target == modal) {
closeRulesModal();
    }
}
