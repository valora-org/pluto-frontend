import styled from 'styled-components'
import { FaTimes } from 'styles/icons'

export const Container = styled.div`
  width: 100%;
  height: fit-content;
  background: #58589b;
  padding: 10px;
  border-radius: 5px;
`

export const Icon = styled(FaTimes)`
  width: 15px;
  height: 15px;
  color: red;
  cursor: pointer;
`

export const Input = styled.div`
  outline: none;
  border: none;
  width: 100%;
  color: white;
  min-height: 50px;

  ::before {
    content: attr(placeholder);
    color: #c9c9c9;
  }

  :focus::before {
    content: '';
  }
`

export const Header = styled.div`
  width: 100%;
  height: 15px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 0 10px;
`
