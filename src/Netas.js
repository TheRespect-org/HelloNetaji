import React from 'react';
import axios from 'axios';

let netas = [], allNetas = [];

export default class Netas extends React.Component {

    async getNetas() {
        try {
            debugger

            const response = await axios.get(`//hellonetaji.therespect.org/api/politicians`);

            if (response.status === 200) {
                /* Map the response to IShariahStocks */
                netas = response.data;
                this.setState({ netas });
            }

        } catch (ex) {
            console.log(ex);
            this.setState({ error: 'An error occured' });
        }
    }

    componentDidMount() {
        this.getNetas();
    }

    filterNetas(value) {
        value = value.toUpperCase();
        let filteredNetas = allNetas.filter((neta) => {
            return neta.ACName.includes(value);
        });
        this.setState({ netas: filteredNetas });
    }

    render() {
        return (
            <div className="row mt-4">
                <div className="col-sm-1"></div>

                <div className="col-sm-12">
                    <div>
                        <div className="input-group">
                            <input type="text" onInput={(e) => {
                                this.filterNetas(e.target.value);
                            }
                            } className="form-control" placeholder="search for your neta here" name="search" />
                            <div className="input-group-btn">
                                <button className="btn btn-default" type="submit"><i className="fas fa-search"></i></button>
                            </div>
                        </div>

                        {this.netas && this.netas.map((stock, i) =>

                            <div key={`${stock.symbol}-${stock.exchange}`} className='mt-3'>
                                <div className="row">
                                    <div className="col-md-12">
                                        <div data-toggle="collapse" data-target={`#collapse${stock.symbol}-${stock.exchange}`} aria-expanded="false" aria-controls={`#collapse${stock.symbol}-${stock.exchange}`}>
                                            <label className="font-weight-bold">
                                                {this.getStockDirection(stock)} {stock.symbol}
                                            </label>
                                            <small> <sup className='text-muted'>
                                                {stock.exchange}
                                            </sup>
                                            </small>

                                            <small className='ml-3'>₹{stock.lastTradePrice} ({Math.sign(stock.change) >= 0 ? +stock.change : stock.change} / {stock.percentChange}% )</small>
                                            <button className='ml-3 btn btn-primary btn-sm' id={`details-btn-${stock.symbol}-${stock.exchange}`}> details </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="stock-details collapse mt-3" id={`collapse${stock.symbol}-${stock.exchange}`}>
                                    <div className="row">
                                        <div className="col-md-12 border">
                                            <div id={`chart${stock.symbol}-${stock.exchange}`}></div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        )}
                    </div>

                </div>
                <div className="col-sm-1"></div>
            </div>
        );
    }

}
