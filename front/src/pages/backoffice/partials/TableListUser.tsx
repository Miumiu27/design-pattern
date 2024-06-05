import { useEffect, useState } from 'react';
import axios from 'axios';
import '../../../assets/css/theme.css';
import Card from '../../../components/constants/Card';
import { IoTrashBinOutline } from 'react-icons/io5';
import { MdEdit } from 'react-icons/md';

interface User {
  id: number;
  name: string;
  firstname: string;
  department: string;
  job: string;
  role: string;
}

const TableListUser = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/users`);
        setUsers(response.data);
      } catch (err) {
        setError('Error fetching users');
      } finally {
        setLoading(false);
      }
    };
    fetchUsers();
  }, []);

  const handleDelete = async (id: number) => {
    try {
      await axios.delete(`${import.meta.env.VITE_API_URL}/users/${id}`);
      setUsers(users.filter(user => user.id !== id));
    } catch (error) {
      console.error('Error deleting user:', error);
      setError('Error deleting user');
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <>
      <Card>
        <table className="text-left w-full whitespace-nowrap text-sm">
          <thead className="text-gray-700">
            <tr className="font-semibold text-gray-600">
              <th scope="col" className="p-4">Nom et prénoms</th>
              <th scope="col" className="p-4">Profession</th>
              <th scope="col" className="p-4">Département</th>
              <th scope="col" className="p-4">Rôle</th>
              <th scope="col" className="p-4">Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => (
              <tr key={user.id}>
                <td className="p-4 font-semibold text-gray-600">{user.name} {user.firstname}</td>
                <td className="p-4">{user.job}</td>
                <td className="p-4">{user.department}</td>
                <td className="p-4">{user.role}</td>
                <td className="p-4">
                  <button
                    type="button"
                    className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                    onClick={() => handleDelete(user.id)}
                  >
                    <IoTrashBinOutline />
                  </button>
                  <button
                    type="button"
                    className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 shadow-lg shadow-green-500/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                  >
                    <MdEdit />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
    </>
  );
};

export default TableListUser;
