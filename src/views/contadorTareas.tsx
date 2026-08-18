import type { ContadorTareasProps } from '../interfaces/Contador'

const ContadorTareas = ({
  contador,
  incrementar,
  decrementar
}: ContadorTareasProps) => {
  return (
    <section
      style={{
        textAlign: 'center',
        margin: '2rem auto',
        padding: '1.5rem',
        maxWidth: '400px',
        backgroundColor: '#f0f4f8',
        borderRadius: '8px'
      }}
    >
      <h2>Contador de tareas</h2>

      <p
        style={{
          fontSize: '2rem',
          fontWeight: 'bold',
          color: '#1C6EA4',
          margin: '1rem 0'
        }}
      >
        {contador}
      </p>

      <button
        onClick={incrementar}
        style={{
          backgroundColor: '#4299e1',
          color: '#ffffff',
          border: 'none',
          borderRadius: '0.375rem',
          padding: '0.75rem 1rem',
          marginRight: '0.5rem',
          cursor: 'pointer'
        }}
      >
        Incrementar contador
      </button>

      <button
        onClick={decrementar}
        style={{
          backgroundColor: '#e53e3e',
          color: '#ffffff',
          border: 'none',
          borderRadius: '0.375rem',
          padding: '0.75rem 1rem',
          cursor: 'pointer'
        }}
      >
        Decrementar contador
      </button>
    </section>
  )
}

export default ContadorTareas
