import { useEffect, useState } from "react";
import {
  useReactTable,
  getCoreRowModel,
  flexRender,
} from "@tanstack/react-table";
// import axios from 'axios';
import { FaUserEdit, FaTrash } from "react-icons/fa";
import Swal from "sweetalert2";
import UseAxiosPublic from "../../../Hooks/useAxiosPublic";
import { Helmet } from "react-helmet";

const AllUsers = () => {
  const [users, setUsers] = useState([]);
  const useAxiosPublic = UseAxiosPublic();

  // Fetch users from backend
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await useAxiosPublic.get(`/users`);
        setUsers(response.data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };
    fetchUsers();
  }, []);

  // Define columns
  const columns = [
    {
      accessorKey: "index",
      header: "No",
      cell: (info) => info.row.index + 1,
    },
    {
      accessorKey: "profilePicture",
      header: "Profile Picture",
      cell: ({ row }) => (
        <img
          src={
            row.original.profilePicture ||
            "https://cdn-icons-png.flaticon.com/512/2919/2919906.png"
          }
          alt="Profile"
          className="w-10 h-10 rounded-full"
        />
      ),
    },
    {
      accessorKey: "name",
      header: "User Name",
    },
    {
      accessorKey: "role",
      header: "Role",
    },
    {
      id: "actions",
      header: "Actions",
      cell: ({ row }) => (
        <div className="flex justify-evenly text-lg">
          {/* Role Change */}
          <button
            onClick={() => handleRoleChange(row.original)}
            className="text-blue-500 hover:text-blue-700 border border-blue-500 px-2 py-1 rounded"
          >
            <FaUserEdit />
          </button>
          <button
            onClick={() => handleDelete(row.original)}
            className="text-red-500 hover:text-red-700 border border-red-500 px-2 py-1 rounded"
          >
            <FaTrash />
          </button>
        </div>
      ),
    },
  ];

  const handleRoleChange = (user) => {
    Swal.fire({
      title: `Change Role for ${user.name}`,
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "Admin",
      cancelButtonText: "User",
    }).then(async (result) => {
      const newRole = result.isConfirmed ? "Admin" : "User";

      try {
        // Send the updated role to the backend
        const response = await useAxiosPublic.put(`/users/${user._id}`, {
          role: newRole,
        });

        if (response.status === 200) {
          // Update the user's role in the state
          setUsers((prevUsers) =>
            prevUsers.map((u) =>
              u._id === user._id ? { ...u, role: newRole } : u
            )
          );
          Swal.fire(
            "Updated!",
            `${user.name}'s role has been changed to ${newRole}.`,
            "success"
          );
        }
      } catch (error) {
        console.error("Error updating role:", error);
        Swal.fire(
          "Error!",
          "Failed to update the role. Please try again.",
          "error"
        );
      }
    });
  };

  // Delete user
  const handleDelete = (user) => {
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
          const response = await useAxiosPublic.delete(`/users/${user._id}`);

          if (response.status === 200) {
            // Update the users state to remove the deleted user
            setUsers((prevUsers) =>
              prevUsers.filter((u) => u._id !== user._id)
            );
            Swal.fire("Deleted!", `${user.name} has been deleted.`, "success");
          }
        } catch (error) {
          console.error("Error deleting user:", error);
          Swal.fire(
            "Error!",
            "Failed to delete the user. Please try again.",
            "error"
          );
        }
      }
    });
  };

  const table = useReactTable({
    data: users,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div>
      <Helmet>
        <title>Doc | Dashboard | All Users</title>
      </Helmet>
      <div className="flex justify-center items-center ">
        <div className="w-full max-w-6xl p-4 bg-white shadow-md rounded-lg">
          <h1 className="text-2xl lg:text-4xl font-bold text-gray-700 text-start mb-4">
            All Users <span className="text-[#F7A582] ml-1 text-3xl  border-2 border-[#F7A582] hidden lg:inline rounded px-2">{users.length}</span>
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
                    <td key={cell.id} className="px-4 py-2 border text-center ">
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

export default AllUsers;
