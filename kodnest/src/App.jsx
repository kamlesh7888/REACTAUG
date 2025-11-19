// App.jsx
import Homeclass from './Components/Homeclass'

export default function App() {
  let fname = "Kamlesh";
  let age = 25;
  let dost = "Sonu Gandu";
  return (
    <div>
      <h1>Welcome</h1>
      <Homeclass name={fname} age={age} dost={dost}/>
    </div>
  );
}