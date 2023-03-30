import { LeftToRight, RightToLeft } from '../animations';
import { Article, Background, BoxItem, FlexContainer, Image, MiniIcon, Text, Title } from '../styles';

function RightAndLeftComponent() {

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
        new Array(5).fill(null).map((_, idx) => idx % 2 === 0
          ? (
            <RightToLeft key={idx} index={idx + 3} duration={300} delay={50}>
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
          )
          : (
            <LeftToRight  key={idx} index={idx + 3} duration={300} delay={50}>
              <BoxItem>
                <FlexContainer>
                  <Image />
                  <Article>
                    <Title />
                    <Text />
                  </Article>
                </FlexContainer>
              </BoxItem>
            </LeftToRight>
          )
        )
      }
    </div>
  );
}

export default RightAndLeftComponent;
