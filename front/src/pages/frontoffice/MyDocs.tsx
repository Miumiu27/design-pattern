import UserLayout from "../../layouts/UserLayout";
import { HiOutlineFolderPlus } from "react-icons/hi2";
import { Link } from "react-router-dom";
import Card from "../../components/constants/Card";
import { IoTrashBinOutline } from "react-icons/io5";
import { RxDownload } from "react-icons/rx";
import { GrShareOption } from "react-icons/gr";
import { MdEdit } from "react-icons/md";

const MyDocs = () => {
  return (
    <UserLayout>
      <h2 className="mb-8 text-2xl text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
        Mes documents{" "}
      </h2>

      <button
        type="button"
        className=" my-4 flex text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 light:focus:ring-teal-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2  mt-4 mb-5"
      >
        <HiOutlineFolderPlus className="mr-2" size={18} />
        <Link to="/create-document"> Créer un nouveau document</Link>
      </button>
      <Card>
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 light:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 light:bg-gray-700 light:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Nom du document
                </th>
                <th scope="col" className="px-6 py-3">
                  Date de Création
                </th>
                <th scope="col" className="px-6 py-3">
                  Dernière Modification
                </th>
                <th scope="col" className="px-6 py-3">
                  Statut du Document
                </th>

                <th scope="col" className="px-6 py-3">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="odd:bg-white odd:light:bg-gray-900 even:bg-gray-50 even:light:bg-gray-800 border-b light:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap light:text-white"
                >
                  Microsoft Surface Pro
                </th>
                <td className="px-6 py-4">White</td>
                <td className="px-6 py-4">Laptop PC</td>
                <td className="px-6 py-4">$1999</td>
                <td className="px-6 py-4">
                  <button
                    type="button"
                    className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 light:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                  >
                    <IoTrashBinOutline />
                  </button>
                  <button
                    type="button"
                    className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 light:focus:ring-blue-800 shadow-lg shadow-blue-500/50 light:shadow-lg light:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 "
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
                    {" "}
                    <MdEdit />
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </Card>
    </UserLayout>
  );
};

export default MyDocs;
