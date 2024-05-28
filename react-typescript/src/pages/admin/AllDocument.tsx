import AdminLayout from '../../layouts/AdminLayout'
import TableListDocument from './partials/TableListDocument'
import Card from '../../components/constants/Card'

const AllDocument = () => {
  return (
    <AdminLayout>
    
      Gestion des contenus :
Ajout, modification, suppression et archivage de documents et de contenus numériques.
Organisation des contenus dans des structures hiérarchiques ou des taxonomies.
Gestion des versions de documents.
<Card>
< TableListDocument />
</Card>

    </AdminLayout>
  )
}

export default AllDocument