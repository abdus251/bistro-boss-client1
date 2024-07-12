import { FaTrashAlt } from "react-icons/fa";
import SectionTitle from "../../../components/SectionTitle/SectionTitle"
import useMenu from "../../../Layout/useMenu"
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";


const ManageItems = () => {
  const [menu, refetch] = useMenu();
  const [axiosSecure] = useAxiosSecure();

  const handleDelete = item => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {

        axiosSecure.delete(`/menu/${item_id}`)
          .then(res => {
            console.log('deleted res', res.data);
            if (res.data.deletedCount > 0)
              refetch();
              Swal.fire(
                "Deleted!",
                "Your file has been deleted.",
                "success"
            );
          })
      }
    });
  }



  return (
    <div className="w-full">
      <SectionTitle heading="Manage All Items" subHeading="Hurry up"></SectionTitle>
      <div className="overflow-x-auto">
        <table className="table">

          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Item</th>
              <th>Category</th>
              <th>Price</th>
              <th>Update</th>
              <th>Delete</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {
              menu.map((item, index) => <tr key={item._id}>
                <td>
                  {index + 1}
                </td>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img
                          src={item.image}
                          alt="Avatar Tailwind CSS Component" />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{item.name}</div>
                    </div>
                  </div>
                </td>
                <td>
                  {item.category}
                </td>
                <td className="text-right">${item.price}</td>
                <td>
                  <button className="btn btn-ghost btn-xs">details</button>
                </td>
                <td>
                  <button onClick={() => handleDelete(item)} className="btn btn-ghost bg-red-600 text-white">
                    <FaTrashAlt />
                  </button>
                </td>
              </tr>)
            }
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle h-12 w-12">
                      <img
                        src="https://img.daisyui.com/tailwind-css-component-profile-2@56w.png"
                        alt="Avatar Tailwind CSS Component" />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">Hart Hagerty</div>
                  </div>
                </div>
              </td>
              <td>
                Zemlak, Daniel and Leannon
              </td>
              <td>Purple</td>
              <td>
                <button className="btn btn-ghost btn-xs">details</button>
              </td>
              <td>
                <button className="btn btn-ghost btn-xs">details</button>
              </td>
            </tr>
          </tbody>

        </table>
      </div>
    </div>
  )
}

export default ManageItems