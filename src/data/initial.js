const initial = {
    qcounter:0,
    quiz: [],
    current: {
        "question": {
            "id": 1,
            "question": "What does CSS stand for?",
            "category": "CSS",
            "level": "Beginner"
        },
        "answers": [
            {
                "id": 1,
                "answer": "Computer Style Sheets",
                "correct": false
            },
            {
                "id": 2,
                "answer": "Creative Style Sheets",
                "correct": false
            },
            {
                "id": 3,
                "answer": "Cascading Style Sheets",
                "correct": true
            },
            {
                "id": 4,
                "answer": "Colourful Style Sheets",
                "correct": false
            }
        ]
    },
    
    selected: null,
    start: true,
    score: 0,

};

export default initial;