import '../../../assets/css/theme.css'
const TableListDocument = () => {
  return (
    <>
      <table className="text-left w-full whitespace-nowrap text-sm">
        <thead className="text-gray-700">
          <tr className="font-semibold text-gray-600">
            <th scope="col" className="p-4">
              Nom 
            </th>
            <th scope="col" className="p-4">
              Propriétaire
            </th>
            <th scope="col" className="p-4">
              Date de création
            </th>
            <th scope="col" className="p-4">
              Date de dernière modification
            </th>
            <th scope="col" className="p-4">
              Partagé avec 
            </th>
            <th scope="col" className="p-4">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="p-4 font-semibold text-gray-600 ">1</td>
            <td className="p-4">
              <div className="flex flex-col gap-1">
                <h3 className=" font-semibold text-gray-600">Sunil Joshi</h3>
                <span className="font-normal text-gray-500">Web Designer</span>
              </div>
            </td>
            <td className="p-4">
              <span className="font-normal  text-gray-500">Elite Admin</span>
            </td>
            <td className="p-4">
              <span className="inline-flex items-center py-[3px] px-[10px] rounded-2xl font-semibold bg-blue-600 text-white">
                Low
              </span>
              <span className="inline-flex items-center py-[3px] px-[10px] rounded-2xl font-semibold text-white bg-cyan-500">
                Medium
              </span>
              <span className="inline-flex items-center py-[3px] px-[10px] rounded-2xl font-semibold text-white bg-red-500">
                High
              </span>
              <span className="inline-flex items-center py-[3px] px-[10px] rounded-2xl font-semibold text-white bg-teal-500">
                Critical
              </span>
            </td>
            <td className="p-4">
              <span className="font-semibold text-base text-gray-600">$3.9</span>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default TableListDocument;
