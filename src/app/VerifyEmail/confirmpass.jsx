import { useState } from "react";
import { confirmEmail } from "../Services/AuthService";
import { useLocation } from "react-router-dom";

export default function Verifyemail() {
    const location = useLocation();
    const initialEmail = location.state?.email || ''; // Caso não haja email no estado, inicializa com string vazia.
    const [email, setEmail] = useState(initialEmail); // Gerencia o estado do email
    const [code, setCode] = useState('');
    const [error, setError] = useState('');

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handleCodeChange = (e) => {
        setCode(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            // Chame sua função de confirmação passando o email e o código
            await confirmEmail(email, code);
            alert('Email confirmado com sucesso!');
        } catch (err) {
            setError('Falha ao confirmar o e-mail. Tente novamente.');
            console.error(err);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Digite o código de verificação</h2>
            <div>
                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={handleEmailChange}
                    placeholder="Digite seu email"
                    required
                />
            </div>
            <div>
                <label htmlFor="code">Código de verificação:</label>
                <input
                    type="text"
                    id="code"
                    value={code}
                    onChange={handleCodeChange}
                    placeholder="Código de verificação"
                    required
                />
            </div>
            {error && <div className="error">{error}</div>}
            <button type="submit">Confirmar E-mail</button>
        </form>
    );
};
