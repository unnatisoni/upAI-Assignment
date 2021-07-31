import React, {
  useEffect,
  useState,
} from "react";
import Cards from "../Component/Cards";
import { FiSearch } from "react-icons/fi";
import { UserGroups } from "../Base/UserTable";

interface Props {}

const Dashboard: React.FC<Props> = (props) => {
  const [user, setUser] = useState<any>([]);
  const [query, setQuery] = useState<String>("");

  useEffect(() => {
    UserGroups({ query: query }).then(
      (response) => {
        setUser(response);
      }
    );
  }, []);

  const search = (val: any) => {
    val = val.currentTarget.value;
    setQuery(val);
  };

  return (
    <div className=" mt-10 flex flex-col">
      <div>
        <p className="text-4xl font-bold text-center">
          Users
        </p>
      </div>
      <div className=" text-center justify-center flex flex-row  ">
        <input
          onChange={search}
          type="text"
          placeholder="Search by first or last name"
          className=" w-5/12 h-10 my-8 border border-gray-400 shadow-xl placeholder-gray-400 px-4"
        />
        <div>
          <FiSearch className="w-8 p-1 h-10 self-end my-8 border border-gray-500 " />
        </div>
      </div>
      <div className="flex flex-row justify-around px-10 mt-10 items-center bg-gray-300 text-left mb-2 font-semibold text-lg font-sans h-14 mx-20">
        <h2 className="text-left w-1/12">
          First Name
        </h2>
        <h2 className="text-left w-1/12">
          Last Name
        </h2>
        <p className="text-left w-1/12"> Age</p>
        <p className="text-left w-3/12">
          Email
        </p>
        <p className="text-left w-3/12">
          website
        </p>
      </div>
      {user
        .filter((u: any) => {
          if (query === "") {
            return true;
          } else if (
            (u.first_name + " " + u.last_name)
              .toLowerCase()
              .includes(
                query?.toLocaleLowerCase()
              )
          ) {
            return u;
          }
        })
        .map((u: any) => (
          <Cards
            u={u}
            firstname={u.first_name}
            lastname={u.last_name}
            Age={u.age}
            Email={u.email}
            website={u.web}
          />
        ))}
      ;
    </div>
  );
};

Dashboard.defaultProps = {};

export default Dashboard;
