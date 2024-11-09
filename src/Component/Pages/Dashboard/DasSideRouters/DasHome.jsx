import { Line, Pie } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement, ArcElement } from 'chart.js';
import { AiOutlinePieChart } from 'react-icons/ai';
import { FaUserDoctor } from 'react-icons/fa6';
import { HiOutlineUsers } from 'react-icons/hi2';

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, ArcElement);

const DasHome = () => {
  // Data for Line Chart
  const lineData = {
    labels: ['2013', '2014', '2015', '2016', '2017', '2018'],
    datasets: [
      {
        label: 'Patient',
        data: [50, 100, 75, 125, 50, 150],
        fill: true,
        backgroundColor: 'rgba(236, 72, 153, 0.2)',
        borderColor: 'rgba(236, 72, 153, 1)',
        tension: 0.3,
      },
    ],
  };

  // Data for Pie Chart
  const pieData = {
    labels: ['Completed', 'Pending', 'Canceled'],
    datasets: [
      {
        data: [30, 45, 25],
        backgroundColor: ['#ff6384', '#36a2eb', '#ffcd56'],
        hoverBackgroundColor: ['#ff6384', '#36a2eb', '#ffcd56'],
      },
    ],
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen -mt-8">
      {/* Top Row with Statistic Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8 mt-6">
        {/* Doctor Card */}
        <div className="bg-white rounded-lg shadow p-4 flex flex-col  h-44">
          <div className="flex items-center gap-7">
            <div className="bg-pink-100 p-2 rounded-lg h-20 w-20 items-center text-center justify-center">
              <FaUserDoctor className="text-pink-500 text-4xl mx-auto mt-3" />
            </div>
            <h2 className="text-5xl font-bold text-[#6C6B6B]">168</h2>
          </div>
          
          <div className="w-full mt-5 h-2 bg-pink-200 rounded-full overflow-hidden ">
            <div className="h-full bg-pink-500" style={{ width: '80%' }}></div>
          </div>
          <p className="text-gray-500 mt-2 text-start">Doctor</p>
        </div>

        {/* Patient Card */}
        <div className="bg-white rounded-lg shadow p-4 flex flex-col  h-44">
          <div className="flex items-center gap-7">
            <div className="bg-green-100 p-2 rounded-lg h-20 w-20 items-center text-center justify-center">
              <HiOutlineUsers className="text-green-500 text-4xl mx-auto mt-3" />
            </div>
            <h2 className="text-5xl font-bold text-[#6C6B6B]">487</h2>
          </div>
          
          <div className="w-full mt-5 h-2 bg-green-200 rounded-full overflow-hidden">
            <div className="h-full bg-green-500" style={{ width: '90%' }}></div>
          </div>
          <p className="text-gray-500 mt-2 text-start">Patients</p>
        </div>

        {/* Appointment Card */}
        <div className="bg-white rounded-lg shadow p-4 flex flex-col  h-44">
          <div className="flex items-center gap-7">
            <div className="bg-yellow-100 p-2 rounded-lg h-20 w-20 items-center text-center justify-center">
              <AiOutlinePieChart className="text-yellow-500 text-4xl mx-auto mt-3" />
            </div>
            <h2 className="text-5xl font-bold text-[#6C6B6B]">95</h2>
          </div>
          
          <div className="w-full mt-5 h-2 bg-yellow-200 rounded-full overflow-hidden">
            <div className="h-full bg-yellow-500" style={{ width: '50%' }}></div>
          </div>
          <p className="text-gray-500 mt-2 text-start">Appointment</p>
        </div>
      </div>

      {/* Bottom Row with Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-12">
        {/* Patient Line Chart */}
        <div className="bg-white rounded-lg shadow p-4">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">Patient</h2>
          <div className="h-64">
            <Line data={lineData} options={{ responsive: true, maintainAspectRatio: false }} />
          </div>
        </div>

        {/* Appointment Pie Chart */}
        <div className="bg-white rounded-lg shadow p-4">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">Appointment</h2>
          <div className="h-64 flex justify-center items-center">
            <Pie data={pieData} options={{ responsive: true, maintainAspectRatio: false }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DasHome;
