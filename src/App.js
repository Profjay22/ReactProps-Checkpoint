import './App.css'
import Profile from "./Profile/Profile"
import Image from "./Image/Jeremiah.jpg"

function App() {
    const handleName = (user) => {
      alert(`This profile user is ${user}`)
    }

  return (
    <div className="App">
       <img width='300' height='300' src={Image} alt='myphoto'></img>
        <Profile Fullname="Jeremiah Akintomide" Bio="Fullstack Javascript Developer" 
        Profession="Frond-End Developer" handleName={handleName}/>      
    </div>
  );
}

export default App;
