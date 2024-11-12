import { useEffect, useState } from 'react';
import useAxiosPublic from '../../Hooks/useAxiosPublic';
import { Helmet } from 'react-helmet';
import { flexRender, getCoreRowModel, useReactTable } from '@tanstack/react-table';
import { IoCheckmarkDoneSharp } from "react-icons/io5";
import Swal from 'sweetalert2';

const DashboardShowAllAppointments = () => {
  const [bookings, setBookings] = useState([]);
  const axiosPublic = useAxiosPublic();

  // Fetch all bookings
  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const response = await axiosPublic.get('/bookings');
        setBookings(response.data);
      } catch (error) {
        console.error('Error fetching bookings:', error);
      }
    };
    fetchBookings();
  }, []);

  const columns = [
    {
      accessorFn: (_, index) => index + 1,
      id: 'No',
      header: 'No',
    },
    {
      accessorKey: 'serviceInfo.imageUrl',
      id: 'Service Picture',
      header: 'Service Picture',
      cell: ({ row }) => (
        <img src={row.original.serviceInfo.imageUrl} alt="Service" style={{ width: '50px' }} />
      ),
    },
    {
      accessorKey: 'serviceInfo.title',
      id: 'Service Name',
      header: 'Service Name',
    },
    {
      accessorKey: 'serviceInfo.doctorName',
      id: 'Doctor Name',
      header: 'Doctor Name',
    },
    {
      accessorKey: 'userInfo.userImageUrl',
      id: 'User Image',
      header: 'User Image',
      cell: ({ row }) => (
        <img
          src={row.original.userInfo.userImageUrl}
          alt="User"
          style={{ width: '50px', borderRadius: '50%' }}
        />
      ),
    },
    {
      accessorKey: 'userInfo.name',
      id: 'User Name',
      header: 'User Name',
    },
    {
      accessorKey: 'date',
      id: 'Date',
      header: 'Date',
    },
    {
      accessorKey: 'time',
      id: 'Time',
      header: 'Time',
    },
    {
      accessorKey: 'paymentMethod',
      id: 'Payment Method',
      header: 'Payment Method',
    },
    {
      accessorKey: 'status',
      id: 'Status',
      header: 'Status',
    },
    {
        id: 'Actions',
        header: 'Actions',
        cell: ({ row }) => (
          <button
            className="text-green-500 hover:text-green-700"
            title="Update Status"
            onClick={() => handleActionClick(row.original._id)}
          >
            <IoCheckmarkDoneSharp size={20} />
          </button>
        ),
      },
  ];

  const handleActionClick = (bookingId) => {
    Swal.fire({
      title: 'Update Booking Status',
      showCancelButton: true,
      showDenyButton: true,
      showConfirmButton: true,
      confirmButtonText: 'Confirmed',
      denyButtonText: 'Pending',
      cancelButtonText: 'Cancelled',
    }).then(async (result) => {
      let status;
      if (result.isConfirmed) {
        status = 'Confirmed';
      } else if (result.isDenied) {
        status = 'Pending';
      } else if (result.isDismissed) {
        status = 'Cancelled';
      }
  
      if (status) {
        try {
          const response = await axiosPublic.put(`/bookings/${bookingId}`, { status });
          if (response.status === 200) {
            Swal.fire('Status Updated', `Booking status set to: ${status}`, 'success');
            setBookings((prevBookings) =>
              prevBookings.map((booking) =>
                booking._id === bookingId ? { ...booking, status } : booking
              )
            );
          }
        } catch (error) {
          console.error('Error updating booking status:', error);
          Swal.fire('Error', 'Failed to update booking status. Please try again.', 'error');
        }
      }
    });
  };
  

  const table = useReactTable({
    data: bookings,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div>
      <Helmet>
        <title>Doc | Dashboard | All Bookings</title>
      </Helmet>

      <div className="flex justify-center items-center">
        <div className="w-full max-w-6xl p-4 bg-white shadow-md rounded-lg">
          <h1 className="text-2xl lg:text-4xl font-bold text-gray-700 text-start mb-4">
            All Appointments <span className="text-[#F7A582] ml-1 text-3xl border-2 border-[#F7A582] hidden lg:inline rounded px-2">{bookings.length}</span>
          </h1>
          <table className="min-w-full border border-gray-300">
            <thead>
              {table.getHeaderGroups().map((headerGroup) => (
                <tr key={headerGroup.id} className="bg-gray-200">
                  {headerGroup.headers.map((header) => (
                    <th
                      key={header.id}
                      className="px-4 py-3 text-sm lg:text-base font-bold text-gray-800 border text-center"
                    >
                      {header.isPlaceholder
                        ? null
                        : flexRender(header.column.columnDef.header, header.getContext())}
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody>
              {table.getRowModel().rows.map((row) => (
                <tr
                  key={row.id}
                  className={row.index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}
                >
                  {row.getVisibleCells().map((cell) => (
                    <td key={cell.id} className="px-4 py-2 border text-center">
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DashboardShowAllAppointments;
