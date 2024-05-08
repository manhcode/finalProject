import { useCallback, useEffect, useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import ReactPaginate from "react-paginate";

import * as courseService from "~/services/courseService";

function CourseTeacherSold() {
  const [currentPage, setCurrentPage] = useState(1);
  const [data, setData] = useState([]);
  const [totalPage, setTotalPage] = useState(0);

  const handlePageChange = (selectedPage) => {
    setCurrentPage(selectedPage.selected + 1);
  };

  const fetch = useCallback(() => {
    courseService
      .getCoursesSold({
        page: currentPage,
        perPage: 10,
      })
      .then((course) => {
        setData(course.data.data);
        setTotalPage(course.data.totalPages);
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
                Course name
              </th>
              <th scope="col" className="px-6 py-3">
                Price
              </th>
              <th scope="col" className="px-6 py-3">
                Actual Amount
              </th>
              <th scope="col" className="px-6 py-3">
                Quantity
              </th>
              <th scope="col" className="px-6 py-3">
                Total Price
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
                  <td
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900"
                  >
                    {item.course.nameCourse}
                  </td>
                  <td className="px-6 py-4">
                    {new Intl.NumberFormat("vi-VN", {
                      style: "currency",
                      currency: "VND",
                    }).format(item.course.price)}
                  </td>
                  <td className="px-6 py-4">
                    {new Intl.NumberFormat("vi-VN", {
                      style: "currency",
                      currency: "VND",
                    }).format(item.actualAmount)}
                  </td>
                  <td className="px-6 py-4">{item.quantity}</td>
                  <td className="px-6 py-4">
                    {new Intl.NumberFormat("vi-VN", {
                      style: "currency",
                      currency: "VND",
                    }).format(item.totalPrice)}
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

export default CourseTeacherSold;
