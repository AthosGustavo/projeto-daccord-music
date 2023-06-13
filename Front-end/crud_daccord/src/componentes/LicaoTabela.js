import React from 'react';
import { Container, Table } from 'react-bootstrap';

const LicaoTabela = (props) => {
    return (
        <Container>
            <div className='col-10 mx-auto d-block mt-5'>
                <Table hover size="sm">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Autor</th>
                            <th>Título</th>
                            <th>Nível</th>
                            <th style={{ paddingLeft: '105px' }}>Ações</th>
                        </tr>
                    </thead>
                    <tbody>{props.children}</tbody>
                </Table>
            </div>
        </Container>
    )
}

export default LicaoTabela;
