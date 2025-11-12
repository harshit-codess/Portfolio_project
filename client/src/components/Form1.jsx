import React from 'react'
import { useForm } from "react-hook-form"

function Form1() {
    const {
        register,
        handleSubmit,
        setError,
        watch,
        formState: { errors, isSubmitting },
    } = useForm()

    const delay = (d) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve();
            }, d * 1000)
        })
    }

    const onSubmit = async (data) => {
        await delay(4);
        console.log(data);
        if(data.name !== "harshit") {
            setError("myform", { type: "custom", message: "Your form is not in good order because creadintials are invalid"})
        }
    } 

    return (
        <div>
            {isSubmitting &&  <div>loading..</div>}
            <form onSubmit={handleSubmit(onSubmit)}>
                <input type="text"
                    {...register("name", { required: true })}
                    placeholder="Enter the name"
                    className='m-5 border-2 border-white rounded' />
                {errors.name && <span className='text-red-500'>There is some error in username</span>}
                <br />
                <input type="emailt"
                    {...register("email", { required: {value: true, message: "This field is required"}, minLength: {value : 3, message: "min length is 3"}, maxlength: {value : 30, message: "max length is 30"} })}
                    placeholder="Enter the email"
                    className='m-5 border-2 border-white rounded'
                />
                {errors.email && <span className='text-red-500'>{errors.email.message}</span>}
                <br />
                <input type="tel" id="phone"
                    {...register("phone", { required: true })}
                    placeholder="Enter the phone no."
                    className='m-5 border-2 border-white rounded'
                />
                <br />
                <textarea name="message"
                    {...register("message", { required: true })}
                    placeholder='Enter the message'
                    className='m-5 border-2 border-white rounded'
                ></textarea>
                <br />
                <input disabled={isSubmitting} type='submit' value={isSubmitting ? "Submitting" : "Submit"} className='m-5 border-2 border-white rounded' />
                {errors.myform && <span className='text-red-500'>{errors.myform.message}</span>}
            </form>
        </div>
    )
}

export default Form1
