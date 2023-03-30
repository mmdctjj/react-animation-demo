import styled, { keyframes } from "styled-components";

export interface AnimationProps {
  index?: number
  duration?: number
  delay?: number
}

const bottomToTop = keyframes`
  0% {
    transform: translateY(50%);
  }

  80% {
    transform: translateY(-10%);
  }

  100% {
    transform: translateY(0);
    opacity: 1
  }
`

export const BottomToTop = styled.div<AnimationProps>`
  transform: translateY(50%);
  opacity: 0;
  animation: ${bottomToTop} ${props => props.duration ?? 300}ms;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
  animation-delay: ${props => (props.index ?? 0) * (props.delay ?? 150)}ms
`

const rightToLeft = keyframes`
  0% {
    transform: translateX(50%);
  }

  80% {
    transform: translateX(-10%);
  }

  100% {
    transform: translateX(0);
    opacity: 1
  }
`

export const RightToLeft = styled.div<AnimationProps>`
  transform: translateX(50%);
  opacity: 0;
  animation: ${rightToLeft} ${props => props.duration ?? 300}ms;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
  animation-delay: ${props => (props.index ?? 0) * (props.delay ?? 150)}ms
`

const leftToRight = keyframes`
  0% {
    transform: translateX(-50%);
  }

  80% {
    transform: translateX(10%);
  }

  100% {
    transform: translateX(0%);
    opacity: 1
  }
`

export const LeftToRight = styled.div<AnimationProps>`
  transform: translateX(-100%);
  opacity: 0;
  animation: ${leftToRight} ${props => props.duration ?? 300}ms;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
  animation-delay: ${props => (props.index ?? 0) * (props.delay ?? 150)}ms
`

const topToBottom = keyframes`
  0% {
    transform: translateY(-50%);
  }

  80% {
    transform: translateY(10%);
  }

  100% {
    transform: translateY(0%);
    opacity: 1
  }
`

export const TopToBottom = styled.div<AnimationProps>`
  transform: translateY(-100%);
  opacity: 0;
  animation: ${topToBottom} ${props => props.duration ?? 300}ms;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
  animation-delay: ${props => (props.index ?? 0) * (props.delay ?? 150)}ms
`