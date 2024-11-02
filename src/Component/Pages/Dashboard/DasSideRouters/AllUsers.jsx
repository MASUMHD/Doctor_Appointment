import { useEffect, useState } from 'react';
import { useReactTable, getCoreRowModel, flexRender } from '@tanstack/react-table';
import axios from 'axios';
import { FaUserEdit, FaTrash } from "react-icons/fa";

const AllUsers = () => {
  const [users, setUsers] = useState([]);

  // Fetch users from backend
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('http://localhost:5000/users');
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
      accessorKey: 'index',
      header: 'No',
      cell: (info) => info.row.index + 1,
    },
    {
      accessorKey: 'profilePicture',
      header: 'Profile Picture',
      cell: ({ row }) => (
        <img
          src={row.original.profilePicture || 'default-profile.png'} // Placeholder for users without a profile picture
          alt="Profile"
          className="w-10 h-10 rounded-full"
        />
      ),
    },
    {
      accessorKey: 'name',
      header: 'User Name',
    },
    {
      accessorKey: 'role',
      header: 'Role',
    },
    {
      id: 'actions',
      header: 'Actions',
      cell: ({ row }) => (
        <div className="flex justify-center gap-2">
          <button
            onClick={() => handleRoleChange(row.original)}
            className="text-blue-500 hover:text-blue-700"
          >
            <FaUserEdit />
          </button>
          <button
            onClick={() => handleDelete(row.original)}
            className="text-red-500 hover:text-red-700"
          >
            <FaTrash />
          </button>
        </div>
      ),
    },
  ];

  const handleRoleChange = (user) => {
    // Add role change logic here
    console.log('Change role for:', user);
  };

  const handleDelete = (user) => {
    // Add delete logic here
    console.log('Delete user:', user);
  };

  const table = useReactTable({
    data: users,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-4xl p-4 bg-white shadow-md rounded-lg">
        <h1 className="text-2xl font-bold text-gray-700 text-center mb-4">All Users</h1>
        <table className="min-w-full border border-gray-300">
          <thead>
            {table.getHeaderGroups().map(headerGroup => (
              <tr key={headerGroup.id} className="bg-gray-200">
                {headerGroup.headers.map(header => (
                  <th
                    key={header.id}
                    className="px-4 py-2 text-left text-sm font-semibold text-gray-600 border"
                  >
                    {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.map(row => (
              <tr key={row.id} className={row.index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}>
                {row.getVisibleCells().map(cell => (
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
  );
};

export default AllUsers;
