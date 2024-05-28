import { useState, ChangeEvent, FormEvent } from 'react';
import axios from 'axios';
import { ImUserPlus } from "react-icons/im";

import AdminLayout from '../../../layouts/AdminLayout';

const AddUser = () => {
  
  const [formData, setFormData] = useState({
    name: '',
    firstname: '',
    department: '',
    job: '',
    adresse: '',
    role: '',
    sexe: '',
    email: '',
    tel: '',
    birthdate: '',
    password: '',
    profile_image: null as File | null,
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setFormData({
      ...formData,
      profile_image: file,
    });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const data = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      if (value !== null) {
        data.append(key, value);
      }
    });

    try {
      const response = await axios.post(`${import.meta.env.VITE_API_URL}/users`, data, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log('User created successfully:', response.data);
      // Reset form
      setFormData({
        name: '',
        firstname: '',
        department: '',
        job: '',
        adresse: '',
        role: '',
        sexe: '',
        email: '',
        tel: '',
        birthdate: '',
        password: '',
        profile_image: null,
      });
    } catch (error) {
      console.error('Error creating user:', error);
    }
  };

  return (
    <AdminLayout>
      <form name="createrole" className="p-5 grid grid-cols-2 gap-6" onSubmit={handleSubmit}>
        <h4 className="col-span-2 pb-4 text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
          Ajout d'un nouvel roleistrateur
        </h4>
        <div className="col-span-2">
          <input
            type="text"
            placeholder="Nom"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="mb-6 bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            required
          />
        </div>
        <div className="col-span-2">
          <input
            type="text"
            placeholder="Adresse"
            name="adresse"
            value={formData.adresse}
            onChange={handleChange}
            className="mb-6 bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            required
          />
        </div>
        <div className="col-span-2">
          <input
            type="text"
            placeholder="Prénom"
            name="firstname"
            value={formData.firstname}
            onChange={handleChange}
            className="mb-6 bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            required
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Département ou service"
            name="department"
            value={formData.department}
            onChange={handleChange}
            className="mb-6 bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            required
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Profession"
            name="job"
            value={formData.job}
            onChange={handleChange}
            className="mb-6 bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            required
          />
        </div>
        <div>
          <select
            id="role"
            name="role"
            value={formData.role}
            onChange={handleChange}
            className="bg-gray-100 mt-2 w-full border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm py-2 px-3 text-gray-700 placeholder-gray-500 focus:outline-none focus:ring focus:ring-grey-300 focus:ring-opacity-50 mb-6"
            required
          >
            <option value="">Sélectionnez le rôle</option>
            <option value="admin">roleistrateur</option>
            <option value="user">Utilisateur</option>
          </select>
        </div>
        <div>
          <select
            id="gender"
            name="sexe"
            value={formData.sexe}
            onChange={handleChange}
            className="bg-gray-100 mt-2 w-full border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm py-2 px-3 text-gray-700 placeholder-gray-500 focus:outline-none focus:ring focus:ring-grey-300 focus:ring-opacity-50 mb-6"
            required
          >
            <option value="">Sélectionnez votre sexe</option>
            <option value="male">Homme</option>
            <option value="female">Femme</option>
            <option value="other">Autre</option>
          </select>
        </div>
        <div>
          <input
            type="email"
            placeholder="Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="mb-6 bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            required
          />
        </div>
        <div>
          <input
            type="tel"
            placeholder="Numéro de téléphone"
            name="tel"
            value={formData.tel}
            onChange={handleChange}
            className="mb-6 bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            required
          />
        </div>
        <div>
          <input
            type="date"
            placeholder="Date d'anniversaire"
            name="birthdate"
            value={formData.birthdate}
            onChange={handleChange}
            className="mb-6 bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            required
          />
        </div>
        <div className="col-span-2">
          <input
            type="password"
            placeholder="Mot de passe"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="mb-6 bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            minLength={8}
            required
          />
        </div>
        <div className="col-span-2">
          <label
            htmlFor="profile_image"
            className="text-sm text-gray-700"
          >
            Veuillez insérer votre photo de profil ici
          </label>
          <input
            id="profile_image"
            type="file"
            name="profile_image"
            onChange={handleFileChange}
            className="mb-6 bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            required
          />
        </div>
        <button
          type="submit"
          className="col-span-2 w-full flex justify-center items-center text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 font-medium rounded-lg text-sm px-5 py-3 text-center mr-2 mb-2"
        >
          <ImUserPlus className="mr-2" size={18} />
          Créer
        </button>
      </form>
    </AdminLayout>
  );
}

export default AddUser;
