interface AlunoCardProps {
  nome: string;
  idade: number;
  objetivo: string;
}

function AlunoCard({ nome, idade, objetivo }: AlunoCardProps) {
  return (
    <div>
      <h3>{nome}</h3>
      <p>Idade: {idade} anos</p>
      <p>Objetivo: {objetivo}</p>
    </div>
  );
}

export default AlunoCard;
