import { useState } from "react";
import UserLayout from "../../layouts/UserLayout";
import SimpleTextEditor from "./SimpleTextEditor";
import Card from "../../components/constants/Card";
import axios from "axios";

const CreateNewDocument = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const handleCreateDocument = async () => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/contents`,
        {
          title,
          contentType: "document",
          body,
          status: "draft",
        }
      );
      console.log("Document created:", response.data);
    } catch (error) {
      console.error("Error creating document:", error);
    }
  };

  return (
    <UserLayout>
      <Card>
        <div className="flex justify-between items-center mb-5">
          <h1 className="text-2xl font-bold light:text-white">
            Créer un nouveau document
          </h1>
          <button
            type="button"
            className="text-white bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 light:focus:ring-yellow-900"
            onClick={handleCreateDocument}
          >
            Créer
          </button>
        </div>

        <input
          type="text"
          id="name"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          aria-describedby="helper-text-explanation"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  light:bg-gray-700 light:border-gray-600 light:placeholder-gray-400 light:text-white light:focus:ring-blue-500 light:focus:border-blue-500 mb-4"
          placeholder="Nom du document"
        />

        <SimpleTextEditor setBody={setBody} />
      </Card>
    </UserLayout>
  );
};

export default CreateNewDocument;
