import { createContext, useContext, useEffect, useState, useMemo } from "react";
import axios from "axios";
import { axiosRes, axiosReq } from "../api/axiosDefaults";
import { useHistory } from "react-router";
import { removeTokenTimestamp, shouldRefreshToken } from "../utils/utils";
import { useCurrentUser } from "./CurrentUserContext";

export const CurrentUserIsLibrarianContext = createContext();
export const SetCurrentUserIsLibrarianContext = createContext();

export const useCurrentUserIsLibrarian = () => useContext(CurrentUserIsLibrarianContext);
export const useSetCurrentUserIsLibrarian = () => useContext(SetCurrentUserIsLibrarianContext);

export const CurrentUserIsLibrarianProvider = ({ children }) => {
  const [currentUserIsLibrarian, setCurrentUserIsLibrarian] = useState(null);
  const currentUser = useCurrentUser();

  const handleMount = async () => {
    try {
      if (currentUser?.is_staff === true) {
        setCurrentUserIsLibrarian(true);
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    handleMount();
  }, []);

  return (
    <CurrentUserIsLibrarianContext.Provider value={currentUserIsLibrarian}>
      <SetCurrentUserIsLibrarianContext.Provider value={setCurrentUserIsLibrarian}>
        {children}
      </SetCurrentUserIsLibrarianContext.Provider>
    </CurrentUserIsLibrarianContext.Provider>
  );
};