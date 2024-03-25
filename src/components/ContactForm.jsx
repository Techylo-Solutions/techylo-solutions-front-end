import { useState } from 'react';
import {useForm} from 'react-hook-form'
import axios from 'axios'

const ContactForm = () => {

    const {register, handleSubmit, formState: {errors}} = useForm();
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    
    const onSubmit = async (data) => {
        console.log('Form Data:', data);   
        const formData = new FormData()
        formData.append('fname', data.fname)
        formData.append('lname', data.lname)
        formData.append('email', data.email)
        formData.append('message', data.message)

        try{
            const response = await axios.post('http://localhost:8084/sendMessage', formData, {
                headers:{
                    'Content-Type': 'application/json'
                }
            })
            if (response.status === 200){
                setSuccessMessage('Message sent succesfully.')
                setErrorMessage('')
            }
            else{
                setSuccessMessage('')
                setErrorMessage('Failed to send the message. Try again.')
            }
        }

        catch (error){
            console.error("Error while submitting the form: ", error)
            setSuccessMessage('')
            setErrorMessage('Failed to send the message. Try again.')
        }
    }
    return(
        <div className='flex flex-col shadow-[0_10px_50px_rgba(79,217,69,0.2)] rounded-3xl h-5/6 w-2/3 items-center justify-center'>
            <form 
                onSubmit= {handleSubmit(onSubmit)}
                className="flex flex-col"
            >
            <h1 className='text-3xl font-semibold'>Contact us</h1>
            <input maxLength={50} {...register('fname', {required: 'Please enter your first name'})} className="border border-gray-400 w-96 h-8 rounded-md pl-2 mt-4 focus:" type="text" placeholder="First Name *" />
            {errors?.fname && <p className='text-red-600'>{errors.fname.message}</p>}
            <input maxLength={50} {...register('lname', {required: 'Please enter your last name'})} className="border border-gray-400 w-96 h-8 rounded-md pl-2 mt-4" type="text" placeholder="Last Name *" />
            {errors?.fname && <p className='text-red-600'>{errors.lname.message}</p>}
            <input maxLength={320} {...register('email', {required: 'Please enter your email', pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i})} className="border border-gray-400 w-96 h-8 rounded-md pl-2 mt-4" type="text" placeholder="Email Address *" />
            {errors?.email?.type === 'required' && <p className='text-red-600'>{errors.email.message}</p>}
            {errors?.email?.type === 'pattern' && <p className='text-red-600'>Please enter a valid email</p>}
            <textarea maxLength={250} {...register('message', {required: 'Please type a message'})} type='text' placeholder='Type a message * (max 250 characters)' className="border border-gray-400 w-96 h-48 rounded-md pl-2 mt-4 resize-none" />
            {errors?.message && <p className='text-red-600'>{errors.message.message}</p>}
            <input type="submit" value="Send message" disabled={successMessage !== ''} className='w-36 h-8 bg-black text-white transition-colors duration-300 ease-in-out apply-now-button rounded-lg hover:bg-bluetheme cursor-pointer mt-6' />
        
            {successMessage && <p className='text-green-600 mt-4'>{successMessage}</p>}
            {errorMessage && <p className='text-red-600 mt-4'>{errorMessage}</p>}

            </form>
        </div>
        
    )
}

export default ContactForm;