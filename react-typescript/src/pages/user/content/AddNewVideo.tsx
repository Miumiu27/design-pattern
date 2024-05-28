import React, { useState } from "react";
import { FaPhotoVideo } from "react-icons/fa";
import axios from "axios"; 

const AddNewVideo: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [videoName, setVideoName] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [error, setError] = useState("");

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setFile(event.target.files[0]);
    }
  };

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setVideoName(event.target.value);
  };

  const handleSubmit = async () => {
    if (!file || !videoName) {
      setError("Veuillez fournir un nom et un fichier.");
      return;
    }

    const formData = new FormData();
    formData.append("title", videoName);
    formData.append("contentType", "video");
    formData.append("status", "active"); // Vous pouvez ajuster ce champ selon vos besoins
    formData.append("file", file);

    try {
      const response = await axios.post(`${import.meta.env.VITE_API_URL}/contents`, formData, {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      });
      console.log("Video uploaded successfully:", response.data);
      closeModal();
    } catch (error) {
      console.error("Error uploading video:", error);
      setError("Erreur lors de l'upload de la vidéo.");
    }
  };

  return (
    <>
      <button
        type="button"
        className="text-white bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 light:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 flex items-center justify-center me-2 mb-2"
        onClick={openModal}
      >
        <FaPhotoVideo className="mr-2" /> Ajouter une nouvelle vidéo
      </button>

      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-75">
          <div className="relative bg-white rounded-lg p-8 max-w-md">
            <button
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-800 focus:outline-none"
              onClick={closeModal}
            >
              x
            </button>
            <h2 className="text-xl font-semibold mb-4">Nouvelle Vidéo</h2>
            {error && <p className="text-red-500">{error}</p>}
            <input
              type="text"
              value={videoName}
              onChange={handleNameChange}
              className="my-4 shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="Nom de la vidéo"
              required
            />
            <input
              type="file"
              onChange={handleFileChange}
              className="my-4 shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              required
            />

            <button
              className="w-full bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 text-white rounded-md px-4 py-2 hover:bg-gradient-to-br focus:outline-none focus:ring-2 focus:ring-teal-500"
              onClick={handleSubmit}
            >
              Enregistrer
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default AddNewVideo;
