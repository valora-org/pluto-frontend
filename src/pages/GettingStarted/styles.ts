import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: #1c1c1e;
`

export const Title = styled.h1`
  text-align: center;
  color: #ffffff;
`

export const Logo = styled.div`
  width: 100%;
  max-width: 200px;
  height: 200px;
  border-radius: 6px;
  background-image: url('/logo.png');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`

export const Content = styled.div`
  width: 100%;
  margin-top: 20px;
  max-width: 500px;
  height: 300px;
`
export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const Field = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px 0;
`

export const Label = styled.label`
  color: #ffffff;
`
