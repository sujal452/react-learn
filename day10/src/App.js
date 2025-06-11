import './App.css';
import { FcCursor, FcDocument } from "react-icons/fc";
import { AiFillCamera, AiFillEnvironment } from "react-icons/ai";
import { RxInstagramLogo, RxLockOpen2 } from "react-icons/rx";


function App() {
  return (
    <div className="App">
      <div className="icon-container">
        <FcCursor className="icon" />
        <FcDocument className="icon" />
        <AiFillCamera className="icon" />
        <AiFillEnvironment className="icon" />
        <RxInstagramLogo className='icon'/>
        <RxLockOpen2 className='icon'/>

      </div>
    </div>
  );
}

export default App;
