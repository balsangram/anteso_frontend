import * as Yup from 'yup';
import { Field, Form, Formik } from 'formik';
import { Link } from 'react-router-dom';
import { showMessage } from '../../../common/ShowMessage';

const AddEngineer = () => {
    const SubmittedForm = Yup.object().shape({
        name: Yup.string().required('Please fill the Field'),
        email: Yup.string().email('Invalid email').required('Please fill the Email'),
        phone: Yup.string()
            .matches(/^[0-9]{10}$/, 'Phone number must be exactly 10 digits')
            .required('Please fill the Field'),
        empId: Yup.string().required('Please fill the Field'),
        role: Yup.string().required('Please fill the Field'),
        tools: Yup.string().required('Please fill the Field'),
    });
    const submitForm = () => {
        showMessage('Form submitted successfully', 'success');
    };
    return (
        <>
            <ul className="flex space-x-2 rtl:space-x-reverse">
                <li>
                    <Link to="/" className="text-primary hover:underline">
                        Dashboard
                    </Link>
                </li>
                <li className="before:content-['/'] ltr:before:mr-2 rtl:before:ml-2">
                    <Link to="/admin/engineers" className="text-primary hover:underline">
                        <span>Engineers</span>
                    </Link>
                </li>
                <li className="before:content-['/'] ltr:before:mr-2 rtl:before:ml-2">
                    <span>Add</span>
                </li>
            </ul>
            <Formik
                initialValues={{
                    name: '',
                    email: '',
                    phone: '',
                    empId: '',
                    role: '',
                    tools: '',
                }}
                validationSchema={SubmittedForm}
                onSubmit={() => {}}
            >
                {({ errors, submitCount, touched }) => (
                    <Form className="space-y-5">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                            <div className={submitCount ? (errors.name ? 'has-error' : 'has-success') : ''}>
                                <label htmlFor="name">Name </label>
                                <Field name="name" type="text" id="name" placeholder="Enter Name" className="form-input" />
                                {submitCount ? errors.name ? <div className="text-danger mt-1">{errors.name}</div> : <div className="text-success mt-1">Looks Good!</div> : ''}
                            </div>
                            <div className={submitCount ? (errors.email ? 'has-error' : 'has-success') : ''}>
                                <label htmlFor="email">Email </label>
                                <Field name="email" type="text" id="email" placeholder="Enter Email Address" className="form-input" />
                                {submitCount ? errors.email ? <div className="text-danger mt-1">{errors.email}</div> : <div className="text-success mt-1">Looks Good!</div> : ''}
                            </div>
                            <div className={submitCount ? (errors.phone ? 'has-error' : 'has-success') : ''}>
                                <label htmlFor="phone">Phone </label>
                                <Field name="phone" type="number" id="phone" placeholder="Enter Phone Number" className="form-input" />
                                {submitCount ? errors.phone ? <div className="text-danger mt-1">{errors.phone}</div> : <div className="text-success mt-1">Looks Good!</div> : ''}
                            </div>
                            <div className={submitCount ? (errors.empId ? 'has-error' : 'has-success') : ''}>
                                <label htmlFor="empId">Employee ID </label>
                                <Field name="empId" type="text" id="empId" placeholder="Enter Emp ID" className="form-input" />
                                {submitCount ? errors.empId ? <div className="text-danger mt-1">{errors.empId}</div> : <div className="text-success mt-1">Looks Good!</div> : ''}
                            </div>
                            <div className={submitCount ? (errors.role ? 'has-error' : 'has-success') : ''}>
                                <label htmlFor="role">Role</label>
                                <Field as="select" name="role" className="form-select">
                                    <option value="" disabled>
                                        Open this select menu
                                    </option>
                                    <option value="Office Staff">Office Staff</option>
                                    <option value="Engineer">Engineer</option>
                                </Field>
                                {submitCount ? (
                                    errors.role ? (
                                        <div className=" text-danger mt-1">{errors.role}</div>
                                    ) : (
                                        <div className=" text-[#1abc9c] mt-1">Example valid custom select feedback</div>
                                    )
                                ) : (
                                    ''
                                )}
                            </div>
                            <div className={submitCount ? (errors.tools ? 'has-error' : 'has-success') : ''}>
                                <label htmlFor="tools">Tools </label>
                                <Field name="tools" type="text" id="tools" placeholder="Enter Tools" className="form-input" />
                                {submitCount ? errors.tools ? <div className="text-danger mt-1">{errors.tools}</div> : <div className="text-success mt-1">Looks Good!</div> : ''}
                            </div>
                        </div>
                        <button
                            type="submit"
                            className="btn btn-primary !mt-6"
                            onClick={() => {
                                if (touched.name && !errors.name) {
                                    submitForm();
                                }
                            }}
                        >
                            Submit Form
                        </button>
                    </Form>
                )}
            </Formik>
        </>
    );
};

export default AddEngineer;
