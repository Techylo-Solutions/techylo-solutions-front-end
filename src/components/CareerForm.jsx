import {useForm} from 'react-hook-form'


const CareerForm = () => {

    const {register, handleSubmit, formState: {errors}} = useForm();

    console.log(errors)

    return(
        <div className='flex flex-col shadow-[0_10px_50px_rgba(79,217,69,0.2)] rounded-3xl h-3/4 w-1/3 items-center justify-center'>
            <form 
            onSubmit= {handleSubmit((data) => {
                console.log(data)
            })}
            className="flex flex-col"

        >
            <h1 className='text-3xl font-semibold mb-8'>Join us</h1>
            <select {...register('career', {required: 'Please select a position'})} className="border border-gray-400 w-96 h-8 rounded-md pl-2" placeholder="Choose position">
                <option value="">Select position</option>
            </select>
            {errors?.career && <p className='text-red-600'>{errors.career.message}</p>}
            <input {...register('fname', {required: 'Please enter your first name'})} className="border border-gray-400 w-96 h-8 rounded-md pl-2 mt-4" type="text" placeholder="First Name *" />
            {errors?.fname && <p className='text-red-600'>{errors.fname.message}</p>}
            <input {...register('lname', {required: 'Please enter your last name'})} className="border border-gray-400 w-96 h-8 rounded-md pl-2 mt-4" type="text" placeholder="Last Name *" />
            {errors?.fname && <p className='text-red-600'>{errors.lname.message}</p>}
            <input {...register('email', {required: 'Please enter your email', pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i})} className="border border-gray-400 w-96 h-8 rounded-md pl-2 mt-4" type="text" placeholder="Email Address *" />
            {errors?.email?.type === 'required' && <p className='text-red-600'>{errors.email.message}</p>}
            {errors?.email?.type === 'pattern' && <p className='text-red-600'>Please enter a valid email</p>}
            <input {...register('file', {required: 'Please upload your CV'})} type='file'  accept = "application/pdf" className='mt-4' />
            <p>*Upload PDF only</p>
            {errors?.file && <p className='text-red-600'>{errors.file.message}</p>}
            <input type="submit" value="Apply" className='w-28 h-8 bg-black text-white transition-colors duration-300 ease-in-out apply-now-button rounded-lg hover:bg-bluetheme cursor-pointer mt-6' />
        </form>
        </div>
        
    )
}

export default CareerForm;