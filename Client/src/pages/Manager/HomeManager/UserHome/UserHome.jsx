function UserHome() {
  return (
    <div className="border-b mx-6 px-4">
      <p className="text-center text-2xl font-bold mt-4">UserHome</p>
      <div className="flex justify-around my-4">
        <div className="w-[150px] h-[150px] bg-neutral-400 rounded-full flex justify-center items-center">20 Teacher</div>
        <div className="w-[150px] h-[150px] bg-neutral-400 rounded-full flex justify-center items-center">20 Student</div>
      </div>
    </div>
  );
}

export default UserHome;
