import styled from "styled-components"

export const BoxItem = styled.div`
  height: 80px;
  width: calc(100% - 20px);
  margin: 10px;
  padding: 10px;
  }
`

export const Background = styled.div`
  height: 130px;
  width: calc(100% - 20px);
  margin: 10px;
  background: #cae5e7;
  margin: 10px;
  margin-top: 0px;
  border-radius: 10px;
`
export const FlexContainer = styled.div<{align?: string}>`
  display: flex;
  justify-content: ${props => props.align ?? 'space-between'};
  width: calc(100% - 20px);
`

export const Image = styled.div`
  width: 110px;
  height: 80px;
  background: #cae5e7;
  border-radius: 10px;
`

export const MiniIcon = styled.div`
  width: 60px;
  height: 60px;
  background: #cae5e7;
  border-radius: 10px;
`

export const Title = styled.div`
  width: 60%;
  height: 30px;
  background: #99ced6;
  border-radius: 10px;
`

export const Text = styled.div`
  width: 100%;
  height: 30px;
  background: #cae5e7;
  border-radius: 10px;
  margin-top: 20px;
`

export const Article = styled.div`
  width: 100%;
  margin: 0 0 0 20px;
`

export const IndexContainer = styled.div`
  border: 1px solid #ddd;
  width: 200px;
  height: 300px;
  margin: 30px;
  margin-top: 60px;
  cursor: pointer;
  background: #99ced6;
  color: #fff;
  line-height: 300px;
  text-align: center;
  font-size: 30px;
  border-radius: 15px;
`