import styled from "@emotion/styled";

export const StatSection = styled.section`
    background-color: #dfd1d1;
    padding: 30px;    
    margin: 0 auto;
`
export const Title = styled.h2`
    margin: 0 auto 0;
    padding: 30px 0;
    width: 350px;
    background-color: #fff;
    text-align: center;
    justify-content: center;
    text-transform: uppercase;
    color: #5c5959;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
`
export const StatList = styled.ul`
  width: 350px;
  display: flex;
  margin: 0 auto 0;
  padding: 0;
  align-items: center;
  justify-content: center;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
`
export const StatItem = styled.li`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;  
  padding: 10px;

  &:first-child{
    border-bottom-left-radius: 10px;
  }

  &:last-child {    
    border-bottom-right-radius: 10px;
  }
`
export const StatLabel = styled.span`
font-size: 16px;
color: #ffffff;
`
export const StatPercentage = styled.span`
font-size: 20px;
color: #ffffff
`