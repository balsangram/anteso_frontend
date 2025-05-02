import { Link, useNavigate } from 'react-router-dom';
import { useForm, SubmitHandler } from 'react-hook-form';

type FormValues = {
    nomenclature: string;
    makeManufacturer: string;
    model: string;
    serialNumber: string;
    calibrationCertificateNumber?: string;
    calibrationValidTill?: string;
    range?: string;
    toolId: string;
};

const AddTool = () => {
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormValues>();

    const onSubmit: SubmitHandler<FormValues> = (data) => {
        console.log(data);
        navigate('/');
    };

    return (
        <>
            <ol className="flex text-gray-500 font-semibold dark:text-white-dark">
                <li>
                    <Link to="/" className="hover:text-gray-500/70 dark:hover:text-white-dark/70">
                        Dashboard
                    </Link>
                </li>
                <li className="before:w-1 before:h-1 before:rounded-full before:bg-primary before:inline-block before:relative before:-top-0.5 before:mx-4">
                    <Link to="/admin/tools" className="text-primary">
                        Tools
                    </Link>
                </li>
                <li className="before:w-1 before:h-1 before:rounded-full before:bg-primary before:inline-block before:relative before:-top-0.5 before:mx-4">
                    <button className="hover:text-gray-500/70 dark:hover:text-white-dark/70">Add</button>
                </li>
            </ol>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 p-4">
                <div className="panel">
                    <h5 className="font-semibold text-lg mb-4">Add Tool</h5>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                        <div className="flex flex-col">
                            <label htmlFor="nomenclature" className="text-sm font-semibold text-gray-700">
                                Nomenclature
                            </label>
                            <input {...register('nomenclature', { required: 'Nomenclature is required' })} placeholder="Enter nomenclature" className="form-input" />
                            {errors.nomenclature && <p className="text-red-500 text-sm">{errors.nomenclature.message}</p>}
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="makeManufacturer" className="text-sm font-semibold text-gray-700">
                                Make / Manufacturer
                            </label>
                            <input {...register('makeManufacturer', { required: 'Make / Manufacturer is required' })} placeholder="Enter make / manufacturer" className="form-input" />
                            {errors.makeManufacturer && <p className="text-red-500 text-sm">{errors.makeManufacturer.message}</p>}
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="model" className="text-sm font-semibold text-gray-700">
                                Model
                            </label>
                            <input {...register('model', { required: 'Model is required' })} placeholder="Enter model" className="form-input" />
                            {errors.model && <p className="text-red-500 text-sm">{errors.model.message}</p>}
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="serialNumber" className="text-sm font-semibold text-gray-700">
                                Serial Number
                            </label>
                            <input {...register('serialNumber', { required: 'Serial Number is required' })} placeholder="Enter serial number" className="form-input" />
                            {errors.serialNumber && <p className="text-red-500 text-sm">{errors.serialNumber.message}</p>}
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="calibrationCertificateNumber" className="text-sm font-semibold text-gray-700">
                                Calibration Certificate Number
                            </label>
                            <input {...register('calibrationCertificateNumber')} placeholder="Enter calibration certificate number" className="form-input" />
                            {errors.calibrationCertificateNumber && <p className="text-red-500 text-sm">{errors.calibrationCertificateNumber.message}</p>}
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="calibrationValidTill" className="text-sm font-semibold text-gray-700">
                                Calibration Date
                            </label>
                            <input {...register('calibrationValidTill')} placeholder="Enter calibration valid till (e.g. 2025-12-31)" type="date" className="form-input" />
                            {errors.calibrationValidTill && <p className="text-red-500 text-sm">{errors.calibrationValidTill.message}</p>}
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="range" className="text-sm font-semibold text-gray-700">
                                Range
                            </label>
                            <input {...register('range')} placeholder="Enter range" className="form-input" />
                            {errors.range && <p className="text-red-500 text-sm">{errors.range.message}</p>}
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="toolId" className="text-sm font-semibold text-gray-700">
                                Tool ID
                            </label>
                            <input {...register('toolId', { required: 'Tool ID is required' })} placeholder="Enter tool ID" className="form-input" />
                            {errors.toolId && <p className="text-red-500 text-sm">{errors.toolId.message}</p>}
                        </div>
                    </div>
                    <div className="w-[98%] mb-6 flex justify-end">
                        <button type="submit" className="btn btn-success mt-4">
                            Submit Form
                        </button>
                    </div>
                </div>
            </form>
        </>
    );
};

export default AddTool;
