import logoA from '../assets/quotationImg/logo.png';
import logoB from '../assets/quotationImg/images.jpg';
import signature from '../assets/quotationImg/signature.png';
import qrcode from '../assets/quotationImg/qrcode.png';
import { FaAngleRight } from 'react-icons/fa6';

const Preview = () => {
    return (
        <div className="w-full min-h-screen bg-white p-8 absolute top-0 left-0 z-50 lg:px-[15%] ">
            <div className="max-w-6xl mx-auto rounded-lg p-6 bg-white w-[50rem] ">
                {/* Header */}
                <div className="flex justify-between items-center mb-8">
                    <div>
                        <img src={logoB} alt="Logo B" className="h-28" />
                        <p className="text-sm font-bold text-[.6rem]">AERB Registration No. 14-AFSXE-2148</p>
                    </div>
                    <div className="text-center">
                        <h1 className="text-2xl font-bold uppercase ">Quotation</h1>
                    </div>
                    <div className="text-right">
                        <img src={logoA} alt="Logo A" className="h-28 ml-auto" />
                        <p className="text-sm font-bold text-[.6rem]">NABL Accreditation No TC-9843</p>
                    </div>
                </div>

                {/* Company and Recipient Info */}
                <div className="flex w-full  justify-between">
                    <div>
                        <table className="text-sm w-full text-[.6rem]">
                            {/* <tbody> */}
                            <tr className="">
                                <td className="py-1">Date:</td>
                                <td className="py-1 pl-2">22-Nov-2024</td>
                            </tr>
                            <tr>
                                <td className="py-1 font-bold pb-4">To:</td>
                                <td
                                    className="py-1 pl-2"
                                    style={{
                                        lineHeight: '13px',
                                    }}
                                >
                                    <span className="font-bold">CIVIL HOSPITAL KOTLI</span>
                                    <br />
                                    KOTLI, MANDI, HIMACHAL PRADESH-175003
                                </td>
                            </tr>
                            {/* </tbody> */}
                        </table>
                    </div>
                    <div
                        className="text-sm text-[.6rem]"
                        style={{
                            lineHeight: '13px',
                        }}
                    >
                        <p className="font-bold text-black">ANTESO Biomedical (OPC) Pvt. Ltd.</p>
                        <p>Flat No. 290, 2nd Floor, Block D,</p>
                        <p>Pocket 7, Sector 6, Rohini,</p>
                        <p>New Delhi – 110 085, INDIA</p>
                        <p>Mobile: +91 8470909720 / 8951818690</p>
                        <p>Email: info@antesobiomedicalopc.com</p>
                    </div>
                </div>

                {/* Contact Info */}
                <div className="mb-6">
                    <table className="text-sm w-full text-[.6rem]">
                        {/* <tbody> */}
                        <tr>
                            <td className="py-1 font-bold">Email:</td>
                            <td className="py-1 pl-2">
                                {' '}
                                <a href="mailto:khalid020288@gmail.com" className="text-blue-600 hover:underline">
                                    khalid020288@gmail.com
                                </a>
                            </td>
                        </tr>
                        <tr>
                            <td className="py-1 font-bold">Contact:</td>
                            <td className="py-1 pl-2">80917 50188</td>
                        </tr>
                        <tr>
                            <td className="py-1 font-bold">From: Anjana Thakur,</td>
                            <td className="py-1 pl-2"> M: 9317509720</td>
                        </tr>
                        <tr className="h-5"></tr>
                        <tr className="">
                            <td className="py-1 font-bold">Quotation:</td>
                            <td className="py-1 pl-2 font-bold">ANTESO2024110654_Quotation for QA Test and License Renewal of X-Ray Machine_CIVIL HOSPITAL KOTLI, MANDI</td>
                        </tr>
                        <tr>
                            <td className="py-1 font-bold">Expires:</td>
                            <td className="py-1 pl-2">30 days from above date</td>
                        </tr>
                        {/* </tbody> */}
                    </table>
                </div>

                {/* Items Table */}

                <div className="overflow-x-auto">
                    <table
                        className="text-[.6rem]"
                        style={{
                            border: '1px solid black',
                        }}
                    >
                        <tr className="bg-blue-500 ">
                            <th className="border border-black text-start">Sl. No.</th>
                            <th className="border border-black text-start">Description</th>
                            <th className="border border-black px-4">Qty</th>
                            <th className="border border-black px-4">Unit Price</th>
                            <th className="border border-black px-4">Total</th>
                        </tr>
                        <tr>
                            <td className="border border-black text-center">1</td>
                            <td className="border border-black">QA Test and License Renewal of X-Ray Machine</td>
                            <td className="border border-black text-center">1</td>
                            <td className="border border-black text-left">₹ 7,500.00</td>
                            <td className="border border-black text-right">₹ 7,500.00</td>
                        </tr>
                        <tr>
                            <td className="border border-black">&nbsp;</td>
                            <td className="border border-black">&nbsp;</td>
                            <td className="border border-black">&nbsp;</td>
                            <td className="border border-black">&nbsp;</td>
                            <td className="border border-black">&nbsp;</td>
                        </tr>
                        <tr>
                            <td className="border border-black">&nbsp;</td>
                            <td className="border border-black">&nbsp;</td>
                            <td className="border border-black">&nbsp;</td>
                            <td className="border border-black">&nbsp;</td>
                            <td className="border border-black">&nbsp;</td>
                        </tr>
                        <tr>
                            <td className="border border-black">&nbsp;</td>
                            <td className="border border-black">&nbsp;</td>
                            <td className="border border-black">&nbsp;</td>
                            <td className="border border-black">&nbsp;</td>
                            <td className="border border-black">&nbsp;</td>
                        </tr>
                        <tr>
                            <td className="border border-black">&nbsp;</td>
                            <td className="border border-black">&nbsp;</td>
                            <td className="border border-black">&nbsp;</td>
                            <td className="border border-black">&nbsp;</td>
                            <td className="border border-black">&nbsp;</td>
                        </tr>
                        <tr>
                            <td className="border border-black">&nbsp;</td>
                            <td className="border border-black">&nbsp;</td>
                            <td className="border border-black">&nbsp;</td>
                            <td className="border border-black">&nbsp;</td>
                            <td className="border border-black">&nbsp;</td>
                        </tr>
                        <tr>
                            <td className="border border-black">&nbsp;</td>
                            <td className="border border-black">&nbsp;</td>
                            <td className="border border-black">&nbsp;</td>
                            <td className="border border-black">&nbsp;</td>
                            <td className="border border-black">&nbsp;</td>
                        </tr>
                        <tr>
                            <td className="border border-black">&nbsp;</td>
                            <td className="border border-black">&nbsp;</td>
                            <td className="border border-black">&nbsp;</td>
                            <td className="border border-black">&nbsp;</td>
                            <td className="border border-black">&nbsp;</td>
                        </tr>
                        <tr>
                            <td colSpan={4} className="border border-black text-right pr-2">
                                Total
                            </td>
                            <td className="border border-black pl-2">₹ 7,500.00</td>
                        </tr>
                        <tr>
                            <td colSpan={4} className="border border-black text-right pr-2">
                                GST @18%
                            </td>
                            <td className="border border-black pl-2">₹ 1,350.00</td>
                        </tr>
                        <tr>
                            <td colSpan={4} className="border border-black text-right pr-2">
                                Grand Total
                            </td>
                            <td className="border border-black pl-2">₹ 8,850.00</td>
                        </tr>
                        <tr>
                            <td colSpan={5} className="border border-black font-bold">
                                Total Amt (in words): <span className="font-normal">Eight Thousand Eight Hundred and Fifty Only.</span>
                            </td>
                        </tr>
                    </table>
                </div>

                <div className=" mt-3">
                    <h4 className=" ml-3  text-[.6rem]">Terms & Conditions:</h4>
                    <ul
                        className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300"
                        style={{
                            fontSize: '.6rem',
                            lineHeight: '4px',
                        }}
                    >
                        <li>In case of License renewal, eLora ID and Password need to be provided by you.</li>
                        <li>The quotation applies only to the equipment mentioned above. Charges for any additional parameters will be extra.</li>
                        <li>Repeated Q/A for failed equipment and repeated visits for the same machine will be charged extra.</li>
                        <li>QA reports will be submitted only after bank realization of 100% payment. In urgent cases, a minimum of 24 hours is required to share the QA report.</li>
                        <li>QA reports are valid for 2 years for X-Ray Machines and 5 years for Dental X-Rays.</li>
                        <li>Prices are valid only for the duration of this quotation and are subject to change thereafter.</li>
                        <li>Services will commence within a week of receiving a formal Purchase Order.</li>
                        <li>All payments must be made by DD, e-Transfer, or Cheque payable to “ANTESO Biomedical (OPC) Pvt. Ltd.”</li>
                        <li>Terms of payment: 100% advance payment.</li>
                        <li>Cheques must be couriered by the customer to our registered address.</li>
                        <li>QA tests will follow AERB guidelines. We are not responsible for any machine breakdowns during testing.</li>
                        <li>For institute or RSO registration, OTPs will be sent for verification. Please share them promptly.</li>
                        <li>Please ensure the accuracy of email IDs before sharing, as they will be used as-is and cannot be recovered later.</li>
                        <li className="text-green-600">
                            Share your GST number with the work order if applicable; otherwise, the order will be considered unregistered and no future claims will be entertained.
                        </li>
                    </ul>
                </div>
                <div className=" mt-4 flex justify-between items-end text-xs">
                    <div>
                        <img src={signature} alt="Signature" className="mb-2 " />
                        <div
                            className="space-y-1 "
                            style={{
                                lineHeight: '10px',
                            }}
                        >
                            <p className="text-[.6rem]">
                                <span className="font-medium">A/C No.:</span> 50200007211263
                            </p>
                            <p className="text-[.6rem]">
                                <span className="font-medium">IFSC:</span> HDFC0000711
                            </p>
                            <p className="text-[.6rem]">HDFC BANK PUSHPANJALI ENCLAVE PITAMPURA</p>
                        </div>
                    </div>

                    <div
                        className="text-center"
                        style={{
                            lineHeight: '5px',
                        }}
                    >
                        <p className="font-bold text-[.6rem]">OUR ACCOUNT DETAILS</p>
                        <p className="pb-10 mt-2 font-bold text-[.6rem]">
                            <span className=" ">GST NO:</span> 07AAMCA8142J1ZE
                        </p>
                    </div>

                    <div className="text-right space-y-1">
                        <img src={qrcode} alt="QR Code" className="h-32 mx-auto mb-2" />
                        <table>
                            <tr
                                style={{
                                    fontSize: '.4rem',
                                }}
                            >
                                <td className="pb-3 text-end">Merchant Name:</td>
                                <td className="w-[7rem] leading-none text-start pl-2">ANTESO BIOMEDICAL PRIVATE LIMITED</td>
                            </tr>
                            <tr
                                style={{
                                    fontSize: '.4rem',
                                }}
                            >
                                <td className="text-end">Mobile Number:</td>
                                <td className="text-start pl-2">8470909720</td>
                            </tr>
                        </table>
                        <div
                            className="text-center text-[.4rem]"
                            style={{
                                lineHeight: '8px',
                            }}
                        >
                            <p>Steps to PAy UPI QR Code </p>
                            <p className="flex justify-center items-center flex-wrap w-[10rem] ">
                                Oppen UPI app <FaAngleRight /> Select Type to Pay <FaAngleRight /> Scan QR Code <FaAngleRight /> Enter Amount
                            </p>
                        </div>

                        <hr className="bg-gray-700 h-[1.5px]" />
                        <div className="">
                            <div className=" w-[7rem] m-auto">
                                <p className="text-left text-[.6rem]">
                                    <span className="font-medium text-[.6rem] ">A/C No:</span> 344305001088
                                </p>
                                <p className="text-left text-[.6rem]">
                                    <span className="font-medium text-[.6rem] ">IFSC Code:</span> ICIC0003443
                                </p>
                                <p className="text-[.6rem] text-left">ICICI BANK ROHINI</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div
                    className="overflow-x-auto mt-8 text-center"
                    style={{
                        lineHeight: '1rem',
                    }}
                >
                    <p className="text-[.6rem]">
                        For any enquiry contact us{' '}
                        <a href="#" className="text-blue-800">
                            info@antesobiomedicalopc.com or antesobiomedical@gmail.com
                        </a>{' '}
                    </p>
                    <p className="text-[.6rem]">Feel free to call us & Thank you for your enquiry</p>
                </div>
            </div>
        </div>
    );
};

export default Preview;
