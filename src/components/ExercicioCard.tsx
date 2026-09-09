interface ExercicioCardProps {
  nome: string;
  grupoMuscular: string;
}

function ExercicioCard({ nome, grupoMuscular }: ExercicioCardProps) {
  return (
    <div>
      <h3>{nome}</h3>
      <p>Grupo muscular: {grupoMuscular}</p>
    </div>
  );
}

export default ExercicioCard;
