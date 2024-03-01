import { useState } from "react";
import ReactPaginate from "react-paginate";

import ListCourse from "~/components/ListCourse";
import Logo from "~/assets/image/Course.png";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

function Courses() {
  const [currentPage, setCurrentPage] = useState(0);
  console.log(currentPage);
  const handlePageChange = (selectedPage) => {
    setCurrentPage(selectedPage.selected);
  };
  
  const data = [
    {
      id: 1,
      title: "Course 1",
      price: 1000,
      imageUrl: Logo,
      description: "This is the first course",
    },
    {
      id: 2,
      title: "Course 2",
      price: 1000,
      imageUrl: Logo,
      description: "This is the first course",
    },
    {
      id: 3,
      title: "Course 3",
      price: 3000,
      imageUrl: Logo,
      description: "This is the first course",
    },
    {
      id: 4,
      title: "Course 4",
      price: 4000,
      imageUrl: Logo,
      description: "This is the first course",
    },
    {
      id: 5,
      title: "Course 5",
      price: 5000,
      imageUrl: Logo,
      description: "This is the first course",
    },
    {
      id: 6,
      title: "Course 6",
      price: 6000,
      imageUrl: Logo,
      description: "This is the first course",
    },
  ];

  return (
    <>
      <ListCourse data={data} />
      <ReactPaginate
        pageCount={10}
        pageRangeDisplayed={3}
        marginPagesDisplayed={1}
        onPageChange={handlePageChange}
        containerClassName={"pagination"}
        activeClassName={"underline"}
        previousLabel={currentPage === 0 ? null : <IoIosArrowBack />}
        nextLabel={currentPage === 9 ? null : <IoIosArrowForward />}
        className="flex justify-center mt-4"
        pageLinkClassName={"p-3"}
        pageClassName={"my-auto"}
        nextLinkClassName={"p-3"}
        previousLinkClassName={"p-3"}
        previousClassName={"my-auto"}
        nextClassName={"my-auto"}
        breakLinkClassName={"p-3"}
        breakClassName={"my-auto"}
      />
    </>
  );
}

export default Courses;
