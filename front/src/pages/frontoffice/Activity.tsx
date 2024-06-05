import UserLayout from '../../layouts/UserLayout'
import StatCard from '../../components/constants/StatCard';
import { FiFilePlus, FiFileText, FiShare2, FiCheckCircle } from "react-icons/fi";
const Activity = () => {
  return (
    <UserLayout>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-4">
      <StatCard
        title="Documents Créés"
        count={10}
        icon={<FiFilePlus className="text-blue-500 text-4xl" />}
      />
      <StatCard
        title="Documents en Cours"
        count={5}
        icon={<FiFileText className="text-yellow-500 text-4xl" />}
      />
      <StatCard
        title="Documents Partagés"
        count={8}
        icon={<FiShare2 className="text-green-500 text-4xl" />}
      />
      <StatCard
        title="Documents Approuvés"
        count={3}
        icon={<FiCheckCircle className="text-purple-500 text-4xl" />}
      />
    </div>
      
      
      
      Dans le tableau de bord d'un utilisateur, on trouverait généralement un résumé personnalisé des informations pertinentes et des actions à prendre. Voici une liste des pages typiques auxquelles un utilisateur aurait accès depuis son tableau de bord :

    1. **Vue d'Ensemble :**
       - Affiche un résumé des activités récentes de l'utilisateur, telles que les documents récemment modifiés ou partagés, les commentaires reçus, etc.
    
    2. **Mes Documents :**
       - Donne un accès rapide aux documents que l'utilisateur a créés, modifiés ou auxquels il a accès.
       - Permet de rechercher et de filtrer les documents en fonction de différents critères.
    
    3. **Documents en Attente d'Approbation :**
       - Liste les documents soumis par l'utilisateur en attente d'approbation.
       - Affiche l'état actuel de chaque document et les actions disponibles pour l'utilisateur.
    
    4. **Documents Partagés :**
       - Affiche les documents partagés avec l'utilisateur par d'autres utilisateurs ou via des workflows de partage.
       - Permet d'accéder rapidement aux documents partagés et de voir qui les a partagés.
    
    5. **Documents Suivis :**
       - Liste les documents que l'utilisateur a choisis de suivre ou de marquer comme favoris.
       - Permet de garder une trace des documents importants ou en cours de travail.
    
    6. **Tâches en Cours :**
       - Affiche les tâches assignées à l'utilisateur, telles que les documents à réviser, les approbations à effectuer, etc.
       - Fournit des liens directs vers les documents associés à chaque tâche.
    
    7. **Notifications :**
       - Récapitule les notifications récentes concernant les activités pertinentes pour l'utilisateur, telles que les commentaires sur ses documents, les approbations nécessaires, etc.
       - Permet de gérer les préférences de notification et de voir les notifications archivées.
    
    8. **Statistiques et Rapports :**
       - Donne un aperçu des statistiques pertinentes pour l'utilisateur, telles que le nombre de documents créés, partagés, approuvés, etc.
       - Fournit des rapports sur l'utilisation des documents et les activités de collaboration.
    
    9. **Paramètres de Compte :**
       - Permet à l'utilisateur de gérer ses informations personnelles, ses préférences de notification, ses paramètres de sécurité, etc.
    
    10. **Aide et Support :**
        - Fournit des ressources d'aide et de support telles que des FAQ, des guides d'utilisation, des liens vers le support client, etc.
    
    Ces pages fournissent à l'utilisateur une vue d'ensemble de ses activités et lui permettent d'accéder facilement aux fonctionnalités et aux informations importantes pour sa collaboration et sa gestion de contenu au sein de l'application ECM.</UserLayout>
  )
}

export default Activity