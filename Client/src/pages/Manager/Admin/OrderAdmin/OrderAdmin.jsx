import dayjs from "dayjs";
import { useCallback, useEffect, useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import ReactPaginate from "react-paginate";

import * as orderService from "~/services/orderService";

function OrderAdmin() {
  const [currentPage, setCurrentPage] = useState(1);
  const [data, setData] = useState([]);
  const [totalPage, setTotalPage] = useState(0);

  const handlePageChange = (selectedPage) => {
    setCurrentPage(selectedPage.selected + 1);
  };

  const fetch = useCallback(() => {
    orderService
      .getAllOrder({
        page: currentPage,
        perPage: 5,
      })
      .then((order) => {
        setData(order.data.data);
        setTotalPage(order.data.totalPages);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [currentPage]);

  useEffect(() => {
    fetch();
  }, [fetch]);

  return (
    <div className="w-full px-10 h-full mt-10 mb-60">
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3">
                ID
              </th>
              <th scope="col" className="px-6 py-3">
                Buyer
              </th>
              <th scope="col" className="px-6 py-3">
                Course Name
              </th>
              <th scope="col" className="px-6 py-3">
                Total Price
              </th>
              <th scope="col" className="px-6 py-3">
                Status
              </th>
              <th scope="col" className="px-6 py-3">
                Created At
              </th>
            </tr>
          </thead>
          <tbody>
            {data.length > 0 ? (
              data.map((item) => (
                <tr
                  className="bg-white border-b hover:bg-gray-100 "
                  key={item._id}
                >
                  <th
                    scope="row"
                    className="px-6 py-4  font-medium text-gray-900 "
                  >
                    {item._id.slice(0, 10)}...
                  </th>
                  <td className="px-6 py-4">{item.user.fullName}</td>
                  <td className="px-6 py-4">{item.course.nameCourse}</td>
                  <td className="px-6 py-4">
                    {new Intl.NumberFormat("vi-VN", {
                      style: "currency",
                      currency: "VND",
                    }).format(item.price)}
                  </td>
                  <td className="px-6 py-4">{item.status}</td>
                  <td className="px-6 py-4">
                    {dayjs(item.createdAt).format("DD/MM/YYYY HH:mm:ss")}
                  </td>
                </tr>
              ))
            ) : (
              <td colSpan={5} className="text-center py-4">
                There is no data
              </td>
            )}
          </tbody>
        </table>
      </div>
      <ReactPaginate
        pageCount={totalPage}
        pageRangeDisplayed={3}
        marginPagesDisplayed={1}
        onPageChange={handlePageChange}
        containerClassName={"pagination"}
        activeClassName={"underline"}
        previousLabel={currentPage === 1 ? null : <IoIosArrowBack />}
        nextLabel={currentPage >= totalPage ? null : <IoIosArrowForward />}
        className="flex justify-end mt-4"
        pageLinkClassName={"p-3"}
        pageClassName={"my-auto"}
        nextLinkClassName={"p-3"}
        previousLinkClassName={"p-3"}
        previousClassName={"my-auto"}
        nextClassName={"my-auto"}
        breakLinkClassName={"p-3"}
        breakClassName={"my-auto"}
      />
    </div>
  );
}

export default OrderAdmin;
