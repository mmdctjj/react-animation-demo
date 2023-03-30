import { LeftToRight } from '../animations';
import { Article, Background, BoxItem, FlexContainer, Image, MiniIcon, Text, Title } from '../styles';

function LeftToRightComponent() {
  return (
    <div>

      <div>&nbsp;</div>

      <LeftToRight>
        <Background />
      </LeftToRight>

      <BoxItem>

        <FlexContainer>
          { new Array(4).fill(null).map((_, idx) => <LeftToRight key={idx} index={idx + 1}><MiniIcon /></LeftToRight>)} 
        </FlexContainer>

      </BoxItem>
      {
        new Array(5).fill(null).map((_, idx) => <LeftToRight key={idx} index={idx + 3}>
          <BoxItem>
            <FlexContainer>
              <Image />
              <Article>
                <Title />
                <Text />
              </Article>
            </FlexContainer>
          </BoxItem>
        </LeftToRight>)
      }
    </div>
  );
}

export default LeftToRightComponent;
