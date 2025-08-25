import Card from './components/Card'
import './App.css'

function App() {

  return (
    <>
      <Card
        title="Photography"
        description="Capturing moments through the lens."
        imageUrl="https://images.unsplash.com/photo-1506744038136-46273834b3fb"
      />
      <Card
        title="Cooking"
        description="Experimenting with flavors and recipes."
        imageUrl="https://images.unsplash.com/photo-1519864600265-abb23847ef2c"
      />
      <Card
        title="Travel"
        description="Exploring new places and cultures."
        imageUrl="https://images.unsplash.com/photo-1465101046530-73398c7f28ca"
      />
      
    </>
  )
}

export default App
