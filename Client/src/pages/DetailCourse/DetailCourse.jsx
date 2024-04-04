import { useCallback, useContext, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

import { AuthContext } from "~/shared/AuthProvider";
import * as courseService from "~/services/courseService";
import * as paymentService from "~/services/paymentService";
import routes from "~/config/routes";

function DetailCourse() {
  const params = useParams();
  const navigator = useNavigate();
  const { token, role } = useContext(AuthContext);
  const [data, setData] = useState([]);
  const [received, setReceived] = useState(false);

  const fetchBuy = useCallback(() => {
    if (token) {
      courseService
        .getMyCourse({})
        .then((course) => {
          const checked = course.data.data.filter(
            (item) => item.courseId._id === data._id
          );
          if (checked.length > 0) {
            setReceived(true);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [data._id, token]);

  const fetch = () => {
    courseService
      .buyCourse({ courseId: data._id })
      .then()
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    courseService
      .getCourseById({ id: params.id })
      .then((course) => {
        setData(course.data);
      })
      .catch((error) => {
        console.log(error);
      });
    fetchBuy();
  }, [params, fetchBuy]);

  const fetchPayment = () => {
    const dataPayment = {
      amount: data.price,
      language: "vn",
      myCourseId: data._id,
      bankCode: "",
    };

    paymentService
      .createUrlVnPay({ data: dataPayment })
      .then((response) => {
        if (response.status == 200) {
          window.location.href = response.data;
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const onClickBuy = () => {
    if (token) {
      if (received) {
        window.location.href = data.file;
      } else if (data.price === 0) {
        fetch();
      } else {
        fetchPayment();
      }
    } else {
      navigator(routes.login);
    }
  };
console.log(role > 0)

  return (
    <div>
      <div className="flex p-10">
        <div className="w-1/2 flex flex-col justify-center items-center">
          <p className="text-2xl font-bold mx-10 my-14">{data.nameCourse}</p>
          {role > 0 && (
            <button
              className="w-[160px] h-[48px] rounded-md bg-black text-white font-medium "
              onClick={onClickBuy}
            >
              {received ? "Download" : data.price > 0 ? "Buy now" : "Get free"}
            </button>
          )}
        </div>
        <div className="w-1/2 flex justify-center border-l border-neutral-100 items-center">
          <img
            src={data.imageUrl}
            alt=""
            className="h-[500px] w-auto object-cover rounded-xl"
            style={{ filter: "drop-shadow(10px 7px 10px rgba(0,0,0,.3)" }}
          />
        </div>
      </div>
      <div className="px-10">
        {data.teacherId && (
          <Link to={`/teacher/${data.teacherId?._id}`}>
           <div  className="flex">
              <img
                src={data.teacherId?.imageUrl}
                alt=""
                className="w-[100px] h-[100px] rounded-full shadow-xl"
              />
              <div className="m-4">
                <p className="font-bold ">{data.teacherId.fullName}</p>
              </div>
           </div>
          </Link>
        )}
        <p className="text-center text-2xl font-bold mb-4">Description</p>
        <p className="m-4">{data.description}</p>
      </div>
    </div>
  );
}

export default DetailCourse;
