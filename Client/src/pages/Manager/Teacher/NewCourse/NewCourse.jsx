import { useState } from "react";

function NewCourse() {
  const [data, setData] = useState({
    name: "",
    description: "",
    imageUrl: "",
    price: "",
    file: "",
  });
  const [image, setImage] = useState("");
  console.log(data.file);
  const onChange = (e) => {
    const newData = { ...data };
    newData[e.target.name] = e.target.value;
    setData(newData);
    const file = e.target.files[0];
    if (file && file.type.startsWith("image/")) {
      const img = URL.createObjectURL(e.target.files[0]);
      setImage(img);
    }
  };

  return (
    <form className="w-3/4 mx-auto mt-10">
      <div className="relative z-0 w-full mb-5 group">
        <input
          type="text"
          name="name"
          id="name"
          className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder=" "
          required
          onChange={onChange}
          value={data.name}
        />
        <label
          htmlFor="name"
          className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >
          Name course
        </label>
      </div>

      <div className="relative z-0 w-full mb-5 group">
        <input
          type="text"
          name="description"
          id="description"
          className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder=" "
          required
          onChange={onChange}
          value={data.description}
        />
        <label
          htmlFor="description"
          className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >
          Description
        </label>
      </div>

      <div className="relative z-0 w-full mb-5 group">
        <input
          type="number"
          min={0}
          name="price"
          id="price"
          className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder=" "
          required
          onChange={onChange}
          value={data.image}
        />
        <label
          htmlFor="price"
          className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >
          Price
        </label>
      </div>

      <div className="flex flex-col mb-4">
        <label
          className="mb-2 text-sm font-medium text-gray-900 border rounded-lg p-4"
          htmlFor="file_image"
        >
          Upload image
        </label>
        {image && <img src={image} alt="" className="rounded-lg" />}
        <input
          className="opacity-0 h-0"
          id="file_image"
          name="imageUrl"
          required
          type="file"
          accept="image/*"
          onChange={onChange}
          value={data.imageUrl}
        />
      </div>

      <div className="flex flex-col mb-4">
        <label
          className="mb-2 text-sm font-medium text-gray-900 border rounded-lg p-4"
          htmlFor="file_course"
        >
          Upload file course ( pdf or docx )
        </label>
        <input
          required
          type="file"
          className="opacity-0 h-0"
          onChange={onChange}
          value={data.file}
          accept=".pdf, .docx"
          id="file_course"
          name="file"
        />
      </div>

      <button
        type="submit"
        className=" bg-green-500 hover:bg-green-600 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center "
      >
        Submit
      </button>
    </form>
  );
}

export default NewCourse;
