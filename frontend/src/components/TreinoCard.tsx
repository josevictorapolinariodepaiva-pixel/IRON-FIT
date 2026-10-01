interface TreinoCardProps {
  nome: string;
  nivel: string;
  duracao: string;
}

function TreinoCard({ nome, nivel, duracao }: TreinoCardProps) {
  return (
    <div>
      <h3>{nome}</h3>
      <p>Nível: {nivel}</p>
      <p>Duração: {duracao}</p>
    </div>
  );
}

export default TreinoCard;
