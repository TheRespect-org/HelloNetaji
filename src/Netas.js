import React from 'react';
import axios from 'axios';

let netas = [], allNetas = [];

export default class Netas extends React.Component {

    async getNetas() {
        try {

            const response = await axios.get(`//hellonetaji.therespect.org/api/politicians`);
            debugger

            if (response.status === 200) {
                /* Map the response to IShariahStocks */
                allNetas = netas = response.data;
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
        netas = filteredNetas;
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

                        {netas && netas.map((neta, i) =>

                            <div key={`${neta._id}-${neta.ACName}`} className='mt-3'>
                                <div className="row">
                                    <div className="col-md-12">
                                        <div data-toggle="collapse" data-target={`#collapse${neta._id}-${neta.ACName}`} aria-expanded="false" aria-controls={`#collapse${neta._id}-${neta.ACName}`}>
                                        {neta.No} <small> <sup className='text-muted'>
                                                {neta.ACName}
                                            </sup>
                                            </small>

                                            <small className='ml-3'>{neta['Sitting MLAs']} )</small>
                                        </div>
                                    </div>
                                </div>
                                <div className="stock-details collapse mt-3" id={`collapse${neta._id}-${neta.ACName}`}>
                                    <div className="row">
                                        <div className="col-md-12 border">
                                            <div id={`chart${neta._id}-${neta.ACName}`}></div>
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
