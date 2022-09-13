let counter = -1
let score = 0

class Trivia {
    constructor(_parent, _item) {
        this.item = _item
        this.parent = _parent;
        if (counter > -1) {
            this.q = _item[counter].q
            this.answers = _item[counter].answers
            this.ans = _item[counter].currentAns
            this.score = score
        }
    }

    render() {
        if (counter == -1) {
            let div = document.createElement('div')
            div.style.height = '60vh'
            document.querySelector(this.parent).append(div)
            div.innerHTML =
                `
            <div>
            <h4 class="display-5 text-center title">Welcome To Trivia Game
            </h4>
            </div>
    
            <div class="d-flex flex-column justify-content-center align-items-center h-100">
            <div >
            <button class="btn btn-info play">Start to play</button>
            </div>

            </div>
           
            `
            div.querySelector('.play').addEventListener('click', () => {
                setTimeout(() => { this.play() }, 1000)

            })
        } else if (counter > -1) {
            let div = document.createElement('div')

            document.querySelector(this.parent).append(div)
            div.innerHTML =
                `
            <div>
            <h4 class="display-5 text-center">${this.q}</h4>
            </div>
    
            <div class="d-flex flex-column align-items-center answers">
             
            </div>
            <div class="py-3">
            <h3 class="score">Score:0</h3>
        </div>
           
            `
            let answersDiv = document.querySelector('.answers')
            let scoreP = div.querySelector('.score')
            scoreP.innerHTML = 'score:' +
                0
            let flag = true

            this.answers.forEach((answer, i) => {
                let btn = document.createElement('button');
                btn.className = 'btn btn-dark col-8 mt-2'
                btn.innerHTML = answer
                answersDiv.append(btn)
                btn.addEventListener('click', () => {

                    if (flag) {
                        if (this.ans === answer) {
                            btn.className = 'btn btn-success col-8 mt-2'
                            score += 20
                        } else {
                            btn.className = 'btn btn-danger col-8 mt-2'
                           
                        }
                        flag = false

                        setTimeout(() => { this.nextQuestion() }, 1000)
                    }
                })
            });
            scoreP.innerHTML = 'score:' +
                score

        }
    }


    nextQuestion() {
        counter += 1;
        // console.log(counter)
        if (this.item.length != counter) {
            document.querySelector(this.parent).innerHTML = ""
            let t = new Trivia('#parent', this.item)
            t.render()
        } else {
            document.querySelector(this.parent).innerHTML = ""
            let div = document.createElement('div')
            div.style.height = '60vh'
            document.querySelector(this.parent).append(div)
            div.innerHTML = `
            <h1 class="display-4 text-center">The Trivia is Ended</h1>
            <div class=" p-5 center display-6 ">
               <P class="text-center">score: <span class="fw-bolder"> ${this.score}</span></P> 
            </div>
            <div class="d-flex h-100 align-items-center justify-content-center">
                <button class="btn btn-dark reset">Play Again</button>
            </div>
`
            div.querySelector('.reset').addEventListener('click', () => {
                this.reset()
            })
        }
    }

    reset() {
        counter = -1;
        score = 0
        document.querySelector(this.parent).innerHTML = ""
        let t = new Trivia('#parent', this.item)
        t.render()
    }

    play() {
        document.querySelector(this.parent).innerHTML = ""
        counter += 1;
        let t = new Trivia('#parent', this.item)
        t.render()

    }
}