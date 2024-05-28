import React, { useEffect, useState } from "react";
import UserLayout from "../../layouts/UserLayout";
import Card from "../../components/constants/Card";
import { IoTrashBinOutline } from "react-icons/io5";
import { RxDownload } from "react-icons/rx";
import { GrShareOption } from "react-icons/gr";
import { MdEdit } from "react-icons/md";
import AddNewFiles from "./content/AddNewFiles";
import AddNewVideo from "./content/AddNewVideo";
import AddNewImage from "./content/AddNewImage";

interface Content {
  content_id: string;
  title: string;
  lastModifiedAt: string;
  status: string;
  path: string;
  contentType: string;
}

const OtherContent: React.FC = () => {
  const [contents, setContents] = useState<Content[]>([]);

  useEffect(() => {
    const fetchContents = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/contents/other-content`);
        const data = await response.json();
        setContents(data);
      } catch (error) {
        console.error("Error fetching contents:", error);
      }
    };

    fetchContents();
  }, []);

  const handleDelete = async (content_id: string) => {
    try {
      await fetch(`${import.meta.env.VITE_API_URL}/contents/${content_id}`, {
        method: "DELETE",
      });
      setContents(contents.filter(content => content.content_id !== content_id));
    } catch (error) {
      console.error("Error deleting content:", error);
    }
  };

  const handleDownload = async (fileId: string, fileName: string) => {
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/contents/download/${fileId}`, {
        method: 'GET',
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.style.display = 'none'; 
      a.href = url;
      a.download = fileName;
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Error downloading file:', error);
    }
  };

  return (
    <UserLayout>
      <h2 className="mb-8 text-2xl text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
        Autre contenu
      </h2>
      <div className="flex">
        <AddNewFiles />
        <AddNewVideo />
        <AddNewImage />
      </div>

      <Card>
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 light:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 light:bg-gray-700 light:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Nom du contenu
                </th>
                <th scope="col" className="px-6 py-3">
                  Date de dernière modification
                </th>
                <th scope="col" className="px-6 py-3">
                  Statut du Document
                </th>
                <th scope="col" className="px-6 py-3">
                  Path
                </th>
                <th scope="col" className="px-6 py-3">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {contents.map((content) => (
                <tr
                  key={content.content_id}
                  className="odd:bg-white odd:light:bg-gray-900 even:bg-gray-50 even:light:bg-gray-800 border-b light:border-gray-700"
                >
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap light:text-white"
                  >
                    {content.title}
                  </th>
                  <td className="px-6 py-4">{new Date(content.lastModifiedAt).toLocaleDateString()}</td>
                  <td className="px-6 py-4">{content.status}</td>
                  <td className="px-6 py-4">{content.path}</td>
                  <td className="px-6 py-4">
                    <button
                      type="button"
                      className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 light:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                      onClick={() => handleDelete(content.content_id)}
                    >
                      <IoTrashBinOutline />
                    </button>
                    <button
                      type="button"
                      className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 light:focus:ring-blue-800 shadow-lg shadow-blue-500/50 light:shadow-lg light:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                      onClick={() => handleDownload(content.content_id, content.title)}
                    >
                      <RxDownload />
                    </button>
                    <button
                      type="button"
                      className="text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 light:focus:ring-teal-800 shadow-lg shadow-teal-500/50 light:shadow-lg light:shadow-teal-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                    >
                      <GrShareOption />
                    </button>
                    <button
                      type="button"
                      className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 light:focus:ring-green-800 shadow-lg shadow-green-500/50 light:shadow-lg light:shadow-green-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                    >
                      <MdEdit />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </UserLayout>
  );
};

export default OtherContent;
