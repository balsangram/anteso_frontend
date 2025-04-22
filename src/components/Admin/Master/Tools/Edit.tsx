import * as Yup from 'yup';
import { Field, Form, Formik } from 'formik';
import { Link } from 'react-router-dom';
import { showMessage } from '../../../common/ShowMessage';
import { toolsData } from '../../../../data';

const EditTool = () => {
    const SubmittedForm = Yup.object().shape({
        name: Yup.string().required('Please fill the Field'),
        manufactureDate: Yup.string().required('Please fill the Field'),
        model: Yup.string().required('Please fill the Field'),
        srNo: Yup.string().required('Please fill the Field'),
        calibrationCertificateNo: Yup.string().required('Please fill the Field'),
        calibrationValidTill: Yup.string().required('Please fill the Field'),
        range: Yup.string().required('Please fill the Field'),
        toolID: Yup.string().required('Please fill the Field'),
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
                    <Link to="/admin/tools" className="text-primary hover:underline">
                        <span>Tools</span>
                    </Link>
                </li>
                <li className="before:content-['/'] ltr:before:mr-2 rtl:before:ml-2">
                    <span>Edit</span>
                </li>
            </ul>
            <Formik
                initialValues={{
                    name: toolsData[0].name,
                    manufactureDate: toolsData[0].manufactureDate,
                    model: toolsData[0].model,
                    srNo: toolsData[0].srNo,
                    calibrationCertificateNo: toolsData[0].calibrationCertificateNo,
                    calibrationValidTill: toolsData[0].calibrationValidTill,
                    range: toolsData[0].range,
                    toolID: toolsData[0].toolID,
                }}
                validationSchema={SubmittedForm}
                onSubmit={() => {}}
            >
                {({ errors, submitCount, touched }) => (
                    <Form className="space-y-5">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                            <div className={submitCount ? (errors.name ? 'has-error' : 'has-success') : ''}>
                                <label htmlFor="name">Name </label>
                                <Field name="name" type="text" id="name" placeholder="Enter State Name" className="form-input" />
                                {submitCount ? errors.name ? <div className="text-danger mt-1">{errors.name}</div> : <div className="text-success mt-1">Looks Good!</div> : ''}
                            </div>
                            <div className={submitCount ? (errors.manufactureDate ? 'has-error' : 'has-success') : ''}>
                                <label htmlFor="manufactureDate">Manufacture Date </label>
                                <Field name="manufactureDate" type="date" id="manufactureDate" placeholder="Enter State Name" className="form-input" />
                                {submitCount ? errors.manufactureDate ? <div className="text-danger mt-1">{errors.manufactureDate}</div> : <div className="text-success mt-1">Looks Good!</div> : ''}
                            </div>
                            <div className={submitCount ? (errors.model ? 'has-error' : 'has-success') : ''}>
                                <label htmlFor="model">Model </label>
                                <Field name="model" type="text" id="model" placeholder="Enter State Name" className="form-input" />
                                {submitCount ? errors.model ? <div className="text-danger mt-1">{errors.model}</div> : <div className="text-success mt-1">Looks Good!</div> : ''}
                            </div>
                            <div className={submitCount ? (errors.srNo ? 'has-error' : 'has-success') : ''}>
                                <label htmlFor="srNo">Sr No </label>
                                <Field name="srNo" type="text" id="srNo" placeholder="Enter State Name" className="form-input" />
                                {submitCount ? errors.srNo ? <div className="text-danger mt-1">{errors.srNo}</div> : <div className="text-success mt-1">Looks Good!</div> : ''}
                            </div>
                            <div className={submitCount ? (errors.calibrationCertificateNo ? 'has-error' : 'has-success') : ''}>
                                <label htmlFor="calibrationCertificateNo">Calibration Certificate Number</label>
                                <Field name="calibrationCertificateNo" type="text" id="calibrationCertificateNo" placeholder="Enter State Name" className="form-input" />
                                {submitCount ? (
                                    errors.calibrationCertificateNo ? (
                                        <div className="text-danger mt-1">{errors.calibrationCertificateNo}</div>
                                    ) : (
                                        <div className="text-success mt-1">Looks Good!</div>
                                    )
                                ) : (
                                    ''
                                )}
                            </div>
                            <div className={submitCount ? (errors.calibrationValidTill ? 'has-error' : 'has-success') : ''}>
                                <label htmlFor="calibrationValidTill">Calibration Valid Till</label>
                                <Field name="calibrationValidTill" type="date" id="calibrationValidTill" className="form-input" />
                                {submitCount ? (
                                    errors.calibrationValidTill ? (
                                        <div className="text-danger mt-1">{errors.calibrationValidTill}</div>
                                    ) : (
                                        <div className="text-success mt-1">Looks Good!</div>
                                    )
                                ) : (
                                    ''
                                )}
                            </div>
                            <div className={submitCount ? (errors.range ? 'has-error' : 'has-success') : ''}>
                                <label htmlFor="range">Range</label>
                                <Field name="range" type="text" id="range" placeholder="Enter Range" className="form-input" />
                                {submitCount ? errors.range ? <div className="text-danger mt-1">{errors.range}</div> : <div className="text-success mt-1">Looks Good!</div> : ''}
                            </div>
                            <div className={submitCount ? (errors.toolID ? 'has-error' : 'has-success') : ''}>
                                <label htmlFor="toolID">Tool ID</label>
                                <Field name="toolID" type="text" id="toolID" className="form-input" placeholder="Enter Tool ID" />
                                {submitCount ? errors.toolID ? <div className="text-danger mt-1">{errors.toolID}</div> : <div className="text-success mt-1">Looks Good!</div> : ''}
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

export default EditTool;
