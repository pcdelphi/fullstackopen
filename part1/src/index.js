import React from 'react';
import ReactDOM from 'react-dom';

// 定义一个名为App的React组件，从JavaScript来说，就是一个不接受任何参数的函数，() => 
// 该函数被赋值给一个const修饰的变量App
const App = () => {
  const now = new Date()
  const a = 10
  const b = 20

  return (
    <div>
      <p>Hello world, it is {now.toString()}</p>
      <p>
        {a} + {b} = {a +b}
      </p>
    </div>
  )
}
ReactDOM.render(<App />, document.getElementById('root'))