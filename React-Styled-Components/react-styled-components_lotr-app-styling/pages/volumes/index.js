import Link from "next/link";
import { introduction, volumes } from "../../lib/data";
import Image from "next/image";
import styled from "styled-components";

export default function Volumes() {
  return (
    <>
      <h1>The Lord of the Rings</h1>
      <p>{introduction}</p>
      <h2>All Volumes</h2>
      <WrappedList>
        {volumes.map((volume) => (
          <ListElement key={volume.id}>
            <VolumeImage
              src={volume.cover}
              alt={`Cover image of ${volume.title}`}
              width={140}
              height={230}
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
  justify-content: space-evenly;
`;

const ListElement = styled.li`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  max-width: 140px;
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
`;
