import { SubmitHandler, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import Title from '../components/Title/CustomTitle'
import CustomInput from '../components/Input/CustomInput'
import CustomButton from '../components/Button/CustomButton'
import Redirect from '../components/Redirect/CustomRedirect'
import { FormValuesLogIn, squemaLogIn } from '../schemas'
import './CustomLogInForm.css'

const CustomLogInForm = () => {
    const { control, handleSubmit, formState: { errors } } = useForm<FormValuesLogIn>({ resolver: zodResolver(squemaLogIn) });

    const onSubmit: SubmitHandler<FormValuesLogIn> = (data) => { console.log(data) };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className='form'>
            <Title label='Log In'/>
            <CustomInput name='email' label='Email' control={control} type='email' error={errors.email} placeholder="username@gmail.com" defaultValue=""/>
            <CustomInput name='password' label='Password' control={control} type='password' error={errors.password} placeholder="••••••••" defaultValue=""/>
            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                <CustomButton name='submit' type='submit' label='Log In'/>
            </div>
            <div style={{marginTop: 25}}>
                <Redirect label='Sign Up' description='Don&apos;t have an account?' href=''/>
            </div>
        </form>
    )
}

export default CustomLogInForm
