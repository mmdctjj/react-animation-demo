import './App.css';
import BottomToTopComponent from './Components/BottomToTopComponent';
import LeftToRightComponent from './Components/LeftToRightComponent';
import RightToLeftComponent from './Components/RightToLeftComponent';
import TopToBottomComponent from './Components/TopToBottomComponent';
import { FlexContainer } from './styles';

function Basic() {

  return (
    <FlexContainer>

      <div className="App">
        <TopToBottomComponent />
      </div>

      <div className="App">
        <BottomToTopComponent />
      </div>

      <div className="App">
        <RightToLeftComponent />
      </div>

      <div className="App">
        <LeftToRightComponent />
      </div>

    </FlexContainer>
  )
}

export default Basic;
