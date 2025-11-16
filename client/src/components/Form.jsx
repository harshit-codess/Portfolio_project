import React from 'react';
import { useState } from 'react';
import useOnScreen from '../useOnScreen';


function Form() {
    const [form, setForm] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
    });
    const [ref, isVisible] = useOnScreen();


    const handleSubmit = async (event) => {
        event.preventDefault();
        // console.log("Form is submitted");
        setForm({
            name: "",
            email: "",
            phone: "",
            message: "",
        })

        try {
            const response = await fetch("http://localhost:3000/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(form),
            });

            // const result = await response.json()
            // console.log(result);
        } catch (error) {
            console.log("form", error)
        }


    }

    function handleChange(event) {
        const { name, value } = event.target;

        setForm((prevForm) => (
            {
                ...prevForm,
                [name]: value,
            }
        ));
    }

    return (
        <div ref={ref} className={`flex items-center justify-center mb-20 fade-up ${isVisible ? "show" : ""}`} >
            
            <form onSubmit={handleSubmit} className='W-full sm:w-130 text-center text-white shadow-2xl bg-[#4f545c] h-110  contact-form mt-10 flex flex-col flex-wrap items-center rounded-md  m:mr-100'>
                <h1 className='text-2xl text-[#F3C069]'>Get in touch form</h1>
                <input type="text" id="name"
                    name='name'
                    placeholder="Enter the name"
                    value={form.name}
                    onChange={handleChange}
                    className='m-5 border-2 border-white w-80 sm:w-100 h-10 rounded form-input'
                    required />

                <input type="emailt" id="email"
                    name='email'
                    placeholder="Enter the email"
                    value={form.email}
                    onChange={handleChange}
                    className='m-5 border-2 border-white rounded  w-80 sm:w-100 h-10 form-input'
                    size={30} pattern='.+@gmail\.com' required />

                <input type="tel" id="phone"
                    name='phone'
                    placeholder="Enter the phone no."
                    value={form.phone}
                    onChange={handleChange}
                    className='m-5 border-2 border-white rounded  w-80 sm:w-100 h-10 form-input'
                    minLength={10}
                    maxLength={15}
                    required />

                <textarea name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder='Enter the message'
                    className='m-5 border-2 border-white rounded  w-80 sm:w-100 form-input'
                    maxLength={100} id='message' required></textarea>

                <input type='submit' value="Submit" className='m-5 border-2 border-white rounded w-25 text-center bg-[#F3C069] form-btn' />
            </form>
        </div>
    )
}

export default Form;
