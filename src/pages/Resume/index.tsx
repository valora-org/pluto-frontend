import { Button } from 'antd'
import Header from 'components/molecules/Header'
import * as S from './styles'

function Resume() {
  return (
    <S.Container>
      {/* <Header /> */}
      <S.Body>
        <S.TitlePage>Retrospectiva de [time] em [date]</S.TitlePage>
        <S.GroupList>
          <S.ListText>
            <S.TextGroup>
              <S.Title>Objetivo</S.Title>
              <S.Description>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
                similique molestiae nesciunt corporis pariatur perferendis ipsum
                tempore, quae sit aspernatur beatae optio eos recusandae vitae
                labore dolores? Itaque, reiciendis quasi. Lorem ipsum dolor sit
                amet consectetur adipisicing elit. Nostrum similique molestiae
                nesciunt corporis pariatur perferendis ipsum tempore, quae sit
                aspernatur beatae optio eos recusandae vitae labore dolores?
                Itaque, reiciendis quasi. Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Nostrum similique molestiae nesciunt corporis
                pariatur perferendis ipsum tempore, quae sit aspernatur beatae
                optio eos recusandae vitae labore dolores? Itaque, reiciendis
                quasi. Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Nostrum similique molestiae nesciunt corporis pariatur
                perferendis ipsum tempore, quae sit aspernatur beatae optio eos
                recusandae vitae labore dolores? Itaque, reiciendis quasi.
              </S.Description>
            </S.TextGroup>
          </S.ListText>
          <S.ListText className="first-line">
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
        </S.GroupList>
        <S.Footer>
          <Button style={{ width: 400 }} type="primary">
            Exportar
          </Button>
        </S.Footer>
      </S.Body>
    </S.Container>
  )
}

export default Resume
