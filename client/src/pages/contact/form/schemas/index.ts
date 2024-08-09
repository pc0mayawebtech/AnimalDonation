import { string, object, } from 'yup';

export const EmailRegEx = /^\w+([.-]?\w+)@\w+([.-]?\w+)(\.\w{2,3})+$/;
export const numberRegEx = /^[6-9]{1}[0-9]{9}/;

export const signUpSchema = object({
    name: string().min(3, 'Name is Too Short').required('Please Enter Your Name'),
    email: string().email('Invalid Email').required('Please Enter Your Email').matches(EmailRegEx, 'Please Enter Valid Email'),
    subject: string().required('Please Enter Your Name'),
    yourMessage: string().required('Please Enter Your Message'),
})