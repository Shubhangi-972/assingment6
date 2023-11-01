import styled from 'styled-components'

export const ScoreContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-style: solid;
  border-color: #ffffff;
  background-color: transparent;
  width: 80%;
  background-color: #223a5f;
  padding: 10px;
  margin-top: 2%;
`

export const ScoreNameContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const ScoreName = styled.h1`
  color: white;
  font-size: 20px;
  font-family: 'Bree Serif';
  margin-top: 0px;
  @media screen and (max-width: 576px) {
    font-size: 14px;
  }
`
export const ScoreBoard = styled(ScoreNameContainer)`
  background-color: white;
  width: 15%;
  height: 100%;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 576px) {
    width: 25%;
  }
`
export const ScoreHeading = styled.p`
  color: #223a3f;
  font-size: 20px;
  @media screen and (max-width: 576px) {
    font-size: 16px;
  }
`
export const ScoreResult = styled.p`
  color: #223a3f;
  font-size: 42px;
  font-family: 'Roboto';
  @media screen and (max-width: 576px) {
    font-size: 24px;
    margin-top: 10px;
  }
`
