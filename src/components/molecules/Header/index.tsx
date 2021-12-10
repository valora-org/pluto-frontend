import React from 'react'
import { Button } from 'antd'
import * as S from './styles'
import Timer from 'components/atoms/Timer'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <S.Container>
      <S.Logo />
      <S.RestTime>
        <S.Label>Tempo restante: </S.Label>
        <Timer time="04:00" start={false} />
      </S.RestTime>

      <S.Buttons>
        <S.Btns>
          <Button type="dashed">Exportar dados</Button>
          <Button type="primary">Nova retrospectiva</Button>
        </S.Btns>
        <S.Btns>
          <Link to="/board">board</Link>
          <Link to="/vote">vote</Link>
          <Link to="/goal">goal</Link>
          <Link to="/resume">resume</Link>
        </S.Btns>
      </S.Buttons>
    </S.Container>
  )
}

export default Header
