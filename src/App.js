import './styles/main.css'
import Info from './components/Info/Info';
import Sidebar from './components/Sidebar/Sidebar';
import Plan from './components/Plan/Plan';
import AddOns from './components/AddOns/AddOns';
import Summary from './components/Summary/Summary';
import { useSelector } from 'react-redux';
import ThankYou from './components/Summary/ThankYou';
function App() {
  const {step} = useSelector(state=>state.plan)
  return (
    <div className="container">
      <Sidebar/>
      {step==1 && <Info/>}
      {step==2 && <Plan/>}
      {step==3 && <AddOns/>}
      {step==4 && <Summary/>}
      {step==5 && <ThankYou/>}
    </div>
  );
}

export default App;


