import React, { useState, useEffect } from 'react';
import api from './api';
import Header from './header';
import { Container, Table, TableRow, TableCell } from '@material-ui/core';
import './style.css';

function App() {

    const [lista, setLista] = useState([]); // imutabilidade

    useEffect(() => {
        api.get('/tarefa').then((response) => { 
            const itens = response.data;
            setLista(itens);
        })
     }, [])
    

    return (
        <>
        <Header />
        <Container maxWidth="lg" className="container"> 
            <Table>
                {lista.map(item => (
                    <TableRow key={item.id}>
                        <TableCell>{item.id}</TableCell>
                        <TableCell>{item.name}</TableCell>
                        <TableCell>
                            <input type="checkbox" checked={item.done}/>
                        </TableCell>
                    </TableRow>
                ))}
            </Table>
        </Container>
        </>
    );
}

export default App;
