import { fireEvent, render, screen } from '@testing-library/react';
import PostComment from '.';

describe('Teste para o componente PostComment', () => {
    it('Deve renderizar o componente corretamente', () => {
        render(<PostComment/>);
        expect(screen.getByText('Comentar')).toBeInTheDocument();
    });
    test('teste para renderização de 2 comentarios', ()=>{
        render(<PostComment/>);

        const botao = screen.getByTestId('comentar');
        const textArea = screen.getByTestId('textarea');

        fireEvent.change(textArea, { target: { value: 'teste' } });
        fireEvent.click(botao);

        fireEvent.change(textArea, { target: { value: 'teste2' } });
        fireEvent.click(botao);

        expect(screen.getByText('teste')).toBeInTheDocument();
        expect(screen.getByText('teste2')).toBeInTheDocument();
        
    })
});