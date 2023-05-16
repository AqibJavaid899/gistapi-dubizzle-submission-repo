import React, { useEffect } from "react";
import styled from "styled-components";
import { useRecoilState } from "recoil";

import Gist from "./Gist";
import Error from "./Error";
import { getPublicGists } from "../services/gistService";
import { gistListAtom } from "../recoil/atoms/gistListAtom";

const GistList = () => {
  const [gistList, setGistList] = useRecoilState(gistListAtom);

  useEffect(() => {
    // Function fetching Public Gist data from the Octokit Library
    const fetchData = async () => {
      const response = await getPublicGists();
      setGistList(response.data);
    };
    fetchData();
  }, [setGistList]);

  return (
    <Container>
      {/* Mapping through each Gist and passing it down to Gist component */}
      <Wrapper>
        {gistList?.length > 0 ? (
          gistList.map((gist, index) => <Gist key={index} gist={gist} />)
        ) : (
          <Error message="Error 404: Not Found!" />
        )}
      </Wrapper>
    </Container>
  );
};

const Container = styled.main`
  max-width: 800px;
  height: 100%;
  margin: 80px auto;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export default GistList;
