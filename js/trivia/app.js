let json = [{
        q: 'What is the capital of Australia?',
        answers: [
            'Sidney',
            'Perth',
            'Melbourne',
            'Canberra'
        ],
        currentAns: 'Canberra'
    },
    {
        q: `The first prime minister of israel?`,
        answers: [
            'yitzhak rabin',
            'ben gurion',
            'beni gantz',
            'golda meir'
        ],
        currentAns: 'ben gurion'
    },
    {
        q: `What is the bigest iland in thailand ?`,
        answers: [
            'Ko phangan',
            'Ko Phi Phi',
            'ko-samui',
            'Poket'
        ],
        currentAns: 'Poket'
    },

    {
        q: 'What the capital city of brazil?',
        answers: [
            'brazilia',
            'london',
            'paris',
            'bugota'
        ],
        currentAns: 'brazilia'
    },
    {
        q: 'what is the highest montain in the world?',
        answers: [
            'mekinli',
            'karakoram',
            'miron',
            'everets'
        ],
        currentAns: 'everets'
    },
 
  

]


let t = new Trivia('#parent', json)
t.render()