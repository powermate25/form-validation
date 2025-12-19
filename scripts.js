const clog = console.log
clog("Welcome!")

const formElement = document.querySelector("form")
const emailField = document.querySelector("form #email")
const countryField = document.querySelector("form #country")
const postcodeField = document.querySelector("form #postcode")
const passwordField = document.querySelector("form #password")
const passwordCheckField = document.querySelector("form #password-check")
const submitButton = document.querySelector("form #submit-button")
const allInputElements = document.querySelectorAll("form input")
clog(allInputElements)


/* emailField.addEventListener("input", () => {
    emailField.reportValidity()
})  */

// Constraint validation live check check on input

allInputElements.forEach(i => {
    i.addEventListener("input", () => {
        i.reportValidity()
        if ( !i.checkValidity() ){ i.style.cssText = "border: 1px solid red;" }
        else { i.style.cssText = "border: none;" }
    })
})

// Constraint validation check on field leave

allInputElements.forEach(i => {
    i.addEventListener("blur", () => {
        if ( !i.checkValidity() ){ i.style.cssText = "background-color: #d5adadff;" }
        // else { i.style.cssText = "background-color: none;" }
    }) 
})

// Constraint validation check on form submit

submitButton.addEventListener("click", (e) => {
    e.preventDefault()
    allInputElements.forEach(i => {
        // Checking individual input validity
        if ( !i.checkValidity() ) {
            clog(`${i.name}: ${i.validationMessage}`)
            i.style.cssText = "background-color: #d5adadff;"
            submitButton.textContent = "⛔ Try again!"
        }
        // Checking all input fields validities
        let checkPass = true
        for (let x = 1; x <= allInputElements.length; x++){
            if ( !i.checkValidity() ) { checkPass = false }
        } 
        if ( checkPass ) { 
            clog("🔔 Validity check pass!")
            submitButton.textContent = "✅ All checks passed!"
        }
    })
    
})
