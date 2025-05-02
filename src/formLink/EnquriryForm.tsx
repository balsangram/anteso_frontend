import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useForm, useFieldArray, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import Logo from '../../src/assets/logo/logo.png';

interface FormValues {
    hospitalName: string;
    address: string;
    city: string;
    state: string;
    pinCode: string;
    contactPersonName: string;
    emailAddress: string;
    contactNumber: string;
    designation: string;
    services: {
        machineType: string;
        quantity: number;
        workType: (string | undefined)[];
        remarks?: string;
    }[];
    additionalServices: {
        name: string;
        info: string;
    }[];
    urgency: string;
}

const serviceOptions = [
    'INSTITUTE REGISTRATION',
    'RSO REGISTRATION, NOMINATION & APPROVAL',
    'DECOMMISSIONING, PRE OWNED PROCUREMENT, QA & LICENSE',
    'PROCUREMENT',
    'TLD BADGE',
    'LEAD SHEET',
    'LEAD GLASS',
    'LEAD APRON',
    'THYROID SHIELD',
    'GONAD SHIELD',
    'OTHERS',
];

import Select from 'react-select';

const machineTypeOptions = [
    { value: 'Fixed X-Ray', label: 'Fixed X-Ray' },
    { value: 'Mobile X-Ray', label: 'Mobile X-Ray' },
    { value: 'C-Arm', label: 'C-Arm' },
    { value: 'CatchLab', label: 'CatchLab' },
    { value: 'CT Scan', label: 'CT Scan' },
    { value: 'Pet CT', label: 'Pet CT' },
    { value: 'BMD', label: 'BMD' },
    { value: 'OPG', label: 'OPG' },
    { value: 'CBCT', label: 'CBCT' },
    { value: 'Mammography', label: 'Mammography' },
];

const workTypeOptions = [
    { value: 'Quality Assurance Test', label: 'Quality Assurance Test' },
    { value: 'Service', label: 'Service' },
    { value: 'Decommissioning', label: 'Decommissioning' },
    { value: 'Decommissioning and Recommissioning', label: 'Decommissioning and Recommissioning' },
];
// const workTypeOptions = [
//     { value: 'Installation', label: 'Installation' },
//     { value: 'Repair', label: 'Repair' },
//     { value: 'Maintenance', label: 'Maintenance' },
// ];

const urgencyOptions = ['Immediantely (within 1-2 days)', 'Urgent (Within a week)', 'Soon (Within 2-3 weeks)', 'Not urgent (just exploring)'];

const schema = Yup.object({
    hospitalName: Yup.string().required('Hospital name is required'),
    address: Yup.string().required('Address is required'),
    city: Yup.string().required('City is required'),
    state: Yup.string().required('State is required'),
    pinCode: Yup.string().required('Pincode is required'),
    contactPersonName: Yup.string().required('Contact person name is required'),
    emailAddress: Yup.string().email('Invalid email').required('Email is required'),
    contactNumber: Yup.string().required('Contact number is required'),
    designation: Yup.string().required('Designation is required'),
    services: Yup.array()
        .of(
            Yup.object({
                machineType: Yup.string().required('Machine type is required'),
                quantity: Yup.number().required('Quantity is required').min(1),
                workType: Yup.array()
                    .of(Yup.string())
                    .required('Work type is required') // Make it required, not nullable
                    .min(1, 'At least one work type is required'),
                remarks: Yup.string().optional(),
            })
        )
        .min(1, 'At least one service is required')
        .required(),
    additionalServices: Yup.array()
        .of(
            Yup.object({
                name: Yup.string().required('Service name is required'),
                info: Yup.string().required('Service information is required'),
            })
        )
        .required('Additional services are required'),
    urgency: Yup.string().required('Please select an urgency level'),
});

