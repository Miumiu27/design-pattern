import Graphique from "../../components/dashboard/Graphique"
import AdminLayout from "../../layouts/AdminLayout"


const Dashboard = () => {
  return (
    <AdminLayout> Rapports et analyses :
    Génération de rapports sur l'activité des utilisateurs, l'utilisation du système, etc.
    Analyse des performances et des tendances.
    <Graphique />
    </AdminLayout>
  )
}

export default Dashboard