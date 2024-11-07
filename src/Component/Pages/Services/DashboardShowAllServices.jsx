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
            "https://www.freeiconspng.com/thumbs/no-image-icon/no-image-icon-15.png"
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

  // update service
  const handleEdit = (service) => {
    Swal.fire({
      title: '<h2 style="color: #07332F;">Update Service</h2>',
      html: `
        <div style="display: flex; flex-direction: column; align-items: center; gap: 15px;">
          <!-- Service Image -->
          <img 
            src="${service.imageUrl}" 
            alt="Service Image" 
            style="width: 100px; height: 100px; object-fit: cover; border-radius: 10px;" 
          />
    
          <div style="display: flex; flex-direction: column; gap: 5px; width: 100%;">
            <div style="display: flex; flex-direction: column;">
              <label for="title" style="font-weight: bold; align-self: flex-start; margin-left: 30px; color: #07332F;">Service Name:</label>
              <input 
                id="title" 
                name="title" 
                class="swal2-input" 
                style="width: 88%; padding: 10px; font-size: 14px;" 
                placeholder="Service Name" 
                value="${service.title}" 
              />
            </div>
            
            <div style="display: flex; flex-direction: column;">
              <label for="date" style="font-weight: bold; align-self: flex-start; margin-left: 30px; color: #07332F;">Start Date:</label>
              <input 
                id="date" 
                name="date" 
                type="date" 
                class="swal2-input" 
                style="width: 88%; padding: 10px; font-size: 14px;" 
                value="${service.date}" 
              />
            </div>
    
            <div style="display: flex; flex-direction: column; gap: 5px;">
              <label for="description" style="font-weight: bold; color: #07332F;">Description:</label>
              <textarea 
                id="description" 
                name="description" 
                class="swal2-input" 
                style="width: 100%; height: 100px; padding: 10px; font-size: 14px; resize: vertical;" 
                placeholder="Description"
              >${service.description}</textarea>
            </div>
    
            <div style="display: flex; width: 94%; margin-top: 10px;">
              <div style="display: flex; flex-direction: column; flex: 1;">
                <label for="startTime" style="font-weight: bold; align-self: flex-start; margin-left: 30px; color: #07332F;">Start Time:</label>
                <input 
                  id="startTime" 
                  name="startTime" 
                  class="swal2-input" 
                  style="width: 88%; padding: 10px; font-size: 14px;" 
                  placeholder="Start Time" 
                  value="${service.startTime}" 
                />
              </div>
    
              <div style="display: flex; flex-direction: column; flex: 1;">
                <label for="endTime" style="font-weight: bold; align-self: flex-start; margin-left: 30px; color: #07332F;">End Time:</label>
                <input 
                  id="endTime" 
                  name="endTime" 
                  class="swal2-input" 
                  style="width: 88%; padding: 10px; font-size: 14px;" 
                  placeholder="End Time" 
                  value="${service.endTime}" 
                />
              </div>
            </div>
    
            <div style="display: flex; flex-direction: column; margin-top: 10px;">
              <label for="doctor_fees" style="font-weight: bold; color: #07332F;">Doctor Fees:</label>
              <input 
                id="doctor_fees" 
                name="doctor_fees" 
                class="swal2-input" 
                style="width: 88%; padding: 10px; font-size: 14px;" 
                placeholder="Doctor Fees" 
                value="${service.doctor_fees}" 
              />
            </div>
          </div>
        </div>
      `,
      showCancelButton: true,
      confirmButtonText: '<span style="color: white; padding: 5px 15px; border-radius: 5px;">Save Changes</span>',
      cancelButtonText: '<span style="color: #07332F;">Cancel</span>',
      background: '#F7F7F7',
      customClass: {
        popup: 'rounded-lg shadow-md border border-gray-200',
      },
      preConfirm: () => {
        return {
          title: document.getElementById('title').value,
          date: document.getElementById('date').value,
          description: document.getElementById('description').value,
          startTime: document.getElementById('startTime').value,
          endTime: document.getElementById('endTime').value,
          doctor_fees: document.getElementById('doctor_fees').value,
          imageUrl: service.imageUrl,
        };
      },
    }).then((result) => {
      if (result.isConfirmed) {
        updateService(service._id, result.value);
      }
    });
    
    
  };
  
  const updateService = async (id, updatedData) => {
    try {
      const response = await axiosPublic.put(`/services/${id}`, updatedData);
      if (response.status === 200) {
        setServices((prevServices) =>
          prevServices.map((service) =>
            service._id === id ? { ...service, ...updatedData } : service
          )
        );
        Swal.fire('Updated!', 'Service details have been updated.', 'success');
      }
    } catch (error) {
      console.error("Error updating service:", error);
      Swal.fire('Error!', 'Failed to update the service. Please try again.', 'error');
    }
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
            <h1 className="text-2xl lg:text-4xl font-bold text-gray-800 text-center ">
              All Services <span className="text-[#F7A582] ml-1 text-3xl  border-2 border-[#F7A582] hidden lg:inline rounded px-2">{services.length}</span>
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
