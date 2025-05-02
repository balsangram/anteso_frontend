import { Link, NavLink } from 'react-router-dom';
import { DataTable, DataTableSortStatus } from 'mantine-datatable';
import { useState, useEffect } from 'react';
import sortBy from 'lodash/sortBy';
import { useDispatch } from 'react-redux';
import { setPageTitle } from '../../../store/themeConfigSlice';
import IconTrashLines from '../../../components/Icon/IconTrashLines';
import IconPlus from '../../../components/Icon/IconPlus';
import IconEdit from '../../../components/Icon/IconEdit';

interface Tool {
    id: number;
    nomenclature: string;
    manufacturer: string;
    model: string;
    serialNumber: string;
    calibrationCertificateNo: string;
    calibrationDate: string;
    calibrationValidTill: string;
    range: string;
    toolID: string;
}

const Tools = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(setPageTitle('Tools'));
    }, []);

    // Dummy data for tools
    const [items, setItems] = useState<Tool[]>([
        {
            id: 1,
            nomenclature: 'Digital Multimeter',
            manufacturer: 'Fluke',
            model: '87V',
            serialNumber: 'FLK87V-001',
            calibrationCertificateNo: 'CAL2023-001',
            calibrationDate: '2023-01-15',
            calibrationValidTill: '2024-01-14',
            range: '0-1000V',
            toolID: 'T001',
        },
        {
            id: 2,
            nomenclature: 'Oscilloscope',
            manufacturer: 'Keysight',
            model: 'DSOX1204A',
            serialNumber: 'KEY1204-002',
            calibrationCertificateNo: 'CAL2023-002',
            calibrationDate: '2023-02-20',
            calibrationValidTill: '2024-02-19',
            range: '0-200MHz',
            toolID: 'T002',
        },
    ]);

    const deleteRow = (id: number | null = null) => {
        if (window.confirm('Are you sure want to delete selected row ?')) {
            if (id) {
                const newItems = items.filter((user) => user.id !== id);
                setItems(newItems);
                setInitialRecords(newItems);
                setRecords(newItems.slice(0, pageSize));
                setSearch('');
                setSelectedRecords([]);
            } else {
                let selectedRows = selectedRecords || [];
                const ids = selectedRows.map((d: Tool) => d.id);
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
    const [initialRecords, setInitialRecords] = useState(sortBy(items, 'nomenclature'));
    const [records, setRecords] = useState(initialRecords.slice(0, pageSize));
    const [selectedRecords, setSelectedRecords] = useState<Tool[]>([]);

    const [search, setSearch] = useState('');
    const [sortStatus, setSortStatus] = useState<DataTableSortStatus>({
        columnAccessor: 'nomenclature',
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
                    item.nomenclature.toLowerCase().includes(search.toLowerCase()) ||
                    item.manufacturer.toLowerCase().includes(search.toLowerCase()) ||
                    item.model.toLowerCase().includes(search.toLowerCase()) ||
                    item.serialNumber.toLowerCase().includes(search.toLowerCase()) ||
                    item.calibrationCertificateNo.toLowerCase().includes(search.toLowerCase()) ||
                    item.calibrationDate.toLowerCase().includes(search.toLowerCase()) ||
                    item.range.toLowerCase().includes(search.toLowerCase()) ||
                    item.toolID.toLowerCase().includes(search.toLowerCase())
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
                    <button className="text-primary">Tools</button>
                </li>
            </ol>

            <div className="panel px-0 border-white-light dark:border-[#1b2e4b]">
                <div className="invoice-table">
                    <div className="mb-4.5 px-5 flex md:items-center md:flex-row flex-col gap-5">
                        <div className="flex items-center gap-2">
                            <Link to="/admin/tools/add" className="btn btn-primary gap-2">
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
                                    accessor: 'nomenclature',
                                    title: 'Nomenclature',
                                    sortable: true,
                                    render: ({ nomenclature }) => <div className="font-semibold">{nomenclature}</div>,
                                },
                                {
                                    accessor: 'manufacturer',
                                    title: 'Manufacturer',
                                    sortable: true,
                                },
                                {
                                    accessor: 'model',
                                    title: 'Model',
                                    sortable: true,
                                },
                                {
                                    accessor: 'serialNumber',
                                    title: 'Serial Number',
                                    sortable: true,
                                },
                                {
                                    accessor: 'calibrationCertificateNo',
                                    title: 'Calibration Certificate Number',
                                    sortable: true,
                                },
                                {
                                    accessor: 'calibrationDate',
                                    title: 'Calibration Date',
                                    sortable: true,
                                },
                                {
                                    accessor: 'range',
                                    title: 'Range',
                                    sortable: true,
                                },
                                {
                                    accessor: 'toolID',
                                    title: 'Tool ID',
                                    sortable: true,
                                },
                                {
                                    accessor: 'action',
                                    title: 'Actions',
                                    sortable: false,
                                    textAlignment: 'center',
                                    render: ({ id }) => (
                                        <div className="flex gap-4 items-center w-max mx-auto">
                                            <NavLink to={`/admin/tools/edit/${id}`} className="flex hover:text-info">
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

export default Tools;
