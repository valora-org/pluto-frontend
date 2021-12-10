import Header from 'components/molecules/Header'
import { useState } from 'react'
import { v4 } from 'uuid'
import * as S from './styles'

function Votes() {
  const [update, setUpdate] = useState(false)
  const [cards, setCards] = useState([
    {
      id: v4(),
      active: false
    },
    {
      id: v4(),
      active: false
    },
    {
      id: v4(),
      active: false
    },
    {
      id: v4(),
      active: false
    },
    {
      id: v4(),
      active: false
    },
    {
      id: v4(),
      active: false
    }
  ])

  const handleActive = (id: string) => {
    const index = cards.findIndex((card) => card.id === id)

    cards[index].active = !cards[index].active

    setCards(cards)

    setUpdate(!update)
  }

  return (
    <S.Container>
      <S.Body>
        <S.Title>Parar de fazer</S.Title>
        <S.Cards>
          {cards.map((card) => (
            <S.CardVote
              onClick={() => handleActive(card.id)}
              active={card.active}
              key={card.id}
            >
              <S.Descriptions>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
                inventore sit odio beatae temporibus doloremque dolore quia
                laboriosam ut porro fugit quo illo repudiandae corporis,
                perferendis, esse molestias repellendus rerum.
              </S.Descriptions>
              <S.Votes>
                <S.Cicle title="Douglas">D</S.Cicle>
                <S.Cicle>C</S.Cicle>
                <S.Cicle>F</S.Cicle>
                <S.Cicle>C</S.Cicle>
                <S.Cicle>DF</S.Cicle>
              </S.Votes>
            </S.CardVote>
          ))}
        </S.Cards>
      </S.Body>
    </S.Container>
  )
}

export default Votes
