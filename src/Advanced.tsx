import './App.css';
import RightAndLeftAndBottomAntTopComponent from './Components/RightAndLeftAndBottomAntTopComponent';
import RightAndLeftComponent from './Components/RightAndLeftComponent';
import TopAndBottomComponent from './Components/TopAndBottomComponent';
import { FlexContainer } from './styles';

function Advanced() {

  return (
    <FlexContainer>

      <div className="App">
        <TopAndBottomComponent />
      </div>

      <div className="App">
        <RightAndLeftComponent />
      </div>

      <div className="App">
        <RightAndLeftAndBottomAntTopComponent />
      </div>

    </FlexContainer>
  )
}

export default Advanced;
