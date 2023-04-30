import './App.css'
import Hero from "./components/Hero"
import Header from "./components/Header"
import Button from "./components/Button"
import AboutMe from "./components/AboutMe"
import Interests from "./components/Interests"


function App() {

  return (
    <div className="card">
			<Hero />
			<Header />
			<div className="buttons">
				<Button image="" urlName="Email" url="mailto:kadewilliams0@gmail.com" />
				<Button image="" urlName="Github" url="https://github.com/KadeWilliams" />
			</div>
			<AboutMe />
			<Interests />
		</div>
  )
}

export default App
