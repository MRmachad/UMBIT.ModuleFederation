import React from "react";

import "./index.css";
import { Pokemon } from "shared-types";

const PokemonListView = ({list}: {list: Pokemon[]}) => (
    <table>
        {list.map(({name, type}) => (
            <tr>
                <td style={{backgroundColor: 'red'}}><strong>{name}</strong></td>
                <td>{type}</td>
            </tr>
        ))}
    </table>
)

export default PokemonListView