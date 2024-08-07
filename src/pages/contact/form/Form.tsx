import './Form.css';
import { toast, ToastContainer } from 'react-toastify';
import { useFormik } from 'formik';
import { signUpSchema } from './schemas/index.ts';
import "react-toastify/dist/ReactToastify.css";
import { db } from '../../../firebase.config.ts';
import { collection, addDoc } from 'firebase/firestore';

const Form = () => {
    const dbref = collection(db, 'DonationForm');
    const initialValues = {
        name: "",
        subject: "",
        email: "",
        yourMessage: "",
    };

    const notifySuccess = () => {
        toast.success("Will get back to you", {
            position: "top-right"
        });
    };

    const notifyError = () => {
        toast.error("Failed to submit the form", {
            position: "top-right"
        });
    };

    const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
        initialValues: initialValues,
        validationSchema: signUpSchema,
        onSubmit: async (values, { resetForm }) => {
            try {
                await addDoc(dbref, { Name: values.name, Subject: values.subject, Email: values.email, YourMessage: values.yourMessage });
                notifySuccess();
                resetForm();
            } catch (error) {
                notifyError();
            }
        },
    });

    return (
        <>
            <form action="./action.php" method='post' onSubmit={handleSubmit}>
                <div className="row mb-4">
                    <div className="col-lg-6 mb-4">
                        <div className="formWrapper">
                            <input type="text" name="name" value={values.name} id="name" placeholder='Enter Name' className='formControl' onChange={handleChange} onBlur={handleBlur} />
                            {errors.name && touched.name ? (<p className='formError'>{errors.name}</p>) : null}
                        </div>
                    </div>
                    <div className="col-lg-6 mb-0">
                        <div className="formWrapper">
                            <input type="email" name="email" value={values.email} id="email" placeholder='Enter Email' className='formControl' onChange={handleChange} onBlur={handleBlur} />
                            {errors.email && touched.email ? (<p className='formError'>{errors.email}</p>) : null}
                        </div>
                    </div>
                </div>
                <div className="row mb-4">
                    <div className="col-lg-12">
                        <div className="formWrapper">
                            <input type="text" name="subject" value={values.subject} id="subject" placeholder='Enter Subject' className='formControl' onChange={handleChange} onBlur={handleBlur} />
                            {errors.subject && touched.subject ? (<p className='formError'>{errors.subject}</p>) : null}
                        </div>
                    </div>
                </div>
                <div className="row mb-4">
                    <div className="col-lg-12">
                        <div className="formWrapper">
                            <textarea name="yourMessage" id="message" value={values.yourMessage} className='formControl' rows={4} cols={4} placeholder='Your Message' onChange={handleChange} onBlur={handleBlur}></textarea>
                            {errors.yourMessage && touched.yourMessage ? (<p className='formError'>{errors.yourMessage}</p>) : null}
                        </div>
                    </div>
                </div>
                <div>
                    <button type='submit' className='btnSubmit'>Send Message</button>
                </div>
                <ToastContainer />
            </form>
        </>
    )
}

export default Form;