const EnquriryForm = () => {
    // const [selectedAdditionalServices, setSelectedAdditionalServices] = useState<{ [key: string]: string }>({});

    const {
        register,
        control,
        handleSubmit,
        formState: { errors },
    } = useForm<FormValues>({
        resolver: yupResolver(schema),
        defaultValues: {
            services: [{ machineType: '', quantity: 1, workType: [] }],
            additionalServices: [],
        },
    });

    const { fields, append, remove } = useFieldArray({
        control,
        name: 'services',
    });

    const onSubmit = (data: FormValues) => {
        console.log('Form Submitted:', data);
    };

    // const toggleAdditionalService = (service: string) => {
    //     setSelectedAdditionalServices((prev) => {
    //         const copy = { ...prev };
    //         if (copy[service]) delete copy[service];
    //         else copy[service] = '';
    //         return copy;
    //     });
    // };
    const [selectedAdditionalServices, setSelectedAdditionalServices] = useState<Record<string, string>>({});

    const toggleAdditionalService = (service: string) => {
        setSelectedAdditionalServices((prev) => {
            const newState = { ...prev };
            if (newState[service] !== undefined) {
                delete newState[service]; // Uncheck: remove from state
            } else {
                newState[service] = ''; // Check: add with empty string
            }
            return newState;
        });
    };

    return (
        <>
            <div
                style={{
                    position: 'absolute',
                    zIndex: '99',
                    backgroundColor: 'white',
                    left: '0',
                    top: '0',
                }}
            >
                <img className="h-12 m-6" src={Logo} alt="logo" />
                <h5 className="font-semibold ml-[2rem] mt-[2rem] text-lg "> Enquiry Form </h5>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 sm:p-8 p-2">
                    <div className="panel">
                        <h5 className="font-semibold text-lg mb-4">Basic Details</h5>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                            <div className="flex flex-col">
                                <label htmlFor="state" className="text-sm font-semibold text-gray-700">
                                    Hospital Name
                                </label>
                                <input {...register('hospitalName')} placeholder="Enter Hospital Name" className="form-input" />
                                {errors.hospitalName && <p className="text-red-500 text-sm">{errors.hospitalName.message}</p>}
                            </div>
                            <div className="flex flex-col">
                                <label htmlFor="state" className="text-sm font-semibold text-gray-700">
                                    Full Address
                                </label>

                                <input {...register('address')} placeholder="Enter Full Address" className="form-input" />
                                {errors.address && <p className="text-red-500 text-sm">{errors.address.message}</p>}
                            </div>
                            <div className="flex flex-col">
                                <label htmlFor="state" className="text-sm font-semibold text-gray-700">
                                    City
                                </label>
                                <input {...register('city')} placeholder="Enter City" className="form-input" />
                                {errors.city && <p className="text-red-500 text-sm">{errors.city.message}</p>}
                            </div>

                            {/* <div className="flex flex-col">
                            <input {...register('state')} placeholder="State" className="form-input" />
                            {errors.state && <p className="text-red-500 text-sm">{errors.state.message}</p>}
                        </div> */}
                            <div className="flex flex-col">
                                <label htmlFor="state" className="text-sm font-semibold text-gray-700">
                                    State
                                </label>
                                <select {...register('state', { required: 'State is required' })} className="form-input">
                                    <option value="">Select a state</option>
                                    <option value="Andhra Pradesh">Andhra Pradesh</option>
                                    <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                                    <option value="Assam">Assam</option>
                                    <option value="Bihar">Bihar</option>
                                    <option value="Chhattisgarh">Chhattisgarh</option>
                                    <option value="Goa">Goa</option>
                                    <option value="Gujarat">Gujarat</option>
                                    <option value="Haryana">Haryana</option>
                                    <option value="Himachal Pradesh">Himachal Pradesh</option>
                                    <option value="Jharkhand">Jharkhand</option>
                                    <option value="Karnataka">Karnataka</option>
                                    <option value="Kerala">Kerala</option>
                                    <option value="Madhya Pradesh">Madhya Pradesh</option>
                                    <option value="Maharashtra">Maharashtra</option>
                                    <option value="Manipur">Manipur</option>
                                    <option value="Meghalaya">Meghalaya</option>
                                    <option value="Mizoram">Mizoram</option>
                                    <option value="Nagaland">Nagaland</option>
                                    <option value="Odisha">Odisha</option>
                                    <option value="Punjab">Punjab</option>
                                    <option value="Rajasthan">Rajasthan</option>
                                    <option value="Sikkim">Sikkim</option>
                                    <option value="Tamil Nadu">Tamil Nadu</option>
                                    <option value="Telangana">Telangana</option>
                                    <option value="Tripura">Tripura</option>
                                    <option value="Uttar Pradesh">Uttar Pradesh</option>
                                    <option value="Uttarakhand">Uttarakhand</option>
                                    <option value="West Bengal">West Bengal</option>
                                    <option value="Andaman and Nicobar Islands">Andaman and Nicobar Islands</option>
                                    <option value="Chandigarh">Chandigarh</option>
                                    <option value="Dadra and Nagar Haveli and Daman and Diu">Dadra and Nagar Haveli and Daman and Diu</option>
                                    <option value="Lakshadweep">Lakshadweep</option>
                                    <option value="Delhi">Delhi</option>
                                    <option value="Puducherry">Puducherry</option>

                                    {/* Add more options as needed */}
                                </select>
                                {errors.state && <p className="text-red-500 text-sm">{errors.state.message}</p>}
                            </div>

                            <div className="flex flex-col">
                                <label htmlFor="state" className="text-sm font-semibold text-gray-700">
                                    Pincode
                                </label>
                                <input {...register('pinCode')} type="number" placeholder="Enter Pincode" className="form-input" />
                                {errors.pinCode && <p className="text-red-500 text-sm">{errors.pinCode.message}</p>}
                            </div>

                            <div className="flex flex-col">
                                <label htmlFor="state" className="text-sm font-semibold text-gray-700">
                                    Contact Person Name
                                </label>
                                <input {...register('contactPersonName')} placeholder="Enter Contact Person Name" className="form-input" />
                                {errors.contactPersonName && <p className="text-red-500 text-sm">{errors.contactPersonName.message}</p>}
                            </div>
                            <div className="flex flex-col">
                                <label htmlFor="state" className="text-sm font-semibold text-gray-700">
                                    Email Address
                                </label>
                                <input {...register('emailAddress')} placeholder="Enter Email Address" className="form-input" />
                                {errors.emailAddress && <p className="text-red-500 text-sm">{errors.emailAddress.message}</p>}
                            </div>
                            <div className="flex flex-col">
                                <label htmlFor="state" className="text-sm font-semibold text-gray-700">
                                    Contact Number
                                </label>
                                <input {...register('contactNumber')} placeholder="Enter Contact Number" className="form-input" />
                                {errors.contactNumber && <p className="text-red-500 text-sm">{errors.contactNumber.message}</p>}
                            </div>
                            <div className="flex flex-col">
                                <label htmlFor="state" className="text-sm font-semibold text-gray-700">
                                    Designation
                                </label>
                                <input {...register('designation')} placeholder="Enter Designation" className="form-input" />
                                {errors.designation && <p className="text-red-500 text-sm">{errors.designation.message}</p>}
                            </div>
                        </div>
                    </div>

                    <div className="panel">
                        <h5 className="font-semibold text-lg mb-4">Services</h5>
                        {fields.map((field, index) => (
                            <div key={field.id} className="grid grid-cols-1 md:grid-cols-12 gap-4 mb-4 items-end">
                                {/* Machine Type */}
                                <div className="md:col-span-4">
                                    <label className="text-sm font-semibold text-gray-700">Machine Type</label>
                                    <select
                                        {...register(`services.${index}.machineType`, {
                                            required: 'Machine type is required',
                                        })}
                                        className="form-select w-full border-gray-300 rounded-md text-gray-700"
                                    >
                                        <option value="">Select machine type</option>
                                        <option>Fixed X-Ray</option>
                                        <option>Mobile X-Ray</option>
                                        <option>C-Arm</option>
                                        <option>Cath Lab/Interventional Radiology</option>
                                        <option>Mammography</option>
                                        <option>CT Scan</option>
                                        <option>PET CT</option>
                                        <option>CT Simulator</option>
                                        <option>OPG</option>
                                        <option>CBCT</option>
                                        <option>BMD/DEXA</option>
                                        <option>Dental IOPA</option>
                                        <option>Dental Hand Held</option>
                                        <option>O Arm</option>
                                        <option>KV Imaging (OBI)</option>
                                        <option>Lead Apron Test</option>
                                        <option>Thyroid Shield Test</option>
                                        <option>Gonad Shield Test</option>
                                        <option>Radiation Survey of Radiation Facility</option>
                                        <option>Others</option>
                                    </select>
                                    {errors.services?.[index]?.machineType && <p className="text-red-500 text-sm">{errors.services[index]?.machineType?.message}</p>}
                                </div>

                                {/* Quantity */}
                                <div className="md:col-span-2">
                                    <label className="text-sm font-semibold text-gray-700">Quantity</label>
                                    <input
                                        type="number"
                                        {...register(`services.${index}.quantity`, {
                                            required: 'Quantity is required',
                                        })}
                                        placeholder="Quantity"
                                        className="form-input w-full"
                                    />
                                    {errors.services?.[index]?.quantity && <p className="text-red-500 text-sm">{errors.services[index]?.quantity?.message}</p>}
                                </div>

                                {/* Work Type */}
                                <div className="md:col-span-5">
                                    <label className="text-sm font-semibold text-gray-700">Type Of Work</label>
                                    <Controller
                                        name={`services.${index}.workType`}
                                        control={control}
                                        rules={{ required: 'Work type is required' }}
                                        render={({ field }) => (
                                            <Select
                                                {...field}
                                                isMulti
                                                options={workTypeOptions}
                                                className="basic-multi-select"
                                                classNamePrefix="select"
                                                onChange={(selected) => field.onChange(selected.map((s) => s.value))}
                                                value={workTypeOptions.filter((opt) => field.value?.includes(opt.value))}
                                            />
                                        )}
                                    />
                                    {errors.services?.[index]?.workType && <p className="text-red-500 text-sm">{errors.services[index]?.workType?.message}</p>}
                                </div>

                                {/* Remove Button */}
                                {fields.length > 1 && (
                                    <div className="md:col-span-1 flex justify-end">
                                        <button type="button" className="text-red-500 text-xs" onClick={() => remove(index)}>
                                            Remove
                                        </button>
                                    </div>
                                )}
                            </div>
                        ))}

                        {/* Add Button */}
                        <button type="button" onClick={() => append({ machineType: '', quantity: 1, workType: [], remarks: '' })} className="btn btn-primary w-full sm:w-auto">
                            + Add Another Machine
                        </button>

                        {/* Form-level error */}
                        {errors.services && typeof errors.services.message === 'string' && <p className="text-red-500 text-sm mt-1">{errors.services.message}</p>}
                    </div>

                    <div className="panel">
                        <h5 className="font-semibold text-lg mb-4">Additional Services</h5>
                        {serviceOptions.map((service) => (
                            <div key={service} className="grid grid-cols-1 sm:grid-cols-3 items-start gap-4 py-2 border-b border-gray-200">
                                <div className="flex items-center gap-2">
                                    <input
                                        type="checkbox"
                                        checked={selectedAdditionalServices[service] !== undefined}
                                        onChange={() => toggleAdditionalService(service)}
                                        className={`form-checkbox h-5 w-5 transition-colors duration-200 ${selectedAdditionalServices[service] !== undefined ? 'text-blue-600' : 'text-gray-400'}`}
                                    />

                                    <span>{service}</span>
                                </div>

                                {selectedAdditionalServices[service] !== undefined && (
                                    <div className="sm:col-span-2 mt-2 sm:mt-0">
                                        <input
                                            type="text"
                                            value={selectedAdditionalServices[service]}
                                            onChange={(e) =>
                                                setSelectedAdditionalServices((prev) => ({
                                                    ...prev,
                                                    [service]: e.target.value,
                                                }))
                                            }
                                            placeholder="Enter info..."
                                            className="form-input w-full"
                                        />
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                    <div className="panel">
                        <h5 className="font-semibold text-lg mb-4">Urgency</h5>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:w-1/2 gap-4">
                            {urgencyOptions.map((option) => (
                                <label key={option} className="flex items-center gap-2">
                                    <Controller
                                        control={control}
                                        name="urgency"
                                        render={({ field }) => <input type="radio" value={option} checked={field.value === option} onChange={() => field.onChange(option)} />}
                                    />
                                    {option}
                                </label>
                            ))}
                        </div>
                        {errors.urgency && <p className="text-red-500 text-sm mt-1">{errors.urgency.message}</p>}
                    </div>

                    <div className="w-[98%] mb-6  flex justify-end">
                        <button type="submit" className="btn btn-success mt-4 ">
                            Submit Enquiry
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
};

export default EnquriryForm;
