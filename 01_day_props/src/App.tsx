import './App.css'
import Card from './components/card'

function App() {


  return (
    <div>
      <h1 className="text-3xl text-red-500 font-bold underline">Hello world!</h1>
      <div className="grid  md:grid-cols-2 gap-4">
        <Card name="Lips" image="https://cdn.pixabay.com/photo/2024/01/11/16/29/leaves-8502135_1280.jpg" className="border-2 border-red-500" />
        <Card name="Cat" btnText="Follow me" image="https://cdn.pixabay.com/photo/2025/08/03/15/10/cat-9752539_1280.jpg" className="border-2 border-blue-500" />
      </div>
    </div>
  )
}

export default App
