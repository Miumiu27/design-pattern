import { useEffect, useState } from 'react';
import axios from 'axios';
import '../../../assets/css/theme.css';
import { IoTrashBinOutline } from 'react-icons/io5';
import { MdEdit } from 'react-icons/md';

interface Document {
  content_id: number;
  title: string;
  contentType: string;
  createdAt: Date;
  lastModifiedAt: Date;
  status: string;
  body?: string;
}

const TableListDocument = () => {
  const [documents, setDocuments] = useState<Document[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchDocuments = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/contents/all-docs`);
        setDocuments(response.data);
      } catch (err) {
        setError('Error fetching documents');
      } finally {
        setLoading(false);
      }
    };
    fetchDocuments();
  }, []);

  const handleDelete = async (id: number) => {
    try {
      await axios.delete(`${import.meta.env.VITE_API_URL}/contents/${id}`);
      setDocuments(documents.filter(document => document.content_id !== id));
    } catch (error) {
      console.error('Error deleting document:', error);
      setError('Error deleting document');
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <>
        <table className="text-left w-full whitespace-nowrap text-sm">
          <thead className="text-gray-700">
            <tr className="font-semibold text-gray-600">
              <th scope="col" className="p-4">Titre</th>
              <th scope="col" className="p-4">Date de création</th>
              <th scope="col" className="p-4">Date de modification</th>
              <th scope="col" className="p-4">Statut </th>
              <th scope="col" className="p-4">Action</th>
            </tr>
          </thead>
          <tbody>
           {documents.map(document => (
              <tr key={document.content_id}>
                <td className="p-4 font-semibold text-gray-600">{document.title}</td>
                <td className="p-4">{new Date(document.createdAt).toLocaleDateString()}</td>
                <td className="p-4">{new Date(document.lastModifiedAt).toLocaleDateString()}</td>
                <td className="p-4">{document.status}</td>
                <td className="p-4">
                  <button
                    type="button"
                    className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                    onClick={() => handleDelete(document.content_id)}
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
  
    </>
  );
};

export default TableListDocument;
