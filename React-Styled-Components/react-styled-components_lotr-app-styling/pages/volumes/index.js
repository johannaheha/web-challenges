import Link from "next/link";
import { introduction, volumes } from "../../lib/data";
import Image from "next/image";
import styled from "styled-components";

export default function Volumes() {
  return (
    <>
      <StyledHeader>The Lord of the Rings</StyledHeader>
      <StyledIntro>{introduction}</StyledIntro>
      <h2>All Volumes</h2>
      <WrappedList>
        {volumes.map((volume) => (
          <ListElement key={volume.id}>
            <VolumeImage
              src={volume.cover}
              alt={`Cover image of ${volume.title}`}
              width={84}
              height={138}
            />
            <TitleLink href={`/volumes/${volume.slug}`}>
              {volume.title}
            </TitleLink>
          </ListElement>
        ))}
      </WrappedList>
    </>
  );
}

const WrappedList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-between;
  padding: 0;
`;

const ListElement = styled.li`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  width: 84px;
  gap: 20px;
`;

const VolumeImage = styled(Image)`
  box-shadow: var(--box-shadow-book);

  &:hover {
    box-shadow: var(--box-shadow-book--hover);
  }
`;
const TitleLink = styled(Link)`
  text-decoration: none;
  font-size: 12px;
`;
const StyledHeader = styled.h1`
  font-size: 45px;
  margin: 0;
`;

const StyledIntro = styled.p`
  margin-bottom: 50px;
`;
