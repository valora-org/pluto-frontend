import { Button } from 'antd'
import Column from 'components/molecules/Column'
import { useForm } from 'react-hook-form'
import * as S from './styles'

function Columns() {
  const { handleSubmit, control } = useForm()

  const onSubmit = (data: any) => {
    console.log({ data })
  }

  return (
    <S.Form onSubmit={handleSubmit(onSubmit)}>
      <S.Columns>
        <Column title="Parar de fazer" name="stop-to-do" control={control} />
        <Button htmlType="submit">finalizar</Button>
      </S.Columns>
    </S.Form>
  )
}

export default Columns
