import Card from 'components/atoms/Card'
import * as S from './styles'
import { Controller } from 'react-hook-form'
import { useState } from 'react'
import { v4 } from 'uuid'

type ColumnTypes = {
  title: string
  name: string
  control: any
}

function Column({ title, name, control }: ColumnTypes) {
  const [cards, setCards] = useState<any>([])
  const [update, setUpdate] = useState(false)

  const handleAdd = () => {
    setCards((_last: any) => [
      ..._last,
      {
        id: v4()
      }
    ])
  }

  const handleClose = (id: string) => {
    const index = cards.findIndex((card: any) => card.id === id)

    cards.splice(index, 1)

    setCards(cards)

    setUpdate(!update)
  }

  return (
    <S.Container>
      <S.Title>{title}</S.Title>
      <S.Content>
        {cards.map((card: any, index: string) => (
          <Controller
            key={card.id}
            render={({ onChange }) => (
              <Card
                onChange={(value) => onChange(value)}
                onClose={(id) => handleClose(id)}
                id={card.id}
              />
            )}
            name={`${name}[${index}]`}
            control={control}
          />
        ))}
      </S.Content>
      <S.Footer onClick={() => handleAdd()}>
        <S.Icon />
      </S.Footer>
    </S.Container>
  )
}

export default Column
