import {useForm} from 'react-hook-form'

const CareerForm = () => {

    const {register, handleSubmit, formState: {errors}} = useForm();

    console.log(errors)

    return(
        <form 
            onSubmit= {handleSubmit((data) => {
                console.log(data)
            })}
            className="shadow-xl rounded-3xl flex flex-col w-1/2"

        >
            <input {...register('fname', {required: 'Please enter your first name'})} className="border border-black" type="text" placeholder="First Name *" />
            {errors?.fname && <p className='text-red-600'>{errors.fname.message}</p>}
            <input {...register('lname', {required: 'Please enter your last name'})} className="border border-black" type="text" placeholder="Last Name *" />
            {errors?.fname && <p className='text-red-600'>{errors.lname.message}</p>}
            <input {...register('email', {required: 'Please enter your email address'})} className="border border-black" type="text" placeholder="Email Address *" />
            {errors?.fname && <p className='text-red-600'>{errors.email.message}</p>}
            <input type="submit" />
        </form>
    )
}

export default CareerForm;