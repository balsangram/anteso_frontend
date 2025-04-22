import * as Yup from 'yup';
import { Field, Form, Formik } from 'formik';
import { Link } from 'react-router-dom';
import { showMessage } from '../../../common/ShowMessage';
import { clientsData } from '../../../../data';

const EditClient = () => {
    const SubmittedForm = Yup.object().shape({
        name: Yup.string().required('Please fill the Field'),
        email: Yup.string().email('Invalid email').required('Please fill the Email'),
        address: Yup.string().required('Please fill the Field'),
        phone: Yup.string()
            .matches(/^[0-9]{10}$/, 'Phone number must be exactly 10 digits')
            .required('Please fill the Field'),
        business: Yup.string().required('Please fill the Field'),
        gstNo: Yup.string().required('Please fill the Field'),
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
                    <Link to="/admin/clients" className="text-primary hover:underline">
                        <span>Clients</span>
                    </Link>
                </li>
                <li className="before:content-['/'] ltr:before:mr-2 rtl:before:ml-2">
                    <span>Edit</span>
                </li>
            </ul>
            <Formik
                initialValues={{
                    name: clientsData[0].name,
                    email: clientsData[0].email,
                    address: clientsData[0].address,
                    phone: clientsData[0].phone,
                    business: clientsData[0].business,
                    gstNo: clientsData[0].gstNo,
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
                            <div className={submitCount ? (errors.address ? 'has-error' : 'has-success') : ''}>
                                <label htmlFor="address">Address </label>
                                <Field name="address" type="text" id="address" placeholder="Enter Address" className="form-input" />
                                {submitCount ? errors.address ? <div className="text-danger mt-1">{errors.address}</div> : <div className="text-success mt-1">Looks Good!</div> : ''}
                            </div>
                            <div className={submitCount ? (errors.address ? 'has-error' : 'has-success') : ''}>
                                <label htmlFor="phone">Phone </label>
                                <Field name="phone" type="number" id="phone" placeholder="Enter Phone Number" className="form-input" />
                                {submitCount ? errors.phone ? <div className="text-danger mt-1">{errors.phone}</div> : <div className="text-success mt-1">Looks Good!</div> : ''}
                            </div>
                            <div className={submitCount ? (errors.business ? 'has-error' : 'has-success') : ''}>
                                <label htmlFor="business">business </label>
                                <Field name="business" type="text" id="business" placeholder="Enter Business" className="form-input" />
                                {submitCount ? errors.business ? <div className="text-danger mt-1">{errors.business}</div> : <div className="text-success mt-1">Looks Good!</div> : ''}
                            </div>
                            <div className={submitCount ? (errors.gstNo ? 'has-error' : 'has-success') : ''}>
                                <label htmlFor="gstNo">GST Number </label>
                                <Field name="gstNo" type="text" id="gstNo" placeholder="Enter GST Number" className="form-input" />
                                {submitCount ? errors.gstNo ? <div className="text-danger mt-1">{errors.gstNo}</div> : <div className="text-success mt-1">Looks Good!</div> : ''}
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

export default EditClient;
