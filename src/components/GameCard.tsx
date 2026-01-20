import type { Game } from "@/hooks/useGames";
import { Card, Image } from "@chakra-ui/react";

interface Props {
    game: Game;
}

const GameCard = ({game}: Props) => {
  return (
    <Card.Root borderRadius="10px" overflow="hidden">
      <Image
        fit="cover"
        src={game.image}
        alt={game.name}
        aspectRatio={16 / 9}
      />
      <Card.Body gap="2">
        <Card.Title>{game.name}</Card.Title>
      </Card.Body>
    </Card.Root>
  );
}

export default GameCard