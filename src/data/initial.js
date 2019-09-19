const initial = {
    qcounter:0,
    quiz: [
        { "id": 1 },
        { "id": 2 },
        { "id": 3 },
        { "id": 4 },
        { "id": 5 },
        { "id": 6 },
        { "id": 7 },
        { "id": 8 },
        { "id": 9 },
        { "id": 10 },
        { "id": 11 },
        { "id": 12 },
        { "id": 13 },
        { "id": 14 },
        { "id": 15 }
    ],
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
    start: false,
    score: 0,

};

export default initial;