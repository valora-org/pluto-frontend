import styled from 'styled-components'

export const Container = styled.div``

export const Body = styled.div`
  width: 100%;
  height: 100vh;
  overflow: hidden auto;
  padding: 20px;
  display: flex;
  flex-direction: column;
  background: #1c1c1e;
  color: white;
`

export const Title = styled.h1`
  text-align: center;
  color: white;
`

export const Cards = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`

export const CardVote = styled.div<{ active: boolean }>`
  width: 300px;
  padding: 15px;
  min-height: 100px;
  border: ${({ active }) =>
    active
      ? '1px solid rgba(123, 122, 205, 1)'
      : '1px solid rgba(123, 122, 205, 0.2)'};
  border-radius: 7px;
`
export const Descriptions = styled.p`
  color: white;
`

export const Votes = styled.div`
  width: 100%;
  display: flex;
  gap: 0 7px;
`

export const Cicle = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 1px solid rgb(123, 122, 205);
  justify-content: center;
  align-items: center;
  display: flex;
  font-size: 15px;
`
