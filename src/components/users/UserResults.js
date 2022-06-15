import React from "react";
import { useEffect, useState } from "react";
import Spinner from "../layout/Spinner";
import UserItem from "./UserItem";

function UserResults() {
  // useState to save some data into state
  const [users, setUsers] = useState([]);

  // useState to have loading functionality for the async functions.
  const [loading, setLoading] = useState(true);

  // I want the API to be called as soon as page loads...Hence useEffect hook does just that.
  useEffect(() => {
    fetchUsers();
  }, []);

  //Create a async function for API calls whenever possible!
  const fetchUsers = async () => {
    //Call the API endpoint with a fetch request and save the response in a variable.
    const response = await fetch(`${process.env.REACT_APP_GITHUB_URL}/users`, {
      headers: {
        Authorization: `token ${process.env.REACT_APP_GITHUB_TOKEN}`,
      },
    });
    // Save the data from the response as JSON.
    const data = await response.json();
  
    setUsers(data);
    setLoading(false);
  };

  // This if-statement returns the UserItem component if "loading" variable is false. 
  // If loading is true, it will return the spinner gif.
  if (!loading) {
    return (
      // All these css classes come from tailwindcss. Be sure to get familiar with how to use tailwind!
      <div className="grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols.3 md:grid-cols-2">
        {/* This code below takes the state "users" array values from the useState hook "users" and passes
        each array item as a prop into the UserItem component */}
        {users.map((user) => (
          <UserItem key={user.id} user={user} />
        ))}
      </div>
    );
  } else {
    return <Spinner />;
  }
}

export default UserResults;
