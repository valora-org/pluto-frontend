import { useState } from 'react'
import * as S from './styles'

type CardTypes = {
  id: string
  onChange: (value: string, id: string) => void
  onClose: (id: string) => void
}

function Card({ onChange, onClose, id }: CardTypes) {
  const [value, setValue] = useState('')

  return (
    <S.Container>
      <S.Header>
        <S.Icon onClick={() => onClose(id)} />
      </S.Header>
      <S.Input
        onInput={(e: any) => {
          onChange(e.currentTarget.textContent, id)
          setValue(e.currentTarget.textContent)
        }}
        contentEditable
        placeholder={value !== '' ? '' : 'Digite aqui'}
      />
    </S.Container>
  )
}

export default Card
