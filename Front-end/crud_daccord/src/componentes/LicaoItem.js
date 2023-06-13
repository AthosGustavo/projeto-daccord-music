import React, { useState } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';


const LicaoItem = ({ licao, editarLicao, excluirLicao, verLicao }) => {
    const [editarLicaoAberto, setEditarLicaoAberto] = useState(false);
    const [licaoEditada, setLicaoEditada] = useState({});
    

    const btnEditarLicao = () => {
        setEditarLicaoAberto(true);
        setLicaoEditada(licao);
    };

    const btnSalvarEditarLicao = (event) => {
        event.preventDefault();
        editarLicao(licaoEditada.id, licaoEditada);
        setEditarLicaoAberto(false);
        setLicaoEditada({});
    }

    const atualizaValorInputEdicao = (event) => {
        const { name, value } = event.target;
        setLicaoEditada((estadoAntigo) => ({ ...estadoAntigo, [name]: value }));
    };

   


    return (
        
        <tr key={licao.id}>
            
            <td>{licao.id}</td>
            <td>{licao.autor}</td>
            <td>{licao.titulo}</td>
            <td>{licao.dificuldade}</td>
            <td style={{ paddingLeft:'15px'}}>
                <Button variant="primary" size="sm" onClick={() => verLicao(licao.id)}>
                    Visualizar
                </Button>
                <Button variant="warning" size="sm" onClick={btnEditarLicao} style={{ margin: '0px 10px' }}>
                    Editar
                </Button>
                <Button variant="danger" size="sm" onClick={() => excluirLicao(licao.id)}>
                    Excluir
                </Button>
            </td>

            <Modal show={editarLicaoAberto} onHide={() => setEditarLicaoAberto(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Editar Lição</Modal.Title>
                </Modal.Header>
                <Form onSubmit={btnSalvarEditarLicao}>
                    <Modal.Body>
                        <Form.Group controlId="formName">
                            <Form.Label>Autor:</Form.Label>
                            <Form.Control
                                type="text"
                                name="autor"
                                value={licaoEditada.autor || ''}
                                onChange={atualizaValorInputEdicao}
                            />
                        </Form.Group>

                        <Form.Group controlId="formName">
                            <Form.Label>Título:</Form.Label>
                            <Form.Control
                                type="text"
                                name="titulo"
                                value={licaoEditada.titulo || ''}
                                onChange={atualizaValorInputEdicao}
                            />
                        </Form.Group>

                        <Form.Select aria-label="Default select example" className='mt-2' name="dificuldade" value={licaoEditada.dificuldade || ''} onChange={atualizaValorInputEdicao}>
                            <option value="">Nível de dificuldade</option>
                            <option value="Fácil">Fácil</option>
                            <option value="Médio">Médio</option>
                            <option value="Difícil">Difícil</option>
                        </Form.Select>

                        <Form.Group className="mt-2">
                            <Form.Label>Descrição</Form.Label>
                            <Form.Control
                                as="textarea"
                                rows={3}
                                name="descricao"
                                value={licaoEditada.descricao || ''}
                                onChange={atualizaValorInputEdicao}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Introdução</Form.Label>
                            <Form.Control
                                as="textarea"
                                rows={3}
                                name="introducao"
                                value={licaoEditada.introducao || ''}
                                onChange={atualizaValorInputEdicao}
                            />
                        </Form.Group>

                        

                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="danger" onClick={() => setEditarLicaoAberto(false)}>
                            Fechar
                        </Button>
                        <Button variant="success" type="submit">
                            Salvar
                        </Button>
                    </Modal.Footer>
                </Form>
            </Modal>
        </tr>
        
    )
}
export default LicaoItem;