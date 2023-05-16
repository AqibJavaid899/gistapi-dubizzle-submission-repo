import styled from "styled-components";
import Octicon from "react-octicon";
import dayjs from "dayjs";

const Gist = ({ gist }) => {
  return (
    <Container>
      <Header>
        {/* Left Header Side */}
        <UserInfo href={gist?.owner?.repos_url} target="_blank">
          <Avatar alt="Avatar" src={gist?.owner?.avatar_url} />
          <Username>{gist?.owner?.login}</Username>
        </UserInfo>

        {/* Right Header Side */}
        <RepoLink>
          {/* Header Files Section */}
          <IconSection href={gist?.commits_url} target="_blank">
            <Icon>
              <Octicon name="chevron-left" />
              <Octicon name="chevron-right" />
            </Icon>
            <SectionCount>1 Files</SectionCount>
          </IconSection>

          {/* Header Forked Section */}
          <IconSection href={gist?.forks_url} target="_blank">
            <Icon>
              <Octicon name="repo-forked" />
            </Icon>
            <SectionCount>Forks</SectionCount>
          </IconSection>

          {/* Header Comments Section */}
          <IconSection href={gist?.comments_url} target="_blank">
            <Icon>
              <Octicon name="comment" />
            </Icon>
            <SectionCount>Comments</SectionCount>
          </IconSection>

          {/* Header Starred Section */}
          <IconSection href={gist?.owner?.starred_url} target="_blank">
            <Icon>
              <Octicon name="star" />
            </Icon>
            <SectionCount>Stars</SectionCount>
          </IconSection>
        </RepoLink>
      </Header>

      {/* Repo Date */}
      <GistDate>
        <CreatedAt>
          Created at: {dayjs(gist?.created_at).format("MM/DD/YYYY")}
        </CreatedAt>
        <UpdatedAt>
          Last updated: {dayjs(gist?.updated_at).format("MM/DD/YYYY")}
        </UpdatedAt>
      </GistDate>

      {/* Repo Description */}
      <GistDescription>{gist?.description}</GistDescription>

      {/* Files Icon */}
      <FilesContainer>
        {Object.entries(gist?.files).map(([key, value]) => (
          <FileSection key={key} href={value?.raw_url} target="_blank">
            <FileIcon>
              <Octicon name="file" />
            </FileIcon>
            <Filename>{key}</Filename>
          </FileSection>
        ))}
      </FilesContainer>
    </Container>
  );
};

const Container = styled.main`
  margin: 12px 0;
  padding-bottom: 12px;
  width: 100%;
  border-bottom: 1px solid lightgray;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const UserInfo = styled.a`
  display: flex;
  align-content: center;
  justify-content: center;
  gap: 8px;
  text-decoration: none;
`;

const Avatar = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 50%;
`;

const Username = styled.a`
  color: rgb(5, 99, 193);
  margin-top: 4px;
  font-size: 13px;
  cursor: pointer;
  font-weight: bold;
`;

const RepoLink = styled.div`
  display: flex;
  align-content: center;
  justify-content: space-between;
  gap: 16px;
`;

const IconSection = styled.a`
  display: flex;
  align-items: center;
  gap: 4px;
  color: rgb(5, 99, 193);
  cursor: pointer;
  text-decoration: none;
`;

const Icon = styled.div`
  display: flex;
  align-content: center;
  cursor: pointer;
`;

const SectionCount = styled.div`
  font-weight: bold;
  font-size: 13px;
`;

const GistDate = styled.div`
  display: flex;
  align-content: center;
  gap: 12px;
  margin: 8px 0px;
`;

const CreatedAt = styled.span`
  font-size: 13px;
  font-weight: bold;
`;

const UpdatedAt = styled.span`
  font-size: 13px;
  font-weight: bold;
`;

const GistDescription = styled.div`
  margin-top: 12px;
  font-size: 16px;
  font-weight: bold;
  letter-spacing: 0.2px;
`;

const FilesContainer = styled.div`
  margin: 12px 16px 32px 16px;
  display: flex;
  align-content: center;
  justify-content: flex-start;
  gap: 12px;
  cursor: pointer;
  flex-wrap: wrap;
`;
const FileSection = styled.a`
  display: flex;
  align-content: center;
  gap: 8px;
  color: rgb(5, 99, 193);
  text-decoration: none;
`;

const FileIcon = styled.div``;
const Filename = styled.span``;

export default Gist;
