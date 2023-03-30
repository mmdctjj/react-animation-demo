import { TopToBottom } from '../animations';
import { Article, Background, BoxItem, FlexContainer, Image, MiniIcon, Text, Title } from '../styles';

function TopToBottomComponent() {
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
        new Array(5).fill(null).map((_, idx) => <TopToBottom key={idx} index={idx + 3}>
          <BoxItem>
            <FlexContainer>
              <Image />
              <Article>
                <Title />
                <Text />
              </Article>
            </FlexContainer>
          </BoxItem>
        </TopToBottom>)
      }
    </div>
  );
}

export default TopToBottomComponent;
