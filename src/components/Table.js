import React from 'react';
import Sdata from '../components/Sdata';

const Table = () => {
    return (
        <>
            <div className="py-3">
                <div className="table text-center">
                    <table>
                        <thead>
                            <th>#</th>
                            <th>Platform</th>
                            <th>Last Traded Price</th>
                            <th>Buy / Sell Price</th>
                            <th>Difference</th>
                            <th>Savings</th>
                        </thead>
                        <tbody>
                            {
                                Sdata.map((val, ind) => {
                                    return (
                                        <>
                                            <tr key={ind}>
                                                <td>
                                                    {val.id}
                                                </td>
                                                <td>
                                                    {val.platform}
                                                </td>
                                                <td>
                                                    {val.tradeprize}
                                                </td>
                                                <td>
                                                    {val.buysell}
                                                </td>
                                                <td>
                                                    {val.differen}
                                                </td>
                                                <td>
                                                    {val.saving}
                                                </td>
                                            </tr><br />
                                        </>
                                    )

                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>

        </>
    )
}
export default Table;