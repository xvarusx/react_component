import logo from './logo.svg';
import ProfilPhoto from './Component/Profile/ProfilePhoto';
import './App.css';

import Address from './Component/Profile/Address';
import ProfilePhoto from './Component/Profile/ProfilePhoto';
import { FullName } from './Component/Profile/FullName';

function App() {
  return (
    <div className="App">
   <FullName/>
<ProfilePhoto />
<Address />
    </div>
  );
}

export default App;
