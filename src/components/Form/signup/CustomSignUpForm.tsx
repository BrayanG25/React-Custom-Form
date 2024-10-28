import { SubmitHandler, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import Title from '../components/Title/CustomTitle'
import CustomInput from '../components/Input/CustomInput'
import CustomButton from '../components/Button/CustomButton'
import Redirect from '../components/Redirect/CustomRedirect'
import { FormValuesSignUp, squemaSignUp } from '../schemas'
import './CustomSignUpForm.css'

const CustomSignUpForm = () => {
    const { control, handleSubmit, formState: { errors } } = useForm<FormValuesSignUp>({ resolver: zodResolver(squemaSignUp) });

    const onSubmit: SubmitHandler<FormValuesSignUp> = (data) => { console.log(data) };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className='form'>
            <Title label='Sign Up'/>
            <CustomInput name='username' label='Username' control={control} type='text' error={errors.username} placeholder="Username" defaultValue=""/>
            <CustomInput name='email' label='Email' control={control} type='email' error={errors.email} placeholder="username@gmail.com" defaultValue=""/>
            <CustomInput name='password' label='Password' control={control} type='password' error={errors.password} placeholder="••••••••" defaultValue=""/>
            <CustomInput name='confirmPassword' label='Confirm password' control={control} type='password' error={errors.confirmPassword} placeholder="••••••••" defaultValue=""/>
            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                <CustomButton name='submit' type='submit' label='Sign Up'/>
            </div>
            <div style={{marginTop: 25}}>
                <Redirect label='Log In' description='Already have an account?' href=''/>
            </div>
        </form>
    )
}

export default CustomSignUpForm
