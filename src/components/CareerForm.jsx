import { useState } from 'react';
import {useForm} from 'react-hook-form'
import axios from 'axios'

const CareerForm = ({careers}) => {

    const {register, handleSubmit, formState: {errors}} = useForm();
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    
    

        try{
            const response = await axios.post('http://localhost:8080/sendApplication', formData, {
                headers:{
                    'Content-Type': 'multipart/form-data'
                }
            })
            if (response.status === 200){
                setSuccessMessage('Successfully submitted the application.')
                setErrorMessage('')
            }
            else{
                setSuccessMessage('')
                setErrorMessage('Failed to submit the application. Try again.')
            }
        }

        catch (error){
            console.error("Error while submitting the form: ", error)
            setSuccessMessage('')
            setErrorMessage('Failed to submit the application. Try again.')
        }
    }
    return(
        <div className='flex flex-col shadow-[0_10px_50px_rgba(79,217,69,0.2)] rounded-3xl h-3/4 w-1/3 items-center justify-center'>
            <form 
                onSubmit= {handleSubmit(onSubmit)}
                className="flex flex-col"
            >
            <h1 className='text-3xl font-semibold mb-8'>Join us</h1>
            <select {...register('career', {required: 'Please select a position'})} className="border border-gray-400 w-96 h-8 rounded-md pl-2" placeholder="Choose position">
                <option value="">Select position</option>
                {careers.map((career, index) => (
                    <option key={index} value={career.job_id}>{career.job_title} ({career.job_type})</option>
                ))}
            </select>
            {errors?.career && <p className='text-red-600'>{errors.career.message}</p>}
            <input {...register('fname', {required: 'Please enter your first name'})} className="border border-gray-400 w-96 h-8 rounded-md pl-2 mt-4" type="text" placeholder="First Name *" />
            {errors?.fname && <p className='text-red-600'>{errors.fname.message}</p>}
            <input {...register('lname', {required: 'Please enter your last name'})} className="border border-gray-400 w-96 h-8 rounded-md pl-2 mt-4" type="text" placeholder="Last Name *" />
            {errors?.fname && <p className='text-red-600'>{errors.lname.message}</p>}
            <input {...register('email', {required: 'Please enter your email', pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i})} className="border border-gray-400 w-96 h-8 rounded-md pl-2 mt-4" type="text" placeholder="Email Address *" />
            {errors?.email?.type === 'required' && <p className='text-red-600'>{errors.email.message}</p>}
            {errors?.email?.type === 'pattern' && <p className='text-red-600'>Please enter a valid email</p>}
            <input {...register('file', {required: 'Please upload your CV', validate: validateUploadedFile})} type='file' accept='application/pdf' className='mt-4' />
            <p>*Upload PDF only</p>
            {errors?.file && <p className='text-red-600'>{errors.file.message}</p>}
            <input type="submit" value="Apply" disabled={successMessage !== ''} className='w-28 h-8 bg-black text-white transition-colors duration-300 ease-in-out apply-now-button rounded-lg hover:bg-bluetheme cursor-pointer mt-6' />
        
            {successMessage && <p className='text-green-600 mt-4'>{successMessage}</p>}
            {errorMessage && <p className='text-red-600 mt-4'>{errorMessage}</p>}

        </form>
        </div>
        
    )
}

const validateUploadedFile = (value) => {
    if(!value || !value[0]){
        return 'Please upload your CV'
    }

    const pdfType = ['application/pdf']
    const fileType = value[0]?.type;

    if(!pdfType.includes(fileType)){
        return 'Please upload your CV in PDF format'
    }
}

export default CareerForm;