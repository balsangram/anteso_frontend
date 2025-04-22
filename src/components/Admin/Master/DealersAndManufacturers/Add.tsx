import * as Yup from 'yup';
import { Field, Form, Formik } from 'formik';
import { Link } from 'react-router-dom';
import { showMessage } from '../../../common/ShowMessage';

const AddDealerAndManufacturer = () => {
    const SubmittedForm = Yup.object().shape({
        customerName: Yup.string().required('Please fill the Field'),
        city: Yup.string().required('Please fill the Field'),
        type: Yup.string().required('Please fill the Field'),
        machineAndPrice: Yup.string().required('Please fill the Field'),
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
                    <Link to="/admin/dealer-and-manufacture" className="text-primary hover:underline">
                        <span>Dealer And Manufacture</span>
                    </Link>
                </li>
                <li className="before:content-['/'] ltr:before:mr-2 rtl:before:ml-2">
                    <span>Add</span>
                </li>
            </ul>
            <Formik
                initialValues={{
                    customerName: '',
                    city: '',
                    type: '',
                    machineAndPrice: '',
                }}
                validationSchema={SubmittedForm}
                onSubmit={() => {}}
            >
                {({ errors, submitCount, touched }) => (
                    <Form className="space-y-5">
                        <div className={submitCount ? (errors.customerName ? 'has-error' : 'has-success') : ''}>
                            <label htmlFor="customerName">Customer Name </label>
                            <Field name="customerName" type="text" id="customerName" placeholder="Enter Customer Name" className="form-input" />
                            {submitCount ? errors.customerName ? <div className="text-danger mt-1">{errors.customerName}</div> : <div className="text-success mt-1">Looks Good!</div> : ''}
                        </div>
                        <div className={submitCount ? (errors.city ? 'has-error' : 'has-success') : ''}>
                            <label htmlFor="city">City</label>
                            <Field name="city" type="text" id="city" placeholder="Enter City Name" className="form-input" />
                            {submitCount ? errors.city ? <div className="text-danger mt-1">{errors.city}</div> : <div className="text-success mt-1">Looks Good!</div> : ''}
                        </div>
                        <div className={submitCount ? (errors.type ? 'has-error' : 'has-success') : ''}>
                            <label htmlFor="type">Type</label>
                            <Field name="type" type="text" id="type" placeholder="Enter Type" className="form-input" />
                            {submitCount ? errors.type ? <div className="text-danger mt-1">{errors.type}</div> : <div className="text-success mt-1">Looks Good!</div> : ''}
                        </div>
                        <div className={submitCount ? (errors.type ? 'has-error' : 'has-success') : ''}>
                            <label htmlFor="machineAndPrice">Machine And Price</label>
                            <Field name="machineAndPrice" type="text" id="machineAndPrice" placeholder="Enter Machine And Price" className="form-input" />
                            {submitCount ? errors.machineAndPrice ? <div className="text-danger mt-1">{errors.machineAndPrice}</div> : <div className="text-success mt-1">Looks Good!</div> : ''}
                        </div>

                        <button
                            type="submit"
                            className="btn btn-primary !mt-6"
                            onClick={() => {
                                if (touched.customerName && !errors.customerName) {
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

export default AddDealerAndManufacturer;
