class Calculator{
    constructor(previousOperandTextElement,currentOperandTextElement){
        this.previousOperandTextElement=previousOperandTextElement
        this.currentOperandTextElement=currentOperandTextElement
        this.clear()
        
    }
  
    clear() {
     
        this.currentOperand=''
        this.previousOperand=''
        this.operation=undefined
        
        }
        delete(){
            this.currentOperand=this.currentOperand.toString().slice(0,-1)
           

}
//for the comma part
getDisplayNumber(number){
    const stringNumber=number.toString()
    const integerDigits=parseFloat(stringNumber.split('.')[0])//this turns it into an array the first number is before the'.'
    const decimalDigits=(stringNumber.split('.')[1])
 let integerDisplay
 if(isNaN(integerDigits)) {
     integerDisplay=''
 }
else{
    integerDisplay=integerDigits.toLocaleString('en',{maximumFractionDigits:0})//no other decimal places after this decimal maximum fraction 0
}
if(decimalDigits!=null){
    return `${integerDisplay}.${decimalDigits}`
}
else{
    return integerDisplay;
}
}


compute()  {
    let computation
    const prev=parseFloat(this.previousOperand) //changing  it to number
    const current=parseFloat(this.currentOperand)
    if(isNaN(prev)||isNaN(current)) return
     switch(this.operation){
         case '+':
         computation=prev+current
         break;
         case '-':
         computation=prev-current
         break;
         case '*':
         computation=prev*current
         break;
         case '/':
         computation=prev/current
         break;
         default:
         return 
     }
this.currentOperand=computation
this.previousOperand=''
this.operation=undefined
}
        appendNumber (number){
            if(number==='.'&&this.currentOperand.includes('.')) return
            this.currentOperand=this.currentOperand.toString()+number.toString()//we are converting to string so that they will be appended not added
            }
            chooseOperation (operation){
                if(this.currentOperand==='') return
                if(this.previousOperand!==''){
                    this.compute()
                  
                }
this.operation=operation
this.previousOperand=this.currentOperand
this.currentOperand=''
            }
            updateDisplay(){
                if(this.operation!=null){
                
                    this.previousOperandTextElement.innerHTML=`${this.getDisplayNumber(this.previousOperand)}${this.operation}`
                }
                else{
                    this.previousOperandTextElement.innerHTML=''
                }
                this.currentOperandTextElement.innerHTML=this.getDisplayNumber(this.currentOperand)
              
                }

}









const numberButton=document.querySelectorAll('[data-number]');
const operationButton=document.querySelectorAll('[data-operation]');
const equalsButton=document.querySelector('[data-equals]')
const deleteButton=document.querySelector('[data-delete]')
const allClearButton=document.querySelector('[ data-all-clear]')
const previousOperandTextElement=document.querySelector('[data-previous-operand]')
const currentOperandTextElement=document.querySelector('[data-current-operand]')

const calculator= new Calculator(previousOperandTextElement,currentOperandTextElement)
numberButton.forEach(button => {
    button.addEventListener('click',() => { 
        calculator.appendNumber(button.innerHTML)
        calculator.updateDisplay()// every time a button clicked it displays the updated
    })
});
operationButton.forEach(button => {
    button.addEventListener('click',() => { 
        calculator.chooseOperation(button.innerHTML)
        calculator.updateDisplay()// every time a button clicked it updates the display
    })
});
equalsButton.addEventListener('click',button=>{
    calculator.compute()
    calculator.updateDisplay()
})
allClearButton.addEventListener('click',button=>{
    calculator.clear()
    calculator.updateDisplay()
})
deleteButton.addEventListener('click',button=>{
    calculator.delete()
    calculator.updateDisplay()
})
