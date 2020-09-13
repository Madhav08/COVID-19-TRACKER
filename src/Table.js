import React from 'react'
import numeral from "numeral"
import './Table.css'

function Table(prop) {
    console.log("Total countries",prop.countries)
    return (
        <div className="table">
            {prop.countries.map(({country, cases}) => (
                <tr>
                    <td>{country}</td>
                    <strong><td>{numeral(cases).format(',')}</td></strong>
                </tr>
            ))}
        </div>
    )
}

export default Table
