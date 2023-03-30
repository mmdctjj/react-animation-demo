import Advanced from './Advanced';
import Basic from './Basic';
import './App.css';
import { useCallback, useState } from 'react';
import { FlexContainer, IndexContainer } from './styles';
import { BottomToTop } from './animations';

function App() {

  const [curr, setCurr] = useState(localStorage.getItem('curr'))

  const onSetCurr = useCallback((type: string) => {
    setCurr(type)
    localStorage.setItem('curr', type)
  }, [])

  return <>

    {curr === '' ? '' : <div onClick={() => onSetCurr('')} style={{margin: 10}}>⬅返回</div>}

    {
      (() => {
        
        switch (curr) {

          case 'basic':
            
            return <Basic />
          
          case 'advanced':
          
            return <Advanced />
          
          default:
        
            return <FlexContainer align="center">

              <BottomToTop index={1} duration={1000} delay={600}>
                <IndexContainer onClick={() => onSetCurr('basic')}>基础</IndexContainer>
              </BottomToTop>

              <BottomToTop index={2} duration={1000} delay={600}>
                <IndexContainer onClick={() => onSetCurr('advanced')}>进阶</IndexContainer>
              </BottomToTop>

              <BottomToTop index={3} duration={1000} delay={600}>
                <IndexContainer onClick={() => onSetCurr('basic')}>变态</IndexContainer>
              </BottomToTop>
              
            </FlexContainer>
        }
      })()
    }
  </>
  
}

export default App;
