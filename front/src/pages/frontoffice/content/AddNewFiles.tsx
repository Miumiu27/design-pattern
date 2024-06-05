import React, { useState } from "react";
import { IoDocuments } from "react-icons/io5";

const AddNewFiles: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      {/* Bouton pour ouvrir la modal */}
      <button
        type="button"
        className="text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 light:focus:ring-teal-800 font-medium rounded-lg text-sm px-5 py-2.5 flex items-center justify-center me-2 mb-2"
        onClick={openModal}
      >
        <IoDocuments className="mr-2" /> Ajouter un nouveau fichier
      </button>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-75">
          <div className="relative bg-white rounded-lg p-8 max-w-md">
            <button
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-800 focus:outline-none"
              onClick={closeModal}
            >
              x
            </button>
            <h2 className="text-xl font-semibold mb-4">Nouveau Fichier</h2>
            <input
              type="text"
              className="my-4 shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="Nom du fichier"
              required
            />
            <input
              type="file"
              className="my-4 shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder=""
              required
            />

            {/* Bouton pour enregistrer */}
            <button
              className="w-full bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 text-white rounded-md px-4 py-2 hover:bg-gradient-to-br focus:outline-none focus:ring-2 focus:ring-teal-500"
              onClick={closeModal}
            >
              Enregistrer
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default AddNewFiles;
