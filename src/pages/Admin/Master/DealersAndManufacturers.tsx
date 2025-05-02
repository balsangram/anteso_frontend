import { Link, NavLink } from 'react-router-dom';
import { DataTable, DataTableSortStatus } from 'mantine-datatable';
import { useState, useEffect } from 'react';
import sortBy from 'lodash/sortBy';
import { useDispatch } from 'react-redux';
import { setPageTitle } from '../../../store/themeConfigSlice';
import IconTrashLines from '../../../components/Icon/IconTrashLines';
import IconPlus from '../../../components/Icon/IconPlus';
import IconEdit from '../../../components/Icon/IconEdit';

interface Dealer {
    id: number;
    hospitalName: string;
    address: string;
    contactPersonName: string;
    mobileNumber: string;
    emailId: string;
    procurementNumber: string;
    procurementExpiryDate: string;
    partyCode: string;
    branch: string;
}

const DealersAndManufacturers = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(setPageTitle('Dealers & Manufacturers'));
    }, []);

    // Example data with 2 records
    const [items, setItems] = useState<Dealer[]>([
        {
            id: 1,
            hospitalName: 'Apollo Hospitals',
            address: '123 Medical Street, Bangalore',
            contactPersonName: 'Dr. Ramesh Kumar',
            mobileNumber: '9876543210',
            emailId: 'ramesh.kumar@apollo.com',
            procurementNumber: 'PROC-2023-001',
            procurementExpiryDate: '2024-12-31',
            partyCode: 'APL-001',
            branch: 'Bangalore Central',
        },
        {
            id: 2,
            hospitalName: 'Fortis Healthcare',
            address: '456 Health Avenue, Mumbai',
            contactPersonName: 'Dr. Priya Sharma',
            mobileNumber: '8765432109',
            emailId: 'priya.sharma@fortis.com',
            procurementNumber: 'PROC-2023-002',
            procurementExpiryDate: '2025-06-30',
            partyCode: 'FTS-002',
            branch: 'Mumbai West',
        },
    ]);

    const deleteRow = (id: number | null = null) => {
        if (window.confirm('Are you sure want to delete selected row ?')) {
            if (id) {
                const newItems = items.filter((item) => item.id !== id);
                setItems(newItems);
                setInitialRecords(newItems);
                setRecords(newItems.slice(0, pageSize));
                setSearch('');
                setSelectedRecords([]);
            } else {
                const ids = selectedRecords.map((d: Dealer) => d.id);
                const result = items.filter((d) => !ids.includes(d.id));
                setItems(result);
                setInitialRecords(result);
                setRecords(result.slice(0, pageSize));
                setSearch('');
                setSelectedRecords([]);
                setPage(1);
            }
        }
    };

    const [page, setPage] = useState(1);
    const PAGE_SIZES = [10, 20, 30, 50, 100];
    const [pageSize, setPageSize] = useState(PAGE_SIZES[0]);
    const [initialRecords, setInitialRecords] = useState(sortBy(items, 'hospitalName'));
    const [records, setRecords] = useState(initialRecords.slice(0, pageSize));
    const [selectedRecords, setSelectedRecords] = useState<Dealer[]>([]);

    const [search, setSearch] = useState('');
    const [sortStatus, setSortStatus] = useState<DataTableSortStatus>({
        columnAccessor: 'hospitalName',
        direction: 'asc',
    });

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
                    item.hospitalName.toLowerCase().includes(search.toLowerCase()) ||
                    item.address.toLowerCase().includes(search.toLowerCase()) ||
                    item.contactPersonName.toLowerCase().includes(search.toLowerCase()) ||
                    item.mobileNumber.toLowerCase().includes(search.toLowerCase()) ||
                    item.emailId.toLowerCase().includes(search.toLowerCase()) ||
                    item.procurementNumber.toLowerCase().includes(search.toLowerCase()) ||
                    item.partyCode.toLowerCase().includes(search.toLowerCase()) ||
                    item.branch.toLowerCase().includes(search.toLowerCase())
                );
            });
        });
    }, [search, items]);

    useEffect(() => {
        const data2 = sortBy(initialRecords, sortStatus.columnAccessor);
        setRecords(sortStatus.direction === 'desc' ? data2.reverse() : data2);
        setPage(1);
    }, [sortStatus, initialRecords]);

    return (
        <>
            <ol className="flex text-gray-500 font-semibold dark:text-white-dark mb-4">
                <li>
                    <Link to="/" className="hover:text-gray-500/70 dark:hover:text-white-dark/70">
                        Dashboard
                    </Link>
                </li>
                <li className="before:w-1 before:h-1 before:rounded-full before:bg-primary before:inline-block before:relative before:-top-0.5 before:mx-4">
                    <button className="text-primary">Dealers & Manufacturers</button>
                </li>
            </ol>

            <div className="panel px-0 border-white-light dark:border-[#1b2e4b]">
                <div className="invoice-table">
                    <div className="mb-4.5 px-5 flex md:items-center md:flex-row flex-col gap-5">
                        <div className="flex items-center gap-2">
                            <Link to="/admin/dealer-and-manufacture/add" className="btn btn-primary gap-2">
                                <IconPlus />
                                Add New
                            </Link>
                        </div>
                        <div className="ltr:ml-auto rtl:mr-auto">
                            <input type="text" className="form-input w-auto" placeholder="Search..." value={search} onChange={(e) => setSearch(e.target.value)} />
                        </div>
                    </div>

                    <div className="datatables pagination-padding">
                        <DataTable
                            className="whitespace-nowrap table-hover invoice-table"
                            records={records}
                            columns={[
                                {
                                    accessor: 'hospitalName',
                                    title: 'Hospital Name',
                                    sortable: true,
                                    render: ({ hospitalName }) => <div className="font-semibold">{hospitalName}</div>,
                                },
                                {
                                    accessor: 'address',
                                    title: 'Address',
                                    sortable: true,
                                },
                                {
                                    accessor: 'contactPersonName',
                                    title: 'Contact Person Name',
                                    sortable: true,
                                },
                                {
                                    accessor: 'mobileNumber',
                                    title: 'Mobile Number',
                                    sortable: true,
                                    render: ({ mobileNumber }) => (
                                        <a href={`tel:${mobileNumber}`} className="text-primary hover:underline">
                                            {mobileNumber}
                                        </a>
                                    ),
                                },
                                {
                                    accessor: 'emailId',
                                    title: 'Email ID',
                                    sortable: true,
                                    render: ({ emailId }) => (
                                        <a href={`mailto:${emailId}`} className="text-primary hover:underline">
                                            {emailId}
                                        </a>
                                    ),
                                },
                                {
                                    accessor: 'procurementNumber',
                                    title: 'Procurement Number',
                                    sortable: true,
                                },
                                {
                                    accessor: 'procurementExpiryDate',
                                    title: 'Procurement Expiry Date',
                                    sortable: true,
                                },
                                {
                                    accessor: 'partyCode',
                                    title: 'Party Code',
                                    sortable: true,
                                },
                                {
                                    accessor: 'branch',
                                    title: 'Branch',
                                    sortable: true,
                                },
                                {
                                    accessor: 'action',
                                    title: 'Actions',
                                    sortable: false,
                                    textAlignment: 'center',
                                    render: ({ id }) => (
                                        <div className="flex gap-4 items-center w-max mx-auto">
                                            <NavLink to={`/admin/dealer-and-manufacture/edit/${id}`} className="flex hover:text-info">
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

export default DealersAndManufacturers;
