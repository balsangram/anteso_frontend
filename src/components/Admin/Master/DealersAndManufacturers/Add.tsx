import { Link, useNavigate } from 'react-router-dom';
import { useForm, SubmitHandler } from 'react-hook-form';

type FormValues = {
    hospitalName: string;
    address: string;
    contactPersonName: string;
    mobileNumber: string;
    email: string;
    procurementNumber?: string;
    procurementExpiryDate?: string;
    partyCode: string;
    branch: string;
    services: string[];
};

const AddDealerAndManufacturer = () => {
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormValues>({
        defaultValues: {
            services: [],
        },
    });

    const onSubmit: SubmitHandler<FormValues> = (data) => {
        console.log(data);
        navigate('/');
    };

    return (
        <>
            <ol className="flex text-gray-500 font-semibold dark:text-white-dark mb-4">
                <li>
                    <Link to="/" className="hover:text-gray-500/70 dark:hover:text-white-dark/70">
                        Dashboard
                    </Link>
                </li>
                <li className="before:w-1 before:h-1 before:rounded-full before:bg-primary before:inline-block before:relative before:-top-0.5 before:mx-4">
                    <Link to="/admin/dealer-and-manufacture" className="text-primary hover:underline">
                        Dealer And Manufacture
                    </Link>
                </li>
                <li className="before:w-1 before:h-1 before:rounded-full before:bg-primary before:inline-block before:relative before:-top-0.5 before:mx-4">Add</li>
            </ol>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 p-4">
                <div className="panel">
                    <h5 className="font-semibold text-lg mb-4">Manufacturer Leads</h5>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                        <div className="flex flex-col">
                            <label className="text-sm font-semibold text-gray-700">Hospital Name</label>
                            <input {...register('hospitalName', { required: 'Hospital Name is required' })} placeholder="Enter Hospital Name" className="form-input" />
                            {errors.hospitalName && <p className="text-red-500 text-sm">{errors.hospitalName.message}</p>}
                        </div>
                        <div className="flex flex-col">
                            <label className="text-sm font-semibold text-gray-700">Address</label>
                            <input {...register('address', { required: 'Address is required' })} placeholder="Enter Address" className="form-input" />
                            {errors.address && <p className="text-red-500 text-sm">{errors.address.message}</p>}
                        </div>
                        <div className="flex flex-col">
                            <label className="text-sm font-semibold text-gray-700">Contact Person Name</label>
                            <input {...register('contactPersonName', { required: 'Contact Person Name is required' })} placeholder="Enter Contact Person Name" className="form-input" />
                            {errors.contactPersonName && <p className="text-red-500 text-sm">{errors.contactPersonName.message}</p>}
                        </div>
                        <div className="flex flex-col">
                            <label className="text-sm font-semibold text-gray-700">Mobile Number</label>
                            <input
                                type="tel"
                                {...register('mobileNumber', {
                                    required: 'Mobile Number is required',
                                    pattern: {
                                        value: /^[0-9]{10}$/,
                                        message: 'Enter a valid 10-digit mobile number',
                                    },
                                })}
                                placeholder="Enter Mobile Number"
                                className="form-input"
                            />
                            {errors.mobileNumber && <p className="text-red-500 text-sm">{errors.mobileNumber.message}</p>}
                        </div>
                        <div className="flex flex-col">
                            <label className="text-sm font-semibold text-gray-700">Email ID</label>
                            <input
                                type="email"
                                {...register('email', {
                                    required: 'Email is required',
                                    pattern: {
                                        value: /^\S+@\S+\.\S+$/,
                                        message: 'Enter a valid email address',
                                    },
                                })}
                                placeholder="Enter Email ID"
                                className="form-input"
                            />
                            {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
                        </div>
                        <div className="flex flex-col">
                            <label className="text-sm font-semibold text-gray-700">Procurement Number</label>
                            <input {...register('procurementNumber')} placeholder="Enter Procurement Number" className="form-input" />
                        </div>
                        <div className="flex flex-col">
                            <label className="text-sm font-semibold text-gray-700">Procurement Expiry Date</label>
                            <input type="date" {...register('procurementExpiryDate')} className="form-input" />
                        </div>
                        <div className="flex flex-col">
                            <label className="text-sm font-semibold text-gray-700">Party Code</label>
                            <input {...register('partyCode', { required: 'Party Code is required' })} placeholder="Enter Party Code" className="form-input" />
                            {errors.partyCode && <p className="text-red-500 text-sm">{errors.partyCode.message}</p>}
                        </div>
                        <div className="flex flex-col">
                            <label className="text-sm font-semibold text-gray-700">Branch</label>
                            <input {...register('branch', { required: 'Branch is required' })} placeholder="Enter Branch" className="form-input" />
                            {errors.branch && <p className="text-red-500 text-sm">{errors.branch.message}</p>}
                        </div>

                        <div className="flex flex-col col-span-2">
                            <label className="text-sm font-semibold text-gray-700">Services</label>
                            <div className="grid grid-cols-2 gap-2 mt-2">
                                {['QA', 'Registration', 'Procurement', 'License', 'Tatkal QA', 'Remote Location'].map((service) => (
                                    <label key={service} className="flex items-center space-x-2">
                                        <input type="checkbox" value={service} {...register('services')} className="form-checkbox" />
                                        <span>{service}</span>
                                    </label>
                                ))}
                            </div>
                            {errors.services && <p className="text-red-500 text-sm">{errors.services.message}</p>}
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

export default AddDealerAndManufacturer;
