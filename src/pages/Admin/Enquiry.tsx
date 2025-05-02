import { Link, NavLink } from 'react-router-dom';
import { DataTable, DataTableSortStatus } from 'mantine-datatable';
import { useState, useEffect } from 'react';
import sortBy from 'lodash/sortBy';
import { useDispatch } from 'react-redux';
import { setPageTitle } from '../../store/themeConfigSlice';
import IconTrashLines from '../../components/Icon/IconTrashLines';
import IconPlus from '../../components/Icon/IconPlus';
import IconEdit from '../../components/Icon/IconEdit';
import IconCopy from '../../components/Icon/IconCopy';

const Enquiry = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(setPageTitle('Enquiry'));
    }, []);

    // Dummy data for the DataTable
    const [items, setItems] = useState([
        {
            id: 1,
            HospitalName: 'Apollo Hospital',
            FullAddress: '123 Medical Street, Health Lane',
            City: 'Bangalore',
            State: 'Karnataka',
            Pincode: '560001',
            ContactPerson: 'Dr. Ramesh Kumar',
            Email: 'ramesh.kumar@apollo.com',
            Phone: '9876543210',
            Designation: 'Chief Medical Officer',
            MachineType: 'MRI Scanner',
            Quantity: '2',
            TypeOfWork: 'Installation',
            Remarks: 'Urgent requirement',
        },
        {
            id: 2,
            HospitalName: 'Fortis Hospital',
            FullAddress: '456 Wellness Road, Care District',
            City: 'Mumbai',
            State: 'Maharashtra',
            Pincode: '400001',
            ContactPerson: 'Dr. Priya Sharma',
            Email: 'priya.sharma@fortis.com',
            Phone: '8765432109',
            Designation: 'Head of Radiology',
            MachineType: 'CT Scanner',
            Quantity: '1',
            TypeOfWork: 'Maintenance',
            Remarks: 'Annual service due',
        },
        // {
        //     id: 3,
        //     HospitalName: 'Manipal Hospital',
        //     FullAddress: '789 Cure Avenue, Treatment Complex',
        //     City: 'Delhi',
        //     State: 'Delhi',
        //     Pincode: '110001',
        //     ContactPerson: 'Dr. Arjun Patel',
        //     Email: 'arjun.patel@manipal.com',
        //     Phone: '7654321098',
        //     Designation: 'Technical Director',
        //     MachineType: 'X-Ray Machine',
        //     Quantity: '3',
        //     TypeOfWork: 'Calibration',
        //     Remarks: 'New machines need setup',
        // },
        // {
        //     id: 4,
        //     HospitalName: 'AIIMS',
        //     FullAddress: '101 Health Circle, Medical Zone',
        //     City: 'Chennai',
        //     State: 'Tamil Nadu',
        //     Pincode: '600001',
        //     ContactPerson: 'Dr. Meena Iyer',
        //     Email: 'meena.iyer@aiims.edu',
        //     Phone: '6543210987',
        //     Designation: 'Department Head',
        //     MachineType: 'Ultrasound',
        //     Quantity: '5',
        //     TypeOfWork: 'Training',
        //     Remarks: 'Staff training required',
        // },
        // {
        //     id: 5,
        //     HospitalName: 'Jupiter Hospital',
        //     FullAddress: '202 Recovery Road, Healing Area',
        //     City: 'Hyderabad',
        //     State: 'Telangana',
        //     Pincode: '500001',
        //     ContactPerson: 'Dr. Vikram Joshi',
        //     Email: 'vikram.joshi@jupiter.com',
        //     Phone: '9432109876',
        //     Designation: 'Administrator',
        //     MachineType: 'ECG Machine',
        //     Quantity: '10',
        //     TypeOfWork: 'Replacement',
        //     Remarks: 'Old models to be replaced',
        // },
        // {
        //     id: 6,
        //     HospitalName: 'Global Hospital',
        //     FullAddress: '303 Treatment Tower, Cure Complex',
        //     City: 'Pune',
        //     State: 'Maharashtra',
        //     Pincode: '411001',
        //     ContactPerson: 'Dr. Neha Gupta',
        //     Email: 'neha.gupta@global.com',
        //     Phone: '8321098765',
        //     Designation: 'Purchase Manager',
        //     MachineType: 'Dialysis Machine',
        //     Quantity: '4',
        //     TypeOfWork: 'Upgrade',
        //     Remarks: 'Software upgrade needed',
        // },
        // {
        //     id: 7,
        //     HospitalName: 'Columbia Asia',
        //     FullAddress: '404 Wellness Wing, Health District',
        //     City: 'Kolkata',
        //     State: 'West Bengal',
        //     Pincode: '700001',
        //     ContactPerson: 'Dr. Sanjay Bose',
        //     Email: 'sanjay.bose@columbiaasia.com',
        //     Phone: '7210987654',
        //     Designation: 'Facility Manager',
        //     MachineType: 'Ventilator',
        //     Quantity: '8',
        //     TypeOfWork: 'Preventive Maintenance',
        //     Remarks: 'Regular checkup scheduled',
        // },
    ]);

    const deleteRow = (id: any = null) => {
        if (window.confirm('Are you sure want to delete selected row ?')) {
            if (id) {
                setRecords(items.filter((user) => user.id !== id));
                setInitialRecords(items.filter((user) => user.id !== id));
                setItems(items.filter((user) => user.id !== id));
                setSearch('');
                setSelectedRecords([]);
            } else {
                let selectedRows = selectedRecords || [];
                const ids = selectedRows.map((d: any) => {
                    return d.id;
                });
                const result = items.filter((d) => !ids.includes(d.id as never));
                setRecords(result);
                setInitialRecords(result);
                setItems(result);
                setSearch('');
                setSelectedRecords([]);
                setPage(1);
            }
        }
    };

    const [page, setPage] = useState(1);
    const PAGE_SIZES = [10, 20, 30, 50, 100];
    const [pageSize, setPageSize] = useState(PAGE_SIZES[0]);
    const [initialRecords, setInitialRecords] = useState(sortBy(items, 'HospitalName'));
    const [records, setRecords] = useState(initialRecords);
    const [selectedRecords, setSelectedRecords] = useState<any>([]);

    const [search, setSearch] = useState('');
    const [sortStatus, setSortStatus] = useState<DataTableSortStatus>({
        columnAccessor: 'HospitalName',
        direction: 'asc',
    });

    // copy link related
    const [copied, setCopied] = useState(false);
    const handleCopy = async () => {
        try {
            const link = `${window.location.origin}/enquiry_form`;
            await navigator.clipboard.writeText(link);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            console.error('Failed to copy link:', err);
        }
    };

    useEffect(() => {
        setPage(1);
    }, [pageSize]);

    useEffect(() => {
        const from = (page - 1) * pageSize;
        const to = from + pageSize;
        setRecords([...initialRecords.slice(from, to)]);
    }, [page, pageSize, initialRecords]);

    useEffect(() => {
        setInitialRecords(() => {
            return items.filter((item) => {
                return (
                    item.HospitalName.toLowerCase().includes(search.toLowerCase()) ||
                    item.ContactPerson.toLowerCase().includes(search.toLowerCase()) ||
                    item.Email.toLowerCase().includes(search.toLowerCase()) ||
                    item.Phone.toLowerCase().includes(search.toLowerCase())
                );
            });
        });
    }, [search, items]);

    useEffect(() => {
        const data2 = sortBy(initialRecords, sortStatus.columnAccessor);
        setRecords(sortStatus.direction === 'desc' ? data2.reverse() : data2);
        setPage(1);
    }, [sortStatus]);

    const [wpNo, setWpNo] = useState(false);

    const sendMessage = () => {
        const phoneNumber = (document.getElementById('whatsAppNumber') as HTMLInputElement)?.value;
        if (phoneNumber) {
            setWpNo(false);
            const message = encodeURIComponent('Here is the link you requested.');
            const whatsappLink = `https://wa.me/${phoneNumber}?text=${message}`;
            window.open(whatsappLink, '_blank');
        } else {
            alert('Please enter a phone number.');
        }
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
                    <button className="text-primary">Enquiry</button>
                </li>
            </ol>

            <div className="panel px-0 border-white-light dark:border-[#1b2e4b]">
                <div className="invoice-table">
                    <div className="mb-4.5 px-5 flex md:items-center md:flex-row flex-col gap-5">
                        <div className="flex items-center gap-2 flex-wrap">
                            <Link to="/admin/enquiry/add" className="btn btn-primary gap-2">
                                <IconPlus />
                                Add New
                            </Link>
                            <button onClick={handleCopy} className="btn btn-primary gap-2">
                                <IconCopy />
                                {copied ? ' Copied! ' : 'Copy Link'}
                            </button>
                        </div>
                        <div className="ltr:ml-auto rtl:mr-auto">
                            <input type="text" className="form-input w-auto" placeholder="Search..." value={search} onChange={(e) => setSearch(e.target.value)} />
                        </div>
                    </div>
                    <div className="relative">
                        {wpNo && (
                            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 bg-white p-4 rounded-lg shadow-lg border border-gray-300 w-full max-w-sm">
                                <label htmlFor="whatsAppNumber" className="block mb-2 text-sm font-semibold text-gray-700">
                                    WhatsApp Number
                                </label>
                                <input
                                    id="whatsAppNumber"
                                    type="number"
                                    placeholder="Enter contact phone number"
                                    className="form-input w-full mb-3 border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                                />
                                <button
                                    onClick={sendMessage}
                                    className="inline-flex items-center px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700 transition duration-200"
                                >
                                    <IconCopy className="w-4 h-4 mr-2" />
                                    Send Link
                                </button>
                            </div>
                        )}
                    </div>

                    <div className="datatables pagination-padding">
                        <DataTable
                            className="whitespace-nowrap table-hover invoice-table"
                            records={records}
                            columns={[
                                {
                                    accessor: 'HospitalName',
                                    title: 'Hospital Name',
                                    sortable: true,
                                    render: ({ HospitalName }) => <div className="font-semibold">{HospitalName}</div>,
                                },
                                {
                                    accessor: 'FullAddress',
                                    title: 'Full Address',
                                    sortable: true,
                                },
                                {
                                    accessor: 'City',
                                    title: 'City',
                                    sortable: true,
                                },
                                {
                                    accessor: 'State',
                                    title: 'State',
                                    sortable: true,
                                },
                                {
                                    accessor: 'Pincode',
                                    title: 'Pincode',
                                    sortable: true,
                                },
                                {
                                    accessor: 'ContactPerson',
                                    title: 'Contact Person',
                                    sortable: true,
                                },
                                {
                                    accessor: 'Email',
                                    title: 'Email',
                                    sortable: true,
                                    render: ({ Email }) => (
                                        <a href={`mailto:${Email}`} className="text-primary hover:underline">
                                            {Email}
                                        </a>
                                    ),
                                },
                                {
                                    accessor: 'Phone',
                                    title: 'Phone',
                                    sortable: true,
                                    render: ({ Phone }) => (
                                        <a href={`tel:${Phone}`} className="text-primary hover:underline">
                                            {Phone}
                                        </a>
                                    ),
                                },
                                {
                                    accessor: 'Designation',
                                    title: 'Designation',
                                    sortable: true,
                                },
                                {
                                    accessor: 'MachineType',
                                    title: 'Machine Type',
                                    sortable: true,
                                },
                                {
                                    accessor: 'Quantity',
                                    title: 'Quantity',
                                    sortable: true,
                                },
                                {
                                    accessor: 'TypeOfWork',
                                    title: 'Type Of Work',
                                    sortable: true,
                                },
                                {
                                    accessor: 'Remarks',
                                    title: 'Remarks',
                                    sortable: true,
                                    render: ({ Remarks }) => <div className="max-w-xs truncate">{Remarks}</div>,
                                },
                                {
                                    accessor: 'action',
                                    title: 'Actions',
                                    sortable: false,
                                    textAlignment: 'center',
                                    render: ({ id }) => (
                                        <div className="flex gap-4 items-center w-max mx-auto">
                                            <NavLink to={`/admin/enquiry/edit/${id}`} className="flex hover:text-info">
                                                <IconEdit className="w-4.5 h-4.5" />
                                            </NavLink>
                                            <button type="button" className="flex hover:text-danger" onClick={(e) => deleteRow(id)}>
                                                <IconTrashLines />
                                            </button>
                                        </div>
                                    ),
                                },
                            ]}
                            highlightOnHover
                            totalRecords={initialRecords.length}
                            recordsPerPage={pageSize}
                            page={page}
                            onPageChange={(p) => setPage(p)}
                            recordsPerPageOptions={PAGE_SIZES}
                            onRecordsPerPageChange={setPageSize}
                            sortStatus={sortStatus}
                            onSortStatusChange={setSortStatus}
                            selectedRecords={selectedRecords}
                            onSelectedRecordsChange={setSelectedRecords}
                            paginationText={({ from, to, totalRecords }) => `Showing  ${from} to ${to} of ${totalRecords} entries`}
                        />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Enquiry;
