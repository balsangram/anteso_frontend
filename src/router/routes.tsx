import { lazy } from 'react';
import AdminDashboard from '../pages/Admin/Dashboard';
import AdminProtected from '../components/Protected/AdminProtected';
import Login from '../pages/Login';
import State from '../pages/Admin/Master/State';
import City from '../pages/Admin/Master/City';
import Item from '../pages/Admin/Master/Item';
import Clients from '../pages/Admin/Master/Clients';
import Engineers from '../pages/Admin/Master/Engineers';
import Tools from '../pages/Admin/Master/Tools';
import DealersAndManufacturers from '../pages/Admin/Master/DealersAndManufacturers';
import Services from '../pages/Admin/Master/Services';
import CourierCompanies from '../pages/Admin/Master/CourierCompanies';
import AddState from '../components/Admin/Master/State/Add';
import EditState from '../components/Admin/Master/State/Edit';
import AddCity from '../components/Admin/Master/City/Add';
import EditCity from '../components/Admin/Master/City/Edit';
import AddItem from '../components/Admin/Master/Items/Add';
import EditItem from '../components/Admin/Master/Items/Edit';
import AddClient from '../components/Admin/Master/Clients/Add';
import EditClient from '../components/Admin/Master/Clients/Edit';
import AddEngineer from '../components/Admin/Master/Engineers/Add';
import EditEngineer from '../components/Admin/Master/Engineers/Edit';
import AddTool from '../components/Admin/Master/Tools/Add';
import EditTool from '../components/Admin/Master/Tools/Edit';
import AddDealerAndManufacturer from '../components/Admin/Master/DealersAndManufacturers/Add';
import EditDealerAndManufacturer from '../components/Admin/Master/DealersAndManufacturers/Edit';
import AddServices from '../components/Admin/Master/Services/Add';
import EditServices from '../components/Admin/Master/Services/Edit';
import AddCourierCompanie from '../components/Admin/Master/CourierCompanies/Add';
import EditCourierCompanie from '../components/Admin/Master/CourierCompanies/Edit';
import Enquiry from '../pages/Admin/Enquiry';
import AddEnquiry from '../components/Admin/Enquiry/Add';
import EditEnquiry from '../components/Admin/Enquiry/Edit';
const ContactUsBoxed = lazy(() => import('../pages/Pages/ContactUsBoxed'));
const ContactUsCover = lazy(() => import('../pages/Pages/ContactUsCover'));
const ComingSoonBoxed = lazy(() => import('../pages/Pages/ComingSoonBoxed'));
const ComingSoonCover = lazy(() => import('../pages/Pages/ComingSoonCover'));
const ERROR404 = lazy(() => import('../pages/Pages/Error404'));
const ERROR500 = lazy(() => import('../pages/Pages/Error500'));
const ERROR503 = lazy(() => import('../pages/Pages/Error503'));
const Maintenence = lazy(() => import('../pages/Pages/Maintenence'));
const About = lazy(() => import('../pages/About'));
const Error = lazy(() => import('../components/Error'));

