import './styles/theme.css';
import './styles/global.css';
import { Heading } from './components/Heading';

export function App() {
  return (
    <>
      <Heading attr={123} attr2='String'>
        Olá mundo 1
      </Heading>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, autem
        earum vitae explicabo ipsum consequatur voluptatum labore, architecto
        ducimus aut corrupti, incidunt tenetur eveniet facilis aliquid itaque
        quia saepe deleniti.
      </p>
    </>
  );
}
