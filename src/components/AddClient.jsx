import { useForm } from "react-hook-form";
import { useEffect } from "react";
import PocketBase from "pocketbase";

export default function AddClient() {
  const { register, handleSubmit } = useForm();

  useEffect(() => {
    document.title = "Login";
  }, []);

  const onSubmit = handleSubmit(async(data) => {
    const date = new Date();
    const formattedDate = date.toISOString();
    data.date = formattedDate;
    console.log(data)
    const pb = new PocketBase("https://clients.pockethost.io");

    await pb.collection('clients').create(data);
});
  return (
    <dialog id="AddUser" className="modal">
      <div className="modal-box">
        <section className="max-w-4xl p-6 mx-auto  rounded-md">
          <h2 className="text-lg font-semibold text-gray-700 capitalize dark:text-white">
            Add New User
          </h2>

          <form onSubmit={onSubmit}>
            <div className="mt-6 flex flex-col gap-6">
              <div>
                <label
                  className="text-gray-700 dark:text-gray-200"
                  htmlFor="username"
                >
                  Name
                </label>
                <input
                  id="username"
                  type="text"
                  className="block bg-inherit w-full px-4 py-2 mt-2 text-gray-700  border border-gray-200 rounded-md  dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                  {...register("name", { required: true })}
                />
              </div>
              <div>
                <label
                  className="text-gray-700 dark:text-gray-200"
                  htmlFor="username"
                >
                  Last Names
                </label>
                <input
                  id="LastNames"
                  type="text"
                  className="block bg-inherit w-full px-4 py-2 mt-2 text-gray-700  border border-gray-200 rounded-md  dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                  {...register("lastNames", { required: true })}
                />
              </div>
              <div>
                <label
                  className="text-gray-700 dark:text-gray-200"
                  htmlFor="emailAddress"
                >
                  Email Address
                </label>
                <input
                  id="emailAddress"
                  type="email"
                  className="block bg-inherit w-full px-4 py-2 mt-2 text-gray-700  border border-gray-200 rounded-md  dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                  {...register("email", { required: true })}
                />
              </div>

              <div>
                <label
                  className="text-gray-700 dark:text-gray-200"
                  htmlFor="phone"
                >
                  Phone
                </label>
                <input
                  id="phone"
                  type="number"
                  className="block bg-inherit w-full px-4 py-2 mt-2 text-gray-700  border border-gray-200 rounded-md  dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                  {...register("phone", { required: true })}
                />
              </div>

              <div>
                <label
                  className="text-gray-700 dark:text-gray-200"
                  htmlFor="color"
                >
                  color
                </label>
                <input
                  id="color"
                  type="color"
                  className=" rounded-full"
                  {...register("color", { required: true })}
                />
              </div>
            </div>

            <div className="flex justify-between mt-6">
              <button
                onClick={() => {
                  const dialog = document.getElementById("AddUser");
                  if (dialog) {
                    dialog.removeAttribute("open");
                  }
                }}
              >
                Close
              </button>
              <button type="submit" className="btn btn-primary">
                Save
              </button>
            </div>
          </form>
        </section>
      </div>
    </dialog>
  );
}
