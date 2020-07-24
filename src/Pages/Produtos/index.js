import React, { Component } from 'react';
import CardProdutos from '../../Components/Cards';
import './styles.css';


class Produtos extends Component {
    constructor() {
        super();
        this.state = {}
    }

    render() {
        return(
            <>
            <div>
                <CardProdutos>
                </CardProdutos>
            </div>
            </>
        )
    }

}

export default Produtos;