import { Stars } from "../Stars";
import { Tag } from "../Tag";
import { Container } from "./styles";

interface Tag {
  id: number;
  name: string;
}

interface NoteProps {
  data: {
    title: string;
    rating: number;
    tags: Tag[];
    description: string;
  }
}

export function Note({ 
  data,
  ...rest 
}: NoteProps) {
  return(
    <Container {...rest}>
      <h1>{data.title}</h1>
      <Stars rating={data.rating} />
      <p>{data.description}</p>
      {data.tags && (
        <footer>
          {data.tags.map((tag)  => (
            <Tag key={tag.id}>{tag.name}</Tag>
          ))}
        </footer>
      )}
    </Container>
  )
}