import { RightToLeft } from '../animations';
import { Article, Background, BoxItem, FlexContainer, Image, MiniIcon, Text, Title } from '../styles';

function RightToLeftComponent() {
  return (
    <div>

      <div>&nbsp;</div>

      <RightToLeft>
        <Background />
      </RightToLeft>

      <BoxItem>

        <FlexContainer>
          { new Array(4).fill(null).map((_, idx) => <RightToLeft key={idx} index={idx + 1}><MiniIcon /></RightToLeft>)} 
        </FlexContainer>

      </BoxItem>
      {
        new Array(5).fill(null).map((_, idx) => <RightToLeft key={idx} index={idx + 3}>
          <BoxItem>
            <FlexContainer>
              <Image />
              <Article>
                <Title />
                <Text />
              </Article>
            </FlexContainer>
          </BoxItem>
        </RightToLeft>)
      }
    </div>
  );
}

export default RightToLeftComponent;
