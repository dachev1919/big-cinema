import React, { ChangeEvent, FC, useState } from 'react';
import Layout from '@/common/components/layout/Layout';
import Image from 'next/image';
import loginBanner from '@/common/assets/images/login-banner.png';
import styles from './Login.module.scss';
import { SubmitHandler, useForm } from 'react-hook-form';
import useAuth from "@/hooks/useAuth";

interface Inputs {
	email: string;
	password: string;
}

interface ILoginProps {}

const Login: FC<ILoginProps> = () => {
	const [login, setLogin] = useState(false);
	const {signUp, signIn} = useAuth();

	const {
		register,
		handleSubmit,
		watch,
		formState: { errors }
	} = useForm<Inputs>();

	const onSubmitHandler: SubmitHandler<Inputs> = async ({email, password}) => {
		if (login) {
			await signIn(email, password);
		} else {
			await signUp(email, password);
		}
	}

	return (
		<Layout
			heightContent={true}
			accountHidden={true}
			menuHidden={true}
			padding={false}
			title='Login'
			description='Login page description'
		>
			<div className={styles.login}>
				<Image
					className={`${styles.banner}`}
					width={2000}
					height={1125}
					src={loginBanner}
					alt='login banner'
				/>
				<form className='form' onSubmit={handleSubmit(onSubmitHandler)}>
					<h1 className='form-title'>Sign In</h1>
					<div className='form-box'>
						<label className='form-input-label'>
							<input
								type='email'
								placeholder='Email'
								className='form-input'
								{...register('email', { required: true })}
							/>
							{errors.email && (
								<p className='form-error'>Please enter a valid email.</p>
							)}
						</label>
						<label className='form-input-label'>
							<input
								type='password'
								placeholder='Password'
								className='form-input'
								{...register('password', { required: true })}
							/>
							{errors.password && (
								<p className='form-error'>Your password must contain between 4 and 60 characters.</p>
							)}
						</label>
					</div>
					<button className='form-button' onClick={() => setLogin(true)}>
						Sign In
					</button>
					<div className='form-footer'>
						New to Cinema?
						<button className='form-button-new' onClick={() => setLogin(false)}>Sign up now</button>
					</div>
				</form>
			</div>
		</Layout>
	);
};

export default Login;
