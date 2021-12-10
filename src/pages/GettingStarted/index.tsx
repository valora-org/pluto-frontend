import * as S from './styles'
import { Input, Button } from 'antd'
import { useForm, Controller } from 'react-hook-form'

function GettingStarted() {
  const { handleSubmit, control } = useForm()

  const onSubmit = (data: any) => {
    console.log({ data })
  }

  return (
    <S.Container>
      <S.Logo />
      <S.Content>
        <S.Title>Crie uma nova retrospectiva!</S.Title>
        <S.Form onSubmit={handleSubmit(onSubmit)}>
          <S.Field>
            <S.Label>Time</S.Label>
            <Controller
              as={<Input placeholder="Digite o nome do time" />}
              name="team"
              control={control}
            />
          </S.Field>
          <S.Field>
            <S.Label>Usuário</S.Label>
            <Controller
              as={<Input placeholder="Digite seu usuário" />}
              name="username"
              control={control}
            />
          </S.Field>

          <Button type="primary" style={{ marginTop: 10 }}>
            Entrar
          </Button>
        </S.Form>
      </S.Content>
    </S.Container>
  )
}

export default GettingStarted
