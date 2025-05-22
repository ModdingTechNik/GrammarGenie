const TestingElements = {
    'sectionStart': null,
    'sectionTest': null,
    'buttons': [],
    'submit': null,
    'abort': null,
    'start-test': null
}

TestingElements.sectionStart = document.querySelector('#start')
TestingElements.sectionTest = document.querySelector('#test')
TestingElements.submit = document.querySelector('#button-submit')
TestingElements.abort = document.querySelector('#button-abort')

TestingElements.buttons.push(document.querySelector('#button-a'))
TestingElements.buttons.push(document.querySelector('#button-b'))
TestingElements.buttons.push(document.querySelector('#button-c'))
TestingElements.buttons.push(document.querySelector('#button-d'))

TestingElements["start-test"] = document.querySelector('#start > button')

for (const btnG of TestingElements.buttons) {
    btnG.addEventListener('click', e => {
        for (const button of TestingElements.buttons) {
            button.classList.remove('selected')
        }
        btnG.classList.add('selected')
    })
}

TestingElements['start-test'].addEventListener('click', e => {
    TestingElements.sectionStart.classList.remove('visible')
    TestingElements.sectionTest.classList.add('visible')
})

TestingElements['abort'].addEventListener('click', e => {
    TestingElements.sectionTest.classList.remove('visible')
    TestingElements.sectionStart.classList.add('visible')
})

TestingElements['submit'].addEventListener('click', e => {
    for (const button of TestingElements.buttons) {
        button.classList.remove('selected')
    }
})