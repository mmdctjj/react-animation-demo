import { RightToLeft, Scale } from '../animations';
import { Article, Background, BoxItem, FlexContainer, Image, MiniIcon, Text, Title } from '../styles';

function RightToLeftAndScaleComponent() {
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
        new Array(5).fill(null).map((_, idx) => <Scale key={idx} index={idx + 3}>
          <RightToLeft index={idx + 3}>
            <BoxItem>
              <FlexContainer>
                <Image />
                <Article>
                  <Title />
                  <Text />
                </Article>
              </FlexContainer>
            </BoxItem>
          </RightToLeft>
        </Scale>)
      }
    </div>
  );
}

export default RightToLeftAndScaleComponent;
