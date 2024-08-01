import { SubmitHandler, useForm } from 'react-hook-form'
import styles from './Home.module.css'

const isSuccess = false

interface IFormState {
  name:string
  email:string
  text:string
}

function Home() {

  const {register,handleSubmit} = useForm<IFormState>()

  const onSubmit: SubmitHandler<IFormState> = (data) =>{
      console.log(data);
  }

  return (
    <div className={styles.wrapper}>
      <form onSubmit={handleSubmit(onSubmit)}>
      {isSuccess ? (
        <div className={styles.success}>Ваша заявка отправлена!</div>
      ) : (
        <>
          <h1>Нужна помощь оставь заявку</h1>
          <input  type="name" placeholder='Введите имя' {...register('name',{required:''})}/>
          <input type="email" placeholder='Введите E-mail' {...register('email',{required:''})}/>
          <input type="text" placeholder='Введите вашу проблему' {...register('text',{required:''})}/>
          <button>
            Отправить заявку
          </button>
          </>
      )}
      </form>
    </div>
  )
}

export default Home
