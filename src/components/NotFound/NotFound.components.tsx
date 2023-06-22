import { NotFoundSection } from "./NotFound.styled";

interface messageProps {
  message: string;
}

const NotFound = ({ message }: messageProps) => {
  return (
    <NotFoundSection>
      <h3>{message}</h3>
    </NotFoundSection>
  );
};

export default NotFound;
