import * as Yup from 'yup';
import { Field, Form, Formik } from 'formik';
import { Link } from 'react-router-dom';
import { showMessage } from '../../../common/ShowMessage';

const AddCourierCompanie = () => {
    const SubmittedForm = Yup.object().shape({
        companyName: Yup.string().required('Please fill the Field'),
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
                    <Link to="/admin/courier-companies" className="text-primary hover:underline">
                        <span>Courier Companies</span>
                    </Link>
                </li>
                <li className="before:content-['/'] ltr:before:mr-2 rtl:before:ml-2">
                    <span>Add</span>
                </li>
            </ul>
            <Formik
                initialValues={{
                    companyName: '',
                }}
                validationSchema={SubmittedForm}
                onSubmit={() => {}}
            >
                {({ errors, submitCount, touched }) => (
                    <Form className="space-y-5">
                        <div className={submitCount ? (errors.companyName ? 'has-error' : 'has-success') : ''}>
                            <label htmlFor="companyName">Company Name</label>
                            <Field name="companyName" type="text" id="companyName" placeholder="Enter Company Name" className="form-input" />
                            {submitCount ? errors.companyName ? <div className="text-danger mt-1">{errors.companyName}</div> : <div className="text-success mt-1">Looks Good!</div> : ''}
                        </div>

                        <button
                            type="submit"
                            className="btn btn-primary !mt-6"
                            onClick={() => {
                                if (touched.companyName && !errors.companyName) {
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

export default AddCourierCompanie;
