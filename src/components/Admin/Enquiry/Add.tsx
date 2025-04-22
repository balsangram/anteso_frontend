import * as Yup from 'yup';
import { Field, Form, Formik } from 'formik';
import { Link } from 'react-router-dom';
import { showMessage } from '../../common/ShowMessage';

const AddEnquiry = () => {
    const SubmittedForm = Yup.object().shape({
        name: Yup.string().required('Please fill the Field'),
        phone: Yup.string()
            .matches(/^[0-9]{10}$/, 'Phone number must be exactly 10 digits')
            .required('Please fill the Field'),
        email: Yup.string().email('Invalid email').required('Please fill the Email'),
        hName: Yup.string().required('Please fill the Field'),
        address: Yup.string().required('Please fill the Field'),
        city: Yup.string().required('Please fill the Field'),
        dist: Yup.string().required('Please fill the Field'),
        state: Yup.string().required('Please fill the Field'),
        pinCode: Yup.string().required('Please fill the Field'),
        equipmentId: Yup.string().required('Please fill the Field'),
        make: Yup.string().required('Please fill the Field'),
        model: Yup.string().required('Please fill the Field'),
        srNo: Yup.string().required('Please fill the Field'),
        dateOfQaRenewal: Yup.string().required('Please fill the Field'),
        dateOfLicenseRenewal: Yup.string().required('Please fill the Field'),
        dateOfRSORenewal: Yup.string().required('Please fill the Field'),
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
                    <Link to="/admin/enquiry" className="text-primary hover:underline">
                        <span>Enquiry</span>
                    </Link>
                </li>
                <li className="before:content-['/'] ltr:before:mr-2 rtl:before:ml-2">
                    <span>Add</span>
                </li>
            </ul>
            <Formik
                initialValues={{
                    name: '',
                    phone: '',
                    email: '',
                    hName: '',
                    address: '',
                    city: '',
                    dist: '',
                    state: '',
                    pinCode: '',
                    equipmentId: '',
                    make: '',
                    model: '',
                    srNo: '',
                    dateOfQaRenewal: '',
                    dateOfLicenseRenewal: '',
                    dateOfRSORenewal: '',
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
                            <div className={submitCount ? (errors.phone ? 'has-error' : 'has-success') : ''}>
                                <label htmlFor="phone">Phone </label>
                                <Field name="phone" type="number" id="phone" placeholder="Enter Phone Number" className="form-input" />
                                {submitCount ? errors.phone ? <div className="text-danger mt-1">{errors.phone}</div> : <div className="text-success mt-1">Looks Good!</div> : ''}
                            </div>
                            <div className={submitCount ? (errors.email ? 'has-error' : 'has-success') : ''}>
                                <label htmlFor="email">Email </label>
                                <Field name="email" type="text" id="email" placeholder="Enter Email Address" className="form-input" />
                                {submitCount ? errors.email ? <div className="text-danger mt-1">{errors.email}</div> : <div className="text-success mt-1">Looks Good!</div> : ''}
                            </div>
                            <div className={submitCount ? (errors.hName ? 'has-error' : 'has-success') : ''}>
                                <label htmlFor="hName">Hospital Name </label>
                                <Field name="hName" type="text" id="hName" placeholder="Enter Hospital Name" className="form-input" />
                                {submitCount ? errors.hName ? <div className="text-danger mt-1">{errors.hName}</div> : <div className="text-success mt-1">Looks Good!</div> : ''}
                            </div>
                            <div className={submitCount ? (errors.address ? 'has-error' : 'has-success') : ''}>
                                <label htmlFor="address">Address</label>
                                <Field name="address" type="text" id="address" placeholder="Enter Address" className="form-input" />
                                {submitCount ? errors.address ? <div className="text-danger mt-1">{errors.address}</div> : <div className="text-success mt-1">Looks Good!</div> : ''}
                            </div>
                            <div className={submitCount ? (errors.city ? 'has-error' : 'has-success') : ''}>
                                <label htmlFor="city">City</label>
                                <Field name="city" type="text" id="city" placeholder="Enter City Name" className="form-input" />
                                {submitCount ? errors.city ? <div className="text-danger mt-1">{errors.city}</div> : <div className="text-success mt-1">Looks Good!</div> : ''}
                            </div>
                            <div className={submitCount ? (errors.dist ? 'has-error' : 'has-success') : ''}>
                                <label htmlFor="dist">Distt.</label>
                                <Field name="dist" type="text" id="dist" placeholder="Enter distt." className="form-input" />
                                {submitCount ? errors.dist ? <div className="text-danger mt-1">{errors.dist}</div> : <div className="text-success mt-1">Looks Good!</div> : ''}
                            </div>
                            <div className={submitCount ? (errors.state ? 'has-error' : 'has-success') : ''}>
                                <label htmlFor="state">State</label>
                                <Field name="state" type="text" id="state" placeholder="Enter State Name" className="form-input" />
                                {submitCount ? errors.state ? <div className="text-danger mt-1">{errors.state}</div> : <div className="text-success mt-1">Looks Good!</div> : ''}
                            </div>
                            <div className={submitCount ? (errors.pinCode ? 'has-error' : 'has-success') : ''}>
                                <label htmlFor="pinCode">PIN Code</label>
                                <Field name="pinCode" type="text" id="pinCode" placeholder="Enter PIN Code" className="form-input" />
                                {submitCount ? errors.pinCode ? <div className="text-danger mt-1">{errors.pinCode}</div> : <div className="text-success mt-1">Looks Good!</div> : ''}
                            </div>
                            <div className={submitCount ? (errors.equipmentId ? 'has-error' : 'has-success') : ''}>
                                <label htmlFor="equipmentId">Equipment Id</label>
                                <Field name="equipmentId" type="text" id="equipmentId" placeholder="Enter Equipment ID" className="form-input" />
                                {submitCount ? errors.equipmentId ? <div className="text-danger mt-1">{errors.equipmentId}</div> : <div className="text-success mt-1">Looks Good!</div> : ''}
                            </div>
                            <div className={submitCount ? (errors.make ? 'has-error' : 'has-success') : ''}>
                                <label htmlFor="make">Make</label>
                                <Field name="make" type="text" id="make" placeholder="Enter Make" className="form-input" />
                                {submitCount ? errors.make ? <div className="text-danger mt-1">{errors.make}</div> : <div className="text-success mt-1">Looks Good!</div> : ''}
                            </div>
                            <div className={submitCount ? (errors.model ? 'has-error' : 'has-success') : ''}>
                                <label htmlFor="model">Model</label>
                                <Field name="model" type="text" id="model" placeholder="Enter Model" className="form-input" />
                                {submitCount ? errors.model ? <div className="text-danger mt-1">{errors.model}</div> : <div className="text-success mt-1">Looks Good!</div> : ''}
                            </div>
                            <div className={submitCount ? (errors.srNo ? 'has-error' : 'has-success') : ''}>
                                <label htmlFor="srNo">Sr. No.</label>
                                <Field name="srNo" type="text" id="srNo" placeholder="Enter Sr. No." className="form-input" />
                                {submitCount ? errors.srNo ? <div className="text-danger mt-1">{errors.srNo}</div> : <div className="text-success mt-1">Looks Good!</div> : ''}
                            </div>
                            <div className={submitCount ? (errors.dateOfQaRenewal ? 'has-error' : 'has-success') : ''}>
                                <label htmlFor="dateOfQaRenewal">Date Of QA Renewal</label>
                                <Field name="dateOfQaRenewal" type="date" id="dateOfQaRenewal" placeholder="Enter Date Of QA Renewal" className="form-input" />
                                {submitCount ? errors.dateOfQaRenewal ? <div className="text-danger mt-1">{errors.dateOfQaRenewal}</div> : <div className="text-success mt-1">Looks Good!</div> : ''}
                            </div>
                            <div className={submitCount ? (errors.dateOfLicenseRenewal ? 'has-error' : 'has-success') : ''}>
                                <label htmlFor="dateOfLicenseRenewal">Date Of License Renewal</label>
                                <Field name="dateOfLicenseRenewal" type="date" id="dateOfLicenseRenewal" placeholder="Enter Date Of License Renewal" className="form-input" />
                                {submitCount ? (
                                    errors.dateOfLicenseRenewal ? (
                                        <div className="text-danger mt-1">{errors.dateOfLicenseRenewal}</div>
                                    ) : (
                                        <div className="text-success mt-1">Looks Good!</div>
                                    )
                                ) : (
                                    ''
                                )}
                            </div>
                            <div className={submitCount ? (errors.dateOfRSORenewal ? 'has-error' : 'has-success') : ''}>
                                <label htmlFor="dateOfRSORenewal">Date Of RSO Renewal</label>
                                <Field name="dateOfRSORenewal" type="date" id="dateOfRSORenewal" placeholder="Enter Date Of RSO Renewal" className="form-input" />
                                {submitCount ? errors.dateOfRSORenewal ? <div className="text-danger mt-1">{errors.dateOfRSORenewal}</div> : <div className="text-success mt-1">Looks Good!</div> : ''}
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

export default AddEnquiry;
