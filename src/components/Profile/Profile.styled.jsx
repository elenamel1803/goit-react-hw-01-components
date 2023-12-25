import styled from "@emotion/styled";

export const ProfileWrap = styled.div`
    background-color: #dfd1d1;
    padding: 30px;
`
export const Description = styled.div`
    background-color: #ffffff;
    padding: 30px 0;
    margin: 0 auto;
    width: 350px;
    justify-content: center;
    text-align: center;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
`
export const Avatar = styled.img`
    display: block;  
    width: 150px;
    border-radius: 50%;
    background-color:  #e6dfdf;
    margin: 0 auto;
`
export const Name = styled.p`
    font-size: 22px;
  line-height: 1.62;
  font-weight: bold;
  color: #000000;
    margin: 20px auto 0; 
`
export const Text = styled.p`
  margin: 10px 0 0;
  font-size: 16px;
  line-height: 1.58;
  color: #a3a1a1;
`
export const StatsList = styled.ul`
  background-color: #f8eeee;
  width: 350px;
  display: flex;
  margin: 0 auto;
  padding: 0;
  align-items: center;
  justify-content: center;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
`
export const StatsItem= styled.li`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;  
  padding: 10px;
  border-top: 1px solid #c5c5c7;
      :not(:last-child) {
            border-right: 1px solid #c5c5c7;
                                            }
      :not(:last-child) span {
            border-right: none;
                                }
`
export const SpanLabel = styled.span`
  display: flex;
  font-size: 16px;
  line-height: 1.62;
  text-align: center; 
  justify-content: center; 
  color: #a3a1a1;
`
export const SpanQuantity = styled.span`
  text-align: center;
  font-size: 16px;
  line-height: 1.58;
  font-weight: bold;
  margin-top: 10px; 
`