import "./index.css";

const btn1 = document.getElementById('btn')
const text1 = document.getElementById('text')
const box1 = document.getElementById('box')
const boxUl1 = document.getElementById('boxUl')

btn1.addEventListener('click', function() {
  // text1.classList.remove('text-fb')
  text1.classList.add('text-fb')

  // box1.innerHTML = `
  //   <ul>
  //     <li></li>
  //     <li></li>
  //     <li></li>
  //     <li></li>
  //     <li></li>
  //   </ul>
  // `

  let str = ''
  const li = '<li>test</li>'

  for (let i = 0; i < 5; i++) {
    str = str + li
  }

  boxUl1.innerHTML = str

})