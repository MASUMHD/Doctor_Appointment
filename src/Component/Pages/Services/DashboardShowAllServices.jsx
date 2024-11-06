import { useEffect, useState } from "react";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { FaUserEdit, FaTrash } from "react-icons/fa";
import {
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { Link } from "react-router-dom";
import { HiArrowSmallRight } from "react-icons/hi2";
import { Helmet } from "react-helmet";
import Swal from "sweetalert2";

const DashboardShowAllServices = () => {
  const [services, setServices] = useState([]);
  const axiosPublic = useAxiosPublic();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosPublic.get("/services");
        console.log("Services data:", response.data);
        setServices(response.data);
      } catch (error) {
        console.error("Error fetching services:", error);
      }
    };

    fetchData();
  }, [axiosPublic]);

  const columns = [
    {
      accessorKey: "index",
      header: "No",
      cell: (info) => info.row.index + 1,
    },
    {
      accessorKey: "servicePicture",
      header: "Service Picture",
      cell: ({ row }) => (
        <img
          src={
            row.original.imageUrl ||
            "https://cdn-icons-png.flaticon.com/512/2919/2919906.png"
          }
          alt="Profile"
          className="w-10 h-10 rounded-full"
        />
      ),
    },
    {
      accessorKey: "title",
      header: "Service Name",
    },
    {
      accessorKey: "date",
      header: "Start Date",
    },
    {
      id: "actions",
      header: "Actions",
      cell: ({ row }) => (
        <div className="flex justify-evenly text-lg">
          <button
            onClick={() => handleEdit(row.original)}
            className="text-blue-500 hover:text-blue-700 border border-blue-500 px-2 py-1 rounded"
          >
            <FaUserEdit />
          </button>
          <button
            onClick={() => handleDelete(row.original._id)}
            className="text-red-500 hover:text-red-700 border border-red-500 px-2 py-1 rounded"
          >
            <FaTrash />
          </button>
        </div>
      ),
    },
  ];

  const handleEdit = () => {
    console.log("Edit clicked for service:");
  };

  // Delete service
  const handleDelete = (serviceId) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const response = await axiosPublic.delete(`/services/${serviceId}`);

          if (response.status === 200) {
            // Update the services state to remove the deleted service
            setServices((prevServices) =>
              prevServices.filter((service) => service._id !== serviceId)
            );
            Swal.fire("Deleted!", "The service has been deleted.", "success");
          }
        } catch (error) {
          console.error("Error deleting service:", error);
          Swal.fire(
            "Error!",
            "Failed to delete the service. Please try again.",
            "error"
          );
        }
      }
    });
  };

  const table = useReactTable({
    columns,
    data: services,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div>
      <Helmet>
        <title>Doc | Dashboard | All Services</title>
      </Helmet>
      <div className="flex justify-center items-center ">
        <div className="w-full max-w-6xl p-4 bg-white shadow-md rounded-lg">
          <div className="flex justify-between items-center mb-5">
            <h1 className="text-2xl lg:text-4xl font-bold text-gray-700 text-center ">
              All Services
            </h1>
            <Link to="/dashboard/services">
              <button className="bg-[#F7A582] hover:bg-[#07332F] text-white font-bold py-2 px-4 rounded flex items-center">
                Add New Service{" "}
                <span>
                  <HiArrowSmallRight className="inline ml-1 text-2xl" />
                </span>
              </button>
            </Link>
          </div>

          <table className="min-w-full border border-gray-300">
            <thead>
              {table.getHeaderGroups().map((headerGroup) => (
                <tr className="bg-gray-200" key={headerGroup.id}>
                  {headerGroup.headers.map((header) => (
                    <th
                      key={header.id}
                      className="px-4 py-3 text-sm lg:text-base font-bold text-gray-800 border text-center"
                    >
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody>
              {table.getRowModel().rows.map((row) => (
                <tr
                  key={row.id}
                  className={row.index % 2 === 0 ? "bg-gray-100" : "bg-white"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <td key={cell.id} className="px-4 py-2 border text-center">
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
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

export default DashboardShowAllServices;
