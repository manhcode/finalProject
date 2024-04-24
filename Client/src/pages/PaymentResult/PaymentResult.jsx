import { useEffect, useMemo, useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { MdError } from "react-icons/md";

import * as paymentService from "~/services/paymentService";
import * as courseService from "~/services/courseService";

function PaymentResult() {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [message, setMessage] = useState("");

  const urlSearchParams = new URLSearchParams(
    window.location.href.split("?")[1]
  );
  const params = useMemo(() => {
    return {};
  }, []);

  urlSearchParams.forEach((value, key) => {
    params[key] = value;
  });

  useEffect(() => {
    if (success) {
      courseService
        .buyCourse({ courseId: params.vnp_OrderInfo })
        .then((res) => {
          console.log(res);
        })
        .catch((err) => console.log(err));
    }

    paymentService
      .callbackVnPay({ param: params })
      .then((response) => {
        if (response.data.code == "00") {
          setSuccess(true);
          setMessage("Payment Success");
        } else if (response.data.code == 24) {
          setError(true);
          setMessage("Payment failed");
        }
      })
      .catch((err) => {
        if (err.response.status == 400) {
          setError(true);
          setMessage("Payment failed");
        }
      });
  }, [params, success]);

  return (
    <div className="flex flex-col justify-center items-center h-full">
      <>
        <FaCheckCircle
          size={100}
          className={`transition ${
            !success ? "scale-0 absolute" : "scale-100"
          } text-green-600`}
        />
        <MdError
          size={100}
          className={`transition ${
            !error ? "scale-0 absolute" : "scale-100"
          } text-red-600`}
        />
        <p className="text-4xl font-bold mt-10">{message}</p>
      </>
    </div>
  );
}

export default PaymentResult;
