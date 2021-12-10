import styled from 'styled-components'

export const Container = styled.div``

export const Body = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 0 50px;
  padding: 20px;
  position: relative;
`

export const ListText = styled.div`
  width: 40%;
  height: fit-content;
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  gap: 15px 0;
  padding: 20px;
  margin-top: 40px;
`

export const TextGroup = styled.div`
  width: 100%;
  margin-bottom: 20px;
`

export const Title = styled.h2``

export const Description = styled.p`
  margin-top: 10px;
`

export const AreaText = styled.div`
  width: 40%;
  height: fit-content;
  margin-top: 40px;
  position: sticky;
  top: 20px;
`

export const Label = styled.h1``

export const TextArea = styled.textarea`
  height: 300px;
  resize: none;
  border-radius: 6px;
  padding: 5px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  width: 100%;
  outline: none;
`
export const ButtonArea = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`
