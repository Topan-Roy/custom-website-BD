import logo from '../../assets/Frame2.png'
import logo1 from '../../assets/Frame4.png'
export default function Earning() {

    const transactions = [
        {
            id: "000-3839###",
            title: "Lesson with Rokey Mahmud",
            date: "8 Jan 2025",
            amount: 35,
            status: "Completed",
        },
        {
            id: "000-3839###",
            title: "Lesson with Rokey Mahmud",
            date: "8 Jan 2025",
            amount: 35,
            status: "Completed",
        },
    ];

    return (
        <div className="  min-h-screen">
           
            <h2 className="text-[#6657E2] font-semibold text-xl mb-1">
                Earnings
            </h2>
            <p className="text-gray-500 text-sm mb-6">
                Track your earnings, view transaction history, and manage withdrawals.
            </p>
            <div className="w-full flex justify-end">
                <button className="mb-5 bg-gradient-to-r from-[#6657E2] to-[#903CD1] hover:opacity-90 text-white px-6 py-3 rounded-lg flex items-center gap-2 text-sm font-medium shadow-md">

                    Set up wallet
                </button>
            </div>
           
            <div className="flex gap-6 mb-8">
               
                <div className="flex-1 bg-white rounded-lg p-5 shadow-sm flex flex-col items-center gap-2">
                    <div className="p-2 rounded-md bg-purple-100">
                     
                        <img src={logo} alt="" />
                    </div>
                    <p className="text-gray-500 text-md">Pending</p>
                    <p className="text-xl text-[#585858] font-bold">0</p>
                </div>

                <div className="flex-1 bg-white rounded-lg p-5 shadow-sm flex flex-col items-center gap-2 relative">
                    <div className="p-2 rounded-md bg-purple-100">
                        
                        <img src={logo1} alt="" />
                    </div>
                    <p className="text-gray-500 text-md">Total Spent</p>
                    <p className="text-xl text-[#585858] font-bold">$90.00</p>

                   
                    <div className="absolute -top-2 -right-3 flex -space-x-2">


                    </div>
                </div>

               
                <div className="flex-1 bg-white rounded-lg p-5 shadow-sm flex flex-col items-center gap-2">
                    <div className="p-2 rounded-md bg-purple-100">
                     
                        <img src={logo1} alt="" />
                    </div>
                    <p className="text-gray-500 text-md">Completed</p>
                    <p className="text-xl text-[#585858] font-bold">3</p>
                </div>
            </div>



          
            <div className="bg-[#FFFFFF] rounded-lg p-5 space-y-4">
                <div className="  border border-gray-200 rounded-md p-4  items-center justify-between mb-3">
                    <h1 className="text-[#6657E2] font-semibold text-xl">Set up Your wallet</h1>
                    <p className='text-sm text-gray-400'>Add your payment details to start receiving your earnings.</p>

                </div>
                <h3 className="text-[#6657E2] font-semibold text-xl mb-3">
                    Transaction History
                </h3>

                {transactions.map((tx, i) => (
                    <div
                        key={i}
                        className="flex justify-between items-center border border-gray-200 rounded-md p-4"
                    >
                        <div className="flex items-center gap-3">
                            <div className="p-2 rounded-md bg-purple-100">
                               
                                <img src={logo1} alt="" />
                            </div>
                            <div>
                                <p className="text-[#6657E2] font-semibold text-xl">
                                    {tx.title}
                                </p>
                                <p className="text-xs text-gray-400">
                                    Transaction ID: {tx.id}
                                </p>
                                <p className="text-xs text-gray-400">{tx.date}</p>
                            </div>
                        </div>

                        <div className=" items-center">
                            <span className=" py-1 text-xs font-semibold rounded-full text-green-700 bg-green-100">
                                {tx.status}
                            </span>
                            <p className="text-purple-700 mt-3 font-semibold">${tx.amount}.00</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
