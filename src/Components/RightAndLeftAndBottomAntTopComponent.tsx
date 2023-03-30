import { BottomToTop, LeftToRight, RightToLeft } from '../animations';
import { Article, Background, BoxItem, FlexContainer, Image, MiniIcon, Text, Title } from '../styles';

function RightAndLeftAndBottomAntTopComponent() {

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
            <BottomToTop key={idx} index={idx + 3} duration={300} delay={50}>
              <RightToLeft index={idx + 3} duration={300} delay={50}>
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
            </BottomToTop>
          )
          : (
            <BottomToTop key={idx} index={idx + 3} duration={300} delay={50}>
              <LeftToRight index={idx + 3} duration={300} delay={50}>
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
            </BottomToTop>
          )
        )
      }
    </div>
  );
}

export default RightAndLeftAndBottomAntTopComponent;
