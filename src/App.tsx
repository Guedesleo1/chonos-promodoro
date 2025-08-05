import './styles/theme.css';
import './styles/global.css';
import { Heading } from './components/Heading';
import { TimerIcon } from 'lucide-react';

export function App() {
  return (
    <>
      <Heading>
        Olá mundo 1{' '}
        <button>
          <TimerIcon />
        </button>
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
