import { RiStarSFill, RiStarSLine } from "react-icons/ri";
import { Container } from "./styles";

interface StarsProps {
  rating: number,
  size?: 'sm' | 'md'
}

function handleStarsArray(rating: number): string[] {
  const stars: string[] = [];
  for (let i = 1; i <= 5; i++) {
    if (i <= rating) {
      stars.push('filled-star');
    } else {
      stars.push("outline-star");
    }
  }
  return stars as string[];
}

export function Stars({ 
  rating,
  size = 'sm'
}: StarsProps) {
  const stars = handleStarsArray(rating);
  
  return(
    <Container $size={size}>
      {stars.map((star, index) => star === 'filled-star' ? (
        <RiStarSFill key={`filled-stars-${index}`} />
      ): (
        <RiStarSLine key={`outline-stars-${index}`} />
      ))}
    </Container>
  )
}