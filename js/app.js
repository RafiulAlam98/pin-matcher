function getPin(){
  const pin = Math.round(Math.random()*10000)
  const pinString = pin + '';
  if (pinString.length == 4){
    return pin
  }
  else{
    return getPin()
  }
}

function generatePin(){
  document.getElementById("input-pin").value = getPin()
}

document.getElementById("number").addEventListener('click',function(event){
  // debugger
  const number = event.target.innerText
  const displayInput = document.getElementById("display-input")
  if(isNaN(number)){
    
    if(number == "C"){
      displayInput.value = ""
    }
  }
  else{

      const previousInput  = displayInput.value;
      const newInput = previousInput + number
      displayInput.value = newInput
  }
})

function matchedPin(){
  const pin = document.getElementById("input-pin").value
  const typeNumbers = document.getElementById("display-input").value
  const notifySuccess = document.getElementById('notify-success')
  const notifyFail = document.getElementById('notify-fail')
  if(pin == typeNumbers){
    notifySuccess.style.display = "block"
     notifyFail.style.display = "none"
  }
  else{
    notifySuccess.style.display = "none"
    notifyFail.style.display = "block"
  }
   
}