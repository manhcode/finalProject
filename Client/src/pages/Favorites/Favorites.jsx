import ListFavorites from "./ListFavorites";

function Favorites() {
  const data = [
    {
      _id: 1,
      courseName: "ReactJS",
      teacherName: "An",
    },
    {
      _id: 2,
      courseName: "HTML",
      teacherName: "HOA",
    },
    {
      _id: 3,
      courseName: "JAVA",
      teacherName: "Thang",
    },
    {
      _id: 4,
      courseName: "JAVASCRIPT",
      teacherName: "An",
    },
    {
      _id: 5,
      courseName: "Python",
      teacherName: "An",
    },
  ];

  return (
    <div className="px-20">
      <div className="text-2xl font-bold my-5">My favorites</div>
      <ListFavorites data={data} />
    </div>
  );
}

export default Favorites;
