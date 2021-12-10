import { Button } from 'antd'
import Header from 'components/molecules/Header'
import * as S from './styles'

function Goals() {
  return (
    <S.Container>
      {/* <Header /> */}
      <S.Body>
        <S.ListText>
          <S.TextGroup>
            <S.Title>Parar de fazer</S.Title>
            <S.Description>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
              similique molestiae nesciunt corporis pariatur perferendis ipsum
              tempore, quae sit aspernatur beatae optio eos recusandae vitae
              labore dolores? Itaque, reiciendis quasi.
            </S.Description>
          </S.TextGroup>
          <S.TextGroup>
            <S.Title>Fazer menos</S.Title>
            <S.Description>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
              similique molestiae nesciunt corporis pariatur perferendis ipsum
              tempore, quae sit aspernatur beatae optio eos recusandae vitae
              labore dolores? Itaque, reiciendis quasi.
            </S.Description>
          </S.TextGroup>
          <S.TextGroup>
            <S.Title>Continuar fazendo</S.Title>
            <S.Description>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
              similique molestiae nesciunt corporis pariatur perferendis ipsum
              tempore, quae sit aspernatur beatae optio eos recusandae vitae
              labore dolores? Itaque, reiciendis quasi.
            </S.Description>
          </S.TextGroup>
          <S.TextGroup>
            <S.Title>Fazer mais</S.Title>
            <S.Description>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
              similique molestiae nesciunt corporis pariatur perferendis ipsum
              tempore, quae sit aspernatur beatae optio eos recusandae vitae
              labore dolores? Itaque, reiciendis quasi.
            </S.Description>
          </S.TextGroup>
          <S.TextGroup>
            <S.Title>Começar a fazer</S.Title>
            <S.Description>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
              similique molestiae nesciunt corporis pariatur perferendis ipsum
              tempore, quae sit aspernatur beatae optio eos recusandae vitae
              labore dolores? Itaque, reiciendis quasi.
            </S.Description>
          </S.TextGroup>
        </S.ListText>
        <S.AreaText>
          <S.Label>Qual o nosso objetivo?</S.Label>
          <S.TextArea />
          <S.ButtonArea>
            <Button type="primary">Finalizar</Button>
          </S.ButtonArea>
        </S.AreaText>
      </S.Body>
    </S.Container>
  )
}

export default Goals
