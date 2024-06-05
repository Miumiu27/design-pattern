import React from "react";
import AdminLayout from "../../layouts/AdminLayout";

import { Link } from "react-router-dom";
import { LuUserPlus2 } from "react-icons/lu";
import TableListUser from "./partials/TableListUser";

const UserList: React.FC = () => {
  return (
    <AdminLayout>
      <div>
        Gestion des utilisateurs et des rôles : Création, modification et
        suppression de comptes d'utilisateurs. Attribution et gestion des rôles
        et des permissions. Dans un système ECM, les rôles définissent les
        niveaux d'autorisation et les accès des utilisateurs aux différentes
        fonctionnalités et ressources du système. Voici quelques exemples de
        rôles courants qui pourraient être attribués aux utilisateurs dans un
        système ECM : 1. <strong>Administrateur</strong> : Ce rôle a
        généralement un accès complet à toutes les fonctionnalités du système
        ECM. Les administrateurs peuvent gérer les utilisateurs, configurer
        les autorisations, superviser les processus de gestion de contenu, et
        effectuer des tâches d'administration système. 2. <strong>Éditeur</strong> :
        Les éditeurs ont des autorisations pour créer, modifier et supprimer
        du contenu dans le système. Ils peuvent ajouter de nouveaux documents,
        mettre à jour des informations existantes, et gérer les versions des
        documents. 3. <strong>Lecteur</strong> : Les lecteurs ont un accès en
        lecture seule au contenu du système. Ils peuvent consulter et
        télécharger des documents, mais ils ne peuvent pas les modifier ou les
        supprimer. 4. <strong>Collaborateur</strong> : Ce rôle est souvent
        attribué aux utilisateurs impliqués dans des processus de
        collaboration. Les collaborateurs peuvent créer du contenu, le
        modifier, et le partager avec d'autres utilisateurs. 5. <strong>Auditeur</strong> :
        Les auditeurs ont des autorisations pour examiner l'activité des
        utilisateurs dans le système ECM. Ils peuvent consulter les journaux
        d'activité, les rapports d'utilisation, et les statistiques sur le
        contenu. 6. <strong>Gestionnaire de workflow</strong> : Ce rôle est
        chargé de configurer et de superviser les workflows de gestion de
        contenu. Les gestionnaires de workflow peuvent définir les étapes de
        validation, les règles de routage, et les notifications associées aux
        processus de révision et d'approbation. 7. <strong>Invité</strong> :
        Les invités ont un accès restreint au système ECM. Ils peuvent être
        autorisés à consulter un contenu spécifique sans avoir la possibilité
        de contribuer ou de modifier des documents. 8. <strong>Super utilisateur</strong> :
        Dans certains cas, un rôle de super utilisateur peut être défini pour
        accorder des privilèges étendus à certains utilisateurs. Les super
        utilisateurs ont souvent des autorisations supplémentaires par rapport
        aux administrateurs standards. Ces exemples de rôles illustrent la
        diversité des autorisations et des responsabilités que les utilisateurs
        peuvent avoir dans un système ECM. En fonction des besoins spécifiques
        de l'entreprise, d'autres rôles peuvent être définis et configurés pour
        répondre aux exigences de gestion de contenu.
        <Link to="/admin/add-user">
          <button
            type="button"
            className="my-4 flex text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 light:focus:ring-teal-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mt-4 mb-5"
          >
            <LuUserPlus2 className="mr-2" size={18} />
            Ajouter
          </button>
        </Link>
      
          <TableListUser />
     
      </div>
    </AdminLayout>
  );
};

export default UserList;
