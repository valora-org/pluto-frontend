import styled from 'styled-components'
import { IoMdAdd } from 'styles/icons'

export const Icon = styled(IoMdAdd)`
  width: 30px;
  height: 30px;
  color: #ccc;
`

export const Container = styled.div`
  min-width: 300px;
  height: calc(100vh - 150px);
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 7px;
  background: #242426;
  position: relative;
`

export const Footer = styled.div`
  width: 100%;
  height: 20px;
  position: absolute;
  background: #242426;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: 923;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  border-radius: 0 0 7px 7px;
  cursor: pointer;
`

export const Content = styled.div`
  width: 100%;
  height: calc(100vh - 230px);
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 10px 0px;
  overflow: hidden scroll;

  ::-webkit-scrollbar-thumb {
    background: transparent;
  }

  &:hover {
    ::-webkit-scrollbar-thumb {
      background: #7b7acd;
    }
  }

  ::-webkit-scrollbar {
    width: 5px;
  }

  ::-webkit-scrollbar-track {
    background: transparent;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #7b7acd;
  }
`

export const Card = styled.div`
  width: 100%;
  height: fit-content;
  background: #242426;
  padding: 10px;
  border-radius: 5px;
`
export const Title = styled.div`
  width: 100%;
  background: #242426;
  border-bottom: 1px dotted #7b7acd;
  color: white;
  border-radius: 7px 7px 0 0;
  padding: 10px;
`
