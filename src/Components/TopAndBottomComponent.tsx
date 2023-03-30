import { BottomToTop, TopToBottom } from '../animations';
import { Article, Background, BoxItem, FlexContainer, Image, MiniIcon, Text, Title } from '../styles';

function TopAndBottomComponent() {
  return (
    <div>

      <div>&nbsp;</div>

      <TopToBottom>
        <Background />
      </TopToBottom>

      <BoxItem>

        <FlexContainer>
          { new Array(4).fill(null).map((_, idx) => <TopToBottom key={idx} index={idx + 1}><MiniIcon /></TopToBottom>)} 
        </FlexContainer>

      </BoxItem>
      {
        new Array(5).fill(null).map((_, idx) => idx % 2 === 0
          ? <TopToBottom key={idx} index={idx + 3} duration={300} delay={50}>
              <BoxItem>
                <FlexContainer>
                  <Image />
                  <Article>
                    <Title />
                    <Text />
                  </Article>
                </FlexContainer>
              </BoxItem>
            </TopToBottom>
            
          : <BottomToTop key={idx} index={idx + 3} duration={300} delay={50}>
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

export default TopAndBottomComponent;
