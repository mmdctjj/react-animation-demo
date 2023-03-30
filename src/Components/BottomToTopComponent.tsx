import { BottomToTop } from '../animations';
import { Article, Background, BoxItem, FlexContainer, Image, MiniIcon, Text, Title } from '../styles';

function BottomToTopComponent() {
  return (
    <div>

      <div>&nbsp;</div>

      <BottomToTop>
        <Background />
      </BottomToTop>
      

      <BoxItem>

        <FlexContainer>
          { new Array(4).fill(null).map((_, idx) => <BottomToTop key={idx} index={idx + 1}><MiniIcon /></BottomToTop>)} 
        </FlexContainer>

      </BoxItem>
      {
        new Array(5).fill(null).map((_, idx) => <BottomToTop key={idx} index={idx + 3}>
          <BoxItem>
            <FlexContainer>
              <Image />
              <Article>
                <Title />
                <Text />
              </Article>
            </FlexContainer>
          </BoxItem>
        </BottomToTop>)
      }
    </div>
  );
}

export default BottomToTopComponent;
