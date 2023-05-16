import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Octicon from "react-octicon";
import { useRecoilState } from "recoil";

import { getGistForUser, getPublicGists } from "../services/gistService";
import { gistListAtom } from "../recoil/atoms/gistListAtom";

const Search = () => {
  const [username, setUsername] = useState("");
  const [gistList, setGistList] = useRecoilState(gistListAtom);

  useEffect(() => {
    // Use Debouncing logic to halt the API call until the X amount of time passed between the last and current call
    const getGistList = setTimeout(async () => {
      if (username.length > 0) {
        const response = await getGistForUser(username);
        setGistList(response.data);
      } else {
        const response = await getPublicGists();
        setGistList(response.data);
      }
    }, 1000);

    // Cleaning up the pending API call
    return () => clearTimeout(getGistList);
  }, [username, setGistList]);

  return (
    <Wrapper>
      <InputBox>
        <Octicon name="search" />
        <Input
          type="text"
          autoComplete="false"
          name="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Search Gists for the username"
        />
      </InputBox>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 8px;
  background-color: #ffffff;
  font-size: 14px;
  line-height: 1.5;
  border-radius: 6px;
  margin: 0 16px;
`;

const InputBox = styled.div`
  border-radius: 4px;
  display: flex;
  width: 400px;
`;

const Input = styled.input`
  border: none;
  width: 100%;
  font-size: 16px;
  &:focus {
    outline: 0;
  }
`;

export default Search;