const routes = [
    // dashboard
    {
        path: '/',
        element: (
            <AdminProtected>
                <AdminDashboard />
            </AdminProtected>
        ),
    },
    {
        path: '/admin/state',
        element: (
            <AdminProtected>
                <State />
            </AdminProtected>
        ),
    },
    {
        path: '/admin/state/add',
        element: (
            <AdminProtected>
                <AddState />
            </AdminProtected>
        ),
    },
    {
        path: '/admin/state/edit',
        element: (
            <AdminProtected>
                <EditState />
            </AdminProtected>
        ),
    },
    {
        path: '/admin/city',
        element: (
            <AdminProtected>
                <City />
            </AdminProtected>
        ),
    },
    {
        path: '/admin/city/add',
        element: (
            <AdminProtected>
                <AddCity />
            </AdminProtected>
        ),
    },
    {
        path: '/admin/city/edit',
        element: (
            <AdminProtected>
                <EditCity />
            </AdminProtected>
        ),
    },
    {
        path: '/admin/items',
        element: (
            <AdminProtected>
                <Item />
            </AdminProtected>
        ),
    },
    {
        path: '/admin/items/add',
        element: (
            <AdminProtected>
                <AddItem />
            </AdminProtected>
        ),
    },
    {
        path: '/admin/items/edit',
        element: (
            <AdminProtected>
                <EditItem />
            </AdminProtected>
        ),
    },
    {
        path: '/admin/clients',
        element: (
            <AdminProtected>
                <Clients />
            </AdminProtected>
        ),
    },
    {
        path: '/admin/clients/add',
        element: (
            <AdminProtected>
                <AddClient />
            </AdminProtected>
        ),
    },
    {
        path: '/admin/clients/edit',
        element: (
            <AdminProtected>
                <EditClient />
            </AdminProtected>
        ),
    },
    {
        path: '/admin/engineers',
        element: (
            <AdminProtected>
                <Engineers />
            </AdminProtected>
        ),
    },
    {
        path: '/admin/engineers/add',
        element: (
            <AdminProtected>
                <AddEngineer />
            </AdminProtected>
        ),
    },
    {
        path: '/admin/engineers/edit',
        element: (
            <AdminProtected>
                <EditEngineer />
            </AdminProtected>
        ),
    },
    {
        path: '/admin/tools',
        element: (
            <AdminProtected>
                <Tools />
            </AdminProtected>
        ),
    },
    {
        path: '/admin/tools/add',
        element: (
            <AdminProtected>
                <AddTool />
            </AdminProtected>
        ),
    },
    {
        path: '/admin/tools/edit',
        element: (
            <AdminProtected>
                <EditTool />
            </AdminProtected>
        ),
    },
    {
        path: '/admin/dealer-and-manufacture',
        element: (
            <AdminProtected>
                <DealersAndManufacturers />
            </AdminProtected>
        ),
    },
    {
        path: '/admin/dealer-and-manufacture/add',
        element: (
            <AdminProtected>
                <AddDealerAndManufacturer />
            </AdminProtected>
        ),
    },
    {
        path: '/admin/dealer-and-manufacture/edit',
        element: (
            <AdminProtected>
                <EditDealerAndManufacturer />
            </AdminProtected>
        ),
    },
    {
        path: '/admin/services',
        element: (
            <AdminProtected>
                <Services />
            </AdminProtected>
        ),
    },
    {
        path: '/admin/services/add',
        element: (
            <AdminProtected>
                <AddServices />
            </AdminProtected>
        ),
    },
    {
        path: '/admin/services/edit',
        element: (
            <AdminProtected>
                <EditServices />
            </AdminProtected>
        ),
    },
    {
        path: '/admin/courier-companies',
        element: (
            <AdminProtected>
                <CourierCompanies />
            </AdminProtected>
        ),
    },
    {
        path: '/admin/courier-companies/add',
        element: (
            <AdminProtected>
                <AddCourierCompanie />
            </AdminProtected>
        ),
    },
    {
        path: '/admin/courier-companies/edit',
        element: (
            <AdminProtected>
                <EditCourierCompanie />
            </AdminProtected>
        ),
    },
    {
        path: '/admin/enquiry',
        element: (
            <AdminProtected>
                <Enquiry />
            </AdminProtected>
        ),
    },
    {
        path: '/admin/enquiry/add',
        element: (
            <AdminProtected>
                <AddEnquiry />
            </AdminProtected>
        ),
    },
    {
        path: '/admin/enquiry/edit',
        element: (
            <AdminProtected>
                <EditEnquiry />
            </AdminProtected>
        ),
    },
    // pages
    {
        path: '/pages/contact-us-boxed',
        element: <ContactUsBoxed />,
        layout: 'blank',
    },
    {
        path: '/pages/contact-us-cover',
        element: <ContactUsCover />,
        layout: 'blank',
    },
    {
        path: '/pages/coming-soon-boxed',
        element: <ComingSoonBoxed />,
        layout: 'blank',
    },
    {
        path: '/pages/coming-soon-cover',
        element: <ComingSoonCover />,
        layout: 'blank',
    },
    {
        path: '/pages/error404',
        element: <ERROR404 />,
        layout: 'blank',
    },
    {
        path: '/pages/error500',
        element: <ERROR500 />,
        layout: 'blank',
    },
    {
        path: '/pages/error503',
        element: <ERROR503 />,
        layout: 'blank',
    },
    {
        path: '/pages/maintenence',
        element: <Maintenence />,
        layout: 'blank',
    },
    {
        path: '/login',
        element: <Login />,
        layout: 'blank',
    },
    {
        path: '/about',
        element: <About />,
        layout: 'blank',
    },
    {
        path: '*',
        element: <Error />,
        layout: 'blank',
    },
];

export { routes };
