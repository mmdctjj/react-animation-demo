import TopToBottomAndScaleComponent from './Components/TopToBottomAndScaleComponent';
import RightToLeftAndScaleComponent from './Components/RightToLeftAndScaleComponent';
import { FlexContainer } from './styles';

function Complicated() {

  return (
    <FlexContainer>

      <div className="App">
        <TopToBottomAndScaleComponent />
      </div>

      <div className="App">
        <RightToLeftAndScaleComponent />
      </div>

    </FlexContainer>
  )
}

export default Complicated;
