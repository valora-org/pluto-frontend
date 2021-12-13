import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100px;
  padding: 10px 30px 10px 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #242426;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.75);
`

export const Logo = styled.div`
  width: 150px;
  height: 70px;
  background-image: url('/logo.png');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: left;
`
export const RestTime = styled.div`
  width: fit-content;
  padding: 10px;
  border: 1px dotted #7b7acd;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0 10px;
  border-radius: 3px;
  color: #fff;
`

export const Label = styled.span`
  font-weight: 400;
  font-size: 20px;
`

export const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0px 20px;
`

export const Btns = styled.div`
  display: flex;
  gap: 0px 20px;
`
