window.onload = function () {
    calculator.init()
}

let calculator = {
    buttons: undefined,
    input: undefined,

    init: function() {
        this.buttons = document.querySelectorAll('.numbers, .operators')
        //console.log(this.buttons)
        this.input = document.getElementById('input')

        for(let i=0;i<this.buttons.length;i++) {
            let el = this.buttons[i]
            el.addEventListener("click", this.buttonClick)
        }
    },

    buttonClick: function (event) {
        e = event
        htmlText = e.target.innerHTML
        console.log(e.target.innerHTML)

        switch(htmlText) {
            case "=":
                calculator.evaluate()
                
            break;
            case "C":
                calculator.clear()
                
            break;
            default:
                calculator.addToInput(e.target.innerHTML)
        }
        
    },

    addToInput: function (str) {
            this.input.value += str
       
    },

    evaluate: function() {
        try {

            const sqRoot = "\u221A"//unicode value
            let string = (calculator.input.value)
            let stringArr = string.split('')
            let sqIndex = stringArr.indexOf(sqRoot)//'√'
            if(sqIndex>0) {
                calculator.input.value = Math.sqrt(stringArr[sqIndex-1])
            }else {
                let finalResult = math.evaluate(string)
            console.log(typeof calculator.input.value)
            calculator.input.value = finalResult
            }
            
        }
        catch(err) {
            calculator.input.value = "Błąd Syntaxu!"
        }
        },


        

    clear: function () {
        calculator.input.value = ""
    }


}
//eval is dangerous, because it is vulnerable to code injection